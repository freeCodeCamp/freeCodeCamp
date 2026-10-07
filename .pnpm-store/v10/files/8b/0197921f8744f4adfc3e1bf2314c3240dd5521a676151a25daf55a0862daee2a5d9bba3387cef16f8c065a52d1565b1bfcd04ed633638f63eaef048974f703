/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License.
 *  REQUIREMENT: This definition is dependent on the @types/node definition.
 *  Install with `npm install @types/node --save-dev`
 *-------------------------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------
 * This file provides detailed typings for the public API of iconv-lite
 *-------------------------------------------------------------------------------------------- */

import type Stream = require("stream")
import type { Encoding } from "../types/encodings"

declare namespace iconv {
  export interface DecodeOptions {
    /**
     * Strip the Byte Order Mark (BOM) from the input,
     * when decoding, if the codec is BOM-aware. @default true
     */
    stripBOM?: boolean;
    /** Override the default endianness for `UTF-16` and `UTF-32` decodings. */
    defaultEncoding?: "utf16be" | "utf32be";
  }

  export interface EncodeOptions {
    /**
     * Add a Byte Order Mark (BOM) to the output, when encoding,
     * if the codec is BOM-aware. @default false
     */
    addBOM?: boolean;
    /** Override the default endianness for `UTF-32` encoding. */
    defaultEncoding?: "utf32be";
  }

  export interface EncoderStream {
    write(str: string): Buffer;
    end(): Buffer | undefined;
  }

  export interface DecoderStream {
    write(buf: Buffer): string;
    end(): string | undefined;
  }

  export interface Codec {
    encoder: new (options?: EncodeOptions, codec?: Codec) => EncoderStream;
    decoder: new (options?: DecodeOptions, codec?: Codec) => DecoderStream;
    bomAware?: boolean;
    [key: string]: any;
  }

  /** Encodes a `string` into a `Buffer`, using the provided `encoding`. */
  export function encode (content: string, encoding: Encoding, options?: EncodeOptions): Buffer

  /** Decodes a `Buffer` into a `string`, using the provided `encoding`. */
  export function decode (buffer: Buffer | Uint8Array, encoding: Encoding, options?: DecodeOptions): string

  /** Checks if a given encoding is supported by `iconv-lite`. */
  export function encodingExists (encoding: string): encoding is Encoding

  /** Legacy alias for {@link iconv.encode}. */
  export const toEncoding: typeof iconv.encode

  /** Legacy alias for {@link iconv.decode}. */
  export const fromEncoding: typeof iconv.decode

  /** Creates a stream that decodes binary data from a given `encoding` into strings. */
  export function decodeStream (encoding: Encoding, options?: DecodeOptions): NodeJS.ReadWriteStream

  /** Creates a stream that encodes strings into binary data in a given `encoding`. */
  export function encodeStream (encoding: Encoding, options?: EncodeOptions): NodeJS.ReadWriteStream

  /**
   * Explicitly enable Streaming API in browser environments by passing in:
   * ```js
   * require('stream')
   * ```
   * @example iconv.enableStreamingAPI(require('stream'));
   */
  export function enableStreamingAPI (stream_module: { Transform: typeof Stream.Transform }): void

  /** Creates and returns a low-level encoder stream. */
  export function getEncoder (encoding: Encoding, options?: EncodeOptions): EncoderStream

  /** Creates and returns a low-level decoder stream. */
  export function getDecoder (encoding: Encoding, options?: DecodeOptions): DecoderStream

  /**
   * Returns a codec object for the given `encoding`.
   * @throws If the `encoding` is not recognized.
   */
  export function getCodec (encoding: Encoding): Codec

  /** Strips all non-alphanumeric characters and appended year from `encoding`. */
  export function _canonicalizeEncoding (encoding: Encoding): string

  /** A cache of all loaded encoding definitions. */
  export let encodings: Record<
    Encoding,
    | string
    | {
      type: string;
      [key: string]: any;
    }
  > | null

  /** A cache of initialized codec objects. */
  export let _codecDataCache: Record<string, Codec>

  /** The character used for untranslatable `Unicode` characters. @default "�" */
  export let defaultCharUnicode: string

  /** The character used for untranslatable `single-byte` characters. @default "?" */
  export let defaultCharSingleByte: string

  /**
   * Skip deprecation warning when strings are used instead of Buffers during decoding.
   * Note: {@link iconv.decode} converts the string to Buffer regardless.
   */
  export let skipDecodeWarning: boolean

  /** @readonly Whether or not, Streaming API is enabled. */
  export const supportsStreams: boolean

  export type { iconv as Iconv, Encoding }
}

export = iconv
