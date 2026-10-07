/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Bidi from 'webdriver-bidi-protocol';

import type {Extension} from '../api/Extension.js';
import type {JSHandle} from '../api/JSHandle.js';
import {Realm} from '../api/Realm.js';
import {WebWorkerEvent} from '../api/WebWorker.js';
import {ARIAQueryHandler} from '../common/AriaQueryHandler.js';
import {LazyArg} from '../common/LazyArg.js';
import {scriptInjector} from '../common/ScriptInjector.js';
import type {TimeoutSettings} from '../common/TimeoutSettings.js';
import type {EvaluateFunc, HandleFor} from '../common/types.js';
import {
  debugError,
  getSourcePuppeteerURLIfAvailable,
  getSourceUrlComment,
  isString,
  PuppeteerURL,
  SOURCE_URL_REGEX,
} from '../common/util.js';
import {UnsupportedOperation} from '../index-browser.js';
import type {PuppeteerInjectedUtil} from '../injected/injected.js';
import {AsyncIterableUtil} from '../util/AsyncIterableUtil.js';
import {stringifyFunction} from '../util/Function.js';

import type {
  Realm as BidiRealmCore,
  DedicatedWorkerRealm,
  SharedWorkerRealm,
} from './core/Realm.js';
import type {WindowRealm} from './core/Realm.js';
import {BidiDeserializer} from './Deserializer.js';
import {BidiElementHandle} from './ElementHandle.js';
import {ExposableFunction} from './ExposedFunction.js';
import type {BidiFrame} from './Frame.js';
import {BidiJSHandle} from './JSHandle.js';
import {BidiSerializer} from './Serializer.js';
import {
  createEvaluationError,
  getConsoleMessage,
  isConsoleLogEntry,
  rewriteEvaluationError,
} from './util.js';
import type {BidiWebWorker} from './WebWorker.js';

/**
 * @internal
 */
export abstract class BidiRealm extends Realm {
  readonly realm: BidiRealmCore;

  constructor(realm: BidiRealmCore, timeoutSettings: TimeoutSettings) {
    super(timeoutSettings);
    this.realm = realm;
  }

  protected initialize(): void {
    this.realm.on('destroyed', reason => {
      this.taskManager.terminateAll(new Error(reason));
      this.dispose();
    });
    this.realm.on('updated', () => {
      this.internalPuppeteerUtil = undefined;
      void this.taskManager.rerunAll();
    });
  }

  protected internalPuppeteerUtil?: Promise<
    BidiJSHandle<PuppeteerInjectedUtil>
  >;
  get puppeteerUtil(): Promise<BidiJSHandle<PuppeteerInjectedUtil>> {
    const promise = Promise.resolve() as Promise<unknown>;
    scriptInjector.inject(script => {
      if (this.internalPuppeteerUtil) {
        void this.internalPuppeteerUtil.then(handle => {
          void handle.dispose();
        });
      }
      this.internalPuppeteerUtil = promise.then(() => {
        return this.evaluateHandle(script) as Promise<
          BidiJSHandle<PuppeteerInjectedUtil>
        >;
      });
    }, !this.internalPuppeteerUtil);
    return this.internalPuppeteerUtil as Promise<
      BidiJSHandle<PuppeteerInjectedUtil>
    >;
  }

