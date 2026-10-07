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
function MenuSelect(param) {
    var cssClasses = param.cssClasses, templateProps = param.templateProps, items = param.items, refine = param.refine;
    var _ref = (0, _utils.find)(items, function(item) {
        return item.isRefined;
    }) || {
        value: ''
    }, selectedValue = _ref.value;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.root, items.length === 0 && cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ (0, _preact.h)("select", {
        className: cssClasses.select,
        value: selectedValue,
        onChange: function onChange(event) {
            refine(event.target.value);
        }
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "defaultOption",
        rootTagName: "option",
        rootProps: {
            value: '',
            className: cssClasses.option
        }
    })), items.map(function(item) {
        return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
            templateKey: "item",
            rootTagName: "option",
            rootProps: {
                value: item.value,
                className: cssClasses.option
            },
            key: item.value,
            data: item
        }));
    })));
}
var _default = MenuSelect;
