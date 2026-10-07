#!/usr/bin/env node

'use strict';

/**
 * This wrapper executable checks for known node flags and appends them when found,
 * before invoking the "real" executable (`lib/cli/cli.js`)
 *
 * @module bin/mocha
 * @private
 */

const {loadOptions} = require('../lib/cli/options');
const {
  unparseNodeFlags,
  isNodeFlag,
  impliesNoTimeouts
} = require('../lib/cli/node-flags');
const unparse = require('yargs-unparser');
const debug = require('debug')('mocha:cli:mocha');
const {aliases} = require('../lib/cli/run-option-metadata');

const mochaArgs = {};
const nodeArgs = {};
let hasInspect = false;

const opts = loadOptions(process.argv.slice(2));
debug('loaded opts', opts);

/**
 * Given option/command `value`, disable timeouts if applicable
 * @param {string} [value] - Value to check
 * @ignore
 */
const disableTimeouts = value => {
  if (impliesNoTimeouts(value)) {
    debug('option %s disabled timeouts', value);
    mochaArgs.timeout = 0;
  }
};

/**
 * If `value` begins with `v8-` and is not explicitly `v8-options`, remove prefix
 * @param {string} [value] - Value to check
 * @returns {string} `value` with prefix (maybe) removed
 * @ignore
 */
const trimV8Option = value =>
  value !== 'v8-options' && /^v8-/.test(value) ? value.slice(3) : value;

// sort options into "node" and "mocha" buckets
Object.keys(opts).forEach(opt => {
  if (isNodeFlag(opt)) {
    nodeArgs[trimV8Option(opt)] = opts[opt];
  } else {
    mochaArgs[opt] = opts[opt];
  }
});

// disable 'timeout' for debugFlags
Object.keys(nodeArgs).forEach(opt => disableTimeouts(opt));
mochaArgs['node-option'] &&
  mochaArgs['node-option'].forEach(opt => disableTimeouts(opt));

// Native debugger handling
// see https://nodejs.org/api/debugger.html#debugger_debugger
// look for 'inspect' that would launch this debugger,
// remove it from Mocha's opts and prepend it to Node's opts.
// A deprecation warning will be printed by node, if applicable.
// (mochaArgs._ are "positional" arguments, not prefixed with - or --)
if (mochaArgs._) {
  const i = mochaArgs._.findIndex(val => val === 'inspect');
  if (i > -1) {
    mochaArgs._.splice(i, 1);
    disableTimeouts('inspect');
    hasInspect = true;
  }
}

if (mochaArgs['node-option'] || Object.keys(nodeArgs).length || hasInspect) {
  const {spawn} = require('child_process');
  const mochaPath = require.resolve('../lib/cli/cli.js');

  const nodeArgv =
    (mochaArgs['node-option'] && mochaArgs['node-option'].map(v => '--' + v)) ||
    unparseNodeFlags(nodeArgs);

  if (hasInspect) nodeArgv.unshift('inspect');
  delete mochaArgs['node-option'];

  debug('final node argv', nodeArgv);

  const args = [].concat(
    nodeArgv,
    mochaPath,
    unparse(mochaArgs, {alias: aliases})
  );

  debug(
    'forking child process via command: %s %s',
    process.execPath,
    args.join(' ')
  );

  const proc = spawn(process.execPath, args, {
    stdio: 'inherit'
  });

  proc.on('exit', (code, signal) => {
    process.on('exit', () => {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });

  // terminate children.
  process.on('SIGINT', () => {
    // XXX: a previous comment said this would abort the runner, but I can't see that it does
    // anything with the default runner.
    debug('main process caught SIGINT');
    proc.kill('SIGINT');
    // if running in parallel mode, we will have a proper SIGINT handler, so the below won't
    // be needed.
    if (!args.parallel || args.jobs < 2) {
      // win32 does not support SIGTERM, so use next best thing.
      if (require('os').platform() === 'win32') {
        proc.kill('SIGKILL');
      } else {
        // using SIGKILL won't cleanly close the output streams, which can result
        // in cut-off text or a befouled terminal.
        debug('sending SIGTERM to child process');
        proc.kill('SIGTERM');
      }
    }
  });
} else {
  debug('running Mocha in-process');
  require('../lib/cli/cli').main([], mochaArgs);
}
