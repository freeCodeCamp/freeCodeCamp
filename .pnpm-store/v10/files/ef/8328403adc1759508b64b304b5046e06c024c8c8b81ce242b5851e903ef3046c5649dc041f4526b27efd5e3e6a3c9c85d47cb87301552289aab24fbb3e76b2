import { F as FormatOptions } from './shared/confbox.B202Uz6F.mjs';

/**
 * Converts a [YAML](https://yaml.org/) string into an object.
 *
 * @NOTE This function does **not** understand multi-document sources, it throws exception on those.
 *
 * @NOTE Comments are not preserved after parsing.
 *
 * @NOTE This function does **not** support schema-specific tag resolution restrictions.
 * So, the JSON schema is not as strictly defined in the YAML specification.
 * It allows numbers in any notation, use `Null` and `NULL` as `null`, etc.
 * The core schema also has no such restrictions. It allows binary notation for integers.
 *
 * @template T The type of the return value.
 * @param text The YAML string to parse.
 * @param options Parsing options.
 * @returns The JavaScript value converted from the YAML string.
 */
declare function parseYAML<T = unknown>(text: string, options?: YAMLParseOptions): T;
/**
 * Converts a JavaScript value to a [YAML](https://yaml.org/) string.
 *
 * @NOTE Comments are not preserved in the output.
 *
 * @param value
 * @param options
 * @returns The YAML string converted from the JavaScript value.
 */
declare function stringifyYAML(value: any, options?: YAMLStringifyOptions): string;
interface YAMLParseOptions extends FormatOptions {
    /** string to be used as a file path in error/warning messages. */
    filename?: string | undefined;
    /** function to call on warning messages. */
    onWarning?(this: null, e: YAMLException): void;
    /** specifies a schema to use. */
    schema?: any | undefined;
    /** compatibility with JSON.parse behaviour. */
    json?: boolean | undefined;
    /** listener for parse events */
    listener?(this: any, eventType: any, state: any): void;
}
interface YAMLStringifyOptions extends FormatOptions {
    /** indentation width to use (in spaces). */
    indent?: number | undefined;
    /** when true, will not add an indentation level to array elements */
    noArrayIndent?: boolean | undefined;
    /** do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types. */
    skipInvalid?: boolean | undefined;
    /** specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere */
    flowLevel?: number | undefined;
    /** Each tag may have own set of styles.    - "tag" => "style" map. */
    styles?: {
        [x: string]: any;
    } | undefined;
    /** specifies a schema to use. */
    schema?: any | undefined;
    /** if true, sort keys when dumping YAML. If a function, use the function to sort the keys. (default: false) */
    sortKeys?: boolean | ((a: any, b: any) => number) | undefined;
    /** set max line width. (default: 80) */
    lineWidth?: number | undefined;
    /** if true, don't convert duplicate objects into references (default: false) */
    noRefs?: boolean | undefined;
    /** if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1 (default: false) */
    noCompatMode?: boolean | undefined;
    /**
     * if true flow sequences will be condensed, omitting the space between `key: value` or `a, b`. Eg. `'[a,b]'` or `{a:{b:c}}`.
     * Can be useful when using yaml for pretty URL query params as spaces are %-encoded. (default: false).
     */
    condenseFlow?: boolean | undefined;
    /** strings will be quoted using this quoting style. If you specify single quotes, double quotes will still be used for non-printable characters. (default: `'`) */
    quotingType?: "'" | '"' | undefined;
    /** if true, all non-key strings will be quoted even if they normally don't need to. (default: false) */
    forceQuotes?: boolean | undefined;
    /** callback `function (key, value)` called recursively on each key/value in source object (see `replacer` docs for `JSON.stringify`). */
    replacer?: ((key: string, value: any) => any) | undefined;
}
interface Mark {
    buffer: string;
    column: number;
    line: number;
    name: string;
    position: number;
    snippet: string;
}
declare class YAMLException extends Error {
    constructor(reason?: string, mark?: Mark);
    toString(compact?: boolean): string;
    name: string;
    reason: string;
    message: string;
    mark: Mark;
}

export { parseYAML, stringifyYAML };
export type { YAMLParseOptions, YAMLStringifyOptions };
