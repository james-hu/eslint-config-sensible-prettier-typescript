const { defineConfig } = require('eslint/config');

const { eslintConfig } = require('../dist');

module.exports = defineConfig([
  ...eslintConfig(),
  // Add your customizations here
  {
    rules: {
      'no-console': 'warn',
      // Your custom rules...
    },
  },
]);
