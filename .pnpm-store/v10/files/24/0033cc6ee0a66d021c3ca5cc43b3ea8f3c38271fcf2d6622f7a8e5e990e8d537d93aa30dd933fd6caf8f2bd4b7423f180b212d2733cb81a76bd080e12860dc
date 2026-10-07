import { Token } from './ast';
import type { Source } from './source';
import { TokenKind } from './tokenKind';
/**
 * A Lexer interface which provides common properties and methods required for
 * lexing GraphQL source.
 *
 * @internal
 */
export interface LexerInterface {
  source: Source;
  lastToken: Token;
  token: Token;
  line: number;
  lineStart: number;
  advance: () => Token;
  lookahead: () => Token;
}
/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
export declare class Lexer implements LexerInterface {
  source: Source;
  /**
   * The previously focused non-ignored token.
   */
  lastToken: Token;
  /**
   * The currently focused non-ignored token.
   */
  token: Token;
  /**
   * The (1-indexed) line containing the current token.
   */
  line: number;
  /**
   * The character offset at which the current line begins.
   */
  lineStart: number;
  constructor(source: Source);
  get [Symbol.toStringTag](): string;
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance(): Token;
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead(): Token;
}
/**
 * @internal
 */
export declare function isPunctuatorTokenKind(kind: TokenKind): boolean;
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 *
 * @internal
 */
export declare function printCodePointAt(
  lexer: LexerInterface,
  location: number,
): string;
/**
 * Create a token with line and column location information.
 *
 * @internal
 */
export declare function createToken(
  lexer: LexerInterface,
  kind: TokenKind,
  start: number,
  end: number,
  value?: string,
): Token;
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 *
 * @internal
 */
export declare function readName(lexer: LexerInterface, start: number): Token;
