import type { SendEventForFacet } from '../../lib/utils';
import type { Connector, CreateURL, SortBy, TransformItems, WidgetRenderState } from '../../types';
import type { SearchResults } from 'algoliasearch-helper';
export type MenuItem = {
    /**
     * The value of the menu item.
     */
    value: string;
    /**
     * Human-readable value of the menu item.
     */
    label: string;
    /**
     * Number of results matched after refinement is applied.
     */
    count: number;
    /**
     * Indicates if the refinement is applied.
     */
    isRefined: boolean;
};
export type MenuConnectorParams = {
    /**
     * Name of the attribute for faceting (eg. "free_shipping").
     */
    attribute: string;
    /**
     * How many facets values to retrieve.
     */
    limit?: number;
    /**
     * Whether to display a button that expands the number of items.
     */
    showMore?: boolean;
    /**
     * How many facets values to retrieve when `toggleShowMore` is called, this value is meant to be greater than `limit` option.
     */
    showMoreLimit?: number;
    /**
     * How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
     *
     * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
     *
     * If a facetOrdering is set in the index settings, it is used when sortBy isn't passed
     */
    sortBy?: SortBy<SearchResults.HierarchicalFacet>;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<MenuItem>;
};
export type MenuRenderState = {
    /**
     * The elements that can be refined for the current search results.
     */
    items: MenuItem[];
    /**
     * Creates the URL for a single item name in the list.
     */
    createURL: CreateURL<string>;
    /**
     * Filter the search to item value.
     */
    refine: (value: string) => void;
    /**
     * True if refinement can be applied.
     */
    canRefine: boolean;
    /**
     * True if the menu is displaying all the menu items.
     */
    isShowingMore: boolean;
    /**
     * Toggles the number of values displayed between `limit` and `showMore.limit`.
     */
    toggleShowMore: () => void;
    /**
     * `true` if the toggleShowMore button can be activated (enough items to display more or
     * already displaying more than `limit` items)
     */
    canToggleShowMore: boolean;
    /**
     * Send event to insights middleware
     */
    sendEvent: SendEventForFacet;
};
export type MenuWidgetDescription = {
    $$type: 'ais.menu';
    renderState: MenuRenderState;
    indexRenderState: {
        menu: {
            [attribute: string]: WidgetRenderState<MenuRenderState, MenuConnectorParams>;
        };
    };
    indexUiState: {
        menu: {
            [attribute: string]: string;
        };
    };
};
export type MenuConnector = Connector<MenuWidgetDescription, MenuConnectorParams>;
/**
 * **Menu** connector provides the logic to build a widget that will give the user the ability to choose a single value for a specific facet. The typical usage of menu is for navigation in categories.
 *
 * This connector provides a `toggleShowMore()` function to display more or less items and a `refine()`
 * function to select an item. While selecting a new element, the `refine` will also unselect the
 * one that is currently selected.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in "attributes for faceting" on the Algolia dashboard or configured as attributesForFaceting via a set settings call to the Algolia API.
 */
declare const connectMenu: MenuConnector;
export default connectMenu;
