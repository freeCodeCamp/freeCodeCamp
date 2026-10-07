// Type definitions for @babel/generator 7.6
// Project: https://github.com/babel/babel/tree/master/packages/babel-generator, https://babeljs.io
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Melvin Groenhoff <https://github.com/mgroenhoff>
//                 Cameron Yan <https://github.com/khell>
//                 Lyanbin <https://github.com/Lyanbin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as t from "@babel/types";

export interface GeneratorOptions {
    /**
     * Optional string to add as a block comment at the start of the output file.
     */
    auxiliaryCommentBefore?: string | undefined;

    /**
     * Optional string to add as a block comment at the end of the output file.
     */
    auxiliaryCommentAfter?: string | undefined;

    /**
     * Function that takes a comment (as a string) and returns true if the comment should be included in the output.
     * By default, comments are included if `opts.comments` is `true` or if `opts.minifed` is `false` and the comment
     * contains `@preserve` or `@license`.
     */
    shouldPrintComment?(comment: string): boolean;

    /**
     * Attempt to use the same line numbers in the output code as in the source code (helps preserve stack traces).
     * Defaults to `false`.
     */
    retainLines?: boolean | undefined;

    /**
     * Retain parens around function expressions (could be used to change engine parsing behavior)
     * Defaults to `false`.
     */
    retainFunctionParens?: boolean | undefined;

    /**
     * Should comments be included in output? Defaults to `true`.
     */
    comments?: boolean | undefined;

    /**
     * Set to true to avoid adding whitespace for formatting. Defaults to the value of `opts.minified`.
     */
    compact?: boolean | "auto" | undefined;

    /**
     * Should the output be minified. Defaults to `false`.
     */
    minified?: boolean | undefined;

    /**
     * Set to true to reduce whitespace (but not as much as opts.compact). Defaults to `false`.
     */
    concise?: boolean | undefined;

    /**
     * Used in warning messages
     */
    filename?: string | undefined;

    /**
     * Enable generating source maps. Defaults to `false`.
     */
    sourceMaps?: boolean | undefined;

    /**
     * A root for all relative URLs in the source map.
     */
    sourceRoot?: string | undefined;

    /**
     * The filename for the source code (i.e. the code in the `code` argument).
     * This will only be used if `code` is a string.
     */
    sourceFileName?: string | undefined;

    /**
     * Set to true to run jsesc with "json": true to print "\u00A9" vs. "©";
     */
    jsonCompatibleStrings?: boolean | undefined;

    /**
     * Set to true to enable support for experimental decorators syntax before module exports.
     * Defaults to `false`.
     */
    decoratorsBeforeExport?: boolean | undefined;

    /**
     * Options for outputting jsesc representation.
     */
    jsescOption?: {
        /**
         * The default value for the quotes option is 'single'. This means that any occurrences of ' in the input
         * string are escaped as \', so that the output can be used in a string literal wrapped in single quotes.
         */
        quotes?: "single" | "double" | "backtick" | undefined;

        /**
         * The default value for the numbers option is 'decimal'. This means that any numeric values are represented
         * using decimal integer literals. Other valid options are binary, octal, and hexadecimal, which result in
         * binary integer literals, octal integer literals, and hexadecimal integer literals, respectively.
         */
        numbers?: "binary" | "octal" | "decimal" | "hexadecimal" | undefined;

        /**
         * The wrap option takes a boolean value (true or false), and defaults to false (disabled). When enabled, the
         * output is a valid JavaScript string literal wrapped in quotes. The type of quotes can be specified through
         * the quotes setting.
         */
        wrap?: boolean | undefined;

        /**
         * The es6 option takes a boolean value (true or false), and defaults to false (disabled). When enabled, any
         * astral Unicode symbols in the input are escaped using ECMAScript 6 Unicode code point escape sequences
         * instead of using separate escape sequences for each surrogate half. If backwards compatibility with ES5
         * environments is a concern, don’t enable this setting. If the json setting is enabled, the value for the es6
         * setting is ignored (as if it was false).
         */
        es6?: boolean | undefined;

        /**
         * The escapeEverything option takes a boolean value (true or false), and defaults to false (disabled). When
         * enabled, all the symbols in the output are escaped — even printable ASCII symbols.
         */
        escapeEverything?: boolean | undefined;

        /**
         * The minimal option takes a boolean value (true or false), and defaults to false (disabled). When enabled,
         * only a limited set of symbols in the output are escaped: \0, \b, \t, \n, \f, \r, \\, \u2028, \u2029.
         */
        minimal?: boolean | undefined;

        /**
         * The isScriptContext option takes a boolean value (true or false), and defaults to false (disabled). When
         * enabled, occurrences of </script and </style in the output are escaped as <\/script and <\/style, and <!--
         * is escaped as \x3C!-- (or \u003C!-- when the json option is enabled). This setting is useful when jsesc’s
         * output ends up as part of a <script> or <style> element in an HTML document.
         */
        isScriptContext?: boolean | undefined;

        /**
         * The compact option takes a boolean value (true or false), and defaults to true (enabled). When enabled,
         * the output for arrays and objects is as compact as possible; it’s not formatted nicely.
         */
        compact?: boolean | undefined;

        /**
         * The indent option takes a string value, and defaults to '\t'. When the compact setting is enabled (true),
         * the value of the indent option is used to format the output for arrays and objects.
         */
        indent?: string | undefined;

        /**
         * The indentLevel option takes a numeric value, and defaults to 0. It represents the current indentation level,
         * i.e. the number of times the value of the indent option is repeated.
         */
        indentLevel?: number | undefined;

        /**
         * The json option takes a boolean value (true or false), and defaults to false (disabled). When enabled, the
         * output is valid JSON. Hexadecimal character escape sequences and the \v or \0 escape sequences are not used.
         * Setting json: true implies quotes: 'double', wrap: true, es6: false, although these values can still be
         * overridden if needed — but in such cases, the output won’t be valid JSON anymore.
         */
        json?: boolean | undefined;

        /**
         * The lowercaseHex option takes a boolean value (true or false), and defaults to false (disabled). When enabled,
         * any alphabetical hexadecimal digits in escape sequences as well as any hexadecimal integer literals (see the
         * numbers option) in the output are in lowercase.
         */
        lowercaseHex?: boolean | undefined;
    } | undefined;
}

export class CodeGenerator {
    constructor(ast: t.Node, opts?: GeneratorOptions, code?: string);
    generate(): GeneratorResult;
}

/**
 * Turns an AST into code, maintaining sourcemaps, user preferences, and valid output.
 * @param ast - the abstract syntax tree from which to generate output code.
 * @param opts - used for specifying options for code generation.
 * @param code - the original source code, used for source maps.
 * @returns - an object containing the output code and source map.
 */
export default function generate(
    ast: t.Node,
    opts?: GeneratorOptions,
    code?: string | { [filename: string]: string },
): GeneratorResult;

export interface GeneratorResult {
    code: string;
    map: {
        version: number;
        sources: string[];
        names: string[];
        sourceRoot?: string | undefined;
        sourcesContent?: string[] | undefined;
        mappings: string;
        file: string;
    } | null;
}
