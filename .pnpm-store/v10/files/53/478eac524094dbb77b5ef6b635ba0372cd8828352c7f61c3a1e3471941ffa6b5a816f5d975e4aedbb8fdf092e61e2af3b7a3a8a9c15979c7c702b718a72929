import { composeParslet } from './Parslet'
import { isQuestionMarkUnknownType } from './isQuestionMarkUnkownType'

export const specialTypesParslet = composeParslet({
  name: 'specialTypesParslet',
  accept: (type, next) => (type === '?' && isQuestionMarkUnknownType(next)) ||
    type === 'null' || type === 'undefined' || type === '*',
  parsePrefix: parser => {
    if (parser.consume('null')) {
      return {
        type: 'JsdocTypeNull'
      }
    }

    if (parser.consume('undefined')) {
      return {
        type: 'JsdocTypeUndefined'
      }
    }

    if (parser.consume('*')) {
      return {
        type: 'JsdocTypeAny'
      }
    }

    if (parser.consume('?')) {
      return {
        type: 'JsdocTypeUnknown'
      }
    }

    throw new Error('Unacceptable token: ' + parser.lexer.current.text)
  }
})
