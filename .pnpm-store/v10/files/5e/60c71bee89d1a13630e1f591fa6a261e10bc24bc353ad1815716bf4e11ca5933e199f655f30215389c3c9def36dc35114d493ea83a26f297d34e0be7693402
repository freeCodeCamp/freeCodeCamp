/**
 * @since 3.10.0
 */

import * as Arr from "./Array.js"
import * as Cause from "./Cause.js"
import { TaggedError } from "./Data.js"
import * as Effect from "./Effect.js"
import * as Either from "./Either.js"
import * as Exit from "./Exit.js"
import type { LazyArg } from "./Function.js"
import { dual } from "./Function.js"
import { globalValue } from "./GlobalValue.js"
import * as Inspectable from "./Inspectable.js"
import * as util_ from "./internal/schema/util.js"
import * as Option from "./Option.js"
import * as Predicate from "./Predicate.js"
import * as Scheduler from "./Scheduler.js"
import type * as Schema from "./Schema.js"
import * as AST from "./SchemaAST.js"
import type { Concurrency } from "./Types.js"

/**
 * `ParseIssue` is a type that represents the different types of errors that can occur when decoding/encoding a value.
 *
 * @category model
 * @since 3.10.0
 */
export type ParseIssue =
  // leaf
  | Type
  | Missing
  | Unexpected
  | Forbidden
  // composite
  | Pointer
  | Refinement
  | Transformation
  | Composite

/**
 * @category model
 * @since 3.10.0
 */
export type SingleOrNonEmpty<A> = A | Arr.NonEmptyReadonlyArray<A>

/**
 * @category model
 * @since 3.10.0
 */
export type Path = SingleOrNonEmpty<PropertyKey>

/**
 * @category model
 * @since 3.10.0
 */
export class Pointer {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Pointer"
  constructor(
    readonly path: Path,
    readonly actual: unknown,
    readonly issue: ParseIssue
  ) {}
}

/**
 * Error that occurs when an unexpected key or index is present.
 *
 * @category model
 * @since 3.10.0
 */
export class Unexpected {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Unexpected"
  constructor(
    readonly actual: unknown,
    /**
     * @since 3.10.0
     */
    readonly message?: string
  ) {}
}

/**
 * Error that occurs when a required key or index is missing.
 *
 * @category model
 * @since 3.10.0
 */
export class Missing {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Missing"
  /**
   * @since 3.10.0
   */
  readonly actual = undefined
  constructor(
    /**
     * @since 3.10.0
     */
    readonly ast: AST.Type,
    /**
     * @since 3.10.0
     */
    readonly message?: string
  ) {}
}

/**
 * Error that contains multiple issues.
 *
 * @category model
 * @since 3.10.0
 */
export class Composite {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Composite"
  constructor(
    readonly ast: AST.AST,
    readonly actual: unknown,
    readonly issues: SingleOrNonEmpty<ParseIssue>,
    readonly output?: unknown
  ) {}
}

/**
 * Error that occurs when a refinement has an error.
 *
 * @category model
 * @since 3.10.0
 */
export class Refinement {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Refinement"
  constructor(
    readonly ast: AST.Refinement,
    readonly actual: unknown,
    readonly kind: "From" | "Predicate",
    readonly issue: ParseIssue
  ) {}
}

/**
 * Error that occurs when a transformation has an error.
 *
 * @category model
 * @since 3.10.0
 */
export class Transformation {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Transformation"
  constructor(
    readonly ast: AST.Transformation,
    readonly actual: unknown,
    readonly kind: "Encoded" | "Transformation" | "Type",
    readonly issue: ParseIssue
  ) {}
}

/**
 * The `Type` variant of the `ParseIssue` type represents an error that occurs when the `actual` value is not of the expected type.
 * The `ast` field specifies the expected type, and the `actual` field contains the value that caused the error.
 *
 * @category model
 * @since 3.10.0
 */
export class Type {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Type"
  constructor(
    readonly ast: AST.AST,
    readonly actual: unknown,
    readonly message?: string
  ) {}
}

/**
 * The `Forbidden` variant of the `ParseIssue` type represents a forbidden operation, such as when encountering an Effect that is not allowed to execute (e.g., using `runSync`).
 *
 * @category model
 * @since 3.10.0
 */
export class Forbidden {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Forbidden"
  constructor(
    readonly ast: AST.AST,
    readonly actual: unknown,
    readonly message?: string
  ) {}
}

/**
 * @category type id
 * @since 3.10.0
 */
export const ParseErrorTypeId: unique symbol = Symbol.for("effect/Schema/ParseErrorTypeId")

/**
 * @category type id
 * @since 3.10.0
 */
export type ParseErrorTypeId = typeof ParseErrorTypeId

/**
 * @since 3.10.0
 */
export const isParseError = (u: unknown): u is ParseError => Predicate.hasProperty(u, ParseErrorTypeId)

/**
 * @since 3.10.0
 */
export class ParseError extends TaggedError("ParseError")<{ readonly issue: ParseIssue }> {
  /**
   * @since 3.10.0
   */
  readonly [ParseErrorTypeId] = ParseErrorTypeId

