/**
 * @internal
 *
 * Give an input string, strictly parses a boolean value.
 *
 * @param value - The boolean string to parse.
 * @returns true for "true", false for "false", otherwise an error is thrown.
 */
export declare const parseBoolean: (value: string) => boolean;
/**
 * @internal
 *
 * Asserts a value is a boolean and returns it.
 * Casts strings and numbers with a warning if there is evidence that they were
 * intended to be booleans.
 *
 * @param value - A value that is expected to be a boolean.
 * @returns The value if it's a boolean, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectBoolean: (value: any) => boolean | undefined;
/**
 * @internal
 *
 * Asserts a value is a number and returns it.
 * Casts strings with a warning if the string is a parseable number.
 * This is to unblock slight API definition/implementation inconsistencies.
 *
 * @param value - A value that is expected to be a number.
 * @returns The value if it's a number, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectNumber: (value: any) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is a 32-bit float and returns it.
 *
 * @param value - A value that is expected to be a 32-bit float.
 * @returns The value if it's a float, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectFloat32: (value: any) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is an integer and returns it.
 *
 * @param value - A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectLong: (value: any) => number | undefined;
/**
 * @internal
 *
 * @deprecated Use expectLong
 */
export declare const expectInt: (value: any) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is a 32-bit integer and returns it.
 *
 * @param value - A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectInt32: (value: any) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is a 16-bit integer and returns it.
 *
 * @param value - A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectShort: (value: any) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is an 8-bit integer and returns it.
 *
 * @param value - A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectByte: (value: any) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is not null or undefined and returns it, or throws an error.
 *
 * @param value - A value that is expected to be defined
 * @param location - The location where we're expecting to find a defined object (optional)
 * @returns The value if it's not undefined, otherwise throws an error
 */
export declare const expectNonNull: <T>(value: T | null | undefined, location?: string) => T;
/**
 * @internal
 *
 * Asserts a value is an JSON-like object and returns it. This is expected to be used
 * with values parsed from JSON (arrays, objects, numbers, strings, booleans).
 *
 * @param value - A value that is expected to be an object
 * @returns The value if it's an object, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectObject: (value: any) => Record<string, any> | undefined;
/**
 * @internal
 *
 * Asserts a value is a string and returns it.
 * Numbers and boolean will be cast to strings with a warning.
 *
 * @param value - A value that is expected to be a string.
 * @returns The value if it's a string, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export declare const expectString: (value: any) => string | undefined;
/**
 * @internal
 *
 * Asserts a value is a JSON-like object with only one non-null/non-undefined key and
 * returns it.
 *
 * @param value - A value that is expected to be an object with exactly one non-null,
 *              non-undefined key.
 * @returns the value if it's a union, undefined if it's null/undefined, otherwise
 *  an error is thrown.
 */
export declare const expectUnion: (value: unknown) => Record<string, any> | undefined;
/**
 * @internal
 *
 * Parses a value into a double. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by the standard
 * parseFloat with one exception: NaN may only be explicitly set as the string
 * "NaN", any implicit Nan values will result in an error being thrown. If any
 * other type is provided, an exception will be thrown.
 *
 * @param value - A number or string representation of a double.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const strictParseDouble: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * @deprecated Use strictParseDouble
 */
export declare const strictParseFloat: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * Parses a value into a float. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by the standard
 * parseFloat with one exception: NaN may only be explicitly set as the string
 * "NaN", any implicit Nan values will result in an error being thrown. If any
 * other type is provided, an exception will be thrown.
 *
 * @param value - A number or string representation of a float.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const strictParseFloat32: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is a number and returns it. If the value is a string
 * representation of a non-numeric number type (NaN, Infinity, -Infinity),
 * the value will be parsed. Any other string value will result in an exception
 * being thrown. Null or undefined will be returned as undefined. Any other
 * type will result in an exception being thrown.
 *
 * @param value - A number or string representation of a non-numeric float.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const limitedParseDouble: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * @deprecated Use limitedParseDouble
 */
export declare const handleFloat: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * @deprecated Use limitedParseDouble
 */
export declare const limitedParseFloat: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * Asserts a value is a 32-bit float and returns it. If the value is a string
 * representation of a non-numeric number type (NaN, Infinity, -Infinity),
 * the value will be parsed. Any other string value will result in an exception
 * being thrown. Null or undefined will be returned as undefined. Any other
 * type will result in an exception being thrown.
 *
 * @param value - A number or string representation of a non-numeric float.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const limitedParseFloat32: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * Parses a value into an integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value - A number or string representation of an integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const strictParseLong: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * @deprecated Use strictParseLong
 */
export declare const strictParseInt: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * Parses a value into a 32-bit integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value - A number or string representation of a 32-bit integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const strictParseInt32: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * Parses a value into a 16-bit integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value - A number or string representation of a 16-bit integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const strictParseShort: (value: string | number) => number | undefined;
/**
 * @internal
 *
 * Parses a value into an 8-bit integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value - A number or string representation of an 8-bit integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export declare const strictParseByte: (value: string | number) => number | undefined;
/**
 * @internal
 */
export declare const logger: {
    warn: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
};
