import { configTypeChecked } from '@freecodecamp/eslint-config/base';
import globals from 'globals';

export default [
  ...configTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node // TODO: migrate to ESM and remove globals
      }
    }
  }
];
