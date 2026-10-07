import type { WidgetFactory, WidgetRenderState } from '../../types';
import type { SearchParameters, SearchResults } from 'algoliasearch-helper';
export type AnalyticsWidgetParamsPushFunction = (
/**
 * Contains the search parameters, serialized as a query string.
 */
formattedParameters: string, 
/**
 * Contains the whole search state.
 */
state: SearchParameters, 
/**
 * The last received results.
 */
results: SearchResults) => void;
export type AnalyticsWidgetParams = {
    /**
     * A function that is called every time the query or refinements changes. You
     * need to add the logic to push the data to your analytics platform.
     */
    pushFunction: AnalyticsWidgetParamsPushFunction;
    /**
     * The number of milliseconds between the last search keystroke and calling `pushFunction`.
     *
     * @default 3000
     */
    delay?: number;
    /**
     * Triggers `pushFunction` after click on page or redirecting the page. This is useful if
     * you want the pushFunction to be called for the last actions before the user leaves the
     * current page, even if the delay wasn’t reached.
     *
     * @default false
     */
    triggerOnUIInteraction?: boolean;
    /**
     * Triggers `pushFunction` when InstantSearch is initialized. This means
     * the `pushFunction` might be called even though the user didn’t perfom
     * any search-related action.
     *
     * @default true
     */
    pushInitialSearch?: boolean;
    /**
     * Triggers `pushFunction` when the page changes, either through the UI or programmatically.
     *
     * @default false
     */
    pushPagination?: boolean;
};
export type AnalyticsWidgetDescription = {
    $$type: 'ais.analytics';
    $$widgetType: 'ais.analytics';
    renderState: Record<string, unknown>;
    indexRenderState: {
        analytics: WidgetRenderState<Record<string, unknown>, AnalyticsWidgetParams>;
    };
};
export type AnalyticsWidget = WidgetFactory<AnalyticsWidgetDescription, AnalyticsWidgetParams, AnalyticsWidgetParams>;
declare const analytics: AnalyticsWidget;
export default analytics;
