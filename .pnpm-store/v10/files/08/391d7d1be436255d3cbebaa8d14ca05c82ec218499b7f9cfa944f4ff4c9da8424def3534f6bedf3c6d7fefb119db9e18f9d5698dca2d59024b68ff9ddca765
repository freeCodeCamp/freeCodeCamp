import { F as FormatOptions } from './shared/confbox.B202Uz6F.mjs';

/**
 *
 * Converts a [JSONC](https://github.com/microsoft/node-jsonc-parser) string into an object.
 *
 * @NOTE On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 *
 * @NOTE Comments and trailing commas are not preserved after parsing.
 *
 * @template T The type of the return value.
 * @param text The string to parse as JSONC.
 * @param options Parsing options.
 * @returns The JavaScript value converted from the JSONC string.
 */
declare function parseJSONC<T = unknown>(text: string, options?: JSONCParseOptions): T;
/**
 * Converts a JavaScript value to a [JSONC](https://github.com/microsoft/node-jsonc-parser) string.
 *
 * @NOTE Comments and trailing commas are not preserved in the output.
 *
 * @param value
 * @param options
 * @returns The JSON string converted from the JavaScript value.
 */
declare function stringifyJSONC(value: any, options?: JSONCStringifyOptions): string;
interface JSONCParseOptions extends FormatOptions {
    disallowComments?: boolean;
    allowTrailingComma?: boolean;
    allowEmptyContent?: boolean;
    errors?: JSONCParseError[];
}
interface JSONCStringifyOptions extends FormatOptions {
}
interface JSONCParseError {
    error: number;
    offset: number;
    length: number;
}

export { parseJSONC, stringifyJSONC };
export type { JSONCParseError, JSONCParseOptions, JSONCStringifyOptions };
