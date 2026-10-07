
import type { SortByConnectorParams, SortByItem, SortByWidgetDescription } from '../../connectors/sort-by/connectSortBy';
import type { TransformItems, WidgetFactory } from '../../types';
export type SortByWidgetCssClasses = Partial<{
    /**
     * CSS classes added to the outer `<div>`.
     */
    root: string | string[];
    /**
     * CSS classes added to the parent `<select>`.
     */
    select: string | string[];
    /**
     * CSS classes added to each `<option>`.
     */
    option: string | string[];
}>;
export type SortByIndexDefinition = {
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
export type SortByStrategyDefinition = {
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
export type SortByDefinition = SortByIndexDefinition | SortByStrategyDefinition;
export type SortByWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Array of objects defining the different indices or strategies to choose from.
     */
    items: SortByDefinition[];
    /**
     * CSS classes to be added.
     */
    cssClasses?: SortByWidgetCssClasses;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<SortByItem>;
};
export type SortByWidget = WidgetFactory<SortByWidgetDescription & {
    $$widgetType: 'ais.sortBy';
}, SortByConnectorParams, SortByWidgetParams>;
/**
 * Sort by selector is a widget used for letting the user choose between different
 * indices that contains the same data with a different order / ranking formula.
 */
declare const sortBy: SortByWidget;
export default sortBy;
