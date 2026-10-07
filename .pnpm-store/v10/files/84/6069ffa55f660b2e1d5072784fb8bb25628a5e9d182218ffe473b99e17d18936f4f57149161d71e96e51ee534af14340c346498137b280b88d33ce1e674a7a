import { ParsletFunction } from './Parslet'
import { Precedence } from '../Precedence'
import { isQuestionMarkUnknownType } from './isQuestionMarkUnkownType'
import { assertRootResult } from '../assertTypes'

export const nullableParslet: ParsletFunction = (parser, precedence, left) => {
  const type = parser.lexer.current.type
  const next = parser.lexer.next.type

  const accept = ((left == null) && type === '?' && !isQuestionMarkUnknownType(next)) ||
    ((left != null) && type === '?')

  if (!accept) {
    return null
  }

  parser.consume('?')

  if (left == null) {
    return {
      type: 'JsdocTypeNullable',
      element: parser.parseType(Precedence.NULLABLE),
      meta: {
        position: 'prefix'
      }
    }
  } else {
    return {
      type: 'JsdocTypeNullable',
      element: assertRootResult(left),
      meta: {
        position: 'suffix'
      }
    }
  }
}
