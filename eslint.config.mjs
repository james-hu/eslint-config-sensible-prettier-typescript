import { defineConfig } from 'eslint/config';

import defaultEslintConfig from './src/eslint.config.mjs';

export default defineConfig([...defaultEslintConfig]);
