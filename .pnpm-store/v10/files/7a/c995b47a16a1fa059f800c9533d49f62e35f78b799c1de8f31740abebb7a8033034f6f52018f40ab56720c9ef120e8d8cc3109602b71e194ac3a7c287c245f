'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return singleIndexStateMapping;
    }
});
var _define_property = require("@swc/helpers/_/_define_property");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
function getIndexStateWithoutConfigure(uiState) {
    uiState.configure; var trackedUiState = _object_without_properties._(uiState, [
        "configure"
    ]);
    return trackedUiState;
}
function singleIndexStateMapping(indexName) {
    return {
        $$type: 'ais.singleIndex',
        stateToRoute: function stateToRoute(uiState) {
            return getIndexStateWithoutConfigure(uiState[indexName] || {});
        },
        routeToState: function routeToState() {
            var routeState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _define_property._({}, indexName, getIndexStateWithoutConfigure(routeState));
        }
    };
}
