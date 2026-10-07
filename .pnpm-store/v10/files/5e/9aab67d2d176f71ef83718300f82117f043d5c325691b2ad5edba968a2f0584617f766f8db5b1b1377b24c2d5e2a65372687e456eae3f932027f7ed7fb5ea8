import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useHierarchicalMenu } from 'react-instantsearch-core';
import { HierarchicalMenu as HierarchicalMenu$1 } from '../ui/HierarchicalMenu.js';

function HierarchicalMenu(_0) {
    var attributes = _0.attributes, limit = _0.limit, rootPath = _0.rootPath, separator = _0.separator, showMore = _0.showMore, showMoreLimit = _0.showMoreLimit, showParentLevel = _0.showParentLevel, sortBy = _0.sortBy, transformItems = _0.transformItems, translations = _0.translations, props = _(_0, [
        "attributes",
        "limit",
        "rootPath",
        "separator",
        "showMore",
        "showMoreLimit",
        "showParentLevel",
        "sortBy",
        "transformItems",
        "translations"
    ]);
    var _useHierarchicalMenu = useHierarchicalMenu({
        attributes: attributes,
        limit: limit,
        rootPath: rootPath,
        separator: separator,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        showParentLevel: showParentLevel,
        sortBy: sortBy,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.hierarchicalMenu'
    }), items = _useHierarchicalMenu.items, canRefine = _useHierarchicalMenu.canRefine, canToggleShowMore = _useHierarchicalMenu.canToggleShowMore, createURL = _useHierarchicalMenu.createURL, isShowingMore = _useHierarchicalMenu.isShowingMore, refine = _useHierarchicalMenu.refine, toggleShowMore = _useHierarchicalMenu.toggleShowMore;
    var uiProps = {
        items: items,
        hasItems: canRefine,
        createURL: createURL,
        onNavigate: refine,
        canToggleShowMore: canToggleShowMore,
        onToggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        translations: _$1({
            showMoreButtonText: function showMoreButtonText(options) {
                return options.isShowingMore ? 'Show less' : 'Show more';
            }
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(HierarchicalMenu$1, _$2(_$1({}, props, uiProps), {
        showMore: showMore
    }));
}

export { HierarchicalMenu };
