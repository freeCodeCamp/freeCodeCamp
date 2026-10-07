import { Token } from './ast';
import type { LexerInterface } from './lexer';
import type { Source } from './source';
/**
 * Given a Source schema coordinate, creates a Lexer for that source.
 * A SchemaCoordinateLexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
export declare class SchemaCoordinateLexer implements LexerInterface {
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
   * Since a schema coordinate may not contain newline, this value is always 1.
   */
  line: 1;
  /**
   * The character offset at which the current line begins.
   * Since a schema coordinate may not contain newline, this value is always 0.
   */
  lineStart: 0;
  constructor(source: Source);
  get [Symbol.toStringTag](): string;
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance(): Token;
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the current Lexer token.
   */
  lookahead(): Token;
}
