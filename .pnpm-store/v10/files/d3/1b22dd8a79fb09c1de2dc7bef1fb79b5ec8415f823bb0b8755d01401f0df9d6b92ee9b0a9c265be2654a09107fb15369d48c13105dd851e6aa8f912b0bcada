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
var defaultTemplates = {
    item: function item(param) {
        var cssClasses = param.cssClasses, url = param.url, label = param.label, count = param.count;
        return /*#__PURE__*/ (0, _preact.h)("a", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.link),
            href: url
        }, /*#__PURE__*/ (0, _preact.h)("span", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.label)
        }, label), /*#__PURE__*/ (0, _preact.h)("span", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.count)
        }, (0, _formatNumber.formatNumber)(count)));
    },
    showMoreText: function showMoreText(param) {
        var isShowingMore = param.isShowingMore;
        return isShowingMore ? 'Show less' : 'Show more';
    }
};
var _default = defaultTemplates;
