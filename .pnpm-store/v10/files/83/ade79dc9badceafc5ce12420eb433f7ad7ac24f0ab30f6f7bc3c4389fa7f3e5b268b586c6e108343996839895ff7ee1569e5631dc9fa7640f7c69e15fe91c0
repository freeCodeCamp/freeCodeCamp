'use strict';

var _types = require('../types');

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
let file = null;
let setupArgs = [];
let initialized = false;
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

const messageListener = request => {
  switch (request[0]) {
    case _types.CHILD_MESSAGE_INITIALIZE:
      const init = request;
      file = init[2];
      setupArgs = request[3];
      break;

    case _types.CHILD_MESSAGE_CALL:
      const call = request;
      execMethod(call[2], call[3]);
      break;

    case _types.CHILD_MESSAGE_END:
      end();
      break;

    default:
      throw new TypeError(
        'Unexpected request from parent process: ' + request[0]
      );
  }
};

process.on('message', messageListener);

function reportSuccess(result) {
  if (!process || !process.send) {
    throw new Error('Child can only be used on a forked process');
  }

  process.send([_types.PARENT_MESSAGE_OK, result]);
}

function reportClientError(error) {
  return reportError(error, _types.PARENT_MESSAGE_CLIENT_ERROR);
}

function reportInitializeError(error) {
  return reportError(error, _types.PARENT_MESSAGE_SETUP_ERROR);
}

function reportError(error, type) {
  if (!process || !process.send) {
    throw new Error('Child can only be used on a forked process');
  }

  if (error == null) {
    error = new Error('"null" or "undefined" thrown');
  }

  process.send([
    type,
    error.constructor && error.constructor.name,
    error.message,
    error.stack,
    typeof error === 'object' ? {...error} : error
  ]);
}

function end() {
  const main = require(file);

  if (!main.teardown) {
    exitProcess();
    return;
  }

  execFunction(main.teardown, main, [], exitProcess, exitProcess);
}

function exitProcess() {
  // Clean up open handles so the process ideally exits gracefully
  process.removeListener('message', messageListener);
}

function execMethod(method, args) {
  const main = require(file);

  let fn;

  if (method === 'default') {
    fn = main.__esModule ? main['default'] : main;
  } else {
    fn = main[method];
  }

  function execHelper() {
    execFunction(fn, main, args, reportSuccess, reportClientError);
  }

  if (initialized || !main.setup) {
    execHelper();
    return;
  }

  initialized = true;
  execFunction(main.setup, main, setupArgs, execHelper, reportInitializeError);
}

const isPromise = obj =>
  !!obj &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

function execFunction(fn, ctx, args, onResult, onError) {
  let result;

  try {
    result = fn.apply(ctx, args);
  } catch (err) {
    onError(err);
    return;
  }

  if (isPromise(result)) {
    result.then(onResult, onError);
  } else {
    onResult(result);
  }
}
