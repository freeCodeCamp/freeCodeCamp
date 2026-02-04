import { configTypeChecked } from '@freecodecamp/eslint-config/base';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(globalIgnores(['./playwright']), {
  extends: [configTypeChecked],
  rules: {
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off'
  }
});
