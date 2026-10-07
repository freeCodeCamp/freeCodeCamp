import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'

export const keyOfParslet = composeParslet({
  name: 'keyOfParslet',
  accept: type => type === 'keyof',
  parsePrefix: parser => {
    parser.consume('keyof')
    return {
      type: 'JsdocTypeKeyof',
      element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
    }
  }
})
