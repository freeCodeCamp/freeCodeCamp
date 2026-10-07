import { F as FormatOptions } from './shared/confbox.B202Uz6F.mjs';

/**
 * Converts a [JSON5](https://json5.org/) string into an object.
 *
 * @template T The type of the return value.
 * @param text The string to parse as JSON5.
 * @param options Parsing options.
 * @returns The JavaScript value converted from the JSON5 string.
 */
declare function parseJSON5<T = unknown>(text: string, options?: JSON5ParseOptions): T;
/**
 * Converts a JavaScript value to a [JSON5](https://json5.org/) string.
 *
 * @param value
 * @param options
 * @returns The JSON string converted from the JavaScript value.
 */
declare function stringifyJSON5(value: any, options?: JSON5StringifyOptions): string;
interface JSON5ParseOptions extends FormatOptions {
    /**
     * A function that alters the behavior of the parsing process, or an array of
     * String and Number objects that serve as a allowlist for selecting/filtering
     * the properties of the value object to be included in the resulting
     * JavaScript object. If this value is null or not provided, all properties of
     * the object are included in the resulting JavaScript object.
     */
    reviver?: (this: any, key: string, value: any) => any;
}
interface JSON5StringifyOptions extends FormatOptions {
    /**
     * A function that alters the behavior of the stringification process, or an
     * array of String and Number objects that serve as a allowlist for
     * selecting/filtering the properties of the value object to be included in
     * the JSON5 string. If this value is null or not provided, all properties
     * of the object are included in the resulting JSON5 string.
     */
    replacer?: ((this: any, key: string, value: any) => any) | null;
    /**
     * A String or Number object that's used to insert white space into the
     * output JSON5 string for readability purposes. If this is a Number, it
     * indicates the number of space characters to use as white space; this
     * number is capped at 10 (if it is greater, the value is just 10). Values
     * less than 1 indicate that no space should be used. If this is a String,
     * the string (or the first 10 characters of the string, if it's longer than
     * that) is used as white space. If this parameter is not provided (or is
     * null), no white space is used. If white space is used, trailing commas
     * will be used in objects and arrays.
     */
    space?: string | number | null;
    /**
     * A String representing the quote character to use when serializing
     * strings.
     */
    quote?: string | null;
}

export { parseJSON5, stringifyJSON5 };
export type { JSON5ParseOptions, JSON5StringifyOptions };
