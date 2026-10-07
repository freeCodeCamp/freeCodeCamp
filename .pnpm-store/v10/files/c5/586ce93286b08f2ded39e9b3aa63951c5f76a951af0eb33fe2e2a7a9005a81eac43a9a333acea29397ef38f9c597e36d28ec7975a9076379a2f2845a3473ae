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
import type { GoogChannel } from '../../../protocol/chromium-bidi.js';
import { type Browser, type BrowsingContext, ChromiumBidi } from '../../../protocol/protocol.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
/**
 * Returns the cartesian product of the given arrays.
 *
 * Example:
 *   cartesian([1, 2], ['a', 'b']); => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
export declare function cartesianProduct(...a: any[][]): any[];
/** Expands "AllEvents" events into atomic events. */
export declare function unrollEvents(events: ChromiumBidi.EventNames[]): Iterable<ChromiumBidi.EventNames>;
export interface Subscription {
    id: string;
    topLevelTraversableIds: Set<BrowsingContext.BrowsingContext>;
    userContextIds: Set<string>;
    eventNames: Set<ChromiumBidi.EventNames>;
    googChannel: GoogChannel;
}
export declare class SubscriptionManager {
    #private;
    constructor(browsingContextStorage: BrowsingContextStorage);
    getGoogChannelsSubscribedToEvent(eventName: ChromiumBidi.EventNames, contextId: BrowsingContext.BrowsingContext): GoogChannel[];
    getGoogChannelsSubscribedToEventGlobally(eventName: ChromiumBidi.EventNames): GoogChannel[];
    isSubscribedTo(moduleOrEvent: ChromiumBidi.EventNames, contextId: BrowsingContext.BrowsingContext): boolean;
    /**
     * Subscribes to event in the given context and goog:channel.
     * @return {SubscriptionItem[]} List of
     * subscriptions. If the event is a whole module, it will return all the specific
     * events. If the contextId is null, it will return all the top-level contexts which were
     * not subscribed before the command.
     */
    subscribe(eventNames: ChromiumBidi.EventNames[], contextIds: BrowsingContext.BrowsingContext[], userContextIds: Browser.UserContext[], googChannel: GoogChannel): Subscription;
    /**
     * Unsubscribes atomically from all events in the given contexts and channel.
     *
     * This is a legacy spec branch to unsubscribe by attributes.
     */
    unsubscribe(inputEventNames: ChromiumBidi.EventNames[], googChannel: GoogChannel): void;
    /**
     * Unsubscribes by subscriptionId.
     */
    unsubscribeById(subscriptionIds: string[]): void;
}
/**
 * Replace with Set.prototype.difference once Node 20 is dropped.
 */
export declare function difference<T>(setA: Set<T>, setB: Set<T>): Set<T>;
