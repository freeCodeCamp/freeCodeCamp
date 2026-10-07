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
var _define_property = require("@swc/helpers/_/_define_property");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _algoliasearchhelper = /*#__PURE__*/ _interop_require_default._(require("algoliasearch-helper"));
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'configure',
    connector: true
});
function getInitialSearchParameters(state, widgetParams) {
    // We leverage the helper internals to remove the `widgetParams` from
    // the state. The function `setQueryParameters` omits the values that
    // are `undefined` on the next state.
    return state.setQueryParameters(Object.keys(widgetParams.searchParameters).reduce(function(acc, key) {
        return _object_spread_props._(_object_spread._({}, acc), _define_property._({}, key, undefined));
    }, {}));
}
var connectConfigure = function connectConfigure() {
    var renderFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _utils.noop, unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    return function(widgetParams) {
        if (!widgetParams || !(0, _utils.isPlainObject)(widgetParams.searchParameters)) {
            throw new Error(withUsage('The `searchParameters` option expects an object.'));
        }
        var connectorState = {};
        function refine(helper) {
            return function(searchParameters) {
                // Merge new `searchParameters` with the ones set from other widgets
                var actualState = getInitialSearchParameters(helper.state, widgetParams);
                var nextSearchParameters = (0, _utils.mergeSearchParameters)(actualState, new _algoliasearchhelper.default.SearchParameters(searchParameters));
                // Update original `widgetParams.searchParameters` to the new refined one
                widgetParams.searchParameters = searchParameters;
                // Trigger a search with the resolved search parameters
                helper.setState(nextSearchParameters).search();
            };
        }
        return {
            $$type: 'ais.configure',
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
                return getInitialSearchParameters(state, widgetParams);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                var _renderState_configure;
                var widgetRenderState = this.getWidgetRenderState(renderOptions);
                return _object_spread_props._(_object_spread._({}, renderState), {
                    configure: _object_spread_props._(_object_spread._({}, widgetRenderState), {
                        widgetParams: _object_spread_props._(_object_spread._({}, widgetRenderState.widgetParams), {
                            searchParameters: (0, _utils.mergeSearchParameters)(new _algoliasearchhelper.default.SearchParameters((_renderState_configure = renderState.configure) === null || _renderState_configure === void 0 ? void 0 : _renderState_configure.widgetParams.searchParameters), new _algoliasearchhelper.default.SearchParameters(widgetRenderState.widgetParams.searchParameters)).getQueryParams()
                        })
                    })
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var helper = param.helper;
                if (!connectorState.refine) {
                    connectorState.refine = refine(helper);
                }
                return {
                    refine: connectorState.refine,
                    widgetParams: widgetParams
                };
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state, param) {
                var uiState = param.uiState;
                return (0, _utils.mergeSearchParameters)(state, new _algoliasearchhelper.default.SearchParameters(_object_spread._({}, uiState.configure, widgetParams.searchParameters)));
            },
            getWidgetUiState: function getWidgetUiState(uiState) {
                return _object_spread_props._(_object_spread._({}, uiState), {
                    configure: _object_spread._({}, uiState.configure, widgetParams.searchParameters)
                });
            }
        };
    };
};
var _default = connectConfigure;
