"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

class ProcessChild {
  constructor(onMessage, onExit) {
    if (!process.send) {
      throw new Error('Only create ProcessChild instances in a worker!');
    }

    this.onMessage = onMessage;
    this.onExit = onExit;
    process.on('message', data => this.handleMessage(data));
  }

  handleMessage(data) {
    if (data === 'die') {
      return this.stop();
    }

    this.onMessage((0, _core().deserialize)(Buffer.from(data, 'base64')));
  }

  send(data) {
    let processSend = (0, _nullthrows().default)(process.send).bind(process);
    processSend((0, _core().serialize)(data).toString('base64'), err => {
      if (err && err instanceof Error) {
        // $FlowFixMe[prop-missing]
        if (err.code === 'ERR_IPC_CHANNEL_CLOSED') {
          // IPC connection closed
          // no need to keep the worker running if it can't send or receive data
          return this.stop();
        }
      }
    });
  }

  stop() {
    this.onExit(0);
    process.exit();
  }

}

exports.default = ProcessChild;
(0, _childState.setChild)(new _child.Child(ProcessChild));