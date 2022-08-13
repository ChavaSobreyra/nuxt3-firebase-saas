import { getApps, initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    databaseURL: config.firebaseDatabaseURL,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    measurementId: config.firebaseMeasurementId,
  }

  const apps = getApps()
  const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0]
  const firebaseAuth = getAuth(firebaseApp)

  const getCurrentUser = () =>
    new Promise((resolve, reject) => {
      // @TODO: understand this
      const unsub = onAuthStateChanged(
        firebaseAuth,
        user => {
          unsub()
          resolve(user)
        },
        reject,
      )
    })
  // async function getCurrentUser() {
  //   const unsub = onAuthStateChanged(firebaseAuth, user => {
  //     unsub()
  //     return user
  //   })
  // }

  return {
    provide: {
      firebaseApp,
      firebaseAuth,
      getCurrentUser,
    },
  }
})
