import { TokenType } from '../lexer/Token'
import { composeParslet, ParsletFunction } from './Parslet'

export function createNameParslet ({ allowedAdditionalTokens }: {
  allowedAdditionalTokens: TokenType[]
}): ParsletFunction {
  return composeParslet({
    name: 'nameParslet',
    accept: type => type === 'Identifier' || type === 'this' || type === 'new' || allowedAdditionalTokens.includes(type),
    parsePrefix: parser => {
      const { type, text } = parser.lexer.current
      parser.consume(type)

      return {
        type: 'JsdocTypeName',
        value: text
      }
    }
  })
}
