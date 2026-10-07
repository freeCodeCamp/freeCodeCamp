import { composeParslet } from './Parslet'

export const numberParslet = composeParslet({
  name: 'numberParslet',
  accept: type => type === 'Number',
  parsePrefix: parser => {
    const value = parseFloat(parser.lexer.current.text)
    parser.consume('Number')
    return {
      type: 'JsdocTypeNumber',
      value
    }
  }
})
