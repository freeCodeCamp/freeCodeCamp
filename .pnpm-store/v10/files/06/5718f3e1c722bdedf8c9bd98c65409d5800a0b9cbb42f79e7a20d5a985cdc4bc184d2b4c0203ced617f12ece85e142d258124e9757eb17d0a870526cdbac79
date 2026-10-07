'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * The **GeoSearch** connector provides the logic to build a widget that will display the results on a map. It also provides a way to search for results based on their position. The connector provides functions to manage the search experience (search on map interaction or control the interaction for example).
 *
 * @requirements
 *
 * Note that the GeoSearch connector uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be passed to the rendering function.
 *
 * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
 */ "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'geo-search',
    connector: true
});
// in this connector, we assume insideBoundingBox is only a string,
// even though in the helper it's defined as number[][] alone.
// This can be done, since the connector assumes "control" of the parameter
function getBoundingBoxAsString(state) {
    return state.insideBoundingBox || '';
}
function setBoundingBoxAsString(state, value) {
    return state.setQueryParameter('insideBoundingBox', value);
}
var $$type = 'ais.geoSearch';
var _default = function connectGeoSearch(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_enableRefineOnMapMove = _ref.enableRefineOnMapMove, enableRefineOnMapMove = _ref_enableRefineOnMapMove === void 0 ? true : _ref_enableRefineOnMapMove, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        var widgetState = {
            isRefineOnMapMove: enableRefineOnMapMove,
            // @MAJOR hasMapMoveSinceLastRefine -> hasMapMovedSinceLastRefine
            hasMapMoveSinceLastRefine: false,
            lastRefinePosition: '',
            lastRefineBoundingBox: '',
            internalToggleRefineOnMapMove: _utils.noop,
            internalSetMapMoveSinceLastRefine: _utils.noop
        };
        var getPositionFromState = function getPositionFromState(state) {
            return state.aroundLatLng ? (0, _utils.aroundLatLngToPosition)(state.aroundLatLng) : undefined;
        };
        var getCurrentRefinementFromState = function getCurrentRefinementFromState(state) {
            return state.insideBoundingBox && (0, _utils.insideBoundingBoxToBoundingBox)(state.insideBoundingBox);
        };
        var refine = function refine(helper) {
            return function(param) {
                var ne = param.northEast, sw = param.southWest;
                var boundingBox = [
                    ne.lat,
                    ne.lng,
                    sw.lat,
                    sw.lng
                ].join();
                helper.setState(setBoundingBoxAsString(helper.state, boundingBox).resetPage()).search();
                widgetState.hasMapMoveSinceLastRefine = false;
                widgetState.lastRefineBoundingBox = boundingBox;
            };
        };
        var clearMapRefinement = function clearMapRefinement(helper) {
            return function() {
                helper.setQueryParameter('insideBoundingBox', undefined).search();
            };
        };
        var isRefinedWithMap = function isRefinedWithMap(state) {
            return function() {
                return Boolean(state.insideBoundingBox);
            };
        };
        var toggleRefineOnMapMove = function toggleRefineOnMapMove() {
            return widgetState.internalToggleRefineOnMapMove();
        };
        var createInternalToggleRefinementOnMapMove = function createInternalToggleRefinementOnMapMove(renderOptions, // false positive eslint because of generics
        // eslint-disable-next-line no-shadow
        render) {
            return function() {
                widgetState.isRefineOnMapMove = !widgetState.isRefineOnMapMove;
                render(renderOptions);
            };
        };
        var isRefineOnMapMove = function isRefineOnMapMove() {
            return widgetState.isRefineOnMapMove;
        };
        var setMapMoveSinceLastRefine = function setMapMoveSinceLastRefine() {
            return widgetState.internalSetMapMoveSinceLastRefine();
        };
        var createInternalSetMapMoveSinceLastRefine = function createInternalSetMapMoveSinceLastRefine(renderOptions, // false positive eslint because of generics
        // eslint-disable-next-line no-shadow
        render) {
            return function() {
                var shouldTriggerRender = widgetState.hasMapMoveSinceLastRefine !== true;
                widgetState.hasMapMoveSinceLastRefine = true;
                if (shouldTriggerRender) {
                    render(renderOptions);
                }
            };
        };
        var hasMapMoveSinceLastRefine = function hasMapMoveSinceLastRefine() {
            return widgetState.hasMapMoveSinceLastRefine;
        };
        var sendEvent;
        return {
            $$type: $$type,
            init: function init(initArgs) {
                var instantSearchInstance = initArgs.instantSearchInstance;
                var isFirstRendering = true;
                widgetState.internalToggleRefineOnMapMove = createInternalToggleRefinementOnMapMove(initArgs, _utils.noop);
                widgetState.internalSetMapMoveSinceLastRefine = createInternalSetMapMoveSinceLastRefine(initArgs, _utils.noop);
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initArgs)), {
                    instantSearchInstance: instantSearchInstance
                }), isFirstRendering);
            },
            render: function render(renderArgs) {
                var helper = renderArgs.helper, instantSearchInstance = renderArgs.instantSearchInstance;
                var isFirstRendering = false;
                // We don't use the state provided by the render function because we need
                // to be sure that the state is the latest one for the following condition
                var state = helper.state;
                var positionChangedSinceLastRefine = Boolean(state.aroundLatLng) && Boolean(widgetState.lastRefinePosition) && state.aroundLatLng !== widgetState.lastRefinePosition;
                var boundingBoxChangedSinceLastRefine = !state.insideBoundingBox && Boolean(widgetState.lastRefineBoundingBox) && state.insideBoundingBox !== widgetState.lastRefineBoundingBox;
                if (positionChangedSinceLastRefine || boundingBoxChangedSinceLastRefine) {
                    widgetState.hasMapMoveSinceLastRefine = false;
                }
                widgetState.lastRefinePosition = state.aroundLatLng || '';
                widgetState.lastRefineBoundingBox = getBoundingBoxAsString(state);
                widgetState.internalToggleRefineOnMapMove = createInternalToggleRefinementOnMapMove(renderArgs, this.render.bind(this));
                widgetState.internalSetMapMoveSinceLastRefine = createInternalSetMapMoveSinceLastRefine(renderArgs, this.render.bind(this));
                var widgetRenderState = this.getWidgetRenderState(renderArgs);
                sendEvent('view:internal', widgetRenderState.items);
                renderFn(_object_spread_props._(_object_spread._({}, widgetRenderState), {
                    instantSearchInstance: instantSearchInstance
                }), isFirstRendering);
            },
            getWidgetRenderState: function getWidgetRenderState(renderOptions) {
                var helper = renderOptions.helper, results = renderOptions.results, instantSearchInstance = renderOptions.instantSearchInstance;
                var state = helper.state;
                var items = results ? transformItems(results.hits.filter(function(hit) {
                    return hit._geoloc;
                }), {
                    results: results
                }) : [];
                if (!sendEvent) {
                    sendEvent = (0, _utils.createSendEventForHits)({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        widgetType: $$type
                    });
                }
                return {
                    items: items,
                    position: getPositionFromState(state),
                    currentRefinement: getCurrentRefinementFromState(state),
                    refine: refine(helper),
                    sendEvent: sendEvent,
                    clearMapRefinement: clearMapRefinement(helper),
                    isRefinedWithMap: isRefinedWithMap(state),
                    toggleRefineOnMapMove: toggleRefineOnMapMove,
                    isRefineOnMapMove: isRefineOnMapMove,
                    setMapMoveSinceLastRefine: setMapMoveSinceLastRefine,
                    hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine,
                    widgetParams: widgetParams
                };
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    geoSearch: this.getWidgetRenderState(renderOptions)
                });
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.setQueryParameter('insideBoundingBox', undefined);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var boundingBox = getBoundingBoxAsString(searchParameters);
                if (!boundingBox || uiState && uiState.geoSearch && uiState.geoSearch.boundingBox === boundingBox) {
                    return uiState;
                }
                return _object_spread_props._(_object_spread._({}, uiState), {
                    geoSearch: {
                        boundingBox: boundingBox
                    }
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                if (!uiState || !uiState.geoSearch) {
                    return searchParameters.setQueryParameter('insideBoundingBox', undefined);
                }
                return setBoundingBoxAsString(searchParameters, uiState.geoSearch.boundingBox);
            }
        };
    };
};
