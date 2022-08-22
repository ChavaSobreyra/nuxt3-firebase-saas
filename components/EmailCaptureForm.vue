<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="mt-1">
      <input
        v-model="email"
        type="email"
        name="email"
        :disabled="pending"
        class="float-left mt-1 block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        placeholder="Your work email"
      />
      <button
        :disabled="pending"
        class="float-left rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        @click="postSubscribe"
      >
        subscribe
      </button>
    </div>
    <div v-if="error" class="text-red-600">Error.</div>
    <div v-else-if="data" class="text-green-600">Subscribed!</div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const data = ref()
const pending = ref()
const error = ref()

async function postSubscribe() {
  if (!email) return
  pending.value = true
  try {
    const result = await useFetch('/api/subscribe', {
      method: 'post',
      body: { email: email.value.trim() },
    })
    data.value = result.data
  } catch (e) {
    error.value = e
  }
  pending.value = false
}
</script>
