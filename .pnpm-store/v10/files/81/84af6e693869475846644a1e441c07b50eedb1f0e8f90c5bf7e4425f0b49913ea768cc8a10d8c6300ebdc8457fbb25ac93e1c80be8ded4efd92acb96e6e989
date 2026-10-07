/**
 * Copyright 2024 Google LLC.
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
import type { CdpClient } from '../../../cdp/CdpClient.js';
import { type BrowsingContext, type Script } from '../../../protocol/protocol.js';
import type { LoggerFn } from '../../../utils/log.js';
import type { BrowsingContextImpl } from '../context/BrowsingContextImpl.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
import type { EventManager } from '../session/EventManager.js';
import { Realm } from './Realm.js';
import type { RealmStorage } from './RealmStorage.js';
export declare class WindowRealm extends Realm {
    #private;
    readonly sandbox: string | undefined;
    constructor(browsingContextId: BrowsingContext.BrowsingContext, browsingContextStorage: BrowsingContextStorage, cdpClient: CdpClient, eventManager: EventManager, executionContextId: Protocol.Runtime.ExecutionContextId, logger: LoggerFn | undefined, origin: string, realmId: Script.Realm, realmStorage: RealmStorage, sandbox: string | undefined);
    get browsingContext(): BrowsingContextImpl;
    /**
     * Do not expose to user hidden realms.
     */
    isHidden(): boolean;
    get associatedBrowsingContexts(): [BrowsingContextImpl];
    get realmType(): 'window';
    get realmInfo(): Script.WindowRealmInfo;
    get source(): Script.Source;
    serializeForBiDi(deepSerializedValue: Protocol.Runtime.DeepSerializedValue, internalIdMap: Map<number, string>): Script.RemoteValue;
    deserializeForCdp(localValue: Script.LocalValue): Promise<Protocol.Runtime.CallArgument>;
    evaluate(expression: string, awaitPromise: boolean, resultOwnership: Script.ResultOwnership, serializationOptions: Script.SerializationOptions, userActivation?: boolean, includeCommandLineApi?: boolean): Promise<Script.EvaluateResult>;
    callFunction(functionDeclaration: string, awaitPromise: boolean, thisLocalValue: Script.LocalValue, argumentsLocalValues: Script.LocalValue[], resultOwnership: Script.ResultOwnership, serializationOptions: Script.SerializationOptions, userActivation?: boolean): Promise<Script.EvaluateResult>;
}
