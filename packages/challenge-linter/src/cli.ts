#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { configure } from './index.js';

const argv = yargs(hideBin(process.argv))
  .options({ config: { type: 'string' } })
  .parseSync();

const configPath = argv.config;
const files = argv._;

if (!configPath) {
  console.error(
    'Error: Configuration path is required. Use --config <path-to-config>'
  );
  process.exit(1);
}

if (files.length === 0) {
  console.error('Error: At least one file path is required to lint.');
  process.exit(1);
}

const { lint } = configure(configPath);

files.forEach(filePath => {
  lint({ path: filePath });
});
