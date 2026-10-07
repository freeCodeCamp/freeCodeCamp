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
import { ChromiumBidi, InvalidArgumentException, NoSuchFrameException, } from '../../../protocol/protocol.js';
import { uuidv4 } from '../../../utils/uuid.js';
/**
 * Returns the cartesian product of the given arrays.
 *
 * Example:
 *   cartesian([1, 2], ['a', 'b']); => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
export function cartesianProduct(...a) {
    return a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
}
/** Expands "AllEvents" events into atomic events. */
export function unrollEvents(events) {
    const allEvents = new Set();
    function addEvents(events) {
        for (const event of events) {
            allEvents.add(event);
        }
    }
    for (const event of events) {
        switch (event) {
            case ChromiumBidi.BiDiModule.Bluetooth:
                addEvents(Object.values(ChromiumBidi.Bluetooth.EventNames));
                break;
            case ChromiumBidi.BiDiModule.BrowsingContext:
                addEvents(Object.values(ChromiumBidi.BrowsingContext.EventNames));
                break;
            case ChromiumBidi.BiDiModule.Input:
                addEvents(Object.values(ChromiumBidi.Input.EventNames));
                break;
            case ChromiumBidi.BiDiModule.Log:
                addEvents(Object.values(ChromiumBidi.Log.EventNames));
                break;
            case ChromiumBidi.BiDiModule.Network:
                addEvents(Object.values(ChromiumBidi.Network.EventNames));
                break;
            case ChromiumBidi.BiDiModule.Script:
                addEvents(Object.values(ChromiumBidi.Script.EventNames));
                break;
            case ChromiumBidi.BiDiModule.Speculation:
                addEvents(Object.values(ChromiumBidi.Speculation.EventNames));
                break;
            default:
                allEvents.add(event);
        }
    }
    return allEvents.values();
}
export class SubscriptionManager {
    #subscriptions = [];
    #knownSubscriptionIds = new Set();
    #browsingContextStorage;
    constructor(browsingContextStorage) {
        this.#browsingContextStorage = browsingContextStorage;
    }
    getGoogChannelsSubscribedToEvent(eventName, contextId) {
        const googChannels = new Set();
        for (const subscription of this.#subscriptions) {
            if (this.#isSubscribedTo(subscription, eventName, contextId)) {
                googChannels.add(subscription.googChannel);
            }
        }
        return Array.from(googChannels);
    }
    getGoogChannelsSubscribedToEventGlobally(eventName) {
        const googChannels = new Set();
        for (const subscription of this.#subscriptions) {
            if (this.#isSubscribedTo(subscription, eventName)) {
                googChannels.add(subscription.googChannel);
            }
        }
        return Array.from(googChannels);
    }
    #isSubscribedTo(subscription, moduleOrEvent, browsingContextId) {
        let includesEvent = false;
        for (const eventName of subscription.eventNames) {
            // This also covers the `goog:cdp` case where
            // we don't unroll the event names
            if (
            // Event explicitly subscribed
            eventName === moduleOrEvent ||
                // Event subscribed via module
                eventName === moduleOrEvent.split('.').at(0) ||
                // Event explicitly subscribed compared to module
                eventName.split('.').at(0) === moduleOrEvent) {
                includesEvent = true;
                break;
            }
        }
        if (!includesEvent) {
            return false;
        }
        // user context subscription.
        if (subscription.userContextIds.size !== 0) {
            if (!browsingContextId) {
                return false;
            }
            const context = this.#browsingContextStorage.findContext(browsingContextId);
            if (!context) {
                return false;
            }
            return subscription.userContextIds.has(context.userContext);
        }
        // context subscription.
        if (subscription.topLevelTraversableIds.size !== 0) {
            if (!browsingContextId) {
                return false;
            }
            const topLevelContext = this.#browsingContextStorage.findTopLevelContextId(browsingContextId);
            return (topLevelContext !== null &&
                subscription.topLevelTraversableIds.has(topLevelContext));
        }
        // global subscription.
        return true;
    }
    isSubscribedTo(moduleOrEvent, contextId) {
        for (const subscription of this.#subscriptions) {
            if (this.#isSubscribedTo(subscription, moduleOrEvent, contextId)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Subscribes to event in the given context and goog:channel.
     * @return {SubscriptionItem[]} List of
     * subscriptions. If the event is a whole module, it will return all the specific
     * events. If the contextId is null, it will return all the top-level contexts which were
     * not subscribed before the command.
     */
    subscribe(eventNames, contextIds, userContextIds, googChannel) {
        // All the subscriptions are handled on the top-level contexts.
        const subscription = {
            id: uuidv4(),
            eventNames: new Set(unrollEvents(eventNames)),
            topLevelTraversableIds: new Set(contextIds.map((contextId) => {
                const topLevelContext = this.#browsingContextStorage.findTopLevelContextId(contextId);
                if (!topLevelContext) {
                    throw new NoSuchFrameException(`Top-level navigable not found for context id ${contextId}`);
                }
                return topLevelContext;
            })),
            userContextIds: new Set(userContextIds),
            googChannel,
        };
        this.#subscriptions.push(subscription);
        this.#knownSubscriptionIds.add(subscription.id);
        return subscription;
    }
    /**
     * Unsubscribes atomically from all events in the given contexts and channel.
     *
     * This is a legacy spec branch to unsubscribe by attributes.
     */
    unsubscribe(inputEventNames, googChannel) {
        const eventNames = new Set(unrollEvents(inputEventNames));
        const newSubscriptions = [];
        const eventsMatched = new Set();
        for (const subscription of this.#subscriptions) {
            if (subscription.googChannel !== googChannel) {
                newSubscriptions.push(subscription);
                continue;
            }
            // Skip user context subscriptions.
            if (subscription.userContextIds.size !== 0) {
                newSubscriptions.push(subscription);
                continue;
            }
            // Skip subscriptions when none of the event names match.
            if (intersection(subscription.eventNames, eventNames).size === 0) {
                newSubscriptions.push(subscription);
                continue;
            }
            // Skip non-global subscriptions.
            if (subscription.topLevelTraversableIds.size !== 0) {
                newSubscriptions.push(subscription);
                continue;
            }
            const subscriptionEventNames = new Set(subscription.eventNames);
            for (const eventName of eventNames) {
                if (subscriptionEventNames.has(eventName)) {
                    eventsMatched.add(eventName);
                    subscriptionEventNames.delete(eventName);
                }
            }
            if (subscriptionEventNames.size !== 0) {
                newSubscriptions.push({
                    ...subscription,
                    eventNames: subscriptionEventNames,
                });
            }
        }
        // If some events did not match, it is an invalid request.
        if (!equal(eventsMatched, eventNames)) {
            throw new InvalidArgumentException('No subscription found');
        }
        // Committing the new subscriptions.
        this.#subscriptions = newSubscriptions;
    }
    /**
     * Unsubscribes by subscriptionId.
     */
    unsubscribeById(subscriptionIds) {
        const subscriptionIdsSet = new Set(subscriptionIds);
        const unknownIds = difference(subscriptionIdsSet, this.#knownSubscriptionIds);
        if (unknownIds.size !== 0) {
            throw new InvalidArgumentException('No subscription found');
        }
        this.#subscriptions = this.#subscriptions.filter((subscription) => {
            return !subscriptionIdsSet.has(subscription.id);
        });
        this.#knownSubscriptionIds = difference(this.#knownSubscriptionIds, subscriptionIdsSet);
    }
}
/**
 * Replace with Set.prototype.intersection once Node 20 is dropped.
 */
function intersection(setA, setB) {
    const result = new Set();
    for (const a of setA) {
        if (setB.has(a)) {
            result.add(a);
        }
    }
    return result;
}
/**
 * Replace with Set.prototype.difference once Node 20 is dropped.
 */
export function difference(setA, setB) {
    const result = new Set();
    for (const a of setA) {
        if (!setB.has(a)) {
            result.add(a);
        }
    }
    return result;
}
function equal(setA, setB) {
    if (setA.size !== setB.size) {
        return false;
    }
    for (const a of setA) {
        if (!setB.has(a)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=SubscriptionManager.js.map