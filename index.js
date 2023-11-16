module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:perfectionist/recommended-natural',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 'error',
    'node/no-missing-import': 'off',
    'no-unused-expressions': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-union-types': 'off',
    'perfectionist/sort-array-includes': 'off',
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-object-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'valid-jsdoc': ['warn', { requireParamType: false, requireReturnType: false }],
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 'off',
    'no-multi-spaces': 'off',
    'node/shebang': 'off',
    curly: 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-eq-null': 'off',
    eqeqeq: ['error', 'smart'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    semi: ['error', 'always'],
    'max-params': ['warn', 7],
    indent: [
      'error',
      2,
      {
        MemberExpression: 'off',
        SwitchCase: 1,
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-for-loop': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'node/no-extraneous-import': 'off',
    'no-await-in-loop': 'off',
    'no-useless-constructor': 'off',
    'max-depth': 'off',
    'padding-line-between-statements': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
