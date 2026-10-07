import { Lexer } from './lexer/Lexer';
import { Grammar } from './grammars/Grammar';
import { Precedence } from './Precedence';
import { RootResult } from './result/RootResult';
import { IntermediateResult } from './result/IntermediateResult';
import { TokenType } from './lexer/Token';
export declare class Parser {
    private readonly grammar;
    private _lexer;
    readonly baseParser?: Parser;
    constructor(grammar: Grammar, textOrLexer: string | Lexer, baseParser?: Parser);
    get lexer(): Lexer;
    /**
     * Parses a given string and throws an error if the parse ended before the end of the string.
     */
    parse(): RootResult;
    /**
     * Parses with the current lexer and asserts that the result is a {@link RootResult}.
     */
    parseType(precedence: Precedence): RootResult;
    /**
     * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
     * to parse the state in the infix step.
     */
    parseIntermediateType(precedence: Precedence): IntermediateResult;
    /**
     * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
     * a result.
     */
    parseInfixIntermediateType(left: IntermediateResult, precedence: Precedence): IntermediateResult;
    /**
     * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
     */
    private tryParslets;
    /**
     * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
     * advanced.
     */
    consume(types: TokenType | TokenType[]): boolean;
    acceptLexerState(parser: Parser): void;
}
