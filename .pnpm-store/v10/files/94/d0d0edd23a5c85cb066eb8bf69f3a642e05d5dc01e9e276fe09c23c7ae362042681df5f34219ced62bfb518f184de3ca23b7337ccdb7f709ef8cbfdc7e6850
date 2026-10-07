import type { Token } from './cst';
/**
 * A YAML concrete syntax tree (CST) parser
 *
 * ```ts
 * const src: string = ...
 * for (const token of new Parser().parse(src)) {
 *   // token: Token
 * }
 * ```
 *
 * To use the parser with a user-provided lexer:
 *
 * ```ts
 * function* parse(source: string, lexer: Lexer) {
 *   const parser = new Parser()
 *   for (const lexeme of lexer.lex(source))
 *     yield* parser.next(lexeme)
 *   yield* parser.end()
 * }
 *
 * const src: string = ...
 * const lexer = new Lexer()
 * for (const token of parse(src, lexer)) {
 *   // token: Token
 * }
 * ```
 */
export declare class Parser {
    private onNewLine?;
    /** If true, space and sequence indicators count as indentation */
    private atNewLine;
    /** If true, next token is a scalar value */
    private atScalar;
    /** Current indentation level */
    private indent;
    /** Current offset since the start of parsing */
    offset: number;
    /** On the same line with a block map key */
    private onKeyLine;
    /** Top indicates the node that's currently being built */
    stack: Token[];
    /** The source of the current token, set in parse() */
    private source;
    /** The type of the current token, set in parse() */
    private type;
    /**
     * @param onNewLine - If defined, called separately with the start position of
     *   each new line (in `parse()`, including the start of input).
     */
    constructor(onNewLine?: (offset: number) => void);
    /**
     * Parse `source` as a YAML stream.
     * If `incomplete`, a part of the last line may be left as a buffer for the next call.
     *
     * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
     *
     * @returns A generator of tokens representing each directive, document, and other structure.
     */
    parse(source: string, incomplete?: boolean): Generator<Token, void>;
    /**
     * Advance the parser by the `source` of one lexical token.
     */
    next(source: string): Generator<Token, void>;
    private lexer;
    /** Call at end of input to push out any remaining constructions */
    end(): Generator<Token, void>;
    private get sourceToken();
    private step;
    private peek;
    private pop;
    private stream;
    private document;
    private scalar;
    private blockScalar;
    private blockMap;
    private blockSequence;
    private flowCollection;
    private flowScalar;
    private startBlockValue;
    private atIndentedComment;
    private documentEnd;
    private lineEnd;
}
