module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['**/static/*', '**/nuxt.config.js'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    // prettier must come last to avoid conflicts with eslint-plugin-vue
    // https://eslint.vuejs.org/user-guide/#conflict-with-prettier
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['jest', 'import', 'no-only-tests'],
  // add your custom rules here
  rules: {
    'no-only-tests/no-only-tests': 'error',
    'no-console': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    // It's not clear why this is needed but eslint fails without it set
    // plugin:vue/vue3-recommended does not include this rule
    'vue/no-multiple-template-root': 'off',
    'arrow-parens': [2, 'as-needed'],
  },
}
