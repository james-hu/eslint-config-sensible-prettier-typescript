import defaultPrettierConfig from './prettier.config.cjs';

export * from './config.mjs';

/**
 * Build Prettier config
 * @returns Prettier config
 */
export function buildPrettierConfig() {
  return { ...defaultPrettierConfig };
}
