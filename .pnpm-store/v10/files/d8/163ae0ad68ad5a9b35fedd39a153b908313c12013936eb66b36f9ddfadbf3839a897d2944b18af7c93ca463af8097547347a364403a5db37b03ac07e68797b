
import type { MenuConnectorParams, MenuWidgetDescription } from '../../connectors/menu/connectMenu';
import type { ComponentCSSClasses, Template, WidgetFactory } from '../../types';
export type MenuCSSClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the root element when no refinements.
     */
    noRefinementRoot: string | string[];
    /**
     * CSS class to add to the list element.
     */
    list: string | string[];
    /**
     * CSS class to add to each item element.
     */
    item: string | string[];
    /**
     * CSS class to add to each selected item element.
     */
    selectedItem: string | string[];
    /**
     * CSS class to add to each link (when using the default template).
     */
    link: string | string[];
    /**
     * CSS class to add to each label (when using the default template).
     */
    label: string | string[];
    /**
     * CSS class to add to each count element (when using the default template).
     */
    count: string | string[];
    /**
     * CSS class to add to the show more button.
     */
    showMore: string | string[];
    /**
     * CSS class to add to the disabled show more button.
     */
    disabledShowMore: string | string[];
}>;
export type MenuTemplates = Partial<{
    /**
     * Item template. The string template gets the same values as the function.
     */
    item: Template<{
        count: number;
        cssClasses: MenuCSSClasses;
        isRefined: boolean;
        label: string;
        url: string;
        value: string;
    }>;
    /**
     * Template used for the show more text, provided with `isShowingMore` data property.
     */
    showMoreText: Template<{
        isShowingMore: boolean;
    }>;
}>;
export type MenuComponentCSSClasses = ComponentCSSClasses<MenuCSSClasses>;
export type MenuComponentTemplates = Required<MenuTemplates>;
export type MenuWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Customize the output through templating.
     */
    templates?: MenuTemplates;
    /**
     * CSS classes to add to the wrapping elements.
     */
    cssClasses?: MenuCSSClasses;
};
export type MenuWidget = WidgetFactory<MenuWidgetDescription & {
    $$widgetType: 'ais.menu';
}, MenuConnectorParams, MenuWidgetParams>;
declare const menu: MenuWidget;
export default menu;
