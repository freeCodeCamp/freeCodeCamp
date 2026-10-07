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
/**
 * Encodes the given value into a base64 (RFC4648) `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
export declare const encodeBase64: (input: Uint8Array | string) => string;
/**
 * Decodes a base64 (RFC4648) encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
export declare const decodeBase64: (str: string) => Either.Either<Uint8Array, DecodeException>;
/**
 * Decodes a base64 (RFC4648) encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
export declare const decodeBase64String: (str: string) => Either.Either<string, DecodeException>;
/**
 * Encodes the given value into a base64 (URL) `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
export declare const encodeBase64Url: (input: Uint8Array | string) => string;
/**
 * Decodes a base64 (URL) encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
export declare const decodeBase64Url: (str: string) => Either.Either<Uint8Array, DecodeException>;
/**
 * Decodes a base64 (URL) encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
export declare const decodeBase64UrlString: (str: string) => Either.Either<string, DecodeException>;
/**
 * Encodes the given value into a hex `string`.
 *
 * @category encoding
 * @since 2.0.0
 */
export declare const encodeHex: (input: Uint8Array | string) => string;
/**
 * Decodes a hex encoded `string` into a `Uint8Array`.
 *
 * @category decoding
 * @since 2.0.0
 */
export declare const decodeHex: (str: string) => Either.Either<Uint8Array, DecodeException>;
/**
 * Decodes a hex encoded `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 2.0.0
 */
export declare const decodeHexString: (str: string) => Either.Either<string, DecodeException>;
/**
 * Encodes a UTF-8 `string` into a URI component `string`.
 *
 * @category encoding
 * @since 3.12.0
 */
export declare const encodeUriComponent: (str: string) => Either.Either<string, EncodeException>;
/**
 * Decodes a URI component `string` into a UTF-8 `string`.
 *
 * @category decoding
 * @since 3.12.0
 */
export declare const decodeUriComponent: (str: string) => Either.Either<string, DecodeException>;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const DecodeExceptionTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type DecodeExceptionTypeId = typeof DecodeExceptionTypeId;
/**
 * Represents a checked exception which occurs when decoding fails.
 *
 * @since 2.0.0
 * @category models
 */
export interface DecodeException {
    readonly _tag: "DecodeException";
    readonly [DecodeExceptionTypeId]: DecodeExceptionTypeId;
    readonly input: string;
    readonly message?: string;
}
/**
 * Creates a checked exception which occurs when decoding fails.
 *
 * @since 2.0.0
 * @category errors
 */
export declare const DecodeException: (input: string, message?: string) => DecodeException;
/**
 * Returns `true` if the specified value is an `DecodeException`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isDecodeException: (u: unknown) => u is DecodeException;
/**
 * @since 3.12.0
 * @category symbols
 */
export declare const EncodeExceptionTypeId: unique symbol;
/**
 * @since 3.12.0
 * @category symbols
 */
export type EncodeExceptionTypeId = typeof EncodeExceptionTypeId;
/**
 * Represents a checked exception which occurs when encoding fails.
 *
 * @since 3.12.0
 * @category models
 */
export interface EncodeException {
    readonly _tag: "EncodeException";
    readonly [EncodeExceptionTypeId]: EncodeExceptionTypeId;
    readonly input: string;
    readonly message?: string;
}
/**
 * Creates a checked exception which occurs when encoding fails.
 *
 * @since 3.12.0
 * @category errors
 */
export declare const EncodeException: (input: string, message?: string) => EncodeException;
/**
 * Returns `true` if the specified value is an `EncodeException`, `false` otherwise.
 *
 * @since 3.12.0
 * @category refinements
 */
export declare const isEncodeException: (u: unknown) => u is EncodeException;
//# sourceMappingURL=Encoding.d.ts.map