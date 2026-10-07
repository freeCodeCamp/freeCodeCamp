import type { ConfigureConnectorParams, ConfigureWidgetDescription } from '../../connectors/configure/connectConfigure';
import type { Widget } from '../../types';
/**
 * A list of [search parameters](https://www.algolia.com/doc/api-reference/search-api-parameters/)
 * to enable when the widget mounts.
 */
export type ConfigureWidgetParams = ConfigureConnectorParams['searchParameters'];
export type ConfigureWidget = (widgetParams: ConfigureWidgetParams) => Widget<ConfigureWidgetDescription & {
    $$widgetType: 'ais.configure';
    widgetParams: ConfigureConnectorParams;
}>;
declare const configure: ConfigureWidget;
export default configure;
