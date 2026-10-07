import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../lib/cx.js';

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
        var parts = userProps.parts, _userProps_highlightedTagName = userProps.highlightedTagName, highlightedTagName = _userProps_highlightedTagName === void 0 ? 'mark' : _userProps_highlightedTagName, _userProps_nonHighlightedTagName = userProps.nonHighlightedTagName, nonHighlightedTagName = _userProps_nonHighlightedTagName === void 0 ? 'span' : _userProps_nonHighlightedTagName, _userProps_separator = userProps.separator, separator = _userProps_separator === void 0 ? ', ' : _userProps_separator, className = userProps.className, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, props = _(userProps, [
            "parts",
            "highlightedTagName",
            "nonHighlightedTagName",
            "separator",
            "className",
            "classNames"
        ]);
        return /*#__PURE__*/ createElement("span", _$1(_$2({}, props), {
            className: cx(classNames.root, className)
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

export { createHighlightComponent };
