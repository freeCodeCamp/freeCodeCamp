#!/usr/bin/env node
import yargs from 'yargs'
import { init } from './init.js'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .usage('$0 <cmd> [args]')
  .command(
    'init',
    'Initializes Mock Service Worker at the specified directory',
    (yargs) => {
      yargs
        .positional('publicDir', {
          type: 'string',
          description: 'Relative path to the public directory',
          demandOption: false,
          normalize: true,
        })
        .option('save', {
          type: 'boolean',
          description: 'Save the worker directory in your package.json',
        })
        .option('cwd', {
          type: 'string',
          description: 'Custom current worker directory',
          normalize: true,
        })
        .example('msw init')
        .example('msw init ./public')
        .example('msw init ./static --save')
    },
    init,
  )
  .demandCommand()
  .help().argv
