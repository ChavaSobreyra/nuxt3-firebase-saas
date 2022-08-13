<template>
  <div>
    <div>Subscription Plans</div>
    <template v-if="isLoading">
      <div
        class="spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4 text-blue-600"
        role="status"
      ></div>
    </template>
    <template v-else>
      <div v-for="product in products" :key="product.id">
        {{ product.name }}
        <div v-for="price in product.prices" :key="price.id">
          ${{ price.unit_amount / 100 }} / {{ price.interval }}
          <button
            class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            @click="() => checkout(price)"
          >
            Select Price
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import {
  getFirestore,
  query,
  where,
  getDocs,
  collection,
  onSnapshot,
  addDoc,
} from 'firebase/firestore'

const { $firebaseAuth } = useNuxtApp()
const products = ref([])
const isLoading = ref(false)

async function fetchProducts() {
  const db = getFirestore()

  const productsQuerySnapshot = await getDocs(
    query(collection(db, 'products'), where('active', '==', true)),
  )

  productsQuerySnapshot.forEach(async doc => {
    const pricesQuerySnapshot = await getDocs(collection(db, 'products', doc.id, 'prices'))

    products.value.push({
      id: doc.id,
      ...doc.data(),
      prices: pricesQuerySnapshot.docs.map(price => ({ id: price.id, ...price.data() })),
    })
  })
}

if (process.client) fetchProducts()

async function checkout(price) {
  isLoading.value = true
  const db = getFirestore()

  const docRef = await addDoc(
    collection(db, 'customers', $firebaseAuth.currentUser.uid, 'checkout_sessions'),
    {
      price: price.id,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    },
  )

  onSnapshot(docRef, snapshot => {
    const { error, url } = snapshot.data()
    // @TODO: cloud fn should be adding checkout link here
    console.log(snapshot.data())

    if (error) {
      console.error(error)
      isLoading.value = false
    } else if (url) {
      window.location.assign(url)
    } else {
      isLoading.value = false
    }
  })
}
</script>
