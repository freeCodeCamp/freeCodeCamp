import { TokenType } from '../lexer/Token'
import { Parser } from '../Parser'
import { Precedence } from '../Precedence'
import { IntermediateResult } from '../result/IntermediateResult'

/**
 * Each ParsletFunction can be called during the prefix or infix parsing step. In the prefix parsing step the `left` value
 * will be null and in the infix parsing step it value contain the previous value.
 * If the current state of the lexer in the current step is not accepted then the function should return `null`.
 * In the infix parsing step the current precedence should be checked.
 * See {@link composeParslet} for a more convenient way to use this function.
 */
export type ParsletFunction = (parser: Parser, precedence: Precedence, left: IntermediateResult | null) => IntermediateResult | null

interface BaseComposeParsletOptions {
  name: string
  accept: (type: TokenType, next: TokenType) => boolean
}

type ComposePrefixParsletOptions = BaseComposeParsletOptions & {
  parsePrefix: (parser: Parser) => IntermediateResult
}

type ComposeInfixParsletOptions = BaseComposeParsletOptions & {
  precedence: Precedence
  parseInfix: (parser: Parser, left: IntermediateResult) => IntermediateResult
}

export type ComposeParsletOptions = ComposePrefixParsletOptions | ComposeInfixParsletOptions | (ComposePrefixParsletOptions & ComposeInfixParsletOptions)

export function composeParslet (options: ComposeParsletOptions): ParsletFunction {
  const parslet: ParsletFunction = (parser, curPrecedence, left) => {
    const type = parser.lexer.current.type
    const next = parser.lexer.next.type

    if (left === null) {
      if ('parsePrefix' in options) {
        if (options.accept(type, next)) {
          return options.parsePrefix(parser)
        }
      }
    } else {
      if ('parseInfix' in options) {
        if (options.precedence > curPrecedence && options.accept(type, next)) {
          return options.parseInfix(parser, left)
        }
      }
    }
    return null
  }

  // for debugging
  Object.defineProperty(parslet, 'name', {
    value: options.name
  })

  return parslet
}
