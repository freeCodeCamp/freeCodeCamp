"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _child_process() {
  const data = _interopRequireDefault(require("child_process"));

  _child_process = function () {
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

const WORKER_PATH = _path().default.join(__dirname, 'ProcessChild.js');

class ProcessWorker {
  processQueue = true;
  sendQueue = [];

  constructor(execArgv, onMessage, onError, onExit) {
    this.execArgv = execArgv;
    this.onMessage = onMessage;
    this.onError = onError;
    this.onExit = onExit;
  }

  start() {
    this.child = _child_process().default.fork(WORKER_PATH, process.argv, {
      execArgv: this.execArgv,
      env: process.env,
      cwd: process.cwd()
    });
    this.child.on('message', data => {
      this.onMessage((0, _core().deserialize)(Buffer.from(data, 'base64')));
    });
    this.child.once('exit', this.onExit);
    this.child.on('error', this.onError);
    return Promise.resolve();
  }

  async stop() {
    this.child.send('die');
    let forceKill = setTimeout(() => this.child.kill('SIGINT'), 500);
    await new Promise(resolve => {
      this.child.once('exit', resolve);
    });
    clearTimeout(forceKill);
  }

  send(data) {
    if (!this.processQueue) {
      this.sendQueue.push(data);
      return;
    }

    let result = this.child.send((0, _core().serialize)(data).toString('base64'), error => {
      if (error && error instanceof Error) {
        // Ignore this, the workerfarm handles child errors
        return;
      }

      this.processQueue = true;

      if (this.sendQueue.length > 0) {
        let queueCopy = this.sendQueue.slice(0);
        this.sendQueue = [];
        queueCopy.forEach(entry => this.send(entry));
      }
    });

    if (!result || /^win/.test(process.platform)) {
      // Queue is handling too much messages throttle it
      this.processQueue = false;
    }
  }

}

exports.default = ProcessWorker;