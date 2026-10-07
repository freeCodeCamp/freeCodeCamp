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
import { type EventType, type Handler, type WildcardHandler } from 'mitt';
export declare class EventEmitter<Events extends Record<EventType, unknown>> {
    #private;
    /**
     * Binds an event listener to fire when an event occurs.
     * @param event The event type you'd like to listen to. Can be a string or symbol.
     * @param handler The function to be called when the event occurs.
     * @return `this` to enable chaining method calls.
     */
    on(type: '*', handler: WildcardHandler<Events>): this;
    on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): this;
    /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param event The event you'd like to listen to
     * @param handler The handler function to run when the event occurs
     * @return `this` to enable chaining method calls.
     */
    once(event: EventType, handler: Handler): this;
    /**
     * Removes an event listener from firing.
     * @param event The event type you'd like to stop listening to.
     * @param handler The function that should be removed.
     * @return `this` to enable chaining method calls.
     */
    off(type: '*', handler: WildcardHandler<Events>): this;
    off<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): EventEmitter<Events>;
    /**
     * Emits an event and call any associated listeners.
     *
     * @param event The event to emit.
     * @param eventData Any data to emit with the event.
     * @return `true` if there are any listeners, `false` otherwise.
     */
    emit<Key extends keyof Events>(event: Key, eventData: Events[Key]): void;
    /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     * @param event - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */
    removeAllListeners(event?: EventType): this;
}
