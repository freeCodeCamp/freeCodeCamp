/**
 * Tokenize CSS following the {@link https://drafts.csswg.org/css-syntax/#tokenization | CSS Syntax Level 3 specification}.
 *
 * @remarks
 * The tokenizing and parsing tools provided by CSS Tools are designed to be low level and generic with strong ties to their respective specifications.
 *
 * Any analysis or mutation of CSS source code should be done with the least powerful tool that can accomplish the task.
 * For many applications it is sufficient to work with tokens.
 * For others you might need to use {@link https://github.com/csstools/postcss-plugins/tree/main/packages/css-parser-algorithms | @csstools/css-parser-algorithms} or a more specific parser.
 *
 * @example
 * Tokenize a string of CSS into an array of tokens:
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 *
 * const myCSS = `@media only screen and (min-width: 768rem) {
 * 	.foo {
 * 		content: 'Some content!' !important;
 * 	}
 * }
 * `;
 *
 * const tokens = tokenize({
 * 	css: myCSS,
 * });
 *
 * console.log(tokens);
 * ```
 *
 * @packageDocumentation
 */

/**
 * Deep clone a list of tokens.
 * Useful for mutations without altering the original list.
 */
export declare function cloneTokens(tokens: Array<CSSToken>): Array<CSSToken>;

/**
 * The union of all possible CSS tokens
 */
export declare type CSSToken = TokenAtKeyword | TokenBadString | TokenBadURL | TokenCDC | TokenCDO | TokenColon | TokenComma | TokenComment | TokenDelim | TokenDimension | TokenEOF | TokenFunction | TokenHash | TokenIdent | TokenNumber | TokenPercentage | TokenSemicolon | TokenString | TokenURL | TokenWhitespace | TokenOpenParen | TokenCloseParen | TokenOpenSquare | TokenCloseSquare | TokenOpenCurly | TokenCloseCurly | TokenUnicodeRange;

/**
 * The type of hash token
 */
export declare enum HashType {
    /**
     * The hash token did not start with an ident sequence (e.g. `#-2`)
     */
    Unrestricted = "unrestricted",
    /**
     * The hash token started with an ident sequence (e.g. `#foo`)
     * Only hash tokens with the "id" type are valid ID selectors.
     */
    ID = "id"
}

/**
 * Assert that a given value has the general structure of a CSS token:
 * 1. is an array.
 * 2. has at least four items.
 * 3. has a known token type.
 * 4. has a string representation.
 * 5. has a start position.
 * 6. has an end position.
 */
export declare function isToken(x: any): x is CSSToken;

export declare function isTokenAtKeyword(x?: CSSToken | null): x is TokenAtKeyword;

export declare function isTokenBadString(x?: CSSToken | null): x is TokenBadString;

export declare function isTokenBadURL(x?: CSSToken | null): x is TokenBadURL;

export declare function isTokenCDC(x?: CSSToken | null): x is TokenCDC;

export declare function isTokenCDO(x?: CSSToken | null): x is TokenCDO;

export declare function isTokenCloseCurly(x?: CSSToken | null): x is TokenCloseCurly;

export declare function isTokenCloseParen(x?: CSSToken | null): x is TokenCloseParen;

export declare function isTokenCloseSquare(x?: CSSToken | null): x is TokenCloseSquare;

export declare function isTokenColon(x?: CSSToken | null): x is TokenColon;

export declare function isTokenComma(x?: CSSToken | null): x is TokenComma;

export declare function isTokenComment(x?: CSSToken | null): x is TokenComment;

export declare function isTokenDelim(x?: CSSToken | null): x is TokenDelim;

export declare function isTokenDimension(x?: CSSToken | null): x is TokenDimension;

export declare function isTokenEOF(x?: CSSToken | null): x is TokenEOF;

export declare function isTokenFunction(x?: CSSToken | null): x is TokenFunction;

export declare function isTokenHash(x?: CSSToken | null): x is TokenHash;

