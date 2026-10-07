'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useConnector", {
    enumerable: true,
    get: function() {
        return useConnector;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _to_array = require("@swc/helpers/_/_to_array");
var _react = require("react");
var _dequal = require("../lib/dequal");
var _getIndexSearchResults = require("../lib/getIndexSearchResults");
var _useIndexContext = require("../lib/useIndexContext");
var _useInstantSearchContext = require("../lib/useInstantSearchContext");
var _useInstantSearchServerContext = require("../lib/useInstantSearchServerContext");
var _useInstantSearchSSRContext = require("../lib/useInstantSearchSSRContext");
var _useStableValue = require("../lib/useStableValue");
var _useWidget = require("../lib/useWidget");
function useConnector(connector) {
    var _1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, _2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    var _ref = [
        _1,
        _2
    ], _ref1 = _to_array._(_ref), tmp = _ref1[0], props = tmp === void 0 ? {} : tmp, _rest = _ref1.slice(1), _rest1 = _sliced_to_array._(_rest, 1), tmp1 = _rest1[0], _ref2 = tmp1 === void 0 ? {} : tmp1, _ref_skipSuspense = _ref2.skipSuspense, skipSuspense = _ref_skipSuspense === void 0 ? false : _ref_skipSuspense, additionalWidgetProperties = _object_without_properties._(_ref2, [
        "skipSuspense"
    ]);
    var serverContext = (0, _useInstantSearchServerContext.useInstantSearchServerContext)();
    var ssrContext = (0, _useInstantSearchSSRContext.useInstantSearchSSRContext)();
    var search = (0, _useInstantSearchContext.useInstantSearchContext)();
    var parentIndex = (0, _useIndexContext.useIndexContext)();
    var stableProps = (0, _useStableValue.useStableValue)(props);
    var stableAdditionalWidgetProperties = (0, _useStableValue.useStableValue)(additionalWidgetProperties);
    var shouldSetStateRef = (0, _react.useRef)(true);
    var previousRenderStateRef = (0, _react.useRef)(null);
    var previousStatusRef = (0, _react.useRef)(search.status);
    var widget = (0, _react.useMemo)(function() {
        var createWidget = connector(function(connectorState, isFirstRender) {
            // We skip the `init` widget render because:
            // - We rely on `getWidgetRenderState` to compute the initial state before
            //   the InstantSearch.js lifecycle starts.
            // - It prevents UI flashes when updating the widget props.
            if (isFirstRender) {
                shouldSetStateRef.current = true;
                return;
            }
            // There are situations where InstantSearch.js may render widgets slightly
            // after they're removed by React, and thus try to update the React state
            // on unmounted components. React 16 and 17 consider them as memory leaks
            // and display a warning.
            // This happens in <DynamicWidgets> when `attributesToRender` contains a
            // value without an attribute previously mounted. React will unmount the
            // component controlled by that attribute, but InstantSearch.js will stay
            // unaware of this change until the render pass finishes, and therefore
            // notifies of a state change.
            // This ref lets us track this situation and ignore these state updates.
            if (shouldSetStateRef.current) {
                var instantSearchInstance = connectorState.instantSearchInstance; connectorState.widgetParams; var renderState = _object_without_properties._(connectorState, [
                    "instantSearchInstance",
                    "widgetParams"
                ]);
                // We only update the state when a widget render state param changes,
                // except for functions. We ignore function reference changes to avoid
                // infinite loops. It's safe to omit them because they get updated
                // every time another render param changes.
                if (!(0, _dequal.dequal)(renderState, previousRenderStateRef.current, function(a, b) {
                    return (a === null || a === void 0 ? void 0 : a.constructor) === Function && (b === null || b === void 0 ? void 0 : b.constructor) === Function;
                }) || instantSearchInstance.status !== previousStatusRef.current) {
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    setState(renderState);
                    previousRenderStateRef.current = renderState;
                    previousStatusRef.current = instantSearchInstance.status;
                }
            }
        }, function() {
            // We'll ignore the next state update until we know for sure that
            // InstantSearch.js re-inits the component.
            shouldSetStateRef.current = false;
        });
        return _object_spread._({}, createWidget(stableProps), stableAdditionalWidgetProperties);
    }, [
        connector,
        stableProps,
        stableAdditionalWidgetProperties
    ]);
    var _useState = _sliced_to_array._((0, _react.useState)(function() {
        if (widget.getWidgetRenderState) {
            var _widget_getWidgetSearchParameters;
            // The helper exists because we've started InstantSearch.
            var helper = parentIndex.getHelper();
            var uiState = parentIndex.getWidgetUiState({})[parentIndex.getIndexId()];
            helper.state = ((_widget_getWidgetSearchParameters = widget.getWidgetSearchParameters) === null || _widget_getWidgetSearchParameters === void 0 ? void 0 : _widget_getWidgetSearchParameters.call(widget, helper.state, {
                uiState: uiState
            })) || helper.state;
            var _getIndexSearchResults1 = (0, _getIndexSearchResults.getIndexSearchResults)(parentIndex), results = _getIndexSearchResults1.results, scopedResults = _getIndexSearchResults1.scopedResults, recommendResults = _getIndexSearchResults1.recommendResults;
            // We get the widget render state by providing the same parameters as
            // InstantSearch provides to the widget's `render` method.
            // See https://github.com/algolia/instantsearch/blob/019cd18d0de6dd320284aa4890541b7fe2198c65/src/widgets/index/index.ts#L604-L617
            var _widget_getWidgetRenderState = widget.getWidgetRenderState({
                helper: helper,
                parent: parentIndex,
                instantSearchInstance: search,
                results: widget.dependsOn === 'recommend' && recommendResults && ssrContext ? recommendResults[ssrContext.recommendIdx.current++] : results,
                scopedResults: scopedResults,
                state: helper.state,
                renderState: search.renderState,
                templatesConfig: search.templatesConfig,
                createURL: parentIndex.createURL,
                searchMetadata: {
                    isSearchStalled: search.status === 'stalled'
                },
                status: search.status,
                error: search.error
            }); _widget_getWidgetRenderState.widgetParams; var renderState = _object_without_properties._(_widget_getWidgetRenderState, [
                "widgetParams"
            ]);
            return renderState;
        }
        return {};
    }), 2), state = _useState[0], setState = _useState[1];
    (0, _useWidget.useWidget)({
        widget: widget,
        parentIndex: parentIndex,
        props: stableProps,
        shouldSsr: Boolean(serverContext),
        skipSuspense: skipSuspense
    });
    return state;
}
