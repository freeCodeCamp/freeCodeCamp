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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _utils = require("../../lib/utils");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var Breadcrumb = function Breadcrumb(param) {
    var items = param.items, cssClasses = param.cssClasses, templateProps = param.templateProps, createURL = param.createURL, refine = param.refine;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.root, items.length === 0 && cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ (0, _preact.h)("ul", {
        className: cssClasses.list
    }, /*#__PURE__*/ (0, _preact.h)("li", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.item, items.length === 0 && cssClasses.selectedItem)
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "home",
        rootTagName: "a",
        rootProps: {
            className: cssClasses.link,
            href: createURL(null),
            onClick: function onClick(event) {
                if ((0, _utils.isSpecialClick)(event)) {
                    return;
                }
                event.preventDefault();
                refine(null);
            }
        }
    }))), items.map(function(item, idx) {
        var isLast = idx === items.length - 1;
        return /*#__PURE__*/ (0, _preact.h)("li", {
            key: item.label + idx,
            className: (0, _instantsearchuicomponents.cx)(cssClasses.item, isLast && cssClasses.selectedItem)
        }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
            templateKey: "separator",
            rootTagName: "span",
            rootProps: {
                className: cssClasses.separator,
                'aria-hidden': true
            }
        })), isLast ? item.label : /*#__PURE__*/ (0, _preact.h)("a", {
            className: cssClasses.link,
            href: createURL(item.value),
            onClick: function onClick(event) {
                if ((0, _utils.isSpecialClick)(event)) {
                    return;
                }
                event.preventDefault();
                refine(item.value);
            }
        }, item.label));
    })));
};
var _default = Breadcrumb;
