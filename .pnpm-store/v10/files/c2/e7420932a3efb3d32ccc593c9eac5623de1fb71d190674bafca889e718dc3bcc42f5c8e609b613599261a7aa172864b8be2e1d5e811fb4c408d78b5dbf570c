
import type { BreadcrumbWidgetDescription, BreadcrumbConnectorParams } from '../../connectors/breadcrumb/connectBreadcrumb';
import type { WidgetFactory, Template } from '../../types';
export type BreadcrumbCSSClasses = Partial<{
    /**
     * CSS class to add to the root element of the widget.
     */
    root: string | string[];
    /**
     * CSS class to add to the root element of the widget if there are no refinements.
     */
    noRefinementRoot: string | string[];
    /**
     * CSS class to add to the list element.
     */
    list: string | string[];
    /**
     * CSS class to add to the items of the list. The items contains the link and the separator.
     */
    item: string | string[];
    /**
     * CSS class to add to the selected item in the list: the last one or the home if there are no refinements.
     */
    selectedItem: string | string[];
    /**
     * CSS class to add to the separator.
     */
    separator: string | string[];
    /**
     * CSS class to add to the links in the items.
     */
    link: string | string[];
}>;
export type BreadcrumbTemplates = Partial<{
    /**
     * Label of the breadcrumb's first element.
     */
    home: Template;
    /**
     * Symbol used to separate the elements of the breadcrumb.
     */
    separator: Template;
}>;
export type BreadcrumbWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Templates to use for the widget.
     */
    templates?: BreadcrumbTemplates;
    /**
     * CSS classes to add to the wrapping elements.
     */
    cssClasses?: BreadcrumbCSSClasses;
};
export type BreadcrumbWidget = WidgetFactory<BreadcrumbWidgetDescription & {
    $$widgetType: 'ais.breadcrumb';
}, BreadcrumbConnectorParams, BreadcrumbWidgetParams>;
declare const breadcrumb: BreadcrumbWidget;
export default breadcrumb;