export declare function isTokenIdent(x?: CSSToken | null): x is TokenIdent;

export declare function isTokenNumber(x?: CSSToken | null): x is TokenNumber;

/**
 * Assert that a token is a numeric token
 */
export declare function isTokenNumeric(x?: CSSToken | null): x is NumericToken;

export declare function isTokenOpenCurly(x?: CSSToken | null): x is TokenOpenCurly;

export declare function isTokenOpenParen(x?: CSSToken | null): x is TokenOpenParen;

export declare function isTokenOpenSquare(x?: CSSToken | null): x is TokenOpenSquare;

export declare function isTokenPercentage(x?: CSSToken | null): x is TokenPercentage;

export declare function isTokenSemicolon(x?: CSSToken | null): x is TokenSemicolon;

export declare function isTokenString(x?: CSSToken | null): x is TokenString;

export declare function isTokenUnicodeRange(x?: CSSToken | null): x is TokenUnicodeRange;

export declare function isTokenURL(x?: CSSToken | null): x is TokenURL;

export declare function isTokenWhitespace(x?: CSSToken | null): x is TokenWhitespace;

/**
 * Assert that a token is a whitespace or comment token
 */
export declare function isTokenWhiteSpaceOrComment(x?: CSSToken | null): x is TokenWhitespace | TokenComment;

/**
 * Get the mirror variant of a given token
 *
 * @example
 *
 * ```js
 * const input = [TokenType.OpenParen, '(', 0, 1, undefined];
 * const output = mirrorVariant(input);
 *
 * console.log(output); // [TokenType.CloseParen, ')', -1, -1, undefined]
 * ```
 */
export declare function mirrorVariant(token: CSSToken): CSSToken | null;

/**
 * Get the mirror variant type of a given token type
 *
 * @example
 *
 * ```js
 * const input = TokenType.OpenParen;
 * const output = mirrorVariantType(input);
 *
 * console.log(output); // TokenType.CloseParen
 * ```
 */
export declare function mirrorVariantType(type: TokenType): TokenType | null;

/**
 * Set the ident value and update the string representation.
 * This handles escaping.
 */
export declare function mutateIdent(ident: TokenIdent, newValue: string): void;

/**
 * Set the unit and update the string representation.
 * This handles escaping.
 */
export declare function mutateUnit(ident: TokenDimension, newUnit: string): void;

/**
 * The type of number token
 * Either `integer` or `number`
 */
export declare enum NumberType {
    Integer = "integer",
    Number = "number"
}

/**
 * The union of all possible CSS tokens that represent a numeric value
 */
export declare type NumericToken = TokenDimension | TokenNumber | TokenPercentage;

/**
 * The CSS Tokenizer is forgiving and will never throw on invalid input.
 * Any errors are reported through the `onParseError` callback.
 */
export declare class ParseError extends Error {
    /** The index of the start character of the current token. */
    sourceStart: number;
    /** The index of the end character of the current token. */
    sourceEnd: number;
    /** The parser steps that preceded the error. */
    parserState: Array<string>;
    constructor(message: string, sourceStart: number, sourceEnd: number, parserState: Array<string>);
}

export declare const ParseErrorMessage: {
    UnexpectedNewLineInString: string;
    UnexpectedEOFInString: string;
    UnexpectedEOFInComment: string;
    UnexpectedEOFInURL: string;
    UnexpectedEOFInEscapedCodePoint: string;
    UnexpectedCharacterInURL: string;
    InvalidEscapeSequenceInURL: string;
    InvalidEscapeSequenceAfterBackslash: string;
};

export declare class ParseErrorWithToken extends ParseError {
    /** The associated token. */
    token: CSSToken;
    constructor(message: string, sourceStart: number, sourceEnd: number, parserState: Array<string>, token: CSSToken);
}

/**
 * Concatenate the string representation of a list of tokens.
 * This is not a proper serializer that will handle escaping and whitespace.
 * It only produces valid CSS for a token list that is also valid.
 */
