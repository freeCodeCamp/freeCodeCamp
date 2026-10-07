/**
 * This module provides encoding & decoding functionality for:
 *
 * - base64 (RFC4648)
 * - base64 (URL)
 * - hex
 *
 * @since 2.0.0
 */
import * as Either from "./Either.js";
import * as Base64 from "./internal/encoding/base64.js";
import * as Base64Url from "./internal/encoding/base64Url.js";
import * as Common from "./internal/encoding/common.js";
import * as Hex from "./internal/encoding/hex.js";
/**
 * Encodes the given value into a base64 (RFC4648) `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
export const encodeBase64 = input => typeof input === "string" ? Base64.encode(Common.encoder.encode(input)) : Base64.encode(input);
/**
 * Decodes a base64 (RFC4648) encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
export const decodeBase64 = str => Base64.decode(str);
/**
 * Decodes a base64 (RFC4648) encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
export const decodeBase64String = str => Either.map(decodeBase64(str), _ => Common.decoder.decode(_));
/**
 * Encodes the given value into a base64 (URL) `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
export const encodeBase64Url = input => typeof input === "string" ? Base64Url.encode(Common.encoder.encode(input)) : Base64Url.encode(input);
/**
 * Decodes a base64 (URL) encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
export const decodeBase64Url = str => Base64Url.decode(str);
/**
 * Decodes a base64 (URL) encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
export const decodeBase64UrlString = str => Either.map(decodeBase64Url(str), _ => Common.decoder.decode(_));
/**
 * Encodes the given value into a hex `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
export const encodeHex = input => typeof input === "string" ? Hex.encode(Common.encoder.encode(input)) : Hex.encode(input);
/**
 * Decodes a hex encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
export const decodeHex = str => Hex.decode(str);
/**
 * Decodes a hex encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
export const decodeHexString = str => Either.map(decodeHex(str), _ => Common.decoder.decode(_));
/**
 * Encodes a UTF-8 `string` into a URI component `string`.
 *
 * @category encoding
 * @since 3.12.0
 */
export const encodeUriComponent = str => Either.try({
  try: () => encodeURIComponent(str),
  catch: e => EncodeException(str, e instanceof Error ? e.message : "Invalid input")
});
/**
 * Decodes a URI component `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 3.12.0
 */
export const decodeUriComponent = str => Either.try({
  try: () => decodeURIComponent(str),
  catch: e => DecodeException(str, e instanceof Error ? e.message : "Invalid input")
});
/**
 * @since 2.0.0
 * @category symbols
 */
export const DecodeExceptionTypeId = Common.DecodeExceptionTypeId;
/**
 * Creates a checked exception which occurs when decoding fails.
 *
 * @since 2.0.0
 * @category errors
 */
export const DecodeException = Common.DecodeException;
/**
 * Returns `true` if the specified value is an `DecodeException`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isDecodeException = Common.isDecodeException;
/**
 * @since 3.12.0
 * @category symbols
 */
export const EncodeExceptionTypeId = Common.EncodeExceptionTypeId;
/**
 * Creates a checked exception which occurs when encoding fails.
 *
 * @since 3.12.0
 * @category errors
 */
export const EncodeException = Common.EncodeException;
/**
 * Returns `true` if the specified value is an `EncodeException`, `false` otherwise.
 *
 * @since 3.12.0
 * @category refinements
 */
export const isEncodeException = Common.isEncodeException;
//# sourceMappingURL=Encoding.js.map