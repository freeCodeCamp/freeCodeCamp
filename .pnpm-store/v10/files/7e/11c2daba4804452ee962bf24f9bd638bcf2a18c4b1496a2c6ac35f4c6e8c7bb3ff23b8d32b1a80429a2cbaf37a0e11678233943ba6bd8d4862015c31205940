import { extractSpecialParams, notAvailableTransform, transform, type TransformRules } from './transform'
import { type QuoteStyle, type RootResult } from '../result/RootResult'
import { assertRootResult } from '../assertTypes'
import { type NonRootResult } from '../result/NonRootResult'

export type JtpResult =
  JtpNameResult
  | JtpNullableResult
  | JtpNotNullableResult
  | JtpOptionalResult
  | JtpVariadicResult
  | JtpTypeOfResult
  | JtpTupleResult
  | JtpKeyOfResult
  | JtpStringValueResult
  | JtpImportResult
  | JtpAnyResult
  | JtpUnknownResult
  | JtpFunctionResult
  | JtpGenericResult
  | JtpRecordEntryResult
  | JtpRecordResult
  | JtpMemberResult
  | JtpUnionResult
  | JtpParenthesisResult
  | JtpNamedParameterResult
  | JtpModuleResult
  | JtpFilePath
  | JtpIntersectionResult
  | JtpNumberResult

type JtpQuoteStyle = 'single' | 'double' | 'none'

export interface JtpNullableResult {
  type: 'NULLABLE'
  value: JtpResult
  meta: {
    syntax: 'PREFIX_QUESTION_MARK' | 'SUFFIX_QUESTION_MARK'
  }
}

export interface JtpNotNullableResult {
  type: 'NOT_NULLABLE'
  value: JtpResult
  meta: {
    syntax: 'PREFIX_BANG' | 'SUFFIX_BANG'
  }
}

export interface JtpOptionalResult {
  type: 'OPTIONAL'
  value: JtpResult
  meta: {
    syntax: 'PREFIX_EQUAL_SIGN' | 'SUFFIX_EQUALS_SIGN' | 'SUFFIX_KEY_QUESTION_MARK'
  }
}

export interface JtpVariadicResult {
  type: 'VARIADIC'
  value?: JtpResult
  meta: {
    syntax: 'PREFIX_DOTS' | 'SUFFIX_DOTS' | 'ONLY_DOTS'
  }
}

export interface JtpNameResult {
  type: 'NAME'
  name: string
}

export interface JtpTypeOfResult {
  type: 'TYPE_QUERY'
  name?: JtpResult
}

export interface JtpKeyOfResult {
  type: 'KEY_QUERY'
  value?: JtpResult
}

export interface JtpTupleResult {
  type: 'TUPLE'
  entries: JtpResult[]
}

export interface JtpStringValueResult {
  type: 'STRING_VALUE'
  quoteStyle: JtpQuoteStyle
  string: string
}

export interface JtpImportResult {
  type: 'IMPORT'
  path: JtpStringValueResult
}

export interface JtpAnyResult {
  type: 'ANY'
}

export interface JtpUnknownResult {
  type: 'UNKNOWN'
}

export interface JtpFunctionResult {
  type: 'FUNCTION' | 'ARROW'
  params: JtpResult[]
  returns: JtpResult | null
  new: JtpResult | null
  this?: JtpResult | null
}

export interface JtpGenericResult {
  type: 'GENERIC'
  subject: JtpResult
  objects: JtpResult[]
  meta: {
    syntax: 'ANGLE_BRACKET' | 'ANGLE_BRACKET_WITH_DOT' | 'SQUARE_BRACKET'
  }
}

export interface JtpRecordEntryResult {
  type: 'RECORD_ENTRY'
  key: string
  quoteStyle: JtpQuoteStyle
  value: JtpResult | null
  readonly: false
}

export interface JtpRecordResult {
  type: 'RECORD'
  entries: JtpRecordEntryResult[]
}

export interface JtpMemberResult {
  type: 'MEMBER' | 'INNER_MEMBER' | 'INSTANCE_MEMBER'
  owner: JtpResult
  name: string
  quoteStyle: JtpQuoteStyle
  hasEventPrefix: boolean
}

export interface JtpUnionResult {
  type: 'UNION'
  left: JtpResult
  right: JtpResult
}

export interface JtpIntersectionResult {
  type: 'INTERSECTION'
  left: JtpResult
  right: JtpResult
}

export interface JtpParenthesisResult {
  type: 'PARENTHESIS'
  value: JtpResult
}

export interface JtpNamedParameterResult {
  type: 'NAMED_PARAMETER'
  name: string
  typeName: JtpResult
}

export interface JtpModuleResult {
  type: 'MODULE'
  value: JtpResult
}

