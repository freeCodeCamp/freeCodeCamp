"use strict";
let { TextEncoder, TextDecoder } = require("util");
// Handle browserify's lack of support (https://github.com/browserify/node-util/issues/46), which
// is important for the live viewer:
if (!TextEncoder) {
  TextEncoder = global.TextEncoder;
}
if (!TextDecoder) {
  TextDecoder = global.TextDecoder;
}

const utf8Encoder = new TextEncoder();
const utf8Decoder = new TextDecoder("utf-8", { ignoreBOM: true });

function utf8Encode(string) {
  return utf8Encoder.encode(string);
}

function utf8DecodeWithoutBOM(bytes) {
  return utf8Decoder.decode(bytes);
}

module.exports = {
  utf8Encode,
  utf8DecodeWithoutBOM
};
