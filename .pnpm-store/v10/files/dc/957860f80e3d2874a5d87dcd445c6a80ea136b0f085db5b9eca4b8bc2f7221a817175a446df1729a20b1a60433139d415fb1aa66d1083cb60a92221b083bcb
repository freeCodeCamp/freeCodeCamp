import type { Connector, WidgetRenderState } from '../../types';
import type { PlainSearchParameters } from 'algoliasearch-helper';
/**
 * Refine the given search parameters.
 */
type Refine = (searchParameters: PlainSearchParameters) => void;
export type ConfigureConnectorParams = {
    /**
     * A list of [search parameters](https://www.algolia.com/doc/api-reference/search-api-parameters/)
     * to enable when the widget mounts.
     */
    searchParameters: PlainSearchParameters;
};
export type ConfigureRenderState = {
    /**
     * Refine the given search parameters.
     */
    refine: Refine;
};
export type ConfigureWidgetDescription = {
    $$type: 'ais.configure';
    renderState: ConfigureRenderState;
    indexRenderState: {
        configure: WidgetRenderState<ConfigureRenderState, ConfigureConnectorParams>;
    };
    indexUiState: {
        configure: PlainSearchParameters;
    };
};
export type ConfigureConnector = Connector<ConfigureWidgetDescription, ConfigureConnectorParams>;
declare const connectConfigure: ConfigureConnector;
export default connectConfigure;
