'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TrendingItems", {
    enumerable: true,
    get: function() {
        return TrendingItems;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var TrendingItemsUiComponent = (0, _instantsearchuicomponents.createTrendingItemsComponent)({
    createElement: _react.createElement,
    Fragment: _react.Fragment
});
function TrendingItems(_0) {
    var facetName = _0.facetName, facetValue = _0.facetValue, limit = _0.limit, threshold = _0.threshold, fallbackParameters = _0.fallbackParameters, queryParameters = _0.queryParameters, escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, itemComponent = _0.itemComponent, headerComponent = _0.headerComponent, emptyComponent = _0.emptyComponent, layoutComponent = _0.layoutComponent, props = _object_without_properties._(_0, [
        "facetName",
        "facetValue",
        "limit",
        "threshold",
        "fallbackParameters",
        "queryParameters",
        "escapeHTML",
        "transformItems",
        "itemComponent",
        "headerComponent",
        "emptyComponent",
        "layoutComponent"
    ]);
    var facetParameters = facetName && facetValue ? {
        facetName: facetName,
        facetValue: facetValue
    } : {};
    var status = (0, _reactinstantsearchcore.useInstantSearch)().status;
    var _useTrendingItems = (0, _reactinstantsearchcore.useTrendingItems)(_object_spread_props._(_object_spread._({}, facetParameters), {
        limit: limit,
        threshold: threshold,
        fallbackParameters: fallbackParameters,
        queryParameters: queryParameters,
        escapeHTML: escapeHTML,
        transformItems: transformItems
    }), {
        $$widgetType: 'ais.trendingItems'
    }), items = _useTrendingItems.items, sendEvent = _useTrendingItems.sendEvent;
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
    return /*#__PURE__*/ _react.default.createElement(TrendingItemsUiComponent, _object_spread._({}, props, uiProps));
}
