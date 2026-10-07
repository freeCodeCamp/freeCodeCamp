import { composeParslet, type ParsletFunction } from './Parslet'
import { Precedence } from '../Precedence'
import { UnexpectedTypeError } from '../errors'

export function createKeyValueParslet ({ allowOptional, allowVariadic }: {
  allowOptional: boolean
  allowVariadic: boolean
}): ParsletFunction {
  return composeParslet({
    name: 'keyValueParslet',
    precedence: Precedence.KEY_VALUE,
    accept: type => type === ':',
    parseInfix: (parser, left) => {
      let optional = false
      let variadic = false

      if (allowOptional && left.type === 'JsdocTypeNullable') {
        optional = true
        left = left.element
      }

      if (allowVariadic && left.type === 'JsdocTypeVariadic' && left.element !== undefined) {
        variadic = true
        left = left.element
      }

      if (left.type !== 'JsdocTypeName') {
        throw new UnexpectedTypeError(left)
      }

      parser.consume(':')

      const right = parser.parseType(Precedence.KEY_VALUE)

      return {
        type: 'JsdocTypeKeyValue',
        key: left.value,
        right,
        optional,
        variadic
      }
    }
  })
}
