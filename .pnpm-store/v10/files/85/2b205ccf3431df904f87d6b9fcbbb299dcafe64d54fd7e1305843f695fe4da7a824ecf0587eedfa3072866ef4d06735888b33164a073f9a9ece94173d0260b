'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _utils = require("../../lib/utils");
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
        if ((0, _utils.isSpecialClick)(event)) {
            return;
        }
        event.preventDefault();
        callback();
    };
};
var CurrentRefinements = function CurrentRefinements(param) {
    var items = param.items, cssClasses = param.cssClasses, canRefine = param.canRefine;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.root, !canRefine && cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ (0, _preact.h)("ul", {
        className: cssClasses.list
    }, items.map(function(item, index) {
        return /*#__PURE__*/ (0, _preact.h)("li", {
            key: "".concat(item.indexName, "-").concat(item.attribute, "-").concat(index),
            className: cssClasses.item
        }, /*#__PURE__*/ (0, _preact.h)("span", {
            className: cssClasses.label
        }, (0, _utils.capitalize)(item.label), ": "), item.refinements.map(function(refinement) {
            return /*#__PURE__*/ (0, _preact.h)("span", {
                key: createItemKey(refinement),
                className: cssClasses.category
            }, /*#__PURE__*/ (0, _preact.h)("span", {
                className: cssClasses.categoryLabel
            }, refinement.attribute === 'query' ? /*#__PURE__*/ (0, _preact.h)("q", null, refinement.label) : refinement.label), /*#__PURE__*/ (0, _preact.h)("button", {
                className: cssClasses.delete,
                type: "button",
                onClick: handleClick(item.refine.bind(null, refinement))
            }, "✕"));
        }));
    })));
};
var _default = CurrentRefinements;
