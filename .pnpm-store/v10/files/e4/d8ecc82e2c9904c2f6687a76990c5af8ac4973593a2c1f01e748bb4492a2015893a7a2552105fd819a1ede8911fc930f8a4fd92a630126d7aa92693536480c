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
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
function Panel(props) {
    var _useState = _sliced_to_array._((0, _hooks.useState)(props.isCollapsed), 2), isCollapsed = _useState[0], setIsCollapsed = _useState[1];
    var _useState1 = _sliced_to_array._((0, _hooks.useState)(false), 2), isControlled = _useState1[0], setIsControlled = _useState1[1];
    var bodyRef = (0, _hooks.useRef)(null);
    (0, _hooks.useEffect)(function() {
        var node = bodyRef.current;
        if (!node) {
            return undefined;
        }
        node.appendChild(props.bodyElement);
        return function() {
            node.removeChild(props.bodyElement);
        };
    }, [
        bodyRef,
        props.bodyElement
    ]);
    if (!isControlled && props.isCollapsed !== isCollapsed) {
        setIsCollapsed(props.isCollapsed);
    }
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(props.cssClasses.root, props.hidden && props.cssClasses.noRefinementRoot, props.collapsible && props.cssClasses.collapsibleRoot, isCollapsed && props.cssClasses.collapsedRoot),
        hidden: props.hidden
    }, props.templates.header && /*#__PURE__*/ (0, _preact.h)("div", {
        className: props.cssClasses.header
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, {
        templates: props.templates,
        templateKey: "header",
        rootTagName: "span",
        data: props.data
    }), props.collapsible && /*#__PURE__*/ (0, _preact.h)("button", {
        className: props.cssClasses.collapseButton,
        "aria-expanded": !isCollapsed,
        onClick: function onClick(event) {
            event.preventDefault();
            setIsControlled(true);
            setIsCollapsed(function(prevIsCollapsed) {
                return !prevIsCollapsed;
            });
        }
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, {
        templates: props.templates,
        templateKey: "collapseButtonText",
        rootTagName: "span",
        data: {
            collapsed: isCollapsed
        }
    }))), /*#__PURE__*/ (0, _preact.h)("div", {
        className: props.cssClasses.body,
        ref: bodyRef
    }), props.templates.footer && /*#__PURE__*/ (0, _preact.h)(_Template.default, {
        templates: props.templates,
        templateKey: "footer",
        rootProps: {
            className: props.cssClasses.footer
        },
        data: props.data
    }));
}
var _default = Panel;
