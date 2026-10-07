/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var chalk = require('chalk');

function getMemoryUsageString() {
  return chalk.blue(Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'Mb');
}

var ConsoleReporter = /*#__PURE__*/function () {
  function ConsoleReporter(options) {
    this._verbose = options.verbose;
    this._quiet = options.quiet;
  }

  var _proto = ConsoleReporter.prototype;

  _proto.reportMessage = function reportMessage(message) {
    if (!this._quiet) {
      process.stdout.write(message + '\n');
    }
  };

  _proto.reportTime = function reportTime(name, ms) {
    if (this._verbose && !this._quiet) {
      var time = ms === 0 ? chalk.gray(' <1ms') : ms < 1000 ? chalk.blue(leftPad(5, ms + 'ms')) : chalk.red(Math.floor(ms / 10) / 100 + 's');
      process.stdout.write('  ' + time + ' ' + chalk.gray(name) + ' [' + getMemoryUsageString() + ']\n');
    }
  };

  _proto.reportError = function reportError(caughtLocation, error) {
    if (!this._quiet) {
      process.stdout.write(chalk.red('ERROR:\n' + error.message + '\n'));

      if (this._verbose) {
        var frames = error.stack.match(/^ {4}at .*$/gm);

        if (frames) {
          process.stdout.write(chalk.gray('From: ' + caughtLocation + '\n' + frames.join('\n') + '\n'));
        }
      }
    }
  };

  return ConsoleReporter;
}();

function leftPad(len, str) {
  return new Array(len - str.length + 1).join(' ') + str;
}

module.exports = ConsoleReporter;