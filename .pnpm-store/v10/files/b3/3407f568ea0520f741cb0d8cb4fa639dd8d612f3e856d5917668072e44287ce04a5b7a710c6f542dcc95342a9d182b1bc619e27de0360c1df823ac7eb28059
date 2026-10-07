import type { Hit, InsightsClientMethod, InsightsClientPayload, Connector } from '../../types';
import type { SearchResults } from 'algoliasearch-helper';
export declare const inferPayload: ({ method, results, hits, objectIDs, }: {
    method: InsightsClientMethod;
    results: SearchResults;
    hits: Hit[];
    objectIDs: string[];
}) => Omit<InsightsClientPayload, "eventName">;
/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 * It passes `insights` to `HitsWithInsightsListener` and `InfiniteHitsWithInsightsListener`.
 */
export default function withInsights<TConnector extends Connector<any, any>>(connector: TConnector): TConnector;
