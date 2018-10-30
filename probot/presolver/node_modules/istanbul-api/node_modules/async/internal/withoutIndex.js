"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _withoutIndex;
function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}
module.exports = exports["default"];