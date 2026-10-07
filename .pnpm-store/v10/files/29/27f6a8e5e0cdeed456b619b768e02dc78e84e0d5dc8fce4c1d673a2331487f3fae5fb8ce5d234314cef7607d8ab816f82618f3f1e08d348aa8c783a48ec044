
import type { HitsConnectorParams, HitsRenderState, HitsWidgetDescription } from '../../connectors/hits/connectHits';
import type { Template, TemplateWithBindEvent, Hit, WidgetFactory, BaseHit } from '../../types';
import type { SearchResults } from 'algoliasearch-helper';
import type { HitsClassNames as HitsUiComponentClassNames } from 'instantsearch-ui-components';
export type HitsCSSClasses = Partial<HitsUiComponentClassNames>;
export type HitsTemplates<THit extends NonNullable<object> = BaseHit> = Partial<{
    /**
     * Template to use when there are no results.
     *
     * @default 'No Results'
     */
    empty: Template<SearchResults<THit>>;
    /**
     * Template to use for each result. This template will receive an object containing a single record.
     *
     * @default ''
     */
    item: TemplateWithBindEvent<Hit<THit> & {
        /** @deprecated the index in the hits array, use __position instead, which is the absolute position */
        __hitIndex: number;
    }>;
    /**
     * Template to use for the banner.
     */
    banner: Template<{
        banner: Required<HitsRenderState['banner']>;
        className: string;
    }>;
}>;
export type HitsWidgetParams<THit extends NonNullable<object> = BaseHit> = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Templates to use for the widget.
     */
    templates?: HitsTemplates<THit>;
    /**
     * CSS classes to add.
     */
    cssClasses?: HitsCSSClasses;
};
export type HitsWidget = WidgetFactory<HitsWidgetDescription & {
    $$widgetType: 'ais.hits';
}, HitsConnectorParams, HitsWidgetParams>;
declare const _default: <THit extends NonNullable<object> = BaseHit>(widgetParams: HitsWidgetParams<THit> & HitsConnectorParams<THit>) => {
    $$widgetType: "ais.hits";
    $$type: "ais.hits";
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
        hits?: import("../../types").WidgetRenderState<HitsRenderState<BaseHit>, HitsConnectorParams<BaseHit>> | undefined;
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
    }, renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions): import("../../types").IndexRenderState & HitsWidgetDescription["indexRenderState"];
    getWidgetRenderState({ results, helper, instantSearchInstance }: import("../../types").InitOptions | import("../../types").RenderOptions): {
        hits: never[];
        items: never[];
        results: undefined;
        banner: undefined;
        sendEvent: import("../../lib/utils").SendEventForHits;
        bindEvent: import("../../lib/utils").BindEventForHits;
        widgetParams: Partial<HitsWidgetParams<BaseHit>> & HitsConnectorParams<THit>;
    } | {
        hits: Hit<BaseHit>[] | Hit<THit>[];
        items: Hit<BaseHit>[] | Hit<THit>[];
        results: SearchResults<any>;
        banner: import("algoliasearch-helper").Banner | undefined;
        sendEvent: import("../../lib/utils").SendEventForHits;
        bindEvent: import("../../lib/utils").BindEventForHits;
        widgetParams: Partial<HitsWidgetParams<BaseHit>> & HitsConnectorParams<THit>;
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
