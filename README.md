# Nuxt3 SaaS Starter

Includes

- eslint
- prettier
- jest (for unit tests)
- vitest (for component tests)
- cypress (for acceptance tests)
- github actions
  - pr labeler
  - release drafter
  - build, lint, test

## Note

You must manually create the first release as v1, the release drafter will increment after that.

In order for the labeler and release drafter to work, you must setup labels in Github for:

- feature
- bug
- chore
- refactor

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
