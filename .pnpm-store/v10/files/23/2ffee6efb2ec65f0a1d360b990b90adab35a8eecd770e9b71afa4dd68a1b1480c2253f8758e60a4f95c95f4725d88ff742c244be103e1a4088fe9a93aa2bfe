import { extractSpecialParams, notAvailableTransform, transform, type TransformRules } from './transform'
import { assertRootResult } from '../assertTypes'
import { type RootResult } from '../result/RootResult'
import { quote } from './stringify'

export const reservedWords = [
  'null',
  'true',
  'false',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield'
]

interface ModifiableResult {
  optional?: boolean
  nullable?: boolean
  repeatable?: boolean
}

export type CatharsisParseResult =
  CatharsisNameResult
  | CatharsisUnionResult
  | CatharsisGenericResult
  | CatharsisNullResult
  | CatharsisUndefinedResult
  | CatharsisAllResult
  | CatharsisUnknownResult
  | CatharsisFunctionResult
  | CatharsisRecordResult
  | CatharsisFieldResult

export type CatharsisNameResult = ModifiableResult & {
  type: 'NameExpression'
  name: string
  reservedWord?: boolean
}

export type CatharsisUnionResult = ModifiableResult & {
  type: 'TypeUnion'
  elements: CatharsisParseResult[]
}

export type CatharsisGenericResult = ModifiableResult & {
  type: 'TypeApplication'
  expression: CatharsisParseResult
  applications: CatharsisParseResult[]
}

export type CatharsisNullResult = ModifiableResult & {
  type: 'NullLiteral'
}

export type CatharsisUndefinedResult = ModifiableResult & {
  type: 'UndefinedLiteral'
}

export type CatharsisAllResult = ModifiableResult & {
  type: 'AllLiteral'
}

export type CatharsisUnknownResult = ModifiableResult & {
  type: 'UnknownLiteral'
}

export type CatharsisFunctionResult = ModifiableResult & {
  type: 'FunctionType'
  params: CatharsisParseResult[]
  result?: CatharsisParseResult
  this?: CatharsisParseResult
  new?: CatharsisParseResult
}

export type CatharsisFieldResult = ModifiableResult & {
  type: 'FieldType'
  key: CatharsisParseResult
  value: CatharsisParseResult | undefined
}

export type CatharsisRecordResult = ModifiableResult & {
  type: 'RecordType'
  fields: CatharsisFieldResult[]
}

function makeName (value: string): CatharsisNameResult {
  const result: CatharsisNameResult = {
    type: 'NameExpression',
    name: value
  }
  if (reservedWords.includes(value)) {
    result.reservedWord = true
  }
  return result
}

