import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';
import { isModifierClick } from './lib/isModifierClick.js';
import { ShowMoreButton } from './ShowMoreButton.js';

function Menu(_0) {
    var items = _0.items, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, showMore = _0.showMore, canToggleShowMore = _0.canToggleShowMore, onToggleShowMore = _0.onToggleShowMore, isShowingMore = _0.isShowingMore, createURL = _0.createURL, onRefine = _0.onRefine, translations = _0.translations, props = _(_0, [
        "items",
        "classNames",
        "showMore",
        "canToggleShowMore",
        "onToggleShowMore",
        "isShowingMore",
        "createURL",
        "onRefine",
        "translations"
    ]);
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-Menu', classNames.root, items.length === 0 && cx('ais-Menu--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ React.createElement("ul", {
        className: cx('ais-Menu-list', classNames.list)
    }, items.map(function(item) {
        return /*#__PURE__*/ React.createElement("li", {
            key: item.label,
            className: cx('ais-Menu-item', classNames.item, item.isRefined && cx('ais-Menu-item--selected', classNames.selectedItem))
        }, /*#__PURE__*/ React.createElement("a", {
            className: cx('ais-Menu-link', classNames.link),
            href: createURL(item.value),
            onClick: function onClick(event) {
                if (isModifierClick(event)) {
                    return;
                }
                event.preventDefault();
                onRefine(item);
            }
        }, /*#__PURE__*/ React.createElement("span", {
            className: cx('ais-Menu-label', classNames.label)
        }, item.label), /*#__PURE__*/ React.createElement("span", {
            className: cx('ais-Menu-count', classNames.count)
        }, item.count)));
    })), showMore && /*#__PURE__*/ React.createElement(ShowMoreButton, {
        className: cx('ais-Menu-showMore', classNames.showMore, !canToggleShowMore && cx('ais-Menu-showMore--disabled', classNames.disabledShowMore)),
        disabled: !canToggleShowMore,
        onClick: onToggleShowMore,
        isShowingMore: isShowingMore,
        translations: translations
    }));
}

export { Menu };
