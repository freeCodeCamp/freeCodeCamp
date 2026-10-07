import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import algoliasearchHelper from 'algoliasearch-helper';
import { isPlainObject } from '../../lib/utils/isPlainObject.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { mergeSearchParameters } from '../../lib/utils/mergeSearchParameters.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'configure',
    connector: true
});
function getInitialSearchParameters(state, widgetParams) {
    // We leverage the helper internals to remove the `widgetParams` from
    // the state. The function `setQueryParameters` omits the values that
    // are `undefined` on the next state.
    return state.setQueryParameters(Object.keys(widgetParams.searchParameters).reduce(function(acc, key) {
        return _(_$1({}, acc), _$2({}, key, undefined));
    }, {}));
}
var connectConfigure = function connectConfigure() {
    var renderFn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : noop, unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    return function(widgetParams) {
        if (!widgetParams || !isPlainObject(widgetParams.searchParameters)) {
            throw new Error(withUsage('The `searchParameters` option expects an object.'));
        }
        var connectorState = {};
        function refine(helper) {
            return function(searchParameters) {
                // Merge new `searchParameters` with the ones set from other widgets
                var actualState = getInitialSearchParameters(helper.state, widgetParams);
                var nextSearchParameters = mergeSearchParameters(actualState, new algoliasearchHelper.SearchParameters(searchParameters));
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
                return getInitialSearchParameters(state, widgetParams);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                var _renderState_configure;
                var widgetRenderState = this.getWidgetRenderState(renderOptions);
                return _(_$1({}, renderState), {
                    configure: _(_$1({}, widgetRenderState), {
                        widgetParams: _(_$1({}, widgetRenderState.widgetParams), {
                            searchParameters: mergeSearchParameters(new algoliasearchHelper.SearchParameters((_renderState_configure = renderState.configure) === null || _renderState_configure === void 0 ? void 0 : _renderState_configure.widgetParams.searchParameters), new algoliasearchHelper.SearchParameters(widgetRenderState.widgetParams.searchParameters)).getQueryParams()
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
                return mergeSearchParameters(state, new algoliasearchHelper.SearchParameters(_$1({}, uiState.configure, widgetParams.searchParameters)));
            },
            getWidgetUiState: function getWidgetUiState(uiState) {
                return _(_$1({}, uiState), {
                    configure: _$1({}, uiState.configure, widgetParams.searchParameters)
                });
            }
        };
    };
};

export { connectConfigure as default };
