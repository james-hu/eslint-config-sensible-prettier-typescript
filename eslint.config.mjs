import { defineConfig } from 'eslint/config';

import { buildESLintConfig } from './src/eslint.config.mjs';

export default defineConfig([...buildESLintConfig({ defaultSourceType: 'commonjs' })]);
