'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../../lib/utils");
var connectRelevantSort = function connectRelevantSort() {
    var renderFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _utils.noop, unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    return function(widgetParams) {
        var connectorState = {};
        return {
            $$type: 'ais.relevantSort',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.setQueryParameter('relevancyStrictness', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
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
                return _object_spread_props._(_object_spread._({}, uiState), {
                    relevantSort: searchParameters.relevancyStrictness || uiState.relevantSort
                });
            }
        };
    };
};
var _default = connectRelevantSort;
