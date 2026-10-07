import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$3 } from '@swc/helpers/esm/_object_without_properties.js';

function getIndexStateWithoutConfigure(uiState) {
    uiState.configure; var trackedUiState = _$3(uiState, [
        "configure"
    ]);
    return trackedUiState;
}
// technically a URL could contain any key, since users provide it,
// which is why the input to this function is UiState, not something
// which excludes "configure" as this function does.
function simpleStateMapping() {
    return {
        $$type: 'ais.simple',
        stateToRoute: function stateToRoute(uiState) {
            return Object.keys(uiState).reduce(function(state, indexId) {
                return _(_$1({}, state), _$2({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
            }, {});
        },
        routeToState: function routeToState() {
            var routeState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return Object.keys(routeState).reduce(function(state, indexId) {
                return _(_$1({}, state), _$2({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
            }, {});
        }
    };
}

export { simpleStateMapping as default };
