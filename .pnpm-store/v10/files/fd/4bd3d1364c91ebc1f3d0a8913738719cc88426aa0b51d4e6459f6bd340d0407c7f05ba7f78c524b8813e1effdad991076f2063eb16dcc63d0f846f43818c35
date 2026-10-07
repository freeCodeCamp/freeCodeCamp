import * as t from '@babel/types';
import { Opts } from 'jsesc';
import { EncodedSourceMap, DecodedSourceMap, Mapping } from '@jridgewell/gen-mapping';

interface GeneratorOptions {
    /**
     * Optional string to add as a block comment at the start of the output file.
     */
    auxiliaryCommentBefore?: string;
    /**
     * Optional string to add as a block comment at the end of the output file.
     */
    auxiliaryCommentAfter?: string;
    /**
     * Function that takes a comment (as a string) and returns true if the comment should be included in the output.
     * By default, comments are included if `opts.comments` is `true` or if `opts.minified` is `false` and the comment
     * contains `@preserve` or `@license`.
     */
    shouldPrintComment?(comment: string): boolean;
    /**
     * Preserve the input code format while printing the transformed code.
     * This is experimental, and may have breaking changes in future
     * patch releases. It will be removed in a future minor release,
     * when it will graduate to stable.
     */
    experimental_preserveFormat?: boolean;
    /**
     * Attempt to use the same line numbers in the output code as in the source code (helps preserve stack traces).
     * Defaults to `false`.
     */
    retainLines?: boolean;
    /**
     * Retain parens around function expressions (could be used to change engine parsing behavior)
     * Defaults to `false`.
     */
    retainFunctionParens?: boolean;
    /**
     * Should comments be included in output? Defaults to `true`.
     */
    comments?: boolean;
    /**
     * Set to true to avoid adding whitespace for formatting. Defaults to the value of `opts.minified`.
     */
    compact?: boolean | "auto";
    /**
     * Should the output be minified. Defaults to `false`.
     */
    minified?: boolean;
    /**
     * Set to true to reduce whitespace (but not as much as opts.compact). Defaults to `false`.
     */
    concise?: boolean;
    /**
     * Used in warning messages
     */
    filename?: string;
    /**
     * Enable generating source maps. Defaults to `false`.
     */
    sourceMaps?: boolean;
    inputSourceMap?: any;
    /**
     * A root for all relative URLs in the source map.
     */
    sourceRoot?: string;
    /**
     * The filename for the source code (i.e. the code in the `code` argument).
     * This will only be used if `code` is a string.
     */
    sourceFileName?: string;
    /**
     * Options for outputting jsesc representation.
     */
    jsescOption?: Opts;
    /**
     * For use with the Hack-style pipe operator.
     * Changes what token is used for pipe bodies’ topic references.
     */
    topicToken?: "%" | "#" | "@@" | "^^" | "^";
}
interface GeneratorResult {
    code: string;
    map: EncodedSourceMap | null;
    decodedMap: DecodedSourceMap | undefined;
    rawMappings: Mapping[] | undefined;
}
/**
 * Turns an AST into code, maintaining sourcemaps, user preferences, and valid output.
 * @param ast - the abstract syntax tree from which to generate output code.
 * @param opts - used for specifying options for code generation.
 * @param code - the original source code, used for source maps.
 * @returns - an object containing the output code and source map.
 */
declare function generate(ast: t.Node, opts?: GeneratorOptions, code?: string | Record<string, string>): GeneratorResult;

export { type GeneratorOptions, type GeneratorResult, generate as default, generate };
