'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAutocompletePanelComponent", {
    enumerable: true,
    get: function() {
        return createAutocompletePanelComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _cx = require("../../lib/cx");
function createAutocompletePanelComponent(param) {
    var createElement = param.createElement;
    return function AutocompletePanel(userProps) {
        var children = userProps.children, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, hidden = userProps.hidden, props = _object_without_properties._(userProps, [
            "children",
            "classNames",
            "hidden"
        ]);
        return /*#__PURE__*/ createElement("div", _object_spread_props._(_object_spread._({}, props), {
            "aria-hidden": hidden,
            className: (0, _cx.cx)('ais-AutocompletePanel', !hidden && 'ais-AutocompletePanel--open', classNames.root, props.className),
            onMouseDown: function onMouseDown(event) {
                // Prevents the autocomplete panel from blurring the input when
                // clicking inside the panel.
                event.preventDefault();
            }
        }), /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompletePanelLayout', classNames.layout)
        }, children));
    };
}
