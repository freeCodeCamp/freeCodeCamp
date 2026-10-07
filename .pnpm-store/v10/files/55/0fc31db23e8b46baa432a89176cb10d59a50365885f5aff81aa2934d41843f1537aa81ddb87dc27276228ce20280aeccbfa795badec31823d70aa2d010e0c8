export { JSON5ParseOptions, JSON5StringifyOptions, parseJSON5, stringifyJSON5 } from './json5.mjs';
export { JSONCParseError, JSONCParseOptions, parseJSONC, stringifyJSONC } from './jsonc.mjs';
export { YAMLParseOptions, YAMLStringifyOptions, parseYAML, stringifyYAML } from './yaml.mjs';
import { F as FormatOptions } from './shared/confbox.B202Uz6F.mjs';
export { parseTOML, stringifyTOML } from './toml.mjs';
export { INIParseOptions, INIStringifyOptions, parseINI, stringifyINI } from './ini.mjs';

/**
 * Converts a [JSON](https://www.json.org/json-en.html) string into an object.
 *
 * Indentation status is auto-detected and preserved when stringifying back using `stringifyJSON`
 */
declare function parseJSON<T = unknown>(text: string, options?: JSONParseOptions): T;
/**
 * Converts a JavaScript value to a [JSON](https://www.json.org/json-en.html) string.
 *
 * Indentation status is auto detected and preserved when using value from parseJSON.
 */
declare function stringifyJSON(value: any, options?: JSONStringifyOptions): string;
interface JSONParseOptions extends FormatOptions {
    /**
     * A function that transforms the results. This function is called for each member of the object.
     */
    reviver?: (this: any, key: string, value: any) => any;
}
interface JSONStringifyOptions extends FormatOptions {
    /**
     * A function that transforms the results. This function is called for each member of the object.
     */
    replacer?: (this: any, key: string, value: any) => any;
}

export { parseJSON, stringifyJSON };
export type { JSONParseOptions, JSONStringifyOptions };
