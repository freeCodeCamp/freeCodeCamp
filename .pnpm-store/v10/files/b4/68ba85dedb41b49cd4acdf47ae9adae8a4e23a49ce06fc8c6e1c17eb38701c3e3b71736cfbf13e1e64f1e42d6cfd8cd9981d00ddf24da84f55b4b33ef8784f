"use strict";

// https://infra.spec.whatwg.org/#parse-json-from-bytes
exports.parseJSONFromBytes = bytes => {
  // https://encoding.spec.whatwg.org/#utf-8-decode
  if (bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF) {
    bytes = bytes.subarray(3);
  }
  const jsonText = bytes.toString("utf-8");

  return JSON.parse(jsonText);
};
