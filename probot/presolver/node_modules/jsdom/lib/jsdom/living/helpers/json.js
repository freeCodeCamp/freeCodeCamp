"use strict";

// https://infra.spec.whatwg.org/#parse-json-from-bytes
exports.parseJSONFromBytes = bytes => {
  const jsonText = bytes.toString("utf-8");

  return JSON.parse(jsonText);
};
