/**
 * Copyright 2023 Google LLC.
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
import type { Protocol } from 'devtools-protocol';
import { type BrowsingContext, type Script } from '../../../protocol/protocol.js';
import type { Realm } from './Realm.js';
interface RealmFilter {
    realmId?: Script.Realm;
    browsingContextId?: BrowsingContext.BrowsingContext;
    executionContextId?: Protocol.Runtime.ExecutionContextId;
    origin?: string;
    type?: Script.RealmType;
    sandbox?: string | null;
    cdpSessionId?: Protocol.Target.SessionID;
    isHidden?: boolean;
}
/** Container class for browsing realms. */
export declare class RealmStorage {
    #private;
    /** List of the internal sandboxed realms which should not be reported to the user. */
    readonly hiddenSandboxes: Set<string | undefined>;
    get knownHandlesToRealmMap(): Map<string, string>;
    addRealm(realm: Realm): void;
    /** Finds all realms that match the given filter. */
    findRealms(filter: RealmFilter): Realm[];
    findRealm(filter: RealmFilter): Realm | undefined;
    /** Gets the only realm that matches the given filter, if any, otherwise throws. */
    getRealm(filter: RealmFilter): Realm;
    /** Deletes all realms that match the given filter. */
    deleteRealms(filter: RealmFilter): void;
}
export {};
