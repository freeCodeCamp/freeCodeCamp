'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "chatInlineLayout", {
    enumerable: true,
    get: function() {
        return chatInlineLayout;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var ChatInlineLayout = (0, _instantsearchuicomponents.createChatInlineLayoutComponent)({
    createElement: _preact.h,
    Fragment: _preact.Fragment
});
function chatInlineLayout() {
    return function ChatInlineLayoutTemplate(props) {
        var templates = props.templates, rest = _object_without_properties._(props, [
            "templates"
        ]);
        return /*#__PURE__*/ (0, _preact.h)(ChatInlineLayout, _object_spread_props._(_object_spread._({}, rest), {
            headerComponent: templates.header(),
            messagesComponent: templates.messages(),
            promptComponent: templates.prompt(),
            toggleButtonComponent: templates.toggleButton()
        }));
    };
}
