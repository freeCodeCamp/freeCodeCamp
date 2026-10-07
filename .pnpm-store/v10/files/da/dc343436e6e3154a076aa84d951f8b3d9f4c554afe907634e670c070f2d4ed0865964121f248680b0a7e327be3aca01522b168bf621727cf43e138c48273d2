import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'

export const typeOfParslet = composeParslet({
  name: 'typeOfParslet',
  accept: type => type === 'typeof',
  parsePrefix: parser => {
    parser.consume('typeof')
    return {
      type: 'JsdocTypeTypeof',
      element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
    }
  }
})
