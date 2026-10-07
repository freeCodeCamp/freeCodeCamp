'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // technically a URL could contain any key, since users provide it,
// which is why the input to this function is UiState, not something
// which excludes "configure" as this function does.
"default", {
    enumerable: true,
    get: function() {
        return simpleStateMapping;
    }
});
var _define_property = require("@swc/helpers/_/_define_property");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
function getIndexStateWithoutConfigure(uiState) {
    uiState.configure; var trackedUiState = _object_without_properties._(uiState, [
        "configure"
    ]);
    return trackedUiState;
}
function simpleStateMapping() {
    return {
        $$type: 'ais.simple',
        stateToRoute: function stateToRoute(uiState) {
            return Object.keys(uiState).reduce(function(state, indexId) {
                return _object_spread_props._(_object_spread._({}, state), _define_property._({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
            }, {});
        },
        routeToState: function routeToState() {
            var routeState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return Object.keys(routeState).reduce(function(state, indexId) {
                return _object_spread_props._(_object_spread._({}, state), _define_property._({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
            }, {});
        }
    };
}
