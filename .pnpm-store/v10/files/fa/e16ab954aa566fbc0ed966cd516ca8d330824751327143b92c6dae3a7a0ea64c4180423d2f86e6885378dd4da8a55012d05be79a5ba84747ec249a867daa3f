'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useWidget", {
    enumerable: true,
    get: function() {
        return useWidget;
    }
});
var _react = require("react");
var _dequal = require("./dequal");
var _use = require("./use");
var _useInstantSearchContext = require("./useInstantSearchContext");
var _useIsomorphicLayoutEffect = require("./useIsomorphicLayoutEffect");
var _useRSCContext = require("./useRSCContext");
var _warn = require("./warn");
function useWidget(param) {
    var widget = param.widget, parentIndex = param.parentIndex, props = param.props, shouldSsr = param.shouldSsr, skipSuspense = param.skipSuspense;
    var _waitForResultsRef_current, _waitForResultsRef_current1;
    var _useRSCContext1 = (0, _useRSCContext.useRSCContext)(), waitForResultsRef = _useRSCContext1.waitForResultsRef, countRef = _useRSCContext1.countRef, ignoreMultipleHooksWarning = _useRSCContext1.ignoreMultipleHooksWarning;
    var prevPropsRef = (0, _react.useRef)(props);
    (0, _react.useEffect)(function() {
        prevPropsRef.current = props;
    }, [
        props
    ]);
    var prevWidgetRef = (0, _react.useRef)(widget);
    (0, _react.useEffect)(function() {
        prevWidgetRef.current = widget;
    }, [
        widget
    ]);
    var cleanupTimerRef = (0, _react.useRef)(null);
    var shouldAddWidgetEarly = shouldSsr && !parentIndex.getWidgets().includes(widget);
    var search = (0, _useInstantSearchContext.useInstantSearchContext)();
    // This effect is responsible for adding, removing, and updating the widget.
    // We need to support scenarios where the widget is remounted quickly, like in
    // Strict Mode, so that we don't lose its state, and therefore that we don't
    // break routing.
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
        var previousWidget = prevWidgetRef.current;
        // Scenario 1: the widget is added for the first time.
        if (!cleanupTimerRef.current) {
            if (!shouldSsr) {
                parentIndex.addWidgets([
                    widget
                ]);
            }
        } else {
            // We cancel the original effect cleanup because it may not be necessary if
            // props haven't changed. (We manually call it if it is below.)
            clearTimeout(cleanupTimerRef.current);
            // Warning: if an unstable function prop is provided, `dequal` is not able
            // to keep its reference and therefore will consider that props did change.
            // This could unsollicitely remove/add the widget, therefore forget its state,
            // and could be a source of confusion.
            // If users face this issue, we should advise them to provide stable function
            // references.
            var arePropsEqual = (0, _dequal.dequal)(props, prevPropsRef.current);
            // If props did change, then we execute the cleanup function instantly
            // and then add the widget back. This lets us add the widget without
            // waiting for the scheduled cleanup function to finish (that we canceled
            // above).
            if (!arePropsEqual) {
                parentIndex.removeWidgets([
                    previousWidget
                ]);
                parentIndex.addWidgets([
                    widget
                ]);
            }
        }
        return function() {
            // We don't remove the widget right away, but rather schedule it so that
            // we're able to cancel it in the next effect.
            cleanupTimerRef.current = setTimeout(function() {
                search._schedule(function() {
                    if (search._preventWidgetCleanup) return;
                    parentIndex.removeWidgets([
                        previousWidget
                    ]);
                });
            });
        };
    }, [
        parentIndex,
        widget,
        shouldSsr,
        search,
        props
    ]);
    if (shouldAddWidgetEarly || (waitForResultsRef === null || waitForResultsRef === void 0 ? void 0 : (_waitForResultsRef_current = waitForResultsRef.current) === null || _waitForResultsRef_current === void 0 ? void 0 : _waitForResultsRef_current.status) === 'pending') {
        parentIndex.addWidgets([
            widget
        ]);
    }
    if ((waitForResultsRef === null || waitForResultsRef === void 0 ? void 0 : waitForResultsRef.current) && !skipSuspense) {
        var _search_helper;
        (0, _use.use)(waitForResultsRef.current);
        // If we made a second request because of DynamicWidgets, we need to wait for the second result,
        // except for DynamicWidgets itself which needs to render its children after the first result.
        if (widget.$$type !== 'ais.dynamicWidgets' && ((_search_helper = search.helper) === null || _search_helper === void 0 ? void 0 : _search_helper.lastResults)) {
            (0, _use.use)(waitForResultsRef.current);
        }
    }
    if ((waitForResultsRef === null || waitForResultsRef === void 0 ? void 0 : (_waitForResultsRef_current1 = waitForResultsRef.current) === null || _waitForResultsRef_current1 === void 0 ? void 0 : _waitForResultsRef_current1.status) === 'fulfilled') {
        countRef.current += 1;
        (0, _warn.warn)(ignoreMultipleHooksWarning || countRef.current <= parentIndex.getWidgets().length, "We detected you may have a component with multiple InstantSearch hooks.\n\nWith Next.js, you need to set `skipSuspense` to `true` for all but the last hook in the component, otherwise, only the first hook will be rendered on the server.\n\nThis warning can be a false positive if you are using dynamic widgets or multi-index, in which case you can ignore it by setting `ignoreMultipleHooksWarning` to `true` in `<InstantSearchNext`.\n\nFor more information, see https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/react/#composing-hooks");
    }
}
