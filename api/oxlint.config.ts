import { defineConfig } from 'oxlint';
import {
  jsdocRecommended,
  configTypeChecked
} from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [configTypeChecked, jsdocRecommended],
  rules: { 'jsdoc/require-param': 'off', 'jsdoc/require-returns': 'off' }
});
