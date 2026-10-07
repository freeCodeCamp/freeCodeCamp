import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createTrendingItemsComponent } from 'instantsearch-ui-components';
import React, { createElement, Fragment, useMemo } from 'react';
import { useInstantSearch, useTrendingItems } from 'react-instantsearch-core';

var TrendingItemsUiComponent = createTrendingItemsComponent({
    createElement: createElement,
    Fragment: Fragment
});
function TrendingItems(_0) {
    var facetName = _0.facetName, facetValue = _0.facetValue, limit = _0.limit, threshold = _0.threshold, fallbackParameters = _0.fallbackParameters, queryParameters = _0.queryParameters, escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, itemComponent = _0.itemComponent, headerComponent = _0.headerComponent, emptyComponent = _0.emptyComponent, layoutComponent = _0.layoutComponent, props = _(_0, [
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
    var status = useInstantSearch().status;
    var _useTrendingItems = useTrendingItems(_$1(_$2({}, facetParameters), {
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
        return layoutComponent(_$1(_$2({}, layoutProps), {
            classNames: {
                list: layoutProps.classNames.list,
                item: layoutProps.classNames.item
            }
        }));
    } : undefined;
    var _itemComponent = useMemo(function() {
        return itemComponent ? function(itemProps) {
            return itemComponent(_$1(_$2({}, itemProps), {
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
    return /*#__PURE__*/ React.createElement(TrendingItemsUiComponent, _$2({}, props, uiProps));
}

export { TrendingItems };
