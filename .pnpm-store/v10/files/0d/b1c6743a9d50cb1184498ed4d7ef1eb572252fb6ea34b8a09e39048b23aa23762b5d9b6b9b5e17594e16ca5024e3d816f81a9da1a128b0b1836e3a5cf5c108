/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {assert} from '../util/assert.js';
import {Deferred} from '../util/Deferred.js';

/**
 * @internal
 */
export interface Poller<T> {
  start(): Promise<void>;
  stop(): Promise<void>;
  result(): Promise<T>;
}

/**
 * @internal
 */
export class MutationPoller<T> implements Poller<T> {
  #fn: () => Promise<T>;

  #root: Node;

  #observer?: MutationObserver;
  #deferred?: Deferred<T>;
  constructor(fn: () => Promise<T>, root: Node) {
    this.#fn = fn;
    this.#root = root;
  }

  async start(): Promise<void> {
    const deferred = (this.#deferred = Deferred.create<T>());
    const result = await this.#fn();
    if (result) {
      deferred.resolve(result);
      return;
    }

    this.#observer = new MutationObserver(async () => {
      const result = await this.#fn();
      if (!result) {
        return;
      }
      deferred.resolve(result);
      await this.stop();
    });
    this.#observer.observe(this.#root, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  async stop(): Promise<void> {
    assert(this.#deferred, 'Polling never started.');
    if (!this.#deferred.finished()) {
      this.#deferred.reject(new Error('Polling stopped'));
    }
    if (this.#observer) {
      this.#observer.disconnect();
      this.#observer = undefined;
    }
  }

  result(): Promise<T> {
    assert(this.#deferred, 'Polling never started.');
    return this.#deferred.valueOrThrow();
  }
}

/**
 * @internal
 */
export class RAFPoller<T> implements Poller<T> {
  #fn: () => Promise<T>;
  #deferred?: Deferred<T>;
  constructor(fn: () => Promise<T>) {
    this.#fn = fn;
  }

  async start(): Promise<void> {
    const deferred = (this.#deferred = Deferred.create<T>());
    const result = await this.#fn();
    if (result) {
      deferred.resolve(result);
      return;
    }

    const poll = async () => {
      if (deferred.finished()) {
        return;
      }
      const result = await this.#fn();
      if (!result) {
        window.requestAnimationFrame(poll);
        return;
      }
      deferred.resolve(result);
      await this.stop();
    };
    window.requestAnimationFrame(poll);
  }

  async stop(): Promise<void> {
    assert(this.#deferred, 'Polling never started.');
    if (!this.#deferred.finished()) {
      this.#deferred.reject(new Error('Polling stopped'));
    }
  }

  result(): Promise<T> {
    assert(this.#deferred, 'Polling never started.');
    return this.#deferred.valueOrThrow();
  }
}

/**
 * @internal
 */

export class IntervalPoller<T> implements Poller<T> {
  #fn: () => Promise<T>;
  #ms: number;

  #interval?: NodeJS.Timeout;
  #deferred?: Deferred<T>;
  constructor(fn: () => Promise<T>, ms: number) {
    this.#fn = fn;
    this.#ms = ms;
  }

  async start(): Promise<void> {
    const deferred = (this.#deferred = Deferred.create<T>());
    const result = await this.#fn();
    if (result) {
      deferred.resolve(result);
      return;
    }

    this.#interval = setInterval(async () => {
      const result = await this.#fn();
      if (!result) {
        return;
      }
      deferred.resolve(result);
      await this.stop();
    }, this.#ms);
  }

  async stop(): Promise<void> {
    assert(this.#deferred, 'Polling never started.');
    if (!this.#deferred.finished()) {
      this.#deferred.reject(new Error('Polling stopped'));
    }
    if (this.#interval) {
      clearInterval(this.#interval);
      this.#interval = undefined;
    }
  }

  result(): Promise<T> {
    assert(this.#deferred, 'Polling never started.');
    return this.#deferred.valueOrThrow();
  }
}
