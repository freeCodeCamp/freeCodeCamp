import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';
import { isModifierClick } from './lib/isModifierClick.js';
import { ShowMoreButton } from './ShowMoreButton.js';

function HierarchicalList(param) {
    var className = param.className, _param_classNames = param.classNames, classNames = _param_classNames === void 0 ? {} : _param_classNames, items = param.items, createURL = param.createURL, onNavigate = param.onNavigate;
    if (items.length === 0) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("ul", {
        className: cx('ais-HierarchicalMenu-list', classNames.list, className)
    }, items.map(function(item) {
        return /*#__PURE__*/ React.createElement("li", {
            key: item.value,
            className: cx('ais-HierarchicalMenu-item', classNames.item, item.isRefined && cx('ais-HierarchicalMenu-item--selected', classNames.selectedItem), item.data && item.data.length > 0 && cx('ais-HierarchicalMenu-item--parent', classNames.parentItem))
        }, /*#__PURE__*/ React.createElement("a", {
            className: cx('ais-HierarchicalMenu-link', classNames.link, item.isRefined && cx('ais-HierarchicalMenu-link--selected', classNames.selectedItemLink)),
            href: createURL(item.value),
            onClick: function onClick(event) {
                if (isModifierClick(event)) {
                    return;
                }
                event.preventDefault();
                onNavigate(item.value);
            }
        }, /*#__PURE__*/ React.createElement("span", {
            className: cx('ais-HierarchicalMenu-label', classNames.label)
        }, item.label), /*#__PURE__*/ React.createElement("span", {
            className: cx('ais-HierarchicalMenu-count', classNames.count)
        }, item.count)), item.data && /*#__PURE__*/ React.createElement(HierarchicalList, {
            className: cx('ais-HierarchicalMenu-list--child', classNames.childList),
            classNames: classNames,
            items: item.data,
            onNavigate: onNavigate,
            createURL: createURL
        }));
    }));
}
function HierarchicalMenu(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, items = _0.items, hasItems = _0.hasItems, onNavigate = _0.onNavigate, createURL = _0.createURL, showMore = _0.showMore, canToggleShowMore = _0.canToggleShowMore, onToggleShowMore = _0.onToggleShowMore, isShowingMore = _0.isShowingMore, translations = _0.translations, props = _(_0, [
        "classNames",
        "items",
        "hasItems",
        "onNavigate",
        "createURL",
        "showMore",
        "canToggleShowMore",
        "onToggleShowMore",
        "isShowingMore",
        "translations"
    ]);
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-HierarchicalMenu', classNames.root, !hasItems && cx('ais-HierarchicalMenu--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ React.createElement(HierarchicalList, {
        classNames: classNames,
        items: items,
        onNavigate: onNavigate,
        createURL: createURL
    }), showMore && /*#__PURE__*/ React.createElement(ShowMoreButton, {
        className: cx('ais-HierarchicalMenu-showMore', classNames.showMore, !canToggleShowMore && cx('ais-HierarchicalMenu-showMore--disabled', classNames.disabledShowMore)),
        disabled: !canToggleShowMore,
        onClick: onToggleShowMore,
        isShowingMore: isShowingMore,
        translations: translations
    }));
}

export { HierarchicalMenu };
