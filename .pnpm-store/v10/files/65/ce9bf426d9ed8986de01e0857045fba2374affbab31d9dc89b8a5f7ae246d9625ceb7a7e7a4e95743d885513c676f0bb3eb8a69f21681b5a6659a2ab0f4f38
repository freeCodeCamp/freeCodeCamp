import { type BrowsingContext, Network } from '../../../protocol/protocol.js';
import type { LoggerFn } from '../../../utils/log.js';
import type { CdpClient } from '../../BidiMapper.js';
import type { CdpTarget } from '../cdp/CdpTarget.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
import type { EventManager } from '../session/EventManager.js';
import { NetworkRequest } from './NetworkRequest.js';
import { type ParsedUrlPattern } from './NetworkUtils.js';
export declare const MAX_TOTAL_COLLECTED_SIZE = 200000000;
type NetworkInterception = Omit<Network.AddInterceptParameters, 'urlPatterns'> & {
    urlPatterns: ParsedUrlPattern[];
};
/** Stores network and intercept maps. */
export declare class NetworkStorage {
    #private;
    constructor(eventManager: EventManager, browsingContextStorage: BrowsingContextStorage, browserClient: CdpClient, logger?: LoggerFn);
    onCdpTargetCreated(cdpTarget: CdpTarget): void;
    getCollectedData(params: Network.GetDataParameters): Promise<Network.GetDataResult>;
    collectIfNeeded(request: NetworkRequest, dataType: Network.DataType): void;
    getInterceptionStages(browsingContextId: BrowsingContext.BrowsingContext): {
        request: boolean;
        response: boolean;
        auth: boolean;
    };
    getInterceptsForPhase(request: NetworkRequest, phase: Network.InterceptPhase): Set<Network.Intercept>;
    disposeRequestMap(sessionId: string): void;
    /**
     * Adds the given entry to the intercept map.
     * URL patterns are assumed to be parsed.
     *
     * @return The intercept ID.
     */
    addIntercept(value: NetworkInterception): Network.Intercept;
    /**
     * Removes the given intercept from the intercept map.
     * Throws NoSuchInterceptException if the intercept does not exist.
     */
    removeIntercept(intercept: Network.Intercept): void;
    getRequestsByTarget(target: CdpTarget): NetworkRequest[];
    getRequestById(id: Network.Request): NetworkRequest | undefined;
    getRequestByFetchId(fetchId: Network.Request): NetworkRequest | undefined;
    addRequest(request: NetworkRequest): void;
    /**
     * Disposes the given request, if no collectors targeting it are left.
     */
    disposeRequest(id: Network.Request): void;
    /**
     * Gets the virtual navigation ID for the given navigable ID.
     */
    getNavigationId(contextId: string | undefined): string | null;
    set defaultCacheBehavior(behavior: Network.SetCacheBehaviorParameters['cacheBehavior']);
    get defaultCacheBehavior(): Network.SetCacheBehaviorParameters["cacheBehavior"];
    addDataCollector(params: Network.AddDataCollectorParameters): string;
    removeDataCollector(params: Network.RemoveDataCollectorParameters): void;
    disownData(params: Network.DisownDataParameters): void;
}
export {};
