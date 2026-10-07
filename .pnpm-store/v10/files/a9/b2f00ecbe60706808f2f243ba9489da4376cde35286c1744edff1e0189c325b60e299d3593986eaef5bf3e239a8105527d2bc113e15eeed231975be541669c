import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'

export const arrayBracketsParslet = composeParslet({
  name: 'arrayBracketsParslet',
  precedence: Precedence.ARRAY_BRACKETS,
  accept: (type, next) => type === '[' && next === ']',
  parseInfix: (parser, left) => {
    parser.consume('[')
    parser.consume(']')
    return {
      type: 'JsdocTypeGeneric',
      left: {
        type: 'JsdocTypeName',
        value: 'Array'
      },
      elements: [
        assertRootResult(left)
      ],
      meta: {
        brackets: 'square',
        dot: false
      }
    }
  }
})
