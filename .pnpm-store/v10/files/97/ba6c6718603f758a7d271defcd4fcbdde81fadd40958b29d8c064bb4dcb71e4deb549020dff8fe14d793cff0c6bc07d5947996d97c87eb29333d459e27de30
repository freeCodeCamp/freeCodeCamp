/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Bidi from 'webdriver-bidi-protocol';

import {EventEmitter} from '../common/EventEmitter.js';
import type {Awaitable, FlattenHandle} from '../common/types.js';
import {debugError} from '../common/util.js';
import {DisposableStack} from '../util/disposable.js';
import {interpolateFunction, stringifyFunction} from '../util/Function.js';

import type {Connection} from './core/Connection.js';
import {BidiElementHandle} from './ElementHandle.js';
import type {BidiFrame} from './Frame.js';
import {BidiJSHandle} from './JSHandle.js';

type CallbackChannel<Args, Ret> = (
  value: [
    resolve: (ret: FlattenHandle<Awaited<Ret>>) => void,
    reject: (error: unknown) => void,
    args: Args,
  ],
) => void;

/**
 * @internal
 */
export class ExposableFunction<Args extends unknown[], Ret> {
  static async from<Args extends unknown[], Ret>(
    frame: BidiFrame,
    name: string,
    apply: (...args: Args) => Awaitable<Ret>,
    isolate = false,
  ): Promise<ExposableFunction<Args, Ret>> {
    const func = new ExposableFunction(frame, name, apply, isolate);
    await func.#initialize();
    return func;
  }

  readonly #frame;

  readonly name;
  readonly #apply;
  readonly #isolate;

  readonly #channel;

  #scripts: Array<[BidiFrame, Bidi.Script.PreloadScript]> = [];
  #disposables = new DisposableStack();

  constructor(
    frame: BidiFrame,
    name: string,
    apply: (...args: Args) => Awaitable<Ret>,
    isolate = false,
  ) {
    this.#frame = frame;
    this.name = name;
    this.#apply = apply;
    this.#isolate = isolate;

    this.#channel = `__puppeteer__${this.#frame._id}_page_exposeFunction_${this.name}`;
  }

  async #initialize() {
    const connection = this.#connection;
    const channel = {
      type: 'channel' as const,
      value: {
        channel: this.#channel,
        ownership: Bidi.Script.ResultOwnership.Root,
      },
    };

    const connectionEmitter = this.#disposables.use(
      new EventEmitter(connection),
    );
    connectionEmitter.on('script.message', this.#handleMessage);

    const functionDeclaration = stringifyFunction(
      interpolateFunction(
        (callback: CallbackChannel<Args, Ret>) => {
          Object.assign(globalThis, {
            [PLACEHOLDER('name') as string]: function (...args: Args) {
              return new Promise<FlattenHandle<Awaited<Ret>>>(
                (resolve, reject) => {
                  callback([resolve, reject, args]);
                },
              );
            },
          });
        },
        {name: JSON.stringify(this.name)},
      ),
    );

    const frames = [this.#frame];
    for (const frame of frames) {
      frames.push(...frame.childFrames());
    }

    await Promise.all(
      frames.map(async frame => {
        const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
        try {
          const [script] = await Promise.all([
            frame.browsingContext.addPreloadScript(functionDeclaration, {
              arguments: [channel],
              sandbox: realm.sandbox,
            }),
            realm.realm.callFunction(functionDeclaration, false, {
              arguments: [channel],
            }),
          ]);
          this.#scripts.push([frame, script]);
        } catch (error) {
          // If it errors, the frame probably doesn't support call function. We
          // fail gracefully.
          debugError(error);
        }
      }),
    );
  }

  get #connection(): Connection {
    return this.#frame.page().browser().connection;
  }

  #handleMessage = async (params: Bidi.Script.MessageParameters) => {
    if (params.channel !== this.#channel) {
      return;
    }
    const realm = this.#getRealm(params.source);
    if (!realm) {
      // Unrelated message.
      return;
    }

    using dataHandle = BidiJSHandle.from<
      [
        resolve: (ret: FlattenHandle<Awaited<Ret>>) => void,
        reject: (error: unknown) => void,
        args: Args,
      ]
    >(params.data, realm);

    using stack = new DisposableStack();
    const args = [];

    let result;
    try {
      using argsHandle = await dataHandle.evaluateHandle(([, , args]) => {
        return args;
      });

      for (const [index, handle] of await argsHandle.getProperties()) {
        stack.use(handle);

        // Element handles are passed as is.
        if (handle instanceof BidiElementHandle) {
          args[+index] = handle;
          stack.use(handle);
          continue;
        }

        // Everything else is passed as the JS value.
        args[+index] = handle.jsonValue();
      }
      result = await this.#apply(...((await Promise.all(args)) as Args));
    } catch (error) {
      try {
        if (error instanceof Error) {
          await dataHandle.evaluate(
            ([, reject], name, message, stack) => {
              const error = new Error(message);
              error.name = name;
              if (stack) {
                error.stack = stack;
              }
              reject(error);
            },
            error.name,
            error.message,
            error.stack,
          );
        } else {
          await dataHandle.evaluate(([, reject], error) => {
            reject(error);
          }, error);
        }
      } catch (error) {
        debugError(error);
      }
      return;
    }

    try {
      await dataHandle.evaluate(([resolve], result) => {
        resolve(result);
      }, result);
    } catch (error) {
      debugError(error);
    }
  };

  #getRealm(source: Bidi.Script.Source) {
    const frame = this.#findFrame(source.context as string);
    if (!frame) {
      // Unrelated message.
      return;
    }
    return frame.realm(source.realm);
  }

  #findFrame(id: string) {
    const frames = [this.#frame];
    for (const frame of frames) {
      if (frame._id === id) {
        return frame;
      }
      frames.push(...frame.childFrames());
    }
    return;
  }

  [Symbol.dispose](): void {
    void this[Symbol.asyncDispose]().catch(debugError);
  }

  async [Symbol.asyncDispose](): Promise<void> {
    this.#disposables.dispose();
    await Promise.all(
      this.#scripts.map(async ([frame, script]) => {
        const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
        try {
          await Promise.all([
            realm.evaluate(name => {
              delete (globalThis as any)[name];
            }, this.name),
            ...frame.childFrames().map(childFrame => {
              return childFrame.evaluate(name => {
                delete (globalThis as any)[name];
              }, this.name);
            }),
            frame.browsingContext.removePreloadScript(script),
          ]);
        } catch (error) {
          debugError(error);
        }
      }),
    );
  }
}
