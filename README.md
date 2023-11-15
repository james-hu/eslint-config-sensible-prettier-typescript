# eslint-config-sensible-prettier-typescript

Sensible default eslint rules and prettier rules for Typescript projects

## Install

```
npm i -D eslint-config-sensible-prettier-typescript
```

## Usage

In your `.eslintrc.json`:

```json
{
    "extends": "sensible-prettier-typescript"
}
```

In your `prettier.config.js`:

```javascript
import config from "eslint-config-sensible-prettier-typescript/prettier.config";

export default {
  ...config,
  // your overrides
};
```
