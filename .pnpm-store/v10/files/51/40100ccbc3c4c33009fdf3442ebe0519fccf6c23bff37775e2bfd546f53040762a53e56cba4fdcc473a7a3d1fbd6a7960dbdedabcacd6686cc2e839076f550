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
        var cssClasses = param.cssClasses, count = param.count, value = param.value, highlighted = param.highlighted, isRefined = param.isRefined, isFromSearch = param.isFromSearch;
        return /*#__PURE__*/ (0, _preact.h)("label", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.label)
        }, /*#__PURE__*/ (0, _preact.h)("input", {
            type: "checkbox",
            className: (0, _instantsearchuicomponents.cx)(cssClasses.checkbox),
            value: value,
            defaultChecked: isRefined
        }), /*#__PURE__*/ (0, _preact.h)("span", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.labelText),
            dangerouslySetInnerHTML: isFromSearch ? {
                __html: highlighted
            } : undefined
        }, !isFromSearch && highlighted), /*#__PURE__*/ (0, _preact.h)("span", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.count)
        }, (0, _formatNumber.formatNumber)(count)));
    },
    showMoreText: function showMoreText(param) {
        var isShowingMore = param.isShowingMore;
        return isShowingMore ? 'Show less' : 'Show more';
    },
    searchableNoResults: function searchableNoResults() {
        return 'No results';
    }
};
var _default = defaultTemplates;
