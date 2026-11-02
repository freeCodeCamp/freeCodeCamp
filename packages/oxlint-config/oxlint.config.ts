import { defineConfig } from 'oxlint';
import { config } from './base.js';

export default defineConfig({
  extends: [config],
  env: { node: true }
});
