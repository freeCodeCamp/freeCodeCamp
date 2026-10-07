// @flow

import type {
  WorkerImpl,
  MessageHandler,
  ErrorHandler,
  ExitHandler,
  WorkerMessage,
} from '../types';
import {Worker} from 'worker_threads';
import path from 'path';
import {prepareForSerialization, restoreDeserializedObject} from '@parcel/core';

const WORKER_PATH = path.join(__dirname, 'ThreadsChild.js');

export default class ThreadsWorker implements WorkerImpl {
  execArgv: Object;
  onMessage: MessageHandler;
  onError: ErrorHandler;
  onExit: ExitHandler;
  worker: Worker;

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
    this.worker = new Worker(WORKER_PATH, {
      execArgv: this.execArgv,
      env: process.env,
    });

    this.worker.on('message', data => this.handleMessage(data));
    this.worker.on('error', this.onError);
    this.worker.on('exit', this.onExit);

    return new Promise<void>(resolve => {
      this.worker.on('online', resolve);
    });
  }

  stop(): Promise<void> {
    // In node 12, this returns a promise, but previously it accepted a callback
    // TODO: Pass a callback in earlier versions of Node
    return Promise.resolve(this.worker.terminate());
  }

  handleMessage(data: WorkerMessage) {
    this.onMessage(restoreDeserializedObject(data));
  }

  send(data: WorkerMessage) {
    this.worker.postMessage(prepareForSerialization(data));
  }
}
