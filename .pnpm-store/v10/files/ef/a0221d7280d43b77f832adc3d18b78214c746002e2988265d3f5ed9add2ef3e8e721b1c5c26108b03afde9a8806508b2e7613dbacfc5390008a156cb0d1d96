// Copyright 2012 The Obvious Corporation.

/*
 * bits: Bitwise buffer utilities. The utilities here treat a buffer
 * as a little-endian bigint, so the lowest-order bit is bit #0 of
 * `buffer[0]`, and the highest-order bit is bit #7 of
 * `buffer[buffer.length - 1]`.
 */

/*
 * Modules used
 */
"use strict";
/*
 * Exported bindings
 */

/**
 * Extracts the given number of bits from the buffer at the indicated
 * index, returning a simple number as the result. If bits are requested
 * that aren't covered by the buffer, the `defaultBit` is used as their
 * value.
 *
 * The `bitLength` must be no more than 32. The `defaultBit` if not
 * specified is taken to be `0`.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extract = extract;
exports.inject = inject;
exports.getSign = getSign;
exports.highOrder = highOrder;

function extract(buffer, bitIndex, bitLength, defaultBit) {
  if (bitLength < 0 || bitLength > 32) {
    throw new Error("Bad value for bitLength.");
  }

  if (defaultBit === undefined) {
    defaultBit = 0;
  } else if (defaultBit !== 0 && defaultBit !== 1) {
    throw new Error("Bad value for defaultBit.");
  }

  var defaultByte = defaultBit * 0xff;
  var result = 0; // All starts are inclusive. The {endByte, endBit} pair is exclusive, but
  // if endBit !== 0, then endByte is inclusive.

  var lastBit = bitIndex + bitLength;
  var startByte = Math.floor(bitIndex / 8);
  var startBit = bitIndex % 8;
  var endByte = Math.floor(lastBit / 8);
  var endBit = lastBit % 8;

  if (endBit !== 0) {
    // `(1 << endBit) - 1` is the mask of all bits up to but not including
    // the endBit.
    result = get(endByte) & (1 << endBit) - 1;
  }

  while (endByte > startByte) {
    endByte--;
    result = result << 8 | get(endByte);
  }

  result >>>= startBit;
  return result;

  function get(index) {
    var result = buffer[index];
    return result === undefined ? defaultByte : result;
  }
}
/**
 * Injects the given bits into the given buffer at the given index. Any
 * bits in the value beyond the length to set are ignored.
 */


function inject(buffer, bitIndex, bitLength, value) {
  if (bitLength < 0 || bitLength > 32) {
    throw new Error("Bad value for bitLength.");
  }

  var lastByte = Math.floor((bitIndex + bitLength - 1) / 8);

  if (bitIndex < 0 || lastByte >= buffer.length) {
    throw new Error("Index out of range.");
  } // Just keeping it simple, until / unless profiling shows that this
  // is a problem.


  var atByte = Math.floor(bitIndex / 8);
  var atBit = bitIndex % 8;

  while (bitLength > 0) {
    if (value & 1) {
      buffer[atByte] |= 1 << atBit;
    } else {
      buffer[atByte] &= ~(1 << atBit);
    }

    value >>= 1;
    bitLength--;
    atBit = (atBit + 1) % 8;

    if (atBit === 0) {
      atByte++;
    }
  }
}
/**
 * Gets the sign bit of the given buffer.
 */


function getSign(buffer) {
  return buffer[buffer.length - 1] >>> 7;
}
/**
 * Gets the zero-based bit number of the highest-order bit with the
 * given value in the given buffer.
 *
 * If the buffer consists entirely of the other bit value, then this returns
 * `-1`.
 */


function highOrder(bit, buffer) {
  var length = buffer.length;
  var fullyWrongByte = (bit ^ 1) * 0xff; // the other-bit extended to a full byte

  while (length > 0 && buffer[length - 1] === fullyWrongByte) {
    length--;
  }

  if (length === 0) {
    // Degenerate case. The buffer consists entirely of ~bit.
    return -1;
  }

  var byteToCheck = buffer[length - 1];
  var result = length * 8 - 1;

  for (var i = 7; i > 0; i--) {
    if ((byteToCheck >> i & 1) === bit) {
      break;
    }

    result--;
  }

  return result;
}