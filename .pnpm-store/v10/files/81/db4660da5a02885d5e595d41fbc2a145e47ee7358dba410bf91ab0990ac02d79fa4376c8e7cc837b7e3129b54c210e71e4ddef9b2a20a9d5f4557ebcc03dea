"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEncodeException = exports.isDecodeException = exports.encodeUriComponent = exports.encodeHex = exports.encodeBase64Url = exports.encodeBase64 = exports.decodeUriComponent = exports.decodeHexString = exports.decodeHex = exports.decodeBase64UrlString = exports.decodeBase64Url = exports.decodeBase64String = exports.decodeBase64 = exports.EncodeExceptionTypeId = exports.EncodeException = exports.DecodeExceptionTypeId = exports.DecodeException = void 0;
var Either = _interopRequireWildcard(require("./Either.js"));
var Base64 = _interopRequireWildcard(require("./internal/encoding/base64.js"));
var Base64Url = _interopRequireWildcard(require("./internal/encoding/base64Url.js"));
var Common = _interopRequireWildcard(require("./internal/encoding/common.js"));
var Hex = _interopRequireWildcard(require("./internal/encoding/hex.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides encoding & decoding functionality for:
 *
 * - base64 (RFC4648)
 * - base64 (URL)
 * - hex
 *
 * @since 2.0.0
 */

/**
 * Encodes the given value into a base64 (RFC4648) `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
const encodeBase64 = input => typeof input === "string" ? Base64.encode(Common.encoder.encode(input)) : Base64.encode(input);
/**
 * Decodes a base64 (RFC4648) encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
exports.encodeBase64 = encodeBase64;
const decodeBase64 = str => Base64.decode(str);
/**
 * Decodes a base64 (RFC4648) encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
exports.decodeBase64 = decodeBase64;
const decodeBase64String = str => Either.map(decodeBase64(str), _ => Common.decoder.decode(_));
/**
 * Encodes the given value into a base64 (URL) `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
exports.decodeBase64String = decodeBase64String;
const encodeBase64Url = input => typeof input === "string" ? Base64Url.encode(Common.encoder.encode(input)) : Base64Url.encode(input);
/**
 * Decodes a base64 (URL) encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
exports.encodeBase64Url = encodeBase64Url;
const decodeBase64Url = str => Base64Url.decode(str);
/**
 * Decodes a base64 (URL) encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
exports.decodeBase64Url = decodeBase64Url;
const decodeBase64UrlString = str => Either.map(decodeBase64Url(str), _ => Common.decoder.decode(_));
/**
 * Encodes the given value into a hex `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
exports.decodeBase64UrlString = decodeBase64UrlString;
const encodeHex = input => typeof input === "string" ? Hex.encode(Common.encoder.encode(input)) : Hex.encode(input);
/**
 * Decodes a hex encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
exports.encodeHex = encodeHex;
const decodeHex = str => Hex.decode(str);
/**
 * Decodes a hex encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
exports.decodeHex = decodeHex;
const decodeHexString = str => Either.map(decodeHex(str), _ => Common.decoder.decode(_));
/**
 * Encodes a UTF-8 `string` into a URI component `string`.
 *
 * @category encoding
 * @since 3.12.0
 */
exports.decodeHexString = decodeHexString;
const encodeUriComponent = str => Either.try({
  try: () => encodeURIComponent(str),
  catch: e => EncodeException(str, e instanceof Error ? e.message : "Invalid input")
});
/**
 * Decodes a URI component `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 3.12.0
 */
exports.encodeUriComponent = encodeUriComponent;
const decodeUriComponent = str => Either.try({
  try: () => decodeURIComponent(str),
  catch: e => DecodeException(str, e instanceof Error ? e.message : "Invalid input")
});
/**
 * @since 2.0.0
 * @category symbols
 */
exports.decodeUriComponent = decodeUriComponent;
const DecodeExceptionTypeId = exports.DecodeExceptionTypeId = Common.DecodeExceptionTypeId;
/**
 * Creates a checked exception which occurs when decoding fails.
 *
 * @since 2.0.0
 * @category errors
 */
const DecodeException = exports.DecodeException = Common.DecodeException;
/**
 * Returns `true` if the specified value is an `DecodeException`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isDecodeException = exports.isDecodeException = Common.isDecodeException;
/**
 * @since 3.12.0
 * @category symbols
 */
const EncodeExceptionTypeId = exports.EncodeExceptionTypeId = Common.EncodeExceptionTypeId;
/**
 * Creates a checked exception which occurs when encoding fails.
 *
 * @since 3.12.0
 * @category errors
 */
const EncodeException = exports.EncodeException = Common.EncodeException;
/**
 * Returns `true` if the specified value is an `EncodeException`, `false` otherwise.
 *
 * @since 3.12.0
 * @category refinements
 */
const isEncodeException = exports.isEncodeException = Common.isEncodeException;
//# sourceMappingURL=Encoding.js.map