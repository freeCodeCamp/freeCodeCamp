import { configTypeChecked } from '@freecodecamp/eslint-config/base';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  // include all in root dir, but not subdirs:
  globalIgnores(['**/*', '!*.js', '!*.ts', '!*.mjs']),
  {
    extends: [configTypeChecked],
    rules: {
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off'
    }
  }
);
