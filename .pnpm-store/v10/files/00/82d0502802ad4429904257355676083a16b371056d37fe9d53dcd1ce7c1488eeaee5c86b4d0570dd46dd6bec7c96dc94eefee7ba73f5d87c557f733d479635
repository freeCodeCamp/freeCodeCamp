import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'

export const parenthesisParslet = composeParslet({
  name: 'parenthesisParslet',
  accept: type => type === '(',
  parsePrefix: parser => {
    parser.consume('(')
    if (parser.consume(')')) {
      return {
        type: 'JsdocTypeParameterList',
        elements: []
      }
    }
    const result = parser.parseIntermediateType(Precedence.ALL)
    if (!parser.consume(')')) {
      throw new Error('Unterminated parenthesis')
    }
    if (result.type === 'JsdocTypeParameterList') {
      return result
    } else if (result.type === 'JsdocTypeKeyValue') {
      return {
        type: 'JsdocTypeParameterList',
        elements: [result]
      }
    }
    return {
      type: 'JsdocTypeParenthesis',
      element: assertRootResult(result)
    }
  }
})
