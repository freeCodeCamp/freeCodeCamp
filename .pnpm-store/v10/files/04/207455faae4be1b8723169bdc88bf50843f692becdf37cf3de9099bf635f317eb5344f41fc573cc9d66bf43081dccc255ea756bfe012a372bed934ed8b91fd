import { composeParslet } from './Parslet'
import { Precedence } from '../Precedence'

export const importParslet = composeParslet({
  name: 'importParslet',
  accept: type => type === 'import',
  parsePrefix: parser => {
    parser.consume('import')
    if (!parser.consume('(')) {
      throw new Error('Missing parenthesis after import keyword')
    }
    const path = parser.parseType(Precedence.PREFIX)
    if (path.type !== 'JsdocTypeStringValue') {
      throw new Error('Only string values are allowed as paths for imports')
    }
    if (!parser.consume(')')) {
      throw new Error('Missing closing parenthesis after import keyword')
    }
    return {
      type: 'JsdocTypeImport',
      element: path
    }
  }
})
