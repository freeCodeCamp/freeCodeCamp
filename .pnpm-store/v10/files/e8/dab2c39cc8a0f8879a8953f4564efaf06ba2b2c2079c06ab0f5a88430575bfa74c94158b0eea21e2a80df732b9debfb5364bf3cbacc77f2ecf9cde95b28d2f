import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'

export const readonlyPropertyParslet = composeParslet({
  name: 'readonlyPropertyParslet',
  accept: type => type === 'readonly',
  parsePrefix: parser => {
    parser.consume('readonly')
    return {
      type: 'JsdocTypeReadonlyProperty',
      element: parser.parseType(Precedence.KEY_VALUE)
    }
  }
})
