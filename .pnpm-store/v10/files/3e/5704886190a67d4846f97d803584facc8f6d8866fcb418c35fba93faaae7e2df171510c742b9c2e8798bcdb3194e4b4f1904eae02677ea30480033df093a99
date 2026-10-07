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
/** Implements a FIFO buffer with a fixed size. */
export class Buffer {
    #capacity;
    #entries = [];
    #onItemRemoved;
    /**
     * @param capacity The buffer capacity.
     * @param onItemRemoved Delegate called for each removed element.
     */
    constructor(capacity, onItemRemoved) {
        this.#capacity = capacity;
        this.#onItemRemoved = onItemRemoved;
    }
    get() {
        return this.#entries;
    }
    add(value) {
        this.#entries.push(value);
        while (this.#entries.length > this.#capacity) {
            const item = this.#entries.shift();
            if (item !== undefined) {
                this.#onItemRemoved?.(item);
            }
        }
    }
}
//# sourceMappingURL=Buffer.js.map