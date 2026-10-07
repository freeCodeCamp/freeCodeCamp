/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

/**
 * @private
 */
function createError(
  type: 'fatal' | 'error' | 'warn' | 'info',
  name: string,
  messageFormat: string,
  ...messageParams: Array<string | number | boolean>
): Error {
  let index = 0;
  const message = messageFormat.replace(/%s/g, () =>
    String(messageParams[index++]),
  );
  const err = new Error(message);
  const error = Object.assign((err: any), {
    name,
    messageFormat,
    messageParams,
    type,
    taalOpcodes: [2, 2], // skip frame (code=2) twice
  });
  // In V8, Error objects keep the closure scope chain alive until the
  // err.stack property is accessed.
  if (error.stack === undefined) {
    // IE sets the stack only if error is thrown
    try {
      throw error;
    } catch {}
  }
  return error;
}

module.exports = {
  create(
    name: string,
    messageFormat: string,
    ...messageParams: Array<string | number | boolean>
  ): Error {
    return createError('error', name, messageFormat, ...messageParams);
  },
  createWarning(
    name: string,
    messageFormat: string,
    ...messageParams: Array<string | number | boolean>
  ): Error {
    return createError('warn', name, messageFormat, ...messageParams);
  },
};
