import { configTypeChecked } from '@freecodecamp/eslint-config/base';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(globalIgnores(['./playwright']), {
  extends: [configTypeChecked],
  rules: {
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'turbo/no-undeclared-env-vars': 'off' // If/when we make e2e tests into a turbo task, we can enable this rule again.
  }
});