  get message() {
    return this.toString()
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return TreeFormatter.formatIssueSync(this.issue)
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _id: "ParseError",
      message: this.toString()
    }
  }
  /**
   * @since 3.10.0
   */
  [Inspectable.NodeInspectSymbol]() {
    return this.toJSON()
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const parseError = (issue: ParseIssue): ParseError => new ParseError({ issue })

/**
 * @category constructors
 * @since 3.10.0
 */
export const succeed: <A>(a: A) => Either.Either<A, ParseIssue> = Either.right

/**
 * @category constructors
 * @since 3.10.0
 */
export const fail: (issue: ParseIssue) => Either.Either<never, ParseIssue> = Either.left

const _try: <A>(options: {
  try: LazyArg<A>
  catch: (e: unknown) => ParseIssue
}) => Either.Either<A, ParseIssue> = Either.try

export {
  /**
   * @category constructors
   * @since 3.10.0
   */
  _try as try
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const fromOption: {
  /**
   * @category constructors
   * @since 3.10.0
   */
  (onNone: () => ParseIssue): <A>(self: Option.Option<A>) => Either.Either<A, ParseIssue>
  /**
   * @category constructors
   * @since 3.10.0
   */
  <A>(self: Option.Option<A>, onNone: () => ParseIssue): Either.Either<A, ParseIssue>
} = Either.fromOption

const isEither: <A, E, R>(self: Effect.Effect<A, E, R>) => self is Either.Either<A, E> = Either.isEither as any

/**
 * @category optimisation
 * @since 3.10.0
 */
export const flatMap: {
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <A, B, E1, R1>(f: (a: A) => Effect.Effect<B, E1, R1>): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E1 | E, R1 | R>
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <A, E, R, B, E1, R1>(self: Effect.Effect<A, E, R>, f: (a: A) => Effect.Effect<B, E1, R1>): Effect.Effect<B, E | E1, R | R1>
} = dual(2, <A, E, R, B, E1, R1>(
  self: Effect.Effect<A, E, R>,
  f: (a: A) => Effect.Effect<B, E1, R1>
): Effect.Effect<B, E | E1, R | R1> => {
  return isEither(self) ?
    Either.match(self, { onLeft: Either.left, onRight: f }) :
    Effect.flatMap(self, f)
})

/**
 * @category optimisation
 * @since 3.10.0
 */
export const map: {
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <A, B>(f: (a: A) => B): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R>
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <A, E, R, B>(self: Effect.Effect<A, E, R>, f: (a: A) => B): Effect.Effect<B, E, R>
} = dual(2, <A, E, R, B>(self: Effect.Effect<A, E, R>, f: (a: A) => B): Effect.Effect<B, E, R> => {
  return isEither(self) ?
    Either.map(self, f) :
    Effect.map(self, f)
})

/**
 * @category optimisation
 * @since 3.10.0
 */
export const mapError: {
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <E, E2>(f: (e: E) => E2): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E2, R>
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <A, E, R, E2>(self: Effect.Effect<A, E, R>, f: (e: E) => E2): Effect.Effect<A, E2, R>
} = dual(2, <A, E, R, E2>(self: Effect.Effect<A, E, R>, f: (e: E) => E2): Effect.Effect<A, E2, R> => {
  return isEither(self) ?
    Either.mapLeft(self, f) :
    Effect.mapError(self, f)
})

// TODO(4.0): remove
/**
 * @category optimisation
 * @since 3.10.0
 */
export const eitherOrUndefined = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Either.Either<A, E> | undefined => {
  if (isEither(self)) {
    return self
  }
}

/**
 * @category optimisation
 * @since 3.10.0
 */
export const mapBoth: {
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <E, E2, A, A2>(
    options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
  ): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R>
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <A, E, R, E2, A2>(
    self: Effect.Effect<A, E, R>,
    options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
  ): Effect.Effect<A2, E2, R>
} = dual(2, <A, E, R, E2, A2>(
  self: Effect.Effect<A, E, R>,
  options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
): Effect.Effect<A2, E2, R> => {
  return isEither(self) ?
    Either.mapBoth(self, { onLeft: options.onFailure, onRight: options.onSuccess }) :
    Effect.mapBoth(self, options)
})

/**
 * @category optimisation
 * @since 3.10.0
 */
export const orElse: {
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <E, A2, E2, R2>(f: (e: E) => Effect.Effect<A2, E2, R2>): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E2, R2 | R>
  /**
   * @category optimisation
   * @since 3.10.0
   */
  <A, E, R, A2, E2, R2>(self: Effect.Effect<A, E, R>, f: (e: E) => Effect.Effect<A2, E2, R2>): Effect.Effect<A2 | A, E2, R2 | R>
} = dual(2, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  f: (e: E) => Effect.Effect<A2, E2, R2>
): Effect.Effect<A2 | A, E2, R2 | R> => {
  return isEither(self) ?
    Either.match(self, { onLeft: f, onRight: Either.right }) :
    Effect.catchAll(self, f)
})

/**
 * @since 3.10.0
 */
export type DecodeUnknown<Out, R> = (u: unknown, options?: AST.ParseOptions) => Effect.Effect<Out, ParseIssue, R>

/**
 * @since 3.10.0
 */
export type DeclarationDecodeUnknown<Out, R> = (
  u: unknown,
  options: AST.ParseOptions,
  ast: AST.Declaration
) => Effect.Effect<Out, ParseIssue, R>

/** @internal */
export const mergeInternalOptions = (
  options: InternalOptions | undefined,
  overrideOptions: InternalOptions | number | undefined
): InternalOptions | undefined => {
  if (overrideOptions === undefined || Predicate.isNumber(overrideOptions)) {
    return options
  }
  if (options === undefined) {
    return overrideOptions
  }
  return { ...options, ...overrideOptions }
}

const getEither = (ast: AST.AST, isDecoding: boolean, options?: AST.ParseOptions) => {
  const parser = goMemo(ast, isDecoding)
  return (u: unknown, overrideOptions?: AST.ParseOptions): Either.Either<any, ParseIssue> =>
    parser(u, mergeInternalOptions(options, overrideOptions)) as any
}

const getSync = (ast: AST.AST, isDecoding: boolean, options?: AST.ParseOptions) => {
  const parser = getEither(ast, isDecoding, options)
  return (input: unknown, overrideOptions?: AST.ParseOptions) =>
    Either.getOrThrowWith(parser(input, overrideOptions), parseError)
}

/** @internal */
export const getOption = (ast: AST.AST, isDecoding: boolean, options?: AST.ParseOptions) => {
  const parser = getEither(ast, isDecoding, options)
  return (input: unknown, overrideOptions?: AST.ParseOptions): Option.Option<any> =>
    Option.getRight(parser(input, overrideOptions))
}

const getEffect = <R>(ast: AST.AST, isDecoding: boolean, options?: AST.ParseOptions) => {
  const parser = goMemo(ast, isDecoding)
  return (input: unknown, overrideOptions?: AST.ParseOptions): Effect.Effect<any, ParseIssue, R> =>
    parser(input, { ...mergeInternalOptions(options, overrideOptions), isEffectAllowed: true })
}

/**
 * @throws `ParseError`
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownSync = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => A => getSync(schema.ast, true, options)

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownOption = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Option.Option<A> => getOption(schema.ast, true, options)

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownEither = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Either.Either<A, ParseIssue> =>
  getEither(schema.ast, true, options)

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownPromise = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => {
  const parser = decodeUnknown(schema, options)
  return (u: unknown, overrideOptions?: AST.ParseOptions): Promise<A> => Effect.runPromise(parser(u, overrideOptions))
}

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknown = <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Effect.Effect<A, ParseIssue, R> =>
  getEffect(schema.ast, true, options)

/**
 * @throws `ParseError`
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownSync = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => I => getSync(schema.ast, false, options)

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownOption = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Option.Option<I> => getOption(schema.ast, false, options)

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownEither = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Either.Either<I, ParseIssue> =>
  getEither(schema.ast, false, options)

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownPromise = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => {
  const parser = encodeUnknown(schema, options)
  return (u: unknown, overrideOptions?: AST.ParseOptions): Promise<I> => Effect.runPromise(parser(u, overrideOptions))
}

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknown = <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Effect.Effect<I, ParseIssue, R> =>
  getEffect(schema.ast, false, options)

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeSync: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (i: I, overrideOptions?: AST.ParseOptions) => A = decodeUnknownSync

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeOption: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (i: I, overrideOptions?: AST.ParseOptions) => Option.Option<A> = decodeUnknownOption

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeEither: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (i: I, overrideOptions?: AST.ParseOptions) => Either.Either<A, ParseIssue> = decodeUnknownEither

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodePromise: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (i: I, overrideOptions?: AST.ParseOptions) => Promise<A> = decodeUnknownPromise

/**
 * @category decoding
 * @since 3.10.0
 */
export const decode: <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
) => (i: I, overrideOptions?: AST.ParseOptions) => Effect.Effect<A, ParseIssue, R> = decodeUnknown

/**
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
export const validateSync = <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => A => getSync(AST.typeAST(schema.ast), true, options)

/**
 * @category validation
 * @since 3.10.0
 */
export const validateOption = <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Option.Option<A> =>
  getOption(AST.typeAST(schema.ast), true, options)

/**
 * @category validation
 * @since 3.10.0
 */
export const validateEither = <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
): (u: unknown, overrideOptions?: AST.ParseOptions) => Either.Either<A, ParseIssue> =>
  getEither(AST.typeAST(schema.ast), true, options)

/**
 * @category validation
 * @since 3.10.0
 */
export const validatePromise = <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => {
  const parser = validate(schema, options)
  return (u: unknown, overrideOptions?: AST.ParseOptions): Promise<A> => Effect.runPromise(parser(u, overrideOptions))
}

/**
 * @category validation
 * @since 3.10.0
 */
