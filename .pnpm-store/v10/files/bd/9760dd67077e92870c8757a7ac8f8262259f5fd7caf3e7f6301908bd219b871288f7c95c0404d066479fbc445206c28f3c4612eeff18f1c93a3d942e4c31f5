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
var _preact = require("preact");
var defaultTemplates = {
    item: function item(param) {
        var cssClasses = param.cssClasses, attribute = param.attribute, label = param.label, isRefined = param.isRefined;
        return /*#__PURE__*/ (0, _preact.h)("label", {
            className: cssClasses.label
        }, /*#__PURE__*/ (0, _preact.h)("input", {
            type: "radio",
            className: cssClasses.radio,
            name: attribute,
            defaultChecked: isRefined
        }), /*#__PURE__*/ (0, _preact.h)("span", {
            className: cssClasses.labelText
        }, label));
    }
};
var _default = defaultTemplates;
