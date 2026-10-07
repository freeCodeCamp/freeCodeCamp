// @flow

import type {
  WorkerImpl,
  MessageHandler,
  ErrorHandler,
  ExitHandler,
  WorkerMessage,
} from '../types';
import childProcess, {type ChildProcess} from 'child_process';
import path from 'path';
import {serialize, deserialize} from '@parcel/core';

const WORKER_PATH = path.join(__dirname, 'ProcessChild.js');

export default class ProcessWorker implements WorkerImpl {
  execArgv: Object;
  onMessage: MessageHandler;
  onError: ErrorHandler;
  onExit: ExitHandler;
  child: ChildProcess;
  processQueue: boolean = true;
  sendQueue: Array<any> = [];

  constructor(
    execArgv: Object,
    onMessage: MessageHandler,
    onError: ErrorHandler,
    onExit: ExitHandler,
  ) {
    this.execArgv = execArgv;
    this.onMessage = onMessage;
    this.onError = onError;
    this.onExit = onExit;
  }

  start(): Promise<void> {
    this.child = childProcess.fork(WORKER_PATH, process.argv, {
      execArgv: this.execArgv,
      env: process.env,
      cwd: process.cwd(),
    });

    this.child.on('message', (data: string) => {
      this.onMessage(deserialize(Buffer.from(data, 'base64')));
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

  send(data: WorkerMessage) {
    if (!this.processQueue) {
      this.sendQueue.push(data);
      return;
    }

    let result = this.child.send(serialize(data).toString('base64'), error => {
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
