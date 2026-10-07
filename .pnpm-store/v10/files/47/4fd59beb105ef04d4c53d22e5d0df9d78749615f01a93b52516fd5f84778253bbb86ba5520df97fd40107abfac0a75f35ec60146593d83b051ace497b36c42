/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type Protocol from 'devtools-protocol';

import type {EvaluateFuncWith, HandleFor, HandleOr} from '../common/types.js';
import {debugError, withSourcePuppeteerURLIfNone} from '../common/util.js';
import {moveable, throwIfDisposed} from '../util/decorators.js';
import {disposeSymbol, asyncDisposeSymbol} from '../util/disposable.js';

import type {ElementHandle} from './ElementHandle.js';
import type {Realm} from './Realm.js';

/**
 * Represents a reference to a JavaScript object. Instances can be created using
 * {@link Page.evaluateHandle}.
 *
 * Handles prevent the referenced JavaScript object from being garbage-collected
 * unless the handle is purposely {@link JSHandle.dispose | disposed}. JSHandles
 * are auto-disposed when their associated frame is navigated away or the parent
 * context gets destroyed.
 *
 * Handles can be used as arguments for any evaluation function such as
 * {@link Page.$eval}, {@link Page.evaluate}, and {@link Page.evaluateHandle}.
 * They are resolved to their referenced object.
 *
 * @example
 *
 * ```ts
 * const windowHandle = await page.evaluateHandle(() => window);
 * ```
 *
 * @public
 */
@moveable
export abstract class JSHandle<T = unknown> {
  declare move: () => this;

  /**
   * Used for nominally typing {@link JSHandle}.
   */
  declare _?: T;

  /**
   * @internal
   */
  constructor() {}

  /**
   * @internal
   */
  abstract get realm(): Realm;

  /**
   * @internal
   */
  abstract get disposed(): boolean;

  /**
   * Evaluates the given function with the current handle as its first argument.
   */
  async evaluate<
    Params extends unknown[],
    Func extends EvaluateFuncWith<T, Params> = EvaluateFuncWith<T, Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluate.name,
      pageFunction,
    );
    return await this.realm.evaluate(pageFunction, this, ...args);
  }

  /**
   * Evaluates the given function with the current handle as its first argument.
   *
   */
  async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFuncWith<T, Params> = EvaluateFuncWith<T, Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluateHandle.name,
      pageFunction,
    );
    return await this.realm.evaluateHandle(pageFunction, this, ...args);
  }

  /**
   * Fetches a single property from the referenced object.
   */
  getProperty<K extends keyof T>(
    propertyName: HandleOr<K>,
  ): Promise<HandleFor<T[K]>>;
  getProperty(propertyName: string): Promise<JSHandle<unknown>>;

  /**
   * @internal
   */
  @throwIfDisposed()
  async getProperty<K extends keyof T>(
    propertyName: HandleOr<K>,
  ): Promise<HandleFor<T[K]>> {
    return await this.evaluateHandle((object, propertyName) => {
      return object[propertyName as K];
    }, propertyName);
  }

  /**
   * Gets a map of handles representing the properties of the current handle.
   *
   * @example
   *
   * ```ts
   * const listHandle = await page.evaluateHandle(() => document.body.children);
   * const properties = await listHandle.getProperties();
   * const children = [];
   * for (const property of properties.values()) {
   *   const element = property.asElement();
   *   if (element) {
   *     children.push(element);
   *   }
   * }
   * children; // holds elementHandles to all children of document.body
   * ```
   */
  @throwIfDisposed()
  async getProperties(): Promise<Map<string, JSHandle>> {
    const propertyNames = await this.evaluate(object => {
      const enumerableProperties = [];
      const descriptors = Object.getOwnPropertyDescriptors(object);
      for (const propertyName in descriptors) {
        if (descriptors[propertyName]?.enumerable) {
          enumerableProperties.push(propertyName);
        }
      }
      return enumerableProperties;
    });
    const map = new Map<string, JSHandle>();
    const results = await Promise.all(
      propertyNames.map(key => {
        return this.getProperty(key);
      }),
    );
    for (const [key, value] of Object.entries(propertyNames)) {
      using handle = results[key as any];
      if (handle) {
        map.set(value, handle.move());
      }
    }
    return map;
  }

  /**
   * A vanilla object representing the serializable portions of the
   * referenced object.
   * @throws Throws if the object cannot be serialized due to circularity.
   *
   * @remarks
   * If the object has a `toJSON` function, it **will not** be called.
   */
  abstract jsonValue(): Promise<T>;

  /**
   * Either `null` or the handle itself if the handle is an
   * instance of {@link ElementHandle}.
   */
  abstract asElement(): ElementHandle<Node> | null;

  /**
   * Releases the object referenced by the handle for garbage collection.
   */
  abstract dispose(): Promise<void>;

  /**
   * Returns a string representation of the JSHandle.
   *
   * @remarks
   * Useful during debugging.
   */
  abstract toString(): string;

  /**
   * @internal
   */
  abstract get id(): string | undefined;

  /**
   * Provides access to the
   * {@link https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#type-RemoteObject | Protocol.Runtime.RemoteObject}
   * backing this handle.
   */
  abstract remoteObject(): Protocol.Runtime.RemoteObject;

  /** @internal */
  [disposeSymbol](): void {
    return void this[asyncDisposeSymbol]().catch(debugError);
  }

  /** @internal */
  [asyncDisposeSymbol](): Promise<void> {
    return this.dispose();
  }
}