  override async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    return await this.#evaluate(false, pageFunction, ...args);
  }

  override async evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    return await this.#evaluate(true, pageFunction, ...args);
  }

  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    returnByValue: true,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    returnByValue: false,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    returnByValue: boolean,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>> | Awaited<ReturnType<Func>>> {
    const sourceUrlComment = getSourceUrlComment(
      getSourcePuppeteerURLIfAvailable(pageFunction)?.toString() ??
        PuppeteerURL.INTERNAL_URL,
    );

    let responsePromise;
    const resultOwnership = returnByValue
      ? Bidi.Script.ResultOwnership.None
      : Bidi.Script.ResultOwnership.Root;
    const serializationOptions: Bidi.Script.SerializationOptions = returnByValue
      ? {}
      : {
          maxObjectDepth: 0,
          maxDomDepth: 0,
        };
    if (isString(pageFunction)) {
      const expression = SOURCE_URL_REGEX.test(pageFunction)
        ? pageFunction
        : `${pageFunction}\n${sourceUrlComment}\n`;

      responsePromise = this.realm.evaluate(expression, true, {
        resultOwnership,
        userActivation: true,
        serializationOptions,
      });
    } else {
      let functionDeclaration = stringifyFunction(pageFunction);
      functionDeclaration = SOURCE_URL_REGEX.test(functionDeclaration)
        ? functionDeclaration
        : `${functionDeclaration}\n${sourceUrlComment}\n`;
      responsePromise = this.realm.callFunction(
        functionDeclaration,
        /* awaitPromise= */ true,
        {
          // LazyArgs are used only internally and should not affect the order
          // evaluate calls for the public APIs.
          arguments: args.some(arg => {
            return arg instanceof LazyArg;
          })
            ? await Promise.all(
                args.map(arg => {
                  return this.serializeAsync(arg);
                }),
              )
            : args.map(arg => {
                return this.serialize(arg);
              }),
          resultOwnership,
          userActivation: true,
          serializationOptions,
        },
      );
    }

    const result = await responsePromise.catch(rewriteEvaluationError);

    if ('type' in result && result.type === 'exception') {
      throw createEvaluationError(result.exceptionDetails);
    }

    if (returnByValue) {
      return BidiDeserializer.deserialize(result.result);
    }

    return this.createHandle(result.result) as unknown as HandleFor<
      Awaited<ReturnType<Func>>
    >;
  }

  createHandle(
    result: Bidi.Script.RemoteValue,
  ): BidiJSHandle<unknown> | BidiElementHandle<Node> {
    if (
      (result.type === 'node' || result.type === 'window') &&
      this instanceof BidiFrameRealm
    ) {
      return BidiElementHandle.from(result, this);
    }
    return BidiJSHandle.from(result, this);
  }

  async serializeAsync(arg: unknown): Promise<Bidi.Script.LocalValue> {
    if (arg instanceof LazyArg) {
      arg = await arg.get(this);
    }
    return this.serialize(arg);
  }

  serialize(arg: unknown): Bidi.Script.LocalValue {
    if (arg instanceof BidiJSHandle || arg instanceof BidiElementHandle) {
      if (arg.realm !== this) {
        if (
          !(arg.realm instanceof BidiFrameRealm) ||
          !(this instanceof BidiFrameRealm)
        ) {
          throw new Error(
            "Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.",
          );
        }
        if (arg.realm.environment !== this.environment) {
          throw new Error(
            "Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.",
          );
        }
      }
      if (arg.disposed) {
        throw new Error('JSHandle is disposed!');
      }
      return arg.remoteValue() as Bidi.Script.RemoteReference;
    }

    return BidiSerializer.serialize(arg);
  }

  async destroyHandles(handles: Array<BidiJSHandle<unknown>>): Promise<void> {
    if (this.disposed) {
      return;
    }

    const handleIds = handles
      .map(({id}) => {
        return id;
      })
      .filter((id): id is string => {
        return id !== undefined;
      });

    if (handleIds.length === 0) {
      return;
    }

    await this.realm.disown(handleIds).catch(error => {
      // Exceptions might happen in case of a page been navigated or closed.
      // Swallow these since they are harmless and we don't leak anything in this case.
      debugError(error);
    });
  }

  override async adoptHandle<T extends JSHandle<Node>>(handle: T): Promise<T> {
    return (await this.evaluateHandle(node => {
      return node;
    }, handle)) as unknown as T;
  }

  override async transferHandle<T extends JSHandle<Node>>(
    handle: T,
  ): Promise<T> {
    if (handle.realm === this) {
      return handle;
    }
    const transferredHandle = this.adoptHandle(handle);
    await handle.dispose();
    return await transferredHandle;
  }

  extension(): Promise<Extension | null> {
    throw new UnsupportedOperation();
  }

  override get origin(): string {
    throw new UnsupportedOperation();
  }
}

