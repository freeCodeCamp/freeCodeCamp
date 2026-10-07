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
var _a;
import { LogType } from './log.js';
export class ProcessingQueue {
    static LOGGER_PREFIX = `${LogType.debug}:queue`;
    #logger;
    #processor;
    #queue = [];
    // Flag to keep only 1 active processor.
    #isProcessing = false;
    constructor(processor, logger) {
        this.#processor = processor;
        this.#logger = logger;
    }
    add(entry, name) {
        this.#queue.push([entry, name]);
        // No need in waiting. Just initialize processor if needed.
        void this.#processIfNeeded();
    }
    async #processIfNeeded() {
        if (this.#isProcessing) {
            return;
        }
        this.#isProcessing = true;
        while (this.#queue.length > 0) {
            const arrayEntry = this.#queue.shift();
            if (!arrayEntry) {
                continue;
            }
            const [entryPromise, name] = arrayEntry;
            this.#logger?.(_a.LOGGER_PREFIX, 'Processing event:', name);
            await entryPromise
                .then((entry) => {
                if (entry.kind === 'error') {
                    this.#logger?.(LogType.debugError, 'Event threw before sending:', entry.error.message, entry.error.stack);
                    return;
                }
                return this.#processor(entry.value);
            })
                .catch((error) => {
                this.#logger?.(LogType.debugError, 'Event was not processed:', error?.message);
            });
        }
        this.#isProcessing = false;
    }
}
_a = ProcessingQueue;
//# sourceMappingURL=ProcessingQueue.js.map