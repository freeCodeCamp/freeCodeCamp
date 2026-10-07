import { InvalidArgumentException, NoSuchInterceptException, NoSuchNetworkDataException, UnsupportedOperationException, } from '../../../protocol/protocol.js';
import { uuidv4 } from '../../../utils/uuid.js';
import { CollectorsStorage } from './CollectorsStorage.js';
import { NetworkRequest } from './NetworkRequest.js';
import { matchUrlPattern } from './NetworkUtils.js';
// The default total data size limit in CDP.
// https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/inspector/inspector_network_agent.cc;drc=da1f749634c9a401cc756f36c2e6ce233e1c9b4d;l=133
export const MAX_TOTAL_COLLECTED_SIZE = 200_000_000;
/** Stores network and intercept maps. */
export class NetworkStorage {
    #browsingContextStorage;
    #eventManager;
    #collectorsStorage;
    #logger;
    /**
     * A map from network request ID to Network Request objects.
     * Needed as long as information about requests comes from different events.
     */
    #requests = new Map();
    /** A map from intercept ID to track active network intercepts. */
    #intercepts = new Map();
    #defaultCacheBehavior = 'default';
    constructor(eventManager, browsingContextStorage, browserClient, logger) {
        this.#browsingContextStorage = browsingContextStorage;
        this.#eventManager = eventManager;
        this.#collectorsStorage = new CollectorsStorage(MAX_TOTAL_COLLECTED_SIZE, logger);
        browserClient.on('Target.detachedFromTarget', ({ sessionId }) => {
            this.disposeRequestMap(sessionId);
        });
        this.#logger = logger;
    }
    /**
     * Gets the network request with the given ID, if any.
     * Otherwise, creates a new network request with the given ID and cdp target.
     */
    #getOrCreateNetworkRequest(id, cdpTarget, redirectCount) {
        let request = this.getRequestById(id);
        if (redirectCount === undefined && request) {
            // Force re-creating requests for redirects.
            return request;
        }
        request = new NetworkRequest(id, this.#eventManager, this, cdpTarget, redirectCount, this.#logger);
        this.addRequest(request);
        return request;
    }
    onCdpTargetCreated(cdpTarget) {
        const cdpClient = cdpTarget.cdpClient;
        // TODO: Wrap into object
        const listeners = [
            [
                'Network.requestWillBeSent',
                (params) => {
                    const request = this.getRequestById(params.requestId);
                    request?.updateCdpTarget(cdpTarget);
                    if (request && request.isRedirecting()) {
                        request.handleRedirect(params);
                        this.disposeRequest(params.requestId);
                        this.#getOrCreateNetworkRequest(params.requestId, cdpTarget, request.redirectCount + 1).onRequestWillBeSentEvent(params);
                    }
                    else {
                        this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onRequestWillBeSentEvent(params);
                    }
                },
            ],
            [
                'Network.requestWillBeSentExtraInfo',
                (params) => {
                    const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                    request.updateCdpTarget(cdpTarget);
                    request.onRequestWillBeSentExtraInfoEvent(params);
                },
            ],
            [
                'Network.responseReceived',
                (params) => {
                    const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                    request.updateCdpTarget(cdpTarget);
                    request.onResponseReceivedEvent(params);
                },
            ],
            [
                'Network.responseReceivedExtraInfo',
                (params) => {
                    const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                    request.updateCdpTarget(cdpTarget);
                    request.onResponseReceivedExtraInfoEvent(params);
                },
            ],
            [
                'Network.requestServedFromCache',
                (params) => {
                    const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                    request.updateCdpTarget(cdpTarget);
                    request.onServedFromCache();
                },
            ],
            [
                'Fetch.requestPaused',
                (event) => {
                    const request = this.#getOrCreateNetworkRequest(
                    // CDP quirk if the Network domain is not present this is undefined
                    event.networkId ?? event.requestId, cdpTarget);
                    request.updateCdpTarget(cdpTarget);
                    request.onRequestPaused(event);
                },
            ],
            [
                'Fetch.authRequired',
                (event) => {
                    let request = this.getRequestByFetchId(event.requestId);
                    if (!request) {
                        request = this.#getOrCreateNetworkRequest(event.requestId, cdpTarget);
                    }
                    request.updateCdpTarget(cdpTarget);
                    request.onAuthRequired(event);
                },
            ],
            [
                'Network.dataReceived',
                (params) => {
                    const request = this.getRequestById(params.requestId);
                    request?.updateCdpTarget(cdpTarget);
                    request?.onDataReceivedEvent(params);
                },
            ],
            [
                'Network.loadingFailed',
                (params) => {
                    const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                    request.updateCdpTarget(cdpTarget);
                    request.onLoadingFailedEvent(params);
                },
            ],
            [
                'Network.loadingFinished',
                (params) => {
                    const request = this.getRequestById(params.requestId);
                    request?.updateCdpTarget(cdpTarget);
                    request?.onLoadingFinishedEvent(params);
                },
            ],
        ];
        for (const [event, listener] of listeners) {
            cdpClient.on(event, listener);
        }
    }
    async getCollectedData(params) {
        if (!this.#collectorsStorage.isCollected(params.request, params.dataType, params.collector)) {
            throw new NoSuchNetworkDataException(params.collector === undefined
                ? `No collected ${params.dataType} data`
                : `Collector ${params.collector} didn't collect ${params.dataType} data`);
        }
        if (params.disown && params.collector === undefined) {
            throw new InvalidArgumentException('Cannot disown collected data without collector ID');
        }
        const request = this.getRequestById(params.request);
        if (request === undefined) {
            throw new NoSuchNetworkDataException(`No data for ${params.request}`);
        }
        let result = undefined;
        switch (params.dataType) {
            case "response" /* Network.DataType.Response */:
                result = await this.#getCollectedResponseData(request);
                break;
            case "request" /* Network.DataType.Request */:
                result = await this.#getCollectedRequestData(request);
                break;
            default:
                throw new UnsupportedOperationException(`Unsupported data type ${params.dataType}`);
        }
        if (params.disown && params.collector !== undefined) {
            this.#collectorsStorage.disownData(request.id, params.dataType, params.collector);
            // `disposeRequest` disposes request only if no other collectors for it are left.
            this.disposeRequest(request.id);
        }
        return result;
    }
    async #getCollectedResponseData(request) {
        try {
            const responseBody = await request.cdpClient.sendCommand('Network.getResponseBody', { requestId: request.id });
            return {
                bytes: {
                    type: responseBody.base64Encoded ? 'base64' : 'string',
                    value: responseBody.body,
                },
            };
        }
        catch (error) {
            if (error.code === -32000 /* CdpErrorConstants.GENERIC_ERROR */ &&
                error.message === 'No resource with given identifier found') {
                // The data has be gone for whatever reason.
                throw new NoSuchNetworkDataException(`Response data was disposed`);
            }
            if (error.code === -32001 /* CdpErrorConstants.CONNECTION_CLOSED */) {
                // The request's CDP session is gone. http://b/450771615.
                throw new NoSuchNetworkDataException(`Response data is disposed after the related page`);
            }
            throw error;
        }
    }
    async #getCollectedRequestData(request) {
        // TODO: handle CDP error in case of the renderer is gone.
        const requestPostData = await request.cdpClient.sendCommand('Network.getRequestPostData', { requestId: request.id });
        return {
            bytes: {
                type: 'string',
                value: requestPostData.postData,
            },
        };
    }
    collectIfNeeded(request, dataType) {
        this.#collectorsStorage.collectIfNeeded(request, dataType, request.cdpTarget.topLevelId, request.cdpTarget.userContext);
    }
    getInterceptionStages(browsingContextId) {
        const stages = {
            request: false,
            response: false,
            auth: false,
        };
        for (const intercept of this.#intercepts.values()) {
            if (intercept.contexts &&
                !intercept.contexts.includes(browsingContextId)) {
                continue;
            }
            stages.request ||= intercept.phases.includes("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */);
            stages.response ||= intercept.phases.includes("responseStarted" /* Network.InterceptPhase.ResponseStarted */);
            stages.auth ||= intercept.phases.includes("authRequired" /* Network.InterceptPhase.AuthRequired */);
        }
        return stages;
    }
    getInterceptsForPhase(request, phase) {
        if (request.url === NetworkRequest.unknownParameter) {
            return new Set();
        }
        const intercepts = new Set();
        for (const [interceptId, intercept] of this.#intercepts.entries()) {
            if (!intercept.phases.includes(phase) ||
                (intercept.contexts &&
                    !intercept.contexts.includes(request.cdpTarget.topLevelId))) {
                continue;
            }
            if (intercept.urlPatterns.length === 0) {
                intercepts.add(interceptId);
                continue;
            }
            for (const pattern of intercept.urlPatterns) {
                if (matchUrlPattern(pattern, request.url)) {
                    intercepts.add(interceptId);
                    break;
                }
            }
        }
        return intercepts;
    }
    disposeRequestMap(sessionId) {
        for (const request of this.#requests.values()) {
            if (request.cdpClient.sessionId === sessionId) {
                this.#requests.delete(request.id);
                request.dispose();
            }
        }
    }
    /**
     * Adds the given entry to the intercept map.
     * URL patterns are assumed to be parsed.
     *
     * @return The intercept ID.
     */
    addIntercept(value) {
        const interceptId = uuidv4();
        this.#intercepts.set(interceptId, value);
        return interceptId;
    }
    /**
     * Removes the given intercept from the intercept map.
     * Throws NoSuchInterceptException if the intercept does not exist.
     */
    removeIntercept(intercept) {
        if (!this.#intercepts.has(intercept)) {
            throw new NoSuchInterceptException(`Intercept '${intercept}' does not exist.`);
        }
        this.#intercepts.delete(intercept);
    }
    getRequestsByTarget(target) {
        const requests = [];
        for (const request of this.#requests.values()) {
            if (request.cdpTarget === target) {
                requests.push(request);
            }
        }
        return requests;
    }
    getRequestById(id) {
        return this.#requests.get(id);
    }
    getRequestByFetchId(fetchId) {
        for (const request of this.#requests.values()) {
            if (request.fetchId === fetchId) {
                return request;
            }
        }
        return;
    }
    addRequest(request) {
        this.#requests.set(request.id, request);
    }
    /**
     * Disposes the given request, if no collectors targeting it are left.
     */
    disposeRequest(id) {
        if (this.#collectorsStorage.isCollected(id)) {
            // Keep request, as it's data can be accessed later.
            return;
        }
        // TODO: dispose Network data from Chromium once there is a CDP command for that.
        this.#requests.delete(id);
    }
    /**
     * Gets the virtual navigation ID for the given navigable ID.
     */
    getNavigationId(contextId) {
        if (contextId === undefined) {
            return null;
        }
        return (this.#browsingContextStorage.findContext(contextId)?.navigationId ?? null);
    }
    set defaultCacheBehavior(behavior) {
        this.#defaultCacheBehavior = behavior;
    }
    get defaultCacheBehavior() {
        return this.#defaultCacheBehavior;
    }
    addDataCollector(params) {
        return this.#collectorsStorage.addDataCollector(params);
    }
    removeDataCollector(params) {
        const releasedRequests = this.#collectorsStorage.removeDataCollector(params.collector);
        releasedRequests.map((request) => this.disposeRequest(request));
    }
    disownData(params) {
        if (!this.#collectorsStorage.isCollected(params.request, params.dataType, params.collector)) {
            throw new NoSuchNetworkDataException(`Collector ${params.collector} didn't collect ${params.dataType} data`);
        }
        this.#collectorsStorage.disownData(params.request, params.dataType, params.collector);
        // `disposeRequest` disposes request only if no other collectors for it are left.
        this.disposeRequest(params.request);
    }
}
//# sourceMappingURL=NetworkStorage.js.map