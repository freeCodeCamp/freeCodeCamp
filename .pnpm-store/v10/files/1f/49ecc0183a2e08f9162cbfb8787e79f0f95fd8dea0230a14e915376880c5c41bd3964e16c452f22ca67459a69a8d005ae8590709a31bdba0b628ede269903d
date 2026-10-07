import { _ } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_without_properties.js';

function getIndexStateWithoutConfigure(uiState) {
    uiState.configure; var trackedUiState = _$1(uiState, [
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
            return _({}, indexName, getIndexStateWithoutConfigure(routeState));
        }
    };
}

export { singleIndexStateMapping as default };
