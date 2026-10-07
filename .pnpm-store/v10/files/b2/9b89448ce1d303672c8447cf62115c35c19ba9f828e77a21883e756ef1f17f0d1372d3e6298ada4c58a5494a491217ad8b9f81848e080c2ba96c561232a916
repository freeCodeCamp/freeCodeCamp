import type { SendEventForHits } from '../../lib/utils';
import type { BaseHit, Connector, GeoHit, GeoLoc, IndexRenderState, InitOptions, Renderer, RenderOptions, TransformItems, UnknownWidgetParams, Unmounter, WidgetRenderState } from '../../types';
import type { AlgoliaSearchHelper, SearchParameters } from 'algoliasearch-helper';
export type { GeoHit } from '../../types';
type Bounds = {
    /**
     * The top right corner of the map view.
     */
    northEast: GeoLoc;
    /**
     * The bottom left corner of the map view.
     */
    southWest: GeoLoc;
};
export type GeoSearchRenderState<THit extends NonNullable<object> = BaseHit> = {
    /**
     * Reset the current bounding box refinement.
     */
    clearMapRefinement: () => void;
    /**
     * The current bounding box of the search.
     */
    currentRefinement?: Bounds;
    /**
     * Return true if the map has move since the last refinement.
     */
    hasMapMoveSinceLastRefine: () => boolean;
    /**
     * Return true if the current refinement is set with the map bounds.
     */
    isRefinedWithMap: () => boolean;
    /**
     * Return true if the user is able to refine on map move.
     */
    isRefineOnMapMove: () => boolean;
    /**
     * The matched hits from Algolia API.
     */
    items: Array<GeoHit<THit>>;
    /**
     * The current position of the search.
     */
    position?: GeoLoc;
    /**
     * Sets a bounding box to filter the results from the given map bounds.
     */
    refine: (bounds: Bounds) => void;
    /**
     * Send event to insights middleware
     */
    sendEvent: SendEventForHits;
    /**
     * Set the fact that the map has moved since the last refinement, should be
     * called on each map move. The call to the function triggers a new rendering
     * only when the value change.
     */
    setMapMoveSinceLastRefine: () => void;
    /**
     * Toggle the fact that the user is able to refine on map move.
     */
    toggleRefineOnMapMove: () => void;
};
export type GeoSearchConnectorParams<THit extends GeoHit = GeoHit> = {
    /**
     * If true, refine will be triggered as you move the map.
     * @default true
     */
    enableRefineOnMapMove?: boolean;
    /**
     * Function to transform the items passed to the templates.
     * @default items => items
     */
    transformItems?: TransformItems<GeoHit<THit>>;
};
export type GeoSearchWidgetDescription<THit extends GeoHit = GeoHit> = {
    $$type: 'ais.geoSearch';
    renderState: GeoSearchRenderState<THit>;
    indexRenderState: {
        geoSearch: WidgetRenderState<GeoSearchRenderState<THit>, GeoSearchConnectorParams<THit>>;
    };
    indexUiState: {
        geoSearch: {
            /**
             * The rectangular area in geo coordinates.
             * The rectangle is defined by two diagonally opposite points,
             * hence by 4 floats separated by commas.
             *
             * @example '47.3165,4.9665,47.3424,5.0201'
             */
            boundingBox: string;
        };
    };
};
export type GeoSearchConnector<THit extends GeoHit = GeoHit> = Connector<GeoSearchWidgetDescription<THit>, GeoSearchConnectorParams<THit>>;
/**
 * The **GeoSearch** connector provides the logic to build a widget that will display the results on a map. It also provides a way to search for results based on their position. The connector provides functions to manage the search experience (search on map interaction or control the interaction for example).
 *
 * @requirements
 *
 * Note that the GeoSearch connector uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be passed to the rendering function.
 *
 * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
 */
declare const _default: <TWidgetParams extends UnknownWidgetParams>(renderFn: Renderer<GeoSearchRenderState, TWidgetParams & GeoSearchConnectorParams>, unmountFn?: Unmounter) => <THit extends GeoHit = GeoHit>(widgetParams: TWidgetParams & GeoSearchConnectorParams<THit>) => {
    $$type: "ais.geoSearch";
    init(initArgs: InitOptions): void;
    render(renderArgs: RenderOptions): void;
    getWidgetRenderState(renderOptions: InitOptions | RenderOptions): {
        items: GeoHit<THit>[];
        position: {
            lat: number;
            lng: number;
        } | undefined;
        currentRefinement: {
            northEast: {
                lat: number;
                lng: number;
            };
            southWest: {
                lat: number;
                lng: number;
            };
        } | undefined;
        refine: ({ northEast: ne, southWest: sw }: Bounds) => void;
        sendEvent: SendEventForHits;
        clearMapRefinement: () => void;
        isRefinedWithMap: () => boolean;
        toggleRefineOnMapMove: () => void;
        isRefineOnMapMove: () => boolean;
        setMapMoveSinceLastRefine: () => void;
        hasMapMoveSinceLastRefine: () => boolean;
        widgetParams: TWidgetParams & GeoSearchConnectorParams<THit>;
    };
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
        geoSearch?: WidgetRenderState<GeoSearchRenderState<GeoHit>, GeoSearchConnectorParams<GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: WidgetRenderState<import("../hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("../hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: WidgetRenderState<import("../hits/connectHits").HitsRenderState<BaseHit>, import("../hits/connectHits").HitsConnectorParams<BaseHit>> | undefined;
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
    }, renderOptions: InitOptions | RenderOptions): IndexRenderState & GeoSearchWidgetDescription["indexRenderState"];
    dispose({ state }: import("../../types").DisposeOptions): SearchParameters;
    getWidgetUiState(uiState: {
        geoSearch?: {
            /**
             * The rectangular area in geo coordinates.
             * The rectangle is defined by two diagonally opposite points,
             * hence by 4 floats separated by commas.
             *
             * @example '47.3165,4.9665,47.3424,5.0201'
             */
            boundingBox: string;
        } | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
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
    }, { searchParameters }: {
        searchParameters: SearchParameters;
        helper: AlgoliaSearchHelper;
    }): {
        geoSearch?: {
            /**
             * The rectangular area in geo coordinates.
             * The rectangle is defined by two diagonally opposite points,
             * hence by 4 floats separated by commas.
             *
             * @example '47.3165,4.9665,47.3424,5.0201'
             */
            boundingBox: string;
        } | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
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
    getWidgetSearchParameters(searchParameters: SearchParameters, { uiState }: {
        uiState: {
            geoSearch?: {
                /**
                 * The rectangular area in geo coordinates.
                 * The rectangle is defined by two diagonally opposite points,
                 * hence by 4 floats separated by commas.
                 *
                 * @example '47.3165,4.9665,47.3424,5.0201'
                 */
                boundingBox: string;
            } | undefined;
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
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
    }): SearchParameters;
};
export default _default;
