/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {JSHandle} from '../api/JSHandle.js';
import type {PuppeteerInjectedUtil} from '../injected/injected.js';

/**
 * @internal
 */
export interface PuppeteerUtilWrapper {
  puppeteerUtil: Promise<JSHandle<PuppeteerInjectedUtil>>;
}

/**
 * @internal
 */
export class LazyArg<T, Context = PuppeteerUtilWrapper> {
  static create = <T>(
    get: (context: PuppeteerUtilWrapper) => Promise<T> | T,
  ): T => {
    // We don't want to introduce LazyArg to the type system, otherwise we would
    // have to make it public.
    return new LazyArg(get) as unknown as T;
  };

  #get: (context: Context) => Promise<T> | T;
  private constructor(get: (context: Context) => Promise<T> | T) {
    this.#get = get;
  }

  async get(context: Context): Promise<T> {
    return await this.#get(context);
  }
}
