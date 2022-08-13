# Nuxt3 SaaS Starter

## Includes

- Google Sign In
- [Run Payments with Stripe](https://firebase.google.com/products/extensions/stripe-firestore-stripe-payments)
- eslint
- prettier
- jest (for unit tests)
- vitest (for component tests)
- cypress (for acceptance tests)
- github actions
  - pr labeler
  - release drafter
  - build, lint, test

## Prerequisites

- [Firebase Stripe Extension](https://firebase.google.com/products/extensions/stripe-firestore-stripe-payments)
- Firebase Google Auth

You must manually create the first release as v1 for the release drafter (the release drafter will increment after that)

In order for the labeler and release drafter to work, you must setup labels in Github for:

- feature
- bug
- chore
- refactor
