
import type { MenuConnectorParams, MenuWidgetDescription } from '../../connectors/menu/connectMenu';
import type { Template, WidgetFactory } from '../../types';
export type MenuSelectCSSClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the root when there are no items to display
     */
    noRefinementRoot: string | string[];
    /**
     * CSS class to add to the select element.
     */
    select: string | string[];
    /**
     * CSS class to add to the option element.
     */
    option: string | string[];
}>;
export type MenuSelectTemplates = Partial<{
    /**
     * Item template, provided with `label`, `count`, `isRefined` and `value` data properties.
     */
    item: Template<{
        label: string;
        value: string;
        count: number;
        isRefined: boolean;
    }>;
    /**
     * Label of the "see all" option in the select.
     */
    defaultOption: Template;
}>;
export type MenuSelectWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Customize the output through templating.
     */
    templates?: MenuSelectTemplates;
    /**
     * CSS classes to add to the wrapping elements.
     */
    cssClasses?: MenuSelectCSSClasses;
};
export type MenuSelectWidget = WidgetFactory<MenuWidgetDescription & {
    $$widgetType: 'ais.menuSelect';
}, MenuConnectorParams, MenuSelectWidgetParams>;
declare const menuSelect: MenuSelectWidget;
export default menuSelect;
