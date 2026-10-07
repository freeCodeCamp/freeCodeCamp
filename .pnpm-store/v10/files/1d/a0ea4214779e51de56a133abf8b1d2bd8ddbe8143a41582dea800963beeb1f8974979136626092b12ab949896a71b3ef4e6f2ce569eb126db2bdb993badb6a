'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "range", {
    enumerable: true,
    get: function() {
        return range;
    }
});
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
function range(param) {
    var _param_start = param.start, start = _param_start === void 0 ? 0 : _param_start, end = param.end, _param_step = param.step, step = _param_step === void 0 ? 1 : _param_step;
    // We can't divide by 0 so we re-assign the step to 1 if it happens.
    var limitStep = step === 0 ? 1 : step;
    // In some cases the array to create has a decimal length.
    // We therefore need to round the value.
    // Example:
    //   { start: 1, end: 5000, step: 500 }
    //   => Array length = (5000 - 1) / 500 = 9.998
    var arrayLength = Math.round((end - start) / limitStep);
    return _to_consumable_array._(Array(arrayLength)).map(function(_, current) {
        return start + current * limitStep;
    });
}
