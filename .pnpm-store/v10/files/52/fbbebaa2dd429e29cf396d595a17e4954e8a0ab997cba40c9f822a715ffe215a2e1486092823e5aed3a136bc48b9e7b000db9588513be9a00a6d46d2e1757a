/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {firstValueFrom, map, raceWith} from '../../third_party/rxjs/rxjs.js';
import type {CDPSession} from '../api/CDPSession.js';
import type {ElementHandle} from '../api/ElementHandle.js';
import type {Extension} from '../api/Extension.js';
import type {JSHandle} from '../api/JSHandle.js';
import {Realm} from '../api/Realm.js';
import {EventEmitter} from '../common/EventEmitter.js';
import type {TimeoutSettings} from '../common/TimeoutSettings.js';
import type {EvaluateFunc, HandleFor} from '../common/types.js';
import {
  fromEmitterEvent,
  timeout,
  withSourcePuppeteerURLIfNone,
} from '../common/util.js';
import {disposeSymbol} from '../util/disposable.js';

import {CdpElementHandle} from './ElementHandle.js';
import type {ExecutionContext} from './ExecutionContext.js';
import type {CdpFrame} from './Frame.js';
import type {PUPPETEER_WORLD} from './IsolatedWorlds.js';
import {MAIN_WORLD} from './IsolatedWorlds.js';
import {CdpJSHandle} from './JSHandle.js';
import {CdpWebWorker} from './WebWorker.js';

/**
 * @internal
 */
export interface PageBinding {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  pptrFunction: Function;
}

/**
 * @internal
 */
export interface IsolatedWorldChart {
  [key: string]: IsolatedWorld;
  [MAIN_WORLD]: IsolatedWorld;
  [PUPPETEER_WORLD]: IsolatedWorld;
}

/**
 * @internal
 */
export type IsolatedWorldEmitter = EventEmitter<{
  // Emitted when the isolated world gets a new execution context.
  context: ExecutionContext;
  // Emitted when the isolated world is disposed.
  disposed: undefined;
  // Emitted when a new console message is logged.
  consoleapicalled: Protocol.Runtime.ConsoleAPICalledEvent;
  /** Emitted when a binding that is not installed by the ExecutionContext is called. */
  bindingcalled: Protocol.Runtime.BindingCalledEvent;
}>;

/**
 * @internal
 */
export class IsolatedWorld extends Realm {
  #context?: ExecutionContext;
  #emitter: IsolatedWorldEmitter = new EventEmitter();
  #worldId: string | symbol;
  #origin?: string;

  readonly #frameOrWorker: CdpFrame | CdpWebWorker;

  constructor(
    frameOrWorker: CdpFrame | CdpWebWorker,
    timeoutSettings: TimeoutSettings,
    worldId: string | symbol,
  ) {
    super(timeoutSettings);
    this.#frameOrWorker = frameOrWorker;
    this.#worldId = worldId;
  }

  get environment(): CdpFrame | CdpWebWorker {
    return this.#frameOrWorker;
  }

  get client(): CDPSession {
    return this.#frameOrWorker.client;
  }

  get emitter(): IsolatedWorldEmitter {
    return this.#emitter;
  }

  setContext(context: ExecutionContext): void {
    this.#context?.[disposeSymbol]();
    context.once('disposed', this.#onContextDisposed.bind(this));
    context.on('consoleapicalled', this.#onContextConsoleApiCalled.bind(this));
    context.on('bindingcalled', this.#onContextBindingCalled.bind(this));
    this.#context = context;
    this.#emitter.emit('context', context);
    void this.taskManager.rerunAll();
  }

  #onContextDisposed(): void {
    this.#context = undefined;
    if ('clearDocumentHandle' in this.#frameOrWorker) {
      this.#frameOrWorker.clearDocumentHandle();
    }
  }

  #onContextConsoleApiCalled(
    event: Protocol.Runtime.ConsoleAPICalledEvent,
  ): void {
    this.#emitter.emit('consoleapicalled', event);
  }

  #onContextBindingCalled(event: Protocol.Runtime.BindingCalledEvent): void {
    this.#emitter.emit('bindingcalled', event);
  }

  hasContext(): boolean {
    return !!this.#context;
  }

  get context(): ExecutionContext | undefined {
    return this.#context;
  }

