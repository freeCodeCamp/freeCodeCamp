/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
'use strict';

var defaultRequiredFieldLogger = function defaultRequiredFieldLogger(event) {
  if (process.env.NODE_ENV !== "production" && event.kind === 'missing_field.log') {
    throw new Error('Relay Environment Configuration Error (dev only): `@required(action: LOG)` requires that the Relay Environment be configured with a `requiredFieldLogger`.');
  }
};

module.exports = defaultRequiredFieldLogger;