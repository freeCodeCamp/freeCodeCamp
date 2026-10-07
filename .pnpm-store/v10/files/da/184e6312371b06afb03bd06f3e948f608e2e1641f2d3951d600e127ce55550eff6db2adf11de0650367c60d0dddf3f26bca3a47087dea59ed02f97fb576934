import type { Connector, WidgetRenderState } from '../../types';
export type SearchBoxConnectorParams = {
    /**
     * A function that will be called every time
     * a new value for the query is set. The first parameter is the query and the second is a
     * function to actually trigger the search. The function takes the query as the parameter.
     *
     * This queryHook can be used to debounce the number of searches done from the searchBox.
     */
    queryHook?: (query: string, hook: (value: string) => void) => void;
};
/**
 * @typedef {Object} CustomSearchBoxWidgetParams
 * @property {function(string, function(string))} [queryHook = undefined] A function that will be called every time
 * a new value for the query is set. The first parameter is the query and the second is a
 * function to actually trigger the search. The function takes the query as the parameter.
 *
 * This queryHook can be used to debounce the number of searches done from the searchBox.
 */
export type SearchBoxRenderState = {
    /**
     * The query from the last search.
     */
    query: string;
    /**
     * Sets a new query and searches.
     */
    refine: (value: string) => void;
    /**
     * Remove the query and perform search.
     */
    clear: () => void;
    /**
     * `true` if the search results takes more than a certain time to come back
     * from Algolia servers. This can be configured on the InstantSearch constructor with the attribute
     * `stalledSearchDelay` which is 200ms, by default.
     * @deprecated use `instantSearchInstance.status` instead
     */
    isSearchStalled: boolean;
};
export type SearchBoxWidgetDescription = {
    $$type: 'ais.searchBox';
    renderState: SearchBoxRenderState;
    indexRenderState: {
        searchBox: WidgetRenderState<SearchBoxRenderState, SearchBoxConnectorParams>;
    };
    indexUiState: {
        query: string;
    };
};
export type SearchBoxConnector = Connector<SearchBoxWidgetDescription, SearchBoxConnectorParams>;
/**
 * **SearchBox** connector provides the logic to build a widget that will let the user search for a query.
 *
 * The connector provides to the rendering: `refine()` to set the query. The behaviour of this function
 * may be impacted by the `queryHook` widget parameter.
 */
declare const connectSearchBox: SearchBoxConnector;
export default connectSearchBox;
