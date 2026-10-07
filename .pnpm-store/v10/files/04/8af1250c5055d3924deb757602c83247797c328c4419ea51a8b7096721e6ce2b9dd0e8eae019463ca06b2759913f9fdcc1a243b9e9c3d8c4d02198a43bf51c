
import type { HitsPerPageConnectorParams, HitsPerPageWidgetDescription } from '../../connectors/hits-per-page/connectHitsPerPage';
import type { WidgetFactory } from '../../types';
export type HitsPerPageCSSClasses = Partial<{
    /**
     * CSS classes added to the outer `<div>`.
     */
    root: string | string[];
    /**
     * CSS classes added to the parent `<select>`.
     */
    select: string | string[];
    /**
     * CSS classes added to each `<option>`.
     */
    option: string | string[];
}>;
export type HitsPerPageWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * CSS classes to be added.
     */
    cssClasses?: HitsPerPageCSSClasses;
};
export type HitsPerPageWidget = WidgetFactory<HitsPerPageWidgetDescription & {
    $$widgetType: 'ais.hitsPerPage';
}, HitsPerPageConnectorParams, HitsPerPageWidgetParams>;
declare const hitsPerPage: HitsPerPageWidget;
export default hitsPerPage;
