
import type { PoweredByConnectorParams, PoweredByWidgetDescription } from '../../connectors/powered-by/connectPoweredBy';
import type { WidgetFactory } from '../../types';
export type PoweredByCSSClasses = Partial<{
    /**
     * CSS class to add to the wrapping element.
     */
    root: string | string[];
    /**
     * CSS class to add to the link.
     */
    link: string | string[];
    /**
     * CSS class to add to the SVG logo.
     */
    logo: string | string[];
}>;
export type PoweredByWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * The theme of the logo.
     * @default 'light'
     */
    theme?: 'light' | 'dark';
    /**
     * CSS classes to add.
     */
    cssClasses?: PoweredByCSSClasses;
};
export type PoweredByWidget = WidgetFactory<PoweredByWidgetDescription & {
    $$widgetType: 'ais.poweredBy';
}, PoweredByConnectorParams, PoweredByWidgetParams>;
declare const poweredBy: PoweredByWidget;
export default poweredBy;
