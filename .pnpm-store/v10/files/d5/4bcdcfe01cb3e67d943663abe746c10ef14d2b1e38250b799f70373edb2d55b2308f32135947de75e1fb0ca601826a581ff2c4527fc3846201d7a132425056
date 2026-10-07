/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import {JSHandle} from '../api/JSHandle.js';
import {debugError} from '../common/util.js';
import {DisposableStack} from '../util/disposable.js';
import {isErrorLike} from '../util/ErrorLike.js';

import type {ExecutionContext} from './ExecutionContext.js';

/**
 * @internal
 */
export class Binding {
  #name: string;
  #fn: (...args: unknown[]) => unknown;
  #initSource: string;
  constructor(
    name: string,
    fn: (...args: unknown[]) => unknown,
    initSource: string,
  ) {
    this.#name = name;
    this.#fn = fn;
    this.#initSource = initSource;
  }

  get name(): string {
    return this.#name;
  }

  get initSource(): string {
    return this.#initSource;
  }

  /**
   * @param context - Context to run the binding in; the context should have
   * the binding added to it beforehand.
   * @param id - ID of the call. This should come from the CDP
   * `onBindingCalled` response.
   * @param args - Plain arguments from CDP.
   */
  async run(
    context: ExecutionContext,
    id: number,
    args: unknown[],
    isTrivial: boolean,
  ): Promise<void> {
    const stack = new DisposableStack();
    try {
      if (!isTrivial) {
        // Getting non-trivial arguments.
        using handles = await context.evaluateHandle(
          (name, seq) => {
            // @ts-expect-error Code is evaluated in a different context.
            return globalThis[name].args.get(seq);
          },
          this.#name,
          id,
        );
        const properties = await handles.getProperties();
        for (const [index, handle] of properties) {
          // This is not straight-forward since some arguments can stringify, but
          // aren't plain objects so add subtypes when the use-case arises.
          if (index in args) {
            switch (handle.remoteObject().subtype) {
              case 'node':
                args[+index] = handle;
                break;
              default:
                stack.use(handle);
            }
          } else {
            stack.use(handle);
          }
        }
      }

      await context.evaluate(
        (name, seq, result) => {
          // @ts-expect-error Code is evaluated in a different context.
          const callbacks = globalThis[name].callbacks;
          callbacks.get(seq).resolve(result);
          callbacks.delete(seq);
        },
        this.#name,
        id,
        await this.#fn(...args),
      );

      for (const arg of args) {
        if (arg instanceof JSHandle) {
          stack.use(arg);
        }
      }
    } catch (error) {
      if (isErrorLike(error)) {
        await context
          .evaluate(
            (name, seq, message, stack) => {
              const error = new Error(message);
              error.stack = stack;
              // @ts-expect-error Code is evaluated in a different context.
              const callbacks = globalThis[name].callbacks;
              callbacks.get(seq).reject(error);
              callbacks.delete(seq);
            },
            this.#name,
            id,
            error.message,
            error.stack,
          )
          .catch(debugError);
      } else {
        await context
          .evaluate(
            (name, seq, error) => {
              // @ts-expect-error Code is evaluated in a different context.
              const callbacks = globalThis[name].callbacks;
              callbacks.get(seq).reject(error);
              callbacks.delete(seq);
            },
            this.#name,
            id,
            error,
          )
          .catch(debugError);
      }
    }
  }
}
