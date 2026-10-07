'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterMiddleware", {
    enumerable: true,
    get: function() {
        return createRouterMiddleware;
    }
});
var _define_property = require("@swc/helpers/_/_define_property");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _history = /*#__PURE__*/ _interop_require_default._(require("../lib/routers/history"));
var _simple = /*#__PURE__*/ _interop_require_default._(require("../lib/stateMappings/simple"));
var _utils = require("../lib/utils");
var createRouterMiddleware = function createRouterMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _props_router = props.router, router = _props_router === void 0 ? (0, _history.default)() : _props_router, _props_stateMapping = props.// We have to cast simpleStateMapping as a StateMapping<TUiState, TRouteState>.
    // this is needed because simpleStateMapping is StateMapping<TUiState, TUiState>.
    // While it's only used when UiState and RouteState are the same, unfortunately
    // TypeScript still considers them separate types.
    stateMapping, stateMapping = _props_stateMapping === void 0 ? (0, _simple.default)() : _props_stateMapping, _props_$$internal = props.$$internal, $$internal = _props_$$internal === void 0 ? false : _props_$$internal;
    return function(param) {
        var instantSearchInstance = param.instantSearchInstance;
        function topLevelCreateURL(nextState) {
            var previousUiState = // If only the mainIndex is initialized, we don't yet know what other
            // index widgets are used. Therefore we fall back to the initialUiState.
            // We can't indiscriminately use the initialUiState because then we
            // reintroduce state that was changed by the user.
            // When there are no widgets, we are sure the user can't yet have made
            // any changes.
            instantSearchInstance.mainIndex.getWidgets().length === 0 ? instantSearchInstance._initialUiState : instantSearchInstance.mainIndex.getWidgetUiState({});
            var uiState = Object.keys(nextState).reduce(function(acc, indexId) {
                return _object_spread_props._(_object_spread._({}, acc), _define_property._({}, indexId, nextState[indexId]));
            }, previousUiState);
            var route = stateMapping.stateToRoute(uiState);
            return router.createURL(route);
        }
        // casting to UiState here to keep createURL unaware of custom UiState
        // (as long as it's an object, it's ok)
        instantSearchInstance._createURL = topLevelCreateURL;
        var lastRouteState = undefined;
        var initialUiState = instantSearchInstance._initialUiState;
        return {
            $$type: "ais.router({router:".concat(router.$$type || '__unknown__', ", stateMapping:").concat(stateMapping.$$type || '__unknown__', "})"),
            $$internal: $$internal,
            onStateChange: function onStateChange(param) {
                var uiState = param.uiState;
                var routeState = stateMapping.stateToRoute(uiState);
                if (lastRouteState === undefined || !(0, _utils.isEqual)(lastRouteState, routeState)) {
                    router.write(routeState);
                    lastRouteState = routeState;
                }
            },
            subscribe: function subscribe() {
                (0, _utils.warning)(Object.keys(initialUiState).length === 0, 'Using `initialUiState` together with routing is not recommended. The `initialUiState` will be overwritten by the URL parameters.');
                instantSearchInstance._initialUiState = _object_spread._({}, initialUiState, stateMapping.routeToState(router.read()));
                router.onUpdate(function(route) {
                    if (instantSearchInstance.mainIndex.getWidgets().length > 0) {
                        instantSearchInstance.setUiState(stateMapping.routeToState(route));
                    }
                });
            },
            started: function started() {
                var _router_start;
                (_router_start = router.start) === null || _router_start === void 0 ? void 0 : _router_start.call(router);
            },
            unsubscribe: function unsubscribe() {
                router.dispose();
            }
        };
    };
};
