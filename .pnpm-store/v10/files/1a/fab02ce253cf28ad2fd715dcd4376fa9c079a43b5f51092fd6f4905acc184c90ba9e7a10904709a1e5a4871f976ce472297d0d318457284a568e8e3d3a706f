/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
export class TaskQueue {
    #chain;
    constructor() {
        this.#chain = Promise.resolve();
    }
    postTask(task) {
        const result = this.#chain.then(task);
        this.#chain = result.then(() => {
            return undefined;
        }, () => {
            return undefined;
        });
        return result;
    }
}
//# sourceMappingURL=TaskQueue.js.map