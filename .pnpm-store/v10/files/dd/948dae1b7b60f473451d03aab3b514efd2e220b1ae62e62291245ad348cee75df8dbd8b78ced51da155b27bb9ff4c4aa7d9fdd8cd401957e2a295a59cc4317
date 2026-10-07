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
import { type BrowsingContext } from '../../../protocol/protocol.js';
import type { BrowsingContextImpl } from './BrowsingContextImpl.js';
/** Container class for browsing contexts. */
export declare class BrowsingContextStorage {
    #private;
    /** Gets all top-level contexts, i.e. those with no parent. */
    getTopLevelContexts(): BrowsingContextImpl[];
    /** Gets all contexts. */
    getAllContexts(): BrowsingContextImpl[];
    /** Deletes the context with the given ID. */
    deleteContextById(id: BrowsingContext.BrowsingContext): void;
    /** Deletes the given context. */
    deleteContext(context: BrowsingContextImpl): void;
    /** Tracks the given context. */
    addContext(context: BrowsingContextImpl): void;
    /**
     * Waits for a context with the given ID to be added and returns it.
     */
    waitForContext(browsingContextId: BrowsingContext.BrowsingContext): Promise<BrowsingContextImpl>;
    /** Returns true whether there is an existing context with the given ID. */
    hasContext(id: BrowsingContext.BrowsingContext): boolean;
    /** Gets the context with the given ID, if any. */
    findContext(id: BrowsingContext.BrowsingContext): BrowsingContextImpl | undefined;
    /** Returns the top-level context ID of the given context, if any. */
    findTopLevelContextId(id: BrowsingContext.BrowsingContext | null): BrowsingContext.BrowsingContext | null;
    findContextBySession(sessionId: string): BrowsingContextImpl | undefined;
    /** Gets the context with the given ID, if any, otherwise throws. */
    getContext(id: BrowsingContext.BrowsingContext): BrowsingContextImpl;
    verifyTopLevelContextsList(contexts: BrowsingContext.BrowsingContext[] | undefined): Set<BrowsingContextImpl>;
    verifyContextsList(contexts: BrowsingContext.BrowsingContext[]): void;
}
