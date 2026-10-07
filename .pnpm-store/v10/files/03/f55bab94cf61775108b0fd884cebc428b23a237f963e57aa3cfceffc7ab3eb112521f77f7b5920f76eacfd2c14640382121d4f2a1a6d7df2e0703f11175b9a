/**
 * Copyright 2022 Google LLC.
 * Copyright (c) Microsoft Corporation.
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
export class Deferred {
    #isFinished = false;
    #promise;
    #result;
    #resolve;
    #reject;
    get isFinished() {
        return this.#isFinished;
    }
    get result() {
        if (!this.#isFinished) {
            throw new Error('Deferred is not finished yet');
        }
        return this.#result;
    }
    constructor() {
        this.#promise = new Promise((resolve, reject) => {
            this.#resolve = resolve;
            this.#reject = reject;
        });
        // Needed to avoid `Uncaught (in promise)`. The promises returned by `then`
        // and `catch` will be rejected anyway.
        this.#promise.catch((_error) => {
            // Intentionally empty.
        });
    }
    then(onFulfilled, onRejected) {
        return this.#promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.#promise.catch(onRejected);
    }
    resolve(value) {
        this.#result = value;
        if (!this.#isFinished) {
            this.#isFinished = true;
            this.#resolve(value);
        }
    }
    reject(reason) {
        if (!this.#isFinished) {
            this.#isFinished = true;
            this.#reject(reason);
        }
    }
    finally(onFinally) {
        return this.#promise.finally(onFinally);
    }
    [Symbol.toStringTag] = 'Promise';
}
//# sourceMappingURL=Deferred.js.map