import defaultPrettierConfig from './prettier.config.cjs';

export * from './eslint.config.mjs';

/**
 * Build Prettier config
 * @returns Prettier config
 */
export function buildPrettierConfig() {
  return { ...defaultPrettierConfig };
}
