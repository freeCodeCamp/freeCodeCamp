'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHighlightComponent", {
    enumerable: true,
    get: function() {
        return createHighlightComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _lib = require("../lib");
function createHighlightPartComponent(param) {
    var createElement = param.createElement;
    return function HighlightPart(param) {
        var classNames = param.classNames, children = param.children, highlightedTagName = param.highlightedTagName, isHighlighted = param.isHighlighted, nonHighlightedTagName = param.nonHighlightedTagName;
        var TagName = isHighlighted ? highlightedTagName : nonHighlightedTagName;
        return /*#__PURE__*/ createElement(TagName, {
            className: isHighlighted ? classNames.highlighted : classNames.nonHighlighted
        }, children);
    };
}
function createHighlightComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    var HighlightPart = createHighlightPartComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    return function Highlight(userProps) {
        var parts = userProps.parts, _userProps_highlightedTagName = userProps.highlightedTagName, highlightedTagName = _userProps_highlightedTagName === void 0 ? 'mark' : _userProps_highlightedTagName, _userProps_nonHighlightedTagName = userProps.nonHighlightedTagName, nonHighlightedTagName = _userProps_nonHighlightedTagName === void 0 ? 'span' : _userProps_nonHighlightedTagName, _userProps_separator = userProps.separator, separator = _userProps_separator === void 0 ? ', ' : _userProps_separator, className = userProps.className, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, props = _object_without_properties._(userProps, [
            "parts",
            "highlightedTagName",
            "nonHighlightedTagName",
            "separator",
            "className",
            "classNames"
        ]);
        return /*#__PURE__*/ createElement("span", _object_spread_props._(_object_spread._({}, props), {
            className: (0, _lib.cx)(classNames.root, className)
        }), parts.map(function(part, partIndex) {
            var isLastPart = partIndex === parts.length - 1;
            return /*#__PURE__*/ createElement(Fragment, {
                key: partIndex
            }, part.map(function(subPart, subPartIndex) {
                return /*#__PURE__*/ createElement(HighlightPart, {
                    key: subPartIndex,
                    classNames: classNames,
                    highlightedTagName: highlightedTagName,
                    nonHighlightedTagName: nonHighlightedTagName,
                    isHighlighted: subPart.isHighlighted
                }, subPart.value);
            }), !isLastPart && /*#__PURE__*/ createElement("span", {
                className: classNames.separator
            }, separator));
        }));
    };
}
