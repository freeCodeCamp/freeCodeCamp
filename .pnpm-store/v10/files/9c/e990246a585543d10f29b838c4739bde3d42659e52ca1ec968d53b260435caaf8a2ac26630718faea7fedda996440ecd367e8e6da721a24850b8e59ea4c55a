import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'

export const intersectionParslet = composeParslet({
  name: 'intersectionParslet',
  accept: type => type === '&',
  precedence: Precedence.INTERSECTION,
  parseInfix: (parser, left) => {
    parser.consume('&')

    const elements = []
    do {
      elements.push(parser.parseType(Precedence.INTERSECTION))
    } while (parser.consume('&'))

    return {
      type: 'JsdocTypeIntersection',
      elements: [assertRootResult(left), ...elements]
    }
  }
})
