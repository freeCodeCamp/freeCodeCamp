'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useStableValue", {
    enumerable: true,
    get: function() {
        return useStableValue;
    }
});
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _react = require("react");
var _dequal = require("./dequal");
function useStableValue(value) {
    var _useState = _sliced_to_array._((0, _react.useState)(function() {
        return value;
    }), 2), stableValue = _useState[0], setStableValue = _useState[1];
    if (!(0, _dequal.dequal)(stableValue, value)) {
        setStableValue(value);
    }
    return stableValue;
}
