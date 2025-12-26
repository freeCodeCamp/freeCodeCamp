import {
  configTypeChecked,
  configReact
} from '@freecodecamp/eslint-config/base';

export default [
  ...configTypeChecked,
  ...configReact,
  { settings: { react: { version: '17.0.2' } } }
];
