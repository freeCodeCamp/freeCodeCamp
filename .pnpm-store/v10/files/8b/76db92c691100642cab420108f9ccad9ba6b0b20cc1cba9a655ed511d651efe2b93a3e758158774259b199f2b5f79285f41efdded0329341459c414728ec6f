"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEncodeException = exports.isDecodeException = exports.encoder = exports.decoder = exports.EncodeExceptionTypeId = exports.EncodeException = exports.DecodeExceptionTypeId = exports.DecodeException = void 0;
var _Predicate = require("../../Predicate.js");
/** @internal */
const DecodeExceptionTypeId = exports.DecodeExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Encoding/errors/Decode");
/** @internal */
const DecodeException = (input, message) => {
  const out = {
    _tag: "DecodeException",
    [DecodeExceptionTypeId]: DecodeExceptionTypeId,
    input
  };
  if ((0, _Predicate.isString)(message)) {
    out.message = message;
  }
  return out;
};
/** @internal */
exports.DecodeException = DecodeException;
const isDecodeException = u => (0, _Predicate.hasProperty)(u, DecodeExceptionTypeId);
/** @internal */
exports.isDecodeException = isDecodeException;
const EncodeExceptionTypeId = exports.EncodeExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Encoding/errors/Encode");
/** @internal */
const EncodeException = (input, message) => {
  const out = {
    _tag: "EncodeException",
    [EncodeExceptionTypeId]: EncodeExceptionTypeId,
    input
  };
  if ((0, _Predicate.isString)(message)) {
    out.message = message;
  }
  return out;
};
/** @internal */
exports.EncodeException = EncodeException;
const isEncodeException = u => (0, _Predicate.hasProperty)(u, EncodeExceptionTypeId);
/** @interal */
exports.isEncodeException = isEncodeException;
const encoder = exports.encoder = /*#__PURE__*/new TextEncoder();
/** @interal */
const decoder = exports.decoder = /*#__PURE__*/new TextDecoder();
//# sourceMappingURL=common.js.map