"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _worker_threads() {
  const data = require("worker_threads");

  _worker_threads = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _childState = require("../childState");

var _child = require("../child");

function _core() {
  const data = require("@parcel/core");

  _core = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ThreadsChild {
  constructor(onMessage, onExit) {
    if (_worker_threads().isMainThread || !_worker_threads().parentPort) {
      throw new Error('Only create ThreadsChild instances in a worker!');
    }

    this.onMessage = onMessage;
    this.onExit = onExit;

    _worker_threads().parentPort.on('message', data => this.handleMessage(data));

    _worker_threads().parentPort.on('close', this.onExit);
  }

  handleMessage(data) {
    this.onMessage((0, _core().restoreDeserializedObject)(data));
  }

  send(data) {
    (0, _nullthrows().default)(_worker_threads().parentPort).postMessage((0, _core().prepareForSerialization)(data));
  }

}

exports.default = ThreadsChild;
(0, _childState.setChild)(new _child.Child(ThreadsChild));