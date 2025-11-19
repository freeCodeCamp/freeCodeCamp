import { configTypeChecked } from '@freecodecamp/eslint-config/base';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  files: ['e2e/*.ts'],
  extends: [configTypeChecked],
  rules: {
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off'
  }
});
