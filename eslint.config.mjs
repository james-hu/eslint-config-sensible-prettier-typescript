import { defineConfig } from 'eslint/config';

import { buildESLintConfig } from './src/config.mjs';

export default defineConfig([...buildESLintConfig({ defaultSourceType: 'commonjs' })]);
