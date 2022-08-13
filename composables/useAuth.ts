// https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

import { useAuthUser } from './useAuthUser'

export function initUser() {
  const auth = getAuth()
  const authUser = useAuthUser()
  authUser.value = auth.currentUser

  const userCookie = useCookie('userCookie')

  onAuthStateChanged(auth, user => {
    authUser.value = user

    // @ts-ignore
    userCookie.value = user // ignore error because nuxt will serialize to json
  })
}

export async function logIn() {
  await signInWithPopup(getAuth(), new GoogleAuthProvider())
}

export async function logOut() {
  await signOut(getAuth())
}
