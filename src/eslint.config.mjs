import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unicornPlugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

const commonPlugins = {
  import: importPlugin,
  unicorn: unicornPlugin,
  perfectionist: perfectionistPlugin,
};

const commonImportResolvers = {
  node: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  typescript: {
    alwaysTryTypes: true,
  },
};

const commonRules = {
  'import/no-unresolved': 'error',

  'perfectionist/sort-classes': 'off',
  'perfectionist/sort-objects': 'off',
  'perfectionist/sort-union-types': 'off',
  'perfectionist/sort-array-includes': 'off',
  'perfectionist/sort-interfaces': 'off',
  'perfectionist/sort-enums': 'off',
  'perfectionist/sort-object-types': 'off',
  'perfectionist/sort-modules': 'off',

  'unicorn/prefer-module': 'warn',
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

  'no-unused-expressions': 'off',
  'no-await-in-loop': 'off',
  'no-useless-constructor': 'off',
  'no-multi-spaces': 'off',
  'no-eq-null': 'off',
  'no-constant-condition': [
    'warn',
    {
      checkLoops: true,
    },
  ],

  'jsdoc/require-jsdoc': ['warn', {
    publicOnly: true,
  }],
  'jsdoc/require-param': 'warn',
  'jsdoc/require-returns': 'warn',
  'capitalized-comments': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'default-case': 'off',
  curly: 'off',
  quotes: ['error', 'single', { avoidEscape: true }],
  eqeqeq: ['error', 'smart'],
  'lines-between-class-members': [
    'error',
    'always',
    {
      exceptAfterSingleLine: true,
    },
  ],
  'object-curly-spacing': ['error', 'always'],
  semi: ['warn', 'always'],
  'max-params': ['warn', 7],
  indent: [
    'warn',
    2,
    {
      MemberExpression: 'off',
      SwitchCase: 1,
      offsetTernaryExpressions: true,
    },
  ],
  'max-depth': ['warn', 7],
  'padding-line-between-statements': 'off',
};

const commonJsRules = {
  // Import rules
  ...importPlugin.configs.recommended.rules,

  // Unicorn rules
  ...unicornPlugin.configs.recommended.rules,

  // Perfectionist rules
  ...perfectionistPlugin.configs['recommended-natural'].rules,

  // Custom rule overrides
  ...commonRules,
};

export default defineConfig([
  {
    ignores: ['dist', 'node_modules', '.vscode'],
  },
  // Base JavaScript recommended rules
  js.configs.recommended,

  // Prettier config (must be last to override formatting rules)
  prettierConfig,

  // JSDoc config
  jsdoc.configs['flat/recommended'],

  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        allowDefaultProject: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      ...commonPlugins,
    },
    rules: {
      // TypeScript specific rules
      ...typescript.configs.recommended.rules,
      ...typescript.configs['eslint-recommended'].rules,

      // Import rules
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,

      // Unicorn rules
      ...unicornPlugin.configs.recommended.rules,

      // Perfectionist rules
      ...perfectionistPlugin.configs['recommended-natural'].rules,

      ...jsdoc.configs['flat/recommended-typescript'].rules,

      // Custom rule overrides
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      ...commonRules,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': commonImportResolvers,
    },
  },

  // JavaScript files configuration
  {
    files: ['**/*.mjs'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      ...commonPlugins,
    },
    rules: {
      ...commonJsRules,
    },
    settings: {
      'import/resolver': commonImportResolvers,
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'commonjs',
      },
    },
    plugins: {
      ...commonPlugins,
    },
    rules: {
      ...commonJsRules,
    },
    settings: {
      'import/resolver': commonImportResolvers,
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'commonjs',
      },
    },
    plugins: {
      ...commonPlugins,
    },
    rules: {
      ...commonJsRules,
    },
    settings: {
      'import/resolver': commonImportResolvers,
    },
  },
]);
