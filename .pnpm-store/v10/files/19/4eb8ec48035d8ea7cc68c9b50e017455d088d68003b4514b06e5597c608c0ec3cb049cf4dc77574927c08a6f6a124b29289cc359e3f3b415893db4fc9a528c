/*
 * Copyright 2025 Google LLC.
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
import { InvalidArgumentException, NoSuchNetworkCollectorException, UnsupportedOperationException, } from '../../../protocol/ErrorResponse.js';
import { LogType } from '../../../utils/log.js';
import { uuidv4 } from '../../../utils/uuid.js';
export class CollectorsStorage {
    #collectors = new Map();
    #responseCollectors = new Map();
    #requestBodyCollectors = new Map();
    #maxEncodedDataSize;
    #logger;
    constructor(maxEncodedDataSize, logger) {
        this.#maxEncodedDataSize = maxEncodedDataSize;
        this.#logger = logger;
    }
    addDataCollector(params) {
        if (params.maxEncodedDataSize < 1 ||
            params.maxEncodedDataSize > this.#maxEncodedDataSize) {
            // 200 MB is the default limit in CDP:
            // https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/inspector/inspector_network_agent.cc;drc=da1f749634c9a401cc756f36c2e6ce233e1c9b4d;l=133
            throw new InvalidArgumentException(`Max encoded data size should be between 1 and ${this.#maxEncodedDataSize}`);
        }
        const collectorId = uuidv4();
        this.#collectors.set(collectorId, params);
        return collectorId;
    }
    isCollected(requestId, dataType, collectorId) {
        if (collectorId !== undefined && !this.#collectors.has(collectorId)) {
            throw new NoSuchNetworkCollectorException(`Unknown collector ${collectorId}`);
        }
        if (dataType === undefined) {
            return (this.isCollected(requestId, "response" /* Network.DataType.Response */, collectorId) ||
                this.isCollected(requestId, "request" /* Network.DataType.Request */, collectorId));
        }
        const requestToCollectorsMap = this.#getRequestToCollectorMap(dataType).get(requestId);
        if (requestToCollectorsMap === undefined ||
            requestToCollectorsMap.size === 0) {
            return false;
        }
        if (collectorId === undefined) {
            // There is at least 1 collector for the data.
            return true;
        }
        if (!requestToCollectorsMap.has(collectorId)) {
            return false;
        }
        return true;
    }
    #getRequestToCollectorMap(dataType) {
        switch (dataType) {
            case "response" /* Network.DataType.Response */:
                return this.#responseCollectors;
            case "request" /* Network.DataType.Request */:
                return this.#requestBodyCollectors;
            default:
                throw new UnsupportedOperationException(`Unsupported data type ${dataType}`);
        }
    }
    disownData(requestId, dataType, collectorId) {
        const requestToCollectorsMap = this.#getRequestToCollectorMap(dataType);
        if (collectorId !== undefined) {
            requestToCollectorsMap.get(requestId)?.delete(collectorId);
        }
        if (collectorId === undefined ||
            requestToCollectorsMap.get(requestId)?.size === 0) {
            requestToCollectorsMap.delete(requestId);
        }
    }
    #shouldCollectRequest(collectorId, request, dataType, topLevelBrowsingContext, userContext) {
        const collector = this.#collectors.get(collectorId);
        if (collector === undefined) {
            throw new NoSuchNetworkCollectorException(`Unknown collector ${collectorId}`);
        }
        if (collector.userContexts &&
            !collector.userContexts.includes(userContext)) {
            // Collector is aimed for a different user context.
            return false;
        }
        if (collector.contexts &&
            !collector.contexts.includes(topLevelBrowsingContext)) {
            // Collector is aimed for a different top-level browsing context.
            return false;
        }
        if (!collector.dataTypes.includes(dataType)) {
            // Collector is aimed for a different data type.
            return false;
        }
        if (dataType === "request" /* Network.DataType.Request */ &&
            request.bodySize > collector.maxEncodedDataSize) {
            this.#logger?.(LogType.debug, `Request's ${request.id} body size is too big for the collector ${collectorId}`);
            return false;
        }
        if (dataType === "response" /* Network.DataType.Response */ &&
            request.encodedResponseBodySize > collector.maxEncodedDataSize) {
            this.#logger?.(LogType.debug, `Request's ${request.id} response is too big for the collector ${collectorId}`);
            return false;
        }
        this.#logger?.(LogType.debug, `Collector ${collectorId} collected ${dataType} of ${request.id}`);
        return true;
    }
    collectIfNeeded(request, dataType, topLevelBrowsingContext, userContext) {
        const collectorIds = [...this.#collectors.keys()].filter((collectorId) => this.#shouldCollectRequest(collectorId, request, dataType, topLevelBrowsingContext, userContext));
        if (collectorIds.length > 0) {
            this.#getRequestToCollectorMap(dataType).set(request.id, new Set(collectorIds));
        }
    }
    removeDataCollector(collectorId) {
        if (!this.#collectors.has(collectorId)) {
            throw new NoSuchNetworkCollectorException(`Collector ${collectorId} does not exist`);
        }
        this.#collectors.delete(collectorId);
        const affectedRequests = [];
        // Clean up collected responses.
        for (const [requestId, collectorIds] of this.#responseCollectors) {
            if (collectorIds.has(collectorId)) {
                collectorIds.delete(collectorId);
                if (collectorIds.size === 0) {
                    this.#responseCollectors.delete(requestId);
                    affectedRequests.push(requestId);
                }
            }
        }
        for (const [requestId, collectorIds] of this.#requestBodyCollectors) {
            if (collectorIds.has(collectorId)) {
                collectorIds.delete(collectorId);
                if (collectorIds.size === 0) {
                    this.#requestBodyCollectors.delete(requestId);
                    affectedRequests.push(requestId);
                }
            }
        }
        return affectedRequests;
    }
}
//# sourceMappingURL=CollectorsStorage.js.map