export const validate = <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
): (a: unknown, overrideOptions?: AST.ParseOptions) => Effect.Effect<A, ParseIssue, R> =>
  getEffect(AST.typeAST(schema.ast), true, options)

/**
 * By default the option `exact` is set to `true`.
 *
 * @category validation
 * @since 3.10.0
 */
export const is = <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => {
  const parser = goMemo(AST.typeAST(schema.ast), true)
  return (u: unknown, overrideOptions?: AST.ParseOptions | number): u is A =>
    Either.isRight(parser(u, { exact: true, ...mergeInternalOptions(options, overrideOptions) }) as any)
}

/**
 * By default the option `exact` is set to `true`.
 *
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
export const asserts = <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => {
  const parser = goMemo(AST.typeAST(schema.ast), true)
  return (u: unknown, overrideOptions?: AST.ParseOptions): asserts u is A => {
    const result: Either.Either<any, ParseIssue> = parser(u, {
      exact: true,
      ...mergeInternalOptions(options, overrideOptions)
    }) as any
    if (Either.isLeft(result)) {
      throw parseError(result.left)
    }
  }
}

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeSync: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (a: A, overrideOptions?: AST.ParseOptions) => I = encodeUnknownSync

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeOption: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (input: A, overrideOptions?: AST.ParseOptions) => Option.Option<I> = encodeUnknownOption

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeEither: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (a: A, overrideOptions?: AST.ParseOptions) => Either.Either<I, ParseIssue> = encodeUnknownEither

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodePromise: <A, I>(
  schema: Schema.Schema<A, I, never>,
  options?: AST.ParseOptions
) => (a: A, overrideOptions?: AST.ParseOptions) => Promise<I> = encodeUnknownPromise

/**
 * @category encoding
 * @since 3.10.0
 */
export const encode: <A, I, R>(
  schema: Schema.Schema<A, I, R>,
  options?: AST.ParseOptions
) => (a: A, overrideOptions?: AST.ParseOptions) => Effect.Effect<I, ParseIssue, R> = encodeUnknown

interface InternalOptions extends AST.ParseOptions {
  readonly isEffectAllowed?: boolean
}

interface Parser {
  (i: any, options?: InternalOptions): Effect.Effect<any, ParseIssue, any>
}

const decodeMemoMap = globalValue(
  Symbol.for("effect/ParseResult/decodeMemoMap"),
  () => new WeakMap<AST.AST, Parser>()
)
const encodeMemoMap = globalValue(
  Symbol.for("effect/ParseResult/encodeMemoMap"),
  () => new WeakMap<AST.AST, Parser>()
)

const goMemo = (ast: AST.AST, isDecoding: boolean): Parser => {
  const memoMap = isDecoding ? decodeMemoMap : encodeMemoMap
  const memo = memoMap.get(ast)
  if (memo) {
    return memo
  }
  const raw = go(ast, isDecoding)
  const parseOptionsAnnotation = AST.getParseOptionsAnnotation(ast)
  const parserWithOptions: Parser = Option.isSome(parseOptionsAnnotation)
    ? (i, options) => raw(i, mergeInternalOptions(options, parseOptionsAnnotation.value))
    : raw
  const decodingFallbackAnnotation = AST.getDecodingFallbackAnnotation(ast)
  const parser: Parser = isDecoding && Option.isSome(decodingFallbackAnnotation)
    ? (i, options) =>
      handleForbidden(orElse(parserWithOptions(i, options), decodingFallbackAnnotation.value), ast, i, options)
    : parserWithOptions
  memoMap.set(ast, parser)
  return parser
}

const getConcurrency = (ast: AST.AST): Concurrency | undefined =>
  Option.getOrUndefined(AST.getConcurrencyAnnotation(ast))

const getBatching = (ast: AST.AST): boolean | "inherit" | undefined =>
  Option.getOrUndefined(AST.getBatchingAnnotation(ast))

