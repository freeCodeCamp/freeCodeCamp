import type { Connector, TransformItems, TransformItemsMetadata, Widget } from '../../types';
export type DynamicWidgetsRenderState = {
    attributesToRender: string[];
};
export type DynamicWidgetsConnectorParams = {
    /**
     * An array of widgets, displayed in the order defined by `facetOrdering`.
     */
    widgets: Widget[];
    /**
     * Function to return a fallback widget when an attribute isn't found in
     * `widgets`.
     */
    fallbackWidget?: (args: {
        /** The attribute name to create a widget for. */
        attribute: string;
    }) => Widget;
    /**
     * Function to transform the items to render.
     * The function also exposes the full search response.
     */
    transformItems?: TransformItems<string, Omit<TransformItemsMetadata, 'results'> & {
        results: NonNullable<TransformItemsMetadata['results']>;
    }>;
    /**
     * To prevent unneeded extra network requests when widgets mount or unmount,
     * we request all facet values by default. If you want to only request the
     * facet values that are needed, you can set this option to the list of
     * attributes you want to display.
     *
     * If `facets` is set to `['*']`, we request all facet values.
     *
     * Any facets that are requested due to the `facetOrdering` result are always
     * requested by the widget that mounted itself.
     *
     * Setting `facets` to a value other than `['*']` will only prevent extra
     * requests if all potential facets are listed.
     *
     * @default ['*']
     */
    facets?: ['*'] | string[];
    /**
     * If you have more than 20 facet values pinned, you need to increase the
     * maxValuesPerFacet to at least that value.
     *
     * @default 20
     */
    maxValuesPerFacet?: number;
};
export type DynamicWidgetsWidgetDescription = {
    $$type: 'ais.dynamicWidgets';
    renderState: DynamicWidgetsRenderState;
    indexRenderState: {
        dynamicWidgets: DynamicWidgetsRenderState;
    };
};
export type DynamicWidgetsConnector = Connector<DynamicWidgetsWidgetDescription, DynamicWidgetsConnectorParams>;
declare const connectDynamicWidgets: DynamicWidgetsConnector;
export default connectDynamicWidgets;
