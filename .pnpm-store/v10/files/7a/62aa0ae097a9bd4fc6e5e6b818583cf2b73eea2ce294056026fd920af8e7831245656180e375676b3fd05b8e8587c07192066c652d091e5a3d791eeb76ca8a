import type { GeoSearchConnectorParams, GeoSearchWidgetDescription, GeoHit } from '../../connectors/geo-search/connectGeoSearch';
import type { GeoLoc, Template, WidgetFactory } from '../../types';
import type { HTMLMarkerArguments } from './createHTMLMarker';
export type CreateMarker = (args: {
    item: GeoHit;
    map: google.maps.Map;
}) => google.maps.OverlayView | google.maps.Marker;
export type GeoSearchTemplates<THit extends GeoHit = GeoHit> = Partial<{
    /** Template to use for the marker. */
    HTMLMarker: Template<THit>;
    /** Template for the reset button. */
    reset: Template;
    /** Template for the toggle label. */
    toggle: Template;
    /** Template for the redo button. */
    redo: Template;
}>;
export type GeoSearchComponentTemplates = Required<GeoSearchTemplates>;
export type GeoSearchCSSClasses = Partial<{
    /** The root div of the widget. */
    root: string | string[];
    /** The map container of the widget. */
    map: string | string[];
    /** The control element of the widget. */
    control: string | string[];
    /** The label of the control element. */
    label: string | string[];
    /** The selected label of the control element. */
    selectedLabel: string | string[];
    /** The input of the control element. */
    input: string | string[];
    /** The redo search button. */
    redo: string | string[];
    /** The disabled redo search button. */
    disabledRedo: string | string[];
    /** The reset refinement button. */
    reset: string | string[];
}>;
export type GeoSearchMarker<TOptions, THit extends GeoHit = GeoHit> = {
    /**
     * Function used to create the options passed to the Google Maps marker.
     * See the documentation for more information:
     * https://developers.google.com/maps/documentation/javascript/reference/3/#MarkerOptions
     */
    createOptions?: (item: THit) => TOptions;
    /**
     * Object that takes an event type (ex: `click`, `mouseover`) as key and a
     * listener as value. The listener is provided with an object that contains:
     * `event`, `item`, `marker`, `map`.
     */
    events: {
        [key: string]: (event: {
            item: any;
            marker: any;
            map: any;
            event: any;
        }) => void;
    };
};
export type GeoSearchWidgetParams<THit extends GeoHit = GeoHit> = {
    /**
     * By default the map will set the zoom accordingly to the markers displayed on it.
     * When we refine it may happen that the results are empty. For those situations we
     * need to provide a zoom to render the map.
     * @default 1
     */
    initialZoom?: number;
    /**
     * By default the map will set the position accordingly to the markers displayed on it.
     * When we refine it may happen that the results are empty. For those situations we need
     * to provide a position to render the map. This option is ignored when the `position`
     * is provided.
     * @default { lat: 0, lng: 0 }
     */
    initialPosition?: GeoLoc;
    /** Templates to use for the widget. */
    templates?: GeoSearchTemplates<THit>;
    /** CSS classes to add to the wrapping elements. */
    cssClasses?: GeoSearchCSSClasses;
    /**
     * Options for customize the built-in Google Maps marker. This option is
     * ignored when the `customHTMLMarker` is provided.
     */
    builtInMarker?: Partial<GeoSearchMarker<google.maps.MarkerOptions>>;
    /**
     * Options to customize the HTML marker. We provide an alternative to the
     * built-in Google Maps marker in order to have a full control of the marker
     * rendering. You can use plain HTML to build your marker.
     */
    customHTMLMarker?: Partial<GeoSearchMarker<Partial<HTMLMarkerArguments>>> | boolean;
    /**
     * If true, the map is used to search - otherwise it's for display purposes only.
     * @default true
     */
    enableRefine?: boolean;
    /**
     * If true, a button is displayed on the map when the refinement is coming from
     * the map in order to remove it.
     * @default true
     */
    enableClearMapRefinement?: boolean;
    /**
     * If true, the user can toggle the option `enableRefineOnMapMove` directly from the map.
     * @default true
     */
    enableRefineControl?: boolean;
    /**
     * Option forwarded to the Google Maps constructor.
     * See the documentation for more information:
     * https://developers.google.com/maps/documentation/javascript/reference/3/#MapOptions
     */
    mapOptions?: google.maps.MapOptions;
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Reference to the global `window.google` object.
     * See [the documentation](https://developers.google.com/maps/documentation/javascript/tutorial) for more information.
     */
    googleReference: typeof window['google'];
};
export type GeoSearchWidget = WidgetFactory<GeoSearchWidgetDescription & {
    $$widgetType: 'ais.geoSearch';
}, GeoSearchConnectorParams, GeoSearchWidgetParams>;
/**
 * The **GeoSearch** widget displays the list of results from the search on a Google Maps. It also provides a way to search for results based on their position. The widget also provide some of the common GeoSearch patterns like search on map interaction.
 *
 * @requirements
 *
 * Note that the GeoSearch widget uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be displayed on the map.
 *
 * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
 *
 * You are also responsible for loading the Google Maps library, it's not shipped with InstantSearch. You need to load the Google Maps library and pass a reference to the widget. You can find more information about how to install the library in [the Google Maps documentation](https://developers.google.com/maps/documentation/javascript/tutorial).
 *
 * Don't forget to explicitly set the `height` of the map container (default class `.ais-geo-search--map`), otherwise it won't be shown (it's a requirement of Google Maps).
 */
declare const _default: <THit extends GeoHit = GeoHit>(widgetParams: GeoSearchWidgetParams<THit> & GeoSearchConnectorParams<THit>) => {
    $$widgetType: "ais.geoSearch";
    $$type: "ais.geoSearch";
    init(initArgs: import("../../types").InitOptions): void;
    render(renderArgs: import("../../types").RenderOptions): void;
    getWidgetRenderState(renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions): {
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
        refine: ({ northEast: ne, southWest: sw }: {
            northEast: GeoLoc;
            southWest: GeoLoc;
        }) => void;
        sendEvent: import("../../lib/utils").SendEventForHits;
        clearMapRefinement: () => void;
        isRefinedWithMap: () => boolean;
        toggleRefineOnMapMove: () => void;
        isRefineOnMapMove: () => boolean;
        setMapMoveSinceLastRefine: () => void;
        hasMapMoveSinceLastRefine: () => boolean;
        widgetParams: {
            renderState: {
                templateProps?: import("../../lib/templating").PreparedTemplateProps<GeoSearchTemplates>;
                isUserInteraction?: boolean;
                isPendingRefine?: boolean;
                markers?: any[];
            };
            container: HTMLElement;
            googleReference: GeoSearchWidgetParams["googleReference"];
            initialZoom: GeoSearchWidgetParams["initialZoom"];
            initialPosition: GeoSearchWidgetParams["initialPosition"];
            templates: Partial<{
                /** Template to use for the marker. */
                HTMLMarker: Template<GeoHit>;
                /** Template for the reset button. */
                reset: Template;
                /** Template for the toggle label. */
                toggle: Template;
                /** Template for the redo button. */
                redo: Template;
            }>;
            cssClasses: import("../../types").ComponentCSSClasses<Partial<{
                /** The root div of the widget. */
                root: string | string[];
                /** The map container of the widget. */
                map: string | string[];
                /** The control element of the widget. */
                control: string | string[];
                /** The label of the control element. */
                label: string | string[];
                /** The selected label of the control element. */
                selectedLabel: string | string[];
                /** The input of the control element. */
                input: string | string[];
                /** The redo search button. */
                redo: string | string[];
                /** The disabled redo search button. */
                disabledRedo: string | string[];
                /** The reset refinement button. */
                reset: string | string[];
            }> | undefined>;
            createMarker: CreateMarker;
            markerOptions: GeoSearchMarker<google.maps.MarkerOptions | Partial<HTMLMarkerArguments>>;
            enableRefine: GeoSearchWidgetParams["enableRefine"];
            enableClearMapRefinement: GeoSearchWidgetParams["enableClearMapRefinement"];
            enableRefineControl: GeoSearchWidgetParams["enableRefineControl"];
        } & GeoSearchConnectorParams<THit>;
    };
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
        geoSearch?: import("../../types").WidgetRenderState<import("../../connectors/geo-search/connectGeoSearch").GeoSearchRenderState<GeoHit>, GeoSearchConnectorParams<GeoHit>> | undefined;
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
    }, renderOptions: import("../../types").InitOptions | import("../../types").RenderOptions): import("../../types").IndexRenderState & GeoSearchWidgetDescription["indexRenderState"];
    dispose({ state }: import("../../types").DisposeOptions): import("algoliasearch-helper").SearchParameters;
    getWidgetUiState(uiState: {
        geoSearch?: {
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
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }): {
        geoSearch?: {
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
    getWidgetSearchParameters(searchParameters: import("algoliasearch-helper").SearchParameters, { uiState }: {
        uiState: {
            geoSearch?: {
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
    }): import("algoliasearch-helper").SearchParameters;
};
export default _default;
