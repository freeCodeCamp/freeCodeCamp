"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromBitmap = fromBitmap;
exports.hashFragment = hashFragment;
exports.popcount = popcount;
exports.toBitmap = toBitmap;
var _config = require("./config.js");
/**
 * Hamming weight.
 *
 * Taken from: http://jsperf.com/hamming-weight
 *
 * @internal
 */
function popcount(x) {
  x -= x >> 1 & 0x55555555;
  x = (x & 0x33333333) + (x >> 2 & 0x33333333);
  x = x + (x >> 4) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}
/** @internal */
function hashFragment(shift, h) {
  return h >>> shift & _config.MASK;
}
/** @internal */
function toBitmap(x) {
  return 1 << x;
}
/** @internal */
function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
}
//# sourceMappingURL=bitwise.js.map