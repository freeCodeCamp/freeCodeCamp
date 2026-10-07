import type { SendEventForHits } from '../../lib/utils';
import type { Connector, TransformItems, BaseHit, Renderer, Unmounter, UnknownWidgetParams, RecommendResponse, Hit, AlgoliaHit } from '../../types';
import type { PlainSearchParameters } from 'algoliasearch-helper';
export type LookingSimilarRenderState<THit extends NonNullable<object> = BaseHit> = {
    /**
     * The matched recommendations from the Algolia API.
     */
    items: Array<Hit<THit>>;
    /**
     * Sends an event to the Insights middleware.
     */
    sendEvent: SendEventForHits;
};
export type LookingSimilarConnectorParams<THit extends NonNullable<object> = BaseHit> = {
    /**
     * The `objectIDs` of the items to get similar looking products from.
     */
    objectIDs: string[];
    /**
     * The number of recommendations to retrieve.
     */
    limit?: number;
    /**
     * The threshold for the recommendations confidence score (between 0 and 100).
     */
    threshold?: number;
    /**
     * List of search parameters to send.
     */
    fallbackParameters?: Omit<PlainSearchParameters, 'page' | 'hitsPerPage' | 'offset' | 'length'>;
    /**
     * List of search parameters to send.
     */
    queryParameters?: Omit<PlainSearchParameters, 'page' | 'hitsPerPage' | 'offset' | 'length'>;
    /**
     * Whether to escape HTML tags from items string values.
     *
     * @default true
     */
    escapeHTML?: boolean;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<Hit<THit>, {
        results: RecommendResponse<AlgoliaHit<THit>>;
    }>;
};
export type LookingSimilarWidgetDescription<THit extends NonNullable<object> = BaseHit> = {
    $$type: 'ais.lookingSimilar';
    renderState: LookingSimilarRenderState<THit>;
};
export type LookingSimilarConnector<THit extends NonNullable<object> = BaseHit> = Connector<LookingSimilarWidgetDescription<THit>, LookingSimilarConnectorParams<THit>>;
declare const _default: <TWidgetParams extends UnknownWidgetParams>(renderFn: Renderer<LookingSimilarRenderState, TWidgetParams & LookingSimilarConnectorParams>, unmountFn?: Unmounter) => <THit extends NonNullable<object> = BaseHit>(widgetParams: TWidgetParams & LookingSimilarConnectorParams<THit>) => {
    dependsOn: "recommend";
    $$type: "ais.lookingSimilar";
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
        hits?: import("../../types").WidgetRenderState<import("../hits/connectHits").HitsRenderState<BaseHit>, import("../hits/connectHits").HitsConnectorParams<BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("../infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<BaseHit>, import("../infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<BaseHit>> | undefined;
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
    }): {
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
        hits?: import("../../types").WidgetRenderState<import("../hits/connectHits").HitsRenderState<BaseHit>, import("../hits/connectHits").HitsConnectorParams<BaseHit>> | undefined;
        hitsPerPage?: import("../../types").WidgetRenderState<import("../hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("../../types").WidgetRenderState<import("../infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<BaseHit>, import("../infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<BaseHit>> | undefined;
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
    };
    getWidgetRenderState({ results, helper, instantSearchInstance }: import("../../types").InitOptions | import("../../types").RenderOptions | ({
        instantSearchInstance: import("../../types").InstantSearch;
        parent: import("../../types").IndexWidget;
        templatesConfig: Record<string, unknown>;
        scopedResults: import("../../types").ScopedResult[];
        state: import("algoliasearch-helper").SearchParameters;
        renderState: import("../../types").IndexRenderState;
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
        widgetParams: TWidgetParams & LookingSimilarConnectorParams<THit>;
        sendEvent: SendEventForHits;
    };
    dispose({ recommendState }: import("../../types").DisposeOptions): import("algoliasearch-helper").RecommendParameters;
    getWidgetParameters(state: import("algoliasearch-helper").RecommendParameters): import("algoliasearch-helper").RecommendParameters;
};
export default _default;
