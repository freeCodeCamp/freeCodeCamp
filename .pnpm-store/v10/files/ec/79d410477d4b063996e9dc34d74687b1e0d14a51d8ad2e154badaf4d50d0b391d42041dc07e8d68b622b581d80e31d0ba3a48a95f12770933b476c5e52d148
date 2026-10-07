import { snippet, reverseSnippet, highlight, reverseHighlight, insights, getInsightsAnonymousUserToken } from './helpers';
import { createInfiniteHitsSessionStorageCache } from './lib/infiniteHitsCache';
import InstantSearch from './lib/InstantSearch';
import type { InstantSearchOptions } from './lib/InstantSearch';
import type { Expand, UiState } from './types';
type InstantSearchModule = {
    <TUiState = Record<string, unknown>, TRouteState = TUiState>(options: InstantSearchOptions<Expand<UiState & TUiState>, TRouteState>): InstantSearch<Expand<UiState & TUiState>, TRouteState>;
    version: string;
    /** @deprecated import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/lib/infiniteHitsCache' */
    createInfiniteHitsSessionStorageCache: typeof createInfiniteHitsSessionStorageCache;
    /** @deprecated import { highlight } from 'instantsearch.js/es/helpers' */
    highlight: typeof highlight;
    /** @deprecated import { reverseHighlight } from 'instantsearch.js/es/helpers' */
    reverseHighlight: typeof reverseHighlight;
    /** @deprecated import { snippet } from 'instantsearch.js/es/helpers' */
    snippet: typeof snippet;
    /** @deprecated import { reverseSnippet } from 'instantsearch.js/es/helpers' */
    reverseSnippet: typeof reverseSnippet;
    /**
     * @deprecated use createInsightsMiddleware
     * @link https://www.algolia.com/doc/api-reference/widgets/insights/js/
     */
    insights: typeof insights;
    /**
     * @deprecated use createInsightsMiddleware
     * @link https://www.algolia.com/doc/api-reference/widgets/insights/js/
     */
    getInsightsAnonymousUserToken: typeof getInsightsAnonymousUserToken;
};
/**
 * InstantSearch is the main component of InstantSearch.js. This object
 * manages the widget and lets you add new ones.
 *
 * Two parameters are required to get you started with InstantSearch.js:
 *  - `indexName`: the main index that you will use for your new search UI
 *  - `searchClient`: the search client to plug to InstantSearch.js
 *
 * The [search client provided by Algolia](algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/)
 * needs an `appId` and an `apiKey`. Those parameters can be found in your
 * [Algolia dashboard](https://www.algolia.com/api-keys).
 *
 * If you want to get up and running quickly with InstantSearch.js, have a
 * look at the [getting started](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/).
 */
declare const instantsearch: InstantSearchModule;
export default instantsearch;
export * from './types';
