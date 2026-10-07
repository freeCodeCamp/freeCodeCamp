import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertPlainKeyValueOrNameResult } from '../assertTypes'
import { getParameters } from './FunctionParslet'

export const arrowFunctionParslet = composeParslet({
  name: 'arrowFunctionParslet',
  precedence: Precedence.ARROW,
  accept: type => type === '=>',
  parseInfix: (parser, left) => {
    parser.consume('=>')
    return {
      type: 'JsdocTypeFunction',
      parameters: getParameters(left).map(assertPlainKeyValueOrNameResult),
      arrow: true,
      constructor: false,
      parenthesis: true,
      returnType: parser.parseType(Precedence.OBJECT)
    }
  }
})
