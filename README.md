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
const { defineConfig } = require('eslint/config');
const { eslintConfig } = require('eslint-config-sensible-prettier-typescript');

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
import { defineConfig } from 'eslint/config';
import { eslintConfig } from 'eslint-config-sensible-prettier-typescript';

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

