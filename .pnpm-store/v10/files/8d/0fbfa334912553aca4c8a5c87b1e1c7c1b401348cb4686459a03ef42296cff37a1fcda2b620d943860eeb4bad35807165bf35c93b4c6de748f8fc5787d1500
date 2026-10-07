"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parse;

function parse(input) {
  input = input.toUpperCase();
  var splitIndex = input.indexOf("P");
  var mantissa, exponent;

  if (splitIndex !== -1) {
    mantissa = input.substring(0, splitIndex);
    exponent = parseInt(input.substring(splitIndex + 1));
  } else {
    mantissa = input;
    exponent = 0;
  }

  var dotIndex = mantissa.indexOf(".");

  if (dotIndex !== -1) {
    var integerPart = parseInt(mantissa.substring(0, dotIndex), 16);
    var sign = Math.sign(integerPart);
    integerPart = sign * integerPart;
    var fractionLength = mantissa.length - dotIndex - 1;
    var fractionalPart = parseInt(mantissa.substring(dotIndex + 1), 16);
    var fraction = fractionLength > 0 ? fractionalPart / Math.pow(16, fractionLength) : 0;

    if (sign === 0) {
      if (fraction === 0) {
        mantissa = sign;
      } else {
        if (Object.is(sign, -0)) {
          mantissa = -fraction;
        } else {
          mantissa = fraction;
        }
      }
    } else {
      mantissa = sign * (integerPart + fraction);
    }
  } else {
    mantissa = parseInt(mantissa, 16);
  }

  return mantissa * (splitIndex !== -1 ? Math.pow(2, exponent) : 1);
}