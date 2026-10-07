export interface ParseOptions {
    /**
     * Set the default delimiter for repeat parameters. (default: `'/'`)
     */
    delimiter?: string;
    /**
     * List of characters to automatically consider prefixes when parsing.
     */
    prefixes?: string;
}
/**
 * Parse a string for the raw tokens.
 */
export declare function parse(str: string, options?: ParseOptions): Token[];
export interface TokensToFunctionOptions {
    /**
     * When `true` the regexp will be case sensitive. (default: `false`)
     */
    sensitive?: boolean;
    /**
     * Function for encoding input strings for output.
     */
    encode?: (value: string, token: Key) => string;
    /**
     * When `false` the function can produce an invalid (unmatched) path. (default: `true`)
     */
    validate?: boolean;
}
/**
 * Compile a string to a template function for the path.
 */
export declare function compile<P extends object = object>(str: string, options?: ParseOptions & TokensToFunctionOptions): PathFunction<P>;
export type PathFunction<P extends object = object> = (data?: P) => string;
/**
 * Expose a method for transforming tokens into the path function.
 */
export declare function tokensToFunction<P extends object = object>(tokens: Token[], options?: TokensToFunctionOptions): PathFunction<P>;
export interface RegexpToFunctionOptions {
    /**
     * Function for decoding strings for params.
     */
    decode?: (value: string, token: Key) => string;
}
/**
 * A match result contains data about the path match.
 */
export interface MatchResult<P extends object = object> {
    path: string;
    index: number;
    params: P;
}
/**
 * A match is either `false` (no match) or a match result.
 */
export type Match<P extends object = object> = false | MatchResult<P>;
/**
 * The match function takes a string and returns whether it matched the path.
 */
export type MatchFunction<P extends object = object> = (path: string) => Match<P>;
/**
 * Create path match function from `path-to-regexp` spec.
 */
export declare function match<P extends object = object>(str: Path, options?: ParseOptions & TokensToRegexpOptions & RegexpToFunctionOptions): MatchFunction<P>;
/**
 * Create a path match function from `path-to-regexp` output.
 */
export declare function regexpToFunction<P extends object = object>(re: RegExp, keys: Key[], options?: RegexpToFunctionOptions): MatchFunction<P>;
/**
 * Metadata about a key.
 */
export interface Key {
    name: string | number;
    prefix: string;
    suffix: string;
    pattern: string;
    modifier: string;
}
/**
 * A token is a string (nothing special) or key metadata (capture group).
 */
export type Token = string | Key;
export interface TokensToRegexpOptions {
    /**
     * When `true` the regexp will be case sensitive. (default: `false`)
     */
    sensitive?: boolean;
    /**
     * When `true` the regexp won't allow an optional trailing delimiter to match. (default: `false`)
     */
    strict?: boolean;
    /**
     * When `true` the regexp will match to the end of the string. (default: `true`)
     */
    end?: boolean;
    /**
     * When `true` the regexp will match from the beginning of the string. (default: `true`)
     */
    start?: boolean;
    /**
     * Sets the final character for non-ending optimistic matches. (default: `/`)
     */
    delimiter?: string;
    /**
     * List of characters that can also be "end" characters.
     */
    endsWith?: string;
    /**
     * Encode path tokens for use in the `RegExp`.
     */
    encode?: (value: string) => string;
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
export declare function tokensToRegexp(tokens: Token[], keys?: Key[], options?: TokensToRegexpOptions): RegExp;
/**
 * Supported `path-to-regexp` input types.
 */
export type Path = string | RegExp | Array<string | RegExp>;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
export declare function pathToRegexp(path: Path, keys?: Key[], options?: TokensToRegexpOptions & ParseOptions): RegExp;
