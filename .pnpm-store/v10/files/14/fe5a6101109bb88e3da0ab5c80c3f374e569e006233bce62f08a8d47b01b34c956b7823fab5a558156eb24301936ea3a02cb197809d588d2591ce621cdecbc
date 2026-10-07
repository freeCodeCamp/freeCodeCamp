/**
 * Converts a JS string from its native UCS-2/UTF-16 representation into a
 * Uint8Array of the bytes used to represent the equivalent characters in UTF-8.
 *
 * Cribbed from the `goog.crypt.stringToUtf8ByteArray` function in the Google
 * Closure library, though updated to use typed arrays.
 */
export declare const fromUtf8: (input: string) => Uint8Array;
/**
 * Converts a typed array of bytes containing UTF-8 data into a native JS
 * string.
 *
 * Partly cribbed from the `goog.crypt.utf8ByteArrayToString` function in the
 * Google Closure library, though updated to use typed arrays and to better
 * handle astral plane code points.
 */
export declare const toUtf8: (input: Uint8Array) => string;
