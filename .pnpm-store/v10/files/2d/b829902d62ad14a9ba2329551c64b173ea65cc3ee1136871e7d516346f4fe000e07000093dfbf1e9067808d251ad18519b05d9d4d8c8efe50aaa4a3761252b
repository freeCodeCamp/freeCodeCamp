import type { UnknownWidgetParams, Widget, WidgetDescription } from './widget';
/**
 * The function that creates a new widget.
 */
export type WidgetFactory<TWidgetDescription extends WidgetDescription, TConnectorParams extends UnknownWidgetParams, TWidgetParams extends UnknownWidgetParams> = (
/**
 * The params of the widget.
 */
widgetParams: TWidgetParams & TConnectorParams) => Widget<TWidgetDescription & {
    widgetParams: TConnectorParams;
}>;
export type UnknownWidgetFactory = WidgetFactory<{
    $$type: string;
}, any, any>;
