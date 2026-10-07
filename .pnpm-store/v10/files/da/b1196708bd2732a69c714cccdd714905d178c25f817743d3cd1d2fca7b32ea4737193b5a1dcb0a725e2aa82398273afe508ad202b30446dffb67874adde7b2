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
import { Protocol } from 'devtools-protocol';
import type { CdpClient } from '../../../cdp/CdpClient.js';
import { Script } from '../../../protocol/protocol.js';
import { type LoggerFn } from '../../../utils/log.js';
import type { BrowsingContextImpl } from '../context/BrowsingContextImpl.js';
import type { EventManager } from '../session/EventManager.js';
import type { RealmStorage } from './RealmStorage.js';
export declare abstract class Realm {
    #private;
    protected realmStorage: RealmStorage;
    constructor(cdpClient: CdpClient, eventManager: EventManager, executionContextId: Protocol.Runtime.ExecutionContextId, logger: LoggerFn | undefined, origin: string, realmId: Script.Realm, realmStorage: RealmStorage);
    cdpToBidiValue(cdpValue: Protocol.Runtime.CallFunctionOnResponse | Protocol.Runtime.EvaluateResponse, resultOwnership: Script.ResultOwnership): Script.RemoteValue;
    isHidden(): boolean;
    /**
     * Relies on the CDP to implement proper BiDi serialization, except:
     * * CDP integer property `backendNodeId` is replaced with `sharedId` of
     * `{documentId}_element_{backendNodeId}`;
     * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
     * using unique-per serialization `internalIdMap`.
     * * CDP type `platformobject` is replaced with `object`.
     * @param deepSerializedValue - CDP value to be converted to BiDi.
     * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
     * `internalId`.
     */
    protected serializeForBiDi(deepSerializedValue: Protocol.Runtime.DeepSerializedValue, internalIdMap: Map<number, string>): Script.RemoteValue;
    get realmId(): Script.Realm;
    get executionContextId(): Protocol.Runtime.ExecutionContextId;
    get origin(): string;
    get source(): Script.Source;
    get cdpClient(): CdpClient;
    abstract get associatedBrowsingContexts(): BrowsingContextImpl[];
    abstract get realmType(): Script.RealmType;
    protected get baseInfo(): Script.BaseRealmInfo;
    abstract get realmInfo(): Script.RealmInfo;
    evaluate(expression: string, awaitPromise: boolean, resultOwnership?: Script.ResultOwnership, serializationOptions?: Script.SerializationOptions, userActivation?: boolean, includeCommandLineApi?: boolean): Promise<Script.EvaluateResult>;
    protected initialize(): void;
    /**
     * Serializes a given CDP object into BiDi, keeping references in the
     * target's `globalThis`.
     */
    serializeCdpObject(cdpRemoteObject: Protocol.Runtime.RemoteObject, resultOwnership: Script.ResultOwnership): Promise<Script.RemoteValue>;
    /**
     * Gets the string representation of an object. This is equivalent to
     * calling `toString()` on the object value.
     */
    stringifyObject(cdpRemoteObject: Protocol.Runtime.RemoteObject): Promise<string>;
    callFunction(functionDeclaration: string, awaitPromise: boolean, thisLocalValue?: Script.LocalValue, argumentsLocalValues?: Script.LocalValue[], resultOwnership?: Script.ResultOwnership, serializationOptions?: Script.SerializationOptions, userActivation?: boolean): Promise<Script.EvaluateResult>;
    deserializeForCdp(localValue: Script.LocalValue): Promise<Protocol.Runtime.CallArgument>;
    disown(handle: Script.Handle): Promise<void>;
    dispose(): void;
}
