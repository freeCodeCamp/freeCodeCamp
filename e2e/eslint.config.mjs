import { configTypeChecked } from '@freecodecamp/eslint-config/base';

export default [
  ...configTypeChecked,
  {
    rules: {
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off'
    }
  }
];
