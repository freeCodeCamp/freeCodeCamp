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
function Selector(param) {
    var currentValue = param.currentValue, options = param.options, cssClasses = param.cssClasses, setValue = param.setValue, ariaLabel = param.ariaLabel;
    return /*#__PURE__*/ (0, _preact.h)("select", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.select),
        onChange: function onChange(event) {
            return setValue(event.target.value);
        },
        value: "".concat(currentValue),
        "aria-label": ariaLabel
    }, options.map(function(option) {
        return /*#__PURE__*/ (0, _preact.h)("option", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.option),
            key: option.label + option.value,
            value: "".concat(option.value)
        }, option.label);
    }));
}
var _default = Selector;
