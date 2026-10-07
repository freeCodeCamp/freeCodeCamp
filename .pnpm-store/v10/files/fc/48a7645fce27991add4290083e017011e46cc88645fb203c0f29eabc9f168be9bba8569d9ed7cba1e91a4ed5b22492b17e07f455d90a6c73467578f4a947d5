import { _ as _$3 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_without_properties.js';
import { _ as _$1 } from '@swc/helpers/esm/_sliced_to_array.js';
import { _ } from '@swc/helpers/esm/_to_array.js';
import { useRef, useMemo, useState } from 'react';
import { dequal } from '../lib/dequal.js';
import { getIndexSearchResults } from '../lib/getIndexSearchResults.js';
import { useIndexContext } from '../lib/useIndexContext.js';
import { useInstantSearchContext } from '../lib/useInstantSearchContext.js';
import { useInstantSearchServerContext } from '../lib/useInstantSearchServerContext.js';
import { useInstantSearchSSRContext } from '../lib/useInstantSearchSSRContext.js';
import { useStableValue } from '../lib/useStableValue.js';
import { useWidget } from '../lib/useWidget.js';

function useConnector(connector) {
    var _1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, _2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    var _ref = [
        _1,
        _2
    ], _ref1 = _(_ref), tmp = _ref1[0], props = tmp === void 0 ? {} : tmp, _rest = _ref1.slice(1), _rest1 = _$1(_rest, 1), tmp1 = _rest1[0], _ref2 = tmp1 === void 0 ? {} : tmp1, _ref_skipSuspense = _ref2.skipSuspense, skipSuspense = _ref_skipSuspense === void 0 ? false : _ref_skipSuspense, additionalWidgetProperties = _$2(_ref2, [
        "skipSuspense"
    ]);
    var serverContext = useInstantSearchServerContext();
    var ssrContext = useInstantSearchSSRContext();
    var search = useInstantSearchContext();
    var parentIndex = useIndexContext();
    var stableProps = useStableValue(props);
    var stableAdditionalWidgetProperties = useStableValue(additionalWidgetProperties);
    var shouldSetStateRef = useRef(true);
    var previousRenderStateRef = useRef(null);
    var previousStatusRef = useRef(search.status);
    var widget = useMemo(function() {
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
                var instantSearchInstance = connectorState.instantSearchInstance; connectorState.widgetParams; var renderState = _$2(connectorState, [
                    "instantSearchInstance",
                    "widgetParams"
                ]);
                // We only update the state when a widget render state param changes,
                // except for functions. We ignore function reference changes to avoid
                // infinite loops. It's safe to omit them because they get updated
                // every time another render param changes.
                if (!dequal(renderState, previousRenderStateRef.current, function(a, b) {
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
        return _$3({}, createWidget(stableProps), stableAdditionalWidgetProperties);
    }, [
        connector,
        stableProps,
        stableAdditionalWidgetProperties
    ]);
    var _useState = _$1(useState(function() {
        if (widget.getWidgetRenderState) {
            var _widget_getWidgetSearchParameters;
            // The helper exists because we've started InstantSearch.
            var helper = parentIndex.getHelper();
            var uiState = parentIndex.getWidgetUiState({})[parentIndex.getIndexId()];
            helper.state = ((_widget_getWidgetSearchParameters = widget.getWidgetSearchParameters) === null || _widget_getWidgetSearchParameters === void 0 ? void 0 : _widget_getWidgetSearchParameters.call(widget, helper.state, {
                uiState: uiState
            })) || helper.state;
            var _getIndexSearchResults = getIndexSearchResults(parentIndex), results = _getIndexSearchResults.results, scopedResults = _getIndexSearchResults.scopedResults, recommendResults = _getIndexSearchResults.recommendResults;
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
            }); _widget_getWidgetRenderState.widgetParams; var renderState = _$2(_widget_getWidgetRenderState, [
                "widgetParams"
            ]);
            return renderState;
        }
        return {};
    }), 2), state = _useState[0], setState = _useState[1];
    useWidget({
        widget: widget,
        parentIndex: parentIndex,
        props: stableProps,
        shouldSsr: Boolean(serverContext),
        skipSuspense: skipSuspense
    });
    return state;
}

export { useConnector };
