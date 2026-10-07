import { composeParslet } from './Parslet'
import { type IndexSignatureResult, type MappedTypeResult } from '../result/NonRootResult'
import { Precedence } from '../Precedence'

export const objectSquaredPropertyParslet = composeParslet({
  name: 'objectSquareBracketPropertyParslet',
  accept: type => type === '[',
  parsePrefix: parser => {
    if (parser.baseParser === undefined) {
      throw new Error('Only allowed inside object grammar')
    }
    parser.consume('[')
    const key = parser.lexer.current.text
    parser.consume('Identifier')
    let result: IndexSignatureResult | MappedTypeResult

    if (parser.consume(':')) {
      const parentParser = parser.baseParser
      parentParser.acceptLexerState(parser)

      result = {
        type: 'JsdocTypeIndexSignature',
        key,
        right: parentParser.parseType(Precedence.ARRAY_BRACKETS)
      }

      parser.acceptLexerState(parentParser)
    } else if (parser.consume('in')) {
      const parentParser = parser.baseParser
      parentParser.acceptLexerState(parser)

      result = {
        type: 'JsdocTypeMappedType',
        key,
        right: parentParser.parseType(Precedence.ARRAY_BRACKETS)
      }

      parser.acceptLexerState(parentParser)
    } else {
      throw new Error('Missing \':\' or \'in\' inside square bracketed property.')
    }

    if (!parser.consume(']')) {
      throw new Error('Unterminated square brackets')
    }

    return result
  }
})
