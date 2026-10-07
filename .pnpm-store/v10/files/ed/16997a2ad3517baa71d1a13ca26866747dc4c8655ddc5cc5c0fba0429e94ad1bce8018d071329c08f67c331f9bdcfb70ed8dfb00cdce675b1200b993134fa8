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
import { ChromiumBidi, InvalidArgumentException, } from '../../../protocol/protocol.js';
import { Buffer } from '../../../utils/Buffer.js';
import { DefaultMap } from '../../../utils/DefaultMap.js';
import { EventEmitter } from '../../../utils/EventEmitter.js';
import { IdWrapper } from '../../../utils/IdWrapper.js';
import { OutgoingMessage } from '../../OutgoingMessage.js';
import { assertSupportedEvent } from './events.js';
import { difference, SubscriptionManager, unrollEvents, } from './SubscriptionManager.js';
class EventWrapper {
    #idWrapper = new IdWrapper();
    #contextId;
    #event;
    constructor(event, contextId) {
        this.#event = event;
        this.#contextId = contextId;
    }
    get id() {
        return this.#idWrapper.id;
    }
    get contextId() {
        return this.#contextId;
    }
    get event() {
        return this.#event;
    }
}
/**
 * Maps event name to a desired buffer length.
 */
const eventBufferLength = new Map([[ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
export class EventManager extends EventEmitter {
    /**
     * Maps event name to a set of contexts where this event already happened.
     * Needed for getting buffered events from all the contexts in case of
     * subscripting to all contexts.
     */
    #eventToContextsMap = new DefaultMap(() => new Set());
    /**
     * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
     * during subscription. Channel-agnostic.
     */
    #eventBuffers = new Map();
    /**
     * Maps `eventName` + `browsingContext` to  Map of goog:channel to last id.
     * Used to avoid sending duplicated events when user
     * subscribes -> unsubscribes -> subscribes.
     */
    #lastMessageSent = new Map();
    #subscriptionManager;
    #browsingContextStorage;
    /**
     * Map of event name to hooks to be called when client is subscribed to the event.
     */
    #subscribeHooks;
    #userContextStorage;
    constructor(browsingContextStorage, userContextStorage) {
        super();
        this.#browsingContextStorage = browsingContextStorage;
        this.#userContextStorage = userContextStorage;
        this.#subscriptionManager = new SubscriptionManager(browsingContextStorage);
        this.#subscribeHooks = new DefaultMap(() => []);
    }
    get subscriptionManager() {
        return this.#subscriptionManager;
    }
    /**
     * Returns consistent key to be used to access value maps.
     */
    static #getMapKey(eventName, browsingContext) {
        return JSON.stringify({ eventName, browsingContext });
    }
    addSubscribeHook(event, hook) {
        this.#subscribeHooks.get(event).push(hook);
    }
    registerEvent(event, contextId) {
        this.registerPromiseEvent(Promise.resolve({
            kind: 'success',
            value: event,
        }), contextId, event.method);
    }
    registerGlobalEvent(event) {
        this.registerGlobalPromiseEvent(Promise.resolve({
            kind: 'success',
            value: event,
        }), event.method);
    }
    registerPromiseEvent(event, contextId, eventName) {
        const eventWrapper = new EventWrapper(event, contextId);
        const sortedGoogChannels = this.#subscriptionManager.getGoogChannelsSubscribedToEvent(eventName, contextId);
        this.#bufferEvent(eventWrapper, eventName);
        // Send events to channels in the subscription priority.
        for (const googChannel of sortedGoogChannels) {
            this.emit("event" /* EventManagerEvents.Event */, {
                message: OutgoingMessage.createFromPromise(event, googChannel),
                event: eventName,
            });
            this.#markEventSent(eventWrapper, googChannel, eventName);
        }
    }
    registerGlobalPromiseEvent(event, eventName) {
        const eventWrapper = new EventWrapper(event, null);
        const sortedGoogChannels = this.#subscriptionManager.getGoogChannelsSubscribedToEventGlobally(eventName);
        this.#bufferEvent(eventWrapper, eventName);
        // Send events to goog:channels in the subscription priority.
        for (const googChannel of sortedGoogChannels) {
            this.emit("event" /* EventManagerEvents.Event */, {
                message: OutgoingMessage.createFromPromise(event, googChannel),
                event: eventName,
            });
            this.#markEventSent(eventWrapper, googChannel, eventName);
        }
    }
    async subscribe(eventNames, contextIds, userContextIds, googChannel) {
        for (const name of eventNames) {
            assertSupportedEvent(name);
        }
        if (userContextIds.length && contextIds.length) {
            throw new InvalidArgumentException('Both userContexts and contexts cannot be specified.');
        }
        // First check if all the contexts are known.
        this.#browsingContextStorage.verifyContextsList(contextIds);
        // Validate user contexts.
        await this.#userContextStorage.verifyUserContextIdList(userContextIds);
        const unrolledEventNames = new Set(unrollEvents(eventNames));
        const subscribeStepEvents = new Map();
        const subscriptionNavigableIds = new Set(contextIds.length
            ? contextIds.map((contextId) => {
                const id = this.#browsingContextStorage.findTopLevelContextId(contextId);
                if (!id) {
                    throw new InvalidArgumentException('Invalid context id');
                }
                return id;
            })
            : this.#browsingContextStorage.getTopLevelContexts().map((c) => c.id));
        for (const eventName of unrolledEventNames) {
            const subscribedNavigableIds = new Set(this.#browsingContextStorage
                .getTopLevelContexts()
                .map((c) => c.id)
                .filter((id) => {
                return this.#subscriptionManager.isSubscribedTo(eventName, id);
            }));
            subscribeStepEvents.set(eventName, difference(subscriptionNavigableIds, subscribedNavigableIds));
        }
        const subscription = this.#subscriptionManager.subscribe(eventNames, contextIds, userContextIds, googChannel);
        for (const eventName of subscription.eventNames) {
            for (const contextId of subscriptionNavigableIds) {
                for (const eventWrapper of this.#getBufferedEvents(eventName, contextId, googChannel)) {
                    // The order of the events is important.
                    this.emit("event" /* EventManagerEvents.Event */, {
                        message: OutgoingMessage.createFromPromise(eventWrapper.event, googChannel),
                        event: eventName,
                    });
                    this.#markEventSent(eventWrapper, googChannel, eventName);
                }
            }
        }
        for (const [eventName, contextIds] of subscribeStepEvents) {
            for (const contextId of contextIds) {
                this.#subscribeHooks.get(eventName).forEach((hook) => hook(contextId));
            }
        }
        await this.toggleModulesIfNeeded();
        return subscription.id;
    }
    async unsubscribe(eventNames, googChannel) {
        for (const name of eventNames) {
            assertSupportedEvent(name);
        }
        this.#subscriptionManager.unsubscribe(eventNames, googChannel);
        await this.toggleModulesIfNeeded();
    }
    async unsubscribeByIds(subscriptionIds) {
        this.#subscriptionManager.unsubscribeById(subscriptionIds);
        await this.toggleModulesIfNeeded();
    }
    async toggleModulesIfNeeded() {
        // TODO(1): Only update changed subscribers
        // TODO(2): Enable for Worker Targets
        await Promise.all(this.#browsingContextStorage.getAllContexts().map(async (context) => {
            return await context.toggleModulesIfNeeded();
        }));
    }
    clearBufferedEvents(contextId) {
        for (const eventName of eventBufferLength.keys()) {
            const bufferMapKey = _a.#getMapKey(eventName, contextId);
            this.#eventBuffers.delete(bufferMapKey);
        }
    }
    /**
     * If the event is buffer-able, put it in the buffer.
     */
    #bufferEvent(eventWrapper, eventName) {
        if (!eventBufferLength.has(eventName)) {
            // Do nothing if the event is no buffer-able.
            return;
        }
        const bufferMapKey = _a.#getMapKey(eventName, eventWrapper.contextId);
        if (!this.#eventBuffers.has(bufferMapKey)) {
            this.#eventBuffers.set(bufferMapKey, new Buffer(eventBufferLength.get(eventName)));
        }
        this.#eventBuffers.get(bufferMapKey).add(eventWrapper);
        // Add the context to the list of contexts having `eventName` events.
        this.#eventToContextsMap.get(eventName).add(eventWrapper.contextId);
    }
    /**
     * If the event is buffer-able, mark it as sent to the given contextId and goog:channel.
     */
    #markEventSent(eventWrapper, googChannel, eventName) {
        if (!eventBufferLength.has(eventName)) {
            // Do nothing if the event is no buffer-able.
            return;
        }
        const lastSentMapKey = _a.#getMapKey(eventName, eventWrapper.contextId);
        const lastId = Math.max(this.#lastMessageSent.get(lastSentMapKey)?.get(googChannel) ?? 0, eventWrapper.id);
        const googChannelMap = this.#lastMessageSent.get(lastSentMapKey);
        if (googChannelMap) {
            googChannelMap.set(googChannel, lastId);
        }
        else {
            this.#lastMessageSent.set(lastSentMapKey, new Map([[googChannel, lastId]]));
        }
    }
    /**
     * Returns events which are buffered and not yet sent to the given goog:channel events.
     */
    #getBufferedEvents(eventName, contextId, googChannel) {
        const bufferMapKey = _a.#getMapKey(eventName, contextId);
        const lastSentMessageId = this.#lastMessageSent.get(bufferMapKey)?.get(googChannel) ?? -Infinity;
        const result = this.#eventBuffers
            .get(bufferMapKey)
            ?.get()
            .filter((wrapper) => wrapper.id > lastSentMessageId) ?? [];
        if (contextId === null) {
            // For global subscriptions, events buffered in each context should be sent back.
            Array.from(this.#eventToContextsMap.get(eventName).keys())
                .filter((_contextId) => 
            // Events without context are already in the result.
            _contextId !== null &&
                // Events from deleted contexts should not be sent.
                this.#browsingContextStorage.hasContext(_contextId))
                .map((_contextId) => this.#getBufferedEvents(eventName, _contextId, googChannel))
                .forEach((events) => result.push(...events));
        }
        return result.sort((e1, e2) => e1.id - e2.id);
    }
}
_a = EventManager;
//# sourceMappingURL=EventManager.js.map