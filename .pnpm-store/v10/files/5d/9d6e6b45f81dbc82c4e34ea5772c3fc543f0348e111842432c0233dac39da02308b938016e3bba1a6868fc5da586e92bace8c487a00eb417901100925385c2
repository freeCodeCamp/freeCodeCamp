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
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var Pit = function Pit(param) {
    var style = param.style, children = param.children;
    // first, end & middle
    var positionValue = Math.round(parseFloat(style.left));
    var shouldDisplayValue = [
        0,
        50,
        100
    ].includes(positionValue);
    var value = children;
    var pitValue = Math.round(parseInt(value, 10) * 100) / 100;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        style: _object_spread_props._(_object_spread._({}, style), {
            marginLeft: positionValue === 100 ? '-2px' : 0
        }),
        className: (0, _instantsearchuicomponents.cx)('rheostat-marker', 'rheostat-marker-horizontal', shouldDisplayValue && 'rheostat-marker-large')
    }, shouldDisplayValue && /*#__PURE__*/ (0, _preact.h)("div", {
        className: 'rheostat-value'
    }, pitValue));
};
var _default = Pit;
