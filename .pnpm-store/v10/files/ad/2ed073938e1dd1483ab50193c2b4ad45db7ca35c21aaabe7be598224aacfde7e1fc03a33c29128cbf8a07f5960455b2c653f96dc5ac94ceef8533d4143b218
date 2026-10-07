/**
 * @since 3.10.0
 */
import * as Arr from "./Array.js"
import * as Inspectable from "./Inspectable.js"
import * as errors_ from "./internal/schema/errors.js"
import * as util_ from "./internal/schema/util.js"
import * as Option from "./Option.js"
import * as ParseResult from "./ParseResult.js"
import type * as Schema from "./Schema.js"
import * as AST from "./SchemaAST.js"

/**
 * @category model
 * @since 3.10.0
 */
export interface Pretty<To> {
  (a: To): string
}

/**
 * @category annotations
 * @since 3.10.0
 */
export type PrettyAnnotation<A, TypeParameters extends ReadonlyArray<any> = readonly []> = (
  ...pretties: { readonly [K in keyof TypeParameters]: Pretty<TypeParameters[K]> }
) => Pretty<A>

/**
 * @category prettify
 * @since 3.10.0
 */
export const make = <A, I, R>(schema: Schema.Schema<A, I, R>): (a: A) => string => compile(schema.ast, [])

const getPrettyAnnotation = AST.getAnnotation<PrettyAnnotation<any, any>>(AST.PrettyAnnotationId)

const getMatcher = (defaultPretty: Pretty<any>) => (ast: AST.AST): Pretty<any> =>
  Option.match(getPrettyAnnotation(ast), {
    onNone: () => defaultPretty,
    onSome: (handler) => handler()
  })

const toString = getMatcher((a) => String(a))

const stringify = getMatcher((a) => JSON.stringify(a))

const formatUnknown = getMatcher(Inspectable.formatUnknown)

/**
 * @since 3.10.0
 */
export const match: AST.Match<Pretty<any>> = {
  "Declaration": (ast, go, path) => {
    const annotation = getPrettyAnnotation(ast)
    if (Option.isSome(annotation)) {
      return annotation.value(...ast.typeParameters.map((tp) => go(tp, path)))
    }
    throw new Error(errors_.getPrettyMissingAnnotationErrorMessage(path, ast))
  },
  "VoidKeyword": getMatcher(() => "void(0)"),
  "NeverKeyword": getMatcher(() => {
    throw new Error(errors_.getPrettyNeverErrorMessage)
  }),
  "Literal": getMatcher((literal: AST.LiteralValue): string =>
    typeof literal === "bigint" ?
      `${String(literal)}n` :
      JSON.stringify(literal)
  ),
  "SymbolKeyword": toString,
  "UniqueSymbol": toString,
  "TemplateLiteral": stringify,
  "UndefinedKeyword": toString,
  "UnknownKeyword": formatUnknown,
  "AnyKeyword": formatUnknown,
  "ObjectKeyword": formatUnknown,
  "StringKeyword": stringify,
  "NumberKeyword": toString,
  "BooleanKeyword": toString,
  "BigIntKeyword": getMatcher((a) => `${String(a)}n`),
  "Enums": stringify,
  "TupleType": (ast, go, path) => {
    const hook = getPrettyAnnotation(ast)
    if (Option.isSome(hook)) {
      return hook.value()
    }
    const elements = ast.elements.map((e, i) => go(e.type, path.concat(i)))
    const rest = ast.rest.map((annotatedAST) => go(annotatedAST.type, path))
    return (input: ReadonlyArray<unknown>) => {
      const output: Array<string> = []
      let i = 0
      // ---------------------------------------------
      // handle elements
      // ---------------------------------------------
      for (; i < elements.length; i++) {
        if (input.length < i + 1) {
          if (ast.elements[i].isOptional) {
            continue
          }
        } else {
          output.push(elements[i](input[i]))
        }
      }
      // ---------------------------------------------
      // handle rest element
      // ---------------------------------------------
      if (Arr.isNonEmptyReadonlyArray(rest)) {
        const [head, ...tail] = rest
        for (; i < input.length - tail.length; i++) {
          output.push(head(input[i]))
        }
        // ---------------------------------------------
        // handle post rest elements
        // ---------------------------------------------
        for (let j = 0; j < tail.length; j++) {
          i += j
          output.push(tail[j](input[i]))
        }
      }

      return "[" + output.join(", ") + "]"
    }
  },
  "TypeLiteral": (ast, go, path) => {
    const hook = getPrettyAnnotation(ast)
    if (Option.isSome(hook)) {
      return hook.value()
    }
    const propertySignaturesTypes = ast.propertySignatures.map((ps) => go(ps.type, path.concat(ps.name)))
    const indexSignatureTypes = ast.indexSignatures.map((is) => go(is.type, path))
    const expectedKeys: any = {}
    for (let i = 0; i < propertySignaturesTypes.length; i++) {
      expectedKeys[ast.propertySignatures[i].name] = null
    }
    return (input: { readonly [x: PropertyKey]: unknown }) => {
      const output: Array<string> = []
      // ---------------------------------------------
      // handle property signatures
      // ---------------------------------------------
      for (let i = 0; i < propertySignaturesTypes.length; i++) {
        const ps = ast.propertySignatures[i]
        const name = ps.name
        if (ps.isOptional && !Object.prototype.hasOwnProperty.call(input, name)) {
          continue
        }
        output.push(
          `${Inspectable.formatPropertyKey(name)}: ${propertySignaturesTypes[i](input[name])}`
        )
      }
      // ---------------------------------------------
      // handle index signatures
      // ---------------------------------------------
      if (indexSignatureTypes.length > 0) {
        for (let i = 0; i < indexSignatureTypes.length; i++) {
          const type = indexSignatureTypes[i]
          const keys = util_.getKeysForIndexSignature(input, ast.indexSignatures[i].parameter)
          for (const key of keys) {
            if (Object.prototype.hasOwnProperty.call(expectedKeys, key)) {
              continue
            }
            output.push(`${Inspectable.formatPropertyKey(key)}: ${type(input[key])}`)
          }
        }
      }

      return Arr.isNonEmptyReadonlyArray(output) ? "{ " + output.join(", ") + " }" : "{}"
    }
  },
  "Union": (ast, go, path) => {
    const hook = getPrettyAnnotation(ast)
    if (Option.isSome(hook)) {
      return hook.value()
    }
    const types = ast.types.map((ast) => [ParseResult.is({ ast } as any), go(ast, path)] as const)
    return (a) => {
      const index = types.findIndex(([is]) => is(a))
      if (index === -1) {
        throw new Error(errors_.getPrettyNoMatchingSchemaErrorMessage(a, path, ast))
      }
      return types[index][1](a)
    }
  },
  "Suspend": (ast, go, path) => {
    return Option.match(getPrettyAnnotation(ast), {
      onNone: () => {
        const get = util_.memoizeThunk(() => go(ast.f(), path))
        return (a) => get()(a)
      },
      onSome: (handler) => handler()
    })
  },
  "Refinement": (ast, go, path) => {
    return Option.match(getPrettyAnnotation(ast), {
      onNone: () => go(ast.from, path),
      onSome: (handler) => handler()
    })
  },
  "Transformation": (ast, go, path) => {
    return Option.match(getPrettyAnnotation(ast), {
      onNone: () => go(ast.to, path),
      onSome: (handler) => handler()
    })
  }
}

const compile = AST.getCompiler(match)
