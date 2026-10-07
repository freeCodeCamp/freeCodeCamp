import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'

export const notNullableParslet = composeParslet({
  name: 'notNullableParslet',
  accept: type => type === '!',
  precedence: Precedence.NULLABLE,
  parsePrefix: parser => {
    parser.consume('!')
    return {
      type: 'JsdocTypeNotNullable',
      element: parser.parseType(Precedence.NULLABLE),
      meta: {
        position: 'prefix'
      }
    }
  },
  parseInfix: (parser, left) => {
    parser.consume('!')
    return {
      type: 'JsdocTypeNotNullable',
      element: assertRootResult(left),
      meta: {
        position: 'suffix'
      }
    }
  }
})
