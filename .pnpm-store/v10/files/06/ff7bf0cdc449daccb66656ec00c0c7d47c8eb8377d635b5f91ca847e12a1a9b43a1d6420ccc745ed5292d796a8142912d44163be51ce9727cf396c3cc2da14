import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { noop } from '../../lib/utils/noop.js';

var connectRelevantSort = function connectRelevantSort() {
    var renderFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : noop, unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    return function(widgetParams) {
        var connectorState = {};
        return {
            $$type: 'ais.relevantSort',
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
                return state.setQueryParameter('relevancyStrictness', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    relevantSort: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper;
                if (!connectorState.refine) {
                    connectorState.refine = function(relevancyStrictness) {
                        helper.setQueryParameter('relevancyStrictness', relevancyStrictness).search();
                    };
                }
                var appliedRelevancyStrictness = (results || {}).appliedRelevancyStrictness;
                var isVirtualReplica = appliedRelevancyStrictness !== undefined;
                return {
                    isRelevantSorted: typeof appliedRelevancyStrictness !== 'undefined' && appliedRelevancyStrictness > 0,
                    isVirtualReplica: isVirtualReplica,
                    canRefine: isVirtualReplica,
                    refine: connectorState.refine,
                    widgetParams: widgetParams
                };
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state, param) {
                var uiState = param.uiState;
                var _uiState_relevantSort;
                return state.setQueryParameter('relevancyStrictness', (_uiState_relevantSort = uiState.relevantSort) !== null && _uiState_relevantSort !== void 0 ? _uiState_relevantSort : state.relevancyStrictness);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                return _(_$1({}, uiState), {
                    relevantSort: searchParameters.relevancyStrictness || uiState.relevantSort
                });
            }
        };
    };
};

export { connectRelevantSort as default };
