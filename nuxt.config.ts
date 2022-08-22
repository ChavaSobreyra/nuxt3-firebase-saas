import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    baseURL: process.env.NUXT_BASE_URL ?? 'http://localhost:3001',
    mailchimpApiKey: process.env.NUXT_MAILCHIMP_API_KEY ?? '',
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY ?? '',
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
      firebaseDatabaseURL: process.env.NUXT_PUBLIC_FIREBASE_DATABASE_URL ?? '',
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID ?? '',
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '',
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '',
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID ?? '',
      firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? '',
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs-alt/google-fonts',

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: './tailwind.config.js',
    // ? https://tailwindcss.nuxtjs.org/tailwind/config/#referencing-in-the-application
    exposeConfig: true,
    viewer: true,
  },

  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