  #executionContext(): ExecutionContext | undefined {
    if (this.disposed) {
      throw new Error(
        `Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`,
      );
    }
    return this.#context;
  }

  /**
   * Waits for the next context to be set on the isolated world.
   */
  async #waitForExecutionContext(): Promise<ExecutionContext> {
    const error = new Error('Execution context was destroyed');
    const result = await firstValueFrom(
      fromEmitterEvent(this.#emitter, 'context').pipe(
        raceWith(
          fromEmitterEvent(this.#emitter, 'disposed').pipe(
            map(() => {
              // The message has to match the CDP message expected by the WaitTask class.
              throw error;
            }),
          ),
          timeout(this.timeoutSettings.timeout()),
        ),
      ),
    );
    return result;
  }

  async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluateHandle.name,
      pageFunction,
    );
    // This code needs to schedule evaluateHandle call synchronously (at
    // least when the context is there) so we cannot unconditionally
    // await.
    let context = this.#executionContext();
    if (!context) {
      context = await this.#waitForExecutionContext();
    }
    return await context.evaluateHandle(pageFunction, ...args);
  }

  async evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluate.name,
      pageFunction,
    );
    // This code needs to schedule evaluate call synchronously (at
    // least when the context is there) so we cannot unconditionally
    // await.
    let context = this.#executionContext();
    if (!context) {
      context = await this.#waitForExecutionContext();
    }
    return await context.evaluate(pageFunction, ...args);
  }

  override async adoptBackendNode(
    backendNodeId?: Protocol.DOM.BackendNodeId,
  ): Promise<JSHandle<Node>> {
    // This code needs to schedule resolveNode call synchronously (at
    // least when the context is there) so we cannot unconditionally
    // await.
    let context = this.#executionContext();
    if (!context) {
      context = await this.#waitForExecutionContext();
    }
    const {object} = await this.client.send('DOM.resolveNode', {
      backendNodeId: backendNodeId,
      executionContextId: context.id,
    });
    return this.createCdpHandle(object) as JSHandle<Node>;
  }

  async adoptHandle<T extends JSHandle<Node>>(handle: T): Promise<T> {
    if (handle.realm === this) {
      // If the context has already adopted this handle, clone it so downstream
      // disposal doesn't become an issue.
      return (await handle.evaluateHandle(value => {
        return value;
      })) as unknown as T;
    }
    const nodeInfo = await this.client.send('DOM.describeNode', {
      objectId: handle.id,
    });
    return (await this.adoptBackendNode(nodeInfo.node.backendNodeId)) as T;
  }

  async transferHandle<T extends JSHandle<Node>>(handle: T): Promise<T> {
    if (handle.realm === this) {
      return handle;
    }
    // Implies it's a primitive value, probably.
    if (handle.remoteObject().objectId === undefined) {
      return handle;
    }
    const info = await this.client.send('DOM.describeNode', {
      objectId: handle.remoteObject().objectId,
    });
    const newHandle = (await this.adoptBackendNode(
      info.node.backendNodeId,
    )) as T;
    await handle.dispose();
    return newHandle;
  }

  /**
   * @internal
   */
  createCdpHandle(
    remoteObject: Protocol.Runtime.RemoteObject,
  ): JSHandle | ElementHandle<Node> {
    if (remoteObject.subtype === 'node') {
      return new CdpElementHandle(this, remoteObject);
    }
    return new CdpJSHandle(this, remoteObject);
  }

  override [disposeSymbol](): void {
    this.#context?.[disposeSymbol]();
    this.#emitter.emit('disposed', undefined);
    this.#emitter.removeAllListeners();
    super[disposeSymbol]();
  }

  override get origin(): string | undefined {
    return this.#origin;
  }

  set origin(origin: string) {
    this.#origin = origin;
  }

  setWorldId(worldId: string | symbol): void {
    this.#worldId = worldId;
  }

  async extension(): Promise<Extension | null> {
    if (this.#frameOrWorker instanceof CdpWebWorker) {
      throw new Error('Unable to get extension from Realm');
    }

    if (this.#worldId === MAIN_WORLD) {
      return null;
    }

    if (typeof this.#worldId === 'string') {
      const extensions = await this.#frameOrWorker._frameManager
        .page()
        .browser()
        .extensions();
      return extensions.get(this.#worldId) ?? null;
    }

    return null;
  }
}
