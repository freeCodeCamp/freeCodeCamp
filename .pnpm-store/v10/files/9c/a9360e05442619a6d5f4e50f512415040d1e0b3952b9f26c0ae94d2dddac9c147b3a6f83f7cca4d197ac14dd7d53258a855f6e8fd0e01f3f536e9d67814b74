import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import { getHighlightedParts, unescape } from 'instantsearch.js/es/lib/utils/index.js';
import React from 'react';
import { Highlight } from './Highlight.js';
import { ShowMoreButton } from './ShowMoreButton.js';

function RefinementList(_0) {
    _0.canRefine; var items = _0.items, onRefine = _0.onRefine, query = _0.query, searchBox = _0.searchBox, noResults = _0.noResults, showMore = _0.showMore, canToggleShowMore = _0.canToggleShowMore, onToggleShowMore = _0.onToggleShowMore, isShowingMore = _0.isShowingMore, className = _0.className, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, translations = _0.translations, props = _(_0, [
        "canRefine",
        "items",
        "onRefine",
        "query",
        "searchBox",
        "noResults",
        "showMore",
        "canToggleShowMore",
        "onToggleShowMore",
        "isShowingMore",
        "className",
        "classNames",
        "translations"
    ]);
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-RefinementList', classNames.root, items.length === 0 && cx('ais-RefinementList--noRefinement', classNames.noRefinementRoot), className)
    }), searchBox && /*#__PURE__*/ React.createElement("div", {
        className: cx('ais-RefinementList-searchBox', classNames.searchBox)
    }, searchBox), noResults ? /*#__PURE__*/ React.createElement("div", {
        className: cx('ais-RefinementList-noResults', classNames.noResults)
    }, noResults) : /*#__PURE__*/ React.createElement("ul", {
        className: cx('ais-RefinementList-list', classNames.list)
    }, items.map(function(item) {
        return /*#__PURE__*/ React.createElement("li", {
            key: item.value,
            className: cx('ais-RefinementList-item', classNames.item, item.isRefined && cx('ais-RefinementList-item--selected', classNames.selectedItem))
        }, /*#__PURE__*/ React.createElement("label", {
            className: cx('ais-RefinementList-label', classNames.label)
        }, /*#__PURE__*/ React.createElement("input", {
            checked: item.isRefined,
            className: cx('ais-RefinementList-checkbox', classNames.checkbox),
            type: "checkbox",
            value: item.value,
            onChange: function onChange() {
                onRefine(item);
            }
        }), /*#__PURE__*/ React.createElement("span", {
            className: cx('ais-RefinementList-labelText', classNames.labelText)
        }, query.length > 0 ? /*#__PURE__*/ React.createElement(Highlight, {
            parts: [
                getHighlightedParts(unescape(item.highlighted || ''))
            ]
        }) : item.label), /*#__PURE__*/ React.createElement("span", {
            className: cx('ais-RefinementList-count', classNames.count)
        }, item.count)));
    })), showMore && /*#__PURE__*/ React.createElement(ShowMoreButton, {
        className: cx('ais-RefinementList-showMore', classNames.showMore, !canToggleShowMore && cx('ais-RefinementList-showMore--disabled', classNames.disabledShowMore)),
        disabled: !canToggleShowMore,
        onClick: onToggleShowMore,
        isShowingMore: isShowingMore,
        translations: translations
    }));
}

export { RefinementList };