const go = (ast: AST.AST, isDecoding: boolean): Parser => {
  switch (ast._tag) {
    case "Refinement": {
      if (isDecoding) {
        const from = goMemo(ast.from, true)
        return (i, options) => {
          options = options ?? AST.defaultParseOption
          const allErrors = options?.errors === "all"
          const result = flatMap(
            orElse(from(i, options), (ef) => {
              const issue = new Refinement(ast, i, "From", ef)
              if (allErrors && AST.hasStableFilter(ast) && isComposite(ef)) {
                return Option.match(
                  ast.filter(i, options, ast),
                  {
                    onNone: () => Either.left<ParseIssue>(issue),
                    onSome: (ep) => Either.left(new Composite(ast, i, [issue, new Refinement(ast, i, "Predicate", ep)]))
                  }
                )
              }
              return Either.left(issue)
            }),
            (a) =>
              Option.match(
                ast.filter(a, options, ast),
                {
                  onNone: () => Either.right(a),
                  onSome: (ep) => Either.left(new Refinement(ast, i, "Predicate", ep))
                }
              )
          )
          return handleForbidden(result, ast, i, options)
        }
      } else {
        const from = goMemo(AST.typeAST(ast), true)
        const to = goMemo(dropRightRefinement(ast.from), false)
        return (i, options) => handleForbidden(flatMap(from(i, options), (a) => to(a, options)), ast, i, options)
      }
    }
    case "Transformation": {
      const transform = getFinalTransformation(ast.transformation, isDecoding)
      const from = isDecoding ? goMemo(ast.from, true) : goMemo(ast.to, false)
      const to = isDecoding ? goMemo(ast.to, true) : goMemo(ast.from, false)
      return (i, options) =>
        handleForbidden(
          flatMap(
            mapError(
              from(i, options),
              (e) => new Transformation(ast, i, isDecoding ? "Encoded" : "Type", e)
            ),
            (a) =>
              flatMap(
                mapError(
                  transform(a, options ?? AST.defaultParseOption, ast, i),
                  (e) => new Transformation(ast, i, "Transformation", e)
                ),
                (i2) =>
                  mapError(
                    to(i2, options),
                    (e) => new Transformation(ast, i, isDecoding ? "Type" : "Encoded", e)
                  )
              )
          ),
          ast,
          i,
          options
        )
    }
    case "Declaration": {
      const parse = isDecoding
        ? ast.decodeUnknown(...ast.typeParameters)
        : ast.encodeUnknown(...ast.typeParameters)
      return (i, options) => handleForbidden(parse(i, options ?? AST.defaultParseOption, ast), ast, i, options)
    }
    case "Literal":
      return fromRefinement(ast, (u): u is typeof ast.literal => u === ast.literal)
    case "UniqueSymbol":
      return fromRefinement(ast, (u): u is typeof ast.symbol => u === ast.symbol)
    case "UndefinedKeyword":
      return fromRefinement(ast, Predicate.isUndefined)
    case "NeverKeyword":
      return fromRefinement(ast, Predicate.isNever)
    case "UnknownKeyword":
    case "AnyKeyword":
    case "VoidKeyword":
      return Either.right
    case "StringKeyword":
      return fromRefinement(ast, Predicate.isString)
    case "NumberKeyword":
      return fromRefinement(ast, Predicate.isNumber)
    case "BooleanKeyword":
      return fromRefinement(ast, Predicate.isBoolean)
    case "BigIntKeyword":
      return fromRefinement(ast, Predicate.isBigInt)
    case "SymbolKeyword":
      return fromRefinement(ast, Predicate.isSymbol)
    case "ObjectKeyword":
      return fromRefinement(ast, Predicate.isObject)
    case "Enums":
      return fromRefinement(ast, (u): u is any => ast.enums.some(([_, value]) => value === u))
    case "TemplateLiteral": {
      const regex = AST.getTemplateLiteralRegExp(ast)
      return fromRefinement(ast, (u): u is any => Predicate.isString(u) && regex.test(u))
    }
    case "TupleType": {
      const elements = ast.elements.map((e) => goMemo(e.type, isDecoding))
      const rest = ast.rest.map((annotatedAST) => goMemo(annotatedAST.type, isDecoding))
      let requiredTypes: Array<AST.Type> = ast.elements.filter((e) => !e.isOptional)
      if (ast.rest.length > 0) {
        requiredTypes = requiredTypes.concat(ast.rest.slice(1))
      }
      const requiredLen = requiredTypes.length
      const expectedIndexes = ast.elements.length > 0 ? ast.elements.map((_, i) => i).join(" | ") : "never"
      const concurrency = getConcurrency(ast)
      const batching = getBatching(ast)
      return (input: unknown, options) => {
        if (!Arr.isArray(input)) {
          return Either.left(new Type(ast, input))
        }
        const allErrors = options?.errors === "all"
        const es: Array<[number, ParseIssue]> = []
        let stepKey = 0
        const output: Array<[number, any]> = []
        // ---------------------------------------------
        // handle missing indexes
        // ---------------------------------------------
        const len = input.length
        for (let i = len; i <= requiredLen - 1; i++) {
          const e = new Pointer(i, input, new Missing(requiredTypes[i - len]))
          if (allErrors) {
            es.push([stepKey++, e])
            continue
          } else {
            return Either.left(new Composite(ast, input, e, output))
          }
        }

        // ---------------------------------------------
        // handle excess indexes
        // ---------------------------------------------
        if (ast.rest.length === 0) {
          for (let i = ast.elements.length; i <= len - 1; i++) {
            const e = new Pointer(i, input, new Unexpected(input[i], `is unexpected, expected: ${expectedIndexes}`))
            if (allErrors) {
              es.push([stepKey++, e])
              continue
            } else {
              return Either.left(new Composite(ast, input, e, output))
            }
          }
        }

        let i = 0
        type State = {
          es: typeof es
          output: typeof output
        }
        let queue:
          | Array<(_: State) => Effect.Effect<void, ParseIssue, any>>
          | undefined = undefined

        // ---------------------------------------------
        // handle elements
        // ---------------------------------------------
        for (; i < elements.length; i++) {
          if (len < i + 1) {
            if (ast.elements[i].isOptional) {
              // the input element is missing
              continue
            }
          } else {
            const parser = elements[i]
            const te = parser(input[i], options)
            if (isEither(te)) {
              if (Either.isLeft(te)) {
                // the input element is present but is not valid
                const e = new Pointer(i, input, te.left)
                if (allErrors) {
                  es.push([stepKey++, e])
                  continue
                } else {
                  return Either.left(new Composite(ast, input, e, sortByIndex(output)))
                }
              }
              output.push([stepKey++, te.right])
            } else {
              const nk = stepKey++
              const index = i
              if (!queue) {
                queue = []
              }
              queue.push(({ es, output }: State) =>
                Effect.flatMap(Effect.either(te), (t) => {
                  if (Either.isLeft(t)) {
                    // the input element is present but is not valid
                    const e = new Pointer(index, input, t.left)
                    if (allErrors) {
                      es.push([nk, e])
                      return Effect.void
                    } else {
                      return Either.left(new Composite(ast, input, e, sortByIndex(output)))
                    }
                  }
                  output.push([nk, t.right])
                  return Effect.void
                })
              )
            }
          }
        }
        // ---------------------------------------------
        // handle rest element
        // ---------------------------------------------
        if (Arr.isNonEmptyReadonlyArray(rest)) {
          const [head, ...tail] = rest
          for (; i < len - tail.length; i++) {
            const te = head(input[i], options)
            if (isEither(te)) {
              if (Either.isLeft(te)) {
                const e = new Pointer(i, input, te.left)
                if (allErrors) {
                  es.push([stepKey++, e])
                  continue
                } else {
                  return Either.left(new Composite(ast, input, e, sortByIndex(output)))
                }
              } else {
                output.push([stepKey++, te.right])
              }
            } else {
              const nk = stepKey++
              const index = i
              if (!queue) {
                queue = []
              }
              queue.push(
                ({ es, output }: State) =>
                  Effect.flatMap(Effect.either(te), (t) => {
                    if (Either.isLeft(t)) {
                      const e = new Pointer(index, input, t.left)
                      if (allErrors) {
                        es.push([nk, e])
                        return Effect.void
                      } else {
                        return Either.left(new Composite(ast, input, e, sortByIndex(output)))
                      }
                    } else {
                      output.push([nk, t.right])
                      return Effect.void
                    }
                  })
              )
            }
          }
          // ---------------------------------------------
          // handle post rest elements
          // ---------------------------------------------
          for (let j = 0; j < tail.length; j++) {
            const index = i + j
            if (len < index + 1) {
              continue
            } else {
              const te = tail[j](input[index], options)
              if (isEither(te)) {
                if (Either.isLeft(te)) {
                  // the input element is present but is not valid
                  const e = new Pointer(index, input, te.left)
                  if (allErrors) {
                    es.push([stepKey++, e])
                    continue
                  } else {
                    return Either.left(new Composite(ast, input, e, sortByIndex(output)))
                  }
                }
                output.push([stepKey++, te.right])
              } else {
                const nk = stepKey++
                if (!queue) {
                  queue = []
                }
                queue.push(
                  ({ es, output }: State) =>
                    Effect.flatMap(Effect.either(te), (t) => {
                      if (Either.isLeft(t)) {
                        // the input element is present but is not valid
                        const e = new Pointer(index, input, t.left)
                        if (allErrors) {
                          es.push([nk, e])
                          return Effect.void
                        } else {
                          return Either.left(new Composite(ast, input, e, sortByIndex(output)))
                        }
                      }
                      output.push([nk, t.right])
                      return Effect.void
                    })
                )
              }
            }
          }
        }

        // ---------------------------------------------
        // compute result
        // ---------------------------------------------
        const computeResult = ({ es, output }: State) =>
          Arr.isNonEmptyArray(es) ?
            Either.left(new Composite(ast, input, sortByIndex(es), sortByIndex(output))) :
            Either.right(sortByIndex(output))
        if (queue && queue.length > 0) {
          const cqueue = queue
          return Effect.suspend(() => {
            const state: State = {
              es: Arr.copy(es),
              output: Arr.copy(output)
            }
            return Effect.flatMap(
              Effect.forEach(cqueue, (f) => f(state), { concurrency, batching, discard: true }),
              () => computeResult(state)
            )
          })
        }
        return computeResult({ output, es })
      }
    }
    case "TypeLiteral": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
        return fromRefinement(ast, Predicate.isNotNullable)
      }

      const propertySignatures: Array<readonly [Parser, AST.PropertySignature]> = []
      const expectedKeysMap: Record<PropertyKey, null> = {}
      const expectedKeys: Array<PropertyKey> = []
      for (const ps of ast.propertySignatures) {
        propertySignatures.push([goMemo(ps.type, isDecoding), ps])
        expectedKeysMap[ps.name] = null
        expectedKeys.push(ps.name)
      }

      const indexSignatures = ast.indexSignatures.map((is) =>
        [
          goMemo(is.parameter, isDecoding),
          goMemo(is.type, isDecoding),
          is.parameter
        ] as const
      )
      const expectedAST = AST.Union.make(
        ast.indexSignatures.map((is): AST.AST => is.parameter).concat(
          expectedKeys.map((key) => Predicate.isSymbol(key) ? new AST.UniqueSymbol(key) : new AST.Literal(key))
        )
      )
      const expected = goMemo(expectedAST, isDecoding)
      const concurrency = getConcurrency(ast)
      const batching = getBatching(ast)
      return (input: unknown, options) => {
        if (!Predicate.isRecord(input)) {
          return Either.left(new Type(ast, input))
        }
        const allErrors = options?.errors === "all"
        const es: Array<[number, ParseIssue]> = []
        let stepKey = 0

        // ---------------------------------------------
        // handle excess properties
        // ---------------------------------------------
        const onExcessPropertyError = options?.onExcessProperty === "error"
        const onExcessPropertyPreserve = options?.onExcessProperty === "preserve"
        const output: Record<PropertyKey, unknown> = {}
        let inputKeys: Array<PropertyKey> | undefined
        if (onExcessPropertyError || onExcessPropertyPreserve) {
          inputKeys = Reflect.ownKeys(input)
          for (const key of inputKeys) {
            const te = expected(key, options)
            if (isEither(te) && Either.isLeft(te)) {
              // key is unexpected
              if (onExcessPropertyError) {
                const e = new Pointer(
                  key,
                  input,
                  new Unexpected(input[key], `is unexpected, expected: ${String(expectedAST)}`)
                )
                if (allErrors) {
                  es.push([stepKey++, e])
                  continue
                } else {
                  return Either.left(new Composite(ast, input, e, output))
                }
              } else {
                // preserve key
                output[key] = input[key]
              }
            }
          }
        }

        // ---------------------------------------------
        // handle property signatures
        // ---------------------------------------------
        type State = {
          es: typeof es
          output: typeof output
        }
        let queue:
          | Array<(state: State) => Effect.Effect<void, ParseIssue, any>>
          | undefined = undefined

        const isExact = options?.exact === true
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = propertySignatures[i][1]
          const name = ps.name
          const hasKey = Object.prototype.hasOwnProperty.call(input, name)
          if (!hasKey) {
            if (ps.isOptional) {
              continue
            } else if (isExact) {
              const e = new Pointer(name, input, new Missing(ps))
              if (allErrors) {
                es.push([stepKey++, e])
                continue
              } else {
                return Either.left(new Composite(ast, input, e, output))
              }
            }
          }
          const parser = propertySignatures[i][0]
          const te = parser(input[name], options)
          if (isEither(te)) {
            if (Either.isLeft(te)) {
              const e = new Pointer(name, input, hasKey ? te.left : new Missing(ps))
              if (allErrors) {
                es.push([stepKey++, e])
                continue
              } else {
                return Either.left(new Composite(ast, input, e, output))
              }
            }
            output[name] = te.right
          } else {
            const nk = stepKey++
            const index = name
            if (!queue) {
              queue = []
            }
            queue.push(
              ({ es, output }: State) =>
                Effect.flatMap(Effect.either(te), (t) => {
                  if (Either.isLeft(t)) {
                    const e = new Pointer(index, input, hasKey ? t.left : new Missing(ps))
                    if (allErrors) {
                      es.push([nk, e])
                      return Effect.void
                    } else {
                      return Either.left(new Composite(ast, input, e, output))
                    }
                  }
                  output[index] = t.right
                  return Effect.void
                })
            )
          }
        }

        // ---------------------------------------------
        // handle index signatures
        // ---------------------------------------------
        for (let i = 0; i < indexSignatures.length; i++) {
          const indexSignature = indexSignatures[i]
          const parameter = indexSignature[0]
          const type = indexSignature[1]
          const keys = util_.getKeysForIndexSignature(input, indexSignature[2])
          for (const key of keys) {
            // ---------------------------------------------
            // handle keys
            // ---------------------------------------------
            const keu = parameter(key, options)
            if (isEither(keu) && Either.isRight(keu)) {
              // ---------------------------------------------
              // handle values
              // ---------------------------------------------
              const vpr = type(input[key], options)
              if (isEither(vpr)) {
                if (Either.isLeft(vpr)) {
                  const e = new Pointer(key, input, vpr.left)
                  if (allErrors) {
                    es.push([stepKey++, e])
                    continue
                  } else {
                    return Either.left(new Composite(ast, input, e, output))
                  }
                } else {
                  if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                    output[key] = vpr.right
                  }
                }
              } else {
                const nk = stepKey++
                const index = key
                if (!queue) {
                  queue = []
                }
                queue.push(
                  ({ es, output }: State) =>
                    Effect.flatMap(
                      Effect.either(vpr),
                      (tv) => {
                        if (Either.isLeft(tv)) {
                          const e = new Pointer(index, input, tv.left)
                          if (allErrors) {
                            es.push([nk, e])
                            return Effect.void
                          } else {
                            return Either.left(new Composite(ast, input, e, output))
                          }
                        } else {
                          if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                            output[key] = tv.right
                          }
                          return Effect.void
                        }
                      }
                    )
                )
              }
            }
          }
        }
        // ---------------------------------------------
        // compute result
        // ---------------------------------------------
        const computeResult = ({ es, output }: State) => {
          if (Arr.isNonEmptyArray(es)) {
            return Either.left(new Composite(ast, input, sortByIndex(es), output))
          }
          if (options?.propertyOrder === "original") {
            // preserve input keys order
            const keys = inputKeys || Reflect.ownKeys(input)
            for (const name of expectedKeys) {
              if (keys.indexOf(name) === -1) {
                keys.push(name)
              }
            }
            const out: any = {}
            for (const key of keys) {
              if (Object.prototype.hasOwnProperty.call(output, key)) {
                out[key] = output[key]
              }
            }
            return Either.right(out)
          }
          return Either.right(output)
        }
        if (queue && queue.length > 0) {
          const cqueue = queue
          return Effect.suspend(() => {
            const state: State = {
              es: Arr.copy(es),
              output: Object.assign({}, output)
            }
            return Effect.flatMap(
              Effect.forEach(cqueue, (f) => f(state), { concurrency, batching, discard: true }),
              () => computeResult(state)
            )
          })
        }
        return computeResult({ es, output })
      }
    }
    case "Union": {
      const searchTree = getSearchTree(ast.types, isDecoding)
      const ownKeys = Reflect.ownKeys(searchTree.keys)
      const ownKeysLen = ownKeys.length
      const astTypesLen = ast.types.length
      const map = new Map<any, Parser>()
      for (let i = 0; i < astTypesLen; i++) {
        map.set(ast.types[i], goMemo(ast.types[i], isDecoding))
      }
      const concurrency = getConcurrency(ast) ?? 1
      const batching = getBatching(ast)
      return (input, options) => {
        const es: Array<[number, ParseIssue]> = []
        let stepKey = 0
        let candidates: Array<AST.AST> = []
        if (ownKeysLen > 0) {
          if (Predicate.isRecordOrArray(input)) {
            for (let i = 0; i < ownKeysLen; i++) {
              const name = ownKeys[i]
              const buckets = searchTree.keys[name].buckets
              // for each property that should contain a literal, check if the input contains that property
              if (Object.prototype.hasOwnProperty.call(input, name)) {
                const literal = String(input[name])
                // check that the value obtained from the input for the property corresponds to an existing bucket
                if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                  // retrive the minimal set of candidates for decoding
                  candidates = candidates.concat(buckets[literal])
                } else {
                  const { candidates, literals } = searchTree.keys[name]
                  const literalsUnion = AST.Union.make(literals)
                  const errorAst = candidates.length === astTypesLen
                    ? new AST.TypeLiteral([new AST.PropertySignature(name, literalsUnion, false, true)], [])
                    : AST.Union.make(candidates)
                  es.push([
                    stepKey++,
                    new Composite(errorAst, input, new Pointer(name, input, new Type(literalsUnion, input[name])))
                  ])
                }
              } else {
                const { candidates, literals } = searchTree.keys[name]
                const fakePropertySignature = new AST.PropertySignature(name, AST.Union.make(literals), false, true)
                const errorAst = candidates.length === astTypesLen
                  ? new AST.TypeLiteral([fakePropertySignature], [])
                  : AST.Union.make(candidates)
                es.push([
                  stepKey++,
                  new Composite(errorAst, input, new Pointer(name, input, new Missing(fakePropertySignature)))
                ])
              }
            }
          } else {
            const errorAst = searchTree.candidates.length === astTypesLen
              ? ast
              : AST.Union.make(searchTree.candidates)
            es.push([stepKey++, new Type(errorAst, input)])
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise)
        }

        let queue:
          | Array<(state: State) => Effect.Effect<unknown, ParseIssue, any>>
          | undefined = undefined

        type State = {
          finalResult?: any
          es: typeof es
        }

        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i]
          const pr = map.get(candidate)!(input, options)
          // the members of a union are ordered based on which one should be decoded first,
          // therefore if one member has added a task, all subsequent members must
          // also add a task to the queue even if they are synchronous
          if (isEither(pr) && (!queue || queue.length === 0)) {
            if (Either.isRight(pr)) {
              return pr
            } else {
              es.push([stepKey++, pr.left])
            }
          } else {
            const nk = stepKey++
            if (!queue) {
              queue = []
            }
            queue.push(
              (state) =>
                Effect.suspend(() => {
                  if ("finalResult" in state) {
                    return Effect.void
                  } else {
                    return Effect.flatMap(Effect.either(pr), (t) => {
                      if (Either.isRight(t)) {
                        state.finalResult = t
                      } else {
                        state.es.push([nk, t.left])
                      }
                      return Effect.void
                    })
                  }
                })
            )
          }
        }

        // ---------------------------------------------
        // compute result
        // ---------------------------------------------
        const computeResult = (es: State["es"]) =>
          Arr.isNonEmptyArray(es) ?
            es.length === 1 && es[0][1]._tag === "Type" ?
              Either.left(es[0][1]) :
              Either.left(new Composite(ast, input, sortByIndex(es))) :
            // this should never happen
            Either.left(new Type(ast, input))

        if (queue && queue.length > 0) {
          const cqueue = queue
          return Effect.suspend(() => {
            const state: State = { es: Arr.copy(es) }
            return Effect.flatMap(
              Effect.forEach(cqueue, (f) => f(state), { concurrency, batching, discard: true }),
              () => {
                if ("finalResult" in state) {
                  return state.finalResult
                }
                return computeResult(state.es)
              }
            )
          })
        }
        return computeResult(es)
      }
    }
    case "Suspend": {
      const get = util_.memoizeThunk(() => goMemo(ast.f(), isDecoding))
      return (a, options) => get()(a, options)
    }
  }
}

