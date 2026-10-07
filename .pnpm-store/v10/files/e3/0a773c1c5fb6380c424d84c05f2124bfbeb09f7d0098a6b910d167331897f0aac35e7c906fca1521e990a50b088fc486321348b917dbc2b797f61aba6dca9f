"use strict";
const iconvLite = require("iconv-lite");
const supportedNames = require("./supported-names.json");
const labelsToNames = require("./labels-to-names.json");

const supportedNamesSet = new Set(supportedNames);

// https://encoding.spec.whatwg.org/#concept-encoding-get
exports.labelToName = label => {
  label = String(label).trim().toLowerCase();

  return labelsToNames[label] || null;
};

// https://encoding.spec.whatwg.org/#decode
exports.decode = (uint8Array, fallbackEncodingName) => {
  let encoding = fallbackEncodingName;
  if (!exports.isSupported(encoding)) {
    throw new RangeError(`"${encoding}" is not a supported encoding name`);
  }

  const bomEncoding = exports.getBOMEncoding(uint8Array);
  if (bomEncoding !== null) {
    encoding = bomEncoding;
    // iconv-lite will strip BOMs for us, so no need to do the extra byte removal that the spec does.
    // Note that we won't end up in the x-user-defined case when there's a bomEncoding.
  }

  if (encoding === "x-user-defined") {
    // https://encoding.spec.whatwg.org/#x-user-defined-decoder
    let result = "";
    for (const byte of uint8Array) {
      if (byte <= 0x7F) {
        result += String.fromCodePoint(byte);
      } else {
        result += String.fromCodePoint(0xF780 + byte - 0x80);
      }
    }
    return result;
  }

  return iconvLite.decode(uint8Array, encoding);
};

// https://github.com/whatwg/html/issues/1910#issuecomment-254017369
exports.getBOMEncoding = uint8Array => {
  if (uint8Array[0] === 0xFE && uint8Array[1] === 0xFF) {
    return "UTF-16BE";
  } else if (uint8Array[0] === 0xFF && uint8Array[1] === 0xFE) {
    return "UTF-16LE";
  } else if (uint8Array[0] === 0xEF && uint8Array[1] === 0xBB && uint8Array[2] === 0xBF) {
    return "UTF-8";
  }

  return null;
};

exports.isSupported = name => {
  return supportedNamesSet.has(String(name));
};
