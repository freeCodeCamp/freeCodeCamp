
import type { ToggleRefinementConnectorParams, ToggleRefinementWidgetDescription, ToggleRefinementRenderState } from '../../connectors/toggle-refinement/connectToggleRefinement';
import type { Template, WidgetFactory } from '../../types';
export type ToggleRefinementCSSClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the label wrapping element.
     */
    label: string | string[];
    /**
     * CSS class to add to the checkbox.
     */
    checkbox: string | string[];
    /**
     * CSS class to add to the label text.
     */
    labelText: string | string[];
}>;
export type ToggleRefinementTemplates = Partial<{
    /**
     * the text that describes the toggle action
     */
    labelText: Template<ToggleRefinementRenderState['value']>;
}>;
export type ToggleRefinementWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Templates to use for the widget.
     */
    templates?: ToggleRefinementTemplates;
    /**
     * CSS classes to be added.
     */
    cssClasses?: ToggleRefinementCSSClasses;
};
export type ToggleRefinementWidget = WidgetFactory<ToggleRefinementWidgetDescription & {
    $$widgetType: 'ais.toggleRefinement';
}, ToggleRefinementConnectorParams, ToggleRefinementWidgetParams>;
/**
 * The toggleRefinement widget lets the user either:
 *  - switch between two values for a single facetted attribute (free_shipping / not_free_shipping)
 *  - toggleRefinement a faceted value on and off (only 'canon' for brands)
 *
 * This widget is particularly useful if you have a boolean value in the records.
 *
 * @requirements
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 */
declare const toggleRefinement: ToggleRefinementWidget;
export default toggleRefinement;
