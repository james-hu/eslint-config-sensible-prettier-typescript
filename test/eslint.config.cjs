const { defineConfig } = require('eslint/config');

const { buildESLintConfig, customiseESLintConfig } = require('../dist');

const config = buildESLintConfig({ defaultSourceType: 'module' });
customiseESLintConfig(
  config,
  (cfg) => [cfg.files].flat().some((f) => typeof f === 'string' && f.endsWith('.ts')),
  (cfg) => {
    cfg.languageOptions.parserOptions.sourceType = 'commonjs';
  },
);

module.exports = defineConfig([
  ...config,
  // Add your customizations here
  {
    rules: {
      'no-console': 'warn',
      // Your custom rules...
    },
  },
]);
