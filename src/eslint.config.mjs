import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unicornPlugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import merge from 'lodash.merge';

function commonPlugins() {
  return {
    import: importPlugin,
    unicorn: unicornPlugin,
    perfectionist: perfectionistPlugin,
  };
}

function commonImportResolvers() {
  return {
    typescript: {
      alwaysTryTypes: true,
    },
    node: {
      extensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx'],
    },
  };
}

function commonRules() {
  return {
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

    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: true,
      },
    ],
    'jsdoc/require-param': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/tag-lines': 'off',
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
}

function commonJsRules() {
  return {
    // Import rules
    ...importPlugin.configs.recommended.rules,

    // Unicorn rules
    ...unicornPlugin.configs.recommended.rules,

    // Perfectionist rules
    ...perfectionistPlugin.configs['recommended-natural'].rules,

    // Custom rule overrides
    ...commonRules(),
  };
}

/**
 * Builds a TypeScript-specific ESLint configuration object.
 *
 * This function creates a comprehensive TypeScript configuration that includes:
 * - TypeScript parser and plugin
 * - TypeScript-specific rules and recommendations
 * - Import/export rules with TypeScript support
 * - Code quality rules (unicorn, perfectionist, jsdoc)
 * - Custom rule overrides for TypeScript projects
 *
 * @param {string|string[]} files - File patterns to apply this configuration to
 * @param {import('eslint').Linter.Config} [languageOptions] - Additional language options to merge
 * @returns {import('eslint').Linter.Config} TypeScript ESLint configuration object
 */
export function buildTsConfig(files, languageOptions) {
  return {
    files,
    languageOptions: merge(
      {
        parser: typescriptParser,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          allowDefaultProject: true,
        },
        globals: languageOptions?.globals ?? globals.node, // Don't merge globals, use the ones provided by the user
      },
      languageOptions,
    ),
    plugins: {
      '@typescript-eslint': typescript,
      ...commonPlugins(),
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
      ...commonRules(),
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
      },
      'import/resolver': commonImportResolvers(),
    },
  };
}

/**
 * Builds a JavaScript-specific ESLint configuration object.
 *
 * This function creates a JavaScript configuration that includes:
 * - Import/export rules
 * - Code quality rules (unicorn, perfectionist)
 * - Common JavaScript linting rules
 * - Custom rule overrides
 *
 * @param {string|string[]} files - File patterns to apply this configuration to
 * @param {import('eslint').Linter.Config} [languageOptions] - Additional language options to merge
 * @returns {import('eslint').Linter.Config} JavaScript ESLint configuration object
 */
export function buildJsConfig(files, languageOptions) {
  return {
    files,
    languageOptions: merge(
      {
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        globals: languageOptions?.globals ?? globals.node, // Don't merge globals, use the ones provided by the user
      },
      languageOptions,
    ),
    plugins: {
      ...commonPlugins(),
    },
    rules: {
      ...commonJsRules(),
    },
    settings: {
      'import/resolver': commonImportResolvers(),
    },
  };
}

/**
 * Builds a complete ESLint 9 flat configuration array.
 *
 * This function returns a comprehensive ESLint configuration that includes:
 * - Global ignore patterns
 * - Base JavaScript recommended rules
 * - Prettier integration
 * - JSDoc rules
 * - TypeScript configurations for various file types
 * - JavaScript configurations for various file types
 * - Browser and Node.js globals where appropriate
 *
 * @param {object} options - Configuration options
 * @param {string} options.defaultSourceType - Default source type for TypeScript and JavaScript files that don't have source type indicated in the file name extension
 *
 * @returns {import('eslint').Linter.Config[]} Complete ESLint flat configuration array
 *
 * @example
 * ```javascript
 * // Use the complete configuration
 * const config = buildFullConfig();
 *
 * // Extend with custom rules
 * module.exports = [
 *   ...buildFullConfig(),
 *   { rules: { 'no-console': 'warn' } }
 * ];
 * ```
 */
export function buildESLintConfig(options) {
  const { defaultSourceType } = options;
  return defineConfig([
    {
      ignores: ['dist', 'node_modules', '.vscode'],
    },
    // Base JavaScript recommended rules
    js.configs.recommended,

    // Prettier config (must be last to override formatting rules)
    prettierConfig,

    // JSDoc config
    jsdoc.configs['flat/recommended'],

    // TypeScript files configurations
    buildTsConfig(['**/*.ts'], {
      parserOptions: {
        sourceType: defaultSourceType,
      },
    }),
    buildTsConfig(['**/*.tsx'], {
      parserOptions: {
        sourceType: defaultSourceType,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    }),
    buildTsConfig(['**/*.mts'], {
      parserOptions: {
        sourceType: 'module',
      },
    }),
    buildTsConfig(['**/*.cts'], {
      parserOptions: {
        sourceType: 'commonjs',
      },
    }),

    // JavaScript files configurations
    buildJsConfig(['**/*.js'], {
      parserOptions: {
        sourceType: defaultSourceType,
      },
    }),
    buildJsConfig(['**/*.mjs'], {
      parserOptions: {
        sourceType: 'module',
      },
    }),
    buildJsConfig(['**/*.cjs'], {
      parserOptions: {
        sourceType: 'commonjs',
      },
    }),
    buildJsConfig(['**/*.jsx'], {
      parserOptions: {
        sourceType: defaultSourceType,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    }),
  ]);
}

/**
 * Customizes an existing ESLint configuration array by applying modifications to matching configurations.
 *
 * This utility function allows you to modify specific configuration objects within an array
 * based on a selector function. Useful for applying project-specific customizations.
 *
 * @param {import('eslint').Linter.Config[]} configArray - Array of ESLint configurations to modify
 * @param {function(import('eslint').Linter.Config): boolean} selector - Function to select which configs to modify
 * @param {function(import('eslint').Linter.Config): void} modifier - Function to apply modifications to selected configs
 *
 * @example
 * ```javascript
 * const config = buildFullConfig();
 *
 * // Modify all TypeScript configurations
 * customiseConfig(config,
 *   (cfg) => [cfg.files].flat().some((f) => typeof f === 'string' && f.endsWith('.ts'),
 *   (cfg) => { cfg.languageOptions.parserOptions.sourceType = 'commonjs'; }
 * );
 * ```
 */
export function customiseESLintConfig(configArray, selector, modifier) {
  for (const config of configArray) {
    if (selector(config)) {
      modifier(config);
    }
  }
}
