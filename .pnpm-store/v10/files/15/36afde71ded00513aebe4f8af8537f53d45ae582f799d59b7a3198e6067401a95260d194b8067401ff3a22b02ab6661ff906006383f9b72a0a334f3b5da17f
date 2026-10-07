/**
 * Converts an [INI](https://www.ini.org/ini-en.html) string into an object.
 *
 * **Note:** Style and indentation are not preserved currently.
 */
declare function parseINI<T = unknown>(text: string, options?: INIParseOptions): T;
/**
 * Converts a JavaScript value to an [INI](https://www.ini.org/ini-en.html) string.
 *
 * **Note:** Style and indentation are not preserved currently.
 */
declare function stringifyINI(value: any, options?: INIStringifyOptions): string;
interface INIParseOptions {
    /**
     *  Whether to append `[]` to array keys.
     *
     *  Some parsers treat duplicate names by themselves as arrays.
     */
    bracketedArray?: boolean;
}
interface INIStringifyOptions {
    /**
     *  Whether to insert spaces before & after `=` character.
     *  Enabled by default.
     */
    whitespace?: boolean;
    /**
     *  Whether to align the `=` character for each section.
     */
    align?: boolean;
    /**
     *  Identifier to use for global items
     *  and to prepend to all other sections.
     */
    section?: string;
    /**
     *  Whether to sort all sections & their keys alphabetically.
     */
    sort?: boolean;
    /**
     *  Whether to insert a newline after each section header.
     */
    newline?: boolean;
    /**
     *  Which platforms line-endings should be used.
     *
     *  win32 -> CR+LF
     *  other -> LF
     *
     *  Default is the current platform
     */
    platform?: string;
    /**
     *  Whether to append `[]` to array keys.
     *
     *  Some parsers treat duplicate names by themselves as arrays
     */
    bracketedArray?: boolean;
}

export { parseINI, stringifyINI };
export type { INIParseOptions, INIStringifyOptions };
