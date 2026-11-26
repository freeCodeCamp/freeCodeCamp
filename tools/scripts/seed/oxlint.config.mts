import { defineConfig } from 'oxlint';
import { configTypeChecked } from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [configTypeChecked],
  env: { node: true }
});
