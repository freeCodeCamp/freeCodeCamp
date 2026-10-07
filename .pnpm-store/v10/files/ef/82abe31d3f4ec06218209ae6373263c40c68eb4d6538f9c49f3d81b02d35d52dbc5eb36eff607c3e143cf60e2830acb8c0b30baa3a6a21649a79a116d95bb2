import { EarlyEndOfParseError, NoParsletFoundError } from './errors'
import { Lexer } from './lexer/Lexer'
import { Grammar } from './grammars/Grammar'
import { assertRootResult } from './assertTypes'
import { Precedence } from './Precedence'
import { RootResult } from './result/RootResult'
import { IntermediateResult } from './result/IntermediateResult'
import { TokenType } from './lexer/Token'

export class Parser {
  private readonly grammar: Grammar
  private _lexer: Lexer
  public readonly baseParser?: Parser

  constructor (grammar: Grammar, textOrLexer: string | Lexer, baseParser?: Parser) {
    this.grammar = grammar
    if (typeof textOrLexer === 'string') {
      this._lexer = Lexer.create(textOrLexer)
    } else {
      this._lexer = textOrLexer
    }
    this.baseParser = baseParser
  }

  get lexer (): Lexer {
    return this._lexer
  }

  /**
   * Parses a given string and throws an error if the parse ended before the end of the string.
   */
  parse (): RootResult {
    const result = this.parseType(Precedence.ALL)
    if (this.lexer.current.type !== 'EOF') {
      throw new EarlyEndOfParseError(this.lexer.current)
    }
    return result
  }

  /**
   * Parses with the current lexer and asserts that the result is a {@link RootResult}.
   */
  public parseType (precedence: Precedence): RootResult {
    return assertRootResult(this.parseIntermediateType(precedence))
  }

  /**
   * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
   * to parse the state in the infix step.
   */
  public parseIntermediateType (precedence: Precedence): IntermediateResult {
    const result = this.tryParslets(null, precedence)

    if (result === null) {
      throw new NoParsletFoundError(this.lexer.current)
    }

    return this.parseInfixIntermediateType(result, precedence)
  }

  /**
   * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
   * a result.
   */
  public parseInfixIntermediateType (left: IntermediateResult, precedence: Precedence): IntermediateResult {
    let result = this.tryParslets(left, precedence)

    while (result !== null) {
      left = result
      result = this.tryParslets(left, precedence)
    }

    return left
  }

  /**
   * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
   */
  private tryParslets (left: IntermediateResult | null, precedence: Precedence): IntermediateResult | null {
    for (const parslet of this.grammar) {
      const result = parslet(this, precedence, left)
      if (result !== null) {
        return result
      }
    }
    return null
  }

  /**
   * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
   * advanced.
   */
  public consume (types: TokenType | TokenType[]): boolean {
    if (!Array.isArray(types)) {
      types = [types]
    }

    if (types.includes(this.lexer.current.type)) {
      this._lexer = this.lexer.advance()
      return true
    } else {
      return false
    }
  }

  public acceptLexerState (parser: Parser): void {
    this._lexer = parser.lexer
  }
}
