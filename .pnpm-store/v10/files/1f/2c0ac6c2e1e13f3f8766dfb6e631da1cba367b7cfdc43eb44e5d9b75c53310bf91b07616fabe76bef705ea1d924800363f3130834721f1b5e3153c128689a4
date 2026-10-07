import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'search-box',
    connector: true
});
var defaultQueryHook = function defaultQueryHook(query, hook) {
    return hook(query);
};
/**
 * **SearchBox** connector provides the logic to build a widget that will let the user search for a query.
 *
 * The connector provides to the rendering: `refine()` to set the query. The behaviour of this function
 * may be impacted by the `queryHook` widget parameter.
 */ var connectSearchBox = function connectSearchBox(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_queryHook = _ref.queryHook, queryHook = _ref_queryHook === void 0 ? defaultQueryHook : _ref_queryHook;
        var _refine;
        var _clear;
        return {
            $$type: 'ais.searchBox',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.setQueryParameter('query', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    searchBox: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var helper = param.helper, instantSearchInstance = param.instantSearchInstance, state = param.state;
                if (!_refine) {
                    _refine = function _refine(query) {
                        queryHook(query, function(q) {
                            return helper.setQuery(q).search();
                        });
                    };
                    _clear = function _clear() {
                        helper.setQuery('').search();
                    };
                }
                return {
                    query: state.query || '',
                    refine: _refine,
                    clear: _clear,
                    widgetParams: widgetParams,
                    isSearchStalled: instantSearchInstance.status === 'stalled'
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var query = searchParameters.query || '';
                if (query === '' || uiState && uiState.query === query) {
                    return uiState;
                }
                return _(_$1({}, uiState), {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                return searchParameters.setQueryParameter('query', uiState.query || '');
            }
        };
    };
};

export { connectSearchBox as default };
