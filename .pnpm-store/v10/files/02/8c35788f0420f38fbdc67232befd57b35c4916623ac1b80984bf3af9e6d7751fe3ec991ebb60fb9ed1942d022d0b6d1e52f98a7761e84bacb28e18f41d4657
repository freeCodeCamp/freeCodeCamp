import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import { capitalize } from '../../lib/utils/capitalize.js';
import { isSpecialClick } from '../../lib/utils/isSpecialClick.js';

var createItemKey = function createItemKey(param) {
    var attribute = param.attribute, value = param.value, type = param.type, operator = param.operator;
    return [
        attribute,
        type,
        value,
        operator
    ].map(function(key) {
        return key;
    }).filter(Boolean).join(':');
};
var handleClick = function handleClick(callback) {
    return function(event) {
        if (isSpecialClick(event)) {
            return;
        }
        event.preventDefault();
        callback();
    };
};
var CurrentRefinements = function CurrentRefinements(param) {
    var items = param.items, cssClasses = param.cssClasses, canRefine = param.canRefine;
    return /*#__PURE__*/ h("div", {
        className: cx(cssClasses.root, !canRefine && cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ h("ul", {
        className: cssClasses.list
    }, items.map(function(item, index) {
        return /*#__PURE__*/ h("li", {
            key: "".concat(item.indexName, "-").concat(item.attribute, "-").concat(index),
            className: cssClasses.item
        }, /*#__PURE__*/ h("span", {
            className: cssClasses.label
        }, capitalize(item.label), ": "), item.refinements.map(function(refinement) {
            return /*#__PURE__*/ h("span", {
                key: createItemKey(refinement),
                className: cssClasses.category
            }, /*#__PURE__*/ h("span", {
                className: cssClasses.categoryLabel
            }, refinement.attribute === 'query' ? /*#__PURE__*/ h("q", null, refinement.label) : refinement.label), /*#__PURE__*/ h("button", {
                className: cssClasses.delete,
                type: "button",
                onClick: handleClick(item.refine.bind(null, refinement))
            }, "✕"));
        }));
    })));
};

export { CurrentRefinements as default };