const fromRefinement = <A>(ast: AST.AST, refinement: (u: unknown) => u is A): Parser => (u) =>
  refinement(u) ? Either.right(u) : Either.left(new Type(ast, u))

/** @internal */
export const getLiterals = (
  ast: AST.AST,
  isDecoding: boolean
): ReadonlyArray<[PropertyKey, AST.Literal]> => {
  switch (ast._tag) {
    case "Declaration": {
      const annotation = AST.getSurrogateAnnotation(ast)
      if (Option.isSome(annotation)) {
        return getLiterals(annotation.value, isDecoding)
      }
      break
    }
    case "TypeLiteral": {
      const out: Array<[PropertyKey, AST.Literal]> = []
      for (let i = 0; i < ast.propertySignatures.length; i++) {
        const propertySignature = ast.propertySignatures[i]
        const type = isDecoding ? AST.encodedAST(propertySignature.type) : AST.typeAST(propertySignature.type)
        if (AST.isLiteral(type) && !propertySignature.isOptional) {
          out.push([propertySignature.name, type])
        }
      }
      return out
    }
    case "TupleType": {
      const out: Array<[PropertyKey, AST.Literal]> = []
      for (let i = 0; i < ast.elements.length; i++) {
        const element = ast.elements[i]
        const type = isDecoding ? AST.encodedAST(element.type) : AST.typeAST(element.type)
        if (AST.isLiteral(type) && !element.isOptional) {
          out.push([i, type])
        }
      }
      return out
    }
    case "Refinement":
      return getLiterals(ast.from, isDecoding)
    case "Suspend":
      return getLiterals(ast.f(), isDecoding)
    case "Transformation":
      return getLiterals(isDecoding ? ast.from : ast.to, isDecoding)
  }
  return []
}

