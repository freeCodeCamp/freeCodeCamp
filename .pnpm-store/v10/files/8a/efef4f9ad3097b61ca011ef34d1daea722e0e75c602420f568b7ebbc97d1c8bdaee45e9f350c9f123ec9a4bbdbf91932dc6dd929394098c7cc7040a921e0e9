import { nodeJsByteUtils } from './node_byte_utils';
import { webByteUtils } from './web_byte_utils';

/**
 * @public
 * @experimental
 *
 * A collection of functions that help work with data in a Uint8Array.
 * ByteUtils is configured at load time to use Node.js or Web based APIs for the internal implementations.
 */
export type ByteUtils = {
  /** Checks if the given value is a Uint8Array. */
  isUint8Array: (value: unknown) => value is Uint8Array;
  /** Transforms the input to an instance of Buffer if running on node, otherwise Uint8Array */
  toLocalBufferType: (buffer: Uint8Array | ArrayBufferView | ArrayBuffer) => Uint8Array;
  /** Create empty space of size */
  allocate: (size: number) => Uint8Array;
  /** Create empty space of size, use pooled memory when available */
  allocateUnsafe: (size: number) => Uint8Array;
  /** Compare 2 Uint8Arrays lexicographically */
  compare: (buffer1: Uint8Array, buffer2: Uint8Array) => -1 | 0 | 1;
  /** Concatenating all the Uint8Arrays in new Uint8Array. */
  concat: (list: Uint8Array[]) => Uint8Array;
  /** Copy bytes from source Uint8Array to target Uint8Array */
  copy: (
    source: Uint8Array,
    target: Uint8Array,
    targetStart?: number,
    sourceStart?: number,
    sourceEnd?: number
  ) => number;
  /** Check if two Uint8Arrays are deep equal */
  equals: (a: Uint8Array, b: Uint8Array) => boolean;
  /** Create a Uint8Array from an array of numbers */
  fromNumberArray: (array: number[]) => Uint8Array;
  /** Create a Uint8Array from a base64 string */
  fromBase64: (base64: string) => Uint8Array;
  /** Create a Uint8Array from a UTF8 string */
  fromUTF8: (utf8: string) => Uint8Array;
  /** Create a base64 string from bytes */
  toBase64: (buffer: Uint8Array) => string;
  /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
  fromISO88591: (codePoints: string) => Uint8Array;
  /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
  toISO88591: (buffer: Uint8Array) => string;
  /** Create a Uint8Array from a hex string */
  fromHex: (hex: string) => Uint8Array;
  /** Create a lowercase hex string from bytes */
  toHex: (buffer: Uint8Array) => string;
  /** Create a string from utf8 code units, fatal=true will throw an error if UTF-8 bytes are invalid, fatal=false will insert replacement characters */
  toUTF8: (buffer: Uint8Array, start: number, end: number, fatal: boolean) => string;
  /** Get the utf8 code unit count from a string if it were to be transformed to utf8 */
  utf8ByteLength: (input: string) => number;
  /** Encode UTF8 bytes generated from `source` string into `destination` at byteOffset. Returns the number of bytes encoded. */
  encodeUTF8Into: (destination: Uint8Array, source: string, byteOffset: number) => number;
  /** Generate a Uint8Array filled with random bytes with byteLength */
  randomBytes: (byteLength: number) => Uint8Array;
  /** Interprets `buffer` as an array of 32-bit values and swaps the byte order in-place. */
  swap32: (buffer: Uint8Array) => Uint8Array;
};

declare const Buffer: { new (): unknown; prototype?: { _isBuffer?: boolean } } | undefined;

/**
 * Check that a global Buffer exists that is a function and
 * does not have a '_isBuffer' property defined on the prototype
 * (this is to prevent using the npm buffer)
 */
const hasGlobalBuffer = typeof Buffer === 'function' && Buffer.prototype?._isBuffer !== true;

/**
 * This is the only ByteUtils that should be used across the rest of the BSON library.
 *
 * The type annotation is important here, it asserts that each of the platform specific
 * utils implementations are compatible with the common one.
 *
 * @public
 * @experimental
 */
export const ByteUtils: ByteUtils = hasGlobalBuffer ? nodeJsByteUtils : webByteUtils;
