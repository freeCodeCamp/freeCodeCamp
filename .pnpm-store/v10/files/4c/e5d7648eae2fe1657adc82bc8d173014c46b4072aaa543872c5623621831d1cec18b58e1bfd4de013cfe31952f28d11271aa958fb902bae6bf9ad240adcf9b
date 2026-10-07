import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';
import { isModifierClick } from './lib/isModifierClick.js';

function Breadcrumb(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, _0_items = _0.items, items = _0_items === void 0 ? [] : _0_items, hasItems = _0.hasItems, createURL = _0.createURL, onNavigate = _0.onNavigate, _0_separator = _0.separator, separator = _0_separator === void 0 ? '>' : _0_separator, translations = _0.translations, props = _(_0, [
        "classNames",
        "items",
        "hasItems",
        "createURL",
        "onNavigate",
        "separator",
        "translations"
    ]);
    var handleClick = function handleClick(value) {
        return function(event) {
            if (!isModifierClick(event)) {
                event.preventDefault();
                onNavigate(value);
            }
        };
    };
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-Breadcrumb', classNames.root, !hasItems && cx('ais-Breadcrumb--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ React.createElement("ul", {
        className: cx('ais-Breadcrumb-list', classNames.list)
    }, /*#__PURE__*/ React.createElement("li", {
        className: cx('ais-Breadcrumb-item', classNames.item, !hasItems && cx('ais-Breadcrumb-item--selected', classNames.selectedItem))
    }, /*#__PURE__*/ React.createElement("a", {
        href: createURL(null),
        onClick: handleClick(null),
        className: cx('ais-Breadcrumb-link', classNames.link)
    }, translations.rootElementText)), items.map(function(item, index) {
        var isLast = index === items.length - 1;
        return /*#__PURE__*/ React.createElement("li", {
            key: index,
            className: cx('ais-Breadcrumb-item', classNames.item, isLast && cx('ais-Breadcrumb-item--selected', classNames.selectedItem))
        }, /*#__PURE__*/ React.createElement("span", {
            "aria-hidden": "true",
            className: cx('ais-Breadcrumb-separator', classNames.separator)
        }, separator), isLast ? item.label : /*#__PURE__*/ React.createElement("a", {
            className: cx('ais-Breadcrumb-link', classNames.link),
            href: createURL(item.value),
            onClick: handleClick(item.value)
        }, item.label));
    })));
}

export { Breadcrumb };