/**
 * The purpose of the algorithm is to narrow down the pool of possible
 * candidates for decoding as much as possible.
 *
 * This function separates the schemas into two groups, `keys` and `otherwise`:
 *
 * - `keys`: the schema has at least one property with a literal value
 * - `otherwise`: the schema has no properties with a literal value
 *
 * If a schema has at least one property with a literal value, so it ends up in
 * `keys`, first a namespace is created for the name of the property containing
 * the literal, and then within this namespace a "bucket" is created for the
 * literal value in which to store all the schemas that have the same property
 * and literal value.
 *
 * @internal
 */
export const getSearchTree = (
  members: ReadonlyArray<AST.AST>,
  isDecoding: boolean
): {
  keys: {
    readonly [key: PropertyKey]: {
      buckets: { [literal: string]: ReadonlyArray<AST.AST> }
      literals: ReadonlyArray<AST.Literal> // this is for error messages
      candidates: ReadonlyArray<AST.AST>
    }
  }
  otherwise: ReadonlyArray<AST.AST>
  candidates: ReadonlyArray<AST.AST>
} => {
  const keys: {
    [key: PropertyKey]: {
      buckets: { [literal: string]: Array<AST.AST> }
      literals: Array<AST.Literal>
      candidates: Array<AST.AST>
    }
  } = {}
  const otherwise: Array<AST.AST> = []
  const candidates: Array<AST.AST> = []
  for (let i = 0; i < members.length; i++) {
    const member = members[i]
    const tags = getLiterals(member, isDecoding)
    if (tags.length > 0) {
      candidates.push(member)
      for (let j = 0; j < tags.length; j++) {
        const [key, literal] = tags[j]
        const hash = String(literal.literal)
        keys[key] = keys[key] || { buckets: {}, literals: [], candidates: [] }
        const buckets = keys[key].buckets
        if (Object.prototype.hasOwnProperty.call(buckets, hash)) {
          if (j < tags.length - 1) {
            continue
          }
          buckets[hash].push(member)
          keys[key].literals.push(literal)
          keys[key].candidates.push(member)
        } else {
          buckets[hash] = [member]
          keys[key].literals.push(literal)
          keys[key].candidates.push(member)
          break
        }
      }
    } else {
      otherwise.push(member)
    }
  }
  return { keys, otherwise, candidates }
}

