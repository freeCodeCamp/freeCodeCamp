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
import { NoSuchNodeException, UnknownErrorException, } from '../../../protocol/protocol.js';
import { Realm } from './Realm.js';
import { getSharedId, parseSharedId } from './SharedId.js';
export class WindowRealm extends Realm {
    #browsingContextId;
    #browsingContextStorage;
    sandbox;
    constructor(browsingContextId, browsingContextStorage, cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage, sandbox) {
        super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
        this.#browsingContextId = browsingContextId;
        this.#browsingContextStorage = browsingContextStorage;
        this.sandbox = sandbox;
        this.initialize();
    }
    #getBrowsingContextId(navigableId) {
        const maybeBrowsingContext = this.#browsingContextStorage
            .getAllContexts()
            .find((context) => context.navigableId === navigableId);
        return maybeBrowsingContext?.id ?? 'UNKNOWN';
    }
    get browsingContext() {
        return this.#browsingContextStorage.getContext(this.#browsingContextId);
    }
    /**
     * Do not expose to user hidden realms.
     */
    isHidden() {
        return this.realmStorage.hiddenSandboxes.has(this.sandbox);
    }
    get associatedBrowsingContexts() {
        return [this.browsingContext];
    }
    get realmType() {
        return 'window';
    }
    get realmInfo() {
        return {
            ...this.baseInfo,
            type: this.realmType,
            context: this.#browsingContextId,
            sandbox: this.sandbox,
        };
    }
    get source() {
        return {
            realm: this.realmId,
            context: this.browsingContext.id,
        };
    }
    serializeForBiDi(deepSerializedValue, internalIdMap) {
        const bidiValue = deepSerializedValue.value;
        if (deepSerializedValue.type === 'node' && bidiValue !== undefined) {
            if (Object.hasOwn(bidiValue, 'backendNodeId')) {
                let navigableId = this.browsingContext.navigableId ?? 'UNKNOWN';
                if (Object.hasOwn(bidiValue, 'loaderId')) {
                    // `loaderId` should be always there after ~2024-03-05, when
                    // https://crrev.com/c/5116240 reaches stable.
                    // TODO: remove the check after the date.
                    navigableId = bidiValue.loaderId;
                    delete bidiValue['loaderId'];
                }
                deepSerializedValue.sharedId =
                    getSharedId(this.#getBrowsingContextId(navigableId), navigableId, bidiValue.backendNodeId);
                delete bidiValue['backendNodeId'];
            }
            if (Object.hasOwn(bidiValue, 'children')) {
                for (const i in bidiValue.children) {
                    bidiValue.children[i] = this.serializeForBiDi(bidiValue.children[i], internalIdMap);
                }
            }
            if (Object.hasOwn(bidiValue, 'shadowRoot') &&
                bidiValue.shadowRoot !== null) {
                bidiValue.shadowRoot = this.serializeForBiDi(bidiValue.shadowRoot, internalIdMap);
            }
            // `namespaceURI` can be is either `null` or non-empty string.
            if (bidiValue.namespaceURI === '') {
                bidiValue.namespaceURI = null;
            }
        }
        return super.serializeForBiDi(deepSerializedValue, internalIdMap);
    }
    async deserializeForCdp(localValue) {
        if ('sharedId' in localValue && localValue.sharedId) {
            const parsedSharedId = parseSharedId(localValue.sharedId);
            if (parsedSharedId === null) {
                throw new NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
            }
            const { documentId, backendNodeId } = parsedSharedId;
            // TODO: add proper validation if the element is accessible from the current realm.
            if (this.browsingContext.navigableId !== documentId) {
                throw new NoSuchNodeException(`SharedId "${localValue.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
            }
            try {
                const { object } = await this.cdpClient.sendCommand('DOM.resolveNode', {
                    backendNodeId,
                    executionContextId: this.executionContextId,
                });
                // TODO(#375): Release `obj.object.objectId` after using.
                return { objectId: object.objectId };
            }
            catch (error) {
                // Heuristic to detect "no such node" exception. Based on the  specific
                // CDP implementation.
                if (error.code === -32000 /* CdpErrorConstants.GENERIC_ERROR */ &&
                    error.message === 'No node with given id found') {
                    throw new NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
                }
                throw new UnknownErrorException(error.message, error.stack);
            }
        }
        return await super.deserializeForCdp(localValue);
    }
    async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi) {
        await this.#browsingContextStorage
            .getContext(this.#browsingContextId)
            .targetUnblockedOrThrow();
        return await super.evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi);
    }
    async callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation) {
        await this.#browsingContextStorage
            .getContext(this.#browsingContextId)
            .targetUnblockedOrThrow();
        return await super.callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation);
    }
}
//# sourceMappingURL=WindowRealm.js.map