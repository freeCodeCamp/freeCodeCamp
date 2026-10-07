
import type { RefinementListConnectorParams, RefinementListWidgetDescription } from '../../connectors/refinement-list/connectRefinementList';
import type { Template, WidgetFactory } from '../../types';
import type { SearchBoxTemplates } from '../search-box/search-box';
export type RefinementListOwnCSSClasses = Partial<{
    /**
     * CSS class to add to the root element.
     */
    root: string | string[];
    /**
     * CSS class to add to the root element when no refinements.
     */
    noRefinementRoot: string | string[];
    /**
     * CSS class to add to the root element with no results.
     */
    noResults: string | string[];
    /**
     * CSS class to add to the list element.
     */
    list: string | string[];
    /**
     * CSS class to add to each item element.
     */
    item: string | string[];
    /**
     * CSS class to add to each selected element.
     */
    selectedItem: string | string[];
    /**
     * CSS class to add to each label element (when using the default template).
     */
    label: string | string[];
    /**
     * CSS class to add to each checkbox element (when using the default template).
     */
    checkbox: string | string[];
    /**
     * CSS class to add to each label text element.
     */
    labelText: string | string[];
    /**
     * CSS class to add to the show more element
     */
    showMore: string | string[];
    /**
     * CSS class to add to the disabled show more element
     */
    disabledShowMore: string | string[];
    /**
     * CSS class to add to each count element (when using the default template).
     */
    count: string | string[];
    /**
     * CSS class to add to the searchable container.
     */
    searchBox: string | string[];
}>;
type RefinementListSearchableCSSClasses = Partial<{
    searchableRoot: string | string[];
    searchableForm: string | string[];
    searchableInput: string | string[];
    searchableSubmit: string | string[];
    searchableSubmitIcon: string | string[];
    searchableReset: string | string[];
    searchableResetIcon: string | string[];
    searchableLoadingIndicator: string | string[];
    searchableLoadingIcon: string | string[];
}>;
export type RefinementListCSSClasses = RefinementListOwnCSSClasses & RefinementListSearchableCSSClasses;
export type RefinementListItemData = {
    /**
     * The number of occurrences of the facet in the result set.
     */
    count: number;
    /**
     * True if the value is selected.
     */
    isRefined: boolean;
    /**
     * The label to display.
     */
    label: string;
    /**
     * The value used for refining.
     */
    value: string;
    /**
     * The label highlighted (when using search for facet values). This value is displayed in the default template.
     */
    highlighted: string;
    /**
     * The url with this refinement selected.
     */
    url: string;
    /**
     * Object containing all the classes computed for the item.
     */
    cssClasses: RefinementListCSSClasses;
    /**
     * Whether the `items` prop contains facet values from the global search or from the search inside the items.
     */
    isFromSearch: boolean;
};
export type RefinementListOwnTemplates = Partial<{
    /**
     * Item template, provided with `label`, `highlighted`, `value`, `count`, `isRefined`, `url` data properties.
     */
    item: Template<RefinementListItemData>;
    /**
     * Template used for the show more text, provided with `isShowingMore` data property.
     */
    showMoreText: Template<{
        isShowingMore: boolean;
    }>;
    /**
     * Templates to use for search for facet values when there are no results.
     */
    searchableNoResults: Template;
}>;
type RefinementListSearchableTemplates = Partial<{
    /**
     * Templates to use for search for facet values submit button.
     */
    searchableSubmit: SearchBoxTemplates['submit'];
    /**
     * Templates to use for search for facet values reset button.
     */
    searchableReset: SearchBoxTemplates['reset'];
    /**
     * Templates to use for the search for facet values loading indicator.
     */
    searchableLoadingIndicator: SearchBoxTemplates['loadingIndicator'];
}>;
export type RefinementListTemplates = RefinementListOwnTemplates & RefinementListSearchableTemplates;
export type RefinementListComponentTemplates = Required<RefinementListOwnTemplates>;
export type RefinementListWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Add a search input to let the user search for more facet values. In order
     * to make this feature work, you need to make the attribute searchable
     * [using the API](https://www.algolia.com/doc/guides/searching/faceting/?language=js#declaring-a-searchable-attribute-for-faceting)
     * or [the dashboard](https://www.algolia.com/explorer/display/)
     */
    searchable?: boolean;
    /**
     * Value of the search field placeholder.
     */
    searchablePlaceholder?: string;
    /**
     * When `false` the search field will become disabled if there are less items
     * to display than the `options.limit`, otherwise the search field is always usable.
     */
    searchableIsAlwaysActive?: boolean;
    /**
     * When activated, it will escape the facet values that are returned from Algolia.
     * In this case, the surrounding tags will always be `<mark></mark>`.
     */
    searchableEscapeFacetValues?: boolean;
    /**
     * When activated, submitting the search box will select the first item in the list.
     * @default true
     */
    searchableSelectOnSubmit?: boolean;
    /**
     * Templates to use for the widget.
     */
    templates?: RefinementListTemplates;
    /**
     * CSS classes to add to the wrapping elements.
     */
    cssClasses?: RefinementListCSSClasses;
};
export type RefinementListWidget = WidgetFactory<RefinementListWidgetDescription & {
    $$widgetType: 'ais.refinementList';
}, RefinementListConnectorParams, RefinementListWidgetParams>;
/**
 * The refinement list widget is one of the most common widget that you can find
 * in a search UI. With this widget, the user can filter the dataset based on facets.
 *
 * The refinement list displays only the most relevant facets for the current search
 * context. The sort option only affects the facet that are returned by the engine,
 * not which facets are returned.
 *
 * This widget also implements search for facet values, which is a mini search inside the
 * values of the facets. This makes easy to deal with uncommon facet values.
 *
 * @requirements
 *
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * If you also want to use search for facet values on this attribute, you need to make it searchable using the [dashboard](https://www.algolia.com/explorer/display/) or using the [API](https://www.algolia.com/doc/guides/searching/faceting/#search-for-facet-values).
 */
declare const refinementList: RefinementListWidget;
export default refinementList;
