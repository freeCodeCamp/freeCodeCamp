import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';
import { capitalize } from './lib/capitalize.js';
import { isModifierClick } from './lib/isModifierClick.js';

function CurrentRefinements(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, _0_items = _0.items, items = _0_items === void 0 ? [] : _0_items, _0_hasRefinements = _0.hasRefinements, hasRefinements = _0_hasRefinements === void 0 ? false : _0_hasRefinements, props = _(_0, [
        "classNames",
        "items",
        "hasRefinements"
    ]);
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-CurrentRefinements', classNames.root, !hasRefinements && cx('ais-CurrentRefinements--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ React.createElement("ul", {
        className: cx('ais-CurrentRefinements-list', classNames.list, /* @MAJOR remove to ensure conformity with InstantSearch.css specs */ !hasRefinements && cx('ais-CurrentRefinements-list--noRefinement', classNames.noRefinementList))
    }, items.map(function(item) {
        return /*#__PURE__*/ React.createElement("li", {
            key: [
                item.indexName,
                item.label
            ].join('/'),
            className: cx('ais-CurrentRefinements-item', classNames.item)
        }, /*#__PURE__*/ React.createElement("span", {
            className: cx('ais-CurrentRefinements-label', classNames.label)
        }, capitalize(item.label), ":", ' '), item.refinements.map(function(refinement) {
            return /*#__PURE__*/ React.createElement("span", {
                key: refinement.label,
                className: cx('ais-CurrentRefinements-category', classNames.category)
            }, /*#__PURE__*/ React.createElement("span", {
                className: cx('ais-CurrentRefinements-categoryLabel', classNames.categoryLabel)
            }, refinement.label), /*#__PURE__*/ React.createElement("button", {
                type: "button",
                onClick: function onClick(event) {
                    if (isModifierClick(event)) {
                        return;
                    }
                    item.refine(refinement);
                },
                className: cx('ais-CurrentRefinements-delete', classNames.delete)
            }, "✕"));
        }));
    })));
}

export { CurrentRefinements };
