import { Next, ToString } from "./types";
declare const FUNCTION_PREFIXES: {
    Function: string;
    GeneratorFunction: string;
    AsyncFunction: string;
    AsyncGeneratorFunction: string;
};
/**
 * Track function parser usage.
 */
export declare const USED_METHOD_KEY: WeakSet<(...args: unknown[]) => unknown>;
/**
 * Stringify a function.
 */
export declare const functionToString: ToString;
/**
 * Rewrite a stringified function to remove initial indentation.
 */
export declare function dedentFunction(fnString: string): string;
/**
 * Function parser and stringify.
 */
export declare class FunctionParser {
    fn: (...args: unknown[]) => unknown;
    indent: string;
    next: Next;
    key?: string | undefined;
    fnString: string;
    fnType: keyof typeof FUNCTION_PREFIXES;
    keyQuote: string | undefined;
    keyPrefix: string;
    isMethodCandidate: boolean;
    pos: number;
    hadKeyword: boolean;
    constructor(fn: (...args: unknown[]) => unknown, indent: string, next: Next, key?: string | undefined);
    stringify(): string;
    getPrefix(): string;
    tryParse(): string | undefined;
    /**
     * Attempt to parse the function from the current position by first stripping
     * the function's name from the front. This is not a fool-proof method on all
     * JavaScript engines, but yields good results on Node.js 4 (and slightly
     * less good results on Node.js 6 and 8).
     */
    tryStrippingName(): string | undefined;
    /**
     * Attempt to advance the parser past the keywords expected to be at the
     * start of this function's definition. This method sets `this.hadKeyword`
     * based on whether or not a `function` keyword is consumed.
     */
    tryParsePrefixTokens(): boolean;
    /**
     * Advance the parser past one element of JavaScript syntax. This could be a
     * matched pair of delimiters, like braces or parentheses, or an atomic unit
     * like a keyword, variable, or operator. Return a normalized string
     * representation of the element parsed--for example, returns '{}' for a
     * matched pair of braces. Comments and whitespace are skipped.
     *
     * (This isn't a full parser, so the token scanning logic used here is as
     * simple as it can be. As a consequence, some things that are one token in
     * JavaScript, like decimal number literals or most multi-character operators
     * like '&&', are split into more than one token here. However, awareness of
     * some multi-character sequences like '=>' is necessary, so we match the few
     * of them that we care about.)
     */
    consumeSyntax(wordLikeToken?: string): string | undefined;
    consumeSyntaxUntil(startToken: string, endToken: string): string | undefined;
    consumeMatch(re: RegExp): RegExpExecArray | null;
    /**
     * Advance the parser past an arbitrary regular expression. Return `token`,
     * or the match object of the regexp.
     */
    consumeRegExp(re: RegExp, token: string): string | undefined;
    /**
     * Advance the parser past a template string.
     */
    consumeTemplate(): "`" | undefined;
    /**
     * Advance the parser past any whitespace or comments.
     */
    consumeWhitespace(): void;
}
export {};