const dropRightRefinement = (ast: AST.AST): AST.AST => AST.isRefinement(ast) ? dropRightRefinement(ast.from) : ast

const handleForbidden = <A, R>(
  effect: Effect.Effect<A, ParseIssue, R>,
  ast: AST.AST,
  actual: unknown,
  options: InternalOptions | undefined
): Effect.Effect<A, ParseIssue, R> => {
  // If effects are allowed, return the original effect
  if (options?.isEffectAllowed === true) {
    return effect
  }

  // If the effect is already an Either, return it directly
  if (isEither(effect)) {
    return effect
  }

  // Otherwise, attempt to execute the effect synchronously
  const scheduler = new Scheduler.SyncScheduler()
  const fiber = Effect.runFork(effect as Effect.Effect<A, ParseIssue>, { scheduler })
  scheduler.flush()
  const exit = fiber.unsafePoll()

  if (exit) {
    if (Exit.isSuccess(exit)) {
      // If the effect successfully resolves, wrap the value in a Right
      return Either.right(exit.value)
    }
    const cause = exit.cause
    if (Cause.isFailType(cause)) {
      // The effect executed synchronously but failed due to a ParseIssue
      return Either.left(cause.error)
    }
    // The effect executed synchronously but failed due to a defect (e.g., a missing dependency)
    return Either.left(new Forbidden(ast, actual, Cause.pretty(cause)))
  }

  // The effect could not be resolved synchronously, meaning it performs async work
  return Either.left(
    new Forbidden(
      ast,
      actual,
      "cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"
    )
  )
}

const compare = ([a]: [number, ...Array<unknown>], [b]: [number, ...Array<unknown>]) => a > b ? 1 : a < b ? -1 : 0

function sortByIndex<T>(
  es: Arr.NonEmptyArray<[number, T]>
): Arr.NonEmptyArray<T>
function sortByIndex<T>(es: Array<[number, T]>): Array<T>
function sortByIndex(es: Array<[number, any]>) {
  return es.sort(compare).map((t) => t[1])
}

// -------------------------------------------------------------------------------------
// transformations interpreter
// -------------------------------------------------------------------------------------

/** @internal */
export const getFinalTransformation = (
  transformation: AST.TransformationKind,
  isDecoding: boolean
): (
  fromA: any,
  options: AST.ParseOptions,
  self: AST.Transformation,
  fromI: any
) => Effect.Effect<any, ParseIssue, any> => {
  switch (transformation._tag) {
    case "FinalTransformation":
      return isDecoding ? transformation.decode : transformation.encode
    case "ComposeTransformation":
      return Either.right
    case "TypeLiteralTransformation":
      return (input) => {
        let out: Effect.Effect<any, ParseIssue, any> = Either.right(input)

        // ---------------------------------------------
        // handle property signature transformations
        // ---------------------------------------------
        for (const pst of transformation.propertySignatureTransformations) {
          const [from, to] = isDecoding ?
            [pst.from, pst.to] :
            [pst.to, pst.from]
          const transformation = isDecoding ? pst.decode : pst.encode
          const f = (input: any) => {
            const o = transformation(
              Object.prototype.hasOwnProperty.call(input, from) ?
                Option.some(input[from]) :
                Option.none()
            )
            delete input[from]
            if (Option.isSome(o)) {
              input[to] = o.value
            }
            return input
          }
          out = map(out, f)
        }
        return out
      }
  }
}

// ----------------
// Formatters
// ----------------

interface Forest<A> extends ReadonlyArray<Tree<A>> {}

interface Tree<A> {
  readonly value: A
  readonly forest: Forest<A>
}

const makeTree = <A>(value: A, forest: Forest<A> = []): Tree<A> => ({
  value,
  forest
})

/**
 * @category formatting
 * @since 3.10.0
 */
export interface ParseResultFormatter<A> {
  readonly formatIssue: (issue: ParseIssue) => Effect.Effect<A>
  readonly formatIssueSync: (issue: ParseIssue) => A
  readonly formatError: (error: ParseError) => Effect.Effect<A>
  readonly formatErrorSync: (error: ParseError) => A
}

/**
 * @category formatting
 * @since 3.10.0
 */
export const TreeFormatter: ParseResultFormatter<string> = {
  formatIssue: (issue) => map(formatTree(issue), drawTree),
  formatIssueSync: (issue) => {
    const e = TreeFormatter.formatIssue(issue)
    return isEither(e) ? Either.getOrThrow(e) : Effect.runSync(e)
  },
  formatError: (error) => TreeFormatter.formatIssue(error.issue),
  formatErrorSync: (error) => TreeFormatter.formatIssueSync(error.issue)
}

const drawTree = (tree: Tree<string>): string => tree.value + draw("\n", tree.forest)

const draw = (indentation: string, forest: Forest<string>): string => {
  let r = ""
  const len = forest.length
  let tree: Tree<string>
  for (let i = 0; i < len; i++) {
    tree = forest[i]
    const isLast = i === len - 1
    r += indentation + (isLast ? "└" : "├") + "─ " + tree.value
    r += draw(indentation + (len > 1 && !isLast ? "│  " : "   "), tree.forest)
  }
  return r
}

const formatTransformationKind = (kind: Transformation["kind"]): string => {
  switch (kind) {
    case "Encoded":
      return "Encoded side transformation failure"
    case "Transformation":
      return "Transformation process failure"
    case "Type":
      return "Type side transformation failure"
  }
}

const formatRefinementKind = (kind: Refinement["kind"]): string => {
  switch (kind) {
    case "From":
      return "From side refinement failure"
    case "Predicate":
      return "Predicate refinement failure"
  }
}

const getAnnotated = (issue: ParseIssue): Option.Option<AST.Annotated> =>
  "ast" in issue ? Option.some(issue.ast) : Option.none()

interface CurrentMessage {
  readonly message: string
  readonly override: boolean
}

// TODO: replace with Either.void when 3.13 lands
const Either_void = Either.right(undefined)

const getCurrentMessage = (issue: ParseIssue): Effect.Effect<CurrentMessage | undefined> =>
  getAnnotated(issue).pipe(
    Option.flatMap(AST.getMessageAnnotation),
    Option.match({
      onNone: () => Either_void,
      onSome: (messageAnnotation) => {
        const union = messageAnnotation(issue)
        if (Predicate.isString(union)) {
          return Either.right({ message: union, override: false })
        }
        if (Effect.isEffect(union)) {
          return Effect.map(union, (message) => ({ message, override: false }))
        }
        if (Predicate.isString(union.message)) {
          return Either.right({ message: union.message, override: union.override })
        }
        return Effect.map(union.message, (message) => ({ message, override: union.override }))
      }
    })
  )

const createParseIssueGuard =
  <T extends ParseIssue["_tag"]>(tag: T) => (issue: ParseIssue): issue is Extract<ParseIssue, { _tag: T }> =>
    issue._tag === tag

/**
 * Returns `true` if the value is a `Composite`.
 *
 * @category guards
 * @since 3.10.0
 */
export const isComposite = createParseIssueGuard("Composite")

const isRefinement = createParseIssueGuard("Refinement")
const isTransformation = createParseIssueGuard("Transformation")

const getMessage = (issue: ParseIssue): Effect.Effect<string | undefined> =>
  flatMap(getCurrentMessage(issue), (currentMessage) => {
    if (currentMessage !== undefined) {
      const useInnerMessage = !currentMessage.override && (
        isComposite(issue) ||
        (isRefinement(issue) && issue.kind === "From") ||
        (isTransformation(issue) && issue.kind !== "Transformation")
      )
      return useInnerMessage
        ? isTransformation(issue) || isRefinement(issue) ? getMessage(issue.issue) : Either_void
        : Either.right(currentMessage.message)
    }
    return Either_void
  })

