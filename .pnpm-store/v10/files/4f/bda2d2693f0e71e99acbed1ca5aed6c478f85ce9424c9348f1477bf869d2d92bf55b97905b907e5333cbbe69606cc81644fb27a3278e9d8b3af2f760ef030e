import type { InfiniteHitsWidgetDescription, InfiniteHitsConnectorParams } from './connectInfiniteHits';
declare const connectInfiniteHitsWithInsights: <TWidgetParams extends import("../../types").UnknownWidgetParams>(renderFn: import("../../types").Renderer<import("./connectInfiniteHits").InfiniteHitsRenderState, TWidgetParams>, unmountFn?: import("../../types").Unmounter) => <THit extends NonNullable<object> = import("../../types").BaseHit>(widgetParams: TWidgetParams & InfiniteHitsConnectorParams<THit>) => {
    $$type: "ais.infiniteHits";
    init(initOptions: import("../../types").InitOptions): void;
    render(renderOptions: import("../../types").RenderOptions): void;
    getRenderState(renderState: {
        answers?: import("../../types").WidgetRenderState<import("../answers/connectAnswers").AnswersRenderState, import("../answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: import("../../types").WidgetRenderState<import("../autocomplete/connectAutocomplete").AutocompleteRenderState, import("../autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("../breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        chat?: import("../../types").WidgetRenderState<import("../chat/connectChat").ChatRenderState<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>, import("../chat/connectChat").ChatConnectorParams<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>> | undefined;
        clearRefinements?: import("../../types").WidgetRenderState<import("../clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("../clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: import("../../types").WidgetRenderState<import("../configure/connectConfigure").ConfigureRenderState, import("../configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: import("../../types").WidgetRenderState<import("../current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("../current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: import("../../types").WidgetRenderState<import("../geo-search/connectGeoSearch").GeoSearchRenderState<import("../../types").GeoHit>, import("../geo-search/connectGeoSearch").GeoSearchConnectorParams<import("../../types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: import("../../types").WidgetRenderState<import("../hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: import("../../types").WidgetRenderState<import("../hits/connectHits").HitsRenderState<import("../../types").BaseHit>, import("../hits/connectHits").HitsConnectorParams<import("../../types").BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("./connectInfiniteHits").InfiniteHitsRenderState<import("../../types").BaseHit>, InfiniteHitsConnectorParams<import("../../types").BaseHit>> | undefined;
        menu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../menu/connectMenu").MenuRenderState, import("../menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../numeric-menu/connectNumericMenu").NumericMenuRenderState, import("../numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: import("../../types").WidgetRenderState<import("../pagination/connectPagination").PaginationRenderState, import("../pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: import("../../types").WidgetRenderState<import("../powered-by/connectPoweredBy").PoweredByRenderState, import("../powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: import("../../types").WidgetRenderState<import("../query-rules/connectQueryRules").QueryRulesRenderState, import("../query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../range/connectRange").RangeRenderState, import("../range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../rating-menu/connectRatingMenu").RatingMenuRenderState, import("../rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../refinement-list/connectRefinementList").RefinementListRenderState, import("../refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: import("../../types").WidgetRenderState<import("../relevant-sort/connectRelevantSort").RelevantSortRenderState, import("../relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: import("../../types").WidgetRenderState<import("../search-box/connectSearchBox").SearchBoxRenderState, import("../search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: import("../../types").WidgetRenderState<import("../sort-by/connectSortBy").SortByRenderState, import("../sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: import("../../types").WidgetRenderState<import("../stats/connectStats").StatsRenderState, import("../stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: import("../../types").WidgetRenderState<import("../toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("../toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: import("../../types").WidgetRenderState<import("../voice-search/connectVoiceSearch").VoiceSearchRenderState, import("../voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../../widgets/analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: import("../../types").WidgetRenderState<Record<string, unknown>, import("../../widgets/places/places").PlacesWidgetParams> | undefined;
    }, renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions): import("../../types").IndexRenderState & InfiniteHitsWidgetDescription["indexRenderState"];
    getWidgetRenderState({ results, helper, parent, state: existingState, instantSearchInstance, }: import("../../types").InitOptions | import("../../types").RenderOptions): {
        hits: import("../../types").Hit<THit>[];
        items: import("../../types").Hit<THit>[];
        currentPageHits: import("../../types").Hit<THit>[];
        sendEvent: import("../../lib/utils").SendEventForHits;
        bindEvent: import("../../lib/utils").BindEventForHits;
        banner: import("algoliasearch-helper").Banner | undefined;
        results: import("algoliasearch-helper").SearchResults<any> | undefined;
        showPrevious: () => void;
        showMore: () => void;
        isFirstPage: boolean;
        isLastPage: boolean;
        widgetParams: TWidgetParams & InfiniteHitsConnectorParams<THit>;
    };
    dispose({ state }: import("../../types").DisposeOptions): import("algoliasearch-helper").SearchParameters;
    getWidgetUiState(uiState: {
        page?: number | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
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
    }, { searchParameters }: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }): {
        page?: number | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
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
    getWidgetSearchParameters(searchParameters: import("algoliasearch-helper").SearchParameters, { uiState }: {
        uiState: {
            page?: number | undefined;
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
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
    }): import("algoliasearch-helper").SearchParameters;
};
export default connectInfiniteHitsWithInsights;
