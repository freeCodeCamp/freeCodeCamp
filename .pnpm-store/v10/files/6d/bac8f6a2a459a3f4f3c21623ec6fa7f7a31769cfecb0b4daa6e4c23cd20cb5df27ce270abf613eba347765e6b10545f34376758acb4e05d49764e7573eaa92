import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { UnexpectedTypeError } from '../errors'
import { assertRootResult } from '../assertTypes'

export const predicateParslet = composeParslet({
  name: 'predicateParslet',
  precedence: Precedence.INFIX,
  accept: type => type === 'is',
  parseInfix: (parser, left) => {
    if (left.type !== 'JsdocTypeName') {
      throw new UnexpectedTypeError(left, 'A typescript predicate always has to have a name on the left side.')
    }

    parser.consume('is')

    return {
      type: 'JsdocTypePredicate',
      left,
      right: assertRootResult(parser.parseIntermediateType(Precedence.INFIX))
    }
  }
})
