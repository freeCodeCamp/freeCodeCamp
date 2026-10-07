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
var _formatNumber = require("../../lib/formatNumber");
function ItemWrapper(param) {
    var children = param.children, count = param.count, value = param.value, url = param.url, cssClasses = param.cssClasses;
    if (count) {
        return /*#__PURE__*/ (0, _preact.h)("a", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.link),
            "aria-label": "".concat(value, " & up"),
            href: url
        }, children);
    }
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.link),
        "aria-label": "".concat(value, " & up"),
        disabled: true
    }, children);
}
var defaultTemplates = {
    item: function item(param) {
        var count = param.count, value = param.value, url = param.url, stars = param.stars, cssClasses = param.cssClasses;
        return /*#__PURE__*/ (0, _preact.h)(ItemWrapper, {
            count: count,
            value: value,
            url: url,
            cssClasses: cssClasses
        }, stars.map(function(isFull, index) {
            return /*#__PURE__*/ (0, _preact.h)("svg", {
                key: index,
                className: (0, _instantsearchuicomponents.cx)(cssClasses.starIcon, isFull ? cssClasses.fullStarIcon : cssClasses.emptyStarIcon),
                "aria-hidden": "true",
                width: "24",
                height: "24"
            }, /*#__PURE__*/ (0, _preact.h)("use", {
                xlinkHref: isFull ? '#ais-RatingMenu-starSymbol' : '#ais-RatingMenu-starEmptySymbol'
            }));
        }), /*#__PURE__*/ (0, _preact.h)("span", {
            "aria-hidden": "true",
            className: (0, _instantsearchuicomponents.cx)(cssClasses.label)
        }, "& Up"), count && /*#__PURE__*/ (0, _preact.h)("span", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.count)
        }, (0, _formatNumber.formatNumber)(count)));
    }
};
var _default = defaultTemplates;
