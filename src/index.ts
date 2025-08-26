import defaultEslintConfig from './eslint.config.mjs';
import defaultPrettierConfig from './prettier.config.cjs';

/**
 * Build ESLint config
 * @returns ESLint config
 */
export function eslintConfig() {
  return defaultEslintConfig;
}

/**
 * Build Prettier config
 * @returns Prettier config
 */
export function prettierConfig() {
  return defaultPrettierConfig;
}
