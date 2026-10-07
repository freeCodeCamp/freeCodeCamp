import type { Connector, TransformItems, WidgetRenderState } from '../../types';
/**
 * The **SortBy** connector provides the logic to build a custom widget that will display a
 * list of indices or sorting strategies. With Algolia, this is most commonly used for changing
 * ranking strategy. This allows a user to change how the hits are being sorted.
 *
 * This connector supports two sorting modes:
 * 1. **Index-based (traditional)**: Uses the `value` property to switch between different indices.
 *    This is the standard behavior for non-composition setups.
 *
 * 2. **Strategy-based (composition mode)**: Uses the `strategy` property to apply sorting strategies
 *    via the `sortBy` search parameter. This is only available when using Algolia Compositions.
 *
 * Items can mix both types in the same widget, allowing for flexible sorting options.
 */
export type SortByIndexItem = {
    /**
     * The name of the index to target.
     */
    value: string;
    /**
     * The label of the index to display.
     */
    label: string;
    /**
     * Ensures mutual exclusivity with strategy.
     */
    strategy?: never;
};
export type SortByStrategyItem = {
    /**
     * The name of the sorting strategy to use.
     * Only available in composition mode.
     */
    strategy: string;
    /**
     * The label of the strategy to display.
     */
    label: string;
    /**
     * Ensures mutual exclusivity with value.
     */
    value?: never;
};
export type SortByItem = SortByIndexItem | SortByStrategyItem;
export type SortByConnectorParams = {
    /**
     * Array of objects defining the different indices or strategies to choose from.
     */
    items: SortByItem[];
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<SortByItem>;
};
export type SortByRenderState = {
    /**
     * The initially selected index or strategy.
     */
    initialIndex?: string;
    /**
     * The currently selected index or strategy.
     */
    currentRefinement: string;
    /**
     * All the available indices and strategies
     */
    options: Array<{
        value: string;
        label: string;
    }>;
    /**
     * Switches indices or strategies and triggers a new search.
     */
    refine: (value: string) => void;
    /**
     * `true` if the last search contains no result.
     * @deprecated Use `canRefine` instead.
     */
    hasNoResults: boolean;
    /**
     * `true` if we can refine.
     */
    canRefine: boolean;
};
export type SortByWidgetDescription = {
    $$type: 'ais.sortBy';
    renderState: SortByRenderState;
    indexRenderState: {
        sortBy: WidgetRenderState<SortByRenderState, SortByConnectorParams>;
    };
    indexUiState: {
        sortBy: string;
    };
};
export type SortByConnector = Connector<SortByWidgetDescription, SortByConnectorParams>;
declare const connectSortBy: SortByConnector;
export default connectSortBy;
