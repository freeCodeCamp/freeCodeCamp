// @flow

import type {
  ChildImpl,
  MessageHandler,
  ExitHandler,
  WorkerMessage,
} from '../types';
import nullthrows from 'nullthrows';
import {setChild} from '../childState';
import {Child} from '../child';
import {serialize, deserialize} from '@parcel/core';

export default class ProcessChild implements ChildImpl {
  onMessage: MessageHandler;
  onExit: ExitHandler;

  constructor(onMessage: MessageHandler, onExit: ExitHandler) {
    if (!process.send) {
      throw new Error('Only create ProcessChild instances in a worker!');
    }

    this.onMessage = onMessage;
    this.onExit = onExit;
    process.on('message', data => this.handleMessage(data));
  }

  handleMessage(data: string): void {
    if (data === 'die') {
      return this.stop();
    }

    this.onMessage(deserialize(Buffer.from(data, 'base64')));
  }

  send(data: WorkerMessage) {
    let processSend = nullthrows(process.send).bind(process);
    processSend(serialize(data).toString('base64'), err => {
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

setChild(new Child(ProcessChild));
