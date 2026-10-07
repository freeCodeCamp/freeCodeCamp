
import type { NumericMenuConnectorParams, NumericMenuWidgetDescription } from '../../connectors/numeric-menu/connectNumericMenu';
import type { ComponentCSSClasses, Template, WidgetFactory } from '../../types';
export type NumericMenuCSSClasses = Partial<{
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
     * CSS class to add to each item element.
     */
    item: string | string[];
    /**
     * CSS class to add to each selected item element.
     */
    selectedItem: string | string[];
    /**
     * CSS class to add to each label element.
     */
    label: string | string[];
    /**
     * CSS class to add to each label text element.
     */
    labelText: string | string[];
    /**
     * CSS class to add to each radio element (when using the default template).
     */
    radio: string | string[];
}>;
export type NumericMenuComponentCSSClasses = ComponentCSSClasses<NumericMenuCSSClasses>;
export type NumericMenuTemplates = Partial<{
    /**
     * Item template, provided with `label` (the name in the configuration), `isRefined`, `url`, `value` (the setting for the filter) data properties.
     */
    item: Template<{
        /**
         * The name of the attribute.
         */
        attribute: string;
        /**
         * The label for the option.
         */
        label: string;
        /**
         * The encoded URL of the bounds object with a {start, end} form. This
         * value can be used verbatim in the webpage and can be read by refine
         * directly. If you want to inspect the value, you can do JSON.parse(window.decodeURI(value))
         * to get the object.
         */
        value: string;
        /**
         *  Whether or not the refinement is selected.
         */
        isRefined: boolean;
        /**
         * The URL with the applied refinement.
         */
        url: string;
        /**
         * The CSS classes provided to the widget.
         */
        cssClasses: NumericMenuComponentCSSClasses;
    }>;
}>;
export type NumericMenuComponentTemplates = Required<NumericMenuTemplates>;
export type NumericMenuWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Templates to use for the widget.
     */
    templates?: NumericMenuTemplates;
    /**
     * CSS classes to add to the wrapping elements.
     */
    cssClasses?: NumericMenuCSSClasses;
};
export type NumericMenuWidget = WidgetFactory<NumericMenuWidgetDescription & {
    $$widgetType: 'ais.numericMenu';
}, NumericMenuConnectorParams, NumericMenuWidgetParams>;
declare const numericMenu: NumericMenuWidget;
export default numericMenu;
