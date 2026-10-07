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

import type {Reporter} from './Reporter';

class MultiReporter implements Reporter {
  _reporters: $ReadOnlyArray<Reporter>;

  constructor(...reporters: $ReadOnlyArray<Reporter>) {
    this._reporters = reporters;
  }

  reportMessage(message: string): void {
    this._reporters.forEach(reporter => {
      reporter.reportMessage(message);
    });
  }

  reportTime(name: string, ms: number): void {
    this._reporters.forEach(reporter => {
      reporter.reportTime(name, ms);
    });
  }

  reportError(caughtLocation: string, error: Error): void {
    this._reporters.forEach(reporter => {
      reporter.reportError(caughtLocation, error);
    });
  }
}

module.exports = MultiReporter;
