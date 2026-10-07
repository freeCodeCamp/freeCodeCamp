/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Deferred } from './Deferred.js';
import { disposeSymbol } from './disposable.js';
/**
 * @internal
 */
export class Mutex {
    static Guard = class Guard {
        #mutex;
        #onRelease;
        constructor(mutex, onRelease) {
            this.#mutex = mutex;
            this.#onRelease = onRelease;
        }
        [disposeSymbol]() {
            this.#onRelease?.();
            return this.#mutex.release();
        }
    };
    #locked = false;
    #acquirers = [];
    // This is FIFO.
    async acquire(onRelease) {
        if (!this.#locked) {
            this.#locked = true;
            return new Mutex.Guard(this, onRelease);
        }
        const deferred = Deferred.create();
        this.#acquirers.push(deferred.resolve.bind(deferred));
        await deferred.valueOrThrow();
        return new Mutex.Guard(this, onRelease);
    }
    release() {
        const resolve = this.#acquirers.shift();
        if (!resolve) {
            this.#locked = false;
            return;
        }
        resolve();
    }
}
//# sourceMappingURL=Mutex.js.map