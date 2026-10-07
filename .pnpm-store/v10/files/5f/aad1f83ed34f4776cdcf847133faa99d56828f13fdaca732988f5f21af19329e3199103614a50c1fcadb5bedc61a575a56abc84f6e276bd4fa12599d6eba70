import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createLookingSimilarComponent } from 'instantsearch-ui-components';
import React, { createElement, Fragment, useMemo } from 'react';
import { useInstantSearch, useLookingSimilar } from 'react-instantsearch-core';

var LookingSimilarUiComponent = createLookingSimilarComponent({
    createElement: createElement,
    Fragment: Fragment
});
function LookingSimilar(_0) {
    var objectIDs = _0.objectIDs, limit = _0.limit, threshold = _0.threshold, queryParameters = _0.queryParameters, fallbackParameters = _0.fallbackParameters, escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, itemComponent = _0.itemComponent, headerComponent = _0.headerComponent, emptyComponent = _0.emptyComponent, layoutComponent = _0.layoutComponent, props = _(_0, [
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
    var status = useInstantSearch().status;
    var _useLookingSimilar = useLookingSimilar({
        objectIDs: objectIDs,
        limit: limit,
        threshold: threshold,
        queryParameters: queryParameters,
        fallbackParameters: fallbackParameters,
        escapeHTML: escapeHTML,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.lookingSimilar'
    }), items = _useLookingSimilar.items, sendEvent = _useLookingSimilar.sendEvent;
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
    return /*#__PURE__*/ React.createElement(LookingSimilarUiComponent, _$2({}, props, uiProps));
}

export { LookingSimilar };
