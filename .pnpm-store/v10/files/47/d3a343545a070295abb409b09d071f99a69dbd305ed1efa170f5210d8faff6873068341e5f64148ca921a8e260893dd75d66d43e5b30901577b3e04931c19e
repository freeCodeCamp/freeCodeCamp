import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import historyRouter from '../lib/routers/history.js';
import simpleStateMapping from '../lib/stateMappings/simple.js';
import { isEqual } from '../lib/utils/isEqual.js';

var createRouterMiddleware = function createRouterMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _props_router = props.router, router = _props_router === void 0 ? historyRouter() : _props_router, _props_stateMapping = props.// We have to cast simpleStateMapping as a StateMapping<TUiState, TRouteState>.
    // this is needed because simpleStateMapping is StateMapping<TUiState, TUiState>.
    // While it's only used when UiState and RouteState are the same, unfortunately
    // TypeScript still considers them separate types.
    stateMapping, stateMapping = _props_stateMapping === void 0 ? simpleStateMapping() : _props_stateMapping, _props_$$internal = props.$$internal, $$internal = _props_$$internal === void 0 ? false : _props_$$internal;
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
                return _$1(_({}, acc), _$2({}, indexId, nextState[indexId]));
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
                if (lastRouteState === undefined || !isEqual(lastRouteState, routeState)) {
                    router.write(routeState);
                    lastRouteState = routeState;
                }
            },
            subscribe: function subscribe() {
                instantSearchInstance._initialUiState = _({}, initialUiState, stateMapping.routeToState(router.read()));
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

export { createRouterMiddleware };
