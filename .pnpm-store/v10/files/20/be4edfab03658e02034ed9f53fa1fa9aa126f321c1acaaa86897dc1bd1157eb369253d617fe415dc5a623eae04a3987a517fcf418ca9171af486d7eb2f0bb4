import type { Connector, WidgetRenderState } from '../../types';
/**
 * **Stats** connector provides the logic to build a custom widget that will displays
 * search statistics (hits number and processing time).
 */
export type StatsRenderState = {
    /**
     * The maximum number of hits per page returned by Algolia.
     */
    hitsPerPage?: number;
    /**
     * The number of hits in the result set.
     */
    nbHits: number;
    /**
     * The number of sorted hits in the result set (when using Relevant sort).
     */
    nbSortedHits?: number;
    /**
     * Indicates whether the index is currently using Relevant sort and is displaying only sorted hits.
     */
    areHitsSorted: boolean;
    /**
     * The number of pages computed for the result set.
     */
    nbPages: number;
    /**
     * The current page.
     */
    page: number;
    /**
     * The time taken to compute the results inside the Algolia engine.
     */
    processingTimeMS: number;
    /**
     * The query used for the current search.
     */
    query: string;
};
export type StatsConnectorParams = Record<string, unknown>;
export type StatsWidgetDescription = {
    $$type: 'ais.stats';
    renderState: StatsRenderState;
    indexRenderState: {
        stats: WidgetRenderState<StatsRenderState, StatsConnectorParams>;
    };
};
export type StatsConnector = Connector<StatsWidgetDescription, StatsConnectorParams>;
declare const connectStats: StatsConnector;
export default connectStats;
