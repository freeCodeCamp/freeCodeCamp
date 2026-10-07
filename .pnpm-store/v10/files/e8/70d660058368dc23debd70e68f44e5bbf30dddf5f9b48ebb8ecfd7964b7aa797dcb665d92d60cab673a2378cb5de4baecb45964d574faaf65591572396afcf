import { composeParslet, type ParsletFunction } from './Parslet'
import { Parser } from '../Parser'
import { Precedence } from '../Precedence'
import { UnexpectedTypeError } from '../errors'
import { type ObjectResult } from '../result/RootResult'
import { type Grammar } from '../grammars/Grammar'

export function createObjectParslet ({ objectFieldGrammar, allowKeyTypes }: {
  objectFieldGrammar: Grammar
  allowKeyTypes: boolean
}): ParsletFunction {
  return composeParslet({
    name: 'objectParslet',
    accept: type => type === '{',
    parsePrefix: parser => {
      parser.consume('{')
      const result: ObjectResult = {
        type: 'JsdocTypeObject',
        meta: {
          separator: 'comma'
        },
        elements: []
      }

      if (!parser.consume('}')) {
        let separator: 'comma' | 'semicolon' | 'linebreak' | undefined

        const fieldParser = new Parser(objectFieldGrammar, parser.lexer, parser)

        while (true) {
          fieldParser.acceptLexerState(parser)
          let field = fieldParser.parseIntermediateType(Precedence.OBJECT)
          parser.acceptLexerState(fieldParser)

          if (field === undefined && allowKeyTypes) {
            field = parser.parseIntermediateType(Precedence.OBJECT)
          }

          let optional = false
          if (field.type === 'JsdocTypeNullable') {
            optional = true
            field = field.element
          }

          if (field.type === 'JsdocTypeNumber' || field.type === 'JsdocTypeName' || field.type === 'JsdocTypeStringValue') {
            let quote
            if (field.type === 'JsdocTypeStringValue') {
              quote = field.meta.quote
            }

            result.elements.push({
              type: 'JsdocTypeObjectField',
              key: field.value.toString(),
              right: undefined,
              optional,
              readonly: false,
              meta: {
                quote
              }
            })
          } else if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
            result.elements.push(field)
          } else {
            throw new UnexpectedTypeError(field)
          }
          if (parser.lexer.current.startOfLine) {
            separator = 'linebreak'
          } else if (parser.consume(',')) {
            separator = 'comma'
          } else if (parser.consume(';')) {
            separator = 'semicolon'
          } else {
            break
          }
          const type = parser.lexer.current.type
          if (type === '}') {
            break
          }
        }

        result.meta.separator = separator ?? 'comma' // TODO: use undefined here

        if (!parser.consume('}')) {
          throw new Error('Unterminated record type. Missing \'}\'')
        }
      }
      return result
    }
  })
}
