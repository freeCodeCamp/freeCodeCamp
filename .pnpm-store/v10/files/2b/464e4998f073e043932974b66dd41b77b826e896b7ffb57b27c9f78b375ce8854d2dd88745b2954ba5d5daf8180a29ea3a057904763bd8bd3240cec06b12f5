import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createRelatedProductsComponent } from 'instantsearch-ui-components';
import React, { createElement, Fragment, useMemo } from 'react';
import { useInstantSearch, useRelatedProducts } from 'react-instantsearch-core';

var RelatedProductsUiComponent = createRelatedProductsComponent({
    createElement: createElement,
    Fragment: Fragment
});
function RelatedProducts(_0) {
    var objectIDs = _0.objectIDs, limit = _0.limit, threshold = _0.threshold, fallbackParameters = _0.fallbackParameters, queryParameters = _0.queryParameters, escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, itemComponent = _0.itemComponent, headerComponent = _0.headerComponent, emptyComponent = _0.emptyComponent, layoutComponent = _0.layoutComponent, props = _(_0, [
        "objectIDs",
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
    var status = useInstantSearch().status;
    var _useRelatedProducts = useRelatedProducts({
        objectIDs: objectIDs,
        limit: limit,
        threshold: threshold,
        fallbackParameters: fallbackParameters,
        queryParameters: queryParameters,
        escapeHTML: escapeHTML,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.relatedProducts'
    }), items = _useRelatedProducts.items, sendEvent = _useRelatedProducts.sendEvent;
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
    return /*#__PURE__*/ React.createElement(RelatedProductsUiComponent, _$2({}, props, uiProps));
}

export { RelatedProducts };
