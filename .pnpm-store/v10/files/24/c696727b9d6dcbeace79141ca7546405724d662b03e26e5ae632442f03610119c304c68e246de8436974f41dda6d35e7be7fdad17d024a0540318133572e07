
import type { RangeConnectorParams, RangeWidgetDescription } from '../../connectors/range/connectRange';
import type { Template, WidgetFactory } from '../../types';
export type RangeInputTemplates = Partial<{
    /**
     * The label of the separator, between min and max.
     * @default "to"
     */
    separatorText: Template;
    /**
     * The label of the submit button
     * @default "Go"
     */
    submitText: Template;
}>;
export type RangeInputCSSClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the root element when there's no refinements.
     */
    noRefinement: string | string[];
    /**
     * CSS class to add to the form element.
     */
    form: string | string[];
    /**
     * CSS class to add to the label element.
     */
    label: string | string[];
    /**
     * CSS class to add to the input element.
     */
    input: string | string[];
    /**
     * CSS class to add to the min input element.
     */
    inputMin: string | string[];
    /**
     * CSS class to add to the max input element.
     */
    separator: string | string[];
    /**
     * CSS class to add to the separator of the form.
     */
    inputMax: string | string[];
    /**
     * CSS class to add to the submit button of the form.
     */
    submit: string | string[];
}>;
export type RangeInputWidgetParams = {
    /**
     * Valid CSS Selector as a string or DOMElement.
     */
    container: string | HTMLElement;
    /**
     * Name of the attribute for faceting.
     */
    attribute: string;
    /**
     * Minimal slider value, default to automatically computed from the result set.
     */
    min?: number;
    /**
     * Maximal slider value, defaults to automatically computed from the result set.
     */
    max?: number;
    /**
     * Number of digits after decimal point to use.
     * @default 0
     */
    precision?: number;
    /**
     * Labels to use for the widget.
     */
    templates?: RangeInputTemplates;
    /**
     * CSS classes to add.
     */
    cssClasses?: RangeInputCSSClasses;
};
export type RangeInputWidget = WidgetFactory<Omit<RangeWidgetDescription, '$$type'> & {
    $$widgetType: 'ais.rangeInput';
    $$type: 'ais.rangeInput';
}, RangeConnectorParams, RangeInputWidgetParams>;
declare const rangeInput: RangeInputWidget;
export default rangeInput;
