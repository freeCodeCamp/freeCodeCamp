'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = messageParent;

var _types = require('../types');

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const isWorkerThread = (() => {
  try {
    // `Require` here to support Node v10
    const {isMainThread, parentPort} = require('worker_threads');

    return !isMainThread && parentPort != null;
  } catch {
    return false;
  }
})();

function messageParent(message, parentProcess = process) {
  if (isWorkerThread) {
    // `Require` here to support Node v10
    const {parentPort} = require('worker_threads'); // ! is safe due to `null` check in `isWorkerThread`

    parentPort.postMessage([_types.PARENT_MESSAGE_CUSTOM, message]);
  } else if (typeof parentProcess.send === 'function') {
    parentProcess.send([_types.PARENT_MESSAGE_CUSTOM, message]);
  } else {
    throw new Error('"messageParent" can only be used inside a worker');
  }
}
