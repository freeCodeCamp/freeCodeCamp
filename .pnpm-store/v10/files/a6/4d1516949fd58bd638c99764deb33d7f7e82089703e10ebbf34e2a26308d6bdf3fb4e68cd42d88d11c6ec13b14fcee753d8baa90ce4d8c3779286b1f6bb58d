import { type ParsletFunction } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'
import { Parser } from '../Parser'
import { type NamePathResult, type SpecialNamePath } from '../result/RootResult'
import { UnexpectedTypeError } from '../errors'
import { type PropertyResult } from '../result/NonRootResult'
import { type Grammar } from '../grammars/Grammar'

export function createNamePathParslet ({ allowSquareBracketsOnAnyType, allowJsdocNamePaths, pathGrammar }: {
  allowJsdocNamePaths: boolean
  allowSquareBracketsOnAnyType: boolean
  pathGrammar: Grammar | null
}): ParsletFunction {
  return function namePathParslet (parser, precedence, left) {
    if ((left == null) || precedence >= Precedence.NAME_PATH) {
      return null
    }
    const type = parser.lexer.current.type
    const next = parser.lexer.next.type

    const accept = (type === '.' && next !== '<') ||
      (type === '[' && (allowSquareBracketsOnAnyType || left.type === 'JsdocTypeName')) ||
      (allowJsdocNamePaths && (type === '~' || type === '#'))

    if (!accept) {
      return null
    }

    let pathType: NamePathResult['pathType']
    let brackets = false

    if (parser.consume('.')) {
      pathType = 'property'
    } else if (parser.consume('[')) {
      pathType = 'property-brackets'
      brackets = true
    } else if (parser.consume('~')) {
      pathType = 'inner'
    } else {
      parser.consume('#')
      pathType = 'instance'
    }

    const pathParser = pathGrammar !== null
      ? new Parser(pathGrammar, parser.lexer, parser)
      : parser

    const parsed = pathParser.parseIntermediateType(Precedence.NAME_PATH)
    parser.acceptLexerState(pathParser)
    let right: PropertyResult | SpecialNamePath<'event'>

    switch (parsed.type) {
      case 'JsdocTypeName':
        right = {
          type: 'JsdocTypeProperty',
          value: parsed.value,
          meta: {
            quote: undefined
          }
        }
        break
      case 'JsdocTypeNumber':
        right = {
          type: 'JsdocTypeProperty',
          value: parsed.value.toString(10),
          meta: {
            quote: undefined
          }
        }
        break
      case 'JsdocTypeStringValue':
        right = {
          type: 'JsdocTypeProperty',
          value: parsed.value,
          meta: {
            quote: parsed.meta.quote
          }
        }
        break
      case 'JsdocTypeSpecialNamePath':
        if (parsed.specialType === 'event') {
          right = parsed as SpecialNamePath<'event'>
        } else {
          throw new UnexpectedTypeError(parsed, 'Type \'JsdocTypeSpecialNamePath\' is only allowed with specialType \'event\'')
        }
        break
      default:
        throw new UnexpectedTypeError(parsed, 'Expecting \'JsdocTypeName\', \'JsdocTypeNumber\', \'JsdocStringValue\' or \'JsdocTypeSpecialNamePath\'')
    }

    if (brackets && !parser.consume(']')) {
      const token = parser.lexer.current
      throw new Error(`Unterminated square brackets. Next token is '${token.type}' ` +
        `with text '${token.text}'`)
    }

    return {
      type: 'JsdocTypeNamePath',
      left: assertRootResult(left),
      right,
      pathType
    }
  }
}
