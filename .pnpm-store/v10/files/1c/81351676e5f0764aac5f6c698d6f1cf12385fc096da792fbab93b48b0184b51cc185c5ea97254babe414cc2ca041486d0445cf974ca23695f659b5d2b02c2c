import type { Connector, WidgetRenderState } from '../../types';
export type PoweredByRenderState = {
    /** the url to redirect to on click */
    url: string;
};
export type PoweredByConnectorParams = {
    /** the url to redirect to on click */
    url?: string;
};
export type PoweredByWidgetDescription = {
    $$type: 'ais.poweredBy';
    renderState: PoweredByRenderState;
    indexRenderState: {
        poweredBy: WidgetRenderState<PoweredByRenderState, PoweredByConnectorParams>;
    };
};
export type PoweredByConnector = Connector<PoweredByWidgetDescription, PoweredByConnectorParams>;
/**
 * **PoweredBy** connector provides the logic to build a custom widget that will displays
 * the logo to redirect to Algolia.
 */
declare const connectPoweredBy: PoweredByConnector;
export default connectPoweredBy;
