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
import mitt from 'mitt';
export class EventEmitter {
    #emitter = mitt();
    on(type, handler) {
        this.#emitter.on(type, handler);
        return this;
    }
    /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param event The event you'd like to listen to
     * @param handler The handler function to run when the event occurs
     * @return `this` to enable chaining method calls.
     */
    once(event, handler) {
        const onceHandler = (eventData) => {
            handler(eventData);
            this.off(event, onceHandler);
        };
        return this.on(event, onceHandler);
    }
    off(type, handler) {
        this.#emitter.off(type, handler);
        return this;
    }
    /**
     * Emits an event and call any associated listeners.
     *
     * @param event The event to emit.
     * @param eventData Any data to emit with the event.
     * @return `true` if there are any listeners, `false` otherwise.
     */
    emit(event, eventData) {
        this.#emitter.emit(event, eventData);
    }
    /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     * @param event - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */
    removeAllListeners(event) {
        if (event) {
            this.#emitter.all.delete(event);
        }
        else {
            this.#emitter.all.clear();
        }
        return this;
    }
}
//# sourceMappingURL=EventEmitter.js.map