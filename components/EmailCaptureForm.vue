<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="mt-1">
      <input
        v-model="email"
        type="email"
        name="email"
        class="float-left mt-1 block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        placeholder="Your work email"
      />
      <button
        class="float-left rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        @click="postSubscribe"
      >
        subscribe
      </button>
    </div>
  </div>
</template>

<script setup>
const email = ref('')
async function postSubscribe() {
  console.log('postSubscribe')
  if (!email) return
  console.log({ email })
  await useFetch('/api/subscribe', {
    method: 'post',
    body: { email: email.value },
  })
}
</script>