export declare function stringify(...tokens: Array<CSSToken>): string;

/**
 * The CSS Token interface
 *
 * @remarks
 * CSS Tokens are fully typed and have a strict structure.
 * This makes it easier to iterate and analyze a token stream.
 *
 * The string representation and the parsed value are stored separately for many token types.
 * It is always assumed that the string representation will be used when stringifying, while the parsed value should be used when analyzing tokens.
 */
export declare interface Token<T extends TokenType, U> extends Array<T | string | number | U> {
    /**
     * The type of token
     */
    0: T;
    /**
     * The token representation
     *
     * @remarks
     * This field will be used when stringifying the token.
     * Any stored value is assumed to be valid CSS.
     *
     * You should never use this field when analyzing the token when there is a parsed value available.
     * But you must store mutated values here.
     */
    1: string;
    /**
     * Start position of representation
     */
    2: number;
    /**
     * End position of representation
     */
    3: number;
    /**
     * Extra data
     *
     * @remarks
     * This holds the parsed value of each token.
     * These values are unescaped, unquoted, converted to numbers, etc.
     *
     * You should always use this field when analyzing the token.
     * But you must not assume that mutating only this field will have any effect.
     */
    4: U;
}

export declare interface TokenAtKeyword extends Token<TokenType.AtKeyword, {
    /**
     * The unescaped at-keyword name without the leading `@`.
     */
    value: string;
}> {
}

export declare interface TokenBadString extends Token<TokenType.BadString, undefined> {
}

export declare interface TokenBadURL extends Token<TokenType.BadURL, undefined> {
}

export declare interface TokenCDC extends Token<TokenType.CDC, undefined> {
}

export declare interface TokenCDO extends Token<TokenType.CDO, undefined> {
}

export declare interface TokenCloseCurly extends Token<TokenType.CloseCurly, undefined> {
}

export declare interface TokenCloseParen extends Token<TokenType.CloseParen, undefined> {
}

export declare interface TokenCloseSquare extends Token<TokenType.CloseSquare, undefined> {
}

export declare interface TokenColon extends Token<TokenType.Colon, undefined> {
}

export declare interface TokenComma extends Token<TokenType.Comma, undefined> {
}

export declare interface TokenComment extends Token<TokenType.Comment, undefined> {
}

export declare interface TokenDelim extends Token<TokenType.Delim, {
    /**
     * The delim character.
     */
    value: string;
}> {
}

export declare interface TokenDimension extends Token<TokenType.Dimension, {
    /**
     * The numeric value.
     */
    value: number;
    /**
     * The unescaped unit name.
     */
    unit: string;
    /**
     * `integer` or `number`
     */
    type: NumberType;
    /**
     * The sign character as it appeared in the source.
     * This is only useful if you need to determine if a value was written as "2px" or "+2px".
     */
    signCharacter?: '+' | '-';
}> {
}

export declare interface TokenEOF extends Token<TokenType.EOF, undefined> {
}

export declare interface TokenFunction extends Token<TokenType.Function, {
    /**
     * The unescaped function name without the trailing `(`.
     */
    value: string;
}> {
}

export declare interface TokenHash extends Token<TokenType.Hash, {
    /**
     * The unescaped hash value without the leading `#`.
     */
    value: string;
    /**
     * The hash type.
     */
    type: HashType;
}> {
}

export declare interface TokenIdent extends Token<TokenType.Ident, {
    /**
     * The unescaped ident value.
     */
    value: string;
}> {
}

/**
 * Tokenize a CSS string into a list of tokens.
 */
export declare function tokenize(input: {
    css: {
        valueOf(): string;
    };
    unicodeRangesAllowed?: boolean;
}, options?: {
    onParseError?: (error: ParseError) => void;
}): Array<CSSToken>;

/**
 * Create a tokenizer for a CSS string.
 */
export declare function tokenizer(input: {
    css: {
        valueOf(): string;
    };
    unicodeRangesAllowed?: boolean;
}, options?: {
    onParseError?: (error: ParseError) => void;
}): {
    nextToken: () => CSSToken;
    endOfFile: () => boolean;
};

