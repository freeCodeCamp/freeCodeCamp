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

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _core() {
  const data = require("@parcel/core");

  _core = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WORKER_PATH = _path().default.join(__dirname, 'ThreadsChild.js');

class ThreadsWorker {
  constructor(execArgv, onMessage, onError, onExit) {
    this.execArgv = execArgv;
    this.onMessage = onMessage;
    this.onError = onError;
    this.onExit = onExit;
  }

  start() {
    this.worker = new (_worker_threads().Worker)(WORKER_PATH, {
      execArgv: this.execArgv,
      env: process.env
    });
    this.worker.on('message', data => this.handleMessage(data));
    this.worker.on('error', this.onError);
    this.worker.on('exit', this.onExit);
    return new Promise(resolve => {
      this.worker.on('online', resolve);
    });
  }

  stop() {
    // In node 12, this returns a promise, but previously it accepted a callback
    // TODO: Pass a callback in earlier versions of Node
    return Promise.resolve(this.worker.terminate());
  }

  handleMessage(data) {
    this.onMessage((0, _core().restoreDeserializedObject)(data));
  }

  send(data) {
    this.worker.postMessage((0, _core().prepareForSerialization)(data));
  }

}

exports.default = ThreadsWorker;