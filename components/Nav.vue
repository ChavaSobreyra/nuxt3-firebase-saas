<template>
  <nav class="flex flex-wrap items-center justify-between bg-slate-700 p-6">
    <div class="mr-6 flex flex-shrink-0 items-center text-white">
      <span class="text-xl font-semibold tracking-tight">SaaS Starter</span>
    </div>

    <div class="flex w-auto flex-grow items-center">
      <div class="flex-grow text-sm text-slate-300">
        <NuxtLink
          to="/"
          class="mt-4 mr-4 inline-block hover:text-white"
          exact-active-class="text-white"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/account"
          class="mt-4 mr-4 inline-block hover:text-white"
          exact-active-class="text-white"
        >
          Account
        </NuxtLink>
        <NuxtLink
          to="/pricing"
          class="mt-4 mr-4 inline-block hover:text-white"
          exact-active-class="text-white"
        >
          Pricing
        </NuxtLink>
        <button
          v-if="!currentUser"
          class="float-right rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          @click="logIn"
        >
          Sign In
        </button>
        <template v-else>
          <img
            class="inline h-10 w-10 rounded-full"
            :src="currentUser.photoURL"
            alt="User Avatar"
          />
          <button
            class="float-right rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
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
