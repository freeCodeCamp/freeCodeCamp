import type { SendEventForHits, BindEventForHits } from '../../lib/utils';
import type { Connector, TransformItems, Hit, WidgetRenderState, BaseHit, Renderer, Unmounter, UnknownWidgetParams, IndexRenderState } from '../../types';
import type { Banner, AlgoliaSearchHelper as Helper, PlainSearchParameters, SearchParameters, SearchResults } from 'algoliasearch-helper';
export type InfiniteHitsCachedHits<THit extends NonNullable<object>> = {
    [page: number]: Array<Hit<THit>>;
};
type Read<THit extends NonNullable<object>> = ({ state, }: {
    state: PlainSearchParameters;
}) => InfiniteHitsCachedHits<THit> | null;
type Write<THit extends NonNullable<object>> = ({ state, hits, }: {
    state: PlainSearchParameters;
    hits: InfiniteHitsCachedHits<THit>;
}) => void;
export type InfiniteHitsCache<THit extends NonNullable<object> = BaseHit> = {
    read: Read<THit>;
    write: Write<THit>;
};
export type InfiniteHitsConnectorParams<THit extends NonNullable<object> = BaseHit> = {
    /**
     * Escapes HTML entities from hits string values.
     *
     * @default `true`
     */
    escapeHTML?: boolean;
    /**
     * Enable the button to load previous results.
     *
     * @default `false`
     */
    showPrevious?: boolean;
    /**
     * Receives the items, and is called before displaying them.
     * Useful for mapping over the items to transform, and remove or reorder them.
     */
    transformItems?: TransformItems<Hit<THit>>;
    /**
     * Reads and writes hits from/to cache.
     * When user comes back to the search page after leaving for product page,
     * this helps restore InfiniteHits and its scroll position.
     */
    cache?: InfiniteHitsCache<THit>;
};
export type InfiniteHitsRenderState<THit extends NonNullable<object> = BaseHit> = {
    /**
     * Loads the previous results.
     */
    showPrevious: () => void;
    /**
     * Loads the next page of hits.
     */
    showMore: () => void;
    /**
     * Indicates whether the first page of hits has been reached.
     */
    isFirstPage: boolean;
    /**
     * Indicates whether the last page of hits has been reached.
     */
    isLastPage: boolean;
    /**
     * Send event to insights middleware
     */
    sendEvent: SendEventForHits;
    /**
     * Returns a string of data-insights-event attribute for insights middleware
     */
    bindEvent: BindEventForHits;
    /**
     * Hits for the current page
     */
    currentPageHits: Array<Hit<THit>>;
    /**
     * Hits for current and cached pages
     * @deprecated use `items` instead
     */
    hits: Array<Hit<THit>>;
    /**
     * Hits for current and cached pages
     */
    items: Array<Hit<THit>>;
    /**
     * The response from the Algolia API.
     */
    results?: SearchResults<Hit<THit>> | null;
    /**
     * The banner to display above the hits.
     */
    banner?: Banner;
};
export type InfiniteHitsWidgetDescription<THit extends NonNullable<object> = BaseHit> = {
    $$type: 'ais.infiniteHits';
    renderState: InfiniteHitsRenderState<THit>;
    indexRenderState: {
        infiniteHits: WidgetRenderState<InfiniteHitsRenderState<THit>, InfiniteHitsConnectorParams<THit>>;
    };
    indexUiState: {
        page: number;
    };
};
export type InfiniteHitsConnector<THit extends NonNullable<object> = BaseHit> = Connector<InfiniteHitsWidgetDescription<THit>, InfiniteHitsConnectorParams<THit>>;
declare const _default: <TWidgetParams extends UnknownWidgetParams>(renderFn: Renderer<InfiniteHitsRenderState, TWidgetParams>, unmountFn?: Unmounter) => <THit extends NonNullable<object> = BaseHit>(widgetParams: TWidgetParams & InfiniteHitsConnectorParams<THit>) => {
    $$type: "ais.infiniteHits";
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
        hits?: WidgetRenderState<import("../hits/connectHits").HitsRenderState<BaseHit>, import("../hits/connectHits").HitsConnectorParams<BaseHit>> | undefined;
        hitsPerPage?: WidgetRenderState<import("../hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("../hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: WidgetRenderState<InfiniteHitsRenderState<BaseHit>, InfiniteHitsConnectorParams<BaseHit>> | undefined;
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
    }, renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions): IndexRenderState & InfiniteHitsWidgetDescription["indexRenderState"];
    getWidgetRenderState({ results, helper, parent, state: existingState, instantSearchInstance, }: import("../../types").InitOptions | import("../../types").RenderOptions): {
        hits: Hit<THit>[];
        items: Hit<THit>[];
        currentPageHits: Hit<THit>[];
        sendEvent: SendEventForHits;
        bindEvent: BindEventForHits;
        banner: Banner | undefined;
        results: SearchResults<any> | undefined;
        showPrevious: () => void;
        showMore: () => void;
        isFirstPage: boolean;
        isLastPage: boolean;
        widgetParams: TWidgetParams & InfiniteHitsConnectorParams<THit>;
    };
    dispose({ state }: import("../../types").DisposeOptions): SearchParameters;
    getWidgetUiState(uiState: {
        page?: number | undefined;
        query?: string | undefined;
        configure?: PlainSearchParameters | undefined;
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
        searchParameters: SearchParameters;
        helper: Helper;
    }): {
        page?: number | undefined;
        query?: string | undefined;
        configure?: PlainSearchParameters | undefined;
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
    getWidgetSearchParameters(searchParameters: SearchParameters, { uiState }: {
        uiState: {
            page?: number | undefined;
            query?: string | undefined;
            configure?: PlainSearchParameters | undefined;
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
    }): SearchParameters;
};
export default _default;
