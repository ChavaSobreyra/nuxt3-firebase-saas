<template>
  <div>sign in</div>
  <button @click="signIn">Sign in with Google</button>
</template>

<script setup>
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'

const { $firebaseAuth } = useNuxtApp()
const router = useRouter()

function signIn() {
  const provider = new GoogleAuthProvider()

  signInWithPopup($firebaseAuth, provider).then(() => {
    router.push('account')
  })
}
</script>
