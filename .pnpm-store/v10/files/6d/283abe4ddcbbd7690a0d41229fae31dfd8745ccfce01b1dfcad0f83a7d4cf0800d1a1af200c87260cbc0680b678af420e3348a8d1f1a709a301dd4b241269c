// @flow

import type {FilePath} from '@parcel/types';
import type {BackendType, WorkerImpl, WorkerMessage} from './types';
import type {SharedReference} from './WorkerFarm';

import nullthrows from 'nullthrows';
import EventEmitter from 'events';
import ThrowableDiagnostic from '@parcel/diagnostic';
import {getWorkerBackend} from './backend';

export type WorkerCall = {|
  method?: string,
  handle?: number,
  args: $ReadOnlyArray<any>,
  retries: number,
  skipReadyCheck?: boolean,
  resolve: (result: Promise<any> | any) => void,
  reject: (error: any) => void,
|};

type WorkerOpts = {|
  forcedKillTime: number,
  backend: BackendType,
  shouldPatchConsole?: boolean,
  sharedReferences: $ReadOnlyMap<SharedReference, mixed>,
|};

let WORKER_ID = 0;
export default class Worker extends EventEmitter {
  +options: WorkerOpts;
  worker: WorkerImpl;
  id: number = WORKER_ID++;
  sentSharedReferences: Set<SharedReference> = new Set();

  calls: Map<number, WorkerCall> = new Map();
  exitCode: ?number = null;
  callId: number = 0;

  ready: boolean = false;
  stopped: boolean = false;
  isStopping: boolean = false;

  constructor(options: WorkerOpts) {
    super();
    this.options = options;
  }

  async fork(forkModule: FilePath) {
    let filteredArgs = process.execArgv.filter(
      v => !/^--(debug|inspect|max-old-space-size=)/.test(v),
    );

    for (let i = 0; i < filteredArgs.length; i++) {
      let arg = filteredArgs[i];
      let isArgWithParam =
        ((arg === '-r' || arg === '--require') &&
          filteredArgs[i + 1] === '@parcel/register') ||
        arg === '--title';
      if (isArgWithParam) {
        filteredArgs.splice(i, 2);
        i--;
      }
    }

    // Workaround for https://github.com/nodejs/node/issues/29117
    if (process.env.NODE_OPTIONS) {
      // arg parsing logic adapted from https://stackoverflow.com/a/46946420/2352201
      let opts = [''];
      let quote = false;
      for (let c of nullthrows(process.env.NODE_OPTIONS.match(/.|^$/g))) {
        if (c === '"') {
          quote = !quote;
        } else if (!quote && c === ' ') {
          opts.push('');
        } else {
          opts[opts.length - 1] += c.replace(/\\(.)/, '$1');
        }
      }

      for (let i = 0; i < opts.length; i++) {
        let opt = opts[i];
        if (opt === '-r' || opt === '--require') {
          filteredArgs.push(opt, opts[i + 1]);
          i++;
        }
      }
    }

    let onMessage = data => this.receive(data);
    let onExit = code => {
      this.exitCode = code;
      this.emit('exit', code);
    };

    let onError = err => {
      this.emit('error', err);
    };

    let WorkerBackend = getWorkerBackend(this.options.backend);
    this.worker = new WorkerBackend(filteredArgs, onMessage, onError, onExit);
    await this.worker.start();

    await new Promise((resolve, reject) => {
      this.call({
        method: 'childInit',
        args: [
          forkModule,
          {
            shouldPatchConsole: !!this.options.shouldPatchConsole,
          },
        ],
        retries: 0,
        skipReadyCheck: true,
        resolve,
        reject,
      });
    });

    let sharedRefs = this.options.sharedReferences;
    let refsShared = new Set();
    // in case more refs are created while initial refs are sending
    while (refsShared.size < sharedRefs.size) {
      await Promise.all(
        [...sharedRefs]
          .filter(([ref]) => !refsShared.has(ref))
          .map(async ([ref, value]) => {
            await this.sendSharedReference(ref, value);
            refsShared.add(ref);
          }),
      );
    }

    this.ready = true;
    this.emit('ready');
  }

  sendSharedReference(ref: SharedReference, value: mixed): Promise<any> {
    this.sentSharedReferences.add(ref);
    return new Promise((resolve, reject) => {
      this.call({
        method: 'createSharedReference',
        args: [ref, value],
        resolve,
        reject,
        retries: 0,
        skipReadyCheck: true,
      });
    });
  }

  send(data: WorkerMessage): void {
    this.worker.send(data);
  }

  call(call: WorkerCall): void {
    if (this.stopped || this.isStopping) {
      return;
    }

    let idx = this.callId++;
    this.calls.set(idx, call);

    let msg = {
      type: 'request',
      idx: idx,
      child: this.id,
      handle: call.handle,
      method: call.method,
      args: call.args,
    };

    if (this.ready || call.skipReadyCheck === true) {
      this.send(msg);
    } else {
      this.once('ready', () => this.send(msg));
    }
  }

  receive(message: WorkerMessage): void {
    if (this.stopped || this.isStopping) {
      return;
    }

    if (message.type === 'request') {
      this.emit('request', message);
    } else if (message.type === 'response') {
      let idx = message.idx;
      if (idx == null) {
        return;
      }

      let call = this.calls.get(idx);
      if (!call) {
        // Return for unknown calls, these might accur if a third party process uses workers
        return;
      }

      if (message.contentType === 'error') {
        call.reject(new ThrowableDiagnostic({diagnostic: message.content}));
      } else {
        call.resolve(message.content);
      }

      this.calls.delete(idx);
      this.emit('response', message);
    }
  }

  async stop() {
    if (!this.stopped) {
      this.stopped = true;

      if (this.worker) {
        await this.worker.stop();
      }
    }
  }
}
