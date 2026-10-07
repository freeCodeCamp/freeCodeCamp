import type { DynamicWidgetsConnectorParams, DynamicWidgetsWidgetDescription } from '../../connectors/dynamic-widgets/connectDynamicWidgets';
import type { Widget, WidgetFactory } from '../../types';
export type DynamicWidgetsWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * An array of widget creator functions, displayed in the order defined by
     * `facetOrdering`.
     */
    widgets: Array<(container: HTMLElement) => Widget>;
    /**
     * Function to return a fallback widget when an attribute isn't found in
     * `widgets`.
     */
    fallbackWidget?: (args: {
        /** The attribute name to create a widget for. */
        attribute: string;
        /** CSS Selector or HTMLElement to insert the widget */
        container: HTMLElement;
    }) => Widget;
};
export type DynamicWidgetsWidget = WidgetFactory<DynamicWidgetsWidgetDescription & {
    $$widgetType: 'ais.dynamicWidgets';
}, Omit<DynamicWidgetsConnectorParams, 'widgets' | 'fallbackWidget'>, DynamicWidgetsWidgetParams>;
declare const dynamicWidgets: DynamicWidgetsWidget;
export default dynamicWidgets;
