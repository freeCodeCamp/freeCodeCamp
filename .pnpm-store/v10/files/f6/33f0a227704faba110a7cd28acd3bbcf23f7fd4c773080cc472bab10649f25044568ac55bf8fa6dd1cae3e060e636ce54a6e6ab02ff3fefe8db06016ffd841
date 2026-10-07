import type { SendEventForFacet } from '../../lib/utils';
import type { Connector, CreateURL, TransformItems, SortBy, WidgetRenderState } from '../../types';
import type { SearchResults } from 'algoliasearch-helper';
export type HierarchicalMenuItem = {
    /**
     * Value of the menu item.
     */
    value: string;
    /**
     * Human-readable value of the menu item.
     */
    label: string;
    /**
     * Number of matched results after refinement is applied.
     */
    count: number;
    /**
     * Indicates if the refinement is applied.
     */
    isRefined: boolean;
    /**
     * n+1 level of items, same structure HierarchicalMenuItem
     */
    data: HierarchicalMenuItem[] | null;
};
export type HierarchicalMenuConnectorParams = {
    /**
     *  Attributes to use to generate the hierarchy of the menu.
     */
    attributes: string[];
    /**
     * Separator used in the attributes to separate level values.
     */
    separator?: string;
    /**
     * Prefix path to use if the first level is not the root level.
     */
    rootPath?: string | null;
    /**
     * Show the siblings of the selected parent levels of the current refined value. This
     * does not impact the root level.
     */
    showParentLevel?: boolean;
    /**
     * Max number of values to display.
     */
    limit?: number;
    /**
     * Whether to display the "show more" button.
     */
    showMore?: boolean;
    /**
     * Max number of values to display when showing more.
     */
    showMoreLimit?: number;
    /**
     * How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
     * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
     *
     * If a facetOrdering is set in the index settings, it is used when sortBy isn't passed
     */
    sortBy?: SortBy<SearchResults.HierarchicalFacet>;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<HierarchicalMenuItem>;
};
export type HierarchicalMenuRenderState = {
    /**
     * Creates an url for the next state for a clicked item.
     */
    createURL: CreateURL<string>;
    /**
     * Values to be rendered.
     */
    items: HierarchicalMenuItem[];
    /**
     * Sets the path of the hierarchical filter and triggers a new search.
     */
    refine: (value: string) => void;
    /**
     *  Indicates if search state can be refined.
     */
    canRefine: boolean;
    /**
     * True if the menu is displaying all the menu items.
     */
    isShowingMore: boolean;
    /**
     * Toggles the number of values displayed between `limit` and `showMoreLimit`.
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
export type HierarchicalMenuWidgetDescription = {
    $$type: 'ais.hierarchicalMenu';
    renderState: HierarchicalMenuRenderState;
    indexRenderState: {
        hierarchicalMenu: {
            [rootAttribute: string]: WidgetRenderState<HierarchicalMenuRenderState, HierarchicalMenuConnectorParams>;
        };
    };
    indexUiState: {
        hierarchicalMenu: {
            [rootAttribute: string]: string[];
        };
    };
};
export type HierarchicalMenuConnector = Connector<HierarchicalMenuWidgetDescription, HierarchicalMenuConnectorParams>;
/**
 * **HierarchicalMenu** connector provides the logic to build a custom widget
 * that will give the user the ability to explore facets in a tree-like structure.
 *
 * This is commonly used for multi-level categorization of products on e-commerce
 * websites. From a UX point of view, we suggest not displaying more than two
 * levels deep.
 *
 * @type {Connector}
 * @param {function(HierarchicalMenuRenderingOptions, boolean)} renderFn Rendering function for the custom **HierarchicalMenu** widget.
 * @param {function} unmountFn Unmount function called when the widget is disposed.
 * @return {function(CustomHierarchicalMenuWidgetParams)} Re-usable widget factory for a custom **HierarchicalMenu** widget.
 */
declare const connectHierarchicalMenu: HierarchicalMenuConnector;
export default connectHierarchicalMenu;
