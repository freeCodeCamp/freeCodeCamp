"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeF32 = encodeF32;
exports.encodeF64 = encodeF64;
exports.decodeF32 = decodeF32;
exports.decodeF64 = decodeF64;
exports.DOUBLE_PRECISION_MANTISSA = exports.SINGLE_PRECISION_MANTISSA = exports.NUMBER_OF_BYTE_F64 = exports.NUMBER_OF_BYTE_F32 = void 0;

var _ieee = require("@xtuc/ieee754");

/**
 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
 * n = 32/8
 */
var NUMBER_OF_BYTE_F32 = 4;
/**
 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
 * n = 64/8
 */

exports.NUMBER_OF_BYTE_F32 = NUMBER_OF_BYTE_F32;
var NUMBER_OF_BYTE_F64 = 8;
exports.NUMBER_OF_BYTE_F64 = NUMBER_OF_BYTE_F64;
var SINGLE_PRECISION_MANTISSA = 23;
exports.SINGLE_PRECISION_MANTISSA = SINGLE_PRECISION_MANTISSA;
var DOUBLE_PRECISION_MANTISSA = 52;
exports.DOUBLE_PRECISION_MANTISSA = DOUBLE_PRECISION_MANTISSA;

function encodeF32(v) {
  var buffer = [];
  (0, _ieee.write)(buffer, v, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
  return buffer;
}

function encodeF64(v) {
  var buffer = [];
  (0, _ieee.write)(buffer, v, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
  return buffer;
}

function decodeF32(bytes) {
  var buffer = new Uint8Array(bytes);
  return (0, _ieee.read)(buffer, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
}

function decodeF64(bytes) {
  var buffer = new Uint8Array(bytes);
  return (0, _ieee.read)(buffer, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
}