export interface JtpFilePath {
  type: 'FILE_PATH'
  quoteStyle: JtpQuoteStyle
  path: string
}

export interface JtpNumberResult {
  type: 'NUMBER_VALUE'
  number: string
}

function getQuoteStyle (quote: QuoteStyle | undefined): JtpQuoteStyle {
  switch (quote) {
    case undefined:
      return 'none'
    case 'single':
      return 'single'
    case 'double':
      return 'double'
  }
}

function getMemberType (type: 'property' | 'inner' | 'instance' | 'property-brackets'): JtpMemberResult['type'] {
  switch (type) {
    case 'inner':
      return 'INNER_MEMBER'
    case 'instance':
      return 'INSTANCE_MEMBER'
    case 'property':
      return 'MEMBER'
    case 'property-brackets':
      return 'MEMBER'
  }
}

function nestResults (type: 'UNION' | 'INTERSECTION', results: JtpResult[]): JtpResult {
  if (results.length === 2) {
    return {
      type,
      left: results[0],
      right: results[1]
    }
  } else {
    return {
      type,
      left: results[0],
      right: nestResults(type, results.slice(1))
    }
  }
}

const jtpRules: TransformRules<JtpResult> = {
  JsdocTypeOptional: (result, transform) => ({
    type: 'OPTIONAL',
    value: transform(result.element),
    meta: {
      syntax: result.meta.position === 'prefix' ? 'PREFIX_EQUAL_SIGN' : 'SUFFIX_EQUALS_SIGN'
    }
  }),

  JsdocTypeNullable: (result, transform) => ({
    type: 'NULLABLE',
    value: transform(result.element),
    meta: {
      syntax: result.meta.position === 'prefix' ? 'PREFIX_QUESTION_MARK' : 'SUFFIX_QUESTION_MARK'
    }
  }),

  JsdocTypeNotNullable: (result, transform) => ({
    type: 'NOT_NULLABLE',
    value: transform(result.element),
    meta: {
      syntax: result.meta.position === 'prefix' ? 'PREFIX_BANG' : 'SUFFIX_BANG'
    }
  }),

  JsdocTypeVariadic: (result, transform) => {
    const transformed: JtpVariadicResult = {
      type: 'VARIADIC',
      meta: {
        syntax: result.meta.position === 'prefix'
          ? 'PREFIX_DOTS'
          : result.meta.position === 'suffix' ? 'SUFFIX_DOTS' : 'ONLY_DOTS'
      }
    }
    if (result.element !== undefined) {
      transformed.value = transform(result.element)
    }

    return transformed
  },

  JsdocTypeName: result => ({
    type: 'NAME',
    name: result.value
  }),

  JsdocTypeTypeof: (result, transform) => ({
    type: 'TYPE_QUERY',
    name: transform(result.element)
  }),

  JsdocTypeTuple: (result, transform) => ({
    type: 'TUPLE',
    entries: (result.elements as NonRootResult[]).map(transform)
  }),

  JsdocTypeKeyof: (result, transform) => ({
    type: 'KEY_QUERY',
    value: transform(result.element)
  }),

  JsdocTypeImport: result => ({
    type: 'IMPORT',
    path: {
      type: 'STRING_VALUE',
      quoteStyle: getQuoteStyle(result.element.meta.quote),
      string: result.element.value
    }
  }),

  JsdocTypeUndefined: () => ({
    type: 'NAME',
    name: 'undefined'
  }),

  JsdocTypeAny: () => ({
    type: 'ANY'
  }),

  JsdocTypeFunction: (result, transform) => {
    const specialParams = extractSpecialParams(result)

    const transformed: JtpFunctionResult = {
      type: result.arrow ? 'ARROW' : 'FUNCTION',
      params: specialParams.params.map(param => {
        if (param.type === 'JsdocTypeKeyValue') {
          if (param.right === undefined) {
            throw new Error('Function parameter without \':\' is not expected to be \'KEY_VALUE\'')
          }
          return {
            type: 'NAMED_PARAMETER',
            name: param.key,
            typeName: transform(param.right)
          }
        } else {
          return transform(param)
        }
      }),
      new: null,
      returns: null
    }

    if (specialParams.this !== undefined) {
      transformed.this = transform(specialParams.this)
    } else if (!result.arrow) {
      transformed.this = null
    }

    if (specialParams.new !== undefined) {
      transformed.new = transform(specialParams.new)
    }

    if (result.returnType !== undefined) {
      transformed.returns = transform(result.returnType)
    }

    return transformed
  },

  JsdocTypeGeneric: (result, transform) => {
    const transformed: JtpGenericResult = {
      type: 'GENERIC',
      subject: transform(result.left),
      objects: result.elements.map(transform),
      meta: {
        syntax: result.meta.brackets === 'square' ? 'SQUARE_BRACKET' : result.meta.dot ? 'ANGLE_BRACKET_WITH_DOT' : 'ANGLE_BRACKET'
      }
    }

    if (result.meta.brackets === 'square' && result.elements[0].type === 'JsdocTypeFunction' && !result.elements[0].parenthesis) {
      transformed.objects[0] = {
        type: 'NAME',
        name: 'function'
      }
    }

    return transformed
  },

  JsdocTypeObjectField: (result, transform) => {
    if (typeof result.key !== 'string') {
      throw new Error('Index signatures and mapped types are not supported')
    }

    if (result.right === undefined) {
      return {
        type: 'RECORD_ENTRY',
        key: result.key,
        quoteStyle: getQuoteStyle(result.meta.quote),
        value: null,
        readonly: false
      }
    }

    let right = transform(result.right)
    if (result.optional) {
      right = {
        type: 'OPTIONAL',
        value: right,
        meta: {
          syntax: 'SUFFIX_KEY_QUESTION_MARK'
        }
      }
    }

    return {
      type: 'RECORD_ENTRY',
      key: result.key.toString(),
      quoteStyle: getQuoteStyle(result.meta.quote),
      value: right,
      readonly: false
    }
  },

  JsdocTypeJsdocObjectField: () => {
    throw new Error('Keys may not be typed in jsdoctypeparser.')
  },

  JsdocTypeKeyValue: (result, transform) => {
    if (result.right === undefined) {
      return {
        type: 'RECORD_ENTRY',
        key: result.key,
        quoteStyle: 'none',
        value: null,
        readonly: false
      }
    }

    let right = transform(result.right)
    if (result.optional) {
      right = {
        type: 'OPTIONAL',
        value: right,
        meta: {
          syntax: 'SUFFIX_KEY_QUESTION_MARK'
        }
      }
    }

    return {
      type: 'RECORD_ENTRY',
      key: result.key,
      quoteStyle: 'none',
      value: right,
      readonly: false
    }
  },

  JsdocTypeObject: (result, transform) => {
    const entries: JtpRecordEntryResult[] = []
    for (const field of result.elements) {
      if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
        entries.push(transform(field) as JtpRecordEntryResult)
      }
    }
    return {
      type: 'RECORD',
      entries
    }
  },

  JsdocTypeSpecialNamePath: result => {
    if (result.specialType !== 'module') {
      throw new Error(`jsdoctypeparser does not support type ${result.specialType} at this point.`)
    }
    return {
      type: 'MODULE',
      value: {
        type: 'FILE_PATH',
        quoteStyle: getQuoteStyle(result.meta.quote),
        path: result.value
      }
    }
  },

  JsdocTypeNamePath: (result, transform) => {
    let hasEventPrefix = false
    let name
    let quoteStyle
    if (result.right.type === 'JsdocTypeSpecialNamePath' && result.right.specialType === 'event') {
      hasEventPrefix = true
      name = result.right.value
      quoteStyle = getQuoteStyle(result.right.meta.quote)
    } else {
      name = result.right.value
      quoteStyle = getQuoteStyle(result.right.meta.quote)
    }

    const transformed: JtpMemberResult = {
      type: getMemberType(result.pathType),
      owner: transform(result.left),
      name,
      quoteStyle,
      hasEventPrefix
    }

    if (transformed.owner.type === 'MODULE') {
      const tModule = transformed.owner
      transformed.owner = transformed.owner.value
      tModule.value = transformed
      return tModule
    } else {
      return transformed
    }
  },

  JsdocTypeUnion: (result, transform) => nestResults('UNION', result.elements.map(transform)),

  JsdocTypeParenthesis: (result, transform) => ({
    type: 'PARENTHESIS',
    value: transform(assertRootResult(result.element))
  }),

  JsdocTypeNull: () => ({
    type: 'NAME',
    name: 'null'
  }),

  JsdocTypeUnknown: () => ({
    type: 'UNKNOWN'
  }),

  JsdocTypeStringValue: result => ({
    type: 'STRING_VALUE',
    quoteStyle: getQuoteStyle(result.meta.quote),
    string: result.value
  }),

  JsdocTypeIntersection: (result, transform) => nestResults('INTERSECTION', result.elements.map(transform)),

  JsdocTypeNumber: result => ({
    type: 'NUMBER_VALUE',
    number: result.value.toString()
  }),

  JsdocTypeSymbol: notAvailableTransform,

  JsdocTypeProperty: notAvailableTransform,

  JsdocTypePredicate: notAvailableTransform,

  JsdocTypeMappedType: notAvailableTransform,

  JsdocTypeIndexSignature: notAvailableTransform
}

export function jtpTransform (result: RootResult): JtpResult {
  return transform(jtpRules, result)
}
