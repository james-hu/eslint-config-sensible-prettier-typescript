# eslint-config-sensible-prettier-typescript

Sensible default ESLint rules and Prettier rules for TypeScript projects with ESLint 9 flat config support

## Install

```sh
npm i -D eslint-config-sensible-prettier-typescript
```

Or you can get it installed through [handy-common-utils/dev-dependencies](https://github.com/handy-common-utils/dev-dependencies):

```sh
npm i -D @handy-common-utils/dev-dependencies-mocha
```

```sh
npm i -D @handy-common-utils/dev-dependencies-jest
```

## Usage

This package provides **configuration builder functions** that return ESLint 9 flat config objects and Prettier configurations. These can be imported and customized as needed.

### ESLint Configuration

#### CommonJS

Create an `eslint.config.js` file:

```javascript
const { eslintConfig } = require('eslint-config-sensible-prettier-typescript');
const { defineConfig } = require('eslint/config');

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
```

#### ES Modules

Create an `eslint.config.js` file:

```javascript
import { eslintConfig } from 'eslint-config-sensible-prettier-typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...eslintConfig(),
  // Add your customizations here
  {
    rules: {
      'no-console': 'warn',
      // Your custom rules...
    },
  },
]);
```

### Prettier Configuration

#### CommonJS

```javascript
// prettier.config.js
const { prettierConfig } = require('eslint-config-sensible-prettier-typescript');

module.exports = {
  ...prettierConfig(),
  // Override or extend the default config
  printWidth: 120,
  tabWidth: 4,
};
```

#### ES Modules

```javascript
// prettier.config.js
import { prettierConfig } from 'eslint-config-sensible-prettier-typescript';

export default {
  ...prettierConfig(),
  // Override or extend the default config
  printWidth: 120,
  tabWidth: 4,
};
```

# Customizing ESLint Configurations

## `customiseESLintConfig`

The `customiseESLintConfig` function allows you to programmatically modify specific configuration objects within an ESLint flat config array. This is useful for applying project-specific customizations to certain file types or rule sets.

### Usage

```javascript
const { buildESLintConfig, customiseESLintConfig } = require('./src/eslint.config.cjs');

const configArray = buildESLintConfig({ defaultSourceType: 'module' });

// Example: Change all TypeScript configs to use 'commonjs' sourceType
customiseESLintConfig(
  configArray,
  (cfg) => Array.isArray(cfg.files) && cfg.files.some(f => typeof f === 'string' && f.endsWith('.ts')),
  (cfg) => { cfg.languageOptions.parserOptions.sourceType = 'commonjs'; }
);

// Export the customized config
module.exports = configArray;
```

### Parameters

- **configArray**: The ESLint configuration array to modify.
- **selector**: A function that receives each config object and returns `true` for configs you want to modify.
- **modifier**: A function that receives each selected config object and applies your changes.

### Example: Disable a rule for all `.tsx` files

```javascript
customiseESLintConfig(
  configArray,
  (cfg) => Array.isArray(cfg.files) && cfg.files.some(f => typeof f === 'string' && f.endsWith('.tsx')),
  (cfg) => { cfg.rules['no-console'] = 'off'; }
);
```

### When to use

- To override rules for specific file types.
- To change parser options for certain configs.
- To apply project-specific tweaks without
