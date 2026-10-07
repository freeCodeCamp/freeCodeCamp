/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
export class TaskQueue {
  #chain: Promise<void>;

  constructor() {
    this.#chain = Promise.resolve();
  }

  postTask<T>(task: () => Promise<T>): Promise<T> {
    const result = this.#chain.then(task);
    this.#chain = result.then(
      () => {
        return undefined;
      },
      () => {
        return undefined;
      },
    );
    return result;
  }
}
