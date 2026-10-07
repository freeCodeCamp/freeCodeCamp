
import type { RatingMenuWidgetDescription, RatingMenuConnectorParams } from '../../connectors/rating-menu/connectRatingMenu';
import type { ComponentCSSClasses, Template, WidgetFactory } from '../../types';
export type RatingMenuTemplates = Partial<{
    /**
     * Item template, provided with `name`, `count`, `isRefined`, `url` data properties.
     */
    item: Template<{
        name: string;
        label: string;
        value: string;
        count: number;
        isRefined: boolean;
        url: string;
        stars: [boolean, boolean, boolean, boolean, boolean];
        cssClasses: RatingMenuCSSClasses;
        attribute?: string;
        isFromSearch?: boolean;
    }>;
}>;
export type RatingMenuCSSClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the root element when there's no refinements.
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
     * CSS class to add the selected item element.
     */
    selectedItem: string | string[];
    /**
     * CSS class to add a disabled item element.
     */
    disabledItem: string | string[];
    /**
     * CSS class to add to each link element.
     */
    link: string | string[];
    /**
     * CSS class to add to each star element (when using the default template).
     */
    starIcon: string | string[];
    /**
     * CSS class to add to each full star element (when using the default template).
     */
    fullStarIcon: string | string[];
    /**
     * CSS class to add to each empty star element (when using the default template).
     */
    emptyStarIcon: string | string[];
    /**
     * CSS class to add to each label.
     */
    label: string | string[];
    /**
     * CSS class to add to each counter.
     */
    count: string | string[];
}>;
export type RatingMenuComponentCSSClasses = ComponentCSSClasses<RatingMenuCSSClasses>;
export type RatingMenuComponentTemplates = Required<RatingMenuTemplates>;
export type RatingMenuWidgetParams = {
    /**
     * Place where to insert the widget in your webpage.
     */
    container: string | HTMLElement;
    /**
     * Name of the attribute in your records that contains the ratings.
     */
    attribute: string;
    /**
     * The maximum rating value.
     */
    max?: number;
    /**
     * Templates to use for the widget.
     */
    templates?: RatingMenuTemplates;
    /**
     * CSS classes to add.
     */
    cssClasses?: RatingMenuCSSClasses;
};
/**
 * Rating menu is used for displaying grade like filters. The values are normalized within boundaries.
 *
 * The maximum value can be set (with `max`), the minimum is always 0.
 *
 * @requirements
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * The values inside this attribute must be JavaScript numbers (not strings).
 *
 * @type {WidgetFactory}
 * @devNovel RatingMenu
 * @category filter
 * @param {RatingMenuWidgetParams} widgetParams RatingMenu widget options.
 * @return {Widget} A new RatingMenu widget instance.
 * @example
 * search.addWidgets([
 *   instantsearch.widgets.ratingMenu({
 *     container: '#stars',
 *     attribute: 'rating',
 *     max: 5,
 *   })
 * ]);
 */
export type RatingMenuWidget = WidgetFactory<RatingMenuWidgetDescription & {
    $$widgetType: 'ais.ratingMenu';
}, RatingMenuConnectorParams, RatingMenuWidgetParams>;
declare const ratingMenu: RatingMenuWidget;
export default ratingMenu;