const catharsisTransformRules: TransformRules<CatharsisParseResult> = {
  JsdocTypeOptional: (result, transform) => {
    const transformed = transform(result.element)
    transformed.optional = true
    return transformed
  },

  JsdocTypeNullable: (result, transform) => {
    const transformed = transform(result.element)
    transformed.nullable = true
    return transformed
  },

  JsdocTypeNotNullable: (result, transform) => {
    const transformed = transform(result.element)
    transformed.nullable = false
    return transformed
  },

  JsdocTypeVariadic: (result, transform) => {
    if (result.element === undefined) {
      throw new Error('dots without value are not allowed in catharsis mode')
    }
    const transformed = transform(result.element)
    transformed.repeatable = true
    return transformed
  },

  JsdocTypeAny: () => ({
    type: 'AllLiteral'
  }),

  JsdocTypeNull: () => ({
    type: 'NullLiteral'
  }),

  JsdocTypeStringValue: result => makeName(quote(result.value, result.meta.quote)),

  JsdocTypeUndefined: () => ({
    type: 'UndefinedLiteral'
  }),

  JsdocTypeUnknown: () => ({
    type: 'UnknownLiteral'
  }),

  JsdocTypeFunction: (result, transform) => {
    const params = extractSpecialParams(result)

    const transformed: CatharsisFunctionResult = {
      type: 'FunctionType',
      params: params.params.map(transform)
    }

    if (params.this !== undefined) {
      transformed.this = transform(params.this)
    }

    if (params.new !== undefined) {
      transformed.new = transform(params.new)
    }

    if (result.returnType !== undefined) {
      transformed.result = transform(result.returnType)
    }

    return transformed
  },

  JsdocTypeGeneric: (result, transform) => ({
    type: 'TypeApplication',
    applications: result.elements.map(o => transform(o)),
    expression: transform(result.left)
  }),

  JsdocTypeSpecialNamePath: result => makeName(result.specialType + ':' + quote(result.value, result.meta.quote)),

  JsdocTypeName: result => {
    if (result.value !== 'function') {
      return makeName(result.value)
    } else {
      return {
        type: 'FunctionType',
        params: []
      }
    }
  },

  JsdocTypeNumber: result => makeName(result.value.toString()),

  JsdocTypeObject: (result, transform) => {
    const transformed: CatharsisRecordResult = {
      type: 'RecordType',
      fields: []
    }
    for (const field of result.elements) {
      if (field.type !== 'JsdocTypeObjectField' && field.type !== 'JsdocTypeJsdocObjectField') {
        transformed.fields.push({
          type: 'FieldType',
          key: transform(field),
          value: undefined
        })
      } else {
        transformed.fields.push(transform(field) as unknown as CatharsisFieldResult)
      }
    }

    return transformed
  },

  JsdocTypeObjectField: (result, transform) => {
    if (typeof result.key !== 'string') {
      throw new Error('Index signatures and mapped types are not supported')
    }
    return {
      type: 'FieldType',
      key: makeName(quote(result.key, result.meta.quote)),
      value: result.right === undefined ? undefined : transform(result.right)
    }
  },

  JsdocTypeJsdocObjectField: (result, transform) => ({
    type: 'FieldType',
    key: transform(result.left),
    value: transform(result.right)
  }),

  JsdocTypeUnion: (result, transform) => ({
    type: 'TypeUnion',
    elements: result.elements.map(e => transform(e))
  }),

  JsdocTypeKeyValue: (result, transform) => {
    return {
      type: 'FieldType',
      key: makeName(result.key),
      value: result.right === undefined ? undefined : transform(result.right)
    }
  },

  JsdocTypeNamePath: (result, transform) => {
    const leftResult = transform(result.left) as CatharsisNameResult
    let rightValue
    if (result.right.type === 'JsdocTypeSpecialNamePath') {
      rightValue = (transform(result.right) as CatharsisNameResult).name
    } else {
      rightValue = quote(result.right.value, result.right.meta.quote)
    }

    const joiner = result.pathType === 'inner' ? '~' : result.pathType === 'instance' ? '#' : '.'

    return makeName(`${leftResult.name}${joiner}${rightValue}`)
  },

  JsdocTypeSymbol: result => {
    let value = ''

    let element = result.element
    let trailingDots = false

    if (element?.type === 'JsdocTypeVariadic') {
      if (element.meta.position === 'prefix') {
        value = '...'
      } else {
        trailingDots = true
      }
      element = element.element
    }

    if (element?.type === 'JsdocTypeName') {
      value += element.value
    } else if (element?.type === 'JsdocTypeNumber') {
      value += element.value.toString()
    }

    if (trailingDots) {
      value += '...'
    }

    return makeName(`${result.value}(${value})`)
  },

  JsdocTypeParenthesis: (result, transform) => transform(assertRootResult(result.element)),

  JsdocTypeMappedType: notAvailableTransform,
  JsdocTypeIndexSignature: notAvailableTransform,
  JsdocTypeImport: notAvailableTransform,
  JsdocTypeKeyof: notAvailableTransform,
  JsdocTypeTuple: notAvailableTransform,
  JsdocTypeTypeof: notAvailableTransform,
  JsdocTypeIntersection: notAvailableTransform,
  JsdocTypeProperty: notAvailableTransform,
  JsdocTypePredicate: notAvailableTransform
}

export function catharsisTransform (result: RootResult): CatharsisParseResult {
  return transform(catharsisTransformRules, result)
}
