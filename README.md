# eslint-config-sensible-prettier-typescript

Sensible default eslint rules and prettier rules for Typescript projects

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

In your `.eslintrc.js`:
```javascript
/* eslint-disable unicorn/prefer-module, node/no-extraneous-require, unicorn/prefer-module */

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'sensible-prettier-typescript',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  // place your customisation here
};
```

Or in your `.eslintrc.json`:

```json
{
    "extends": "sensible-prettier-typescript"
}
```

And in your `prettier.config.js` or `.prettierrc.js`:

```javascript
const config = require('eslint-config-sensible-prettier-typescript/prettier.config');
module.exports = {
  ...config,
  // place your customisation here
};
```
