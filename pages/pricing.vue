<template>
  <div>pricing page</div>
  <pre>{{ products }}</pre>
</template>

<script setup>
import { getFirestore, query, where, getDocs, collection } from 'firebase/firestore'

const products = ref([])

async function fetchProducts() {
  const db = getFirestore()

  const productsRef = collection(db, 'products')
  const productsQuery = query(productsRef, where('active', '==', true))
  const productsQuerySnap = await getDocs(productsQuery)

  productsQuerySnap.forEach(async doc => {
    const pricesRef = collection(db, 'products', doc.id, 'prices')
    const pricesQuerySnap = await getDocs(pricesRef)

    products.value.push({
      id: doc.id,
      ...doc.data(),
      prices: pricesQuerySnap.docs.map(price => ({ id: price.id, ...price.data() })),
    })
  })
}

fetchProducts()
</script>
