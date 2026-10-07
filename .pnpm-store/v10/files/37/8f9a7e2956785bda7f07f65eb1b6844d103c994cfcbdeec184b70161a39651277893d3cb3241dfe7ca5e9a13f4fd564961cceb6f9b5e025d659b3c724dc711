type Stringifier = (value: Exclude<unknown, string | number | boolean | null>) => string | undefined;
/**
 * Set a custom stringifier for the normalize function.
 * If this returns a non-empty string, it will be used instead of the default stringification.
 * Return undefined to fall back to the generic behavior.
 */
export declare function setNormalizeStringifier(newStringifier: Stringifier | undefined): void;
/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normalized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
export declare function normalize(input: unknown, depth?: number, maxProperties?: number): any;
/** JSDoc */
export declare function normalizeToSize<T>(object: {
    [key: string]: any;
}, depth?: number, maxSize?: number): T;
/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
export declare function stringifyValue(key: unknown, value: Exclude<unknown, string | number | boolean | null>): string;
/**
 * Normalizes URLs in exceptions and stacktraces to a base path so Sentry can fingerprint
 * across platforms and working directory.
 *
 * @param url The URL to be normalized.
 * @param basePath The application base path.
 * @returns The normalized URL.
 */
export declare function normalizeUrlToBase(url: string, basePath: string): string;
export {};
//# sourceMappingURL=normalize.d.ts.map