export declare interface TokenNumber extends Token<TokenType.Number, {
    /**
     * The numeric value.
     */
    value: number;
    /**
     * `integer` or `number`
     */
    type: NumberType;
    /**
     * The sign character as it appeared in the source.
     * This is only useful if you need to determine if a value was written as "2" or "+2".
     */
    signCharacter?: '+' | '-';
}> {
}

export declare interface TokenOpenCurly extends Token<TokenType.OpenCurly, undefined> {
}

export declare interface TokenOpenParen extends Token<TokenType.OpenParen, undefined> {
}

export declare interface TokenOpenSquare extends Token<TokenType.OpenSquare, undefined> {
}

export declare interface TokenPercentage extends Token<TokenType.Percentage, {
    /**
     * The numeric value.
     */
    value: number;
    /**
     * The sign character as it appeared in the source.
     * This is only useful if you need to determine if a value was written as "2%" or "+2%".
     */
    signCharacter?: '+' | '-';
}> {
}

export declare interface TokenSemicolon extends Token<TokenType.Semicolon, undefined> {
}

export declare interface TokenString extends Token<TokenType.String, {
    /**
     * The unescaped string value without the leading and trailing quotes.
     */
    value: string;
}> {
}

/**
 * All possible CSS token types
 */
export declare enum TokenType {
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#comment-diagram}
     */
    Comment = "comment",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-at-keyword-token}
     */
    AtKeyword = "at-keyword-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-bad-string-token}
     */
    BadString = "bad-string-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-bad-url-token}
     */
    BadURL = "bad-url-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-cdc-token}
     */
    CDC = "CDC-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-cdo-token}
     */
    CDO = "CDO-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-colon-token}
     */
    Colon = "colon-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-comma-token}
     */
    Comma = "comma-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-delim-token}
     */
    Delim = "delim-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-dimension-token}
     */
    Dimension = "dimension-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-eof-token}
     */
    EOF = "EOF-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-function-token}
     */
    Function = "function-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-hash-token}
     */
    Hash = "hash-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-ident-token}
     */
    Ident = "ident-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-percentage-token}
     */
    Number = "number-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-percentage-token}
     */
    Percentage = "percentage-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-semicolon-token}
     */
    Semicolon = "semicolon-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-string-token}
     */
    String = "string-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-url-token}
     */
    URL = "url-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#typedef-whitespace-token}
     */
    Whitespace = "whitespace-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#tokendef-open-paren}
     */
    OpenParen = "(-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#tokendef-close-paren}
     */
    CloseParen = ")-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#tokendef-open-square}
     */
    OpenSquare = "[-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#tokendef-close-square}
     */
    CloseSquare = "]-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#tokendef-open-curly}
     */
    OpenCurly = "{-token",
    /**
     * @see {@link https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/#tokendef-close-curly}
     */
    CloseCurly = "}-token",
    /**
     * Only appears in the token stream when the `unicodeRangesAllowed` option is set to true.
     *
     * @example
     * ```js
     * import { tokenize } from '@csstools/css-tokenizer';
     *
     * const tokens = tokenize({
     * 	css: `U+0025-00FF, U+4??`,
     * 	unicodeRangesAllowed: true,
     * });
     *
     * console.log(tokens);
     * ```
     *
     * @see {@link https://drafts.csswg.org/css-syntax/#typedef-unicode-range-token}
     */
    UnicodeRange = "unicode-range-token"
}

export declare interface TokenUnicodeRange extends Token<TokenType.UnicodeRange, {
    startOfRange: number;
    endOfRange: number;
}> {
}

export declare interface TokenURL extends Token<TokenType.URL, {
    /**
     * The unescaped URL value without the leading `url(` and trailing `)`.
     */
    value: string;
}> {
}

export declare interface TokenWhitespace extends Token<TokenType.Whitespace, undefined> {
}

export { }
