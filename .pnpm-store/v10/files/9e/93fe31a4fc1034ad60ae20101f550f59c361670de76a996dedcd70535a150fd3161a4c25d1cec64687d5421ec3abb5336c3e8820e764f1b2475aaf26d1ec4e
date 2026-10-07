
import type { FilterSuggestionsRenderState, FilterSuggestionsConnectorParams, FilterSuggestionsWidgetDescription } from '../../connectors/filter-suggestions/connectFilterSuggestions';
import type { WidgetFactory, Template } from '../../types';
import type { FilterSuggestionsClassNames, FilterSuggestionsEmptyComponentProps, FilterSuggestionsHeaderComponentProps, FilterSuggestionsItemComponentProps } from 'instantsearch-ui-components';
export type FilterSuggestionsCSSClasses = Partial<FilterSuggestionsClassNames>;
export type FilterSuggestionsTemplates = Partial<{
    /**
     * Template to use for the header. Set to `false` to disable the header.
     */
    header: Template<FilterSuggestionsHeaderComponentProps> | false;
    /**
     * Template to use for each suggestion item.
     */
    item: Template<FilterSuggestionsItemComponentProps>;
    /**
     * Template to use when there are no suggestions.
     */
    empty: Template<FilterSuggestionsEmptyComponentProps>;
}>;
type FilterSuggestionsWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Templates to use for the widget.
     */
    templates?: FilterSuggestionsTemplates;
    /**
     * CSS classes to add.
     */
    cssClasses?: FilterSuggestionsCSSClasses;
};
export type FilterSuggestionsWidget = WidgetFactory<FilterSuggestionsWidgetDescription & {
    $$widgetType: 'ais.filterSuggestions';
}, FilterSuggestionsConnectorParams, FilterSuggestionsWidgetParams>;
declare const _default: (widgetParams: FilterSuggestionsWidgetParams & FilterSuggestionsConnectorParams) => {
    $$widgetType: "ais.filterSuggestions";
    parent?: import("../index").IndexWidget;
    $$type: "ais.filterSuggestions";
    init?: (options: import("../../types").InitOptions) => void;
    shouldRender?: (options: import("../../types").ShouldRenderOptions) => boolean;
    render?: (options: import("../../types").RenderOptions) => void;
    dispose?: (options: import("../../types").DisposeOptions) => import("algoliasearch-helper").SearchParameters | import("algoliasearch-helper").RecommendParameters | void;
    getWidgetUiState?: ((uiState: {
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        range?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<import("../../types").IndexUiState & unknown>) | undefined;
    getWidgetState?: ((uiState: {
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        range?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<import("../../types").IndexUiState & unknown>) | undefined;
    getWidgetSearchParameters?: ((state: import("algoliasearch-helper").SearchParameters, widgetSearchParametersOptions: {
        uiState: {
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            range?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").SearchParameters) | undefined;
    getWidgetRenderState: (renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions) => import("../../types").Expand<import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams & Partial<FilterSuggestionsWidgetParams>>>;
    getRenderState: (renderState: {
        answers?: import("../../types").WidgetRenderState<import("../../connectors/answers/connectAnswers").AnswersRenderState, import("../../connectors/answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: import("../../types").WidgetRenderState<import("../../connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("../../connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        chat?: import("../../types").WidgetRenderState<import("../../connectors/chat/connectChat").ChatRenderState<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>, import("../../connectors/chat/connectChat").ChatConnectorParams<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>> | undefined;
        clearRefinements?: import("../../types").WidgetRenderState<import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: import("../../types").WidgetRenderState<import("../../connectors/configure/connectConfigure").ConfigureRenderState, import("../../connectors/configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: import("../../types").WidgetRenderState<import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: import("../../types").WidgetRenderState<import("../../connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("../../types").GeoHit>, import("../../connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("../../types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<import("../../types").BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<import("../../types").BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("../../types").BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("../../types").BaseHit>> | undefined;
        menu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/menu/connectMenu").MenuRenderState, import("../../connectors/menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: import("../../types").WidgetRenderState<import("../../connectors/pagination/connectPagination").PaginationRenderState, import("../../connectors/pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: import("../../types").WidgetRenderState<import("../../connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("../../connectors/powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: import("../../types").WidgetRenderState<import("../../connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("../../connectors/query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/range/connectRange").RangeRenderState, import("../../connectors/range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("../../connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("../../connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: import("../../types").WidgetRenderState<import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: import("../../types").WidgetRenderState<import("../../connectors/search-box/connectSearchBox").SearchBoxRenderState, import("../../connectors/search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: import("../../types").WidgetRenderState<import("../../connectors/sort-by/connectSortBy").SortByRenderState, import("../../connectors/sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: import("../../types").WidgetRenderState<import("../../connectors/stats/connectStats").StatsRenderState, import("../../connectors/stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: import("../../types").WidgetRenderState<import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../places/places").PlacesWidgetParams> | undefined;
        filterSuggestions?: import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams> | undefined;
    }, renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions) => import("../../types").IndexRenderState & {
        filterSuggestions: import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams>;
    };
    dependsOn?: "search";
    getWidgetParameters?: ((state: import("algoliasearch-helper").SearchParameters, widgetParametersOptions: {
        uiState: {
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            range?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").SearchParameters) | undefined;
} | {
    $$widgetType: "ais.filterSuggestions";
    parent?: import("../index").IndexWidget;
    $$type: "ais.filterSuggestions";
    init?: (options: import("../../types").InitOptions) => void;
    shouldRender?: (options: import("../../types").ShouldRenderOptions) => boolean;
    render?: (options: import("../../types").RenderOptions) => void;
    dispose?: (options: import("../../types").DisposeOptions) => import("algoliasearch-helper").SearchParameters | import("algoliasearch-helper").RecommendParameters | void;
    getWidgetUiState?: ((uiState: {
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        range?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<import("../../types").IndexUiState & unknown>) | undefined;
    getWidgetState?: ((uiState: {
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        range?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<import("../../types").IndexUiState & unknown>) | undefined;
    getWidgetSearchParameters?: ((state: import("algoliasearch-helper").SearchParameters, widgetSearchParametersOptions: {
        uiState: {
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            range?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").SearchParameters) | undefined;
    getWidgetRenderState: ((renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions) => import("../../types").Expand<import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams & Partial<FilterSuggestionsWidgetParams>>>) & ((renderOptions: import("../../types").InitOptions | ({
        instantSearchInstance: import("../../types").InstantSearch;
        parent: import("../index").IndexWidget;
        templatesConfig: Record<string, unknown>;
        scopedResults: import("../../types").ScopedResult[];
        state: import("algoliasearch-helper").SearchParameters;
        renderState: Partial<{
            answers: import("../../types").WidgetRenderState<import("../../connectors/answers/connectAnswers").AnswersRenderState, import("../../connectors/answers/connectAnswers").AnswersConnectorParams>;
        } & {
            autocomplete: import("../../types").WidgetRenderState<import("../../connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("../../connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams>;
        } & {
            breadcrumb: {
                [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
            };
        } & {
            chat: import("../../types").WidgetRenderState<import("../../connectors/chat/connectChat").ChatRenderState<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>, import("../../connectors/chat/connectChat").ChatConnectorParams<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>>;
        } & {
            clearRefinements: import("../../types").WidgetRenderState<import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams>;
        } & {
            configure: import("../../types").WidgetRenderState<import("../../connectors/configure/connectConfigure").ConfigureRenderState, import("../../connectors/configure/connectConfigure").ConfigureConnectorParams>;
        } & {
            currentRefinements: import("../../types").WidgetRenderState<import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams>;
        } & {
            geoSearch: import("../../types").WidgetRenderState<import("../../connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("../../types").GeoHit>, import("../../connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("../../types").GeoHit>>;
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
            };
        } & {
            hits: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<import("../../types").BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<import("../../types").BaseHit>>;
        } & {
            hitsPerPage: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
        } & {
            infiniteHits: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("../../types").BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("../../types").BaseHit>>;
        } & {
            menu: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/menu/connectMenu").MenuRenderState, import("../../connectors/menu/connectMenu").MenuConnectorParams>;
            };
        } & {
            numericMenu: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
            };
        } & {
            pagination: import("../../types").WidgetRenderState<import("../../connectors/pagination/connectPagination").PaginationRenderState, import("../../connectors/pagination/connectPagination").PaginationConnectorParams>;
        } & {
            poweredBy: import("../../types").WidgetRenderState<import("../../connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("../../connectors/powered-by/connectPoweredBy").PoweredByConnectorParams>;
        } & {
            queryRules: import("../../types").WidgetRenderState<import("../../connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("../../connectors/query-rules/connectQueryRules").QueryRulesConnectorParams>;
        } & {
            range: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/range/connectRange").RangeRenderState, import("../../connectors/range/connectRange").RangeConnectorParams>;
            };
        } & {
            ratingMenu: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("../../connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
            };
        } & {
            refinementList: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("../../connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
            };
        } & {
            relevantSort: import("../../types").WidgetRenderState<import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams>;
        } & {
            searchBox: import("../../types").WidgetRenderState<import("../../connectors/search-box/connectSearchBox").SearchBoxRenderState, import("../../connectors/search-box/connectSearchBox").SearchBoxConnectorParams>;
        } & {
            sortBy: import("../../types").WidgetRenderState<import("../../connectors/sort-by/connectSortBy").SortByRenderState, import("../../connectors/sort-by/connectSortBy").SortByConnectorParams>;
        } & {
            stats: import("../../types").WidgetRenderState<import("../../connectors/stats/connectStats").StatsRenderState, import("../../connectors/stats/connectStats").StatsConnectorParams>;
        } & {
            toggleRefinement: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
            };
        } & {
            voiceSearch: import("../../types").WidgetRenderState<import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams>;
        } & {
            analytics: import("../../types").WidgetRenderState<Record<string, unknown>, import("../analytics/analytics").AnalyticsWidgetParams>;
        } & {
            places: import("../../types").WidgetRenderState<Record<string, unknown>, import("../places/places").PlacesWidgetParams>;
        }>;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
        searchMetadata: {
            isSearchStalled: boolean;
        };
        status: import("../../types").InstantSearch["status"];
        error: import("../../types").InstantSearch["error"];
        createURL: (nextState: import("algoliasearch-helper").SearchParameters | ((state: import("../../types").IndexUiState) => import("../../types").IndexUiState)) => string;
    } & {
        results: import("algoliasearch-helper/types/algoliasearch").RecommendResponse<any>;
    })) => import("../../types").Expand<import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams & Partial<FilterSuggestionsWidgetParams>>>);
    getRenderState: ((renderState: {
        answers?: import("../../types").WidgetRenderState<import("../../connectors/answers/connectAnswers").AnswersRenderState, import("../../connectors/answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: import("../../types").WidgetRenderState<import("../../connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("../../connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        chat?: import("../../types").WidgetRenderState<import("../../connectors/chat/connectChat").ChatRenderState<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>, import("../../connectors/chat/connectChat").ChatConnectorParams<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>> | undefined;
        clearRefinements?: import("../../types").WidgetRenderState<import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: import("../../types").WidgetRenderState<import("../../connectors/configure/connectConfigure").ConfigureRenderState, import("../../connectors/configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: import("../../types").WidgetRenderState<import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: import("../../types").WidgetRenderState<import("../../connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("../../types").GeoHit>, import("../../connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("../../types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<import("../../types").BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<import("../../types").BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("../../types").BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("../../types").BaseHit>> | undefined;
        menu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/menu/connectMenu").MenuRenderState, import("../../connectors/menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: import("../../types").WidgetRenderState<import("../../connectors/pagination/connectPagination").PaginationRenderState, import("../../connectors/pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: import("../../types").WidgetRenderState<import("../../connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("../../connectors/powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: import("../../types").WidgetRenderState<import("../../connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("../../connectors/query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/range/connectRange").RangeRenderState, import("../../connectors/range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("../../connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("../../connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: import("../../types").WidgetRenderState<import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: import("../../types").WidgetRenderState<import("../../connectors/search-box/connectSearchBox").SearchBoxRenderState, import("../../connectors/search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: import("../../types").WidgetRenderState<import("../../connectors/sort-by/connectSortBy").SortByRenderState, import("../../connectors/sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: import("../../types").WidgetRenderState<import("../../connectors/stats/connectStats").StatsRenderState, import("../../connectors/stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: import("../../types").WidgetRenderState<import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../places/places").PlacesWidgetParams> | undefined;
        filterSuggestions?: import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams> | undefined;
    }, renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions) => import("../../types").IndexRenderState & {
        filterSuggestions: import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams>;
    }) & ((renderState: {
        answers?: import("../../types").WidgetRenderState<import("../../connectors/answers/connectAnswers").AnswersRenderState, import("../../connectors/answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: import("../../types").WidgetRenderState<import("../../connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("../../connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        chat?: import("../../types").WidgetRenderState<import("../../connectors/chat/connectChat").ChatRenderState<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>, import("../../connectors/chat/connectChat").ChatConnectorParams<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>> | undefined;
        clearRefinements?: import("../../types").WidgetRenderState<import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: import("../../types").WidgetRenderState<import("../../connectors/configure/connectConfigure").ConfigureRenderState, import("../../connectors/configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: import("../../types").WidgetRenderState<import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: import("../../types").WidgetRenderState<import("../../connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("../../types").GeoHit>, import("../../connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("../../types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<import("../../types").BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<import("../../types").BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("../../types").BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("../../types").BaseHit>> | undefined;
        menu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/menu/connectMenu").MenuRenderState, import("../../connectors/menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: import("../../types").WidgetRenderState<import("../../connectors/pagination/connectPagination").PaginationRenderState, import("../../connectors/pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: import("../../types").WidgetRenderState<import("../../connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("../../connectors/powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: import("../../types").WidgetRenderState<import("../../connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("../../connectors/query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/range/connectRange").RangeRenderState, import("../../connectors/range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("../../connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("../../connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: import("../../types").WidgetRenderState<import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: import("../../types").WidgetRenderState<import("../../connectors/search-box/connectSearchBox").SearchBoxRenderState, import("../../connectors/search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: import("../../types").WidgetRenderState<import("../../connectors/sort-by/connectSortBy").SortByRenderState, import("../../connectors/sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: import("../../types").WidgetRenderState<import("../../connectors/stats/connectStats").StatsRenderState, import("../../connectors/stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: import("../../types").WidgetRenderState<import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../places/places").PlacesWidgetParams> | undefined;
        filterSuggestions?: import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams> | undefined;
    }, renderOptions: import("../../types").InitOptions | ({
        instantSearchInstance: import("../../types").InstantSearch;
        parent: import("../index").IndexWidget;
        templatesConfig: Record<string, unknown>;
        scopedResults: import("../../types").ScopedResult[];
        state: import("algoliasearch-helper").SearchParameters;
        renderState: Partial<{
            answers: import("../../types").WidgetRenderState<import("../../connectors/answers/connectAnswers").AnswersRenderState, import("../../connectors/answers/connectAnswers").AnswersConnectorParams>;
        } & {
            autocomplete: import("../../types").WidgetRenderState<import("../../connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("../../connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams>;
        } & {
            breadcrumb: {
                [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("../../connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
            };
        } & {
            chat: import("../../types").WidgetRenderState<import("../../connectors/chat/connectChat").ChatRenderState<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>, import("../../connectors/chat/connectChat").ChatConnectorParams<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>>;
        } & {
            clearRefinements: import("../../types").WidgetRenderState<import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("../../connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams>;
        } & {
            configure: import("../../types").WidgetRenderState<import("../../connectors/configure/connectConfigure").ConfigureRenderState, import("../../connectors/configure/connectConfigure").ConfigureConnectorParams>;
        } & {
            currentRefinements: import("../../types").WidgetRenderState<import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("../../connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams>;
        } & {
            geoSearch: import("../../types").WidgetRenderState<import("../../connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("../../types").GeoHit>, import("../../connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("../../types").GeoHit>>;
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: import("../../types").WidgetRenderState<import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../../connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
            };
        } & {
            hits: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<import("../../types").BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<import("../../types").BaseHit>>;
        } & {
            hitsPerPage: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
        } & {
            infiniteHits: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("../../types").BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("../../types").BaseHit>>;
        } & {
            menu: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/menu/connectMenu").MenuRenderState, import("../../connectors/menu/connectMenu").MenuConnectorParams>;
            };
        } & {
            numericMenu: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("../../connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
            };
        } & {
            pagination: import("../../types").WidgetRenderState<import("../../connectors/pagination/connectPagination").PaginationRenderState, import("../../connectors/pagination/connectPagination").PaginationConnectorParams>;
        } & {
            poweredBy: import("../../types").WidgetRenderState<import("../../connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("../../connectors/powered-by/connectPoweredBy").PoweredByConnectorParams>;
        } & {
            queryRules: import("../../types").WidgetRenderState<import("../../connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("../../connectors/query-rules/connectQueryRules").QueryRulesConnectorParams>;
        } & {
            range: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/range/connectRange").RangeRenderState, import("../../connectors/range/connectRange").RangeConnectorParams>;
            };
        } & {
            ratingMenu: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("../../connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
            };
        } & {
            refinementList: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("../../connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
            };
        } & {
            relevantSort: import("../../types").WidgetRenderState<import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("../../connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams>;
        } & {
            searchBox: import("../../types").WidgetRenderState<import("../../connectors/search-box/connectSearchBox").SearchBoxRenderState, import("../../connectors/search-box/connectSearchBox").SearchBoxConnectorParams>;
        } & {
            sortBy: import("../../types").WidgetRenderState<import("../../connectors/sort-by/connectSortBy").SortByRenderState, import("../../connectors/sort-by/connectSortBy").SortByConnectorParams>;
        } & {
            stats: import("../../types").WidgetRenderState<import("../../connectors/stats/connectStats").StatsRenderState, import("../../connectors/stats/connectStats").StatsConnectorParams>;
        } & {
            toggleRefinement: {
                [attribute: string]: import("../../types").WidgetRenderState<import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("../../connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
            };
        } & {
            voiceSearch: import("../../types").WidgetRenderState<import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("../../connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams>;
        } & {
            analytics: import("../../types").WidgetRenderState<Record<string, unknown>, import("../analytics/analytics").AnalyticsWidgetParams>;
        } & {
            places: import("../../types").WidgetRenderState<Record<string, unknown>, import("../places/places").PlacesWidgetParams>;
        }>;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
        searchMetadata: {
            isSearchStalled: boolean;
        };
        status: import("../../types").InstantSearch["status"];
        error: import("../../types").InstantSearch["error"];
        createURL: (nextState: import("algoliasearch-helper").SearchParameters | ((state: import("../../types").IndexUiState) => import("../../types").IndexUiState)) => string;
    } & {
        results: import("algoliasearch-helper/types/algoliasearch").RecommendResponse<any>;
    })) => import("../../types").IndexRenderState & {
        filterSuggestions: import("../../types").WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams>;
    });
    dependsOn: "recommend";
    $$id?: number;
    getWidgetParameters: (state: import("algoliasearch-helper").RecommendParameters, widgetParametersOptions: {
        uiState: {
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            range?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").RecommendParameters;
};
export default _default;
