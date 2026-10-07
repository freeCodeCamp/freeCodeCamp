"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.isWorker = exports.getMessenger = void 0;
var _signalExit = _interopRequireDefault(require("signal-exit"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _types = require("./types");
var _utils = require("./utils");
let counter = 0;
/**
 * Used to check wether current context is executed in worker process
 */
let isWorker = false;
exports.isWorker = isWorker;
let getMessenger = function () {
  return undefined;
};
exports.getMessenger = getMessenger;
if (process.send && process.env.GATSBY_WORKER_MODULE_PATH && process.env.GATSBY_WORKER_IN_FLIGHT_DUMP_LOCATION) {
  const workerInFlightsDumpLocation = process.env.GATSBY_WORKER_IN_FLIGHT_DUMP_LOCATION;
  exports.isWorker = isWorker = true;
  const listeners = [];
  const inFlightMessages = new Set();
  (0, _signalExit.default)(() => {
    if (inFlightMessages.size > 0) {
      // this need to be sync
      _fsExtra.default.outputJsonSync(workerInFlightsDumpLocation, Array.from(inFlightMessages));
    }
  });
  function ensuredSendToMain(msg) {
    inFlightMessages.add(msg);
    process.send(msg, undefined, undefined, error => {
      if (!error) {
        inFlightMessages.delete(msg);
      }
    });
  }
  function onError(error) {
    if (error == null) {
      error = new Error(`"null" or "undefined" thrown`);
    }
    const msg = [_types.ERROR, ++counter, error.constructor && error.constructor.name, error.message, error.stack, error];
    ensuredSendToMain(msg);
  }
  function onResult(result) {
    const msg = [_types.RESULT, ++counter, result];
    ensuredSendToMain(msg);
  }
  const MESSAGING_VERSION = 1;
  exports.getMessenger = getMessenger = function () {
    return {
      onMessage(listener) {
        listeners.push(listener);
      },
      sendMessage(msg) {
        const poolMsg = [_types.CUSTOM_MESSAGE, ++counter, msg];
        ensuredSendToMain(poolMsg);
      },
      messagingVersion: MESSAGING_VERSION
    };
  };
  const child = require(process.env.GATSBY_WORKER_MODULE_PATH);
  function messageHandler(msg) {
    if (msg[0] === _types.EXECUTE) {
      let result;
      try {
        result = child[msg[2]].call(child, ...msg[3]);
      } catch (e) {
        onError(e);
        return;
      }
      if ((0, _utils.isPromise)(result)) {
        result.then(onResult, onError);
      } else {
        onResult(result);
      }
    } else if (msg[0] === _types.END) {
      process.off(`message`, messageHandler);
    } else if (msg[0] === _types.CUSTOM_MESSAGE) {
      for (const listener of listeners) {
        listener(msg[2]);
      }
    }
  }
  process.on(`message`, messageHandler);
  ensuredSendToMain([_types.WORKER_READY, ++counter]);
}