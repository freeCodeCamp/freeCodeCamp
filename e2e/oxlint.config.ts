import { defineConfig } from 'oxlint';
import { configTypeChecked, tsFiles } from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [configTypeChecked],
  options: { typeAware: true },
  ignorePatterns: ['playwright'],
  overrides: [
    {
      files: tsFiles,
      rules: {
        'typescript/no-unsafe-member-access': 'off',
        'typescript/no-unsafe-call': 'off',
        'typescript/no-unsafe-assignment': 'off',
        'turbo/no-undeclared-env-vars': 'off'
      }
    }
  ]
});
