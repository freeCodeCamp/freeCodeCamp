import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertNumberOrVariadicNameResult } from '../assertTypes'
import { SymbolResult } from '../result/RootResult'

export const symbolParslet = composeParslet({
  name: 'symbolParslet',
  accept: type => type === '(',
  precedence: Precedence.SYMBOL,
  parseInfix: (parser, left) => {
    if (left.type !== 'JsdocTypeName') {
      throw new Error('Symbol expects a name on the left side. (Reacting on \'(\')')
    }
    parser.consume('(')
    const result: SymbolResult = {
      type: 'JsdocTypeSymbol',
      value: left.value
    }
    if (!parser.consume(')')) {
      const next = parser.parseIntermediateType(Precedence.SYMBOL)
      result.element = assertNumberOrVariadicNameResult(next)
      if (!parser.consume(')')) {
        throw new Error('Symbol does not end after value')
      }
    }

    return result
  }
})
