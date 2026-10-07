// Copyright 2012 The Obvious Corporation.

/*
 * leb: LEB128 utilities.
 */

/*
 * Modules used
 */
"use strict";

import Long from "@xtuc/long";
import * as bits from "./bits";
import * as bufs from "./bufs";
/*
 * Module variables
 */

/** The minimum possible 32-bit signed int. */

var MIN_INT32 = -0x80000000;
/** The maximum possible 32-bit signed int. */

var MAX_INT32 = 0x7fffffff;
/** The maximum possible 32-bit unsigned int. */

var MAX_UINT32 = 0xffffffff;
/** The minimum possible 64-bit signed int. */
// const MIN_INT64 = -0x8000000000000000;

/**
 * The maximum possible 64-bit signed int that is representable as a
 * JavaScript number.
 */
// const MAX_INT64 = 0x7ffffffffffffc00;

/**
 * The maximum possible 64-bit unsigned int that is representable as a
 * JavaScript number.
 */
// const MAX_UINT64 = 0xfffffffffffff800;

/*
 * Helper functions
 */

/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as a signed value. The buffer is
 * taken to represent a signed number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order non-sign-matching bit, plus two. For example:
 *
 *   11111011 01110101
 *   high          low
 *
 * The sign bit here is 1 (that is, it's a negative number). The highest
 * bit number that doesn't match the sign is bit #10 (where the lowest-order
 * bit is bit #0). So, we have to encode at least 12 bits total.
 *
 * As a special degenerate case, the numbers 0 and -1 each require just one bit.
 */

function signedBitCount(buffer) {
  return bits.highOrder(bits.getSign(buffer) ^ 1, buffer) + 2;
}
/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as an unsigned value. The buffer is
 * taken to represent an unsigned number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order 1 bit, plus one. For example:
 *
 *   00011000 01010011
 *   high          low
 *
 * The highest-order 1 bit here is bit #12 (where the lowest-order bit
 * is bit #0). So, we have to encode at least 13 bits total.
 *
 * As a special degenerate case, the number 0 requires 1 bit.
 */


function unsignedBitCount(buffer) {
  var result = bits.highOrder(1, buffer) + 1;
  return result ? result : 1;
}
/**
 * Common encoder for both signed and unsigned ints. This takes a
 * bigint-ish buffer, returning an LEB128-encoded buffer.
 */


function encodeBufferCommon(buffer, signed) {
  var signBit;
  var bitCount;

  if (signed) {
    signBit = bits.getSign(buffer);
    bitCount = signedBitCount(buffer);
  } else {
    signBit = 0;
    bitCount = unsignedBitCount(buffer);
  }

  var byteCount = Math.ceil(bitCount / 7);
  var result = bufs.alloc(byteCount);

  for (var i = 0; i < byteCount; i++) {
    var payload = bits.extract(buffer, i * 7, 7, signBit);
    result[i] = payload | 0x80;
  } // Mask off the top bit of the last byte, to indicate the end of the
  // encoding.


  result[byteCount - 1] &= 0x7f;
  return result;
}
/**
 * Gets the byte-length of the value encoded in the given buffer at
 * the given index.
 */


function encodedLength(encodedBuffer, index) {
  var result = 0;

  while (encodedBuffer[index + result] >= 0x80) {
    result++;
  }

  result++; // to account for the last byte

  if (index + result > encodedBuffer.length) {// FIXME(sven): seems to cause false positives
    // throw new Error("integer representation too long");
  }

  return result;
}
/**
 * Common decoder for both signed and unsigned ints. This takes an
 * LEB128-encoded buffer, returning a bigint-ish buffer.
 */


function decodeBufferCommon(encodedBuffer, index, signed) {
  index = index === undefined ? 0 : index;
  var length = encodedLength(encodedBuffer, index);
  var bitLength = length * 7;
  var byteLength = Math.ceil(bitLength / 8);
  var result = bufs.alloc(byteLength);
  var outIndex = 0;

  while (length > 0) {
    bits.inject(result, outIndex, 7, encodedBuffer[index]);
    outIndex += 7;
    index++;
    length--;
  }

  var signBit;
  var signByte;

  if (signed) {
    // Sign-extend the last byte.
    var lastByte = result[byteLength - 1];
    var endBit = outIndex % 8;

    if (endBit !== 0) {
      var shift = 32 - endBit; // 32 because JS bit ops work on 32-bit ints.

      lastByte = result[byteLength - 1] = lastByte << shift >> shift & 0xff;
    }

    signBit = lastByte >> 7;
    signByte = signBit * 0xff;
  } else {
    signBit = 0;
    signByte = 0;
  } // Slice off any superfluous bytes, that is, ones that add no meaningful
  // bits (because the value would be the same if they were removed).


  while (byteLength > 1 && result[byteLength - 1] === signByte && (!signed || result[byteLength - 2] >> 7 === signBit)) {
    byteLength--;
  }

  result = bufs.resize(result, byteLength);
  return {
    value: result,
    nextIndex: index
  };
}
/*
 * Exported bindings
 */


function encodeIntBuffer(buffer) {
  return encodeBufferCommon(buffer, true);
}

function decodeIntBuffer(encodedBuffer, index) {
  return decodeBufferCommon(encodedBuffer, index, true);
}

function encodeInt32(num) {
  var buf = new Uint8Array(4);
  buf[0] = num & 0xff;
  buf[1] = num >> 8 & 0xff;
  buf[2] = num >> 16 & 0xff;
  buf[3] = num >> 24 & 0xff;
  var result = encodeIntBuffer(buf);
  return result;
}

function decodeInt32(encodedBuffer, index) {
  var result = decodeIntBuffer(encodedBuffer, index);
  var parsed = bufs.readInt(result.value);
  var value = parsed.value;
  bufs.free(result.value);

  if (value < MIN_INT32 || value > MAX_INT32) {
    throw new Error("integer too large");
  }

  return {
    value: value,
    nextIndex: result.nextIndex
  };
}

function encodeInt64(num) {
  var buf = bufs.alloc(8);
  bufs.writeInt64(num, buf);
  var result = encodeIntBuffer(buf);
  bufs.free(buf);
  return result;
}

function decodeInt64(encodedBuffer, index) {
  var result = decodeIntBuffer(encodedBuffer, index); // sign-extend if necessary

  var length = result.value.length;

  if (result.value[length - 1] >> 7) {
    result.value = bufs.resize(result.value, 8);
    result.value.fill(255, length);
  }

  var value = Long.fromBytesLE(result.value, false);
  bufs.free(result.value);
  return {
    value: value,
    nextIndex: result.nextIndex,
    lossy: false
  };
}

function encodeUIntBuffer(buffer) {
  return encodeBufferCommon(buffer, false);
}

function decodeUIntBuffer(encodedBuffer, index) {
  return decodeBufferCommon(encodedBuffer, index, false);
}

function encodeUInt32(num) {
  var buf = new Uint8Array(4);
  buf[0] = num & 0xff;
  buf[1] = num >> 8 & 0xff;
  buf[2] = num >> 16 & 0xff;
  buf[3] = num >> 24 & 0xff;
  var result = encodeUIntBuffer(buf);
  return result;
}

function decodeUInt32(encodedBuffer, index) {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var parsed = bufs.readUInt(result.value);
  var value = parsed.value;
  bufs.free(result.value);

  if (value > MAX_UINT32) {
    throw new Error("integer too large");
  }

  return {
    value: value,
    nextIndex: result.nextIndex
  };
}

function encodeUInt64(num) {
  var buf = bufs.alloc(8);
  bufs.writeUInt64(num, buf);
  var result = encodeUIntBuffer(buf);
  bufs.free(buf);
  return result;
}

function decodeUInt64(encodedBuffer, index) {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var value = Long.fromBytesLE(result.value, true);
  bufs.free(result.value);
  return {
    value: value,
    nextIndex: result.nextIndex,
    lossy: false
  };
}

export default {
  decodeInt32: decodeInt32,
  decodeInt64: decodeInt64,
  decodeIntBuffer: decodeIntBuffer,
  decodeUInt32: decodeUInt32,
  decodeUInt64: decodeUInt64,
  decodeUIntBuffer: decodeUIntBuffer,
  encodeInt32: encodeInt32,
  encodeInt64: encodeInt64,
  encodeIntBuffer: encodeIntBuffer,
  encodeUInt32: encodeUInt32,
  encodeUInt64: encodeUInt64,
  encodeUIntBuffer: encodeUIntBuffer
};