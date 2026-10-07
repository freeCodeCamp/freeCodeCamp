'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function _types() {
  const data = require('../types');

  _types = function () {
    return data;
  };

  return data;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const isWorkerThread = () => {
  try {
    // `Require` here to support Node v10
    const {isMainThread, parentPort} = require('worker_threads');

    return !isMainThread && parentPort;
  } catch {
    return false;
  }
};

const messageParent = (message, parentProcess = process) => {
  try {
    if (isWorkerThread()) {
      // `Require` here to support Node v10
      const {parentPort} = require('worker_threads');

      parentPort.postMessage([_types().PARENT_MESSAGE_CUSTOM, message]);
    } else if (typeof parentProcess.send === 'function') {
      parentProcess.send([_types().PARENT_MESSAGE_CUSTOM, message]);
    }
  } catch {
    throw new Error('"messageParent" can only be used inside a worker');
  }
};

var _default = messageParent;
exports.default = _default;
