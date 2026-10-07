"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferFrom = exports.bufferAllocUnsafe = exports.Buffer = void 0;
var buffer_1 = require("buffer");
Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return buffer_1.Buffer; } });
function bufferV0P12Ponyfill(arg0) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (buffer_1.Buffer.bind.apply(buffer_1.Buffer, __spreadArray([void 0, arg0], args, false)))();
}
var bufferAllocUnsafe = buffer_1.Buffer.allocUnsafe || bufferV0P12Ponyfill;
exports.bufferAllocUnsafe = bufferAllocUnsafe;
var bufferFrom = buffer_1.Buffer.from || bufferV0P12Ponyfill;
exports.bufferFrom = bufferFrom;
