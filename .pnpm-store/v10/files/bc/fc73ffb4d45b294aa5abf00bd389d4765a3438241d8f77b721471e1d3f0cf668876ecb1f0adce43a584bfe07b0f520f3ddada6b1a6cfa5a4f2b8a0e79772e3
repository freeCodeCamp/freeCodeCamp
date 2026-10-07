'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FrequentlyBoughtTogether", {
    enumerable: true,
    get: function() {
        return FrequentlyBoughtTogether;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var FrequentlyBoughtTogetherUiComponent = (0, _instantsearchuicomponents.createFrequentlyBoughtTogetherComponent)({
    createElement: _react.createElement,
    Fragment: _react.Fragment
});
function FrequentlyBoughtTogether(_0) {
    var objectIDs = _0.objectIDs, limit = _0.limit, threshold = _0.threshold, queryParameters = _0.queryParameters, fallbackParameters = _0.fallbackParameters, escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, itemComponent = _0.itemComponent, headerComponent = _0.headerComponent, emptyComponent = _0.emptyComponent, layoutComponent = _0.layoutComponent, props = _object_without_properties._(_0, [
        "objectIDs",
        "limit",
        "threshold",
        "queryParameters",
        "fallbackParameters",
        "escapeHTML",
        "transformItems",
        "itemComponent",
        "headerComponent",
        "emptyComponent",
        "layoutComponent"
    ]);
    var status = (0, _reactinstantsearchcore.useInstantSearch)().status;
    var _useFrequentlyBoughtTogether = (0, _reactinstantsearchcore.useFrequentlyBoughtTogether)({
        objectIDs: objectIDs,
        limit: limit,
        threshold: threshold,
        queryParameters: queryParameters,
        fallbackParameters: fallbackParameters,
        escapeHTML: escapeHTML,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.frequentlyBoughtTogether'
    }), items = _useFrequentlyBoughtTogether.items, sendEvent = _useFrequentlyBoughtTogether.sendEvent;
    var layout = layoutComponent ? function(layoutProps) {
        return layoutComponent(_object_spread_props._(_object_spread._({}, layoutProps), {
            classNames: {
                list: layoutProps.classNames.list,
                item: layoutProps.classNames.item
            }
        }));
    } : undefined;
    var _itemComponent = (0, _react.useMemo)(function() {
        return itemComponent ? function(itemProps) {
            return itemComponent(_object_spread_props._(_object_spread._({}, itemProps), {
                sendEvent: sendEvent
            }));
        } : undefined;
    }, [
        itemComponent,
        sendEvent
    ]);
    var uiProps = {
        items: items,
        itemComponent: _itemComponent,
        headerComponent: headerComponent,
        emptyComponent: emptyComponent,
        layout: layout,
        status: status,
        sendEvent: sendEvent
    };
    return /*#__PURE__*/ _react.default.createElement(FrequentlyBoughtTogetherUiComponent, _object_spread._({}, props, uiProps));
}
