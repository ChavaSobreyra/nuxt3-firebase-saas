<template>
  <div>
    <form v-if="!result" :disabled="pending" @submit.prevent="postSubscribe">
      <input
        v-model="email"
        type="email"
        class="float-left mt-1 block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        placeholder="Your work email"
      />
      <button
        type="submit"
        class="float-left rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        @click="postSubscribe"
      >
        subscribe
      </button>
    </form>
    <div v-if="error" class="text-red-600">Error.</div>
    <div v-else-if="result" class="text-green-600">Subscribed!</div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const result = ref(null)
const pending = ref(false)
const error = ref(false)

async function postSubscribe() {
  if (!email) return
  pending.value = true

  try {
    const res = await $fetch('/api/subscribe', {
      method: 'put',
      body: { email: email.value.trim() },
    })
    result.value = res
  } catch (e) {
    error.value = true
  }
}
</script>
