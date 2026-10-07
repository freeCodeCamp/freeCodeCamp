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

export interface Reporter {
  reportMessage(message: string): void;
  reportTime(name: string, ms: number): void;
  reportError(caughtLocation: string, error: Error): void;
}
