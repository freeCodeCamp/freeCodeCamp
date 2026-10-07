import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createSendEventForHits } from '../../lib/utils/createSendEventForHits.js';
import { escapeHits, TAG_PLACEHOLDER } from '../../lib/utils/escape-highlight.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { addQueryID } from '../../lib/utils/hits-query-id.js';
import { addAbsolutePosition } from '../../lib/utils/hits-absolute-position.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'autocomplete',
    connector: true
});
var connectAutocomplete = function connectAutocomplete(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(indices) {
            return indices;
        } : _ref_transformItems, tmp = _ref.future, _ref1 = tmp === void 0 ? {} : tmp, _ref_undefinedEmptyQuery = _ref1.undefinedEmptyQuery, undefinedEmptyQuery = _ref_undefinedEmptyQuery === void 0 ? false : _ref_undefinedEmptyQuery;
        var connectorState = {};
        return {
            $$type: 'ais.autocomplete',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                var renderState = this.getWidgetRenderState(renderOptions);
                renderState.indices.forEach(function(param) {
                    var sendEvent = param.sendEvent, hits = param.hits;
                    sendEvent('view:internal', hits);
                });
                renderFn(_(_$1({}, renderState), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    autocomplete: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var _this = this;
                var helper = param.helper, state = param.state, scopedResults = param.scopedResults, instantSearchInstance = param.instantSearchInstance;
                if (!connectorState.refine) {
                    connectorState.refine = function(query) {
                        helper.setQuery(query).search();
                    };
                }
                var sendEventMap = {};
                var indices = scopedResults.map(function(scopedResult) {
                    var _scopedResult_results;
                    // We need to escape the hits because highlighting
                    // exposes HTML tags to the end-user.
                    if (scopedResult.results) {
                        scopedResult.results.hits = escapeHTML ? escapeHits(scopedResult.results.hits) : scopedResult.results.hits;
                    }
                    sendEventMap[scopedResult.indexId] = createSendEventForHits({
                        instantSearchInstance: instantSearchInstance,
                        helper: scopedResult.helper,
                        widgetType: _this.$$type
                    });
                    var hits = scopedResult.results ? addQueryID(addAbsolutePosition(scopedResult.results.hits, scopedResult.results.page, scopedResult.results.hitsPerPage), scopedResult.results.queryID) : [];
                    return {
                        indexId: scopedResult.indexId,
                        indexName: ((_scopedResult_results = scopedResult.results) === null || _scopedResult_results === void 0 ? void 0 : _scopedResult_results.index) || '',
                        hits: hits,
                        results: scopedResult.results || {}
                    };
                });
                return {
                    currentRefinement: undefinedEmptyQuery ? state.query : state.query || '',
                    indices: transformItems(indices).map(function(transformedIndex) {
                        return _(_$1({}, transformedIndex), {
                            sendEvent: sendEventMap[transformedIndex.indexId]
                        });
                    }),
                    refine: connectorState.refine,
                    widgetParams: widgetParams
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var query = undefinedEmptyQuery ? searchParameters.query : searchParameters.query || '';
                if (!query || query === '' || uiState && uiState.query === query) {
                    return uiState;
                }
                return _(_$1({}, uiState), {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var parameters = {
                    query: undefinedEmptyQuery ? uiState.query : uiState.query || ''
                };
                if (!escapeHTML) {
                    return searchParameters.setQueryParameters(parameters);
                }
                return searchParameters.setQueryParameters(_$1({}, parameters, TAG_PLACEHOLDER));
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                var stateWithoutQuery = state.setQueryParameter('query', undefined);
                if (!escapeHTML) {
                    return stateWithoutQuery;
                }
                return stateWithoutQuery.setQueryParameters(Object.keys(TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _(_$1({}, acc), _$2({}, key, undefined));
                }, {}));
            }
        };
    };
};

export { connectAutocomplete as default };
