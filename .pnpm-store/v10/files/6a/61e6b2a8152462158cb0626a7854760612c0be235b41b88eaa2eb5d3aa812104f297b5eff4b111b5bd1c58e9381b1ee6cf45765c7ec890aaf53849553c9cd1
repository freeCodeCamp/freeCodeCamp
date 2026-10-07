import { transform, type TransformRules } from './transform'
import { type NonRootResult } from '../result/NonRootResult'
import { type RootResult } from '../result/RootResult'

function applyPosition (position: 'prefix' | 'suffix', target: string, value: string): string {
  return position === 'prefix' ? value + target : target + value
}

export function quote (value: string, quote: 'single' | 'double' | undefined): string {
  switch (quote) {
    case 'double':
      return `"${value}"`
    case 'single':
      return `'${value}'`
    case undefined:
      return value
  }
}

export function stringifyRules (): TransformRules<string> {
  return {
    JsdocTypeParenthesis: (result, transform) => `(${result.element !== undefined ? transform(result.element) : ''})`,

    JsdocTypeKeyof: (result, transform) => `keyof ${transform(result.element)}`,

    JsdocTypeFunction: (result, transform) => {
      if (!result.arrow) {
        let stringified = result.constructor ? 'new' : 'function'
        if (!result.parenthesis) {
          return stringified
        }
        stringified += `(${result.parameters.map(transform).join(', ')})`
        if (result.returnType !== undefined) {
          stringified += `: ${transform(result.returnType)}`
        }
        return stringified
      } else {
        if (result.returnType === undefined) {
          throw new Error('Arrow function needs a return type.')
        }
        let stringified = `(${result.parameters.map(transform).join(', ')}) => ${transform(result.returnType)}`
        if (result.constructor) {
          stringified = 'new ' + stringified
        }
        return stringified
      }
    },

    JsdocTypeName: result => result.value,

    JsdocTypeTuple: (result, transform) => `[${(result.elements as NonRootResult[]).map(transform).join(', ')}]`,

    JsdocTypeVariadic: (result, transform) => result.meta.position === undefined
      ? '...'
      : applyPosition(result.meta.position, transform(result.element as NonRootResult), '...'),

    JsdocTypeNamePath: (result, transform) => {
      const left = transform(result.left)
      const right = transform(result.right)
      switch (result.pathType) {
        case 'inner':
          return `${left}~${right}`
        case 'instance':
          return `${left}#${right}`
        case 'property':
          return `${left}.${right}`
        case 'property-brackets':
          return `${left}[${right}]`
      }
    },

    JsdocTypeStringValue: result => quote(result.value, result.meta.quote),

    JsdocTypeAny: () => '*',

    JsdocTypeGeneric: (result, transform) => {
      if (result.meta.brackets === 'square') {
        const element = result.elements[0]
        const transformed = transform(element)
        if (element.type === 'JsdocTypeUnion' || element.type === 'JsdocTypeIntersection') {
          return `(${transformed})[]`
        } else {
          return `${transformed}[]`
        }
      } else {
        return `${transform(result.left)}${result.meta.dot ? '.' : ''}<${result.elements.map(transform).join(', ')}>`
      }
    },

    JsdocTypeImport: (result, transform) => `import(${transform(result.element)})`,

    JsdocTypeObjectField: (result, transform) => {
      let text = ''
      if (result.readonly) {
        text += 'readonly '
      }
      if (typeof result.key === 'string') {
        text += quote(result.key, result.meta.quote)
      } else {
        text += transform(result.key)
      }

      if (result.optional) {
        text += '?'
      }

      if (result.right === undefined) {
        return text
      } else {
        return text + `: ${transform(result.right)}`
      }
    },

    JsdocTypeJsdocObjectField: (result, transform) => {
      return `${transform(result.left)}: ${transform(result.right)}`
    },

    JsdocTypeKeyValue: (result, transform) => {
      let text = result.key
      if (result.optional) {
        text += '?'
      }
      if (result.variadic) {
        text = '...' + text
      }

      if (result.right === undefined) {
        return text
      } else {
        return text + `: ${transform(result.right)}`
      }
    },

    JsdocTypeSpecialNamePath: result => `${result.specialType}:${quote(result.value, result.meta.quote)}`,

    JsdocTypeNotNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '!'),

    JsdocTypeNull: () => 'null',

    JsdocTypeNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '?'),

    JsdocTypeNumber: result => result.value.toString(),

    JsdocTypeObject: (result, transform) => `{${result.elements.map(transform).join((result.meta.separator === 'comma' ? ',' : ';') + ' ')}}`,

    JsdocTypeOptional: (result, transform) => applyPosition(result.meta.position, transform(result.element), '='),

    JsdocTypeSymbol: (result, transform) => `${result.value}(${result.element !== undefined ? transform(result.element) : ''})`,

    JsdocTypeTypeof: (result, transform) => `typeof ${transform(result.element)}`,

    JsdocTypeUndefined: () => 'undefined',

    JsdocTypeUnion: (result, transform) => result.elements.map(transform).join(' | '),

    JsdocTypeUnknown: () => '?',

    JsdocTypeIntersection: (result, transform) => result.elements.map(transform).join(' & '),

    JsdocTypeProperty: result => quote(result.value, result.meta.quote),

    JsdocTypePredicate: (result, transform) => `${transform(result.left)} is ${transform(result.right)}`,

    JsdocTypeIndexSignature: (result, transform) => `[${result.key}: ${transform(result.right)}]`,

    JsdocTypeMappedType: (result, transform) => `[${result.key} in ${transform(result.right)}]`
  }
}

const storedStringifyRules = stringifyRules()

export function stringify (result: RootResult): string {
  return transform(storedStringifyRules, result)
}
