import type { SendEventForFacet } from '../../lib/utils';
import type { Connector, TransformItems, SortBy, CreateURL, WidgetRenderState } from '../../types';
import type { SearchResults } from 'algoliasearch-helper';
export type RefinementListItem = {
    /**
     * The value of the refinement list item.
     */
    value: string;
    /**
     * Human-readable value of the refinement list item.
     */
    label: string;
    /**
     * Human-readable value of the searched refinement list item.
     */
    highlighted?: string;
    /**
     * Number of matched results after refinement is applied.
     */
    count: number;
    /**
     * Indicates if the list item is refined.
     */
    isRefined: boolean;
};
export type RefinementListConnectorParams = {
    /**
     * The name of the attribute in the records.
     */
    attribute: string;
    /**
     * How the filters are combined together.
     */
    operator?: 'and' | 'or';
    /**
     * The max number of items to display when
     * `showMoreLimit` is not set or if the widget is showing less value.
     */
    limit?: number;
    /**
     * Whether to display a button that expands the number of items.
     */
    showMore?: boolean;
    /**
     * The max number of items to display if the widget
     * is showing more items.
     */
    showMoreLimit?: number;
    /**
     * How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
     *
     * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
     *
     * If a facetOrdering is set in the index settings, it is used when sortBy isn't passed
     */
    sortBy?: SortBy<SearchResults.FacetValue>;
    /**
     * Escapes the content of the facet values.
     */
    escapeFacetValues?: boolean;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<RefinementListItem>;
};
export type RefinementListRenderState = {
    /**
     * The list of filtering values returned from Algolia API.
     */
    items: RefinementListItem[];
    /**
     * indicates whether the results are exhaustive (complete)
     */
    hasExhaustiveItems: boolean;
    /**
     * Creates the next state url for a selected refinement.
     */
    createURL: CreateURL<string>;
    /**
     * Action to apply selected refinements.
     */
    refine: (value: string) => void;
    /**
     * Send event to insights middleware
     */
    sendEvent: SendEventForFacet;
    /**
     * Searches for values inside the list.
     */
    searchForItems: (query: string) => void;
    /**
     * `true` if the values are from an index search.
     */
    isFromSearch: boolean;
    /**
     * `true` if a refinement can be applied.
     * @MAJOR: reconsider how `canRefine` is computed so it both accounts for the
     * items returned in the main search and in SFFV.
     */
    canRefine: boolean;
    /**
     * `true` if the toggleShowMore button can be activated (enough items to display more or
     * already displaying more than `limit` items)
     */
    canToggleShowMore: boolean;
    /**
     * True if the menu is displaying all the menu items.
     */
    isShowingMore: boolean;
    /**
     * Toggles the number of values displayed between `limit` and `showMoreLimit`.
     */
    toggleShowMore: () => void;
};
export type RefinementListWidgetDescription = {
    $$type: 'ais.refinementList';
    renderState: RefinementListRenderState;
    indexRenderState: {
        refinementList: {
            [attribute: string]: WidgetRenderState<RefinementListRenderState, RefinementListConnectorParams>;
        };
    };
    indexUiState: {
        refinementList: {
            [attribute: string]: string[];
        };
    };
};
export type RefinementListConnector = Connector<RefinementListWidgetDescription, RefinementListConnectorParams>;
/**
 * **RefinementList** connector provides the logic to build a custom widget that
 * will let the user filter the results based on the values of a specific facet.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in
 * attributesForFaceting of the searched index.
 *
 * This connector provides:
 * - a `refine()` function to select an item.
 * - a `toggleShowMore()` function to display more or less items
 * - a `searchForItems()` function to search within the items.
 */
declare const connectRefinementList: RefinementListConnector;
export default connectRefinementList;
