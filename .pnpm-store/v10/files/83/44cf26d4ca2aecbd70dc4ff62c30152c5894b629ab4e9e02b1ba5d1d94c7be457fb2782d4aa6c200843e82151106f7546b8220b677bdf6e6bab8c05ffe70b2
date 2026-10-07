/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const chalk = require('chalk');

import type {Reporter} from './Reporter';

function getMemoryUsageString() {
  return chalk.blue(
    Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'Mb',
  );
}

class ConsoleReporter implements Reporter {
  _verbose: boolean;
  _quiet: boolean;

  constructor(options: {verbose: boolean, quiet: boolean, ...}) {
    this._verbose = options.verbose;
    this._quiet = options.quiet;
  }

  reportMessage(message: string): void {
    if (!this._quiet) {
      process.stdout.write(message + '\n');
    }
  }

  reportTime(name: string, ms: number): void {
    if (this._verbose && !this._quiet) {
      const time =
        ms === 0
          ? chalk.gray(' <1ms')
          : ms < 1000
          ? chalk.blue(leftPad(5, ms + 'ms'))
          : chalk.red(Math.floor(ms / 10) / 100 + 's');
      process.stdout.write(
        '  ' +
          time +
          ' ' +
          chalk.gray(name) +
          ' [' +
          getMemoryUsageString() +
          ']\n',
      );
    }
  }

  reportError(caughtLocation: string, error: Error): void {
    if (!this._quiet) {
      process.stdout.write(chalk.red('ERROR:\n' + error.message + '\n'));
      if (this._verbose) {
        const frames = error.stack.match(/^ {4}at .*$/gm);
        if (frames) {
          process.stdout.write(
            chalk.gray(
              'From: ' + caughtLocation + '\n' + frames.join('\n') + '\n',
            ),
          );
        }
      }
    }
  }
}

function leftPad(len, str) {
  return new Array(len - str.length + 1).join(' ') + str;
}

module.exports = ConsoleReporter;
