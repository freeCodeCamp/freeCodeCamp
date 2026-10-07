#!/usr/bin/env node

'use strict';

/**
 * Contains CLI entry point and public API for programmatic usage in Node.js.
 * - Option parsing is handled by {@link https://npm.im/yargs yargs}.
 * - If executed via `node`, this module will run {@linkcode module:lib/cli.main main()}.
 * @public
 * @module lib/cli
 */

const debug = require('debug')('mocha:cli:cli');
const symbols = require('log-symbols');
const yargs = require('yargs/yargs');
const path = require('path');
const {
  loadRc,
  loadPkgRc,
  loadOptions,
  YARGS_PARSER_CONFIG
} = require('./options');
const lookupFiles = require('./lookup-files');
const commands = require('./commands');
const ansi = require('ansi-colors');
const {repository, homepage, version, discord} = require('../../package.json');
const {cwd} = require('../utils');

/**
 * - Accepts an `Array` of arguments
 * - Modifies {@link https://nodejs.org/api/modules.html#modules_module_paths Node.js' search path} for easy loading of consumer modules
 * - Sets {@linkcode https://nodejs.org/api/errors.html#errors_error_stacktracelimit Error.stackTraceLimit} to `Infinity`
 * @public
 * @summary Mocha's main command-line entry-point.
 * @param {string[]} argv - Array of arguments to parse, or by default the lovely `process.argv.slice(2)`
 * @param {object} [mochaArgs] - Object of already parsed Mocha arguments (by bin/mocha)
 */
exports.main = (argv = process.argv.slice(2), mochaArgs) => {
  debug('entered main with raw args', argv);
  // ensure we can require() from current working directory
  if (typeof module.paths !== 'undefined') {
    module.paths.push(cwd(), path.resolve('node_modules'));
  }

  Error.stackTraceLimit = Infinity; // configurable via --stack-trace-limit?

  var args = mochaArgs || loadOptions(argv);

  yargs()
    .scriptName('mocha')
    .command(commands.run)
    .command(commands.init)
    .updateStrings({
      'Positionals:': 'Positional Arguments',
      'Options:': 'Other Options',
      'Commands:': 'Commands'
    })
    .fail((msg, err, yargs) => {
      debug('caught error sometime before command handler: %O', err);
      yargs.showHelp();
      console.error(`\n${symbols.error} ${ansi.red('ERROR:')} ${msg}`);
      process.exitCode = 1;
    })
    .help('help', 'Show usage information & exit')
    .alias('help', 'h')
    .version('version', 'Show version number & exit', version)
    .alias('version', 'V')
    .wrap(process.stdout.columns ? Math.min(process.stdout.columns, 80) : 80)
    .epilog(
      `Mocha Resources
    Chat: ${ansi.magenta(discord)}
  GitHub: ${ansi.blue(repository.url)}
    Docs: ${ansi.yellow(homepage)}
      `
    )
    .parserConfiguration(YARGS_PARSER_CONFIG)
    .config(args)
    .parse(args._);
};

exports.lookupFiles = lookupFiles;
exports.loadOptions = loadOptions;
exports.loadPkgRc = loadPkgRc;
exports.loadRc = loadRc;

// allow direct execution
if (require.main === module) {
  exports.main();
}
