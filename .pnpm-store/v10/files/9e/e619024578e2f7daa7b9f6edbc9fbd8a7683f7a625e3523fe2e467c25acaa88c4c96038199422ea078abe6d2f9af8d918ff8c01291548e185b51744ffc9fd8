import type { Browser, BrowsingContext } from '../../../protocol/generated/webdriver-bidi.js';
import { Network } from '../../../protocol/generated/webdriver-bidi.js';
import { type LoggerFn } from '../../../utils/log.js';
import type { NetworkRequest } from './NetworkRequest.js';
export declare class CollectorsStorage {
    #private;
    constructor(maxEncodedDataSize: number, logger?: LoggerFn);
    addDataCollector(params: Network.AddDataCollectorParameters): `${string}-${string}-${string}-${string}-${string}`;
    isCollected(requestId: Network.Request, dataType?: Network.DataType, collectorId?: string): boolean;
    disownData(requestId: Network.Request, dataType: Network.DataType, collectorId?: string): void;
    collectIfNeeded(request: NetworkRequest, dataType: Network.DataType, topLevelBrowsingContext: BrowsingContext.BrowsingContext, userContext: Browser.UserContext): void;
    removeDataCollector(collectorId: Network.Collector): Network.Request[];
}
