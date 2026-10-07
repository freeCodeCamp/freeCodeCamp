
import type { LookingSimilarWidgetDescription, LookingSimilarConnectorParams } from '../../connectors/looking-similar/connectLookingSimilar';
import type { Template, WidgetFactory, BaseHit, RecommendResponse, Hit, TemplateWithBindEvent } from '../../types';
import type { RecommendClassNames, LookingSimilarProps as LookingSimilarUiProps } from 'instantsearch-ui-components';
export type LookingSimilarCSSClasses = Partial<RecommendClassNames>;
export type LookingSimilarTemplates<THit extends NonNullable<object> = BaseHit> = Partial<{
    /**
     * Template to use when there are no results.
     */
    empty: Template<RecommendResponse<Hit<THit>>>;
    /**
     * Template to use for the header of the widget.
     */
    header: Template<Pick<Parameters<NonNullable<LookingSimilarUiProps<Hit<THit>>['headerComponent']>>[0], 'items'> & {
        cssClasses: RecommendClassNames;
    }>;
    /**
     * Template to use for each result. This template will receive an object containing a single record.
     */
    item: TemplateWithBindEvent<Hit<THit>>;
    /**
     * Template to use to wrap all items.
     */
    layout: Template<Pick<Parameters<NonNullable<LookingSimilarUiProps<Hit<THit>>['layout']>>[0], 'items'> & {
        templates: {
            item: LookingSimilarUiProps<Hit<THit>>['itemComponent'];
        };
        cssClasses: Pick<LookingSimilarCSSClasses, 'list' | 'item'>;
    }>;
}>;
type LookingSimilarWidgetParams<THit extends NonNullable<object> = BaseHit> = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Templates to use for the widget.
     */
    templates?: LookingSimilarTemplates<THit>;
    /**
     * CSS classes to add.
     */
    cssClasses?: LookingSimilarCSSClasses;
};
export type LookingSimilarWidget = WidgetFactory<LookingSimilarWidgetDescription & {
    $$widgetType: 'ais.lookingSimilar';
}, LookingSimilarConnectorParams, LookingSimilarWidgetParams>;
declare const _default: <THit extends NonNullable<object> = BaseHit>(widgetParams: LookingSimilarWidgetParams<THit> & LookingSimilarConnectorParams<THit>) => {
    $$widgetType: "ais.lookingSimilar";
    dependsOn: "recommend";
    $$type: "ais.lookingSimilar";
    init(initOptions: import("../../types").InitOptions): void;
    render(renderOptions: import("../../types").RenderOptions): void;
    getRenderState(renderState: {
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
        hits?: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<BaseHit>> | undefined;
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
    }): {
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
        hits?: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<BaseHit>> | undefined;
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
    };
    getWidgetRenderState({ results, helper, instantSearchInstance }: import("../../types").InitOptions | import("../../types").RenderOptions | ({
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
            hits: import("../../types").WidgetRenderState<import("../../connectors/hits/connectHits").HitsRenderState<BaseHit>, import("../../connectors/hits/connectHits").HitsConnectorParams<BaseHit>>;
        } & {
            hitsPerPage: import("../../types").WidgetRenderState<import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../../connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
        } & {
            infiniteHits: import("../../types").WidgetRenderState<import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<BaseHit>, import("../../connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<BaseHit>>;
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
        results: RecommendResponse<any>;
    })): {
        items: Hit<THit>[];
        widgetParams: Partial<LookingSimilarWidgetParams<BaseHit>> & LookingSimilarConnectorParams<THit>;
        sendEvent: import("../../lib/utils").SendEventForHits;
    };
    dispose({ recommendState }: import("../../types").DisposeOptions): import("algoliasearch-helper").RecommendParameters;
    getWidgetParameters(state: import("algoliasearch-helper").RecommendParameters): import("algoliasearch-helper").RecommendParameters;
};
export default _default;
