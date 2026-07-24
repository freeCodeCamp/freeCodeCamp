#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { configure, processLintErrors } from './index.js';

const argv = yargs(hideBin(process.argv))
  .options({ config: { type: 'string' } })
  .parseSync();

const configPath = argv.config;
const files = argv._ as string[];

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

const runLint = async () => {
  const results = await lint(files);
  const errors = processLintErrors(results);

  if (errors.length > 0) {
    errors.forEach(({ file, errors: fileErrors }) => {
      console.log('Errors in file', file);
      console.log(fileErrors);
    });
    process.exit(1);
  }
};

void runLint();
