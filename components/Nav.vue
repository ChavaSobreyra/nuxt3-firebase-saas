<template>
  <nav class="flex flex-wrap items-center justify-between bg-slate-500 p-6">
    <div class="mr-6 flex flex-shrink-0 items-center text-white">
      <span class="text-xl font-semibold tracking-tight">SaaS Starter</span>
    </div>

    <div class="block flex w-full w-auto flex-grow items-center">
      <div class="flex-grow text-sm">
        <NuxtLink to="/" class="mt-4 mr-4 mt-0 block inline-block text-slate-200 hover:text-white">
          Home
        </NuxtLink>
        <NuxtLink
          to="/account"
          class="mt-4 mr-4 mt-0 block inline-block text-slate-200 hover:text-white"
        >
          Account
        </NuxtLink>
        <button
          v-if="!currentUser"
          class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          @click="logIn"
        >
          Sign In
        </button>
        <template v-else>
          <img class="inline-block h-10 w-10 rounded-full" :src="currentUser.photoURL" alt="" />
          <button
            class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            @click="logOut"
          >
            Sign Out
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { signOut, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'

const { $firebaseAuth } = useNuxtApp()
const currentUser = ref()

function getCurrentUser() {
  $firebaseAuth.onAuthStateChanged(user => {
    currentUser.value = user
  })
}

if (process.client) getCurrentUser()

async function logIn() {
  await signInWithPopup($firebaseAuth, new GoogleAuthProvider())
  getCurrentUser()
}

async function logOut() {
  await signOut($firebaseAuth)
  getCurrentUser()
}
</script>
