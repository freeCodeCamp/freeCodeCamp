'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useIndex", {
    enumerable: true,
    get: function() {
        return useIndex;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _index = /*#__PURE__*/ _interop_require_default._(require("instantsearch.js/cjs/widgets/index/index"));
var _react = require("react");
var _useForceUpdate = require("./useForceUpdate");
var _useIndexContext = require("./useIndexContext");
var _useInstantSearchServerContext = require("./useInstantSearchServerContext");
var _useInstantSearchSSRContext = require("./useInstantSearchSSRContext");
var _useIsomorphicLayoutEffect = require("./useIsomorphicLayoutEffect");
var _useStableValue = require("./useStableValue");
var _useWidget = require("./useWidget");
function useIndex(props) {
    var serverContext = (0, _useInstantSearchServerContext.useInstantSearchServerContext)();
    var ssrContext = (0, _useInstantSearchSSRContext.useInstantSearchSSRContext)();
    var initialResults = ssrContext === null || ssrContext === void 0 ? void 0 : ssrContext.initialResults;
    var parentIndex = (0, _useIndexContext.useIndexContext)();
    var stableProps = (0, _useStableValue.useStableValue)(props);
    var indexWidget = (0, _react.useMemo)(function() {
        return (0, _index.default)(stableProps);
    }, [
        stableProps
    ]);
    var helper = indexWidget.getHelper();
    var forceUpdate = (0, _useForceUpdate.useForceUpdate)();
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
        forceUpdate();
    }, [
        helper,
        forceUpdate
    ]);
    (0, _useWidget.useWidget)({
        widget: indexWidget,
        parentIndex: parentIndex,
        props: stableProps,
        shouldSsr: Boolean(serverContext || initialResults),
        skipSuspense: true
    });
    return indexWidget;
}
