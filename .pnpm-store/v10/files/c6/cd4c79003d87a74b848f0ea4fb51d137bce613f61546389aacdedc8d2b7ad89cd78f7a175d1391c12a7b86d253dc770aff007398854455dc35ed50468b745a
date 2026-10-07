'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');

var pow = Math.pow;

var EXP_MASK16 = 31; // 2 ** 5 - 1
var SIGNIFICAND_MASK16 = 1023; // 2 ** 10 - 1
var MIN_SUBNORMAL16 = pow(2, -24); // 2 ** -10 * 2 ** -14
var SIGNIFICAND_DENOM16 = 0.0009765625; // 2 ** -10

var unpackFloat16 = function (bytes) {
  var sign = bytes >>> 15;
  var exponent = bytes >>> 10 & EXP_MASK16;
  var significand = bytes & SIGNIFICAND_MASK16;
  if (exponent === EXP_MASK16) return significand === 0 ? sign === 0 ? Infinity : -Infinity : NaN;
  if (exponent === 0) return significand * (sign === 0 ? MIN_SUBNORMAL16 : -MIN_SUBNORMAL16);
  return pow(2, exponent - 15) * (sign === 0 ? 1 + significand * SIGNIFICAND_DENOM16 : -1 - significand * SIGNIFICAND_DENOM16);
};

// eslint-disable-next-line es/no-typed-arrays -- safe
var getUint16 = uncurryThis(DataView.prototype.getUint16);

// `DataView.prototype.getFloat16` method
// https://tc39.es/ecma262/#sec-dataview.prototype.getfloat16
$({ target: 'DataView', proto: true }, {
  getFloat16: function getFloat16(byteOffset /* , littleEndian */) {
    return unpackFloat16(getUint16(this, byteOffset, arguments.length > 1 ? arguments[1] : false));
  }
});
