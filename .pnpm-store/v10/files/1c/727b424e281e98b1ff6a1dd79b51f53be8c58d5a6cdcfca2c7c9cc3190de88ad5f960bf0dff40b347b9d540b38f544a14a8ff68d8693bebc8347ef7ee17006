
import type { CurrentRefinementsConnectorParams, CurrentRefinementsWidgetDescription } from '../../connectors/current-refinements/connectCurrentRefinements';
import type { WidgetFactory } from '../../types';
export type CurrentRefinementsCSSClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the root element when no refinements.
     */
    noRefinementRoot: string | string[];
    /**
     * CSS class to add to the list element.
     */
    list: string | string[];
    /**
     * CSS class to add to the each item element.
     */
    item: string | string[];
    /**
     * CSS class to add to the label element.
     */
    label: string | string[];
    /**
     * CSS class to add to the category element.
     */
    category: string | string[];
    /**
     * CSS class to add to the categoryLabel element.
     */
    categoryLabel: string | string[];
    /**
     * CSS class to add to the delete element.
     */
    delete: string | string[];
}>;
export type CurrentRefinementsWidgetParams = {
    /**
     * The CSS Selector or `HTMLElement` to insert the widget into.
     */
    container: string | HTMLElement;
    /**
     * The CSS classes to override.
     */
    cssClasses?: CurrentRefinementsCSSClasses;
};
export type CurrentRefinementsWidget = WidgetFactory<CurrentRefinementsWidgetDescription & {
    $$widgetType: 'ais.currentRefinements';
}, CurrentRefinementsConnectorParams, CurrentRefinementsWidgetParams>;
declare const currentRefinements: CurrentRefinementsWidget;
export default currentRefinements;
