"use strict";

exports.__esModule = true;
exports.base64URLDecode = base64URLDecode;
exports.base64URLEncode = base64URLEncode;
function base64URLEncode(str) {
  return Buffer.from(str).toString(`base64`);
}
function base64URLDecode(str) {
  return Buffer.from(str, `base64`).toString();
}