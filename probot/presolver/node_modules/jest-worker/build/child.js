/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

'use strict';

var _types;

function _load_types() {
  return _types = require('./types');
}

let file = null;

/**
 * This file is a small bootstrapper for workers. It sets up the communication
 * between the worker and the parent process, interpreting parent messages and
 * sending results back.
 *
 * The file loaded will be lazily initialized the first time any of the workers
 * is called. This is done for optimal performance: if the farm is initialized,
 * but no call is made to it, child Node processes will be consuming the least
 * possible amount of memory.
 *
 * If an invalid message is detected, the child will exit (by throwing) with a
 * non-zero exit code.
 */
process.on('message', (request /* Should be ChildMessage */) => {
  switch (request[0]) {
    case (_types || _load_types()).CHILD_MESSAGE_INITIALIZE:
      file = request[2];
      break;

    case (_types || _load_types()).CHILD_MESSAGE_CALL:
      execMethod(request[2], request[3]);
      break;

    case (_types || _load_types()).CHILD_MESSAGE_END:
      process.exit(0);
      break;

    default:
      throw new TypeError('Unexpected request from parent process: ' + request[0]);
  }
});

function reportSuccess(result) {
  if (!process || !process.send) {
    throw new Error('Child can only be used on a forked process');
  }

  process.send([(_types || _load_types()).PARENT_MESSAGE_OK, result]);
}

function reportError(error) {
  if (!process || !process.send) {
    throw new Error('Child can only be used on a forked process');
  }

  if (error == null) {
    error = new Error('"null" or "undefined" thrown');
  }

  process.send([(_types || _load_types()).PARENT_MESSAGE_ERROR, error.constructor && error.constructor.name, error.message, error.stack,
  // $FlowFixMe: this is safe to just inherit from Object.
  typeof error === 'object' ? Object.assign({}, error) : error]);
}

function execMethod(method, args) {
  // $FlowFixMe: This has to be a dynamic require.
  const main = require(file);
  let result;

  try {
    if (method === 'default') {
      result = (main.__esModule ? main['default'] : main).apply(global, args);
    } else {
      result = main[method].apply(main, args);
    }
  } catch (err) {
    reportError(err);
    return;
  }

  if (result && typeof result.then === 'function') {
    result.then(reportSuccess, reportError);
  } else {
    reportSuccess(result);
  }
}