/**
 * @internal
 */
export class BidiFrameRealm extends BidiRealm {
  static from(realm: WindowRealm, frame: BidiFrame): BidiFrameRealm {
    const frameRealm = new BidiFrameRealm(realm, frame);
    frameRealm.#initialize();
    return frameRealm;
  }
  declare readonly realm: WindowRealm;

  readonly #frame: BidiFrame;

  private constructor(realm: WindowRealm, frame: BidiFrame) {
    super(realm, frame.timeoutSettings);
    this.#frame = frame;
  }

  #initialize() {
    super.initialize();

    // This should run first.
    this.realm.on('updated', () => {
      this.environment.clearDocumentHandle();
      this.#bindingsInstalled = false;
    });
  }

  #bindingsInstalled = false;
  override get puppeteerUtil(): Promise<BidiJSHandle<PuppeteerInjectedUtil>> {
    let promise = Promise.resolve() as Promise<unknown>;
    if (!this.#bindingsInstalled) {
      promise = Promise.all([
        ExposableFunction.from(
          this.environment,
          '__ariaQuerySelector',
          ARIAQueryHandler.queryOne,
          !!this.sandbox,
        ),
        ExposableFunction.from(
          this.environment,
          '__ariaQuerySelectorAll',
          async (
            element: BidiElementHandle<Node>,
            selector: string,
          ): Promise<JSHandle<Node[]>> => {
            const results = ARIAQueryHandler.queryAll(element, selector);
            return await element.realm.evaluateHandle(
              (...elements) => {
                return elements;
              },
              ...(await AsyncIterableUtil.collect(results)),
            );
          },
          !!this.sandbox,
        ),
      ]);
      this.#bindingsInstalled = true;
    }
    return promise.then(() => {
      return super.puppeteerUtil;
    });
  }

  get sandbox(): string | undefined {
    return this.realm.sandbox;
  }

  override get environment(): BidiFrame {
    return this.#frame;
  }

  override async adoptBackendNode(
    backendNodeId?: number | undefined,
  ): Promise<JSHandle<Node>> {
    const {object} = await this.#frame.client.send('DOM.resolveNode', {
      backendNodeId,
      executionContextId: await this.realm.resolveExecutionContextId(),
    });
    using handle = BidiElementHandle.from(
      {
        handle: object.objectId,
        type: 'node',
      },
      this,
    );
    // We need the sharedId, so we perform the following to obtain it.
    return await handle.evaluateHandle(element => {
      return element;
    });
  }
}

/**
 * @internal
 */
export class BidiWorkerRealm extends BidiRealm {
  static from(
    realm: DedicatedWorkerRealm | SharedWorkerRealm,
    worker: BidiWebWorker,
  ): BidiWorkerRealm {
    const workerRealm = new BidiWorkerRealm(realm, worker);
    workerRealm.initialize();
    return workerRealm;
  }
  declare readonly realm: DedicatedWorkerRealm | SharedWorkerRealm;

  readonly #worker: BidiWebWorker;

  private constructor(
    realm: DedicatedWorkerRealm | SharedWorkerRealm,
    frame: BidiWebWorker,
  ) {
    super(realm, frame.timeoutSettings);
    this.#worker = frame;
  }

  override initialize(): void {
    super.initialize();
    this.realm.on('log', entry => {
      if (
        isConsoleLogEntry(entry) &&
        this.#worker.listenerCount(WebWorkerEvent.Console)
      ) {
        const args = entry.args.map(arg => {
          return this.createHandle(arg);
        });

        const message = getConsoleMessage(
          entry,
          args,
          undefined,
          this.realm.id,
        );
        this.#worker.emit(WebWorkerEvent.Console, message);
      }
    });
  }

  override get environment(): BidiWebWorker {
    return this.#worker;
  }

  override async adoptBackendNode(): Promise<JSHandle<Node>> {
    throw new Error('Cannot adopt DOM nodes into a worker.');
  }
}
