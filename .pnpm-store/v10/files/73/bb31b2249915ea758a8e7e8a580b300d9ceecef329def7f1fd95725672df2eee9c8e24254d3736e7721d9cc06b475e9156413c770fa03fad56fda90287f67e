'use strict';

// This is the `Number.isFinite()` polyfill recommended by MDN.
// We do not provide any tests for this function.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
// @MAJOR Replace with the native `Number.isFinite` method
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isFiniteNumber", {
    enumerable: true,
    get: function() {
        return isFiniteNumber;
    }
});
function isFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