const getParseIssueTitleAnnotation = (issue: ParseIssue): string | undefined =>
  getAnnotated(issue).pipe(
    Option.flatMap(AST.getParseIssueTitleAnnotation),
    Option.flatMapNullable((annotation) => annotation(issue)),
    Option.getOrUndefined
  )

/** @internal */
export function getRefinementExpected(ast: AST.Refinement): string {
  return AST.getDescriptionAnnotation(ast).pipe(
    Option.orElse(() => AST.getTitleAnnotation(ast)),
    Option.orElse(() => AST.getAutoTitleAnnotation(ast)),
    Option.orElse(() => AST.getIdentifierAnnotation(ast)),
    Option.getOrElse(() => `{ ${ast.from} | filter }`)
  )
}

function getDefaultTypeMessage(issue: Type): string {
  if (issue.message !== undefined) {
    return issue.message
  }
  const expected = AST.isRefinement(issue.ast) ? getRefinementExpected(issue.ast) : String(issue.ast)
  return `Expected ${expected}, actual ${Inspectable.formatUnknown(issue.actual)}`
}

const formatTypeMessage = (issue: Type): Effect.Effect<string> =>
  map(
    getMessage(issue),
    (message) => message ?? getParseIssueTitleAnnotation(issue) ?? getDefaultTypeMessage(issue)
  )

const getParseIssueTitle = (
  issue: Forbidden | Transformation | Refinement | Composite
): string => getParseIssueTitleAnnotation(issue) ?? String(issue.ast)

const formatForbiddenMessage = (issue: Forbidden): string => issue.message ?? "is forbidden"

const formatUnexpectedMessage = (issue: Unexpected): string => issue.message ?? "is unexpected"

const formatMissingMessage = (issue: Missing): Effect.Effect<string> => {
  const missingMessageAnnotation = AST.getMissingMessageAnnotation(issue.ast)
  if (Option.isSome(missingMessageAnnotation)) {
    const annotation = missingMessageAnnotation.value()
    return Predicate.isString(annotation) ? Either.right(annotation) : annotation
  }
  return Either.right(issue.message ?? "is missing")
}

const formatTree = (issue: ParseIssue): Effect.Effect<Tree<string>> => {
  switch (issue._tag) {
    case "Type":
      return map(formatTypeMessage(issue), makeTree)
    case "Forbidden":
      return Either.right(makeTree(getParseIssueTitle(issue), [makeTree(formatForbiddenMessage(issue))]))
    case "Unexpected":
      return Either.right(makeTree(formatUnexpectedMessage(issue)))
    case "Missing":
      return map(formatMissingMessage(issue), makeTree)
    case "Transformation":
      return flatMap(getMessage(issue), (message) => {
        if (message !== undefined) {
          return Either.right(makeTree(message))
        }
        return map(
          formatTree(issue.issue),
          (tree) => makeTree(getParseIssueTitle(issue), [makeTree(formatTransformationKind(issue.kind), [tree])])
        )
      })
    case "Refinement":
      return flatMap(getMessage(issue), (message) => {
        if (message !== undefined) {
          return Either.right(makeTree(message))
        }
        return map(
          formatTree(issue.issue),
          (tree) => makeTree(getParseIssueTitle(issue), [makeTree(formatRefinementKind(issue.kind), [tree])])
        )
      })
    case "Pointer":
      return map(formatTree(issue.issue), (tree) => makeTree(util_.formatPath(issue.path), [tree]))
    case "Composite":
      return flatMap(getMessage(issue), (message) => {
        if (message !== undefined) {
          return Either.right(makeTree(message))
        }
        const parseIssueTitle = getParseIssueTitle(issue)
        return util_.isNonEmpty(issue.issues)
          ? map(Effect.forEach(issue.issues, formatTree), (forest) => makeTree(parseIssueTitle, forest))
          : map(formatTree(issue.issues), (tree) => makeTree(parseIssueTitle, [tree]))
      })
  }
}

/**
 * Represents an issue returned by the {@link ArrayFormatter} formatter.
 *
 * @category model
 * @since 3.10.0
 */
export interface ArrayFormatterIssue {
  /**
   * The tag identifying the type of parse issue.
   */
  readonly _tag: ParseIssue["_tag"]

  /**
   * The path to the property where the issue occurred.
   */
  readonly path: ReadonlyArray<PropertyKey>

  /**
   * A descriptive message explaining the issue.
   */
  readonly message: string
}

const makeArrayFormatterIssue = (
  _tag: ArrayFormatterIssue["_tag"],
  path: ArrayFormatterIssue["path"],
  message: ArrayFormatterIssue["message"]
): ArrayFormatterIssue => ({ _tag, path, message })

/**
 * @category formatting
 * @since 3.10.0
 */
export const ArrayFormatter: ParseResultFormatter<Array<ArrayFormatterIssue>> = {
  formatIssue: (issue) => getArrayFormatterIssues(issue, undefined, []),
  formatIssueSync: (issue) => {
    const e = ArrayFormatter.formatIssue(issue)
    return isEither(e) ? Either.getOrThrow(e) : Effect.runSync(e)
  },
  formatError: (error) => ArrayFormatter.formatIssue(error.issue),
  formatErrorSync: (error) => ArrayFormatter.formatIssueSync(error.issue)
}

const getArrayFormatterIssues = (
  issue: ParseIssue,
  parentTag: ArrayFormatterIssue["_tag"] | undefined,
  path: ReadonlyArray<PropertyKey>
): Effect.Effect<Array<ArrayFormatterIssue>> => {
  const _tag = issue._tag
  switch (_tag) {
    case "Type":
      return map(formatTypeMessage(issue), (message) => [makeArrayFormatterIssue(parentTag ?? _tag, path, message)])
    case "Forbidden":
      return Either.right([makeArrayFormatterIssue(_tag, path, formatForbiddenMessage(issue))])
    case "Unexpected":
      return Either.right([makeArrayFormatterIssue(_tag, path, formatUnexpectedMessage(issue))])
    case "Missing":
      return map(formatMissingMessage(issue), (message) => [makeArrayFormatterIssue(_tag, path, message)])
    case "Pointer":
      return getArrayFormatterIssues(issue.issue, undefined, path.concat(issue.path))
    case "Composite":
      return flatMap(getMessage(issue), (message) => {
        if (message !== undefined) {
          return Either.right([makeArrayFormatterIssue(_tag, path, message)])
        }
        return util_.isNonEmpty(issue.issues)
          ? map(Effect.forEach(issue.issues, (issue) => getArrayFormatterIssues(issue, undefined, path)), Arr.flatten)
          : getArrayFormatterIssues(issue.issues, undefined, path)
      })
    case "Refinement":
      return flatMap(getMessage(issue), (message) => {
        if (message !== undefined) {
          return Either.right([makeArrayFormatterIssue(_tag, path, message)])
        }
        return getArrayFormatterIssues(issue.issue, issue.kind === "Predicate" ? _tag : undefined, path)
      })
    case "Transformation":
      return flatMap(getMessage(issue), (message) => {
        if (message !== undefined) {
          return Either.right([makeArrayFormatterIssue(_tag, path, message)])
        }
        return getArrayFormatterIssues(issue.issue, issue.kind === "Transformation" ? _tag : undefined, path)
      })
  }
}
