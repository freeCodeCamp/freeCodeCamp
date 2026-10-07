import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useMenu } from 'react-instantsearch-core';
import { Menu as Menu$1 } from '../ui/Menu.js';

function Menu(_0) {
    var attribute = _0.attribute, limit = _0.limit, showMore = _0.showMore, showMoreLimit = _0.showMoreLimit, sortBy = _0.sortBy, transformItems = _0.transformItems, translations = _0.translations, props = _(_0, [
        "attribute",
        "limit",
        "showMore",
        "showMoreLimit",
        "sortBy",
        "transformItems",
        "translations"
    ]);
    var _useMenu = useMenu({
        attribute: attribute,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.menu'
    }), canToggleShowMore = _useMenu.canToggleShowMore, isShowingMore = _useMenu.isShowingMore, items = _useMenu.items, refine = _useMenu.refine, createURL = _useMenu.createURL, toggleShowMore = _useMenu.toggleShowMore;
    var uiProps = {
        items: items,
        createURL: createURL,
        onRefine: function onRefine(item) {
            return refine(item.value);
        },
        canToggleShowMore: canToggleShowMore,
        onToggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        translations: _$1({
            showMoreButtonText: function showMoreButtonText(options) {
                return options.isShowingMore ? 'Show less' : 'Show more';
            }
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(Menu$1, _$2(_$1({}, props, uiProps), {
        showMore: showMore
    }));
}

export { Menu };
