"use strict";

const baseEncodeTables = {
  26: "abcdefghijklmnopqrstuvwxyz",
  32: "123456789abcdefghjkmnpqrstuvwxyz", // no 0lio
  36: "0123456789abcdefghijklmnopqrstuvwxyz",
  49: "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", // no lIO
  52: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", // no 0lIO
  62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  64: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
};

/**
 * @param {Uint32Array} uint32Array Treated as a long base-0x100000000 number, little endian
 * @param {number} divisor The divisor
 * @return {number} Modulo (remainder) of the division
 */
function divmod32(uint32Array, divisor) {
  let carry = 0;
  for (let i = uint32Array.length - 1; i >= 0; i--) {
    const value = carry * 0x100000000 + uint32Array[i];
    carry = value % divisor;
    uint32Array[i] = Math.floor(value / divisor);
  }
  return carry;
}

function encodeBufferToBase(buffer, base, length) {
  const encodeTable = baseEncodeTables[base];

  if (!encodeTable) {
    throw new Error("Unknown encoding base" + base);
  }

  // Input bits are only enough to generate this many characters
  const limit = Math.ceil((buffer.length * 8) / Math.log2(base));
  length = Math.min(length, limit);

  // Most of the crypto digests (if not all) has length a multiple of 4 bytes.
  // Fewer numbers in the array means faster math.
  const uint32Array = new Uint32Array(Math.ceil(buffer.length / 4));

  // Make sure the input buffer data is copied and is not mutated by reference.
  // divmod32() would corrupt the BulkUpdateDecorator cache otherwise.
  buffer.copy(Buffer.from(uint32Array.buffer));

  let output = "";

  for (let i = 0; i < length; i++) {
    output = encodeTable[divmod32(uint32Array, base)] + output;
  }

  return output;
}

let crypto = undefined;
let createXXHash64 = undefined;
let createMd4 = undefined;
let BatchedHash = undefined;
let BulkUpdateDecorator = undefined;

function getHashDigest(buffer, algorithm, digestType, maxLength) {
  algorithm = algorithm || "xxhash64";
  maxLength = maxLength || 9999;

  let hash;

  if (algorithm === "xxhash64") {
    if (createXXHash64 === undefined) {
      createXXHash64 = require("./hash/xxhash64");

      if (BatchedHash === undefined) {
        BatchedHash = require("./hash/BatchedHash");
      }
    }

    hash = new BatchedHash(createXXHash64());
  } else if (algorithm === "md4") {
    if (createMd4 === undefined) {
      createMd4 = require("./hash/md4");

      if (BatchedHash === undefined) {
        BatchedHash = require("./hash/BatchedHash");
      }
    }

    hash = new BatchedHash(createMd4());
  } else if (algorithm === "native-md4") {
    if (typeof crypto === "undefined") {
      crypto = require("crypto");

      if (BulkUpdateDecorator === undefined) {
        BulkUpdateDecorator = require("./hash/BulkUpdateDecorator");
      }
    }

    hash = new BulkUpdateDecorator(() => crypto.createHash("md4"), "md4");
  } else {
    if (typeof crypto === "undefined") {
      crypto = require("crypto");

      if (BulkUpdateDecorator === undefined) {
        BulkUpdateDecorator = require("./hash/BulkUpdateDecorator");
      }
    }

    hash = new BulkUpdateDecorator(
      () => crypto.createHash(algorithm),
      algorithm
    );
  }

  hash.update(buffer);

  if (
    digestType === "base26" ||
    digestType === "base32" ||
    digestType === "base36" ||
    digestType === "base49" ||
    digestType === "base52" ||
    digestType === "base58" ||
    digestType === "base62" ||
    digestType === "base64safe"
  ) {
    return encodeBufferToBase(
      hash.digest(),
      digestType === "base64safe" ? 64 : digestType.substr(4),
      maxLength
    );
  }

  return hash.digest(digestType || "hex").substr(0, maxLength);
}

module.exports = getHashDigest;
