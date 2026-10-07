/**
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 * Copyright 2022 The Chromium Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Use Mutex class to coordinate local concurrent operations.
 * Once `acquire` promise resolves, you hold the lock and must
 * call `release` function returned by `acquire` to release the
 * lock. Failing to `release` the lock may lead to deadlocks.
 */
export class Mutex {
    #locked = false;
    #acquirers = [];
    // This is FIFO.
    acquire() {
        const state = { resolved: false };
        if (this.#locked) {
            return new Promise((resolve) => {
                this.#acquirers.push(() => resolve(this.#release.bind(this, state)));
            });
        }
        this.#locked = true;
        return Promise.resolve(this.#release.bind(this, state));
    }
    #release(state) {
        if (state.resolved) {
            throw new Error('Cannot release more than once.');
        }
        state.resolved = true;
        const resolve = this.#acquirers.shift();
        if (!resolve) {
            this.#locked = false;
            return;
        }
        resolve();
    }
    async run(action) {
        const release = await this.acquire();
        try {
            // Note we need to await here because we want the await to release AFTER
            // that await happens. Returning action() will trigger the release
            // immediately which is counter to what we want.
            const result = await action();
            return result;
        }
        finally {
            release();
        }
    }
}
//# sourceMappingURL=Mutex.js.map