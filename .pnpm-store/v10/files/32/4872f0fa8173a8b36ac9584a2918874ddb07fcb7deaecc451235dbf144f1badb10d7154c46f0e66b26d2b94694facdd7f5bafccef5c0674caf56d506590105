
import type { RangeConnectorParams, RangeWidgetDescription } from '../../connectors/range/connectRange';
import type { WidgetFactory } from '../../types';
export type RangeSliderCssClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the disabled root element.
     */
    disabledRoot: string | string[];
}>;
type RangeSliderTooltipOptions = {
    /**
     * The function takes the raw value as input, and should return
     * a string for the label that should be used for this value.
     * @example
     * { format(rawValue) {return '$' + Math.round(rawValue).toLocaleString() } }
     */
    format: (value: number) => string;
};
export type RangeSliderWidgetParams = {
    /**
     * CSS Selector or DOMElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Name of the attribute for faceting.;
     */
    attribute: string;
    /**
     * Should we show tooltips or not.
     * The default tooltip will show the raw value.
     * You can also provide an object with a format function as an attribute.
     * So that you can format the tooltip display value as you want.
     * @default true
     */
    tooltips?: boolean | RangeSliderTooltipOptions;
    /**
     * CSS classes to add to the wrapping elements.
     */
    cssClasses?: RangeSliderCssClasses;
    /**
     * Show slider pips.
     * @default true
     */
    pips?: boolean;
    /**
     * Number of digits after decimal point to use.
     * @default 0
     */
    precision?: number;
    /**
     * Every handle move will jump that number of steps.
     */
    step?: number;
    /**
     * Minimal slider value, default to automatically computed from the result set.
     */
    min?: number;
    /**
     * Maximal slider value, defaults to automatically computed from the result set.
     */
    max?: number;
};
export type RangeSliderWidget = WidgetFactory<Omit<RangeWidgetDescription, '$$type'> & {
    $$widgetType: 'ais.rangeSlider';
    $$type: 'ais.rangeSlider';
}, RangeConnectorParams, RangeSliderWidgetParams>;
/**
 * The range slider is a widget which provides a user-friendly way to filter the
 * results based on a single numeric range.
 *
 * @requirements
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * The values inside this attribute must be JavaScript numbers (not strings).
 */
declare const rangeSlider: RangeSliderWidget;
export default rangeSlider;
