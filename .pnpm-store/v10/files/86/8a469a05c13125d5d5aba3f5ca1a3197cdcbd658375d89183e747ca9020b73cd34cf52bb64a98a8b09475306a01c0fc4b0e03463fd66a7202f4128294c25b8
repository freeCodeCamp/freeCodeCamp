import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'

export const genericParslet = composeParslet({
  name: 'genericParslet',
  accept: (type, next) => type === '<' || (type === '.' && next === '<'),
  precedence: Precedence.GENERIC,
  parseInfix: (parser, left) => {
    const dot = parser.consume('.')
    parser.consume('<')

    const objects = []
    do {
      objects.push(parser.parseType(Precedence.PARAMETER_LIST))
    } while (parser.consume(','))

    if (!parser.consume('>')) {
      throw new Error('Unterminated generic parameter list')
    }

    return {
      type: 'JsdocTypeGeneric',
      left: assertRootResult(left),
      elements: objects,
      meta: {
        brackets: 'angle',
        dot
      }
    }
  }
})
