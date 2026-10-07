import type { NonEmptyReadonlyArray } from "../../Array.js"
import * as Inspectable from "../../Inspectable.js"
import type * as ParseResult from "../../ParseResult.js"
import type * as AST from "../../SchemaAST.js"

/** @internal */
export const getKeysForIndexSignature = (
  input: { readonly [x: PropertyKey]: unknown },
  parameter: AST.Parameter
): ReadonlyArray<string> | ReadonlyArray<symbol> => {
  switch (parameter._tag) {
    case "StringKeyword":
    case "TemplateLiteral":
      return Object.keys(input)
    case "SymbolKeyword":
      return Object.getOwnPropertySymbols(input)
    case "Refinement":
      return getKeysForIndexSignature(input, parameter.from)
  }
}

/** @internal */
export const memoizeThunk = <A>(f: () => A): () => A => {
  let done = false
  let a: A
  return () => {
    if (done) {
      return a
    }
    a = f()
    done = true
    return a
  }
}

/** @internal */
export type SingleOrArray<A> = A | ReadonlyArray<A>

/** @internal */
export const isNonEmpty = <A>(x: ParseResult.SingleOrNonEmpty<A>): x is NonEmptyReadonlyArray<A> => Array.isArray(x)

/** @internal */
export const isSingle = <A>(x: A | ReadonlyArray<A>): x is A => !Array.isArray(x)

/** @internal */
export const formatPathKey = (key: PropertyKey): string => `[${Inspectable.formatPropertyKey(key)}]`

/** @internal */
export const formatPath = (path: ParseResult.Path): string =>
  isNonEmpty(path) ? path.map(formatPathKey).join("") : formatPathKey(path)
