/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {AwaitableIterable} from '../common/types.js';

/**
 * @internal
 */
export class AsyncIterableUtil {
  static async *map<T, U>(
    iterable: AwaitableIterable<T>,
    map: (item: T) => Promise<U>,
  ): AsyncIterable<U> {
    for await (const value of iterable) {
      yield await map(value);
    }
  }

  static async *flatMap<T, U>(
    iterable: AwaitableIterable<T>,
    map: (item: T) => AwaitableIterable<U>,
  ): AsyncIterable<U> {
    for await (const value of iterable) {
      yield* map(value);
    }
  }

  static async collect<T>(iterable: AwaitableIterable<T>): Promise<T[]> {
    const result = [];
    for await (const value of iterable) {
      result.push(value);
    }
    return result;
  }

  static async first<T>(
    iterable: AwaitableIterable<T>,
  ): Promise<T | undefined> {
    for await (const value of iterable) {
      return value;
    }
    return;
  }
}
