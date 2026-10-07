import type { SendEventForHits, BindEventForHits } from '../../lib/utils';
import type { TransformItems, Connector, Hit, WidgetRenderState, BaseHit, Unmounter, Renderer, IndexRenderState } from '../../types';
import type { Banner, SearchResults } from 'algoliasearch-helper';
export type HitsRenderState<THit extends NonNullable<object> = BaseHit> = {
    /**
     * The matched hits from Algolia API.
     * @deprecated use `items` instead
     */
    hits: Array<Hit<THit>>;
    /**
     * The matched hits from Algolia API.
     */
    items: Array<Hit<THit>>;
    /**
     * The response from the Algolia API.
     */
    results?: SearchResults<Hit<THit>>;
    /**
     * The banner to display above the hits.
     */
    banner?: Banner;
    /**
     * Sends an event to the Insights middleware.
     */
    sendEvent: SendEventForHits;
    /**
     * Returns a string for the `data-insights-event` attribute for the Insights middleware
     */
    bindEvent: BindEventForHits;
};
export type HitsConnectorParams<THit extends NonNullable<object> = BaseHit> = {
    /**
     * Whether to escape HTML tags from hits string values.
     *
     * @default true
     */
    escapeHTML?: boolean;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<Hit<THit>>;
};
export type HitsWidgetDescription<THit extends NonNullable<object> = BaseHit> = {
    $$type: 'ais.hits';
    renderState: HitsRenderState<THit>;
    indexRenderState: {
        hits: WidgetRenderState<HitsRenderState<THit>, HitsConnectorParams<THit>>;
    };
};
export type HitsConnector<THit extends NonNullable<object> = BaseHit> = Connector<HitsWidgetDescription<THit>, HitsConnectorParams<THit>>;
declare const _default: <TWidgetParams>(renderFn: Renderer<HitsRenderState, TWidgetParams & HitsConnectorParams>, unmountFn?: Unmounter) => <THit extends NonNullable<object> = BaseHit>(widgetParams: TWidgetParams & HitsConnectorParams<THit>) => {
    $$type: "ais.hits";
    init(initOptions: import("../../types").InitOptions): void;
    render(renderOptions: import("../../types").RenderOptions): void;
    getRenderState(renderState: {
        answers?: WidgetRenderState<import("../answers/connectAnswers").AnswersRenderState, import("../answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: WidgetRenderState<import("../autocomplete/connectAutocomplete").AutocompleteRenderState, import("../autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: WidgetRenderState<import("../breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("../breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        chat?: WidgetRenderState<import("../chat/connectChat").ChatRenderState<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>, import("../chat/connectChat").ChatConnectorParams<import("../../lib/ai-lite").UIMessage<unknown, import("../../lib/ai-lite").UIDataTypes, import("../../lib/ai-lite").UITools>>> | undefined;
        clearRefinements?: WidgetRenderState<import("../clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("../clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: WidgetRenderState<import("../configure/connectConfigure").ConfigureRenderState, import("../configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: WidgetRenderState<import("../current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("../current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: WidgetRenderState<import("../geo-search/connectGeoSearch").GeoSearchRenderState<import("../../types").GeoHit>, import("../geo-search/connectGeoSearch").GeoSearchConnectorParams<import("../../types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: WidgetRenderState<import("../hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: WidgetRenderState<HitsRenderState<BaseHit>, HitsConnectorParams<BaseHit>> | undefined;
        hitsPerPage?: WidgetRenderState<import("../hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: WidgetRenderState<import("../infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<BaseHit>, import("../infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<BaseHit>> | undefined;
        menu?: {
            [attribute: string]: WidgetRenderState<import("../menu/connectMenu").MenuRenderState, import("../menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: WidgetRenderState<import("../numeric-menu/connectNumericMenu").NumericMenuRenderState, import("../numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: WidgetRenderState<import("../pagination/connectPagination").PaginationRenderState, import("../pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: WidgetRenderState<import("../powered-by/connectPoweredBy").PoweredByRenderState, import("../powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: WidgetRenderState<import("../query-rules/connectQueryRules").QueryRulesRenderState, import("../query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: WidgetRenderState<import("../range/connectRange").RangeRenderState, import("../range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: WidgetRenderState<import("../rating-menu/connectRatingMenu").RatingMenuRenderState, import("../rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: WidgetRenderState<import("../refinement-list/connectRefinementList").RefinementListRenderState, import("../refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: WidgetRenderState<import("../relevant-sort/connectRelevantSort").RelevantSortRenderState, import("../relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: WidgetRenderState<import("../search-box/connectSearchBox").SearchBoxRenderState, import("../search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: WidgetRenderState<import("../sort-by/connectSortBy").SortByRenderState, import("../sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: WidgetRenderState<import("../stats/connectStats").StatsRenderState, import("../stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: WidgetRenderState<import("../toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("../toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: WidgetRenderState<import("../voice-search/connectVoiceSearch").VoiceSearchRenderState, import("../voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: WidgetRenderState<Record<string, unknown>, import("../../widgets/analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: WidgetRenderState<Record<string, unknown>, import("../../widgets/places/places").PlacesWidgetParams> | undefined;
    }, renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions): IndexRenderState & HitsWidgetDescription["indexRenderState"];
    getWidgetRenderState({ results, helper, instantSearchInstance }: import("../../types").InitOptions | import("../../types").RenderOptions): {
        hits: never[];
        items: never[];
        results: undefined;
        banner: undefined;
        sendEvent: SendEventForHits;
        bindEvent: BindEventForHits;
        widgetParams: TWidgetParams & HitsConnectorParams<THit>;
    } | {
        hits: Hit<BaseHit>[] | Hit<THit>[];
        items: Hit<BaseHit>[] | Hit<THit>[];
        results: SearchResults<any>;
        banner: Banner | undefined;
        sendEvent: SendEventForHits;
        bindEvent: BindEventForHits;
        widgetParams: TWidgetParams & HitsConnectorParams<THit>;
    };
    dispose({ state }: import("../../types").DisposeOptions): import("algoliasearch-helper").SearchParameters;
    getWidgetSearchParameters(state: import("algoliasearch-helper").SearchParameters, _uiState: {
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
    }): import("algoliasearch-helper").SearchParameters;
};
export default _default;
