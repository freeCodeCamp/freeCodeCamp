
import type { SearchBoxComponentCSSClasses } from '../../components/SearchBox/SearchBox';
import type { SearchBoxConnectorParams, SearchBoxWidgetDescription } from '../../connectors/search-box/connectSearchBox';
import type { WidgetFactory, Template } from '../../types';
export type SearchBoxTemplates = Partial<{
    /**
     * Template used for displaying the submit button. Can accept a function or a Hogan string.
     */
    submit: Template<{
        cssClasses: SearchBoxComponentCSSClasses;
    }>;
    /**
     * Template used for displaying the reset button. Can accept a function or a Hogan string.
     */
    reset: Template<{
        cssClasses: SearchBoxComponentCSSClasses;
    }>;
    /**
     * Template used for displaying the loading indicator. Can accept a function or a Hogan string.
     */
    loadingIndicator: Template<{
        cssClasses: SearchBoxComponentCSSClasses;
    }>;
    /**
     * Template used for displaying the AI mode button content (icon and label).
     * Can accept a function or a Hogan string.
     */
    aiMode: Template<{
        cssClasses: SearchBoxComponentCSSClasses;
    }>;
}>;
export type SearchBoxCSSClasses = Partial<{
    /**
     * CSS class to add to the wrapping `<div>`
     */
    root: string | string[];
    /**
     * CSS class to add to the form
     */
    form: string | string[];
    /**
     * CSS class to add to the input.
     */
    input: string | string[];
    /**
     * CSS classes added to the submit button.
     */
    submit: string | string[];
    /**
     * CSS classes added to the submit icon.
     */
    submitIcon: string | string[];
    /**
     * CSS classes added to the reset button.
     */
    reset: string | string[];
    /**
     * CSS classes added to the reset icon.
     */
    resetIcon: string | string[];
    /**
     * CSS classes added to the loading indicator element.
     */
    loadingIndicator: string | string[];
    /**
     * CSS classes added to the loading indicator icon.
     */
    loadingIcon: string | string[];
    /**
     * CSS classes added to the AI mode button.
     */
    aiModeButton: string | string[];
    /**
     * CSS classes added to the AI mode button icon.
     */
    aiModeIcon: string | string[];
    /**
     * CSS classes added to the AI mode button label.
     */
    aiModeLabel: string | string[];
}>;
export type SearchBoxWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget
     */
    container: string | HTMLElement;
    /**
     * The placeholder of the input
     */
    placeholder?: string;
    /**
     * Whether the input should be autofocused
     */
    autofocus?: boolean;
    /**
     * If set, trigger the search
     * once `<Enter>` is pressed only.
     */
    searchAsYouType?: boolean;
    /**
     * Whether to update the search state in the middle of a
     * composition session.
     * @default false
     */
    ignoreCompositionEvents?: boolean;
    /**
     * Whether to show the reset button
     */
    showReset?: boolean;
    /**
     * Whether to show the submit button
     */
    showSubmit?: boolean;
    /**
     * Whether to show the loading indicator (replaces the submit if
     * the search is stalled)
     */
    showLoadingIndicator?: boolean;
    /**
     * CSS classes to add
     */
    cssClasses?: SearchBoxCSSClasses;
    /**
     * Templates used for customizing the rendering of the searchbox
     */
    templates?: SearchBoxTemplates;
    /**
     * A function that is called every time a new search is done. You
     * will get the query as the first parameter and a search (query) function to call as the second parameter.
     * This `queryHook` can be used to debounce the number of searches done from the search box.
     */
    queryHook?: (query: string, hook: (value: string) => void) => void;
    /**
     * When true, renders an AI mode button inside the search box
     * that opens the Chat widget and sends the current query.
     * Requires a Chat widget on the same index.
     */
    aiMode?: boolean;
};
/**
 * The searchbox widget is used to let the user set a text based query.
 *
 * This is usually the  main entry point to start the search in an instantsearch context. For that
 * reason is usually placed on top, and not hidden so that the user can start searching right
 * away.
 *
 */
export type SearchBoxWidget = WidgetFactory<SearchBoxWidgetDescription & {
    $$widgetType: 'ais.searchBox';
}, SearchBoxConnectorParams, SearchBoxWidgetParams>;
declare const searchBox: SearchBoxWidget;
export default searchBox;
