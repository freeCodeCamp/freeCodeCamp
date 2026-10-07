/**
 * @since 3.10.0
 */

import type { StandardSchemaV1 } from "@standard-schema/spec"
import type { ArbitraryAnnotation, ArbitraryGenerationContext, LazyArbitrary } from "./Arbitrary.js"
import * as array_ from "./Array.js"
import * as bigDecimal_ from "./BigDecimal.js"
import * as bigInt_ from "./BigInt.js"
import * as boolean_ from "./Boolean.js"
import type { Brand } from "./Brand.js"
import * as cause_ from "./Cause.js"
import * as chunk_ from "./Chunk.js"
import * as config_ from "./Config.js"
import * as configError_ from "./ConfigError.js"
import * as data_ from "./Data.js"
import * as dateTime from "./DateTime.js"
import * as duration_ from "./Duration.js"
import * as Effect from "./Effect.js"
import * as either_ from "./Either.js"
import * as Encoding from "./Encoding.js"
import * as Equal from "./Equal.js"
import * as Equivalence from "./Equivalence.js"
import * as exit_ from "./Exit.js"
import * as fastCheck_ from "./FastCheck.js"
import * as fiberId_ from "./FiberId.js"
import type { LazyArg } from "./Function.js"
import { dual, identity } from "./Function.js"
import { globalValue } from "./GlobalValue.js"
import * as hashMap_ from "./HashMap.js"
import * as hashSet_ from "./HashSet.js"
import * as Inspectable from "./Inspectable.js"
import * as internalCause_ from "./internal/cause.js"
import * as errors_ from "./internal/schema/errors.js"
import * as schemaId_ from "./internal/schema/schemaId.js"
import * as util_ from "./internal/schema/util.js"
import * as list_ from "./List.js"
import * as number_ from "./Number.js"
import * as option_ from "./Option.js"
import type * as Order from "./Order.js"
import * as ParseResult from "./ParseResult.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"
import * as Predicate from "./Predicate.js"
import type * as pretty_ from "./Pretty.js"
import * as redacted_ from "./Redacted.js"
import * as Request from "./Request.js"
import * as scheduler_ from "./Scheduler.js"
import type { ParseOptions } from "./SchemaAST.js"
import * as AST from "./SchemaAST.js"
import * as sortedSet_ from "./SortedSet.js"
import * as string_ from "./String.js"
import * as struct_ from "./Struct.js"
import type * as Types from "./Types.js"

/**
 * @since 3.10.0
 */
export type Simplify<A> = { [K in keyof A]: A[K] } & {}

/**
 * @since 3.10.0
 */
export type SimplifyMutable<A> = {
  -readonly [K in keyof A]: A[K]
} extends infer B ? B : never

/**
 * @since 3.10.0
 * @category symbol
 */
export const TypeId: unique symbol = Symbol.for("effect/Schema")

/**
 * @since 3.10.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @category model
 * @since 3.10.0
 */
export interface Schema<in out A, in out I = A, out R = never> extends Schema.Variance<A, I, R>, Pipeable {
  readonly Type: A
  readonly Encoded: I
  readonly Context: R
  readonly ast: AST.AST
  /**
   * Merges a set of new annotations with existing ones, potentially overwriting
   * any duplicates.
   */
  annotations(annotations: Annotations.GenericSchema<A>): Schema<A, I, R>
}

/**
 * @category annotations
 * @since 3.10.0
 */
export interface Annotable<Self extends Schema<A, I, R>, A, I = A, R = never> extends Schema<A, I, R> {
  annotations(annotations: Annotations.GenericSchema<A>): Self
}

/**
 * @category annotations
 * @since 3.10.0
 */
export interface AnnotableClass<Self extends Schema<A, I, R>, A, I = A, R = never> extends Annotable<Self, A, I, R> {
  new(_: never): Schema.Variance<A, I, R>
}

/**
 * @category model
 * @since 3.10.0
 */
export interface SchemaClass<A, I = A, R = never> extends AnnotableClass<SchemaClass<A, I, R>, A, I, R> {}

/**
 * @category constructors
 * @since 3.10.0
 */
export function make<A, I = A, R = never>(ast: AST.AST): SchemaClass<A, I, R> {
  return class SchemaClass {
    [TypeId] = variance
    static ast = ast
    static annotations(annotations: Annotations.GenericSchema<A>) {
      return make<A, I, R>(mergeSchemaAnnotations(this.ast, annotations))
    }
    static pipe() {
      return pipeArguments(this, arguments)
    }
    static toString() {
      return String(ast)
    }
    static Type: A
    static Encoded: I
    static Context: R
    static [TypeId] = variance
  }
}

const variance = {
  /* c8 ignore next */
  _A: (_: any) => _,
  /* c8 ignore next */
  _I: (_: any) => _,
  /* c8 ignore next */
  _R: (_: never) => _
}

const makeStandardResult = <A>(exit: exit_.Exit<StandardSchemaV1.Result<A>>): StandardSchemaV1.Result<A> =>
  exit_.isSuccess(exit) ? exit.value : makeStandardFailureResult(cause_.pretty(exit.cause))

const makeStandardFailureResult = (message: string): StandardSchemaV1.FailureResult => ({
  issues: [{ message }]
})

const makeStandardFailureFromParseIssue = (
  issue: ParseResult.ParseIssue
): Effect.Effect<StandardSchemaV1.FailureResult> =>
  Effect.map(ParseResult.ArrayFormatter.formatIssue(issue), (issues) => ({
    issues: issues.map((issue) => ({
      path: issue.path,
      message: issue.message
    }))
  }))

/**
 * Returns a "Standard Schema" object conforming to the [Standard Schema
 * v1](https://standardschema.dev/) specification.
 *
 * This function creates a schema whose `validate` method attempts to decode and
 * validate the provided input synchronously. If the underlying `Schema`
 * includes any asynchronous components (e.g., asynchronous message resolutions
 * or checks), then validation will necessarily return a `Promise` instead.
 *
 * Any detected defects will be reported via a single issue containing no
 * `path`.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({
 *   name: Schema.String
 * })
 *
 * //      ┌─── StandardSchemaV1<{ readonly name: string; }>
 * //      ▼
 * const standardSchema = Schema.standardSchemaV1(schema)
 * ```
 *
 * @category Standard Schema
 * @since 3.13.0
 */
export const standardSchemaV1 = <A, I>(
  schema: Schema<A, I, never>,
  overrideOptions?: AST.ParseOptions
): StandardSchemaV1<I, A> & SchemaClass<A, I, never> => {
  const decodeUnknown = ParseResult.decodeUnknown(schema, { errors: "all" })
  return class StandardSchemaV1Class extends make<A, I, never>(schema.ast) {
    static "~standard" = {
      version: 1,
      vendor: "effect",
      validate(value) {
        const scheduler = new scheduler_.SyncScheduler()
        const fiber = Effect.runFork(
          Effect.matchEffect(decodeUnknown(value, overrideOptions), {
            onFailure: makeStandardFailureFromParseIssue,
            onSuccess: (value) => Effect.succeed({ value })
          }),
          { scheduler }
        )
        scheduler.flush()
        const exit = fiber.unsafePoll()
        if (exit) {
          return makeStandardResult(exit)
        }
        return new Promise((resolve) => {
          fiber.addObserver((exit) => {
            resolve(makeStandardResult(exit))
          })
        })
      }
    }
  }
}

interface AllAnnotations<A, TypeParameters extends ReadonlyArray<any>>
  extends Annotations.Schema<A, TypeParameters>, PropertySignature.Annotations<A>
{}

const builtInAnnotations = {
  typeConstructor: AST.TypeConstructorAnnotationId,
  schemaId: AST.SchemaIdAnnotationId,
  message: AST.MessageAnnotationId,
  missingMessage: AST.MissingMessageAnnotationId,
  identifier: AST.IdentifierAnnotationId,
  title: AST.TitleAnnotationId,
  description: AST.DescriptionAnnotationId,
  examples: AST.ExamplesAnnotationId,
  default: AST.DefaultAnnotationId,
  documentation: AST.DocumentationAnnotationId,
  jsonSchema: AST.JSONSchemaAnnotationId,
  arbitrary: AST.ArbitraryAnnotationId,
  pretty: AST.PrettyAnnotationId,
  equivalence: AST.EquivalenceAnnotationId,
  concurrency: AST.ConcurrencyAnnotationId,
  batching: AST.BatchingAnnotationId,
  parseIssueTitle: AST.ParseIssueTitleAnnotationId,
  parseOptions: AST.ParseOptionsAnnotationId,
  decodingFallback: AST.DecodingFallbackAnnotationId
}

const toASTAnnotations = <A, TypeParameters extends ReadonlyArray<any>>(
  annotations?: AllAnnotations<A, TypeParameters>
): AST.Annotations => {
  if (!annotations) {
    return {}
  }
  const out: Types.Mutable<AST.Annotations> = { ...annotations }

  for (const key in builtInAnnotations) {
    if (key in annotations) {
      const id = builtInAnnotations[key as keyof typeof builtInAnnotations]
      out[id] = annotations[key as keyof typeof annotations]
      delete out[key]
    }
  }

  return out
}

const mergeSchemaAnnotations = <A>(ast: AST.AST, annotations: Annotations.Schema<A>): AST.AST =>
  AST.annotations(ast, toASTAnnotations(annotations))

/**
 * @category annotations
 * @since 3.10.0
 */
export declare namespace Annotable {
  /**
   * @since 3.10.0
   */
  export type Self<S extends All> = ReturnType<S["annotations"]>

  /**
   * @since 3.10.0
   */
  export type Any = Annotable<any, any, any, unknown>

  /**
   * @since 3.10.0
   */
  export type All =
    | Any
    | Annotable<any, any, never, unknown>
    | Annotable<any, never, any, unknown>
    | Annotable<any, never, never, unknown>
}

/**
 * @since 3.10.0
 */
export function asSchema<S extends Schema.All>(
  schema: S
): Schema<Schema.Type<S>, Schema.Encoded<S>, Schema.Context<S>> {
  return schema as any
}

/**
 * @category formatting
 * @since 3.10.0
 */
export const format = <S extends Schema.All>(schema: S): string => String(schema.ast)

/**
 * @since 3.10.0
 */
export declare namespace Schema {
  /**
   * @since 3.10.0
   */
  export interface Variance<A, I, R> {
    readonly [TypeId]: {
      readonly _A: Types.Invariant<A>
      readonly _I: Types.Invariant<I>
      readonly _R: Types.Covariant<R>
    }
  }

  /**
   * @since 3.10.0
   */
  export type Type<S> = S extends Schema.Variance<infer A, infer _I, infer _R> ? A : never

  /**
   * @since 3.10.0
   */
  export type Encoded<S> = S extends Schema.Variance<infer _A, infer I, infer _R> ? I : never

  /**
   * @since 3.10.0
   */
  export type Context<S> = S extends Schema.Variance<infer _A, infer _I, infer R> ? R : never

  /**
   * @since 3.10.0
   */
  export type ToAsserts<S extends AnyNoContext> = (
    input: unknown,
    options?: AST.ParseOptions
  ) => asserts input is Schema.Type<S>

  /**
   * Any schema, except for `never`.
   *
   * @since 3.10.0
   */
  export type Any = Schema<any, any, unknown>

  /**
   * Any schema with `Context = never`, except for `never`.
   *
   * @since 3.10.0
   */
  export type AnyNoContext = Schema<any, any, never>

  /**
   * Any schema, including `never`.
   *
   * @since 3.10.0
   */
  export type All =
    | Any
    | Schema<any, never, unknown>
    | Schema<never, any, unknown>
    | Schema<never, never, unknown>

  /**
   * Type-level counterpart of `Schema.asSchema` function.
   *
   * @since 3.10.0
   */
  export type AsSchema<S extends All> = Schema<Type<S>, Encoded<S>, Context<S>>
}

/**
 * The `encodedSchema` function allows you to extract the `Encoded` portion of a
 * schema, creating a new schema that conforms to the properties defined in the
 * original schema without retaining any refinements or transformations that
 * were applied previously.
 *
 * @since 3.10.0
 */
export const encodedSchema = <A, I, R>(schema: Schema<A, I, R>): SchemaClass<I> => make(AST.encodedAST(schema.ast))

/**
 * The `encodedBoundSchema` function is similar to `encodedSchema` but preserves
 * the refinements up to the first transformation point in the original schema.
 *
 * @since 3.10.0
 */
export const encodedBoundSchema = <A, I, R>(schema: Schema<A, I, R>): SchemaClass<I> =>
  make(AST.encodedBoundAST(schema.ast))

/**
 * The `typeSchema` function allows you to extract the `Type` portion of a
 * schema, creating a new schema that conforms to the properties defined in the
 * original schema without considering the initial encoding or transformation
 * processes.
 *
 * @since 3.10.0
 */
export const typeSchema = <A, I, R>(schema: Schema<A, I, R>): SchemaClass<A> => make(AST.typeAST(schema.ast))

/* c8 ignore start */
export {
  /**
   * By default the option `exact` is set to `true`.
   *
   * @throws `ParseError`
   * @category validation
   * @since 3.10.0
   */
  asserts,
  /**
   * @category decoding
   * @since 3.10.0
   */
  decodeOption,
  /**
   * @throws `ParseError`
   * @category decoding
   * @since 3.10.0
   */
  decodeSync,
  /**
   * @category decoding
   * @since 3.10.0
   */
  decodeUnknownOption,
  /**
   * @throws `ParseError`
   * @category decoding
   * @since 3.10.0
   */
  decodeUnknownSync,
  /**
   * @category encoding
   * @since 3.10.0
   */
  encodeOption,
  /**
   * @throws `ParseError`
   * @category encoding
   * @since 3.10.0
   */
  encodeSync,
  /**
   * @category encoding
   * @since 3.10.0
   */
  encodeUnknownOption,
  /**
   * @throws `ParseError`
   * @category encoding
   * @since 3.10.0
   */
  encodeUnknownSync,
  /**
   * By default the option `exact` is set to `true`.
   *
   * @category validation
   * @since 3.10.0
   */
  is,
  /**
   * @category validation
   * @since 3.10.0
   */
  validateOption,
  /**
   * @throws `ParseError`
   * @category validation
   * @since 3.10.0
   */
  validateSync
} from "./ParseResult.js"
/* c8 ignore end */

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknown = <A, I, R>(
  schema: Schema<A, I, R>,
  options?: ParseOptions
) => {
  const encodeUnknown = ParseResult.encodeUnknown(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): Effect.Effect<I, ParseResult.ParseError, R> =>
    ParseResult.mapError(encodeUnknown(u, overrideOptions), ParseResult.parseError)
}

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownEither = <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => {
  const encodeUnknownEither = ParseResult.encodeUnknownEither(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): either_.Either<I, ParseResult.ParseError> =>
    either_.mapLeft(encodeUnknownEither(u, overrideOptions), ParseResult.parseError)
}

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownPromise = <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => {
  const parser = encodeUnknown(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): Promise<I> => Effect.runPromise(parser(u, overrideOptions))
}

/**
 * @category encoding
 * @since 3.10.0
 */
export const encode: <A, I, R>(
  schema: Schema<A, I, R>,
  options?: ParseOptions
) => (a: A, overrideOptions?: ParseOptions) => Effect.Effect<I, ParseResult.ParseError, R> = encodeUnknown

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeEither: <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => (a: A, overrideOptions?: ParseOptions) => either_.Either<I, ParseResult.ParseError> = encodeUnknownEither

/**
 * @category encoding
 * @since 3.10.0
 */
export const encodePromise: <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => (a: A, overrideOptions?: ParseOptions) => Promise<I> = encodeUnknownPromise

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknown = <A, I, R>(
  schema: Schema<A, I, R>,
  options?: ParseOptions
) => {
  const decodeUnknown = ParseResult.decodeUnknown(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): Effect.Effect<A, ParseResult.ParseError, R> =>
    ParseResult.mapError(decodeUnknown(u, overrideOptions), ParseResult.parseError)
}

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownEither = <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => {
  const decodeUnknownEither = ParseResult.decodeUnknownEither(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): either_.Either<A, ParseResult.ParseError> =>
    either_.mapLeft(decodeUnknownEither(u, overrideOptions), ParseResult.parseError)
}

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownPromise = <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => {
  const parser = decodeUnknown(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): Promise<A> => Effect.runPromise(parser(u, overrideOptions))
}

/**
 * @category decoding
 * @since 3.10.0
 */
export const decode: <A, I, R>(
  schema: Schema<A, I, R>,
  options?: ParseOptions
) => (i: I, overrideOptions?: ParseOptions) => Effect.Effect<A, ParseResult.ParseError, R> = decodeUnknown

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeEither: <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => (i: I, overrideOptions?: ParseOptions) => either_.Either<A, ParseResult.ParseError> = decodeUnknownEither

/**
 * @category decoding
 * @since 3.10.0
 */
export const decodePromise: <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => (i: I, overrideOptions?: ParseOptions) => Promise<A> = decodeUnknownPromise

/**
 * @category validation
 * @since 3.10.0
 */
export const validate = <A, I, R>(
  schema: Schema<A, I, R>,
  options?: ParseOptions
) => {
  const validate = ParseResult.validate(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): Effect.Effect<A, ParseResult.ParseError, R> =>
    ParseResult.mapError(validate(u, overrideOptions), ParseResult.parseError)
}

/**
 * @category validation
 * @since 3.10.0
 */
export const validateEither = <A, I, R>(
  schema: Schema<A, I, R>,
  options?: ParseOptions
) => {
  const validateEither = ParseResult.validateEither(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): either_.Either<A, ParseResult.ParseError> =>
    either_.mapLeft(validateEither(u, overrideOptions), ParseResult.parseError)
}

/**
 * @category validation
 * @since 3.10.0
 */
export const validatePromise = <A, I>(
  schema: Schema<A, I, never>,
  options?: ParseOptions
) => {
  const parser = validate(schema, options)
  return (u: unknown, overrideOptions?: ParseOptions): Promise<A> => Effect.runPromise(parser(u, overrideOptions))
}

/**
 * Tests if a value is a `Schema`.
 *
 * @category guards
 * @since 3.10.0
 */
export const isSchema = (u: unknown): u is Schema.Any =>
  Predicate.hasProperty(u, TypeId) && Predicate.isObject(u[TypeId])

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Literal<Literals extends array_.NonEmptyReadonlyArray<AST.LiteralValue>>
  extends AnnotableClass<Literal<Literals>, Literals[number]>
{
  readonly literals: Readonly<Literals>
}

function getDefaultLiteralAST<Literals extends array_.NonEmptyReadonlyArray<AST.LiteralValue>>(
  literals: Literals
): AST.AST {
  return AST.isMembers(literals)
    ? AST.Union.make(AST.mapMembers(literals, (literal) => new AST.Literal(literal)))
    : new AST.Literal(literals[0])
}

function makeLiteralClass<Literals extends array_.NonEmptyReadonlyArray<AST.LiteralValue>>(
  literals: Literals,
  ast: AST.AST = getDefaultLiteralAST(literals)
): Literal<Literals> {
  return class LiteralClass extends make<Literals[number]>(ast) {
    static override annotations(annotations: Annotations.Schema<Literals[number]>): Literal<Literals> {
      return makeLiteralClass(this.literals, mergeSchemaAnnotations(this.ast, annotations))
    }
    static literals = [...literals] as Literals
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export function Literal<Literals extends array_.NonEmptyReadonlyArray<AST.LiteralValue>>(
  ...literals: Literals
): Literal<Literals>
export function Literal(): Never
export function Literal<Literals extends ReadonlyArray<AST.LiteralValue>>(
  ...literals: Literals
): SchemaClass<Literals[number]>
export function Literal<Literals extends ReadonlyArray<AST.LiteralValue>>(
  ...literals: Literals
): SchemaClass<Literals[number]> | Never {
  return array_.isNonEmptyReadonlyArray(literals) ? makeLiteralClass(literals) : Never
}

/**
 * Creates a new `Schema` from a literal schema.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, Schema } from "effect"
 *
 * const schema = Schema.Literal("a", "b", "c").pipe(Schema.pickLiteral("a", "b"))
 *
 * assert.deepStrictEqual(Schema.decodeSync(schema)("a"), "a")
 * assert.deepStrictEqual(Schema.decodeSync(schema)("b"), "b")
 * assert.strictEqual(Either.isLeft(Schema.decodeUnknownEither(schema)("c")), true)
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export const pickLiteral =
  <A extends AST.LiteralValue, L extends array_.NonEmptyReadonlyArray<A>>(...literals: L) =>
  <I, R>(_schema: Schema<A, I, R>): Literal<[...L]> => Literal(...literals)

/**
 * @category constructors
 * @since 3.10.0
 */
export const UniqueSymbolFromSelf = <S extends symbol>(symbol: S): SchemaClass<S> => make(new AST.UniqueSymbol(symbol))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Enums<A extends EnumsDefinition> extends AnnotableClass<Enums<A>, A[keyof A]> {
  readonly enums: A
}

/**
 * @since 3.10.0
 */
export type EnumsDefinition = { [x: string]: string | number }

const getDefaultEnumsAST = <A extends EnumsDefinition>(enums: A) =>
  new AST.Enums(
    Object.keys(enums).filter(
      (key) => typeof enums[enums[key]] !== "number"
    ).map((key) => [key, enums[key]])
  )

const makeEnumsClass = <A extends EnumsDefinition>(
  enums: A,
  ast: AST.AST = getDefaultEnumsAST(enums)
): Enums<A> => (class EnumsClass extends make<A[keyof A]>(ast) {
  static override annotations(annotations: Annotations.Schema<A[keyof A]>) {
    return makeEnumsClass(this.enums, mergeSchemaAnnotations(this.ast, annotations))
  }

  static enums = { ...enums }
})

/**
 * @category constructors
 * @since 3.10.0
 */
export const Enums = <A extends EnumsDefinition>(enums: A): Enums<A> => makeEnumsClass(enums)

type AppendType<
  Template extends string,
  Next
> = Next extends AST.LiteralValue ? `${Template}${Next}`
  : Next extends Schema<infer A extends AST.LiteralValue, infer _I, infer _R> ? `${Template}${A}`
  : never

type GetTemplateLiteralType<Params> = Params extends [...infer Init, infer Last] ?
  AppendType<GetTemplateLiteralType<Init>, Last>
  : ``

/**
 * @category API interface
 * @since 3.10.0
 */
export interface TemplateLiteral<A> extends SchemaClass<A> {}

type TemplateLiteralParameter = Schema.AnyNoContext | AST.LiteralValue

/**
 * @category template literal
 * @since 3.10.0
 */
export const TemplateLiteral = <Params extends array_.NonEmptyReadonlyArray<TemplateLiteralParameter>>(
  ...[head, ...tail]: Params
): TemplateLiteral<GetTemplateLiteralType<Params>> => {
  const spans: Array<AST.TemplateLiteralSpan> = []
  let h = ""
  let ts = tail

  if (isSchema(head)) {
    if (AST.isLiteral(head.ast)) {
      h = String(head.ast.literal)
    } else {
      ts = [head, ...ts]
    }
  } else {
    h = String(head)
  }

  for (let i = 0; i < ts.length; i++) {
    const item = ts[i]
    if (isSchema(item)) {
      if (i < ts.length - 1) {
        const next = ts[i + 1]
        if (isSchema(next)) {
          if (AST.isLiteral(next.ast)) {
            spans.push(new AST.TemplateLiteralSpan(item.ast, String(next.ast.literal)))
            i++
            continue
          }
        } else {
          spans.push(new AST.TemplateLiteralSpan(item.ast, String(next)))
          i++
          continue
        }
      }
      spans.push(new AST.TemplateLiteralSpan(item.ast, ""))
    } else {
      spans.push(new AST.TemplateLiteralSpan(new AST.Literal(item), ""))
    }
  }

  if (array_.isNonEmptyArray(spans)) {
    return make(new AST.TemplateLiteral(h, spans))
  } else {
    return make(new AST.TemplateLiteral("", [new AST.TemplateLiteralSpan(new AST.Literal(h), "")]))
  }
}

type TemplateLiteralParserParameters = Schema.Any | AST.LiteralValue

type GetTemplateLiteralParserType<Params> = Params extends [infer Head, ...infer Tail] ? readonly [
    Head extends Schema<infer A, infer _I, infer _R> ? A : Head,
    ...GetTemplateLiteralParserType<Tail>
  ]
  : []

type AppendEncoded<
  Template extends string,
  Next
> = Next extends AST.LiteralValue ? `${Template}${Next}`
  : Next extends Schema<infer _A, infer I extends AST.LiteralValue, infer _R> ? `${Template}${I}`
  : never

type GetTemplateLiteralParserEncoded<Params> = Params extends [...infer Init, infer Last] ?
  AppendEncoded<GetTemplateLiteralParserEncoded<Init>, Last>
  : ``

/**
 * @category API interface
 * @since 3.10.0
 */
export interface TemplateLiteralParser<Params extends array_.NonEmptyReadonlyArray<TemplateLiteralParserParameters>>
  extends
    Schema<
      GetTemplateLiteralParserType<Params>,
      GetTemplateLiteralParserEncoded<Params>,
      Schema.Context<Params[number]>
    >
{
  readonly params: Params
}

function getTemplateLiteralParserCoercedElement(encoded: Schema.Any, schema: Schema.Any): Schema.Any | undefined {
  const ast = encoded.ast
  switch (ast._tag) {
    case "Literal": {
      const literal = ast.literal
      if (!Predicate.isString(literal)) {
        const s = String(literal)
        return transform(Literal(s), schema, {
          strict: true,
          decode: () => literal,
          encode: () => s
        })
      }
      break
    }
    case "NumberKeyword":
      return compose(NumberFromString, schema)
    case "Union": {
      const members: Array<Schema.Any> = []
      let hasCoercions = false
      for (const member of ast.types) {
        const schema = make(member)
        const encoded = encodedSchema(schema)
        const coerced = getTemplateLiteralParserCoercedElement(encoded, schema)
        if (coerced) {
          hasCoercions = true
        }
        members.push(coerced ?? schema)
      }
      return hasCoercions ? compose(Union(...members), schema) : schema
    }
  }
}

/**
 * @category template literal
 * @since 3.10.0
 */
export const TemplateLiteralParser = <Params extends array_.NonEmptyReadonlyArray<TemplateLiteralParserParameters>>(
  ...params: Params
): TemplateLiteralParser<Params> => {
  const encodedSchemas: Array<Schema.Any> = []
  const elements: Array<Schema.Any> = []
  const schemas: Array<Schema.Any> = []
  let coerced = false
  for (let i = 0; i < params.length; i++) {
    const param = params[i]
    const schema = isSchema(param) ? param : Literal(param)
    schemas.push(schema)
    const encoded = encodedSchema(schema)
    encodedSchemas.push(encoded)
    const element = getTemplateLiteralParserCoercedElement(encoded, schema)
    if (element) {
      elements.push(element)
      coerced = true
    } else {
      elements.push(schema)
    }
  }
  const from = TemplateLiteral(...encodedSchemas as any)
  const re = AST.getTemplateLiteralCapturingRegExp(from.ast as AST.TemplateLiteral)
  let to = Tuple(...elements)
  if (coerced) {
    to = to.annotations({ [AST.AutoTitleAnnotationId]: format(Tuple(...schemas)) })
  }
  return class TemplateLiteralParserClass extends transformOrFail(from, to, {
    strict: false,
    decode: (i, _, ast) => {
      const match = re.exec(i)
      return match
        ? ParseResult.succeed(match.slice(1, params.length + 1))
        : ParseResult.fail(new ParseResult.Type(ast, i, `${re.source}: no match for ${JSON.stringify(i)}`))
    },
    encode: (tuple) => ParseResult.succeed(tuple.join(""))
  }) {
    static params = params.slice()
  } as any
}

const declareConstructor = <
  const TypeParameters extends ReadonlyArray<Schema.Any>,
  I,
  A
>(
  typeParameters: TypeParameters,
  options: {
    readonly decode: (
      ...typeParameters: {
        readonly [K in keyof TypeParameters]: Schema<
          Schema.Type<TypeParameters[K]>,
          Schema.Encoded<TypeParameters[K]>,
          never
        >
      }
    ) => (
      input: unknown,
      options: ParseOptions,
      ast: AST.Declaration
    ) => Effect.Effect<A, ParseResult.ParseIssue, never>
    readonly encode: (
      ...typeParameters: {
        readonly [K in keyof TypeParameters]: Schema<
          Schema.Type<TypeParameters[K]>,
          Schema.Encoded<TypeParameters[K]>,
          never
        >
      }
    ) => (
      input: unknown,
      options: ParseOptions,
      ast: AST.Declaration
    ) => Effect.Effect<I, ParseResult.ParseIssue, never>
  },
  annotations?: Annotations.Schema<A, TypeParameters>
): SchemaClass<A, I, Schema.Context<TypeParameters[number]>> =>
  makeDeclareClass(
    typeParameters,
    new AST.Declaration(
      typeParameters.map((tp) => tp.ast),
      (...typeParameters) => options.decode(...typeParameters.map(make) as any),
      (...typeParameters) => options.encode(...typeParameters.map(make) as any),
      toASTAnnotations(annotations)
    )
  )

const declarePrimitive = <A>(
  is: (input: unknown) => input is A,
  annotations?: Annotations.Schema<A>
): SchemaClass<A> => {
  const decodeUnknown = () => (input: unknown, _: ParseOptions, ast: AST.Declaration) =>
    is(input) ? ParseResult.succeed(input) : ParseResult.fail(new ParseResult.Type(ast, input))
  const encodeUnknown = decodeUnknown
  return makeDeclareClass([], new AST.Declaration([], decodeUnknown, encodeUnknown, toASTAnnotations(annotations)))
}

/**
 * @category api interface
 * @since 3.13.3
 */
export interface declare<
  A,
  I = A,
  P extends ReadonlyArray<Schema.All> = readonly [],
  R = Schema.Context<P[number]>
> extends AnnotableClass<declare<A, I, P, R>, A, I, R> {
  readonly typeParameters: Readonly<P>
}

/**
 * @category api interface
 * @since 3.13.3
 */
export interface AnnotableDeclare<
  Self extends declare<A, I, P, R>,
  A,
  I = A,
  P extends ReadonlyArray<Schema.All> = readonly [],
  R = Schema.Context<P[number]>
> extends declare<A, I, P, R> {
  annotations(annotations: Annotations.Schema<A>): Self
}

function makeDeclareClass<P extends ReadonlyArray<Schema.All>, A, I, R>(
  typeParameters: P,
  ast: AST.AST
): declare<A, I, P, R> {
  return class DeclareClass extends make<A, I, R>(ast) {
    static override annotations(annotations: Annotations.Schema<A>): declare<A, I, P, R> {
      return makeDeclareClass(this.typeParameters, mergeSchemaAnnotations(this.ast, annotations))
    }
    static typeParameters = [...typeParameters] as any as P
  }
}

/**
 * The constraint `R extends Schema.Context<P[number]>` enforces dependencies solely from `typeParameters`.
 * This ensures that when you call `Schema.to` or `Schema.from`, you receive a schema with a `never` context.
 *
 * @category constructors
 * @since 3.10.0
 */
export const declare: {
  /**
   * The constraint `R extends Schema.Context<P[number]>` enforces dependencies solely from `typeParameters`.
   * This ensures that when you call `Schema.to` or `Schema.from`, you receive a schema with a `never` context.
   *
   * @category constructors
   * @since 3.10.0
   */
  <A>(is: (input: unknown) => input is A, annotations?: Annotations.Schema<A>): declare<A>
  /**
   * The constraint `R extends Schema.Context<P[number]>` enforces dependencies solely from `typeParameters`.
   * This ensures that when you call `Schema.to` or `Schema.from`, you receive a schema with a `never` context.
   *
   * @category constructors
   * @since 3.10.0
   */
  <A, I, const P extends ReadonlyArray<Schema.All>>(
    typeParameters: P,
    options: {
      readonly decode: (
        ...typeParameters: { readonly [K in keyof P]: Schema<Schema.Type<P[K]>, Schema.Encoded<P[K]>, never> }
      ) => (
        input: unknown,
        options: ParseOptions,
        ast: AST.Declaration
      ) => Effect.Effect<A, ParseResult.ParseIssue, never>
      readonly encode: (
        ...typeParameters: { readonly [K in keyof P]: Schema<Schema.Type<P[K]>, Schema.Encoded<P[K]>, never> }
      ) => (
        input: unknown,
        options: ParseOptions,
        ast: AST.Declaration
      ) => Effect.Effect<I, ParseResult.ParseIssue, never>
    },
    annotations?: Annotations.Schema<A, { readonly [K in keyof P]: Schema.Type<P[K]> }>
  ): declare<A, I, P>
} = function() {
  if (Array.isArray(arguments[0])) {
    const typeParameters = arguments[0]
    const options = arguments[1]
    const annotations = arguments[2]
    return declareConstructor(typeParameters, options, annotations)
  }
  const is = arguments[0]
  const annotations = arguments[1]
  return declarePrimitive(is, annotations)
} as any

/**
 * @category schema id
 * @since 3.10.0
 */
export const BrandSchemaId: unique symbol = Symbol.for("effect/SchemaId/Brand")

/**
 * @category constructors
 * @since 3.10.0
 */
export const fromBrand = <C extends Brand<string | symbol>, A extends Brand.Unbranded<C>>(
  constructor: Brand.Constructor<C>,
  annotations?: Annotations.Filter<C, A>
) =>
<I, R>(self: Schema<A, I, R>): BrandSchema<A & C, I, R> => {
  const out = makeBrandClass(
    self,
    new AST.Refinement(
      self.ast,
      function predicate(a: A, _: ParseOptions, ast: AST.AST): option_.Option<ParseResult.ParseIssue> {
        const either = constructor.either(a)
        return either_.isLeft(either) ?
          option_.some(new ParseResult.Type(ast, a, either.left.map((v) => v.message).join(", "))) :
          option_.none()
      },
      toASTAnnotations({
        schemaId: BrandSchemaId,
        [BrandSchemaId]: { constructor },
        ...annotations
      })
    )
  )
  return out as any
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const InstanceOfSchemaId: unique symbol = Symbol.for("effect/SchemaId/InstanceOf")

/**
 * @category api interface
 * @since 3.10.0
 */
export interface instanceOf<A> extends AnnotableDeclare<instanceOf<A>, A> {}

/**
 * @category constructors
 * @since 3.10.0
 */
export const instanceOf = <A extends abstract new(...args: any) => any>(
  constructor: A,
  annotations?: Annotations.Schema<InstanceType<A>>
): instanceOf<InstanceType<A>> =>
  declare(
    (u): u is InstanceType<A> => u instanceof constructor,
    {
      title: constructor.name,
      description: `an instance of ${constructor.name}`,
      pretty: (): pretty_.Pretty<InstanceType<A>> => String,
      schemaId: InstanceOfSchemaId,
      [InstanceOfSchemaId]: { constructor },
      ...annotations
    }
  )

/**
 * @category primitives
 * @since 3.10.0
 */
export class Undefined extends make<undefined>(AST.undefinedKeyword) {}

/**
 * @category primitives
 * @since 3.10.0
 */
export class Void extends make<void>(AST.voidKeyword) {}

/**
 * @category primitives
 * @since 3.10.0
 */
export class Null extends make<null>(AST.null) {}

/**
 * @category primitives
 * @since 3.10.0
 */
export class Never extends make<never>(AST.neverKeyword) {}

/**
 * @category primitives
 * @since 3.10.0
 */
export class Unknown extends make<unknown>(AST.unknownKeyword) {}

/**
 * @category primitives
 * @since 3.10.0
 */
export class Any extends make<any>(AST.anyKeyword) {}

/**
 * @category primitives
 * @since 3.10.0
 */
export class BigIntFromSelf extends make<bigint>(AST.bigIntKeyword) {}

/**
 * @category primitives
 * @since 3.10.0
 */
export class SymbolFromSelf extends make<symbol>(AST.symbolKeyword) {}

/** @ignore */
class String$ extends make<string>(AST.stringKeyword) {}

/** @ignore */
class Number$ extends make<number>(AST.numberKeyword) {}

/** @ignore */
class Boolean$ extends make<boolean>(AST.booleanKeyword) {}

/** @ignore */
class Object$ extends make<object>(AST.objectKeyword) {}

export {
  /**
   * @category primitives
   * @since 3.10.0
   */
  Boolean$ as Boolean,
  /**
   * @category primitives
   * @since 3.10.0
   */
  Number$ as Number,
  /**
   * @category primitives
   * @since 3.10.0
   */
  Object$ as Object,
  /**
   * @category primitives
   * @since 3.10.0
   */
  String$ as String
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Union<Members extends ReadonlyArray<Schema.All>> extends
  AnnotableClass<
    Union<Members>,
    Schema.Type<Members[number]>,
    Schema.Encoded<Members[number]>,
    Schema.Context<Members[number]>
  >
{
  readonly members: Readonly<Members>
}

const getDefaultUnionAST = <Members extends AST.Members<Schema.All>>(members: Members): AST.AST =>
  AST.Union.make(members.map((m) => m.ast))

function makeUnionClass<Members extends AST.Members<Schema.All>>(
  members: Members,
  ast: AST.AST = getDefaultUnionAST(members)
): Union<Members> {
  return class UnionClass extends make<
    Schema.Type<Members[number]>,
    Schema.Encoded<Members[number]>,
    Schema.Context<Members[number]>
  >(ast) {
    static override annotations(annotations: Annotations.Schema<Schema.Type<Members[number]>>): Union<Members> {
      return makeUnionClass(this.members, mergeSchemaAnnotations(this.ast, annotations))
    }

    static members = [...members]
  }
}

/**
 * @category combinators
 * @since 3.10.0
 */
export function Union<Members extends AST.Members<Schema.All>>(...members: Members): Union<Members>
export function Union<Member extends Schema.All>(member: Member): Member
export function Union(): typeof Never
export function Union<Members extends ReadonlyArray<Schema.All>>(
  ...members: Members
): Schema<Schema.Type<Members[number]>, Schema.Encoded<Members[number]>, Schema.Context<Members[number]>>
export function Union<Members extends ReadonlyArray<Schema.All>>(
  ...members: Members
) {
  return AST.isMembers(members)
    ? makeUnionClass(members)
    : array_.isNonEmptyReadonlyArray(members)
    ? members[0]
    : Never
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface NullOr<S extends Schema.All> extends Union<[S, typeof Null]> {
  annotations(annotations: Annotations.Schema<Schema.Type<S> | null>): NullOr<S>
}

/**
 * @category combinators
 * @since 3.10.0
 */
export const NullOr = <S extends Schema.All>(self: S): NullOr<S> => Union(self, Null)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface UndefinedOr<S extends Schema.All> extends Union<[S, typeof Undefined]> {
  annotations(annotations: Annotations.Schema<Schema.Type<S> | undefined>): UndefinedOr<S>
}

/**
 * @category combinators
 * @since 3.10.0
 */
export const UndefinedOr = <S extends Schema.All>(self: S): UndefinedOr<S> => Union(self, Undefined)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface NullishOr<S extends Schema.All> extends Union<[S, typeof Null, typeof Undefined]> {
  annotations(annotations: Annotations.Schema<Schema.Type<S> | null | undefined>): NullishOr<S>
}

/**
 * @category combinators
 * @since 3.10.0
 */
export const NullishOr = <S extends Schema.All>(self: S): NullishOr<S> => Union(self, Null, Undefined)

/**
 * @category combinators
 * @since 3.10.0
 */
export const keyof = <A, I, R>(self: Schema<A, I, R>): SchemaClass<keyof A> => make<keyof A>(AST.keyof(self.ast))

/**
 * @since 3.10.0
 */
export declare namespace Element {
  /**
   * @since 3.10.0
   */
  export interface Annotations<A> extends Annotations.Doc<A> {
    readonly missingMessage?: AST.MissingMessageAnnotation
  }

  /**
   * @since 3.10.0
   */
  export type Token = "" | "?"
}

/**
 * @category API interface
 * @since 3.10.0
 */
export interface Element<S extends Schema.Any, Token extends Element.Token>
  extends Schema.Variance<Schema.Type<S>, Schema.Encoded<S>, Schema.Context<S>>
{
  readonly _Token: Token
  readonly ast: AST.OptionalType
  readonly from: S
  annotations(annotations: Element.Annotations<Schema.Type<S>>): Element<S, Token>
}

/**
 * @since 3.10.0
 */
export const element = <S extends Schema.Any>(self: S): Element<S, ""> =>
  new ElementImpl(new AST.OptionalType(self.ast, false), self)

/**
 * @since 3.10.0
 */
export const optionalElement = <S extends Schema.Any>(self: S): Element<S, "?"> =>
  new ElementImpl(new AST.OptionalType(self.ast, true), self)

class ElementImpl<S extends Schema.Any, Token extends Element.Token> implements Element<S, Token> {
  readonly [TypeId]!: Schema.Variance<Schema.Type<S>, Schema.Encoded<S>, Schema.Context<S>>[TypeId]
  readonly _Token!: Token
  constructor(
    readonly ast: AST.OptionalType,
    readonly from: S
  ) {}
  annotations(
    annotations: Annotations.Schema<Schema.Type<S>>
  ): ElementImpl<S, Token> {
    return new ElementImpl(
      new AST.OptionalType(
        this.ast.type,
        this.ast.isOptional,
        { ...this.ast.annotations, ...toASTAnnotations(annotations) }
      ),
      this.from
    )
  }
  toString() {
    return `${this.ast.type}${this.ast.isOptional ? "?" : ""}`
  }
}

/**
 * @since 3.10.0
 */
export declare namespace TupleType {
  type ElementsType<
    Elements,
    Out extends ReadonlyArray<any> = readonly []
  > = Elements extends readonly [infer Head, ...infer Tail] ?
    Head extends Element<infer T, "?"> ? ElementsType<Tail, readonly [...Out, Schema.Type<T>?]>
    : ElementsType<Tail, readonly [...Out, Schema.Type<Head>]>
    : Out

  type ElementsEncoded<
    Elements,
    Out extends ReadonlyArray<any> = readonly []
  > = Elements extends readonly [infer Head, ...infer Tail] ?
    Head extends Element<infer T, "?"> ? ElementsEncoded<Tail, readonly [...Out, Schema.Encoded<T>?]>
    : ElementsEncoded<Tail, readonly [...Out, Schema.Encoded<Head>]>
    : Out

  /**
   * @since 3.10.0
   */
  export type Elements = ReadonlyArray<Schema.Any | Element<Schema.Any, Element.Token>>

  /**
   * @since 3.10.0
   */
  export type Rest = ReadonlyArray<Schema.Any | Element<Schema.Any, "">>

  /**
   * @since 3.10.0
   */
  export type Type<Elements extends TupleType.Elements, Rest extends TupleType.Rest> = Rest extends
    [infer Head, ...infer Tail] ? Readonly<[
      ...ElementsType<Elements>,
      ...ReadonlyArray<Schema.Type<Head>>,
      ...{ readonly [K in keyof Tail]: Schema.Type<Tail[K]> }
    ]> :
    ElementsType<Elements>

  /**
   * @since 3.10.0
   */
  export type Encoded<Elements extends TupleType.Elements, Rest extends TupleType.Rest> = Rest extends
    [infer Head, ...infer Tail] ? Readonly<[
      ...ElementsEncoded<Elements>,
      ...ReadonlyArray<Schema.Encoded<Head>>,
      ...{ readonly [K in keyof Tail]: Schema.Encoded<Tail[K]> }
    ]> :
    ElementsEncoded<Elements>
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface TupleType<Elements extends TupleType.Elements, Rest extends TupleType.Rest> extends
  AnnotableClass<
    TupleType<Elements, Rest>,
    TupleType.Type<Elements, Rest>,
    TupleType.Encoded<Elements, Rest>,
    Schema.Context<Elements[number]> | Schema.Context<Rest[number]>
  >
{
  readonly elements: Readonly<Elements>
  readonly rest: Readonly<Rest>
}

const getDefaultTupleTypeAST = <Elements extends TupleType.Elements, Rest extends TupleType.Rest>(
  elements: Elements,
  rest: Rest
) =>
  new AST.TupleType(
    elements.map((el) => isSchema(el) ? new AST.OptionalType(el.ast, false) : el.ast),
    rest.map((el) => isSchema(el) ? new AST.Type(el.ast) : el.ast),
    true
  )

function makeTupleTypeClass<Elements extends TupleType.Elements, Rest extends TupleType.Rest>(
  elements: Elements,
  rest: Rest,
  ast: AST.AST = getDefaultTupleTypeAST(elements, rest)
) {
  return class TupleTypeClass extends make<
    TupleType.Type<Elements, Rest>,
    TupleType.Encoded<Elements, Rest>,
    Schema.Context<Elements[number]> | Schema.Context<Rest[number]>
  >(ast) {
    static override annotations(
      annotations: Annotations.Schema<TupleType.Type<Elements, Rest>>
    ): TupleType<Elements, Rest> {
      return makeTupleTypeClass(this.elements, this.rest, mergeSchemaAnnotations(this.ast, annotations))
    }

    static elements = [...elements] as any as Elements

    static rest = [...rest] as any as Rest
  }
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Tuple<Elements extends TupleType.Elements> extends TupleType<Elements, []> {
  annotations(annotations: Annotations.Schema<TupleType.Type<Elements, []>>): Tuple<Elements>
}

/**
 * @category api interface
 * @since 3.13.3
 */
export interface Tuple2<Fst extends Schema.Any, Snd extends Schema.Any> extends
  AnnotableClass<
    Tuple2<Fst, Snd>,
    readonly [Schema.Type<Fst>, Schema.Type<Snd>],
    readonly [Schema.Encoded<Fst>, Schema.Encoded<Snd>],
    Schema.Context<Fst> | Schema.Context<Snd>
  >
{
  readonly elements: readonly [Fst, Snd]
  readonly rest: readonly []
}

/**
 * @category constructors
 * @since 3.10.0
 */
export function Tuple<
  const Elements extends TupleType.Elements,
  Rest extends array_.NonEmptyReadonlyArray<TupleType.Rest[number]>
>(elements: Elements, ...rest: Rest): TupleType<Elements, Rest>
export function Tuple<Fst extends Schema.Any, Snd extends Schema.Any>(fst: Fst, snd: Snd): Tuple2<Fst, Snd>
export function Tuple<Elements extends TupleType.Elements>(...elements: Elements): Tuple<Elements>
export function Tuple(...args: ReadonlyArray<any>): any {
  return Array.isArray(args[0])
    ? makeTupleTypeClass(args[0], args.slice(1))
    : makeTupleTypeClass(args, [])
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Array$<Value extends Schema.Any> extends TupleType<[], [Value]> {
  readonly value: Value
  annotations(annotations: Annotations.Schema<TupleType.Type<[], [Value]>>): Array$<Value>
}

function makeArrayClass<Value extends Schema.Any>(
  value: Value,
  ast?: AST.AST
): Array$<Value> {
  return class ArrayClass extends makeTupleTypeClass<[], [Value]>([], [value], ast) {
    static override annotations(annotations: Annotations.Schema<TupleType.Type<[], [Value]>>) {
      return makeArrayClass(this.value, mergeSchemaAnnotations(this.ast, annotations))
    }

    static value = value
  }
}

const Array$ = <Value extends Schema.Any>(value: Value): Array$<Value> => makeArrayClass(value)

export {
  /**
   * @category constructors
   * @since 3.10.0
   */
  Array$ as Array
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyArray<Value extends Schema.Any> extends
  AnnotableClass<
    NonEmptyArray<Value>,
    array_.NonEmptyReadonlyArray<Schema.Type<Value>>,
    array_.NonEmptyReadonlyArray<Schema.Encoded<Value>>,
    Schema.Context<Value>
  >
{
  readonly elements: readonly [Value]
  readonly rest: readonly [Value]
  readonly value: Value
}

function makeNonEmptyArrayClass<Value extends Schema.Any>(
  value: Value,
  ast?: AST.AST
) {
  return class NonEmptyArrayClass extends makeTupleTypeClass<[Value], [Value]>([value], [value], ast) {
    static override annotations(annotations: Annotations.Schema<TupleType.Type<[Value], [Value]>>) {
      return makeNonEmptyArrayClass(this.value, mergeSchemaAnnotations(this.ast, annotations))
    }

    static value = value
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const NonEmptyArray = <Value extends Schema.Any>(value: Value): NonEmptyArray<Value> =>
  makeNonEmptyArrayClass(value) as any

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ArrayEnsure<Value extends Schema.Any>
  extends transform<Union<[Value, Array$<Value>]>, Array$<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category constructors
 * @since 3.10.0
 */
export function ArrayEnsure<Value extends Schema.Any>(value: Value): ArrayEnsure<Value> {
  return transform(Union(value, Array$(value)), Array$(typeSchema(asSchema(value))), {
    strict: true,
    decode: (i) => array_.ensure(i),
    encode: (a) => a.length === 1 ? a[0] : a
  })
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyArrayEnsure<Value extends Schema.Any>
  extends transform<Union<[Value, NonEmptyArray<Value>]>, NonEmptyArray<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category constructors
 * @since 3.10.0
 */
export function NonEmptyArrayEnsure<Value extends Schema.Any>(value: Value): NonEmptyArrayEnsure<Value> {
  return transform(Union(value, NonEmptyArray(value)), NonEmptyArray(typeSchema(asSchema(value))), {
    strict: true,
    decode: (i) => array_.isNonEmptyReadonlyArray(i) ? i : array_.of(i),
    encode: (a) => a.length === 1 ? a[0] : a
  })
}

/**
 * @since 3.10.0
 */
export declare namespace PropertySignature {
  /**
   * @since 3.10.0
   */
  export type Token = "?:" | ":"

  /**
   * @since 3.10.0
   */
  export type Any<Key extends PropertyKey = PropertyKey> = PropertySignature<
    Token,
    any,
    Key,
    Token,
    any,
    boolean,
    unknown
  >

  /**
   * @since 3.10.0
   */
  export type All<Key extends PropertyKey = PropertyKey> =
    | Any<Key>
    | PropertySignature<Token, never, Key, Token, any, boolean, unknown>
    | PropertySignature<Token, any, Key, Token, never, boolean, unknown>
    | PropertySignature<Token, never, Key, Token, never, boolean, unknown>

  /**
   * @since 3.10.0
   */
  export type AST =
    | PropertySignatureDeclaration
    | PropertySignatureTransformation

  /**
   * @since 3.10.0
   */
  export interface Annotations<A> extends Annotations.Doc<A> {
    readonly missingMessage?: AST.MissingMessageAnnotation
  }
}

const formatPropertySignatureToken = (isOptional: boolean): string => isOptional ? "\"?:\"" : "\":\""

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export class PropertySignatureDeclaration extends AST.OptionalType {
  /**
   * @since 3.10.0
   */
  readonly _tag = "PropertySignatureDeclaration"
  constructor(
    type: AST.AST,
    isOptional: boolean,
    readonly isReadonly: boolean,
    annotations: AST.Annotations,
    readonly defaultValue: (() => unknown) | undefined
  ) {
    super(type, isOptional, annotations)
  }
  /**
   * @since 3.10.0
   */
  toString() {
    const token = formatPropertySignatureToken(this.isOptional)
    const type = String(this.type)
    return `PropertySignature<${token}, ${type}, never, ${token}, ${type}>`
  }
}

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export class FromPropertySignature extends AST.OptionalType {
  constructor(
    type: AST.AST,
    isOptional: boolean,
    readonly isReadonly: boolean,
    annotations: AST.Annotations,
    readonly fromKey?: PropertyKey | undefined
  ) {
    super(type, isOptional, annotations)
  }
}

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export class ToPropertySignature extends AST.OptionalType {
  constructor(
    type: AST.AST,
    isOptional: boolean,
    readonly isReadonly: boolean,
    annotations: AST.Annotations,
    readonly defaultValue: (() => unknown) | undefined
  ) {
    super(type, isOptional, annotations)
  }
}

const formatPropertyKey = (p: PropertyKey | undefined): string => {
  if (p === undefined) {
    return "never"
  }
  if (Predicate.isString(p)) {
    return JSON.stringify(p)
  }
  return String(p)
}

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export class PropertySignatureTransformation {
  /**
   * @since 3.10.0
   */
  readonly _tag = "PropertySignatureTransformation"
  constructor(
    readonly from: FromPropertySignature,
    readonly to: ToPropertySignature,
    readonly decode: AST.PropertySignatureTransformation["decode"],
    readonly encode: AST.PropertySignatureTransformation["encode"]
  ) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return `PropertySignature<${formatPropertySignatureToken(this.to.isOptional)}, ${this.to.type}, ${
      formatPropertyKey(this.from.fromKey)
    }, ${formatPropertySignatureToken(this.from.isOptional)}, ${this.from.type}>`
  }
}

const mergeSignatureAnnotations = (
  ast: PropertySignature.AST,
  annotations: AST.Annotations
): PropertySignature.AST => {
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      return new PropertySignatureDeclaration(
        ast.type,
        ast.isOptional,
        ast.isReadonly,
        { ...ast.annotations, ...annotations },
        ast.defaultValue
      )
    }
    case "PropertySignatureTransformation": {
      return new PropertySignatureTransformation(
        ast.from,
        new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, {
          ...ast.to.annotations,
          ...annotations
        }, ast.to.defaultValue),
        ast.decode,
        ast.encode
      )
    }
  }
}

/**
 * @since 3.10.0
 * @category symbol
 */
export const PropertySignatureTypeId: unique symbol = Symbol.for("effect/PropertySignature")

/**
 * @since 3.10.0
 * @category symbol
 */
export type PropertySignatureTypeId = typeof PropertySignatureTypeId

/**
 * @since 3.10.0
 * @category guards
 */
export const isPropertySignature = (u: unknown): u is PropertySignature.All =>
  Predicate.hasProperty(u, PropertySignatureTypeId)

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export interface PropertySignature<
  TypeToken extends PropertySignature.Token,
  Type,
  Key extends PropertyKey,
  EncodedToken extends PropertySignature.Token,
  Encoded,
  HasDefault extends boolean = false,
  R = never
> extends Schema.Variance<Type, Encoded, R>, Pipeable {
  readonly [PropertySignatureTypeId]: null
  readonly _TypeToken: TypeToken
  readonly _EncodedToken: EncodedToken
  readonly _HasDefault: HasDefault
  readonly _Key: Key
  readonly ast: PropertySignature.AST

  annotations(
    annotations: PropertySignature.Annotations<Type>
  ): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>
}

class PropertySignatureImpl<
  TypeToken extends PropertySignature.Token,
  Type,
  Key extends PropertyKey,
  EncodedToken extends PropertySignature.Token,
  Encoded,
  HasDefault extends boolean = false,
  R = never
> implements PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R> {
  readonly [TypeId]!: Schema.Variance<Type, Encoded, R>[TypeId]
  readonly [PropertySignatureTypeId] = null
  readonly _TypeToken!: TypeToken
  readonly _Key!: Key
  readonly _EncodedToken!: EncodedToken
  readonly _HasDefault!: HasDefault

  constructor(
    readonly ast: PropertySignature.AST
  ) {}

  pipe() {
    return pipeArguments(this, arguments)
  }

  annotations(
    annotations: PropertySignature.Annotations<Type>
  ): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R> {
    return new PropertySignatureImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations)))
  }

  toString() {
    return String(this.ast)
  }
}

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export const makePropertySignature = <
  TypeToken extends PropertySignature.Token,
  Type,
  Key extends PropertyKey,
  EncodedToken extends PropertySignature.Token,
  Encoded,
  HasDefault extends boolean = false,
  R = never
>(ast: PropertySignature.AST) =>
  new PropertySignatureImpl<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>(ast)

class PropertySignatureWithFromImpl<
  From extends Schema.All,
  TypeToken extends PropertySignature.Token,
  Type,
  Key extends PropertyKey,
  EncodedToken extends PropertySignature.Token,
  Encoded,
  HasDefault extends boolean = false,
  R = never
> extends PropertySignatureImpl<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R> {
  constructor(ast: PropertySignature.AST, readonly from: From) {
    super(ast)
  }
  annotations(
    annotations: PropertySignature.Annotations<Type>
  ): PropertySignatureWithFromImpl<From, TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R> {
    return new PropertySignatureWithFromImpl(
      mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations)),
      this.from
    )
  }
}

/**
 * @category API interface
 * @since 1.0.0
 */
export interface propertySignature<S extends Schema.All>
  extends PropertySignature<":", Schema.Type<S>, never, ":", Schema.Encoded<S>, false, Schema.Context<S>>
{
  readonly from: S
  annotations(annotations: PropertySignature.Annotations<Schema.Type<S>>): propertySignature<S>
}

/**
 * Lifts a `Schema` into a `PropertySignature`.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const propertySignature = <S extends Schema.All>(
  self: S
): propertySignature<S> =>
  new PropertySignatureWithFromImpl(
    new PropertySignatureDeclaration(self.ast, false, true, {}, undefined),
    self
  )

/**
 * Enhances a property signature with a default constructor value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const withConstructorDefault: {
  /**
   * Enhances a property signature with a default constructor value.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <Type>(defaultValue: () => Types.NoInfer<Type>): <
    TypeToken extends PropertySignature.Token,
    Key extends PropertyKey,
    EncodedToken extends PropertySignature.Token,
    Encoded,
    R
  >(
    self: PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, boolean, R>
  ) => PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, true, R>
  /**
   * Enhances a property signature with a default constructor value.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <
    TypeToken extends PropertySignature.Token,
    Type,
    Key extends PropertyKey,
    EncodedToken extends PropertySignature.Token,
    Encoded,
    R
  >(
    self: PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, boolean, R>,
    defaultValue: () => Types.NoInfer<Type>
  ): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, true, R>
} = dual(2, <
  TypeToken extends PropertySignature.Token,
  Type,
  Key extends PropertyKey,
  EncodedToken extends PropertySignature.Token,
  Encoded,
  R
>(
  self: PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, boolean, R>,
  defaultValue: () => Types.NoInfer<Type>
): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, true, R> => {
  const ast = self.ast
  switch (ast._tag) {
    case "PropertySignatureDeclaration":
      return makePropertySignature(
        new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, defaultValue)
      )
    case "PropertySignatureTransformation":
      return makePropertySignature(
        new PropertySignatureTransformation(
          ast.from,
          new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, ast.to.annotations, defaultValue),
          ast.decode,
          ast.encode
        )
      )
  }
})

const applyDefaultValue = <A>(o: option_.Option<A>, defaultValue: () => A) =>
  option_.match(o, {
    onNone: () => option_.some(defaultValue()),
    onSome: (value) => option_.some(value === undefined ? defaultValue() : value)
  })

const pruneUndefined = (ast: AST.AST): AST.AST | undefined =>
  AST.pruneUndefined(ast, pruneUndefined, (ast) => {
    const pruned = pruneUndefined(ast.to)
    if (pruned) {
      return new AST.Transformation(ast.from, pruned, ast.transformation)
    }
  })

/**
 * Enhances a property signature with a default decoding value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const withDecodingDefault: {
  /**
   * Enhances a property signature with a default decoding value.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <Type>(defaultValue: () => Types.NoInfer<Exclude<Type, undefined>>): <
    Key extends PropertyKey,
    Encoded,
    R
  >(
    self: PropertySignature<"?:", Type, Key, "?:", Encoded, false, R>
  ) => PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, false, R>
  /**
   * Enhances a property signature with a default decoding value.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <
    Type,
    Key extends PropertyKey,
    Encoded,
    R
  >(
    self: PropertySignature<"?:", Type, Key, "?:", Encoded, false, R>,
    defaultValue: () => Types.NoInfer<Exclude<Type, undefined>>
  ): PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, false, R>
} = dual(2, <
  Type,
  Key extends PropertyKey,
  Encoded,
  R
>(
  self: PropertySignature<"?:", Type, Key, "?:", Encoded, false, R>,
  defaultValue: () => Types.NoInfer<Exclude<Type, undefined>>
): PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, false, R> => {
  const ast = self.ast
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      const to = AST.typeAST(ast.type)
      return makePropertySignature(
        new PropertySignatureTransformation(
          new FromPropertySignature(ast.type, ast.isOptional, ast.isReadonly, ast.annotations),
          new ToPropertySignature(pruneUndefined(to) ?? to, false, true, {}, ast.defaultValue),
          (o) => applyDefaultValue(o, defaultValue),
          identity
        )
      )
    }
    case "PropertySignatureTransformation": {
      const to = ast.to.type
      return makePropertySignature(
        new PropertySignatureTransformation(
          ast.from,
          new ToPropertySignature(
            pruneUndefined(to) ?? to,
            false,
            ast.to.isReadonly,
            ast.to.annotations,
            ast.to.defaultValue
          ),
          (o) => applyDefaultValue(ast.decode(o), defaultValue),
          ast.encode
        )
      )
    }
  }
})

/**
 * Enhances a property signature with a default decoding value and a default constructor value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const withDefaults: {
  /**
   * Enhances a property signature with a default decoding value and a default constructor value.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <Type>(
    defaults: {
      constructor: () => Types.NoInfer<Exclude<Type, undefined>>
      decoding: () => Types.NoInfer<Exclude<Type, undefined>>
    }
  ): <
    Key extends PropertyKey,
    Encoded,
    R
  >(
    self: PropertySignature<"?:", Type, Key, "?:", Encoded, boolean, R>
  ) => PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, true, R>
  /**
   * Enhances a property signature with a default decoding value and a default constructor value.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <
    Type,
    Key extends PropertyKey,
    Encoded,
    R
  >(
    self: PropertySignature<"?:", Type, Key, "?:", Encoded, boolean, R>,
    defaults: {
      constructor: () => Types.NoInfer<Exclude<Type, undefined>>
      decoding: () => Types.NoInfer<Exclude<Type, undefined>>
    }
  ): PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, true, R>
} = dual(2, <
  Type,
  Key extends PropertyKey,
  Encoded,
  R
>(
  self: PropertySignature<"?:", Type, Key, "?:", Encoded, false, R>,
  defaults: {
    constructor: () => Types.NoInfer<Exclude<Type, undefined>>
    decoding: () => Types.NoInfer<Exclude<Type, undefined>>
  }
): PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, true, R> =>
  self.pipe(withDecodingDefault(defaults.decoding), withConstructorDefault(defaults.constructor)))

/**
 * Enhances a property signature by specifying a different key for it in the Encoded type.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const fromKey: {
  /**
   * Enhances a property signature by specifying a different key for it in the Encoded type.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <Key extends PropertyKey>(key: Key): <
    TypeToken extends PropertySignature.Token,
    Type,
    EncodedToken extends PropertySignature.Token,
    Encoded,
    HasDefault extends boolean,
    R
  >(
    self: PropertySignature<TypeToken, Type, PropertyKey, EncodedToken, Encoded, HasDefault, R>
  ) => PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>
  /**
   * Enhances a property signature by specifying a different key for it in the Encoded type.
   *
   * @category PropertySignature
   * @since 3.10.0
   */
  <
    Type,
    TypeToken extends PropertySignature.Token,
    Encoded,
    EncodedToken extends PropertySignature.Token,
    HasDefault extends boolean,
    R,
    Key extends PropertyKey
  >(
    self: PropertySignature<TypeToken, Type, PropertyKey, EncodedToken, Encoded, HasDefault, R>,
    key: Key
  ): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>
} = dual(2, <
  Type,
  TypeToken extends PropertySignature.Token,
  Encoded,
  EncodedToken extends PropertySignature.Token,
  HasDefault extends boolean,
  R,
  Key extends PropertyKey
>(
  self: PropertySignature<TypeToken, Type, PropertyKey, EncodedToken, Encoded, HasDefault, R>,
  key: Key
): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R> => {
  const ast = self.ast
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      return makePropertySignature(
        new PropertySignatureTransformation(
          new FromPropertySignature(
            ast.type,
            ast.isOptional,
            ast.isReadonly,
            ast.annotations,
            key
          ),
          new ToPropertySignature(AST.typeAST(ast.type), ast.isOptional, ast.isReadonly, {}, ast.defaultValue),
          identity,
          identity
        )
      )
    }
    case "PropertySignatureTransformation":
      return makePropertySignature(
        new PropertySignatureTransformation(
          new FromPropertySignature(
            ast.from.type,
            ast.from.isOptional,
            ast.from.isReadonly,
            ast.from.annotations,
            key
          ),
          ast.to,
          ast.decode,
          ast.encode
        )
      )
  }
})

/**
 * Converts an optional property to a required one through a transformation `Option -> Type`.
 *
 * - `decode`: `none` as argument means the value is missing in the input.
 * - `encode`: `none` as return value means the value will be missing in the output.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const optionalToRequired = <FA, FI, FR, TA, TI, TR>(
  from: Schema<FA, FI, FR>,
  to: Schema<TA, TI, TR>,
  options: {
    readonly decode: (o: option_.Option<FA>) => TI
    readonly encode: (ti: TI) => option_.Option<FA>
  }
): PropertySignature<":", TA, never, "?:", FI, false, FR | TR> =>
  makePropertySignature(
    new PropertySignatureTransformation(
      new FromPropertySignature(from.ast, true, true, {}, undefined),
      new ToPropertySignature(to.ast, false, true, {}, undefined),
      (o) => option_.some(options.decode(o)),
      option_.flatMap(options.encode)
    )
  )

/**
 * Converts an optional property to a required one through a transformation `Type -> Option`.
 *
 * - `decode`: `none` as return value means the value will be missing in the output.
 * - `encode`: `none` as argument means the value is missing in the input.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const requiredToOptional = <FA, FI, FR, TA, TI, TR>(
  from: Schema<FA, FI, FR>,
  to: Schema<TA, TI, TR>,
  options: {
    readonly decode: (fa: FA) => option_.Option<TI>
    readonly encode: (o: option_.Option<TI>) => FA
  }
): PropertySignature<"?:", TA, never, ":", FI, false, FR | TR> =>
  makePropertySignature(
    new PropertySignatureTransformation(
      new FromPropertySignature(from.ast, false, true, {}, undefined),
      new ToPropertySignature(to.ast, true, true, {}, undefined),
      option_.flatMap(options.decode),
      (o) => option_.some(options.encode(o))
    )
  )

/**
 * Converts an optional property to another optional property through a transformation `Option -> Option`.
 *
 * - `decode`:
 *   - `none` as argument means the value is missing in the input.
 *   - `none` as return value means the value will be missing in the output.
 * - `encode`:
 *   - `none` as argument means the value is missing in the input.
 *   - `none` as return value means the value will be missing in the output.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export const optionalToOptional = <FA, FI, FR, TA, TI, TR>(
  from: Schema<FA, FI, FR>,
  to: Schema<TA, TI, TR>,
  options: {
    readonly decode: (o: option_.Option<FA>) => option_.Option<TI>
    readonly encode: (o: option_.Option<TI>) => option_.Option<FA>
  }
): PropertySignature<"?:", TA, never, "?:", FI, false, FR | TR> =>
  makePropertySignature(
    new PropertySignatureTransformation(
      new FromPropertySignature(from.ast, true, true, {}, undefined),
      new ToPropertySignature(to.ast, true, true, {}, undefined),
      options.decode,
      options.encode
    )
  )

/**
 * @since 3.10.0
 */
export type OptionalOptions<A> = {
  readonly default?: never
  readonly as?: never
  readonly exact?: true
  readonly nullable?: true
} | {
  readonly default: LazyArg<A>
  readonly as?: never
  readonly exact?: true
  readonly nullable?: true
} | {
  readonly as: "Option"
  readonly default?: never
  readonly exact?: never
  readonly nullable?: never
  readonly onNoneEncoding?: LazyArg<option_.Option<undefined>>
} | {
  readonly as: "Option"
  readonly default?: never
  readonly exact?: never
  readonly nullable: true
  readonly onNoneEncoding?: LazyArg<option_.Option<null | undefined>>
} | {
  readonly as: "Option"
  readonly default?: never
  readonly exact: true
  readonly nullable?: never
  readonly onNoneEncoding?: never
} | {
  readonly as: "Option"
  readonly default?: never
  readonly exact: true
  readonly nullable: true
  readonly onNoneEncoding?: LazyArg<option_.Option<null>>
} | undefined

/**
 * @category api interface
 * @since 3.10.0
 */
export interface optional<S extends Schema.All> extends
  PropertySignature<
    "?:",
    Schema.Type<S> | undefined,
    never,
    "?:",
    Schema.Encoded<S> | undefined,
    false,
    Schema.Context<S>
  >
{
  readonly from: S
  annotations(annotations: PropertySignature.Annotations<Schema.Type<S> | undefined>): optional<S>
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface optionalWith<S extends Schema.All, Options> extends
  PropertySignature<
    Types.Has<Options, "as" | "default"> extends true ? ":" : "?:",
    | (Types.Has<Options, "as"> extends true ? option_.Option<Schema.Type<S>> : Schema.Type<S>)
    | (Types.Has<Options, "as" | "default" | "exact"> extends true ? never : undefined),
    never,
    "?:",
    | Schema.Encoded<S>
    | (Types.Has<Options, "nullable"> extends true ? null : never)
    | (Types.Has<Options, "exact"> extends true ? never : undefined),
    Types.Has<Options, "default">,
    Schema.Context<S>
  >
{
  readonly from: S
  annotations(
    annotations: PropertySignature.Annotations<
      | (Types.Has<Options, "as"> extends true ? option_.Option<Schema.Type<S>> : Schema.Type<S>)
      | (Types.Has<Options, "as" | "default" | "exact"> extends true ? never : undefined)
    >
  ): optionalWith<S, Options>
}

const optionalPropertySignatureAST = <A, I, R>(
  self: Schema<A, I, R>,
  options?: {
    readonly exact?: true
    readonly default?: () => A
    readonly nullable?: true
    readonly as?: "Option"
    readonly onNoneEncoding?: () => option_.Option<never>
  }
): PropertySignature.AST => {
  const isExact = options?.exact
  const defaultValue = options?.default
  const isNullable = options?.nullable
  const asOption = options?.as == "Option"
  const asOptionEncode = options?.onNoneEncoding ? option_.orElse(options.onNoneEncoding) : identity

  if (isExact) {
    if (defaultValue) {
      if (isNullable) {
        return withConstructorDefault(
          optionalToRequired(
            NullOr(self),
            typeSchema(self),
            {
              decode: option_.match({ onNone: defaultValue, onSome: (a) => a === null ? defaultValue() : a }),
              encode: option_.some
            }
          ),
          defaultValue
        ).ast
      } else {
        return withConstructorDefault(
          optionalToRequired(
            self,
            typeSchema(self),
            { decode: option_.match({ onNone: defaultValue, onSome: identity }), encode: option_.some }
          ),
          defaultValue
        ).ast
      }
    } else if (asOption) {
      const to = OptionFromSelf_(typeSchema(self))
      if (isNullable) {
        return optionalToRequired(
          NullOr(self),
          to,
          {
            decode: option_.filter(Predicate.isNotNull<A | null>),
            encode: asOptionEncode
          }
        ).ast
      } else {
        return optionalToRequired(
          self,
          to,
          { decode: identity, encode: identity }
        ).ast
      }
    } else {
      if (isNullable) {
        return optionalToOptional(
          NullOr(self),
          typeSchema(self),
          { decode: option_.filter(Predicate.isNotNull<A | null>), encode: identity }
        ).ast
      } else {
        return new PropertySignatureDeclaration(self.ast, true, true, {}, undefined)
      }
    }
  } else {
    if (defaultValue) {
      if (isNullable) {
        return withConstructorDefault(
          optionalToRequired(
            NullishOr(self),
            typeSchema(self),
            {
              decode: option_.match({ onNone: defaultValue, onSome: (a) => (a == null ? defaultValue() : a) }),
              encode: option_.some
            }
          ),
          defaultValue
        ).ast
      } else {
        return withConstructorDefault(
          optionalToRequired(
            UndefinedOr(self),
            typeSchema(self),
            {
              decode: option_.match({ onNone: defaultValue, onSome: (a) => (a === undefined ? defaultValue() : a) }),
              encode: option_.some
            }
          ),
          defaultValue
        ).ast
      }
    } else if (asOption) {
      const to = OptionFromSelf_(typeSchema(self))
      if (isNullable) {
        return optionalToRequired(
          NullishOr(self),
          to,
          {
            decode: option_.filter<A | null | undefined, A>((a): a is A => a != null),
            encode: asOptionEncode
          }
        ).ast
      } else {
        return optionalToRequired(
          UndefinedOr(self),
          to,
          {
            decode: option_.filter(Predicate.isNotUndefined<A | undefined>),
            encode: asOptionEncode
          }
        ).ast
      }
    } else {
      if (isNullable) {
        return optionalToOptional(
          NullishOr(self),
          UndefinedOr(typeSchema(self)),
          { decode: option_.filter(Predicate.isNotNull<A | null | undefined>), encode: identity }
        ).ast
      } else {
        return new PropertySignatureDeclaration(UndefinedOr(self).ast, true, true, {}, undefined)
      }
    }
  }
}

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export const optional = <S extends Schema.All>(self: S): optional<S> => {
  const ast = self.ast === AST.undefinedKeyword || self.ast === AST.neverKeyword
    ? AST.undefinedKeyword
    : UndefinedOr(self).ast
  return new PropertySignatureWithFromImpl(new PropertySignatureDeclaration(ast, true, true, {}, undefined), self)
}

/**
 * @category PropertySignature
 * @since 3.10.0
 */
export const optionalWith: {
  /**
   * @category PropertySignature
   * @since 3.10.0
   */
  <S extends Schema.All, Options extends OptionalOptions<Schema.Type<S>>>(options: Options): (self: S) => optionalWith<S, Options>
  /**
   * @category PropertySignature
   * @since 3.10.0
   */
  <S extends Schema.All, Options extends OptionalOptions<Schema.Type<S>>>(self: S, options: Options): optionalWith<S, Options>
} = dual((args) => isSchema(args[0]), (self, options) => {
  return new PropertySignatureWithFromImpl(optionalPropertySignatureAST(self, options), self)
})

/**
 * @since 3.10.0
 */
export declare namespace Struct {
  /**
   * Useful for creating a type that can be used to add custom constraints to the fields of a struct.
   *
   * ```ts
   * import { Schema } from "effect"
   *
   * const f = <Fields extends Record<"a" | "b", Schema.Struct.Field>>(
   *   schema: Schema.Struct<Fields>
   * ) => {
   *   return schema.omit("a")
   * }
   *
   * //      ┌─── Schema.Struct<{ b: typeof Schema.Number; }>
   * //      ▼
   * const result = f(Schema.Struct({ a: Schema.String, b: Schema.Number }))
   * ```
   * @since 3.13.11
   */
  export type Field =
    | Schema.All
    | PropertySignature.All

  /**
   * @since 3.10.0
   */
  export type Fields = { readonly [x: PropertyKey]: Field }

  type OptionalEncodedPropertySignature =
    | PropertySignature<PropertySignature.Token, any, PropertyKey, "?:", any, boolean, unknown>
    | PropertySignature<PropertySignature.Token, any, PropertyKey, "?:", never, boolean, unknown>
    | PropertySignature<PropertySignature.Token, never, PropertyKey, "?:", any, boolean, unknown>
    | PropertySignature<PropertySignature.Token, never, PropertyKey, "?:", never, boolean, unknown>

  type EncodedOptionalKeys<Fields extends Struct.Fields> = {
    [K in keyof Fields]: Fields[K] extends OptionalEncodedPropertySignature ? K
      : never
  }[keyof Fields]

  type OptionalTypePropertySignature =
    | PropertySignature<"?:", any, PropertyKey, PropertySignature.Token, any, boolean, unknown>
    | PropertySignature<"?:", any, PropertyKey, PropertySignature.Token, never, boolean, unknown>
    | PropertySignature<"?:", never, PropertyKey, PropertySignature.Token, any, boolean, unknown>
    | PropertySignature<"?:", never, PropertyKey, PropertySignature.Token, never, boolean, unknown>

  // type TypeOptionalKeys<Fields extends Struct.Fields> = {
  //   [K in keyof Fields]: Fields[K] extends OptionalTypePropertySignature ? K : never
  // }[keyof Fields]

  /**
   * @since 3.10.0
   */
  export type Type<F extends Fields> = Types.UnionToIntersection<
    {
      [K in keyof F]: F[K] extends OptionalTypePropertySignature ? { readonly [H in K]?: Schema.Type<F[H]> } :
        { readonly [h in K]: Schema.Type<F[h]> }
    }[keyof F]
  > extends infer Q ? Q : never

  type Key<F extends Fields, K extends keyof F> = [K] extends [never] ? never :
    F[K] extends PropertySignature.All<infer Key> ? [Key] extends [never] ? K : Key :
    K

  /**
   * @since 3.10.0
   */
  export type Encoded<F extends Fields> =
    & { readonly [K in Exclude<keyof F, EncodedOptionalKeys<F>> as Key<F, K>]: Schema.Encoded<F[K]> }
    & { readonly [K in EncodedOptionalKeys<F> as Key<F, K>]?: Schema.Encoded<F[K]> }

  /**
   * @since 3.10.0
   */
  export type Context<F extends Fields> = Schema.Context<F[keyof F]>

  type PropertySignatureWithDefault =
    | PropertySignature<PropertySignature.Token, any, PropertyKey, PropertySignature.Token, any, true, unknown>
    | PropertySignature<PropertySignature.Token, any, PropertyKey, PropertySignature.Token, never, true, unknown>
    | PropertySignature<PropertySignature.Token, never, PropertyKey, PropertySignature.Token, any, true, unknown>
    | PropertySignature<PropertySignature.Token, never, PropertyKey, PropertySignature.Token, never, true, unknown>

  /**
   * @since 3.10.0
   */
  export type Constructor<F extends Fields> = Types.UnionToIntersection<
    {
      [K in keyof F]: F[K] extends OptionalTypePropertySignature ? { readonly [H in K]?: Schema.Type<F[H]> } :
        F[K] extends PropertySignatureWithDefault ? { readonly [H in K]?: Schema.Type<F[H]> } :
        { readonly [h in K]: Schema.Type<F[h]> }
    }[keyof F]
  > extends infer Q ? Q : never
}

/**
 * @since 3.10.0
 */
export declare namespace IndexSignature {
  /**
   * @since 3.10.0
   */
  export type Record = { readonly key: Schema.All; readonly value: Schema.All }

  /**
   * @since 3.10.0
   */
  export type Records = ReadonlyArray<Record>

  /**
   * @since 3.10.0
   */
  export type NonEmptyRecords = array_.NonEmptyReadonlyArray<Record>

  type MergeTuple<T extends ReadonlyArray<unknown>> = T extends readonly [infer Head, ...infer Tail] ?
    Head & MergeTuple<Tail>
    : {}

  /**
   * @since 3.10.0
   */
  export type Type<Records extends IndexSignature.Records> = MergeTuple<
    {
      readonly [K in keyof Records]: {
        readonly [P in Schema.Type<Records[K]["key"]>]: Schema.Type<Records[K]["value"]>
      }
    }
  >

  /**
   * @since 3.10.0
   */
  export type Encoded<Records extends IndexSignature.Records> = MergeTuple<
    {
      readonly [K in keyof Records]: {
        readonly [P in Schema.Encoded<Records[K]["key"]>]: Schema.Encoded<Records[K]["value"]>
      }
    }
  >

  /**
   * @since 3.10.0
   */
  export type Context<Records extends IndexSignature.Records> = {
    [K in keyof Records]: Schema.Context<Records[K]["key"]> | Schema.Context<Records[K]["value"]>
  }[number]
}

/**
 * @since 3.10.0
 */
export declare namespace TypeLiteral {
  /**
   * @since 3.10.0
   */
  export type Type<Fields extends Struct.Fields, Records extends IndexSignature.Records> =
    & Struct.Type<Fields>
    & IndexSignature.Type<Records>

  /**
   * @since 3.10.0
   */
  export type Encoded<Fields extends Struct.Fields, Records extends IndexSignature.Records> =
    & Struct.Encoded<Fields>
    & IndexSignature.Encoded<Records>

  /**
   * @since 3.10.0
   */
  export type Constructor<Fields extends Struct.Fields, Records extends IndexSignature.Records> =
    & Struct.Constructor<Fields>
    & IndexSignature.Type<Records>
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface TypeLiteral<
  Fields extends Struct.Fields,
  Records extends IndexSignature.Records
> extends
  AnnotableClass<
    TypeLiteral<Fields, Records>,
    Simplify<TypeLiteral.Type<Fields, Records>>,
    Simplify<TypeLiteral.Encoded<Fields, Records>>,
    | Struct.Context<Fields>
    | IndexSignature.Context<Records>
  >
{
  readonly fields: Readonly<Fields>
  readonly records: Readonly<Records>
  annotations(
    annotations: Annotations.Schema<Simplify<TypeLiteral.Type<Fields, Records>>>
  ): TypeLiteral<Fields, Records>
  make(
    props: RequiredKeys<TypeLiteral.Constructor<Fields, Records>> extends never
      ? void | Simplify<TypeLiteral.Constructor<Fields, Records>>
      : Simplify<TypeLiteral.Constructor<Fields, Records>>,
    options?: MakeOptions
  ): Simplify<TypeLiteral.Type<Fields, Records>>
}

const preserveMissingMessageAnnotation = AST.pickAnnotations([AST.MissingMessageAnnotationId])

const getDefaultTypeLiteralAST = <
  Fields extends Struct.Fields,
  const Records extends IndexSignature.Records
>(fields: Fields, records: Records) => {
  const ownKeys = Reflect.ownKeys(fields)
  const pss: Array<AST.PropertySignature> = []
  if (ownKeys.length > 0) {
    const from: Array<AST.PropertySignature> = []
    const to: Array<AST.PropertySignature> = []
    const transformations: Array<AST.PropertySignatureTransformation> = []
    for (let i = 0; i < ownKeys.length; i++) {
      const key = ownKeys[i]
      const field = fields[key]
      if (isPropertySignature(field)) {
        const ast: PropertySignature.AST = field.ast
        switch (ast._tag) {
          case "PropertySignatureDeclaration": {
            const type = ast.type
            const isOptional = ast.isOptional
            const toAnnotations = ast.annotations
            from.push(new AST.PropertySignature(key, type, isOptional, true, preserveMissingMessageAnnotation(ast)))
            to.push(new AST.PropertySignature(key, AST.typeAST(type), isOptional, true, toAnnotations))
            pss.push(
              new AST.PropertySignature(key, type, isOptional, true, toAnnotations)
            )
            break
          }
          case "PropertySignatureTransformation": {
            const fromKey = ast.from.fromKey ?? key
            from.push(
              new AST.PropertySignature(fromKey, ast.from.type, ast.from.isOptional, true, ast.from.annotations)
            )
            to.push(
              new AST.PropertySignature(key, ast.to.type, ast.to.isOptional, true, ast.to.annotations)
            )
            transformations.push(new AST.PropertySignatureTransformation(fromKey, key, ast.decode, ast.encode))
            break
          }
        }
      } else {
        from.push(new AST.PropertySignature(key, field.ast, false, true))
        to.push(new AST.PropertySignature(key, AST.typeAST(field.ast), false, true))
        pss.push(new AST.PropertySignature(key, field.ast, false, true))
      }
    }
    if (array_.isNonEmptyReadonlyArray(transformations)) {
      const issFrom: Array<AST.IndexSignature> = []
      const issTo: Array<AST.IndexSignature> = []
      for (const r of records) {
        const { indexSignatures, propertySignatures } = AST.record(r.key.ast, r.value.ast)
        propertySignatures.forEach((ps) => {
          from.push(ps)
          to.push(
            new AST.PropertySignature(ps.name, AST.typeAST(ps.type), ps.isOptional, ps.isReadonly, ps.annotations)
          )
        })
        indexSignatures.forEach((is) => {
          issFrom.push(is)
          issTo.push(new AST.IndexSignature(is.parameter, AST.typeAST(is.type), is.isReadonly))
        })
      }
      return new AST.Transformation(
        new AST.TypeLiteral(from, issFrom, { [AST.AutoTitleAnnotationId]: "Struct (Encoded side)" }),
        new AST.TypeLiteral(to, issTo, { [AST.AutoTitleAnnotationId]: "Struct (Type side)" }),
        new AST.TypeLiteralTransformation(transformations)
      )
    }
  }
  const iss: Array<AST.IndexSignature> = []
  for (const r of records) {
    const { indexSignatures, propertySignatures } = AST.record(r.key.ast, r.value.ast)
    propertySignatures.forEach((ps) => pss.push(ps))
    indexSignatures.forEach((is) => iss.push(is))
  }
  return new AST.TypeLiteral(pss, iss)
}

const lazilyMergeDefaults = (
  fields: Struct.Fields,
  out: Record<PropertyKey, unknown>
): { [x: string | symbol]: unknown } => {
  const ownKeys = Reflect.ownKeys(fields)
  for (const key of ownKeys) {
    const field = fields[key]
    if (out[key] === undefined && isPropertySignature(field)) {
      const ast = field.ast
      const defaultValue = ast._tag === "PropertySignatureDeclaration" ? ast.defaultValue : ast.to.defaultValue
      if (defaultValue !== undefined) {
        out[key] = defaultValue()
      }
    }
  }
  return out
}

function makeTypeLiteralClass<Fields extends Struct.Fields, const Records extends IndexSignature.Records>(
  fields: Fields,
  records: Records,
  ast: AST.AST = getDefaultTypeLiteralAST(fields, records)
): TypeLiteral<Fields, Records> {
  return class TypeLiteralClass extends make<
    Simplify<TypeLiteral.Type<Fields, Records>>,
    Simplify<TypeLiteral.Encoded<Fields, Records>>,
    | Struct.Context<Fields>
    | IndexSignature.Context<Records>
  >(ast) {
    static override annotations(
      annotations: Annotations.Schema<Simplify<TypeLiteral.Type<Fields, Records>>>
    ): TypeLiteral<Fields, Records> {
      return makeTypeLiteralClass(this.fields, this.records, mergeSchemaAnnotations(this.ast, annotations))
    }

    static fields = { ...fields }

    static records = [...records] as Records

    static make = (
      props: Simplify<TypeLiteral.Constructor<Fields, Records>>,
      options?: MakeOptions
    ): Simplify<TypeLiteral.Type<Fields, Records>> => {
      const propsWithDefaults: any = lazilyMergeDefaults(fields, { ...props as any })
      return getDisableValidationMakeOption(options)
        ? propsWithDefaults
        : ParseResult.validateSync(this)(propsWithDefaults)
    }

    static pick(...keys: Array<keyof Fields>): Struct<Simplify<Pick<Fields, typeof keys[number]>>> {
      return Struct(struct_.pick(fields, ...keys) as any)
    }

    static omit(...keys: Array<keyof Fields>): Struct<Simplify<Omit<Fields, typeof keys[number]>>> {
      return Struct(struct_.omit(fields, ...keys) as any)
    }
  }
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Struct<Fields extends Struct.Fields> extends
  AnnotableClass<
    Struct<Fields>,
    Simplify<Struct.Type<Fields>>,
    Simplify<Struct.Encoded<Fields>>,
    Struct.Context<Fields>
  >
{
  readonly fields: Readonly<Fields>
  readonly records: readonly []
  make(
    props: RequiredKeys<Struct.Constructor<Fields>> extends never ? void | Simplify<Struct.Constructor<Fields>>
      : Simplify<Struct.Constructor<Fields>>,
    options?: MakeOptions
  ): Simplify<Struct.Type<Fields>>

  annotations(annotations: Annotations.Schema<Simplify<Struct.Type<Fields>>>): Struct<Fields>
  pick<Keys extends ReadonlyArray<keyof Fields>>(...keys: Keys): Struct<Simplify<Pick<Fields, Keys[number]>>>
  omit<Keys extends ReadonlyArray<keyof Fields>>(...keys: Keys): Struct<Simplify<Omit<Fields, Keys[number]>>>
}

/**
 * @category constructors
 * @since 3.10.0
 */
export function Struct<Fields extends Struct.Fields, const Records extends IndexSignature.NonEmptyRecords>(
  fields: Fields,
  ...records: Records
): TypeLiteral<Fields, Records>
export function Struct<Fields extends Struct.Fields>(fields: Fields): Struct<Fields>
export function Struct<Fields extends Struct.Fields, const Records extends IndexSignature.Records>(
  fields: Fields,
  ...records: Records
): TypeLiteral<Fields, Records> {
  return makeTypeLiteralClass(fields, records)
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface tag<Tag extends AST.LiteralValue> extends PropertySignature<":", Tag, never, ":", Tag, true, never> {}

/**
 * Returns a property signature that represents a tag.
 * A tag is a literal value that is used to distinguish between different types of objects.
 * The tag is optional when using the `make` method.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Schema } from "effect"
 *
 * const User = Schema.Struct({
 *   _tag: Schema.tag("User"),
 *   name: Schema.String,
 *   age: Schema.Number
 * })
 *
 * assert.deepStrictEqual(User.make({ name: "John", age: 44 }), { _tag: "User", name: "John", age: 44 })
 * ```
 *
 * @see {@link TaggedStruct}
 *
 * @since 3.10.0
 */
export const tag = <Tag extends AST.LiteralValue>(tag: Tag): tag<Tag> =>
  Literal(tag).pipe(propertySignature, withConstructorDefault(() => tag))

/**
 * @category api interface
 * @since 3.10.0
 */
export type TaggedStruct<Tag extends AST.LiteralValue, Fields extends Struct.Fields> = Struct<
  { _tag: tag<Tag> } & Fields
>

/**
 * A tagged struct is a struct that has a tag property that is used to distinguish between different types of objects.
 *
 * The tag is optional when using the `make` method.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Schema } from "effect"
 *
 * const User = Schema.TaggedStruct("User", {
 *   name: Schema.String,
 *   age: Schema.Number
 * })
 *
 * assert.deepStrictEqual(User.make({ name: "John", age: 44 }), { _tag: "User", name: "John", age: 44 })
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export const TaggedStruct = <Tag extends AST.LiteralValue, Fields extends Struct.Fields>(
  value: Tag,
  fields: Fields
): TaggedStruct<Tag, Fields> => Struct({ _tag: tag(value), ...fields })

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Record$<K extends Schema.All, V extends Schema.All> extends
  AnnotableClass<
    Record$<K, V>,
    { readonly [P in Schema.Type<K>]: Schema.Type<V> },
    { readonly [P in Schema.Encoded<K>]: Schema.Encoded<V> },
    | Schema.Context<K>
    | Schema.Context<V>
  >
{
  readonly fields: {}
  readonly records: readonly [{ readonly key: K; readonly value: V }]
  readonly key: K
  readonly value: V
  make(
    props: void | { readonly [P in Schema.Type<K>]: Schema.Type<V> },
    options?: MakeOptions
  ): { readonly [P in Schema.Type<K>]: Schema.Type<V> }
  annotations(annotations: Annotations.Schema<{ readonly [P in Schema.Type<K>]: Schema.Type<V> }>): Record$<K, V>
}

function makeRecordClass<K extends Schema.All, V extends Schema.All>(
  key: K,
  value: V,
  ast?: AST.AST
): Record$<K, V> {
  return class RecordClass extends makeTypeLiteralClass({}, [{ key, value }], ast) {
    static override annotations(
      annotations: Annotations.Schema<{ readonly [P in Schema.Type<K>]: Schema.Type<V> }>
    ): Record$<K, V> {
      return makeRecordClass(key, value, mergeSchemaAnnotations(this.ast, annotations))
    }

    static key = key

    static value = value
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const Record = <K extends Schema.All, V extends Schema.All>(
  options: { readonly key: K; readonly value: V }
): Record$<K, V> => makeRecordClass(options.key, options.value)

/**
 * @category struct transformations
 * @since 3.10.0
 */
export const pick = <A, I, Keys extends ReadonlyArray<keyof A & keyof I>>(...keys: Keys) =>
<R>(
  self: Schema<A, I, R>
): SchemaClass<Simplify<Pick<A, Keys[number]>>, Simplify<Pick<I, Keys[number]>>, R> => make(AST.pick(self.ast, keys))

/**
 * @category struct transformations
 * @since 3.10.0
 */
export const omit = <A, I, Keys extends ReadonlyArray<keyof A & keyof I>>(...keys: Keys) =>
<R>(
  self: Schema<A, I, R>
): SchemaClass<Simplify<Omit<A, Keys[number]>>, Simplify<Omit<I, Keys[number]>>, R> => make(AST.omit(self.ast, keys))

/**
 * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
 * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * // ---------------------------------------------
 * // use case: pull out a single field from a
 * // struct through a transformation
 * // ---------------------------------------------
 *
 * const mytable = Schema.Struct({
 *   column1: Schema.NumberFromString,
 *   column2: Schema.Number
 * })
 *
 * // const pullOutColumn: S.Schema<number, {
 * //     readonly column1: string;
 * // }, never>
 * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
 *
 * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
 * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
 * ```
 *
 * @category struct transformations
 * @since 3.10.0
 */
export const pluck: {
  /**
   * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
   * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
   *
   * @example
   * ```ts
   * import * as Schema from "effect/Schema"
   *
   * // ---------------------------------------------
   * // use case: pull out a single field from a
   * // struct through a transformation
   * // ---------------------------------------------
   *
   * const mytable = Schema.Struct({
   *   column1: Schema.NumberFromString,
   *   column2: Schema.Number
   * })
   *
   * // const pullOutColumn: S.Schema<number, {
   * //     readonly column1: string;
   * // }, never>
   * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
   *
   * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
   * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
   * ```
   *
   * @category struct transformations
   * @since 3.10.0
   */
  <A, I, K extends keyof A & keyof I>(key: K): <R>(schema: Schema<A, I, R>) => SchemaClass<A[K], Simplify<Pick<I, K>>, R>
  /**
   * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
   * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
   *
   * @example
   * ```ts
   * import * as Schema from "effect/Schema"
   *
   * // ---------------------------------------------
   * // use case: pull out a single field from a
   * // struct through a transformation
   * // ---------------------------------------------
   *
   * const mytable = Schema.Struct({
   *   column1: Schema.NumberFromString,
   *   column2: Schema.Number
   * })
   *
   * // const pullOutColumn: S.Schema<number, {
   * //     readonly column1: string;
   * // }, never>
   * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
   *
   * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
   * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
   * ```
   *
   * @category struct transformations
   * @since 3.10.0
   */
  <A, I, R, K extends keyof A & keyof I>(schema: Schema<A, I, R>, key: K): SchemaClass<A[K], Simplify<Pick<I, K>>, R>
} = dual(
  2,
  <A, I, R, K extends keyof A & keyof I>(
    schema: Schema<A, I, R>,
    key: K
  ): Schema<A[K], Pick<I, K>, R> => {
    const ps = AST.getPropertyKeyIndexedAccess(AST.typeAST(schema.ast), key)
    const value = make</**
     * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
     * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
     *
     * @example
     * ```ts
     * import * as Schema from "effect/Schema"
     *
     * // ---------------------------------------------
     * // use case: pull out a single field from a
     * // struct through a transformation
     * // ---------------------------------------------
     *
     * const mytable = Schema.Struct({
     *   column1: Schema.NumberFromString,
     *   column2: Schema.Number
     * })
     *
     * // const pullOutColumn: S.Schema<number, {
     * //     readonly column1: string;
     * // }, never>
     * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
     *
     * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
     * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
     * ```
     *
     * @category struct transformations
     * @since 3.10.0
     */
    A[K], /**
     * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
     * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
     *
     * @example
     * ```ts
     * import * as Schema from "effect/Schema"
     *
     * // ---------------------------------------------
     * // use case: pull out a single field from a
     * // struct through a transformation
     * // ---------------------------------------------
     *
     * const mytable = Schema.Struct({
     *   column1: Schema.NumberFromString,
     *   column2: Schema.Number
     * })
     *
     * // const pullOutColumn: S.Schema<number, {
     * //     readonly column1: string;
     * // }, never>
     * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
     *
     * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
     * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
     * ```
     *
     * @category struct transformations
     * @since 3.10.0
     */
    A[K], /**
     * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
     * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
     *
     * @example
     * ```ts
     * import * as Schema from "effect/Schema"
     *
     * // ---------------------------------------------
     * // use case: pull out a single field from a
     * // struct through a transformation
     * // ---------------------------------------------
     *
     * const mytable = Schema.Struct({
     *   column1: Schema.NumberFromString,
     *   column2: Schema.Number
     * })
     *
     * // const pullOutColumn: S.Schema<number, {
     * //     readonly column1: string;
     * // }, never>
     * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
     *
     * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
     * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
     * ```
     *
     * @category struct transformations
     * @since 3.10.0
     */
    R>(ps.isOptional ? AST.orUndefined(ps.type) : ps.type)
    const out = transform(
      schema.pipe(pick(key)),
      value,
      {
        strict: true,
        decode: (i) => i[key],
        encode: (a) => ps.isOptional && a === undefined ? {} : { [key]: a } as any
      }
    )
    return out
  }
)

/**
 * @category branding
 * @since 3.10.0
 */
export interface BrandSchema<A extends Brand<any>, I = A, R = never>
  extends AnnotableClass<BrandSchema<A, I, R>, A, I, R>
{
  make(a: Brand.Unbranded<A>, options?: MakeOptions): A
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface brand<S extends Schema.Any, B extends string | symbol>
  extends BrandSchema<Schema.Type<S> & Brand<B>, Schema.Encoded<S>, Schema.Context<S>>
{
  readonly from: S
  annotations(annotations: Annotations.Schema<Schema.Type<S> & Brand<B>>): brand<S, B>
}

function makeBrandClass<S extends Schema.Any, B extends string | symbol>(
  from: S,
  ast: AST.AST
): brand<S, B> {
  return class BrandClass extends make<Schema.Type<S> & Brand<B>, Schema.Encoded<S>, Schema.Context<S>>(ast) {
    static override annotations(annotations: Annotations.Schema<Schema.Type<S> & Brand<B>>): brand<S, B> {
      return makeBrandClass(this.from, mergeSchemaAnnotations(this.ast, annotations))
    }

    static make = (a: Brand.Unbranded<Schema.Type<S> & Brand<B>>, options?: MakeOptions): Schema.Type<S> & Brand<B> => {
      return getDisableValidationMakeOption(options) ? a : ParseResult.validateSync(this)(a)
    }

    static from = from
  }
}

/**
 * Returns a nominal branded schema by applying a brand to a given schema.
 *
 * ```
 * Schema<A> + B -> Schema<A & Brand<B>>
 * ```
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * const Int = Schema.Number.pipe(Schema.int(), Schema.brand("Int"))
 * type Int = Schema.Schema.Type<typeof Int> // number & Brand<"Int">
 * ```
 *
 * @category branding
 * @since 3.10.0
 */
export const brand = <S extends Schema.Any, B extends string | symbol>(
  brand: B,
  annotations?: Annotations.Schema<Schema.Type<S> & Brand<B>>
) =>
(self: S): brand<S, B> => {
  const annotation: AST.BrandAnnotation = option_.match(AST.getBrandAnnotation(self.ast), {
    onNone: () => [brand],
    onSome: (brands) => [...brands, brand]
  })
  const ast = AST.annotations(
    self.ast,
    toASTAnnotations({
      [AST.BrandAnnotationId]: annotation,
      ...annotations
    })
  )
  return makeBrandClass(self, ast)
}

/**
 * @category combinators
 * @since 3.10.0
 */
export const partial = <A, I, R>(
  self: Schema<A, I, R>
): SchemaClass<{ [K in keyof A]?: A[K] | undefined }, { [K in keyof I]?: I[K] | undefined }, R> =>
  make(AST.partial(self.ast))

/**
 * @category combinators
 * @since 3.10.0
 */
export const partialWith: {
  /**
   * @category combinators
   * @since 3.10.0
   */
  <const Options extends { readonly exact: true }>(options: Options): <A, I, R>(
    self: Schema<A, I, R>
  ) => SchemaClass<{ [K in keyof A]?: A[K] }, { [K in keyof I]?: I[K] }, R>
  /**
   * @category combinators
   * @since 3.10.0
   */
  <A, I, R, const Options extends { readonly exact: true } | undefined>(self: Schema<A, I, R>, options: Options): SchemaClass<{ [K in keyof A]?: A[K] }, { [K in keyof I]?: I[K] }, R>
} = dual((args) => isSchema(args[0]), <A, I, R>(
  self: Schema<A, I, R>,
  options: { readonly exact: true }
): SchemaClass<Partial<A>, Partial<I>, R> => make(AST.partial(self.ast, options)))

/**
 * @category combinators
 * @since 3.10.0
 */
export const required = <A, I, R>(
  self: Schema<A, I, R>
): SchemaClass<{ [K in keyof A]-?: A[K] }, { [K in keyof I]-?: I[K] }, R> => make(AST.required(self.ast))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface mutable<S extends Schema.Any> extends
  AnnotableClass<
    mutable<S>,
    SimplifyMutable<Schema.Type<S>>,
    SimplifyMutable<Schema.Encoded<S>>,
    Schema.Context<S>
  >
{}

/**
 * Creates a new schema with shallow mutability applied to its properties.
 *
 * @category combinators
 * @since 3.10.0
 */
export const mutable = <S extends Schema.Any>(schema: S): mutable<S> => make(AST.mutable(schema.ast))

const intersectTypeLiterals = (
  x: AST.AST,
  y: AST.AST,
  path: ReadonlyArray<PropertyKey>
): AST.TypeLiteral => {
  if (AST.isTypeLiteral(x) && AST.isTypeLiteral(y)) {
    const propertySignatures = [...x.propertySignatures]
    for (const ps of y.propertySignatures) {
      const name = ps.name
      const i = propertySignatures.findIndex((ps) => ps.name === name)
      if (i === -1) {
        propertySignatures.push(ps)
      } else {
        const { isOptional, type } = propertySignatures[i]
        propertySignatures[i] = new AST.PropertySignature(
          name,
          extendAST(type, ps.type, path.concat(name)),
          isOptional,
          true
        )
      }
    }
    return new AST.TypeLiteral(
      propertySignatures,
      x.indexSignatures.concat(y.indexSignatures)
    )
  }
  throw new Error(errors_.getSchemaExtendErrorMessage(x, y, path))
}

const preserveRefinementAnnotations = AST.omitAnnotations([AST.IdentifierAnnotationId])

const addRefinementToMembers = (refinement: AST.Refinement, asts: ReadonlyArray<AST.AST>): Array<AST.Refinement> =>
  asts.map((ast) => new AST.Refinement(ast, refinement.filter, preserveRefinementAnnotations(refinement)))

const extendAST = (x: AST.AST, y: AST.AST, path: ReadonlyArray<PropertyKey>): AST.AST =>
  AST.Union.make(intersectUnionMembers([x], [y], path))

const getTypes = (ast: AST.AST): ReadonlyArray<AST.AST> => AST.isUnion(ast) ? ast.types : [ast]

const intersectUnionMembers = (
  xs: ReadonlyArray<AST.AST>,
  ys: ReadonlyArray<AST.AST>,
  path: ReadonlyArray<PropertyKey>
): Array<AST.AST> =>
  array_.flatMap(xs, (x) =>
    array_.flatMap(ys, (y) => {
      switch (y._tag) {
        case "Literal": {
          if (
            (Predicate.isString(y.literal) && AST.isStringKeyword(x) ||
              (Predicate.isNumber(y.literal) && AST.isNumberKeyword(x)) ||
              (Predicate.isBoolean(y.literal) && AST.isBooleanKeyword(x)))
          ) {
            return [y]
          }
          break
        }
        case "StringKeyword": {
          if (y === AST.stringKeyword) {
            if (AST.isStringKeyword(x) || (AST.isLiteral(x) && Predicate.isString(x.literal))) {
              return [x]
            } else if (AST.isRefinement(x)) {
              return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path))
            }
          } else if (x === AST.stringKeyword) {
            return [y]
          }
          break
        }
        case "NumberKeyword": {
          if (y === AST.numberKeyword) {
            if (AST.isNumberKeyword(x) || (AST.isLiteral(x) && Predicate.isNumber(x.literal))) {
              return [x]
            } else if (AST.isRefinement(x)) {
              return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path))
            }
          } else if (x === AST.numberKeyword) {
            return [y]
          }
          break
        }
        case "BooleanKeyword": {
          if (y === AST.booleanKeyword) {
            if (AST.isBooleanKeyword(x) || (AST.isLiteral(x) && Predicate.isBoolean(x.literal))) {
              return [x]
            } else if (AST.isRefinement(x)) {
              return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path))
            }
          } else if (x === AST.booleanKeyword) {
            return [y]
          }
          break
        }
        case "Union":
          return intersectUnionMembers(getTypes(x), y.types, path)
        case "Suspend":
          return [new AST.Suspend(() => extendAST(x, y.f(), path))]
        case "Refinement":
          return addRefinementToMembers(y, intersectUnionMembers(getTypes(x), getTypes(y.from), path))
        case "TypeLiteral": {
          switch (x._tag) {
            case "Union":
              return intersectUnionMembers(x.types, [y], path)
            case "Suspend":
              return [new AST.Suspend(() => extendAST(x.f(), y, path))]
            case "Refinement":
              return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path))
            case "TypeLiteral":
              return [intersectTypeLiterals(x, y, path)]
            case "Transformation": {
              const transformation = x.transformation
              const from = intersectTypeLiterals(x.from, y, path)
              const to = intersectTypeLiterals(x.to, AST.typeAST(y), path)
              switch (transformation._tag) {
                case "TypeLiteralTransformation":
                  return [
                    new AST.Transformation(
                      from,
                      to,
                      new AST.TypeLiteralTransformation(transformation.propertySignatureTransformations)
                    )
                  ]
                case "ComposeTransformation":
                  return [new AST.Transformation(from, to, AST.composeTransformation)]
                case "FinalTransformation":
                  return [
                    new AST.Transformation(
                      from,
                      to,
                      new AST.FinalTransformation(
                        (fromA, options, ast, fromI) =>
                          ParseResult.map(
                            transformation.decode(fromA, options, ast, fromI),
                            (partial) => ({ ...fromA, ...partial })
                          ),
                        (toI, options, ast, toA) =>
                          ParseResult.map(
                            transformation.encode(toI, options, ast, toA),
                            (partial) => ({ ...toI, ...partial })
                          )
                      )
                    )
                  ]
              }
            }
          }
          break
        }
        case "Transformation": {
          if (AST.isTransformation(x)) {
            if (
              AST.isTypeLiteralTransformation(y.transformation) && AST.isTypeLiteralTransformation(x.transformation)
            ) {
              return [
                new AST.Transformation(
                  intersectTypeLiterals(x.from, y.from, path),
                  intersectTypeLiterals(x.to, y.to, path),
                  new AST.TypeLiteralTransformation(
                    y.transformation.propertySignatureTransformations.concat(
                      x.transformation.propertySignatureTransformations
                    )
                  )
                )
              ]
            }
          } else {
            return intersectUnionMembers([y], [x], path)
          }
          break
        }
      }
      throw new Error(errors_.getSchemaExtendErrorMessage(x, y, path))
    }))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface extend<Self extends Schema.Any, That extends Schema.Any> extends
  AnnotableClass<
    extend<Self, That>,
    Schema.Type<Self> & Schema.Type<That>,
    Schema.Encoded<Self> & Schema.Encoded<That>,
    Schema.Context<Self> | Schema.Context<That>
  >
{}

/**
 * Extends a schema with another schema.
 *
 * Not all extensions are supported, and their support depends on the nature of
 * the involved schemas.
 *
 * Possible extensions include:
 * - `Schema.String` with another `Schema.String` refinement or a string literal
 * - `Schema.Number` with another `Schema.Number` refinement or a number literal
 * - `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean
 *   literal
 * - A struct with another struct where overlapping fields support extension
 * - A struct with in index signature
 * - A struct with a union of supported schemas
 * - A refinement of a struct with a supported schema
 * - A suspend of a struct with a supported schema
 * - A transformation between structs where the “from” and “to” sides have no
 *   overlapping fields with the target struct
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * const schema = Schema.Struct({
 *   a: Schema.String,
 *   b: Schema.String
 * })
 *
 * // const extended: Schema<
 * //   {
 * //     readonly a: string
 * //     readonly b: string
 * //   } & {
 * //     readonly c: string
 * //   } & {
 * //     readonly [x: string]: string
 * //   }
 * // >
 * const extended = Schema.asSchema(schema.pipe(
 *   Schema.extend(Schema.Struct({ c: Schema.String })), // <= you can add more fields
 *   Schema.extend(Schema.Record({ key: Schema.String, value: Schema.String })) // <= you can add index signatures
 * ))
 * ```
 *
 * @category combinators
 * @since 3.10.0
 */
export const extend: {
  /**
   * Extends a schema with another schema.
   *
   * Not all extensions are supported, and their support depends on the nature of
   * the involved schemas.
   *
   * Possible extensions include:
   * - `Schema.String` with another `Schema.String` refinement or a string literal
   * - `Schema.Number` with another `Schema.Number` refinement or a number literal
   * - `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean
   *   literal
   * - A struct with another struct where overlapping fields support extension
   * - A struct with in index signature
   * - A struct with a union of supported schemas
   * - A refinement of a struct with a supported schema
   * - A suspend of a struct with a supported schema
   * - A transformation between structs where the “from” and “to” sides have no
   *   overlapping fields with the target struct
   *
   * @example
   * ```ts
   * import * as Schema from "effect/Schema"
   *
   * const schema = Schema.Struct({
   *   a: Schema.String,
   *   b: Schema.String
   * })
   *
   * // const extended: Schema<
   * //   {
   * //     readonly a: string
   * //     readonly b: string
   * //   } & {
   * //     readonly c: string
   * //   } & {
   * //     readonly [x: string]: string
   * //   }
   * // >
   * const extended = Schema.asSchema(schema.pipe(
   *   Schema.extend(Schema.Struct({ c: Schema.String })), // <= you can add more fields
   *   Schema.extend(Schema.Record({ key: Schema.String, value: Schema.String })) // <= you can add index signatures
   * ))
   * ```
   *
   * @category combinators
   * @since 3.10.0
   */
  <That extends Schema.Any>(that: That): <Self extends Schema.Any>(self: Self) => extend<Self, That>
  /**
   * Extends a schema with another schema.
   *
   * Not all extensions are supported, and their support depends on the nature of
   * the involved schemas.
   *
   * Possible extensions include:
   * - `Schema.String` with another `Schema.String` refinement or a string literal
   * - `Schema.Number` with another `Schema.Number` refinement or a number literal
   * - `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean
   *   literal
   * - A struct with another struct where overlapping fields support extension
   * - A struct with in index signature
   * - A struct with a union of supported schemas
   * - A refinement of a struct with a supported schema
   * - A suspend of a struct with a supported schema
   * - A transformation between structs where the “from” and “to” sides have no
   *   overlapping fields with the target struct
   *
   * @example
   * ```ts
   * import * as Schema from "effect/Schema"
   *
   * const schema = Schema.Struct({
   *   a: Schema.String,
   *   b: Schema.String
   * })
   *
   * // const extended: Schema<
   * //   {
   * //     readonly a: string
   * //     readonly b: string
   * //   } & {
   * //     readonly c: string
   * //   } & {
   * //     readonly [x: string]: string
   * //   }
   * // >
   * const extended = Schema.asSchema(schema.pipe(
   *   Schema.extend(Schema.Struct({ c: Schema.String })), // <= you can add more fields
   *   Schema.extend(Schema.Record({ key: Schema.String, value: Schema.String })) // <= you can add index signatures
   * ))
   * ```
   *
   * @category combinators
   * @since 3.10.0
   */
  <Self extends Schema.Any, That extends Schema.Any>(self: Self, that: That): extend<Self, That>
} = dual(
  2,
  <Self extends Schema.Any, That extends Schema.Any>(self: Self, that: That) => make(extendAST(self.ast, that.ast, []))
)

/**
 * @category combinators
 * @since 3.10.0
 */
export const compose: {
  /**
   * @category combinators
   * @since 3.10.0
   */
  <To extends Schema.Any, From extends Schema.Any, C extends Schema.Type<From>>(to: To & Schema<Schema.Type<To>, C, Schema.Context<To>>): (from: From) => transform<From, To>
  /**
   * @category combinators
   * @since 3.10.0
   */
  <To extends Schema.Any>(to: To): <From extends Schema.Any, B extends Schema.Encoded<To>>(
    from: From & Schema<B, Schema.Encoded<From>, Schema.Context<From>>
  ) => transform<From, To>
  /**
   * @category combinators
   * @since 3.10.0
   */
  <To extends Schema.Any>(to: To, options?: { readonly strict: true }): <From extends Schema.Any>(
    from: From & Schema<Schema.Encoded<To>, Schema.Encoded<From>, Schema.Context<From>>
  ) => transform<From, To>
  /**
   * @category combinators
   * @since 3.10.0
   */
  <To extends Schema.Any>(to: To, options: { readonly strict: false }): <From extends Schema.Any>(from: From) => transform<From, To>

  /**
   * @category combinators
   * @since 3.10.0
   */
  <From extends Schema.Any, To extends Schema.Any, C extends Schema.Type<From>>(from: From, to: To & Schema<Schema.Type<To>, C, Schema.Context<To>>): transform<From, To>
  /**
   * @category combinators
   * @since 3.10.0
   */
  <From extends Schema.Any, B extends Schema.Encoded<To>, To extends Schema.Any>(from: From & Schema<B, Schema.Encoded<From>, Schema.Context<From>>, to: To): transform<From, To>
  /**
   * @category combinators
   * @since 3.10.0
   */
  <From extends Schema.Any, To extends Schema.Any>(
    from: From & Schema<Schema.Encoded<To>, Schema.Encoded<From>, Schema.Context<From>>,
    to: To,
    options?: { readonly strict: true }
  ): transform<From, To>
  /**
   * @category combinators
   * @since 3.10.0
   */
  <From extends Schema.Any, To extends Schema.Any>(from: From, to: To, options: { readonly strict: false }): transform<From, To>
} = dual(
  (args) => isSchema(args[1]),
  <B, A, R1, D, C, R2>(from: Schema<B, A, R1>, to: Schema<D, C, R2>): SchemaClass<D, A, R1 | R2> =>
    makeTransformationClass(from, to, AST.compose(from.ast, to.ast))
)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface suspend<A, I, R> extends AnnotableClass<suspend<A, I, R>, A, I, R> {}

/**
 * @category constructors
 * @since 3.10.0
 */
export const suspend = <A, I, R>(f: () => Schema<A, I, R>): suspend<A, I, R> => make(new AST.Suspend(() => f().ast))

/**
 * @since 3.10.0
 * @category symbol
 */
export const RefineSchemaId: unique symbol = Symbol.for("effect/SchemaId/Refine")

/**
 * @since 3.10.0
 * @category symbol
 */
export type RefineSchemaId = typeof RefineSchemaId

/**
 * @category api interface
 * @since 3.10.0
 */
export interface refine<A, From extends Schema.Any>
  extends AnnotableClass<refine<A, From>, A, Schema.Encoded<From>, Schema.Context<From>>
{
  /** The following is required for {@link HasFields} to work */
  readonly [RefineSchemaId]: From
  readonly from: From
  readonly filter: (
    a: Schema.Type<From>,
    options: ParseOptions,
    self: AST.Refinement
  ) => option_.Option<ParseResult.ParseIssue>
  make(a: Schema.Type<From>, options?: MakeOptions): A
}

function makeRefineClass<From extends Schema.Any, A>(
  from: From,
  filter: (a: Schema.Type<From>, options: ParseOptions, self: AST.Refinement) => option_.Option<ParseResult.ParseIssue>,
  ast: AST.AST
): refine<A, From> {
  return class RefineClass extends make<A, Schema.Encoded<From>, Schema.Context<From>>(ast) {
    static override annotations(annotations: Annotations.Schema<A>): refine<A, From> {
      return makeRefineClass(this.from, this.filter, mergeSchemaAnnotations(this.ast, annotations))
    }

    static [RefineSchemaId] = from

    static from = from

    static filter = filter

    static make = (a: Schema.Type<From>, options?: MakeOptions): A => {
      return getDisableValidationMakeOption(options) ? a : ParseResult.validateSync(this)(a)
    }
  }
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface filter<From extends Schema.Any> extends refine<Schema.Type<From>, From> {}

const fromFilterPredicateReturnTypeItem = (
  item: FilterOutput,
  ast: AST.Refinement | AST.Transformation,
  input: unknown
): option_.Option<ParseResult.ParseIssue> => {
  if (Predicate.isBoolean(item)) {
    return item
      ? option_.none()
      : option_.some(new ParseResult.Type(ast, input))
  }
  if (Predicate.isString(item)) {
    return option_.some(new ParseResult.Type(ast, input, item))
  }
  if (item !== undefined) {
    if ("_tag" in item) {
      return option_.some(item)
    }
    const issue = new ParseResult.Type(ast, input, item.message)
    return option_.some(
      array_.isNonEmptyReadonlyArray(item.path) ? new ParseResult.Pointer(item.path, input, issue) : issue
    )
  }
  return option_.none()
}

const toFilterParseIssue = (
  out: FilterReturnType,
  ast: AST.Refinement | AST.Transformation,
  input: unknown
): option_.Option<ParseResult.ParseIssue> => {
  if (util_.isSingle(out)) {
    return fromFilterPredicateReturnTypeItem(out, ast, input)
  }
  if (array_.isNonEmptyReadonlyArray(out)) {
    const issues = array_.filterMap(out, (issue) => fromFilterPredicateReturnTypeItem(issue, ast, input))
    if (array_.isNonEmptyReadonlyArray(issues)) {
      return option_.some(issues.length === 1 ? issues[0] : new ParseResult.Composite(ast, input, issues))
    }
  }
  return option_.none()
}

/**
 * @category filtering
 * @since 3.10.0
 */
export interface FilterIssue {
  readonly path: ReadonlyArray<PropertyKey>
  readonly message: string
}

/**
 * @category filtering
 * @since 3.10.0
 */
export type FilterOutput = undefined | boolean | string | ParseResult.ParseIssue | FilterIssue

type FilterReturnType = FilterOutput | ReadonlyArray<FilterOutput>

/**
 * @category filtering
 * @since 3.10.0
 */
export function filter<C extends A, B extends A, A = C>(
  refinement: (a: A, options: ParseOptions, self: AST.Refinement) => a is B,
  annotations?: Annotations.Filter<C & B, C>
): <I, R>(self: Schema<C, I, R>) => refine<C & B, Schema<A, I, R>>
export function filter<A, B extends A>(
  refinement: (a: A, options: ParseOptions, self: AST.Refinement) => a is B,
  annotations?: Annotations.Filter<B, A>
): <I, R>(self: Schema<A, I, R>) => refine<B, Schema<A, I, R>>
export function filter<S extends Schema.Any>(
  predicate: (
    a: Types.NoInfer<Schema.Type<S>>,
    options: ParseOptions,
    self: AST.Refinement
  ) => FilterReturnType,
  annotations?: Annotations.Filter<Types.NoInfer<Schema.Type<S>>>
): (self: S) => filter<S>
export function filter<A>(
  predicate: (
    a: A,
    options: ParseOptions,
    self: AST.Refinement
  ) => FilterReturnType,
  annotations?: Annotations.Filter<A>
): <I, R>(self: Schema<A, I, R>) => refine<A, Schema<A, I, R>> {
  return <I, R>(self: Schema<A, I, R>) => {
    function filter(input: A, options: AST.ParseOptions, ast: AST.Refinement) {
      return toFilterParseIssue(predicate(input, options, ast), ast, input)
    }
    const ast = new AST.Refinement(
      self.ast,
      filter,
      toASTAnnotations(annotations)
    )
    return makeRefineClass(self, filter, ast)
  }
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface filterEffect<S extends Schema.Any, FD = never>
  extends transformOrFail<S, SchemaClass<Schema.Type<S>>, FD>
{}

/**
 * @category transformations
 * @since 3.10.0
 */
export const filterEffect: {
  /**
   * @category transformations
   * @since 3.10.0
   */
  <S extends Schema.Any, FD>(
    f: (
      a: Types.NoInfer<Schema.Type<S>>,
      options: ParseOptions,
      self: AST.Transformation
    ) => Effect.Effect<FilterReturnType, never, FD>
  ): (self: S) => filterEffect<S, FD>
  /**
   * @category transformations
   * @since 3.10.0
   */
  <S extends Schema.Any, RD>(
    self: S,
    f: (
      a: Types.NoInfer<Schema.Type<S>>,
      options: ParseOptions,
      self: AST.Transformation
    ) => Effect.Effect<FilterReturnType, never, RD>
  ): filterEffect<S, RD>
} = dual(2, <S extends Schema.Any, FD>(
  self: S,
  f: (
    a: Types.NoInfer<Schema.Type<S>>,
    options: ParseOptions,
    self: AST.Transformation
  ) => Effect.Effect<FilterReturnType, never, FD>
): filterEffect<S, FD> =>
  transformOrFail(
    self,
    typeSchema(self),
    {
      strict: true,
      decode: (i, options, ast) =>
        ParseResult.flatMap(
          f(i, options, ast),
          (filterReturnType) =>
            option_.match(toFilterParseIssue(filterReturnType, ast, i), {
              onNone: () => ParseResult.succeed(i),
              onSome: ParseResult.fail
            })
        ),
      encode: (a) => ParseResult.succeed(a)
    }
  ))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface transformOrFail<From extends Schema.All, To extends Schema.All, R = never> extends
  AnnotableClass<
    transformOrFail<From, To, R>,
    Schema.Type<To>,
    Schema.Encoded<From>,
    Schema.Context<From> | Schema.Context<To> | R
  >
{
  readonly from: From
  readonly to: To
}

function makeTransformationClass<From extends Schema.Any, To extends Schema.Any, R>(
  from: From,
  to: To,
  ast: AST.AST
): transformOrFail<From, To, R> {
  return class TransformationClass
    extends make<Schema.Type<To>, Schema.Encoded<From>, Schema.Context<From> | Schema.Context<To> | R>(ast)
  {
    static override annotations(annotations: Annotations.Schema<Schema.Type<To>>) {
      return makeTransformationClass<From, To, R>(
        this.from,
        this.to,
        mergeSchemaAnnotations(this.ast, annotations)
      )
    }

    static from = from

    static to = to
  }
}

/**
 * Create a new `Schema` by transforming the input and output of an existing `Schema`
 * using the provided decoding functions.
 *
 * @category transformations
 * @since 3.10.0
 */
export const transformOrFail: {
  /**
   * Create a new `Schema` by transforming the input and output of an existing `Schema`
   * using the provided decoding functions.
   *
   * @category transformations
   * @since 3.10.0
   */
  <To extends Schema.Any, From extends Schema.Any, RD, RE>(
    to: To,
    options: {
      readonly decode: (
        fromA: Schema.Type<From>,
        options: ParseOptions,
        ast: AST.Transformation,
        fromI: Schema.Encoded<From>
      ) => Effect.Effect<Schema.Encoded<To>, ParseResult.ParseIssue, RD>
      readonly encode: (
        toI: Schema.Encoded<To>,
        options: ParseOptions,
        ast: AST.Transformation,
        toA: Schema.Type<To>
      ) => Effect.Effect<Schema.Type<From>, ParseResult.ParseIssue, RE>
      readonly strict?: true
    } | {
      readonly decode: (
        fromA: Schema.Type<From>,
        options: ParseOptions,
        ast: AST.Transformation,
        fromI: Schema.Encoded<From>
      ) => Effect.Effect<unknown, ParseResult.ParseIssue, RD>
      readonly encode: (
        toI: Schema.Encoded<To>,
        options: ParseOptions,
        ast: AST.Transformation,
        toA: Schema.Type<To>
      ) => Effect.Effect<unknown, ParseResult.ParseIssue, RE>
      readonly strict: false
    }
  ): (from: From) => transformOrFail<From, To, RD | RE>
  /**
   * Create a new `Schema` by transforming the input and output of an existing `Schema`
   * using the provided decoding functions.
   *
   * @category transformations
   * @since 3.10.0
   */
  <To extends Schema.Any, From extends Schema.Any, RD, RE>(
    from: From,
    to: To,
    options: {
      readonly decode: (
        fromA: Schema.Type<From>,
        options: ParseOptions,
        ast: AST.Transformation,
        fromI: Schema.Encoded<From>
      ) => Effect.Effect<Schema.Encoded<To>, ParseResult.ParseIssue, RD>
      readonly encode: (
        toI: Schema.Encoded<To>,
        options: ParseOptions,
        ast: AST.Transformation,
        toA: Schema.Type<To>
      ) => Effect.Effect<Schema.Type<From>, ParseResult.ParseIssue, RE>
      readonly strict?: true
    } | {
      readonly decode: (
        fromA: Schema.Type<From>,
        options: ParseOptions,
        ast: AST.Transformation,
        fromI: Schema.Encoded<From>
      ) => Effect.Effect<unknown, ParseResult.ParseIssue, RD>
      readonly encode: (
        toI: Schema.Encoded<To>,
        options: ParseOptions,
        ast: AST.Transformation,
        toA: Schema.Type<To>
      ) => Effect.Effect<unknown, ParseResult.ParseIssue, RE>
      readonly strict: false
    }
  ): transformOrFail<From, To, RD | RE>
} = dual((args) => isSchema(args[0]) && isSchema(args[1]), <FromA, FromI, FromR, ToA, ToI, ToR, RD, RE>(
  from: Schema<FromA, FromI, FromR>,
  to: Schema<ToA, ToI, ToR>,
  options: {
    readonly decode: (
      fromA: FromA,
      options: ParseOptions,
      ast: AST.Transformation,
      fromI: FromI
    ) => Effect.Effect<ToI, ParseResult.ParseIssue, RD>
    readonly encode: (
      toI: ToI,
      options: ParseOptions,
      ast: AST.Transformation,
      toA: ToA
    ) => Effect.Effect<FromA, ParseResult.ParseIssue, RE>
  }
): Schema<ToA, FromI, FromR | ToR | RD | RE> =>
  makeTransformationClass(
    from,
    to,
    new AST.Transformation(
      from.ast,
      to.ast,
      new AST.FinalTransformation(options.decode, options.encode)
    )
  ))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface transform<From extends Schema.All, To extends Schema.All> extends transformOrFail<From, To> {
  annotations(annotations: Annotations.Schema<Schema.Type<To>>): transform<From, To>
}

/**
 * Create a new `Schema` by transforming the input and output of an existing `Schema`
 * using the provided mapping functions.
 *
 * @category transformations
 * @since 3.10.0
 */
export const transform: {
  /**
   * Create a new `Schema` by transforming the input and output of an existing `Schema`
   * using the provided mapping functions.
   *
   * @category transformations
   * @since 3.10.0
   */
  <To extends Schema.Any, From extends Schema.Any>(
    to: To,
    options: {
      readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => Schema.Encoded<To>
      readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => Schema.Type<From>
      readonly strict?: true
    } | {
      readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => unknown
      readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => unknown
      readonly strict: false
    }
  ): (from: From) => transform<From, To>
  /**
   * Create a new `Schema` by transforming the input and output of an existing `Schema`
   * using the provided mapping functions.
   *
   * @category transformations
   * @since 3.10.0
   */
  <To extends Schema.Any, From extends Schema.Any>(
    from: From,
    to: To,
    options: {
      readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => Schema.Encoded<To>
      readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => Schema.Type<From>
      readonly strict?: true
    } | {
      readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => unknown
      readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => unknown
      readonly strict: false
    }
  ): transform<From, To>
} = dual(
  (args) => isSchema(args[0]) && isSchema(args[1]),
  <FromA, FromI, FromR, ToA, ToI, ToR>(
    from: Schema<FromA, FromI, FromR>,
    to: Schema<ToA, ToI, ToR>,
    options: {
      readonly decode: (fromA: FromA, fromI: FromI) => ToI
      readonly encode: (toI: ToI, toA: ToA) => FromA
    }
  ): Schema<ToA, FromI, FromR | ToR> =>
    transformOrFail(
      from,
      to,
      {
        strict: true,
        decode: (fromA, _options, _ast, toA) => ParseResult.succeed(options.decode(fromA, toA)),
        encode: (toI, _options, _ast, toA) => ParseResult.succeed(options.encode(toI, toA))
      }
    )
)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface transformLiteral<Type extends AST.LiteralValue, Encoded extends AST.LiteralValue>
  extends transform<Literal<[Encoded]>, Literal<[Type]>>
{
  annotations(annotations: Annotations.Schema<Type>): transformLiteral<Type, Encoded>
}

/**
 * Creates a new `Schema` which transforms literal values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 *
 * const schema = S.transformLiteral(0, "a")
 *
 * assert.deepStrictEqual(S.decodeSync(schema)(0), "a")
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export function transformLiteral<Encoded extends AST.LiteralValue, Type extends AST.LiteralValue>(
  from: Encoded,
  to: Type
): transformLiteral<Type, Encoded> {
  return transform(Literal(from), Literal(to), {
    strict: true,
    decode: () => to,
    encode: () => from
  })
}

/**
 * Creates a new `Schema` which maps between corresponding literal values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 *
 * const Animal = S.transformLiterals(
 *   [0, "cat"],
 *   [1, "dog"],
 *   [2, "cow"]
 * )
 *
 * assert.deepStrictEqual(S.decodeSync(Animal)(1), "dog")
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export function transformLiterals<const A extends AST.Members<readonly [from: AST.LiteralValue, to: AST.LiteralValue]>>(
  ...pairs: A
): Union<{ -readonly [I in keyof A]: transformLiteral<A[I][1], A[I][0]> }>
export function transformLiterals<Encoded extends AST.LiteralValue, Type extends AST.LiteralValue>(
  pairs: [Encoded, Type]
): transformLiteral<Type, Encoded>
export function transformLiterals<
  const A extends ReadonlyArray<readonly [from: AST.LiteralValue, to: AST.LiteralValue]>
>(...pairs: A): Schema<A[number][1], A[number][0]>
export function transformLiterals<
  const A extends ReadonlyArray<readonly [from: AST.LiteralValue, to: AST.LiteralValue]>
>(...pairs: A): Schema<A[number][1], A[number][0]> {
  return Union(...pairs.map(([from, to]) => transformLiteral(from, to)))
}

/**
 * Attaches a property signature with the specified key and value to the schema.
 * This API is useful when you want to add a property to your schema which doesn't describe the shape of the input,
 * but rather maps to another schema, for example when you want to add a discriminant to a simple union.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 * import { pipe } from "effect/Function"
 *
 * const Circle = S.Struct({ radius: S.Number })
 * const Square = S.Struct({ sideLength: S.Number })
 * const Shape = S.Union(
 *   Circle.pipe(S.attachPropertySignature("kind", "circle")),
 *   Square.pipe(S.attachPropertySignature("kind", "square"))
 * )
 *
 * assert.deepStrictEqual(S.decodeSync(Shape)({ radius: 10 }), {
 *   kind: "circle",
 *   radius: 10
 * })
 * ```
 *
 * @category combinators
 * @since 3.10.0
 */
export const attachPropertySignature: {
  /**
   * Attaches a property signature with the specified key and value to the schema.
   * This API is useful when you want to add a property to your schema which doesn't describe the shape of the input,
   * but rather maps to another schema, for example when you want to add a discriminant to a simple union.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import * as S from "effect/Schema"
   * import { pipe } from "effect/Function"
   *
   * const Circle = S.Struct({ radius: S.Number })
   * const Square = S.Struct({ sideLength: S.Number })
   * const Shape = S.Union(
   *   Circle.pipe(S.attachPropertySignature("kind", "circle")),
   *   Square.pipe(S.attachPropertySignature("kind", "square"))
   * )
   *
   * assert.deepStrictEqual(S.decodeSync(Shape)({ radius: 10 }), {
   *   kind: "circle",
   *   radius: 10
   * })
   * ```
   *
   * @category combinators
   * @since 3.10.0
   */
  <K extends PropertyKey, V extends AST.LiteralValue | symbol, A>(
    key: K,
    value: V,
    annotations?: Annotations.Schema<A & { readonly [k in K]: V }>
  ): <I, R>(
    schema: Schema<A, I, R>
  ) => SchemaClass<A & { readonly [k in K]: V }, I, R>
  /**
   * Attaches a property signature with the specified key and value to the schema.
   * This API is useful when you want to add a property to your schema which doesn't describe the shape of the input,
   * but rather maps to another schema, for example when you want to add a discriminant to a simple union.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import * as S from "effect/Schema"
   * import { pipe } from "effect/Function"
   *
   * const Circle = S.Struct({ radius: S.Number })
   * const Square = S.Struct({ sideLength: S.Number })
   * const Shape = S.Union(
   *   Circle.pipe(S.attachPropertySignature("kind", "circle")),
   *   Square.pipe(S.attachPropertySignature("kind", "square"))
   * )
   *
   * assert.deepStrictEqual(S.decodeSync(Shape)({ radius: 10 }), {
   *   kind: "circle",
   *   radius: 10
   * })
   * ```
   *
   * @category combinators
   * @since 3.10.0
   */
  <A, I, R, K extends PropertyKey, V extends AST.LiteralValue | symbol>(
    schema: Schema<A, I, R>,
    key: K,
    value: V,
    annotations?: Annotations.Schema<A & { readonly [k in K]: V }>
  ): SchemaClass<A & { readonly [k in K]: V }, I, R>
} = dual(
  (args) => isSchema(args[0]),
  <A, I, R, K extends PropertyKey, V extends AST.LiteralValue | symbol>(
    schema: Schema<A, I, R>,
    key: K,
    value: V,
    annotations?: Annotations.Schema<A & { readonly [k in K]: V }>
  ): SchemaClass<A & { readonly [k in K]: V }, I, R> => {
    const ast = extend(
      typeSchema(schema),
      Struct({ [key]: Predicate.isSymbol(value) ? UniqueSymbolFromSelf(value) : Literal(value) })
    ).ast
    return make(
      new AST.Transformation(
        schema.ast,
        annotations ? mergeSchemaAnnotations(ast, annotations) : ast,
        new AST.TypeLiteralTransformation(
          [
            new AST.PropertySignatureTransformation(
              key,
              key,
              () => option_.some(value),
              () => option_.none()
            )
          ]
        )
      )
    )
  }
)

/**
 * @category annotations
 * @since 3.10.0
 */
export declare namespace Annotations {
  /**
   * @category annotations
   * @since 3.10.0
   */
  export interface Doc<A> extends AST.Annotations {
    readonly title?: AST.TitleAnnotation
    readonly description?: AST.DescriptionAnnotation
    readonly documentation?: AST.DocumentationAnnotation
    readonly examples?: AST.ExamplesAnnotation<A>
    readonly default?: AST.DefaultAnnotation<A>
  }

  /**
   * @since 3.10.0
   */
  export interface Schema<A, TypeParameters extends ReadonlyArray<any> = readonly []> extends Doc<A> {
    readonly typeConstructor?: AST.TypeConstructorAnnotation
    readonly identifier?: AST.IdentifierAnnotation
    readonly message?: AST.MessageAnnotation
    readonly schemaId?: AST.SchemaIdAnnotation
    readonly jsonSchema?: AST.JSONSchemaAnnotation
    readonly arbitrary?: ArbitraryAnnotation<A, TypeParameters>
    readonly pretty?: pretty_.PrettyAnnotation<A, TypeParameters>
    readonly equivalence?: AST.EquivalenceAnnotation<A, TypeParameters>
    readonly concurrency?: AST.ConcurrencyAnnotation
    readonly batching?: AST.BatchingAnnotation
    readonly parseIssueTitle?: AST.ParseIssueTitleAnnotation
    readonly parseOptions?: AST.ParseOptions
    readonly decodingFallback?: AST.DecodingFallbackAnnotation<A>
  }

  /**
   * @since 3.11.6
   */
  export interface GenericSchema<A> extends Schema<A> {
    readonly arbitrary?: (..._: any) => LazyArbitrary<A>
    readonly pretty?: (..._: any) => pretty_.Pretty<A>
    readonly equivalence?: (..._: any) => Equivalence.Equivalence<A>
  }

  // TODO(4.0): replace `readonly [P]` with `readonly []`
  /**
   * @since 3.10.0
   */
  export interface Filter<A, P = A> extends Schema<A, readonly [P]> {}
}

/**
 * Merges a set of new annotations with existing ones, potentially overwriting
 * any duplicates.
 *
 * @category annotations
 * @since 3.10.0
 */
export const annotations: {
  /**
   * Merges a set of new annotations with existing ones, potentially overwriting
   * any duplicates.
   *
   * @category annotations
   * @since 3.10.0
   */
  <S extends Annotable.All>(annotations: Annotations.GenericSchema<Schema.Type<S>>): (self: S) => Annotable.Self<S>
  /**
   * Merges a set of new annotations with existing ones, potentially overwriting
   * any duplicates.
   *
   * @category annotations
   * @since 3.10.0
   */
  <S extends Annotable.All>(self: S, annotations: Annotations.GenericSchema<Schema.Type<S>>): Annotable.Self<S>
} = dual(
  2,
  <A, I, R>(self: Schema<A, I, R>, annotations: Annotations.GenericSchema<A>): Schema<A, I, R> =>
    self.annotations(annotations)
)

type Rename<A, M> = {
  [
    K in keyof A as K extends keyof M ? M[K] extends PropertyKey ? M[K]
      : never
      : K
  ]: A[K]
}

/**
 * @category renaming
 * @since 3.10.0
 */
export const rename: {
  /**
   * @category renaming
   * @since 3.10.0
   */
  <
    A,
    const M extends
      & { readonly [K in keyof A]?: PropertyKey }
      & { readonly [K in Exclude<keyof M, keyof A>]: never }
  >(mapping: M): <I, R>(self: Schema<A, I, R>) => SchemaClass<Simplify<Rename<A, M>>, I, R>
  /**
   * @category renaming
   * @since 3.10.0
   */
  <
    A,
    I,
    R,
    const M extends
      & { readonly [K in keyof A]?: PropertyKey }
      & { readonly [K in Exclude<keyof M, keyof A>]: never }
  >(self: Schema<A, I, R>, mapping: M): SchemaClass<Simplify<Rename<A, M>>, I, R>
} = dual(
  2,
  <
    A,
    I,
    R,
    const M extends
      & { readonly [K in keyof A]?: PropertyKey }
      & { readonly [K in Exclude<keyof M, keyof A>]: never }
  >(
    self: Schema<A, I, R>,
    mapping: M
  ): SchemaClass<Simplify<Rename<A, M>>, I, R> => make(AST.rename(self.ast, mapping))
)

/**
 * @category schema id
 * @since 3.10.0
 */
export const TrimmedSchemaId: unique symbol = Symbol.for("effect/SchemaId/Trimmed")

/**
 * Verifies that a string contains no leading or trailing whitespaces.
 *
 * Note. This combinator does not make any transformations, it only validates.
 * If what you were looking for was a combinator to trim strings, then check out the `trim` combinator.
 *
 * @category string filters
 * @since 3.10.0
 */
export const trimmed = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a === a.trim(), {
      schemaId: TrimmedSchemaId,
      title: "trimmed",
      description: "a string with no leading or trailing whitespace",
      jsonSchema: { pattern: "^\\S[\\s\\S]*\\S$|^\\S$|^$" },
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const MaxLengthSchemaId: unique symbol = schemaId_.MaxLengthSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type MaxLengthSchemaId = typeof MaxLengthSchemaId

/**
 * @category string filters
 * @since 3.10.0
 */
export const maxLength =
  <S extends Schema.Any>(maxLength: number, annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter(
        (a) => a.length <= maxLength,
        {
          schemaId: MaxLengthSchemaId,
          title: `maxLength(${maxLength})`,
          description: `a string at most ${maxLength} character(s) long`,
          jsonSchema: { maxLength },
          ...annotations
        }
      )
    )

/**
 * @category schema id
 * @since 3.10.0
 */
export const MinLengthSchemaId: unique symbol = schemaId_.MinLengthSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type MinLengthSchemaId = typeof MinLengthSchemaId

/**
 * @category string filters
 * @since 3.10.0
 */
export const minLength = <S extends Schema.Any>(
  minLength: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter(
      (a) => a.length >= minLength,
      {
        schemaId: MinLengthSchemaId,
        title: `minLength(${minLength})`,
        description: `a string at least ${minLength} character(s) long`,
        jsonSchema: { minLength },
        ...annotations
      }
    )
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LengthSchemaId: unique symbol = schemaId_.LengthSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type LengthSchemaId = typeof LengthSchemaId

/**
 * @category string filters
 * @since 3.10.0
 */
export const length = <S extends Schema.Any>(
  length: number | { readonly min: number; readonly max: number },
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const minLength = Predicate.isObject(length) ? Math.max(0, Math.floor(length.min)) : Math.max(0, Math.floor(length))
  const maxLength = Predicate.isObject(length) ? Math.max(minLength, Math.floor(length.max)) : minLength
  if (minLength !== maxLength) {
    return self.pipe(
      filter((a) => a.length >= minLength && a.length <= maxLength, {
        schemaId: LengthSchemaId,
        title: `length({ min: ${minLength}, max: ${maxLength})`,
        description: `a string at least ${minLength} character(s) and at most ${maxLength} character(s) long`,
        jsonSchema: { minLength, maxLength },
        ...annotations
      })
    )
  }
  return self.pipe(
    filter((a) => a.length === minLength, {
      schemaId: LengthSchemaId,
      title: `length(${minLength})`,
      description: minLength === 1 ? `a single character` : `a string ${minLength} character(s) long`,
      jsonSchema: { minLength, maxLength: minLength },
      ...annotations
    })
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const PatternSchemaId: unique symbol = Symbol.for("effect/SchemaId/Pattern")

/**
 * @category string filters
 * @since 3.10.0
 */
export const pattern = <S extends Schema.Any>(
  regex: RegExp,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const source = regex.source
  return self.pipe(
    filter(
      (a) => {
        // The following line ensures that `lastIndex` is reset to `0` in case the user has specified the `g` flag
        regex.lastIndex = 0
        return regex.test(a)
      },
      {
        schemaId: PatternSchemaId,
        [PatternSchemaId]: { regex },
        // title: `pattern(/${source}/)`, // avoiding this because it can be very long
        description: `a string matching the pattern ${source}`,
        jsonSchema: { pattern: source },
        ...annotations
      }
    )
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const StartsWithSchemaId: unique symbol = Symbol.for("effect/SchemaId/StartsWith")

/**
 * @category string filters
 * @since 3.10.0
 */
export const startsWith = <S extends Schema.Any>(
  startsWith: string,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const formatted = JSON.stringify(startsWith)
  return self.pipe(
    filter(
      (a) => a.startsWith(startsWith),
      {
        schemaId: StartsWithSchemaId,
        [StartsWithSchemaId]: { startsWith },
        title: `startsWith(${formatted})`,
        description: `a string starting with ${formatted}`,
        jsonSchema: { pattern: `^${startsWith}` },
        ...annotations
      }
    )
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const EndsWithSchemaId: unique symbol = Symbol.for("effect/SchemaId/EndsWith")

/**
 * @category string filters
 * @since 3.10.0
 */
export const endsWith = <S extends Schema.Any>(
  endsWith: string,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const formatted = JSON.stringify(endsWith)
  return self.pipe(
    filter(
      (a) => a.endsWith(endsWith),
      {
        schemaId: EndsWithSchemaId,
        [EndsWithSchemaId]: { endsWith },
        title: `endsWith(${formatted})`,
        description: `a string ending with ${formatted}`,
        jsonSchema: { pattern: `^.*${endsWith}$` },
        ...annotations
      }
    )
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const IncludesSchemaId: unique symbol = Symbol.for("effect/SchemaId/Includes")

/**
 * @category string filters
 * @since 3.10.0
 */
export const includes = <S extends Schema.Any>(
  searchString: string,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const formatted = JSON.stringify(searchString)
  return self.pipe(
    filter(
      (a) => a.includes(searchString),
      {
        schemaId: IncludesSchemaId,
        [IncludesSchemaId]: { includes: searchString },
        title: `includes(${formatted})`,
        description: `a string including ${formatted}`,
        jsonSchema: { pattern: `.*${searchString}.*` },
        ...annotations
      }
    )
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const LowercasedSchemaId: unique symbol = Symbol.for("effect/SchemaId/Lowercased")

/**
 * Verifies that a string is lowercased.
 *
 * @category string filters
 * @since 3.10.0
 */
export const lowercased =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => a === a.toLowerCase(), {
        schemaId: LowercasedSchemaId,
        title: "lowercased",
        description: "a lowercase string",
        jsonSchema: { pattern: "^[^A-Z]*$" },
        ...annotations
      })
    )

/**
 * @category string constructors
 * @since 3.10.0
 */
export class Lowercased extends String$.pipe(
  lowercased({ identifier: "Lowercased" })
) {}

/**
 * @category schema id
 * @since 3.10.0
 */
export const UppercasedSchemaId: unique symbol = Symbol.for("effect/SchemaId/Uppercased")

/**
 * Verifies that a string is uppercased.
 *
 * @category string filters
 * @since 3.10.0
 */
export const uppercased =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => a === a.toUpperCase(), {
        schemaId: UppercasedSchemaId,
        title: "uppercased",
        description: "an uppercase string",
        jsonSchema: { pattern: "^[^a-z]*$" },
        ...annotations
      })
    )

/**
 * @category string constructors
 * @since 3.10.0
 */
export class Uppercased extends String$.pipe(
  uppercased({ identifier: "Uppercased" })
) {}

/**
 * @category schema id
 * @since 3.10.0
 */
export const CapitalizedSchemaId: unique symbol = Symbol.for("effect/SchemaId/Capitalized")

/**
 * Verifies that a string is capitalized.
 *
 * @category string filters
 * @since 3.10.0
 */
export const capitalized =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => a[0]?.toUpperCase() === a[0], {
        schemaId: CapitalizedSchemaId,
        title: "capitalized",
        description: "a capitalized string",
        jsonSchema: { pattern: "^[^a-z]?.*$" },
        ...annotations
      })
    )

/**
 * @category string constructors
 * @since 3.10.0
 */
export class Capitalized extends String$.pipe(
  capitalized({ identifier: "Capitalized" })
) {}

/**
 * @category schema id
 * @since 3.10.0
 */
export const UncapitalizedSchemaId: unique symbol = Symbol.for("effect/SchemaId/Uncapitalized")

/**
 * Verifies that a string is uncapitalized.
 *
 * @category string filters
 * @since 3.10.0
 */
export const uncapitalized =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => a[0]?.toLowerCase() === a[0], {
        schemaId: UncapitalizedSchemaId,
        title: "uncapitalized",
        description: "a uncapitalized string",
        jsonSchema: { pattern: "^[^A-Z]?.*$" },
        ...annotations
      })
    )

/**
 * @category string constructors
 * @since 3.10.0
 */
export class Uncapitalized extends String$.pipe(
  uncapitalized({ identifier: "Uncapitalized" })
) {}

/**
 * A schema representing a single character.
 *
 * @category string constructors
 * @since 3.10.0
 */
export class Char extends String$.pipe(length(1, { identifier: "Char" })) {}

/**
 * @category string filters
 * @since 3.10.0
 */
export const nonEmptyString = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  minLength(1, {
    title: "nonEmptyString",
    description: "a non empty string",
    ...annotations
  })

/**
 * This schema converts a string to lowercase.
 *
 * @category string transformations
 * @since 3.10.0
 */
export class Lowercase extends transform(
  String$.annotations({ description: "a string that will be converted to lowercase" }),
  Lowercased,
  {
    strict: true,
    decode: (i) => i.toLowerCase(),
    encode: identity
  }
).annotations({ identifier: "Lowercase" }) {}

/**
 * This schema converts a string to uppercase.
 *
 * @category string transformations
 * @since 3.10.0
 */
export class Uppercase extends transform(
  String$.annotations({ description: "a string that will be converted to uppercase" }),
  Uppercased,
  {
    strict: true,
    decode: (i) => i.toUpperCase(),
    encode: identity
  }
).annotations({ identifier: "Uppercase" }) {}

/**
 * This schema converts a string to capitalized one.
 *
 * @category string transformations
 * @since 3.10.0
 */
export class Capitalize extends transform(
  String$.annotations({ description: "a string that will be converted to a capitalized format" }),
  Capitalized,
  {
    strict: true,
    decode: (i) => string_.capitalize(i),
    encode: identity
  }
).annotations({ identifier: "Capitalize" }) {}

/**
 * This schema converts a string to uncapitalized one.
 *
 * @category string transformations
 * @since 3.10.0
 */
export class Uncapitalize extends transform(
  String$.annotations({ description: "a string that will be converted to an uncapitalized format" }),
  Uncapitalized,
  {
    strict: true,
    decode: (i) => string_.uncapitalize(i),
    encode: identity
  }
).annotations({ identifier: "Uncapitalize" }) {}

/**
 * @category string constructors
 * @since 3.10.0
 */
export class Trimmed extends String$.pipe(
  trimmed({ identifier: "Trimmed" })
) {}

/**
 * Useful for validating strings that must contain meaningful characters without
 * leading or trailing whitespace.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)("")) // Option.none()
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)(" a ")) // Option.none()
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)("a")) // Option.some("a")
 * ```
 *
 * @category string constructors
 * @since 3.10.0
 */
export class NonEmptyTrimmedString extends Trimmed.pipe(
  nonEmptyString({ identifier: "NonEmptyTrimmedString" })
) {}

/**
 * This schema allows removing whitespaces from the beginning and end of a string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export class Trim extends transform(
  String$.annotations({ description: "a string that will be trimmed" }),
  Trimmed,
  {
    strict: true,
    decode: (i) => i.trim(),
    encode: identity
  }
).annotations({ identifier: "Trim" }) {}

/**
 * Returns a schema that allows splitting a string into an array of strings.
 *
 * @category string transformations
 * @since 3.10.0
 */
export const split = (separator: string): transform<SchemaClass<string>, Array$<typeof String$>> =>
  transform(
    String$.annotations({ description: "a string that will be split" }),
    Array$(String$),
    {
      strict: true,
      decode: (i) => i.split(separator),
      encode: (a) => a.join(separator)
    }
  )

/**
 * @since 3.10.0
 */
export type ParseJsonOptions = {
  readonly reviver?: Parameters<typeof JSON.parse>[1]
  readonly replacer?: Parameters<typeof JSON.stringify>[1]
  readonly space?: Parameters<typeof JSON.stringify>[2]
}

const getErrorMessage = (e: unknown): string => e instanceof Error ? e.message : String(e)

const getParseJsonTransformation = (options?: ParseJsonOptions): SchemaClass<unknown, string> =>
  transformOrFail(
    String$.annotations({ description: "a string to be decoded into JSON" }),
    Unknown,
    {
      strict: true,
      decode: (i, _, ast) =>
        ParseResult.try({
          try: () => JSON.parse(i, options?.reviver),
          catch: (e) => new ParseResult.Type(ast, i, getErrorMessage(e))
        }),
      encode: (a, _, ast) =>
        ParseResult.try({
          try: () => JSON.stringify(a, options?.replacer, options?.space),
          catch: (e) => new ParseResult.Type(ast, a, getErrorMessage(e))
        })
    }
  ).annotations({
    title: "parseJson",
    schemaId: AST.ParseJsonSchemaId
  })

/**
 * The `ParseJson` combinator provides a method to convert JSON strings into the `unknown` type using the underlying
 * functionality of `JSON.parse`. It also utilizes `JSON.stringify` for encoding.
 *
 * You can optionally provide a `ParseJsonOptions` to configure both `JSON.parse` and `JSON.stringify` executions.
 *
 * Optionally, you can pass a schema `Schema<A, I, R>` to obtain an `A` type instead of `unknown`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as Schema from "effect/Schema"
 *
 * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson())(`{"a":"1"}`), { a: "1" })
 * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson(Schema.Struct({ a: Schema.NumberFromString })))(`{"a":"1"}`), { a: 1 })
 * ```
 *
 * @category string transformations
 * @since 3.10.0
 */
export const parseJson: {
  /**
   * The `ParseJson` combinator provides a method to convert JSON strings into the `unknown` type using the underlying
   * functionality of `JSON.parse`. It also utilizes `JSON.stringify` for encoding.
   *
   * You can optionally provide a `ParseJsonOptions` to configure both `JSON.parse` and `JSON.stringify` executions.
   *
   * Optionally, you can pass a schema `Schema<A, I, R>` to obtain an `A` type instead of `unknown`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import * as Schema from "effect/Schema"
   *
   * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson())(`{"a":"1"}`), { a: "1" })
   * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson(Schema.Struct({ a: Schema.NumberFromString })))(`{"a":"1"}`), { a: 1 })
   * ```
   *
   * @category string transformations
   * @since 3.10.0
   */
  <S extends Schema.Any>(schema: S, options?: ParseJsonOptions): transform<SchemaClass<unknown, string>, S>
  /**
   * The `ParseJson` combinator provides a method to convert JSON strings into the `unknown` type using the underlying
   * functionality of `JSON.parse`. It also utilizes `JSON.stringify` for encoding.
   *
   * You can optionally provide a `ParseJsonOptions` to configure both `JSON.parse` and `JSON.stringify` executions.
   *
   * Optionally, you can pass a schema `Schema<A, I, R>` to obtain an `A` type instead of `unknown`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import * as Schema from "effect/Schema"
   *
   * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson())(`{"a":"1"}`), { a: "1" })
   * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson(Schema.Struct({ a: Schema.NumberFromString })))(`{"a":"1"}`), { a: 1 })
   * ```
   *
   * @category string transformations
   * @since 3.10.0
   */
  (options?: ParseJsonOptions): SchemaClass<unknown, string>
} = <A, I, R>(schemaOrOptions?: Schema<A, I, R> | ParseJsonOptions, o?: ParseJsonOptions) =>
  isSchema(schemaOrOptions)
    ? compose(parseJson(o), schemaOrOptions) as any
    : getParseJsonTransformation(schemaOrOptions as ParseJsonOptions | undefined)

/**
 * @category string constructors
 * @since 3.10.0
 */
export class NonEmptyString extends String$.pipe(
  nonEmptyString({ identifier: "NonEmptyString" })
) {}

/**
 * @category schema id
 * @since 3.10.0
 */
export const UUIDSchemaId: unique symbol = Symbol.for("effect/SchemaId/UUID")

const uuidRegexp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i

/**
 * Represents a Universally Unique Identifier (UUID).
 *
 * This schema ensures that the provided string adheres to the standard UUID format.
 *
 * @category string constructors
 * @since 3.10.0
 */
export class UUID extends String$.pipe(
  pattern(uuidRegexp, {
    schemaId: UUIDSchemaId,
    identifier: "UUID",
    jsonSchema: {
      format: "uuid",
      pattern: uuidRegexp.source
    },
    description: "a Universally Unique Identifier",
    arbitrary: (): LazyArbitrary<string> => (fc) => fc.uuid()
  })
) {}

/**
 * @category schema id
 * @since 3.10.0
 */
export const ULIDSchemaId: unique symbol = Symbol.for("effect/SchemaId/ULID")

const ulidRegexp = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i

/**
 * Represents a Universally Unique Lexicographically Sortable Identifier (ULID).
 *
 * ULIDs are designed to be compact, URL-safe, and ordered, making them suitable for use as identifiers.
 * This schema ensures that the provided string adheres to the standard ULID format.
 *
 * @category string constructors
 * @since 3.10.0
 */
export class ULID extends String$.pipe(
  pattern(ulidRegexp, {
    schemaId: ULIDSchemaId,
    identifier: "ULID",
    description: "a Universally Unique Lexicographically Sortable Identifier",
    arbitrary: (): LazyArbitrary<string> => (fc) => fc.ulid()
  })
) {}

/**
 * Defines a schema that represents a `URL` object.
 *
 * @category URL constructors
 * @since 3.11.0
 */
export class URLFromSelf extends instanceOf(URL, {
  typeConstructor: { _tag: "URL" },
  identifier: "URLFromSelf",
  arbitrary: (): LazyArbitrary<URL> => (fc) => fc.webUrl().map((s) => new URL(s)),
  pretty: () => (url) => url.toString()
}) {}

/** @ignore */
class URL$ extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a URL" }),
  URLFromSelf,
  {
    strict: true,
    decode: (i, _, ast) =>
      ParseResult.try({
        try: () => new URL(i),
        catch: (e) =>
          new ParseResult.Type(
            ast,
            i,
            `Unable to decode ${JSON.stringify(i)} into a URL. ${getErrorMessage(e)}`
          )
      }),
    encode: (a) => ParseResult.succeed(a.toString())
  }
).annotations({
  identifier: "URL",
  pretty: () => (url) => url.toString()
}) {}

export {
  /**
   * Defines a schema that attempts to convert a `string` to a `URL` object using
   * the `new URL` constructor.
   *
   * @category URL transformations
   * @since 3.11.0
   */
  URL$ as URL
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const FiniteSchemaId: unique symbol = schemaId_.FiniteSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type FiniteSchemaId = typeof FiniteSchemaId

/**
 * Ensures that the provided value is a finite number (excluding NaN, +Infinity, and -Infinity).
 *
 * @category number filters
 * @since 3.10.0
 */
export const finite =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter(Number.isFinite, {
        schemaId: FiniteSchemaId,
        title: "finite",
        description: "a finite number",
        jsonSchema: {},
        ...annotations
      })
    )

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanSchemaId: unique symbol = schemaId_.GreaterThanSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanSchemaId = typeof GreaterThanSchemaId

/**
 * This filter checks whether the provided number is greater than the specified minimum.
 *
 * @category number filters
 * @since 3.10.0
 */
export const greaterThan = <S extends Schema.Any>(
  exclusiveMinimum: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a > exclusiveMinimum, {
      schemaId: GreaterThanSchemaId,
      title: `greaterThan(${exclusiveMinimum})`,
      description: exclusiveMinimum === 0 ? "a positive number" : `a number greater than ${exclusiveMinimum}`,
      jsonSchema: { exclusiveMinimum },
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanOrEqualToSchemaId: unique symbol = schemaId_.GreaterThanOrEqualToSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanOrEqualToSchemaId = typeof GreaterThanOrEqualToSchemaId

/**
 * This filter checks whether the provided number is greater than or equal to the specified minimum.
 *
 * @category number filters
 * @since 3.10.0
 */
export const greaterThanOrEqualTo = <S extends Schema.Any>(
  minimum: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a >= minimum, {
      schemaId: GreaterThanOrEqualToSchemaId,
      title: `greaterThanOrEqualTo(${minimum})`,
      description: minimum === 0 ? "a non-negative number" : `a number greater than or equal to ${minimum}`,
      jsonSchema: { minimum },
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const MultipleOfSchemaId: unique symbol = Symbol.for("effect/SchemaId/MultipleOf")

/**
 * @category number filters
 * @since 3.10.0
 */
export const multipleOf = <S extends Schema.Any>(
  divisor: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const positiveDivisor = Math.abs(divisor) // spec requires positive divisor
  return self.pipe(
    filter((a) => number_.remainder(a, divisor) === 0, {
      schemaId: MultipleOfSchemaId,
      title: `multipleOf(${positiveDivisor})`,
      description: `a number divisible by ${positiveDivisor}`,
      jsonSchema: { multipleOf: positiveDivisor },
      ...annotations
    })
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const IntSchemaId: unique symbol = schemaId_.IntSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type IntSchemaId = typeof IntSchemaId

/**
 * Ensures that the provided value is an integer number (excluding NaN, +Infinity, and -Infinity).
 *
 * @category number filters
 * @since 3.10.0
 */
export const int =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => Number.isSafeInteger(a), {
        schemaId: IntSchemaId,
        title: "int",
        description: "an integer",
        jsonSchema: { type: "integer" },
        ...annotations
      })
    )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanSchemaId: unique symbol = schemaId_.LessThanSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanSchemaId = typeof LessThanSchemaId

/**
 * This filter checks whether the provided number is less than the specified maximum.
 *
 * @category number filters
 * @since 3.10.0
 */
export const lessThan =
  <S extends Schema.Any>(exclusiveMaximum: number, annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => a < exclusiveMaximum, {
        schemaId: LessThanSchemaId,
        title: `lessThan(${exclusiveMaximum})`,
        description: exclusiveMaximum === 0 ? "a negative number" : `a number less than ${exclusiveMaximum}`,
        jsonSchema: { exclusiveMaximum },
        ...annotations
      })
    )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanOrEqualToSchemaId: unique symbol = schemaId_.LessThanOrEqualToSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanOrEqualToSchemaId = typeof LessThanOrEqualToSchemaId

/**
 * This schema checks whether the provided number is less than or equal to the specified maximum.
 *
 * @category number filters
 * @since 3.10.0
 */
export const lessThanOrEqualTo = <S extends Schema.Any>(
  maximum: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a <= maximum, {
      schemaId: LessThanOrEqualToSchemaId,
      title: `lessThanOrEqualTo(${maximum})`,
      description: maximum === 0 ? "a non-positive number" : `a number less than or equal to ${maximum}`,
      jsonSchema: { maximum },
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const BetweenSchemaId: unique symbol = schemaId_.BetweenSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type BetweenSchemaId = typeof BetweenSchemaId

/**
 * This filter checks whether the provided number falls within the specified minimum and maximum values.
 *
 * @category number filters
 * @since 3.10.0
 */
export const between = <S extends Schema.Any>(
  minimum: number,
  maximum: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a >= minimum && a <= maximum, {
      schemaId: BetweenSchemaId,
      title: `between(${minimum}, ${maximum})`,
      description: `a number between ${minimum} and ${maximum}`,
      jsonSchema: { minimum, maximum },
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const NonNaNSchemaId: unique symbol = schemaId_.NonNaNSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type NonNaNSchemaId = typeof NonNaNSchemaId

/**
 * @category number filters
 * @since 3.10.0
 */
export const nonNaN =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => !Number.isNaN(a), {
        schemaId: NonNaNSchemaId,
        title: "nonNaN",
        description: "a number excluding NaN",
        ...annotations
      })
    )

/**
 * @category number filters
 * @since 3.10.0
 */
export const positive = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  greaterThan(0, { title: "positive", ...annotations })

/**
 * @category number filters
 * @since 3.10.0
 */
export const negative = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  lessThan(0, { title: "negative", ...annotations })

/**
 * @category number filters
 * @since 3.10.0
 */
export const nonPositive = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  lessThanOrEqualTo(0, { title: "nonPositive", ...annotations })

/**
 * @category number filters
 * @since 3.10.0
 */
export const nonNegative = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  greaterThanOrEqualTo(0, { title: "nonNegative", ...annotations })

/**
 * Clamps a number between a minimum and a maximum value.
 *
 * @category number transformations
 * @since 3.10.0
 */
export const clamp = (minimum: number, maximum: number) =>
<S extends Schema.Any, A extends number>(
  self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
): transform<S, filter<SchemaClass<A>>> => {
  return transform(
    self,
    typeSchema(self).pipe(between(minimum, maximum)),
    {
      strict: false,
      decode: (i) => number_.clamp(i, { minimum, maximum }),
      encode: identity
    }
  )
}

/**
 * Transforms a `string` into a `number` by parsing the string using the `parse`
 * function of the `effect/Number` module.
 *
 * It returns an error if the value can't be converted (for example when
 * non-numeric characters are provided).
 *
 * The following special string values are supported: "NaN", "Infinity",
 * "-Infinity".
 *
 * @category number transformations
 * @since 3.10.0
 */
export function parseNumber<S extends Schema.Any, A extends string>(
  self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
): transformOrFail<S, typeof Number$> {
  return transformOrFail(
    self,
    Number$,
    {
      strict: false,
      decode: (i, _, ast) =>
        ParseResult.fromOption(
          number_.parse(i),
          () => new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a number`)
        ),
      encode: (a) => ParseResult.succeed(String(a))
    }
  )
}

/**
 * This schema transforms a `string` into a `number` by parsing the string using the `parse` function of the `effect/Number` module.
 *
 * It returns an error if the value can't be converted (for example when non-numeric characters are provided).
 *
 * The following special string values are supported: "NaN", "Infinity", "-Infinity".
 *
 * @category number transformations
 * @since 3.10.0
 */
export class NumberFromString extends parseNumber(String$.annotations({
  description: "a string to be decoded into a number"
})).annotations({ identifier: "NumberFromString" }) {}

/**
 * @category number constructors
 * @since 3.10.0
 */
export class Finite extends Number$.pipe(finite({ identifier: "Finite" })) {}

/**
 * @category number constructors
 * @since 3.10.0
 */
export class Int extends Number$.pipe(int({ identifier: "Int" })) {}

/**
 * @category number constructors
 * @since 3.10.0
 */
export class NonNaN extends Number$.pipe(nonNaN({ identifier: "NonNaN" })) {}

/**
 * @category number constructors
 * @since 3.10.0
 */
export class Positive extends Number$.pipe(
  positive({ identifier: "Positive" })
) {}

/**
 * @category number constructors
 * @since 3.10.0
 */
export class Negative extends Number$.pipe(
  negative({ identifier: "Negative" })
) {}

/**
 * @category number constructors
 * @since 3.10.0
 */
export class NonPositive extends Number$.pipe(
  nonPositive({ identifier: "NonPositive" })
) {}

/**
 * @category number constructors
 * @since 3.10.0
 */
export class NonNegative extends Number$.pipe(
  nonNegative({ identifier: "NonNegative" })
) {}

/**
 * @category schema id
 * @since 3.10.0
 */
export const JsonNumberSchemaId: unique symbol = schemaId_.JsonNumberSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type JsonNumberSchemaId = typeof JsonNumberSchemaId

/**
 * The `JsonNumber` is a schema for representing JSON numbers. It ensures that the provided value is a valid
 * number by filtering out `NaN` and `(+/-) Infinity`. This is useful when you want to validate and represent numbers in JSON
 * format.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as Schema from "effect/Schema"
 *
 * const is = Schema.is(Schema.JsonNumber)
 *
 * assert.deepStrictEqual(is(42), true)
 * assert.deepStrictEqual(is(Number.NaN), false)
 * assert.deepStrictEqual(is(Number.POSITIVE_INFINITY), false)
 * assert.deepStrictEqual(is(Number.NEGATIVE_INFINITY), false)
 * ```
 *
 * @category number constructors
 * @since 3.10.0
 */
export class JsonNumber extends Number$.pipe(
  finite({
    schemaId: JsonNumberSchemaId,
    identifier: "JsonNumber"
  })
) {}

/**
 * @category boolean transformations
 * @since 3.10.0
 */
export class Not extends transform(Boolean$.annotations({ description: "a boolean that will be negated" }), Boolean$, {
  strict: true,
  decode: (i) => boolean_.not(i),
  encode: (a) => boolean_.not(a)
}) {}

const encodeSymbol = (sym: symbol, ast: AST.AST) => {
  const key = Symbol.keyFor(sym)
  return key === undefined
    ? ParseResult.fail(
      new ParseResult.Type(ast, sym, `Unable to encode a unique symbol ${String(sym)} into a string`)
    )
    : ParseResult.succeed(key)
}

const decodeSymbol = (s: string) => ParseResult.succeed(Symbol.for(s))

/** @ignore */
class Symbol$ extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a globally shared symbol" }),
  SymbolFromSelf,
  {
    strict: false,
    decode: (i) => decodeSymbol(i),
    encode: (a, _, ast) => encodeSymbol(a, ast)
  }
).annotations({ identifier: "Symbol" }) {}

export {
  /**
   * Converts a string key into a globally shared symbol.
   *
   * @category symbol transformations
   * @since 3.10.0
   */
  Symbol$ as Symbol
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanBigIntSchemaId: unique symbol = schemaId_.GreaterThanBigintSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanBigIntSchemaId = typeof GreaterThanBigIntSchemaId

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const greaterThanBigInt = <S extends Schema.Any>(
  min: bigint,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a > min, {
      schemaId: GreaterThanBigIntSchemaId,
      [GreaterThanBigIntSchemaId]: { min },
      title: `greaterThanBigInt(${min})`,
      description: min === 0n ? "a positive bigint" : `a bigint greater than ${min}n`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanOrEqualToBigIntSchemaId: unique symbol = schemaId_.GreaterThanOrEqualToBigIntSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanOrEqualToBigIntSchemaId = typeof GreaterThanOrEqualToBigIntSchemaId

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const greaterThanOrEqualToBigInt = <S extends Schema.Any>(
  min: bigint,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a >= min, {
      schemaId: GreaterThanOrEqualToBigIntSchemaId,
      [GreaterThanOrEqualToBigIntSchemaId]: { min },
      title: `greaterThanOrEqualToBigInt(${min})`,
      description: min === 0n
        ? "a non-negative bigint"
        : `a bigint greater than or equal to ${min}n`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanBigIntSchemaId: unique symbol = schemaId_.LessThanBigIntSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanBigIntSchemaId = typeof LessThanBigIntSchemaId

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const lessThanBigInt = <S extends Schema.Any>(
  max: bigint,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a < max, {
      schemaId: LessThanBigIntSchemaId,
      [LessThanBigIntSchemaId]: { max },
      title: `lessThanBigInt(${max})`,
      description: max === 0n ? "a negative bigint" : `a bigint less than ${max}n`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanOrEqualToBigIntSchemaId: unique symbol = schemaId_.LessThanOrEqualToBigIntSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanOrEqualToBigIntSchemaId = typeof LessThanOrEqualToBigIntSchemaId

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const lessThanOrEqualToBigInt = <S extends Schema.Any>(
  max: bigint,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a <= max, {
      schemaId: LessThanOrEqualToBigIntSchemaId,
      [LessThanOrEqualToBigIntSchemaId]: { max },
      title: `lessThanOrEqualToBigInt(${max})`,
      description: max === 0n ? "a non-positive bigint" : `a bigint less than or equal to ${max}n`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const BetweenBigIntSchemaId: unique symbol = schemaId_.BetweenBigintSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type BetweenBigIntSchemaId = typeof BetweenBigIntSchemaId

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const betweenBigInt = <S extends Schema.Any>(
  min: bigint,
  max: bigint,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => a >= min && a <= max, {
      schemaId: BetweenBigIntSchemaId,
      [BetweenBigIntSchemaId]: { min, max },
      title: `betweenBigInt(${min}, ${max})`,
      description: `a bigint between ${min}n and ${max}n`,
      ...annotations
    })
  )

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const positiveBigInt = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  greaterThanBigInt(0n, { title: "positiveBigInt", ...annotations })

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const negativeBigInt = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  lessThanBigInt(0n, { title: "negativeBigInt", ...annotations })

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const nonNegativeBigInt = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  greaterThanOrEqualToBigInt(0n, { title: "nonNegativeBigInt", ...annotations })

/**
 * @category bigint filters
 * @since 3.10.0
 */
export const nonPositiveBigInt = <S extends Schema.Any>(
  annotations?: Annotations.Filter<Schema.Type<S>>
): <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S> =>
  lessThanOrEqualToBigInt(0n, { title: "nonPositiveBigInt", ...annotations })

/**
 * Clamps a bigint between a minimum and a maximum value.
 *
 * @category bigint transformations
 * @since 3.10.0
 */
export const clampBigInt = (minimum: bigint, maximum: bigint) =>
<S extends Schema.Any, A extends bigint>(
  self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
): transform<S, filter<SchemaClass<A>>> =>
  transform(
    self,
    self.pipe(typeSchema, betweenBigInt(minimum, maximum)),
    {
      strict: false,
      decode: (i) => bigInt_.clamp(i, { minimum, maximum }),
      encode: identity
    }
  )

/** @ignore */
class BigInt$ extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a bigint" }),
  BigIntFromSelf,
  {
    strict: true,
    decode: (i, _, ast) =>
      ParseResult.fromOption(
        bigInt_.fromString(i),
        () => new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a bigint`)
      ),
    encode: (a) => ParseResult.succeed(String(a))
  }
).annotations({ identifier: "BigInt" }) {}

export {
  /**
   * This schema transforms a `string` into a `bigint` by parsing the string using the `BigInt` function.
   *
   * It returns an error if the value can't be converted (for example when non-numeric characters are provided).
   *
   * @category bigint transformations
   * @since 3.10.0
   */
  BigInt$ as BigInt
}

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const PositiveBigIntFromSelf: filter<Schema<bigint>> = BigIntFromSelf.pipe(
  positiveBigInt({ identifier: "PositiveBigintFromSelf" })
)

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const PositiveBigInt: filter<Schema<bigint, string>> = BigInt$.pipe(
  positiveBigInt({ identifier: "PositiveBigint" })
)

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const NegativeBigIntFromSelf: filter<Schema<bigint>> = BigIntFromSelf.pipe(
  negativeBigInt({ identifier: "NegativeBigintFromSelf" })
)

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const NegativeBigInt: filter<Schema<bigint, string>> = BigInt$.pipe(
  negativeBigInt({ identifier: "NegativeBigint" })
)

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const NonPositiveBigIntFromSelf: filter<Schema<bigint>> = BigIntFromSelf.pipe(
  nonPositiveBigInt({ identifier: "NonPositiveBigintFromSelf" })
)

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const NonPositiveBigInt: filter<Schema<bigint, string>> = BigInt$.pipe(
  nonPositiveBigInt({ identifier: "NonPositiveBigint" })
)

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const NonNegativeBigIntFromSelf: filter<Schema<bigint>> = BigIntFromSelf.pipe(
  nonNegativeBigInt({ identifier: "NonNegativeBigintFromSelf" })
)

/**
 * @category bigint constructors
 * @since 3.10.0
 */
export const NonNegativeBigInt: filter<Schema<bigint, string>> = BigInt$.pipe(
  nonNegativeBigInt({ identifier: "NonNegativeBigint" })
)

/**
 * This schema transforms a `number` into a `bigint` by parsing the number using the `BigInt` function.
 *
 * It returns an error if the value can't be safely encoded as a `number` due to being out of range.
 *
 * @category bigint transformations
 * @since 3.10.0
 */
export class BigIntFromNumber extends transformOrFail(
  Number$.annotations({ description: "a number to be decoded into a bigint" }),
  BigIntFromSelf.pipe(betweenBigInt(BigInt(Number.MIN_SAFE_INTEGER), BigInt(Number.MAX_SAFE_INTEGER))),
  {
    strict: true,
    decode: (i, _, ast) =>
      ParseResult.fromOption(
        bigInt_.fromNumber(i),
        () => new ParseResult.Type(ast, i, `Unable to decode ${i} into a bigint`)
      ),
    encode: (a, _, ast) =>
      ParseResult.fromOption(
        bigInt_.toNumber(a),
        () => new ParseResult.Type(ast, a, `Unable to encode ${a}n into a number`)
      )
  }
).annotations({ identifier: "BigIntFromNumber" }) {}

const redactedArbitrary = <A>(value: LazyArbitrary<A>): LazyArbitrary<redacted_.Redacted<A>> => (fc) =>
  value(fc).map(redacted_.make)

const toComposite = <A, R, B>(
  eff: Effect.Effect<A, ParseResult.ParseIssue, R>,
  onSuccess: (a: A) => B,
  ast: AST.AST,
  actual: unknown
): Effect.Effect<B, ParseResult.Composite, R> =>
  ParseResult.mapBoth(eff, {
    onFailure: (e) => new ParseResult.Composite(ast, actual, e),
    onSuccess
  })

const redactedParse = <A, R>(
  decodeUnknown: ParseResult.DecodeUnknown<A, R>
): ParseResult.DeclarationDecodeUnknown<redacted_.Redacted<A>, R> =>
(u, options, ast) =>
  redacted_.isRedacted(u) ?
    toComposite(decodeUnknown(redacted_.value(u), options), redacted_.make, ast, u) :
    ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface RedactedFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    RedactedFromSelf<Value>,
    redacted_.Redacted<Schema.Type<Value>>,
    redacted_.Redacted<Schema.Encoded<Value>>,
    [Value]
  >
{}

/**
 * @category Redacted constructors
 * @since 3.10.0
 */
export const RedactedFromSelf = <Value extends Schema.Any>(value: Value): RedactedFromSelf<Value> =>
  declare(
    [value],
    {
      decode: (value) => redactedParse(ParseResult.decodeUnknown(value)),
      encode: (value) => redactedParse(ParseResult.encodeUnknown(value))
    },
    {
      typeConstructor: { _tag: "effect/Redacted" },
      description: "Redacted(<redacted>)",
      pretty: () => () => "Redacted(<redacted>)",
      arbitrary: redactedArbitrary,
      equivalence: redacted_.getEquivalence
    }
  )

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Redacted<Value extends Schema.Any>
  extends transform<Value, RedactedFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * A transformation that transform a `Schema<A, I, R>` into a
 * `RedactedFromSelf<A>`.
 *
 * @category Redacted transformations
 * @since 3.10.0
 */
export function Redacted<Value extends Schema.Any>(value: Value): Redacted<Value> {
  return transform(
    value,
    RedactedFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => redacted_.make(i),
      encode: (a) => redacted_.value(a)
    }
  )
}

/**
 * @category Duration constructors
 * @since 3.10.0
 */
export class DurationFromSelf extends declare(
  duration_.isDuration,
  {
    typeConstructor: { _tag: "effect/Duration" },
    identifier: "DurationFromSelf",
    pretty: (): pretty_.Pretty<duration_.Duration> => String,
    arbitrary: (): LazyArbitrary<duration_.Duration> => (fc) =>
      fc.oneof(
        fc.constant(duration_.infinity),
        fc.bigInt({ min: 0n }).map((_) => duration_.nanos(_)),
        fc.maxSafeNat().map((_) => duration_.millis(_))
      ),
    equivalence: (): Equivalence.Equivalence<duration_.Duration> => duration_.Equivalence
  }
) {}

/**
 * A schema that transforms a non negative `bigint` into a `Duration`. Treats
 * the value as the number of nanoseconds.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export class DurationFromNanos extends transformOrFail(
  NonNegativeBigIntFromSelf.annotations({ description: "a bigint to be decoded into a Duration" }),
  DurationFromSelf.pipe(filter((duration) => duration_.isFinite(duration), { description: "a finite duration" })),
  {
    strict: true,
    decode: (i) => ParseResult.succeed(duration_.nanos(i)),
    encode: (a, _, ast) =>
      option_.match(duration_.toNanos(a), {
        onNone: () => ParseResult.fail(new ParseResult.Type(ast, a, `Unable to encode ${a} into a bigint`)),
        onSome: (nanos) => ParseResult.succeed(nanos)
      })
  }
).annotations({ identifier: "DurationFromNanos" }) {}

/**
 * A non-negative integer. +Infinity is excluded.
 *
 * @category number constructors
 * @since 3.11.10
 */
export const NonNegativeInt = NonNegative.pipe(int()).annotations({ identifier: "NonNegativeInt" })

/**
 * A schema that transforms a (possibly Infinite) non negative number into a
 * `Duration`. Treats the value as the number of milliseconds.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export class DurationFromMillis extends transform(
  NonNegative.annotations({
    description: "a non-negative number to be decoded into a Duration"
  }),
  DurationFromSelf,
  {
    strict: true,
    decode: (i) => duration_.millis(i),
    encode: (a) => duration_.toMillis(a)
  }
).annotations({ identifier: "DurationFromMillis" }) {}

const DurationValueMillis = TaggedStruct("Millis", { millis: NonNegativeInt })
const DurationValueNanos = TaggedStruct("Nanos", { nanos: BigInt$ })
const DurationValueInfinity = TaggedStruct("Infinity", {})
const durationValueInfinity = DurationValueInfinity.make({})

/**
 * @category Duration utils
 * @since 3.12.8
 */
export type DurationEncoded =
  | {
    readonly _tag: "Millis"
    readonly millis: number
  }
  | {
    readonly _tag: "Nanos"
    readonly nanos: string
  }
  | {
    readonly _tag: "Infinity"
  }

const DurationValue: Schema<duration_.DurationValue, DurationEncoded> = Union(
  DurationValueMillis,
  DurationValueNanos,
  DurationValueInfinity
).annotations({
  identifier: "DurationValue",
  description: "an JSON-compatible tagged union to be decoded into a Duration"
})

const FiniteHRTime = Tuple(
  element(NonNegativeInt).annotations({ title: "seconds" }),
  element(NonNegativeInt).annotations({ title: "nanos" })
).annotations({ identifier: "FiniteHRTime" })

const InfiniteHRTime = Tuple(Literal(-1), Literal(0)).annotations({ identifier: "InfiniteHRTime" })

const HRTime: Schema<readonly [seconds: number, nanos: number]> = Union(FiniteHRTime, InfiniteHRTime).annotations({
  identifier: "HRTime",
  description: "a tuple of seconds and nanos to be decoded into a Duration"
})

const isDurationValue = (u: duration_.DurationValue | typeof HRTime.Type): u is duration_.DurationValue =>
  typeof u === "object"

// TODO(4.0): remove HRTime union member
/**
 * A schema that converts a JSON-compatible tagged union into a `Duration`.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export class Duration extends transform(
  Union(DurationValue, HRTime),
  DurationFromSelf,
  {
    strict: true,
    decode: (i) => {
      if (isDurationValue(i)) {
        switch (i._tag) {
          case "Millis":
            return duration_.millis(i.millis)
          case "Nanos":
            return duration_.nanos(i.nanos)
          case "Infinity":
            return duration_.infinity
        }
      }
      const [seconds, nanos] = i
      return seconds === -1 ? duration_.infinity : duration_.nanos(BigInt(seconds) * BigInt(1e9) + BigInt(nanos))
    },
    encode: (a) => {
      switch (a.value._tag) {
        case "Millis":
          return DurationValueMillis.make({ millis: a.value.millis })
        case "Nanos":
          return DurationValueNanos.make({ nanos: a.value.nanos })
        case "Infinity":
          return durationValueInfinity
      }
    }
  }
).annotations({ identifier: "Duration" }) {}

/**
 * Clamps a `Duration` between a minimum and a maximum value.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export const clampDuration =
  (minimum: duration_.DurationInput, maximum: duration_.DurationInput) =>
  <S extends Schema.Any, A extends duration_.Duration>(
    self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
  ): transform<S, filter<SchemaClass<A>>> =>
    transform(
      self,
      self.pipe(typeSchema, betweenDuration(minimum, maximum)),
      {
        strict: false,
        decode: (i) => duration_.clamp(i, { minimum, maximum }),
        encode: identity
      }
    )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanDurationSchemaId: unique symbol = Symbol.for("effect/SchemaId/LessThanDuration")

/**
 * @category Duration filters
 * @since 3.10.0
 */
export const lessThanDuration = <S extends Schema.Any>(
  max: duration_.DurationInput,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => duration_.lessThan(a, max), {
      schemaId: LessThanDurationSchemaId,
      [LessThanDurationSchemaId]: { max },
      title: `lessThanDuration(${max})`,
      description: `a Duration less than ${duration_.decode(max)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanOrEqualToDurationSchemaId: unique symbol = Symbol.for(
  "effect/schema/LessThanOrEqualToDuration"
)

/**
 * @category Duration filters
 * @since 3.10.0
 */
export const lessThanOrEqualToDuration = <S extends Schema.Any>(
  max: duration_.DurationInput,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => duration_.lessThanOrEqualTo(a, max), {
      schemaId: LessThanDurationSchemaId,
      [LessThanDurationSchemaId]: { max },
      title: `lessThanOrEqualToDuration(${max})`,
      description: `a Duration less than or equal to ${duration_.decode(max)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanDurationSchemaId: unique symbol = Symbol.for("effect/SchemaId/GreaterThanDuration")

/**
 * @category Duration filters
 * @since 3.10.0
 */
export const greaterThanDuration = <S extends Schema.Any>(
  min: duration_.DurationInput,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => duration_.greaterThan(a, min), {
      schemaId: GreaterThanDurationSchemaId,
      [GreaterThanDurationSchemaId]: { min },
      title: `greaterThanDuration(${min})`,
      description: `a Duration greater than ${duration_.decode(min)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanOrEqualToDurationSchemaId: unique symbol = Symbol.for(
  "effect/schema/GreaterThanOrEqualToDuration"
)

/**
 * @category Duration filters
 * @since 3.10.0
 */
export const greaterThanOrEqualToDuration = <S extends Schema.Any>(
  min: duration_.DurationInput,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => duration_.greaterThanOrEqualTo(a, min), {
      schemaId: GreaterThanOrEqualToDurationSchemaId,
      [GreaterThanOrEqualToDurationSchemaId]: { min },
      title: `greaterThanOrEqualToDuration(${min})`,
      description: `a Duration greater than or equal to ${duration_.decode(min)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const BetweenDurationSchemaId: unique symbol = Symbol.for("effect/SchemaId/BetweenDuration")

/**
 * @category Duration filters
 * @since 3.10.0
 */
export const betweenDuration = <S extends Schema.Any>(
  minimum: duration_.DurationInput,
  maximum: duration_.DurationInput,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a) => duration_.between(a, { minimum, maximum }), {
      schemaId: BetweenDurationSchemaId,
      [BetweenDurationSchemaId]: { maximum, minimum },
      title: `betweenDuration(${minimum}, ${maximum})`,
      description: `a Duration between ${duration_.decode(minimum)} and ${duration_.decode(maximum)}`,
      ...annotations
    })
  )

/**
 * @category Uint8Array constructors
 * @since 3.10.0
 */
export class Uint8ArrayFromSelf extends declare(
  Predicate.isUint8Array,
  {
    typeConstructor: { _tag: "Uint8Array" },
    identifier: "Uint8ArrayFromSelf",
    pretty: (): pretty_.Pretty<Uint8Array> => (u8arr) => `new Uint8Array(${JSON.stringify(Array.from(u8arr))})`,
    arbitrary: (): LazyArbitrary<Uint8Array> => (fc) => fc.uint8Array(),
    equivalence: (): Equivalence.Equivalence<Uint8Array> => array_.getEquivalence(Equal.equals) as any
  }
) {}

/**
 * @category number constructors
 * @since 3.11.10
 */
export class Uint8 extends Number$.pipe(
  between(0, 255, {
    identifier: "Uint8",
    description: "a 8-bit unsigned integer"
  })
) {}

/** @ignore */
class Uint8Array$ extends transform(
  Array$(Uint8).annotations({
    description: "an array of 8-bit unsigned integers to be decoded into a Uint8Array"
  }),
  Uint8ArrayFromSelf,
  {
    strict: true,
    decode: (i) => Uint8Array.from(i),
    encode: (a) => Array.from(a)
  }
).annotations({ identifier: "Uint8Array" }) {}

export {
  /**
   * A schema that transforms an array of numbers into a `Uint8Array`.
   *
   * @category Uint8Array transformations
   * @since 3.10.0
   */
  Uint8Array$ as Uint8Array
}

const makeUint8ArrayTransformation = (
  id: string,
  decode: (s: string) => either_.Either<Uint8Array, Encoding.DecodeException>,
  encode: (u: Uint8Array) => string
) =>
  transformOrFail(
    String$.annotations({ description: "a string to be decoded into a Uint8Array" }),
    Uint8ArrayFromSelf,
    {
      strict: true,
      decode: (i, _, ast) =>
        either_.mapLeft(
          decode(i),
          (decodeException) => new ParseResult.Type(ast, i, decodeException.message)
        ),
      encode: (a) => ParseResult.succeed(encode(a))
    }
  ).annotations({ identifier: id })

/**
 * Decodes a base64 (RFC4648) encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
export const Uint8ArrayFromBase64: Schema<Uint8Array, string> = makeUint8ArrayTransformation(
  "Uint8ArrayFromBase64",
  Encoding.decodeBase64,
  Encoding.encodeBase64
)

/**
 * Decodes a base64 (URL) encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
export const Uint8ArrayFromBase64Url: Schema<Uint8Array, string> = makeUint8ArrayTransformation(
  "Uint8ArrayFromBase64Url",
  Encoding.decodeBase64Url,
  Encoding.encodeBase64Url
)

/**
 * Decodes a hex encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
export const Uint8ArrayFromHex: Schema<Uint8Array, string> = makeUint8ArrayTransformation(
  "Uint8ArrayFromHex",
  Encoding.decodeHex,
  Encoding.encodeHex
)

const makeEncodingTransformation = (
  id: string,
  decode: (s: string) => either_.Either<string, Encoding.DecodeException>,
  encode: (u: string) => string
) =>
  transformOrFail(
    String$.annotations({
      description: `A string that is interpreted as being ${id}-encoded and will be decoded into a UTF-8 string`
    }),
    String$,
    {
      strict: true,
      decode: (i, _, ast) =>
        either_.mapLeft(
          decode(i),
          (decodeException) => new ParseResult.Type(ast, i, decodeException.message)
        ),
      encode: (a) => ParseResult.succeed(encode(a))
    }
  ).annotations({ identifier: `StringFrom${id}` })

/**
 * Decodes a base64 (RFC4648) encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export const StringFromBase64: Schema<string> = makeEncodingTransformation(
  "Base64",
  Encoding.decodeBase64String,
  Encoding.encodeBase64
)

/**
 * Decodes a base64 (URL) encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export const StringFromBase64Url: Schema<string> = makeEncodingTransformation(
  "Base64Url",
  Encoding.decodeBase64UrlString,
  Encoding.encodeBase64Url
)

/**
 * Decodes a hex encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export const StringFromHex: Schema<string> = makeEncodingTransformation(
  "Hex",
  Encoding.decodeHexString,
  Encoding.encodeHex
)

/**
 * Decodes a URI component encoded string into a UTF-8 string.
 * Can be used to store data in a URL.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * const PaginationSchema = Schema.Struct({
 *   maxItemPerPage: Schema.Number,
 *   page: Schema.Number
 * })
 *
 * const UrlSchema = Schema.compose(Schema.StringFromUriComponent, Schema.parseJson(PaginationSchema))
 *
 * console.log(Schema.encodeSync(UrlSchema)({ maxItemPerPage: 10, page: 1 }))
 * // Output: %7B%22maxItemPerPage%22%3A10%2C%22page%22%3A1%7D
 * ```
 *
 * @category string transformations
 * @since 3.12.0
 */
export const StringFromUriComponent = transformOrFail(
  String$.annotations({
    description: `A string that is interpreted as being UriComponent-encoded and will be decoded into a UTF-8 string`
  }),
  String$,
  {
    strict: true,
    decode: (i, _, ast) =>
      either_.mapLeft(
        Encoding.decodeUriComponent(i),
        (decodeException) => new ParseResult.Type(ast, i, decodeException.message)
      ),
    encode: (a, _, ast) =>
      either_.mapLeft(
        Encoding.encodeUriComponent(a),
        (encodeException) => new ParseResult.Type(ast, a, encodeException.message)
      )
  }
).annotations({ identifier: `StringFromUriComponent` })

/**
 * @category schema id
 * @since 3.10.0
 */
export const MinItemsSchemaId: unique symbol = schemaId_.MinItemsSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type MinItemsSchemaId = typeof MinItemsSchemaId

/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
export const minItems = <S extends Schema.Any>(
  n: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends ReadonlyArray<any>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const minItems = Math.floor(n)
  if (minItems < 1) {
    throw new Error(
      errors_.getInvalidArgumentErrorMessage(`Expected an integer greater than or equal to 1, actual ${n}`)
    )
  }
  return self.pipe(
    filter(
      (a) => a.length >= minItems,
      {
        schemaId: MinItemsSchemaId,
        title: `minItems(${minItems})`,
        description: `an array of at least ${minItems} item(s)`,
        jsonSchema: { minItems },
        [AST.StableFilterAnnotationId]: true,
        ...annotations
      }
    )
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const MaxItemsSchemaId: unique symbol = schemaId_.MaxItemsSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type MaxItemsSchemaId = typeof MaxItemsSchemaId

/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
export const maxItems = <S extends Schema.Any>(
  n: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends ReadonlyArray<any>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const maxItems = Math.floor(n)
  if (maxItems < 1) {
    throw new Error(
      errors_.getInvalidArgumentErrorMessage(`Expected an integer greater than or equal to 1, actual ${n}`)
    )
  }
  return self.pipe(
    filter((a) => a.length <= maxItems, {
      schemaId: MaxItemsSchemaId,
      title: `maxItems(${maxItems})`,
      description: `an array of at most ${maxItems} item(s)`,
      jsonSchema: { maxItems },
      [AST.StableFilterAnnotationId]: true,
      ...annotations
    })
  )
}

/**
 * @category schema id
 * @since 3.10.0
 */
export const ItemsCountSchemaId: unique symbol = schemaId_.ItemsCountSchemaId

/**
 * @category schema id
 * @since 3.10.0
 */
export type ItemsCountSchemaId = typeof ItemsCountSchemaId

/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
export const itemsCount = <S extends Schema.Any>(
  n: number,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends ReadonlyArray<any>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const itemsCount = Math.floor(n)
  if (itemsCount < 0) {
    throw new Error(
      errors_.getInvalidArgumentErrorMessage(`Expected an integer greater than or equal to 0, actual ${n}`)
    )
  }
  return self.pipe(
    filter((a) => a.length === itemsCount, {
      schemaId: ItemsCountSchemaId,
      title: `itemsCount(${itemsCount})`,
      description: `an array of exactly ${itemsCount} item(s)`,
      jsonSchema: { minItems: itemsCount, maxItems: itemsCount },
      [AST.StableFilterAnnotationId]: true,
      ...annotations
    })
  )
}

/**
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
export const getNumberIndexedAccess = <A extends ReadonlyArray<any>, I extends ReadonlyArray<any>, R>(
  self: Schema<A, I, R>
): SchemaClass<A[number], I[number], R> => make(AST.getNumberIndexedAccess(self.ast))

/**
 * Get the first element of a `ReadonlyArray`, or `None` if the array is empty.
 *
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
export function head<S extends Schema.Any, A extends ReadonlyArray<unknown>>(
  self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
): transform<S, OptionFromSelf<SchemaClass<A[number]>>> {
  return transform(
    self,
    OptionFromSelf(getNumberIndexedAccess(typeSchema(self))),
    {
      strict: false,
      decode: (i) => array_.head(i),
      encode: (a) =>
        option_.match(a, {
          onNone: () => [],
          onSome: array_.of
        })
    }
  )
}

/**
 * Get the first element of a `NonEmptyReadonlyArray`.
 *
 * @category NonEmptyReadonlyArray transformations
 * @since 3.12.0
 */
export function headNonEmpty<S extends Schema.Any, A extends array_.NonEmptyReadonlyArray<unknown>>(
  self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
): transform<S, SchemaClass<A[number]>> {
  return transform(
    self,
    getNumberIndexedAccess(typeSchema(self)),
    {
      strict: false,
      decode: (i) => array_.headNonEmpty(i),
      encode: (a) => array_.of(a)
    }
  )
}

/**
 * Retrieves the first element of a `ReadonlyArray`.
 *
 * If the array is empty, it returns the `fallback` argument if provided; otherwise, it fails.
 *
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
export const headOrElse: {
  /**
   * Retrieves the first element of a `ReadonlyArray`.
   *
   * If the array is empty, it returns the `fallback` argument if provided; otherwise, it fails.
   *
   * @category ReadonlyArray transformations
   * @since 3.10.0
   */
  <S extends Schema.Any, A extends ReadonlyArray<unknown>>(fallback?: LazyArg<A[number]>): (
    self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
  ) => transform<S, SchemaClass<A[number]>>
  /**
   * Retrieves the first element of a `ReadonlyArray`.
   *
   * If the array is empty, it returns the `fallback` argument if provided; otherwise, it fails.
   *
   * @category ReadonlyArray transformations
   * @since 3.10.0
   */
  <S extends Schema.Any, A extends ReadonlyArray<unknown>>(
    self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>,
    fallback?: LazyArg<A[number]>
  ): transform<S, SchemaClass<A[number]>>
} = dual(
  (args) => isSchema(args[0]),
  <A, I, R>(
    self: Schema<ReadonlyArray<A>, I, R>,
    fallback?: LazyArg<A>
  ): transform<Schema<ReadonlyArray<A>, I, R>, SchemaClass<A>> =>
    transformOrFail(
      self,
      getNumberIndexedAccess(typeSchema(self)),
      {
        strict: true,
        decode: (i, _, ast) =>
          i.length > 0
            ? ParseResult.succeed(i[0])
            : fallback
            ? ParseResult.succeed(fallback())
            : ParseResult.fail(new ParseResult.Type(ast, i, "Unable to retrieve the first element of an empty array")),
        encode: (a) => ParseResult.succeed(array_.of(a))
      }
    )
)

/**
 * @category schema id
 * @since 3.10.0
 */
export const ValidDateSchemaId: unique symbol = Symbol.for("effect/SchemaId/ValidDate")

/**
 * Defines a filter that specifically rejects invalid dates, such as `new
 * Date("Invalid Date")`. This filter ensures that only properly formatted and
 * valid date objects are accepted, enhancing data integrity by preventing
 * erroneous date values from being processed.
 *
 * @category Date filters
 * @since 3.10.0
 */
export const validDate =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => !Number.isNaN(a.getTime()), {
        schemaId: ValidDateSchemaId,
        [ValidDateSchemaId]: { noInvalidDate: true },
        title: "validDate",
        description: "a valid Date",
        ...annotations
      })
    )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanDateSchemaId: unique symbol = Symbol.for("effect/SchemaId/LessThanDate")

/**
 * @category Date filters
 * @since 3.10.0
 */
export const lessThanDate = <S extends Schema.Any>(
  max: Date,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a: Date) => a < max, {
      schemaId: LessThanDateSchemaId,
      [LessThanDateSchemaId]: { max },
      title: `lessThanDate(${Inspectable.formatDate(max)})`,
      description: `a date before ${Inspectable.formatDate(max)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanOrEqualToDateSchemaId: unique symbol = Symbol.for(
  "effect/schema/LessThanOrEqualToDate"
)

/**
 * @category Date filters
 * @since 3.10.0
 */
export const lessThanOrEqualToDate = <S extends Schema.Any>(
  max: Date,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a: Date) => a <= max, {
      schemaId: LessThanOrEqualToDateSchemaId,
      [LessThanOrEqualToDateSchemaId]: { max },
      title: `lessThanOrEqualToDate(${Inspectable.formatDate(max)})`,
      description: `a date before or equal to ${Inspectable.formatDate(max)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanDateSchemaId: unique symbol = Symbol.for("effect/SchemaId/GreaterThanDate")

/**
 * @category Date filters
 * @since 3.10.0
 */
export const greaterThanDate = <S extends Schema.Any>(
  min: Date,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a: Date) => a > min, {
      schemaId: GreaterThanDateSchemaId,
      [GreaterThanDateSchemaId]: { min },
      title: `greaterThanDate(${Inspectable.formatDate(min)})`,
      description: `a date after ${Inspectable.formatDate(min)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanOrEqualToDateSchemaId: unique symbol = Symbol.for(
  "effect/schema/GreaterThanOrEqualToDate"
)

/**
 * @category Date filters
 * @since 3.10.0
 */
export const greaterThanOrEqualToDate = <S extends Schema.Any>(
  min: Date,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a: Date) => a >= min, {
      schemaId: GreaterThanOrEqualToDateSchemaId,
      [GreaterThanOrEqualToDateSchemaId]: { min },
      title: `greaterThanOrEqualToDate(${Inspectable.formatDate(min)})`,
      description: `a date after or equal to ${Inspectable.formatDate(min)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.10.0
 */
export const BetweenDateSchemaId: unique symbol = Symbol.for("effect/SchemaId/BetweenDate")

/**
 * @category Date filters
 * @since 3.10.0
 */
export const betweenDate = <S extends Schema.Any>(
  min: Date,
  max: Date,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
  self.pipe(
    filter((a: Date) => a <= max && a >= min, {
      schemaId: BetweenDateSchemaId,
      [BetweenDateSchemaId]: { max, min },
      title: `betweenDate(${Inspectable.formatDate(min)}, ${Inspectable.formatDate(max)})`,
      description: `a date between ${Inspectable.formatDate(min)} and ${Inspectable.formatDate(max)}`,
      ...annotations
    })
  )

/**
 * @category schema id
 * @since 3.11.8
 */
export const DateFromSelfSchemaId: unique symbol = schemaId_.DateFromSelfSchemaId

/**
 * @category schema id
 * @since 3.11.8
 */
export type DateFromSelfSchemaId = typeof DateFromSelfSchemaId

/**
 * Describes a schema that accommodates potentially invalid `Date` instances,
 * such as `new Date("Invalid Date")`, without rejection.
 *
 * @category Date constructors
 * @since 3.10.0
 */
export class DateFromSelf extends declare(
  Predicate.isDate,
  {
    typeConstructor: { _tag: "Date" },
    identifier: "DateFromSelf",
    schemaId: DateFromSelfSchemaId,
    [DateFromSelfSchemaId]: { noInvalidDate: false },
    description: "a potentially invalid Date instance",
    pretty: () => (date) => `new Date(${JSON.stringify(date)})`,
    arbitrary: () => (fc) => fc.date({ noInvalidDate: false }),
    equivalence: () => Equivalence.Date
  }
) {}

/**
 * Defines a schema that ensures only valid dates are accepted. This schema
 * rejects values like `new Date("Invalid Date")`, which, despite being a `Date`
 * instance, represents an invalid date. Such stringent validation ensures that
 * all date objects processed through this schema are properly formed and
 * represent real dates.
 *
 * @category Date constructors
 * @since 3.10.0
 */
export class ValidDateFromSelf extends DateFromSelf.pipe(
  validDate({
    identifier: "ValidDateFromSelf",
    description: "a valid Date instance"
  })
) {}

/**
 * Defines a schema that attempts to convert a `string` to a `Date` object using
 * the `new Date` constructor. This conversion is lenient, meaning it does not
 * reject strings that do not form valid dates (e.g., using `new Date("Invalid
 * Date")` results in a `Date` object, despite being invalid).
 *
 * @category Date transformations
 * @since 3.10.0
 */
export class DateFromString extends transform(
  String$.annotations({ description: "a string to be decoded into a Date" }),
  DateFromSelf,
  {
    strict: true,
    decode: (i) => new Date(i),
    encode: (a) => Inspectable.formatDate(a)
  }
).annotations({ identifier: "DateFromString" }) {}

/** @ignore */
class Date$ extends DateFromString.pipe(
  validDate({ identifier: "Date" })
) {}

export {
  /**
   * This schema converts a `string` into a `Date` object using the `new Date`
   * constructor. It ensures that only valid date strings are accepted,
   * rejecting any strings that would result in an invalid date, such as `new
   * Date("Invalid Date")`.
   *
   * @category Date transformations
   * @since 3.10.0
   */
  Date$ as Date
}

/**
 * Defines a schema that converts a `number` into a `Date` object using the `new
 * Date` constructor. This schema does not validate the numerical input,
 * allowing potentially invalid values such as `NaN`, `Infinity`, and
 * `-Infinity` to be converted into `Date` objects. During the encoding process,
 * any invalid `Date` object will be encoded to `NaN`.
 *
 * @category Date transformations
 * @since 3.10.0
 */
export class DateFromNumber extends transform(
  Number$.annotations({ description: "a number to be decoded into a Date" }),
  DateFromSelf,
  {
    strict: true,
    decode: (i) => new Date(i),
    encode: (a) => a.getTime()
  }
).annotations({ identifier: "DateFromNumber" }) {}

/**
 * Describes a schema that represents a `DateTime.Utc` instance.
 *
 * @category DateTime.Utc constructors
 * @since 3.10.0
 */
export class DateTimeUtcFromSelf extends declare(
  (u) => dateTime.isDateTime(u) && dateTime.isUtc(u),
  {
    typeConstructor: { _tag: "effect/DateTime.Utc" },
    identifier: "DateTimeUtcFromSelf",
    description: "a DateTime.Utc instance",
    pretty: (): pretty_.Pretty<dateTime.Utc> => (dateTime) => dateTime.toString(),
    arbitrary: (): LazyArbitrary<dateTime.Utc> => (fc) =>
      fc.date({ noInvalidDate: true }).map((date) => dateTime.unsafeFromDate(date)),
    equivalence: () => dateTime.Equivalence
  }
) {}

const decodeDateTimeUtc = <A extends dateTime.DateTime.Input>(input: A, ast: AST.AST) =>
  ParseResult.try({
    try: () => dateTime.unsafeMake(input),
    catch: () =>
      new ParseResult.Type(ast, input, `Unable to decode ${Inspectable.formatUnknown(input)} into a DateTime.Utc`)
  })

/**
 * Defines a schema that attempts to convert a `number` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.10.0
 */
export class DateTimeUtcFromNumber extends transformOrFail(
  Number$.annotations({ description: "a number to be decoded into a DateTime.Utc" }),
  DateTimeUtcFromSelf,
  {
    strict: true,
    decode: (i, _, ast) => decodeDateTimeUtc(i, ast),
    encode: (a) => ParseResult.succeed(dateTime.toEpochMillis(a))
  }
).annotations({ identifier: "DateTimeUtcFromNumber" }) {}

/**
 * Defines a schema that attempts to convert a `Date` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.12.0
 */
export class DateTimeUtcFromDate extends transformOrFail(
  DateFromSelf.annotations({ description: "a Date to be decoded into a DateTime.Utc" }),
  DateTimeUtcFromSelf,
  {
    strict: true,
    decode: (i, _, ast) => decodeDateTimeUtc(i, ast),
    encode: (a) => ParseResult.succeed(dateTime.toDateUtc(a))
  }
).annotations({ identifier: "DateTimeUtcFromDate" }) {}

/**
 * Defines a schema that attempts to convert a `string` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.10.0
 */
export class DateTimeUtc extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a DateTime.Utc" }),
  DateTimeUtcFromSelf,
  {
    strict: true,
    decode: (i, _, ast) => decodeDateTimeUtc(i, ast),
    encode: (a) => ParseResult.succeed(dateTime.formatIso(a))
  }
).annotations({ identifier: "DateTimeUtc" }) {}

const timeZoneOffsetArbitrary = (): LazyArbitrary<dateTime.TimeZone.Offset> => (fc) =>
  fc.integer({ min: -12 * 60 * 60 * 1000, max: 14 * 60 * 60 * 1000 }).map(dateTime.zoneMakeOffset)

/**
 * Describes a schema that represents a `TimeZone.Offset` instance.
 *
 * @category TimeZone constructors
 * @since 3.10.0
 */
export class TimeZoneOffsetFromSelf extends declare(
  dateTime.isTimeZoneOffset,
  {
    typeConstructor: { _tag: "effect/DateTime.TimeZone.Offset" },
    identifier: "TimeZoneOffsetFromSelf",
    description: "a TimeZone.Offset instance",
    pretty: (): pretty_.Pretty<dateTime.TimeZone.Offset> => (zone) => zone.toString(),
    arbitrary: timeZoneOffsetArbitrary
  }
) {}

/**
 * Defines a schema that converts a `number` to a `TimeZone.Offset` instance using the `DateTime.zoneMakeOffset` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
export class TimeZoneOffset extends transform(
  Number$.annotations({ description: "a number to be decoded into a TimeZone.Offset" }),
  TimeZoneOffsetFromSelf,
  {
    strict: true,
    decode: (i) => dateTime.zoneMakeOffset(i),
    encode: (a) => a.offset
  }
).annotations({ identifier: "TimeZoneOffset" }) {}

const timeZoneNamedArbitrary = (): LazyArbitrary<dateTime.TimeZone.Named> => (fc) =>
  fc.constantFrom(...Intl.supportedValuesOf("timeZone")).map(dateTime.zoneUnsafeMakeNamed)

/**
 * Describes a schema that represents a `TimeZone.Named` instance.
 *
 * @category TimeZone constructors
 * @since 3.10.0
 */
export class TimeZoneNamedFromSelf extends declare(
  dateTime.isTimeZoneNamed,
  {
    typeConstructor: { _tag: "effect/DateTime.TimeZone.Named" },
    identifier: "TimeZoneNamedFromSelf",
    description: "a TimeZone.Named instance",
    pretty: (): pretty_.Pretty<dateTime.TimeZone.Named> => (zone) => zone.toString(),
    arbitrary: timeZoneNamedArbitrary
  }
) {}

/**
 * Defines a schema that attempts to convert a `string` to a `TimeZone.Named` instance using the `DateTime.zoneUnsafeMakeNamed` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
export class TimeZoneNamed extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a TimeZone.Named" }),
  TimeZoneNamedFromSelf,
  {
    strict: true,
    decode: (i, _, ast) =>
      ParseResult.try({
        try: () => dateTime.zoneUnsafeMakeNamed(i),
        catch: () => new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a TimeZone.Named`)
      }),
    encode: (a) => ParseResult.succeed(a.id)
  }
).annotations({ identifier: "TimeZoneNamed" }) {}

/**
 * @category TimeZone constructors
 * @since 3.10.0
 */
export class TimeZoneFromSelf extends Union(TimeZoneOffsetFromSelf, TimeZoneNamedFromSelf) {}

/**
 * Defines a schema that attempts to convert a `string` to a `TimeZone` using the `DateTime.zoneFromString` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
export class TimeZone extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a TimeZone" }),
  TimeZoneFromSelf,
  {
    strict: true,
    decode: (i, _, ast) =>
      option_.match(dateTime.zoneFromString(i), {
        onNone: () =>
          ParseResult.fail(new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a TimeZone`)),
        onSome: ParseResult.succeed
      }),
    encode: (a) => ParseResult.succeed(dateTime.zoneToString(a))
  }
).annotations({ identifier: "TimeZone" }) {}

const timeZoneArbitrary: LazyArbitrary<dateTime.TimeZone> = (fc) =>
  fc.oneof(
    timeZoneOffsetArbitrary()(fc),
    timeZoneNamedArbitrary()(fc)
  )

/**
 * Describes a schema that represents a `DateTime.Zoned` instance.
 *
 * @category DateTime.Zoned constructors
 * @since 3.10.0
 */
export class DateTimeZonedFromSelf extends declare(
  (u) => dateTime.isDateTime(u) && dateTime.isZoned(u),
  {
    typeConstructor: { _tag: "effect/DateTime.Zoned" },
    identifier: "DateTimeZonedFromSelf",
    description: "a DateTime.Zoned instance",
    pretty: (): pretty_.Pretty<dateTime.Zoned> => (dateTime) => dateTime.toString(),
    arbitrary: (): LazyArbitrary<dateTime.Zoned> => (fc) =>
      fc.tuple(
        fc.integer({
          // time zone db supports +/- 1000 years or so
          min: -31536000000000,
          max: 31536000000000
        }),
        timeZoneArbitrary(fc)
      ).map(([millis, timeZone]) => dateTime.unsafeMakeZoned(millis, { timeZone })),
    equivalence: () => dateTime.Equivalence
  }
) {}

/**
 * Defines a schema that attempts to convert a `string` to a `DateTime.Zoned` instance.
 *
 * @category DateTime.Zoned transformations
 * @since 3.10.0
 */
export class DateTimeZoned extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a DateTime.Zoned" }),
  DateTimeZonedFromSelf,
  {
    strict: true,
    decode: (i, _, ast) =>
      option_.match(dateTime.makeZonedFromString(i), {
        onNone: () =>
          ParseResult.fail(new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a DateTime.Zoned`)),
        onSome: ParseResult.succeed
      }),
    encode: (a) => ParseResult.succeed(dateTime.formatIsoZoned(a))
  }
).annotations({ identifier: "DateTimeZoned" }) {}

/**
 * @category Option utils
 * @since 3.10.0
 */
export type OptionEncoded<I> =
  | {
    readonly _tag: "None"
  }
  | {
    readonly _tag: "Some"
    readonly value: I
  }

const OptionNoneEncoded = Struct({
  _tag: Literal("None")
}).annotations({ description: "NoneEncoded" })

const optionSomeEncoded = <Value extends Schema.Any>(value: Value) =>
  Struct({
    _tag: Literal("Some"),
    value
  }).annotations({ description: `SomeEncoded<${format(value)}>` })

const optionEncoded = <Value extends Schema.Any>(value: Value) =>
  Union(
    OptionNoneEncoded,
    optionSomeEncoded(value)
  ).annotations({
    description: `OptionEncoded<${format(value)}>`
  })

const optionDecode = <A>(input: OptionEncoded<A>): option_.Option<A> =>
  input._tag === "None" ? option_.none() : option_.some(input.value)

const optionArbitrary =
  <A>(value: LazyArbitrary<A>, ctx: ArbitraryGenerationContext): LazyArbitrary<option_.Option<A>> => (fc) =>
    fc.oneof(
      ctx,
      fc.record({ _tag: fc.constant("None" as const) }),
      fc.record({ _tag: fc.constant("Some" as const), value: value(fc) })
    ).map(optionDecode)

const optionPretty = <A>(value: pretty_.Pretty<A>): pretty_.Pretty<option_.Option<A>> =>
  option_.match({
    onNone: () => "none()",
    onSome: (a) => `some(${value(a)})`
  })

const optionParse =
  <A, R>(decodeUnknown: ParseResult.DecodeUnknown<A, R>): ParseResult.DeclarationDecodeUnknown<option_.Option<A>, R> =>
  (u, options, ast) =>
    option_.isOption(u) ?
      option_.isNone(u) ?
        ParseResult.succeed(option_.none())
        : toComposite(decodeUnknown(u.value, options), option_.some, ast, u)
      : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    OptionFromSelf<Value>,
    option_.Option<Schema.Type<Value>>,
    option_.Option<Schema.Encoded<Value>>,
    [Value]
  >
{}

const OptionFromSelf_ = <Value extends Schema.Any>(value: Value): OptionFromSelf<Value> => {
  return declare(
    [value],
    {
      decode: (value) => optionParse(ParseResult.decodeUnknown(value)),
      encode: (value) => optionParse(ParseResult.encodeUnknown(value))
    },
    {
      typeConstructor: { _tag: "effect/Option" },
      pretty: optionPretty,
      arbitrary: optionArbitrary,
      equivalence: option_.getEquivalence
    }
  )
}

/**
 * @category Option transformations
 * @since 3.10.0
 */
export const OptionFromSelf = <Value extends Schema.Any>(value: Value): OptionFromSelf<Value> => {
  return OptionFromSelf_(value).annotations({ description: `Option<${format(value)}>` })
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Option<Value extends Schema.Any> extends
  transform<
    Union<[
      Struct<{ _tag: Literal<["None"]> }>,
      Struct<{ _tag: Literal<["Some"]>; value: Value }>
    ]>,
    OptionFromSelf<SchemaClass<Schema.Type<Value>>>
  >
{}

const makeNoneEncoded = {
  _tag: "None"
} as const

const makeSomeEncoded = <A>(value: A) => ({
  _tag: "Some",
  value
} as const)

/**
 * @category Option transformations
 * @since 3.10.0
 */
export function Option<Value extends Schema.Any>(value: Value): Option<Value> {
  const value_ = asSchema(value)
  const out = transform(
    optionEncoded(value_),
    OptionFromSelf(typeSchema(value_)),
    {
      strict: true,
      decode: (i) => optionDecode(i),
      encode: (a) =>
        option_.match(a, {
          onNone: () => makeNoneEncoded,
          onSome: makeSomeEncoded
        })
    }
  )
  return out as any
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromNullOr<Value extends Schema.Any>
  extends transform<NullOr<Value>, OptionFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category Option transformations
 * @since 3.10.0
 */
export function OptionFromNullOr<Value extends Schema.Any>(value: Value): OptionFromNullOr<Value> {
  return transform(NullOr(value), OptionFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: (i) => option_.fromNullable(i),
    encode: (a) => option_.getOrNull(a)
  })
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromNullishOr<Value extends Schema.Any>
  extends transform<NullishOr<Value>, OptionFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category Option transformations
 * @since 3.10.0
 */
export function OptionFromNullishOr<Value extends Schema.Any>(
  value: Value,
  onNoneEncoding: null | undefined
): OptionFromNullishOr<Value> {
  return transform(
    NullishOr(value),
    OptionFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => option_.fromNullable(i),
      encode: onNoneEncoding === null ?
        (a) => option_.getOrNull(a) :
        (a) => option_.getOrUndefined(a)
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromUndefinedOr<Value extends Schema.Any>
  extends transform<UndefinedOr<Value>, OptionFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category Option transformations
 * @since 3.10.0
 */
export function OptionFromUndefinedOr<Value extends Schema.Any>(value: Value): OptionFromUndefinedOr<Value> {
  return transform(UndefinedOr(value), OptionFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: (i) => option_.fromNullable(i),
    encode: (a) => option_.getOrUndefined(a)
  })
}

/**
 * Transforms strings into an Option type, effectively filtering out empty or
 * whitespace-only strings by trimming them and checking their length. Returns
 * `none` for invalid inputs and `some` for valid non-empty strings.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)("")) // Option.none()
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)(" a ")) // Option.some("a")
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)("a")) // Option.some("a")
 * ```
 *
 * @category Option transformations
 * @since 3.10.0
 */
export class OptionFromNonEmptyTrimmedString extends transform(String$, OptionFromSelf(NonEmptyTrimmedString), {
  strict: true,
  decode: (i) => option_.filter(option_.some(i.trim()), string_.isNonEmpty),
  encode: (a) => option_.getOrElse(a, () => "")
}) {}

/**
 * @category Either utils
 * @since 3.10.0
 */
export type RightEncoded<IA> = {
  readonly _tag: "Right"
  readonly right: IA
}

/**
 * @category Either utils
 * @since 3.10.0
 */
export type LeftEncoded<IE> = {
  readonly _tag: "Left"
  readonly left: IE
}

/**
 * @category Either utils
 * @since 3.10.0
 */
export type EitherEncoded<IR, IL> = RightEncoded<IR> | LeftEncoded<IL>

const rightEncoded = <Right extends Schema.All>(right: Right) =>
  Struct({
    _tag: Literal("Right"),
    right
  }).annotations({ description: `RightEncoded<${format(right)}>` })

const leftEncoded = <Left extends Schema.All>(left: Left) =>
  Struct({
    _tag: Literal("Left"),
    left
  }).annotations({ description: `LeftEncoded<${format(left)}>` })

const eitherEncoded = <Right extends Schema.All, Left extends Schema.All>(
  right: Right,
  left: Left
) =>
  Union(rightEncoded(right), leftEncoded(left)).annotations({
    description: `EitherEncoded<${format(left)}, ${format(right)}>`
  })

const eitherDecode = <R, L>(input: EitherEncoded<R, L>): either_.Either<R, L> =>
  input._tag === "Left" ? either_.left(input.left) : either_.right(input.right)

const eitherArbitrary = <R, L>(
  right: LazyArbitrary<R>,
  left: LazyArbitrary<L>
): LazyArbitrary<either_.Either<R, L>> =>
(fc) =>
  fc.oneof(
    fc.record({ _tag: fc.constant("Left" as const), left: left(fc) }),
    fc.record({ _tag: fc.constant("Right" as const), right: right(fc) })
  ).map(eitherDecode)

const eitherPretty = <R, L>(
  right: pretty_.Pretty<R>,
  left: pretty_.Pretty<L>
): pretty_.Pretty<either_.Either<R, L>> =>
  either_.match({
    onLeft: (e) => `left(${left(e)})`,
    onRight: (a) => `right(${right(a)})`
  })

const eitherParse = <RR, R, LR, L>(
  parseRight: ParseResult.DecodeUnknown<R, RR>,
  decodeUnknownLeft: ParseResult.DecodeUnknown<L, LR>
): ParseResult.DeclarationDecodeUnknown<either_.Either<R, L>, LR | RR> =>
(u, options, ast) =>
  either_.isEither(u) ?
    either_.match(u, {
      onLeft: (left) => toComposite(decodeUnknownLeft(left, options), either_.left, ast, u),
      onRight: (right) => toComposite(parseRight(right, options), either_.right, ast, u)
    })
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface EitherFromSelf<R extends Schema.All, L extends Schema.All> extends
  AnnotableDeclare<
    EitherFromSelf<R, L>,
    either_.Either<Schema.Type<R>, Schema.Type<L>>,
    either_.Either<Schema.Encoded<R>, Schema.Encoded<L>>,
    [R, L]
  >
{}

/**
 * @category Either transformations
 * @since 3.10.0
 */
export const EitherFromSelf = <R extends Schema.All, L extends Schema.All>({ left, right }: {
  readonly left: L
  readonly right: R
}): EitherFromSelf<R, L> => {
  return declare(
    [right, left],
    {
      decode: (right, left) => eitherParse(ParseResult.decodeUnknown(right), ParseResult.decodeUnknown(left)),
      encode: (right, left) => eitherParse(ParseResult.encodeUnknown(right), ParseResult.encodeUnknown(left))
    },
    {
      typeConstructor: { _tag: "effect/Either" },
      description: `Either<${format(right)}, ${format(left)}>`,
      pretty: eitherPretty,
      arbitrary: eitherArbitrary,
      equivalence: (right, left) => either_.getEquivalence({ left, right })
    }
  )
}

const makeLeftEncoded = <E>(left: E) => (({
  _tag: "Left",
  left
}) as const)
const makeRightEncoded = <A>(right: A) => (({
  _tag: "Right",
  right
}) as const)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Either<Right extends Schema.All, Left extends Schema.All> extends
  transform<
    Union<[
      Struct<{
        _tag: Literal<["Right"]>
        right: Right
      }>,
      Struct<{
        _tag: Literal<["Left"]>
        left: Left
      }>
    ]>,
    EitherFromSelf<SchemaClass<Schema.Type<Right>>, SchemaClass<Schema.Type<Left>>>
  >
{}

/**
 * @category Either transformations
 * @since 3.10.0
 */
export const Either = <R extends Schema.All, L extends Schema.All>({ left, right }: {
  readonly left: L
  readonly right: R
}): Either<R, L> => {
  const right_ = asSchema(right)
  const left_ = asSchema(left)
  const out = transform(
    eitherEncoded(right_, left_),
    EitherFromSelf({ left: typeSchema(left_), right: typeSchema(right_) }),
    {
      strict: true,
      decode: (i) => eitherDecode(i),
      encode: (a) =>
        either_.match(a, {
          onLeft: makeLeftEncoded,
          onRight: makeRightEncoded
        })
    }
  )
  return out as any
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface EitherFromUnion<Right extends Schema.All, Left extends Schema.All> extends
  transform<
    Union<[
      transform<Right, Struct<{ _tag: Literal<["Right"]>; right: SchemaClass<Schema.Type<Right>> }>>,
      transform<Left, Struct<{ _tag: Literal<["Left"]>; right: SchemaClass<Schema.Type<Left>> }>>
    ]>,
    EitherFromSelf<SchemaClass<Schema.Type<Right>>, SchemaClass<Schema.Type<Left>>>
  >
{}

/**
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * // Schema<string | number, Either<string, number>>
 * Schema.EitherFromUnion({ left: Schema.String, right: Schema.Number })
 * ```
 *
 * @category Either transformations
 * @since 3.10.0
 */
export const EitherFromUnion = <Right extends Schema.All, Left extends Schema.All>({ left, right }: {
  readonly left: Left
  readonly right: Right
}): EitherFromUnion<Right, Left> => {
  const right_ = asSchema(right)
  const left_ = asSchema(left)
  const toright = typeSchema(right_)
  const toleft = typeSchema(left_)
  const fromRight = transform(right_, rightEncoded(toright), {
    strict: true,
    decode: (i) => makeRightEncoded(i),
    encode: (a) => a.right
  })
  const fromLeft = transform(left_, leftEncoded(toleft), {
    strict: true,
    decode: (i) => makeLeftEncoded(i),
    encode: (a) => a.left
  })
  const out = transform(
    Union(fromRight, fromLeft),
    EitherFromSelf({ left: toleft, right: toright }),
    {
      strict: true,
      decode: (i) => i._tag === "Left" ? either_.left(i.left) : either_.right(i.right),
      encode: (a) =>
        either_.match(a, {
          onLeft: makeLeftEncoded,
          onRight: makeRightEncoded
        })
    }
  )
  return out as any
}

const mapArbitrary = <K, V>(
  key: LazyArbitrary<K>,
  value: LazyArbitrary<V>,
  ctx: ArbitraryGenerationContext
): LazyArbitrary<Map<K, V>> => {
  return (fc) => {
    const items = fc.array(fc.tuple(key(fc), value(fc)))
    return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map((as) => new Map(as))
  }
}

const readonlyMapPretty = <K, V>(
  key: pretty_.Pretty<K>,
  value: pretty_.Pretty<V>
): pretty_.Pretty<ReadonlyMap<K, V>> =>
(map) =>
  `new Map([${
    Array.from(map.entries())
      .map(([k, v]) => `[${key(k)}, ${value(v)}]`)
      .join(", ")
  }])`

const readonlyMapEquivalence = <K, V>(
  key: Equivalence.Equivalence<K>,
  value: Equivalence.Equivalence<V>
): Equivalence.Equivalence<ReadonlyMap<K, V>> => {
  const arrayEquivalence = array_.getEquivalence(
    Equivalence.make<[K, V]>(([ka, va], [kb, vb]) => key(ka, kb) && value(va, vb))
  )
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a.entries()), Array.from(b.entries())))
}

const readonlyMapParse = <R, K, V>(
  decodeUnknown: ParseResult.DecodeUnknown<ReadonlyArray<readonly [K, V]>, R>
): ParseResult.DeclarationDecodeUnknown<ReadonlyMap<K, V>, R> =>
(u, options, ast) =>
  Predicate.isMap(u) ?
    toComposite(decodeUnknown(Array.from(u.entries()), options), (as) => new Map(as), ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlyMapFromSelf<K extends Schema.Any, V extends Schema.Any> extends
  AnnotableDeclare<
    ReadonlyMapFromSelf<K, V>,
    ReadonlyMap<Schema.Type<K>, Schema.Type<V>>,
    ReadonlyMap<Schema.Encoded<K>, Schema.Encoded<V>>,
    [K, V]
  >
{}

const mapFromSelf_ = <K extends Schema.Any, V extends Schema.Any>(
  key: K,
  value: V,
  description: string
): ReadonlyMapFromSelf<K, V> =>
  declare(
    [key, value],
    {
      decode: (Key, Value) => readonlyMapParse(ParseResult.decodeUnknown(Array$(Tuple(Key, Value)))),
      encode: (Key, Value) => readonlyMapParse(ParseResult.encodeUnknown(Array$(Tuple(Key, Value))))
    },
    {
      typeConstructor: { _tag: "ReadonlyMap" },
      description,
      pretty: readonlyMapPretty,
      arbitrary: mapArbitrary,
      equivalence: readonlyMapEquivalence
    }
  )

/**
 * @category ReadonlyMap
 * @since 3.10.0
 */
export const ReadonlyMapFromSelf = <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
  readonly key: K
  readonly value: V
}): ReadonlyMapFromSelf<K, V> => mapFromSelf_(key, value, `ReadonlyMap<${format(key)}, ${format(value)}>`)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface MapFromSelf<K extends Schema.Any, V extends Schema.Any> extends
  AnnotableDeclare<
    MapFromSelf<K, V>,
    Map<Schema.Type<K>, Schema.Type<V>>,
    ReadonlyMap<Schema.Encoded<K>, Schema.Encoded<V>>,
    [K, V]
  >
{}

/**
 * @category Map
 * @since 3.10.0
 */
export const MapFromSelf = <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
  readonly key: K
  readonly value: V
}): MapFromSelf<K, V> => mapFromSelf_(key, value, `Map<${format(key)}, ${format(value)}>`) as any

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlyMap$<K extends Schema.Any, V extends Schema.Any>
  extends transform<Array$<Tuple2<K, V>>, ReadonlyMapFromSelf<SchemaClass<Schema.Type<K>>, SchemaClass<Schema.Type<V>>>>
{}

/**
 * @category ReadonlyMap transformations
 * @since 3.10.0
 */
export function ReadonlyMap<K extends Schema.Any, V extends Schema.Any>({ key, value }: {
  readonly key: K
  readonly value: V
}): ReadonlyMap$<K, V> {
  return transform(
    Array$(Tuple(key, value)),
    ReadonlyMapFromSelf({ key: typeSchema(asSchema(key)), value: typeSchema(asSchema(value)) }),
    {
      strict: true,
      decode: (i) => new Map(i),
      encode: (a) => Array.from(a.entries())
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Map$<K extends Schema.Any, V extends Schema.Any>
  extends transform<Array$<Tuple2<K, V>>, MapFromSelf<SchemaClass<Schema.Type<K>>, SchemaClass<Schema.Type<V>>>>
{}

/** @ignore */
function map<K extends Schema.Any, V extends Schema.Any>({ key, value }: {
  readonly key: K
  readonly value: V
}): Map$<K, V> {
  return transform(
    Array$(Tuple(key, value)),
    MapFromSelf({ key: typeSchema(asSchema(key)), value: typeSchema(asSchema(value)) }),
    {
      strict: true,
      decode: (i) => new Map(i),
      encode: (a) => Array.from(a.entries())
    }
  )
}

export {
  /**
   * @category Map transformations
   * @since 3.10.0
   */
  map as Map
}

/**
 * @category ReadonlyMap transformations
 * @since 3.10.0
 */
export const ReadonlyMapFromRecord = <KA, KR, VA, VI, VR>({ key, value }: {
  key: Schema<KA, string, KR>
  value: Schema<VA, VI, VR>
}): SchemaClass<ReadonlyMap<KA, VA>, { readonly [x: string]: VI }, KR | VR> =>
  transform(
    Record({ key: encodedBoundSchema(key), value }).annotations({
      description: "a record to be decoded into a ReadonlyMap"
    }),
    ReadonlyMapFromSelf({ key, value: typeSchema(value) }),
    {
      strict: true,
      decode: (i) => new Map(Object.entries(i)),
      encode: (a) => Object.fromEntries(a)
    }
  )

/**
 * @category Map transformations
 * @since 3.10.0
 */
export const MapFromRecord = <KA, KR, VA, VI, VR>({ key, value }: {
  key: Schema<KA, string, KR>
  value: Schema<VA, VI, VR>
}): SchemaClass<Map<KA, VA>, { readonly [x: string]: VI }, KR | VR> =>
  transform(
    Record({ key: encodedBoundSchema(key), value }).annotations({
      description: "a record to be decoded into a Map"
    }),
    MapFromSelf({ key, value: typeSchema(value) }),
    {
      strict: true,
      decode: (i) => new Map(Object.entries(i)),
      encode: (a) => Object.fromEntries(a)
    }
  )

const setArbitrary =
  <A>(item: LazyArbitrary<A>, ctx: ArbitraryGenerationContext): LazyArbitrary<ReadonlySet<A>> => (fc) => {
    const items = fc.array(item(fc))
    return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map((as) => new Set(as))
  }

const readonlySetPretty = <A>(item: pretty_.Pretty<A>): pretty_.Pretty<ReadonlySet<A>> => (set) =>
  `new Set([${Array.from(set.values()).map((a) => item(a)).join(", ")}])`

const readonlySetEquivalence = <A>(
  item: Equivalence.Equivalence<A>
): Equivalence.Equivalence<ReadonlySet<A>> => {
  const arrayEquivalence = array_.getEquivalence(item)
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a.values()), Array.from(b.values())))
}

const readonlySetParse = <A, R>(
  decodeUnknown: ParseResult.DecodeUnknown<ReadonlyArray<A>, R>
): ParseResult.DeclarationDecodeUnknown<ReadonlySet<A>, R> =>
(u, options, ast) =>
  Predicate.isSet(u) ?
    toComposite(decodeUnknown(Array.from(u.values()), options), (as) => new Set(as), ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlySetFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    ReadonlySetFromSelf<Value>,
    ReadonlySet<Schema.Type<Value>>,
    ReadonlySet<Schema.Encoded<Value>>,
    [Value]
  >
{}

const setFromSelf_ = <Value extends Schema.Any>(value: Value, description: string): ReadonlySetFromSelf<Value> =>
  declare(
    [value],
    {
      decode: (item) => readonlySetParse(ParseResult.decodeUnknown(Array$(item))),
      encode: (item) => readonlySetParse(ParseResult.encodeUnknown(Array$(item)))
    },
    {
      typeConstructor: { _tag: "ReadonlySet" },
      description,
      pretty: readonlySetPretty,
      arbitrary: setArbitrary,
      equivalence: readonlySetEquivalence
    }
  )

/**
 * @category ReadonlySet
 * @since 3.10.0
 */
export const ReadonlySetFromSelf = <Value extends Schema.Any>(value: Value): ReadonlySetFromSelf<Value> =>
  setFromSelf_(value, `ReadonlySet<${format(value)}>`)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface SetFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    SetFromSelf<Value>,
    Set<Schema.Type<Value>>,
    ReadonlySet<Schema.Encoded<Value>>,
    [Value]
  >
{}

/**
 * @category Set
 * @since 3.10.0
 */
export const SetFromSelf = <Value extends Schema.Any>(value: Value): SetFromSelf<Value> =>
  setFromSelf_(value, `Set<${format(value)}>`) as any

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlySet$<Value extends Schema.Any>
  extends transform<Array$<Value>, ReadonlySetFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category ReadonlySet transformations
 * @since 3.10.0
 */
export function ReadonlySet<Value extends Schema.Any>(value: Value): ReadonlySet$<Value> {
  return transform(
    Array$(value),
    ReadonlySetFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => new Set(i),
      encode: (a) => Array.from(a)
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Set$<Value extends Schema.Any>
  extends transform<Array$<Value>, SetFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/** @ignore */
function set<Value extends Schema.Any>(value: Value): Set$<Value> {
  return transform(
    Array$(value),
    SetFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => new Set(i),
      encode: (a) => Array.from(a)
    }
  )
}

export {
  /**
   * @category Set transformations
   * @since 3.10.0
   */
  set as Set
}

const bigDecimalPretty = (): pretty_.Pretty<bigDecimal_.BigDecimal> => (val) =>
  `BigDecimal(${bigDecimal_.format(bigDecimal_.normalize(val))})`

const bigDecimalArbitrary = (): LazyArbitrary<bigDecimal_.BigDecimal> => (fc) =>
  fc.tuple(fc.bigInt(), fc.integer({ min: -18, max: 18 }))
    .map(([value, scale]) => bigDecimal_.make(value, scale))

/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export class BigDecimalFromSelf extends declare(
  bigDecimal_.isBigDecimal,
  {
    typeConstructor: { _tag: "effect/BigDecimal" },
    identifier: "BigDecimalFromSelf",
    pretty: bigDecimalPretty,
    arbitrary: bigDecimalArbitrary,
    equivalence: () => bigDecimal_.Equivalence
  }
) {}

/**
 * @category BigDecimal transformations
 * @since 3.10.0
 */
export class BigDecimal extends transformOrFail(
  String$.annotations({ description: "a string to be decoded into a BigDecimal" }),
  BigDecimalFromSelf,
  {
    strict: true,
    decode: (i, _, ast) =>
      bigDecimal_.fromString(i).pipe(option_.match({
        onNone: () =>
          ParseResult.fail(new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a BigDecimal`)),
        onSome: (val) => ParseResult.succeed(bigDecimal_.normalize(val))
      })),
    encode: (a) => ParseResult.succeed(bigDecimal_.format(bigDecimal_.normalize(a)))
  }
).annotations({ identifier: "BigDecimal" }) {}

/**
 * A schema that transforms a `number` into a `BigDecimal`.
 * When encoding, this Schema will produce incorrect results if the BigDecimal exceeds the 64-bit range of a number.
 *
 * @category BigDecimal transformations
 * @since 3.10.0
 */
export class BigDecimalFromNumber extends transform(
  Number$.annotations({ description: "a number to be decoded into a BigDecimal" }),
  BigDecimalFromSelf,
  {
    strict: true,
    decode: (i) => bigDecimal_.unsafeFromNumber(i),
    encode: (a) => bigDecimal_.unsafeToNumber(a)
  }
).annotations({ identifier: "BigDecimalFromNumber" }) {}

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanBigDecimalSchemaId: unique symbol = Symbol.for("effect/SchemaId/GreaterThanBigDecimal")

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const greaterThanBigDecimal =
  <S extends Schema.Any>(min: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
    const formatted = bigDecimal_.format(min)
    return self.pipe(
      filter((a) => bigDecimal_.greaterThan(a, min), {
        schemaId: GreaterThanBigDecimalSchemaId,
        [GreaterThanBigDecimalSchemaId]: { min },
        title: `greaterThanBigDecimal(${formatted})`,
        description: `a BigDecimal greater than ${formatted}`,
        ...annotations
      })
    )
  }

/**
 * @category schema id
 * @since 3.10.0
 */
export const GreaterThanOrEqualToBigDecimalSchemaId: unique symbol = Symbol.for(
  "effect/schema/GreaterThanOrEqualToBigDecimal"
)

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const greaterThanOrEqualToBigDecimal =
  <S extends Schema.Any>(min: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
    const formatted = bigDecimal_.format(min)
    return self.pipe(
      filter((a) => bigDecimal_.greaterThanOrEqualTo(a, min), {
        schemaId: GreaterThanOrEqualToBigDecimalSchemaId,
        [GreaterThanOrEqualToBigDecimalSchemaId]: { min },
        title: `greaterThanOrEqualToBigDecimal(${formatted})`,
        description: `a BigDecimal greater than or equal to ${formatted}`,
        ...annotations
      })
    )
  }

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanBigDecimalSchemaId: unique symbol = Symbol.for("effect/SchemaId/LessThanBigDecimal")

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const lessThanBigDecimal =
  <S extends Schema.Any>(max: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
    const formatted = bigDecimal_.format(max)
    return self.pipe(
      filter((a) => bigDecimal_.lessThan(a, max), {
        schemaId: LessThanBigDecimalSchemaId,
        [LessThanBigDecimalSchemaId]: { max },
        title: `lessThanBigDecimal(${formatted})`,
        description: `a BigDecimal less than ${formatted}`,
        ...annotations
      })
    )
  }

/**
 * @category schema id
 * @since 3.10.0
 */
export const LessThanOrEqualToBigDecimalSchemaId: unique symbol = Symbol.for(
  "effect/schema/LessThanOrEqualToBigDecimal"
)

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const lessThanOrEqualToBigDecimal =
  <S extends Schema.Any>(max: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
    const formatted = bigDecimal_.format(max)
    return self.pipe(
      filter((a) => bigDecimal_.lessThanOrEqualTo(a, max), {
        schemaId: LessThanOrEqualToBigDecimalSchemaId,
        [LessThanOrEqualToBigDecimalSchemaId]: { max },
        title: `lessThanOrEqualToBigDecimal(${formatted})`,
        description: `a BigDecimal less than or equal to ${formatted}`,
        ...annotations
      })
    )
  }

/**
 * @category schema id
 * @since 3.10.0
 */
export const PositiveBigDecimalSchemaId: unique symbol = Symbol.for(
  "effect/schema/PositiveBigDecimal"
)

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const positiveBigDecimal =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => bigDecimal_.isPositive(a), {
        schemaId: PositiveBigDecimalSchemaId,
        title: "positiveBigDecimal",
        description: `a positive BigDecimal`,
        ...annotations
      })
    )

/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export const PositiveBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>> = BigDecimalFromSelf.pipe(
  positiveBigDecimal({ identifier: "PositiveBigDecimalFromSelf" })
)

/**
 * @category schema id
 * @since 3.10.0
 */
export const NonNegativeBigDecimalSchemaId: unique symbol = Symbol.for(
  "effect/schema/NonNegativeBigDecimal"
)

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const nonNegativeBigDecimal =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => a.value >= 0n, {
        schemaId: NonNegativeBigDecimalSchemaId,
        title: "nonNegativeBigDecimal",
        description: `a non-negative BigDecimal`,
        ...annotations
      })
    )

/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export const NonNegativeBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>> = BigDecimalFromSelf.pipe(
  nonNegativeBigDecimal({ identifier: "NonNegativeBigDecimalFromSelf" })
)

/**
 * @category schema id
 * @since 3.10.0
 */
export const NegativeBigDecimalSchemaId: unique symbol = Symbol.for(
  "effect/schema/NegativeBigDecimal"
)

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const negativeBigDecimal =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => bigDecimal_.isNegative(a), {
        schemaId: NegativeBigDecimalSchemaId,
        title: "negativeBigDecimal",
        description: `a negative BigDecimal`,
        ...annotations
      })
    )

/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export const NegativeBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>> = BigDecimalFromSelf.pipe(
  negativeBigDecimal({ identifier: "NegativeBigDecimalFromSelf" })
)

/**
 * @category schema id
 * @since 3.10.0
 */
export const NonPositiveBigDecimalSchemaId: unique symbol = Symbol.for(
  "effect/schema/NonPositiveBigDecimal"
)

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const nonPositiveBigDecimal =
  <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) =>
  <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> =>
    self.pipe(
      filter((a) => a.value <= 0n, {
        schemaId: NonPositiveBigDecimalSchemaId,
        title: "nonPositiveBigDecimal",
        description: `a non-positive BigDecimal`,
        ...annotations
      })
    )

/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export const NonPositiveBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>> = BigDecimalFromSelf.pipe(
  nonPositiveBigDecimal({ identifier: "NonPositiveBigDecimalFromSelf" })
)

/**
 * @category schema id
 * @since 3.10.0
 */
export const BetweenBigDecimalSchemaId: unique symbol = Symbol.for("effect/SchemaId/BetweenBigDecimal")

/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export const betweenBigDecimal = <S extends Schema.Any>(
  minimum: bigDecimal_.BigDecimal,
  maximum: bigDecimal_.BigDecimal,
  annotations?: Annotations.Filter<Schema.Type<S>>
) =>
<A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): filter<S> => {
  const formattedMinimum = bigDecimal_.format(minimum)
  const formattedMaximum = bigDecimal_.format(maximum)
  return self.pipe(
    filter((a) => bigDecimal_.between(a, { minimum, maximum }), {
      schemaId: BetweenBigDecimalSchemaId,
      [BetweenBigDecimalSchemaId]: { maximum, minimum },
      title: `betweenBigDecimal(${formattedMinimum}, ${formattedMaximum})`,
      description: `a BigDecimal between ${formattedMinimum} and ${formattedMaximum}`,
      ...annotations
    })
  )
}

/**
 * Clamps a `BigDecimal` between a minimum and a maximum value.
 *
 * @category BigDecimal transformations
 * @since 3.10.0
 */
export const clampBigDecimal =
  (minimum: bigDecimal_.BigDecimal, maximum: bigDecimal_.BigDecimal) =>
  <S extends Schema.Any, A extends bigDecimal_.BigDecimal>(
    self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>
  ): transform<S, filter<SchemaClass<A>>> =>
    transform(
      self,
      self.pipe(typeSchema, betweenBigDecimal(minimum, maximum)),
      {
        strict: false,
        decode: (i) => bigDecimal_.clamp(i, { minimum, maximum }),
        encode: identity
      }
    )

const chunkArbitrary =
  <A>(item: LazyArbitrary<A>, ctx: ArbitraryGenerationContext): LazyArbitrary<chunk_.Chunk<A>> => (fc) => {
    const items = fc.array(item(fc))
    return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(chunk_.fromIterable)
  }

const chunkPretty = <A>(item: pretty_.Pretty<A>): pretty_.Pretty<chunk_.Chunk<A>> => (c) =>
  `Chunk(${chunk_.toReadonlyArray(c).map(item).join(", ")})`

const chunkParse = <A, R>(
  decodeUnknown: ParseResult.DecodeUnknown<ReadonlyArray<A>, R>
): ParseResult.DeclarationDecodeUnknown<chunk_.Chunk<A>, R> =>
(u, options, ast) =>
  chunk_.isChunk(u) ?
    chunk_.isEmpty(u) ?
      ParseResult.succeed(chunk_.empty())
      : toComposite(decodeUnknown(chunk_.toReadonlyArray(u), options), chunk_.fromIterable, ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ChunkFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    ChunkFromSelf<Value>,
    chunk_.Chunk<Schema.Type<Value>>,
    chunk_.Chunk<Schema.Encoded<Value>>,
    [Value]
  >
{}

/**
 * @category Chunk
 * @since 3.10.0
 */
export const ChunkFromSelf = <Value extends Schema.Any>(value: Value): ChunkFromSelf<Value> => {
  return declare(
    [value],
    {
      decode: (item) => chunkParse(ParseResult.decodeUnknown(Array$(item))),
      encode: (item) => chunkParse(ParseResult.encodeUnknown(Array$(item)))
    },
    {
      typeConstructor: { _tag: "effect/Chunk" },
      description: `Chunk<${format(value)}>`,
      pretty: chunkPretty,
      arbitrary: chunkArbitrary,
      equivalence: chunk_.getEquivalence
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Chunk<Value extends Schema.Any>
  extends transform<Array$<Value>, ChunkFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category Chunk transformations
 * @since 3.10.0
 */
export function Chunk<Value extends Schema.Any>(value: Value): Chunk<Value> {
  return transform(
    Array$(value),
    ChunkFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => i.length === 0 ? chunk_.empty() : chunk_.fromIterable(i),
      encode: (a) => chunk_.toReadonlyArray(a)
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyChunkFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    NonEmptyChunkFromSelf<Value>,
    chunk_.NonEmptyChunk<Schema.Type<Value>>,
    chunk_.NonEmptyChunk<Schema.Encoded<Value>>,
    [Value]
  >
{}

const nonEmptyChunkArbitrary = <A>(item: LazyArbitrary<A>): LazyArbitrary<chunk_.NonEmptyChunk<A>> => (fc) =>
  fastCheck_.array(item(fc), { minLength: 1 }).map((as) => chunk_.unsafeFromNonEmptyArray(as as any))

const nonEmptyChunkPretty = <A>(item: pretty_.Pretty<A>): pretty_.Pretty<chunk_.NonEmptyChunk<A>> => (c) =>
  `NonEmptyChunk(${chunk_.toReadonlyArray(c).map(item).join(", ")})`

const nonEmptyChunkParse = <A, R>(
  decodeUnknown: ParseResult.DecodeUnknown<array_.NonEmptyReadonlyArray<A>, R>
): ParseResult.DeclarationDecodeUnknown<chunk_.NonEmptyChunk<A>, R> =>
(u, options, ast) =>
  chunk_.isChunk(u) && chunk_.isNonEmpty(u)
    ? toComposite(decodeUnknown(chunk_.toReadonlyArray(u), options), chunk_.unsafeFromNonEmptyArray, ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category Chunk
 * @since 3.10.0
 */
export const NonEmptyChunkFromSelf = <Value extends Schema.Any>(value: Value): NonEmptyChunkFromSelf<Value> => {
  return declare(
    [value],
    {
      decode: (item) => nonEmptyChunkParse(ParseResult.decodeUnknown(NonEmptyArray(item))),
      encode: (item) => nonEmptyChunkParse(ParseResult.encodeUnknown(NonEmptyArray(item)))
    },
    {
      typeConstructor: { _tag: "effect/Chunk.NonEmptyChunk" },
      description: `NonEmptyChunk<${format(value)}>`,
      pretty: nonEmptyChunkPretty,
      arbitrary: nonEmptyChunkArbitrary,
      equivalence: chunk_.getEquivalence
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyChunk<Value extends Schema.Any>
  extends transform<NonEmptyArray<Value>, NonEmptyChunkFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category Chunk transformations
 * @since 3.10.0
 */
export function NonEmptyChunk<Value extends Schema.Any>(value: Value): NonEmptyChunk<Value> {
  return transform(
    NonEmptyArray(value),
    NonEmptyChunkFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => chunk_.unsafeFromNonEmptyArray(i),
      encode: (a) => chunk_.toReadonlyArray(a)
    }
  )
}

const decodeData = <A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>>(a: A): A =>
  Array.isArray(a) ? data_.array(a) : data_.struct(a)

const dataArbitrary = <A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>>(
  item: LazyArbitrary<A>
): LazyArbitrary<A> =>
(fc) => item(fc).map(decodeData)

const dataPretty = <A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>>(
  item: pretty_.Pretty<A>
): pretty_.Pretty<A> =>
(d) => `Data(${item(d)})`

const dataParse = <R, A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>>(
  decodeUnknown: ParseResult.DecodeUnknown<A, R>
): ParseResult.DeclarationDecodeUnknown<A, R> =>
(u, options, ast) =>
  Equal.isEqual(u) ?
    toComposite(decodeUnknown(u, options), decodeData, ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.13.3
 */
export interface DataFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    DataFromSelf<Value>,
    Schema.Type<Value>,
    Schema.Encoded<Value>,
    [Value]
  >
{}

/**
 * Type and Encoded must extend `Readonly<Record<string, any>> |
 * ReadonlyArray<any>` to be compatible with this API.
 *
 * @category Data transformations
 * @since 3.10.0
 */
export const DataFromSelf = <
  S extends Schema.Any,
  A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>,
  I extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>
>(value: S & Schema<A & Schema.Type<S>, I & Schema.Encoded<S>, Schema.Context<S>>): DataFromSelf<S> => {
  return declare(
    [value],
    {
      decode: (item) => dataParse(ParseResult.decodeUnknown(item)),
      encode: (item) => dataParse(ParseResult.encodeUnknown(item))
    },
    {
      description: `Data<${format(value)}>`,
      pretty: dataPretty,
      arbitrary: dataArbitrary
    }
  )
}

/**
 * @category api interface
 * @since 3.13.3
 */
export interface Data<Value extends Schema.Any>
  extends transform<Value, DataFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * Type and Encoded must extend `Readonly<Record<string, any>> |
 * ReadonlyArray<any>` to be compatible with this API.
 *
 * @category Data transformations
 * @since 3.10.0
 */
export const Data = <
  S extends Schema.Any,
  A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>,
  I extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>
>(value: S & Schema<A & Schema.Type<S>, I & Schema.Encoded<S>, Schema.Context<S>>): Data<S> => {
  return transform(
    value,
    DataFromSelf(typeSchema(value)),
    {
      strict: false,
      decode: (i) => decodeData(i),
      encode: (a) => Array.isArray(a) ? Array.from(a) : Object.assign({}, a)
    }
  )
}

type MissingSelfGeneric<Usage extends string, Params extends string = ""> =
  `Missing \`Self\` generic - use \`class Self extends ${Usage}<Self>()(${Params}{ ... })\``

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

type ClassAnnotations<Self, A> =
  | Annotations.Schema<Self>
  | readonly [
    // Annotations for the "to" schema
    Annotations.Schema<Self> | undefined,
    // Annotations for the "transformation schema
    (Annotations.Schema<Self> | undefined)?,
    // Annotations for the "from" schema
    Annotations.Schema<A>?
  ]

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Class<Self, Fields extends Struct.Fields, I, R, C, Inherited, Proto>
  extends Schema<Self, Simplify<I>, R>
{
  new(
    props: RequiredKeys<C> extends never ? void | Simplify<C> : Simplify<C>,
    options?: MakeOptions
  ): Struct.Type<Fields> & Inherited & Proto

  /** @since 3.10.0 */
  readonly ast: AST.Transformation

  make<C extends new(...args: Array<any>) => any>(this: C, ...args: ConstructorParameters<C>): InstanceType<C>

  annotations(annotations: Annotations.Schema<Self>): SchemaClass<Self, Simplify<I>, R>

  readonly fields: { readonly [K in keyof Fields]: Fields[K] }

  readonly identifier: string

  /**
   * @example
   * ```ts
   * import { Schema } from "effect"
   *
   * class MyClass extends Schema.Class<MyClass>("MyClass")({
   *  myField: Schema.String
   * }) {
   *  myMethod() {
   *    return this.myField + "my"
   *  }
   * }
   *
   * class NextClass extends MyClass.extend<NextClass>("NextClass")({
   *  nextField: Schema.Number
   * }) {
   *  nextMethod() {
   *    return this.myMethod() + this.myField + this.nextField
   *  }
   * }
   * ```
   */
  extend<Extended = never>(identifier: string): <NewFields extends Struct.Fields>(
    fields: NewFields | HasFields<NewFields>,
    annotations?: ClassAnnotations<Extended, Simplify<Struct.Type<Fields & NewFields>>>
  ) => [Extended] extends [never] ? MissingSelfGeneric<"Base.extend">
    : Class<
      Extended,
      Fields & NewFields,
      I & Struct.Encoded<NewFields>,
      R | Struct.Context<NewFields>,
      C & Struct.Constructor<NewFields>,
      Self,
      Proto
    >

  /**
   * @example
   * ```ts
   * import { Effect, Schema } from "effect"
   *
   * class MyClass extends Schema.Class<MyClass>("MyClass")({
   *   myField: Schema.String
   * }) {
   *   myMethod() {
   *     return this.myField + "my"
   *   }
   * }
   *
   * class NextClass extends MyClass.transformOrFail<NextClass>("NextClass")({
   *   nextField: Schema.Number
   * }, {
   *   decode: (i) =>
   *     Effect.succeed({
   *       myField: i.myField,
   *       nextField: i.myField.length
   *     }),
   *   encode: (a) => Effect.succeed({ myField: a.myField })
   * }) {
   *   nextMethod() {
   *     return this.myMethod() + this.myField + this.nextField
   *   }
   * }
   * ```
   */
  transformOrFail<Transformed = never>(identifier: string): <
    NewFields extends Struct.Fields,
    R2,
    R3
  >(
    fields: NewFields,
    options: {
      readonly decode: (
        input: Simplify<Struct.Type<Fields>>,
        options: ParseOptions,
        ast: AST.Transformation
      ) => Effect.Effect<Simplify<Struct.Type<Fields & NewFields>>, ParseResult.ParseIssue, R2>
      readonly encode: (
        input: Simplify<Struct.Type<Fields & NewFields>>,
        options: ParseOptions,
        ast: AST.Transformation
      ) => Effect.Effect<Struct.Type<Fields>, ParseResult.ParseIssue, R3>
    },
    annotations?: ClassAnnotations<Transformed, Simplify<Struct.Type<Fields & NewFields>>>
  ) => [Transformed] extends [never] ? MissingSelfGeneric<"Base.transformOrFail">
    : Class<
      Transformed,
      Fields & NewFields,
      I,
      R | Struct.Context<NewFields> | R2 | R3,
      C & Struct.Constructor<NewFields>,
      Self,
      Proto
    >

  /**
   * @example
   * ```ts
   * import { Effect, Schema } from "effect"
   *
   * class MyClass extends Schema.Class<MyClass>("MyClass")({
   *   myField: Schema.String
   * }) {
   *   myMethod() {
   *     return this.myField + "my"
   *   }
   * }
   *
   * class NextClass extends MyClass.transformOrFailFrom<NextClass>("NextClass")({
   *   nextField: Schema.Number
   * }, {
   *   decode: (i) =>
   *     Effect.succeed({
   *       myField: i.myField,
   *       nextField: i.myField.length
   *     }),
   *   encode: (a) => Effect.succeed({ myField: a.myField })
   * }) {
   *   nextMethod() {
   *     return this.myMethod() + this.myField + this.nextField
   *   }
   * }
   * ```
   */
  transformOrFailFrom<Transformed = never>(identifier: string): <
    NewFields extends Struct.Fields,
    R2,
    R3
  >(
    fields: NewFields,
    options: {
      readonly decode: (
        input: Simplify<I>,
        options: ParseOptions,
        ast: AST.Transformation
      ) => Effect.Effect<Simplify<I & Struct.Encoded<NewFields>>, ParseResult.ParseIssue, R2>
      readonly encode: (
        input: Simplify<I & Struct.Encoded<NewFields>>,
        options: ParseOptions,
        ast: AST.Transformation
      ) => Effect.Effect<I, ParseResult.ParseIssue, R3>
    },
    annotations?: ClassAnnotations<Transformed, Simplify<Struct.Type<Fields & NewFields>>>
  ) => [Transformed] extends [never] ? MissingSelfGeneric<"Base.transformOrFailFrom">
    : Class<
      Transformed,
      Fields & NewFields,
      I,
      R | Struct.Context<NewFields> | R2 | R3,
      C & Struct.Constructor<NewFields>,
      Self,
      Proto
    >
}

type HasFields<Fields extends Struct.Fields> = Struct<Fields> | {
  readonly [RefineSchemaId]: HasFields<Fields>
}

const isField = (u: unknown) => isSchema(u) || isPropertySignature(u)

const isFields = <Fields extends Struct.Fields>(fields: object): fields is Fields =>
  Reflect.ownKeys(fields).every((key) => isField((fields as any)[key]))

const getFields = <Fields extends Struct.Fields>(hasFields: HasFields<Fields>): Fields =>
  "fields" in hasFields ? hasFields.fields : getFields(hasFields[RefineSchemaId])

const getSchemaFromFieldsOr = <Fields extends Struct.Fields>(fieldsOr: Fields | HasFields<Fields>): Schema.Any =>
  isFields(fieldsOr) ? Struct(fieldsOr) : isSchema(fieldsOr) ? fieldsOr : Struct(getFields(fieldsOr))

const getFieldsFromFieldsOr = <Fields extends Struct.Fields>(fieldsOr: Fields | HasFields<Fields>): Fields =>
  isFields(fieldsOr) ? fieldsOr : getFields(fieldsOr)

/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyClass extends Schema.Class<MyClass>("MyClass")({
 *  someField: Schema.String
 * }) {
 *  someMethod() {
 *    return this.someField + "bar"
 *  }
 * }
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
export const Class = <Self = never>(identifier: string) =>
<Fields extends Struct.Fields>(
  fieldsOr: Fields | HasFields<Fields>,
  annotations?: ClassAnnotations<Self, Simplify<Struct.Type<Fields>>>
): [Self] extends [never] ? MissingSelfGeneric<"Class">
  : Class<
    Self,
    Fields,
    Struct.Encoded<Fields>,
    Struct.Context<Fields>,
    Struct.Constructor<Fields>,
    {},
    {}
  > =>
  makeClass({
    kind: "Class",
    identifier,
    schema: getSchemaFromFieldsOr(fieldsOr),
    fields: getFieldsFromFieldsOr(fieldsOr),
    Base: data_.Class,
    annotations
  })

/** @internal */
export const getClassTag = <Tag extends string>(tag: Tag) =>
  withConstructorDefault(propertySignature(Literal(tag)), () => tag)

/**
 * @category api interface
 * @since 3.10.0
 */
export interface TaggedClass<Self, Tag extends string, Fields extends Struct.Fields> extends
  Class<
    Self,
    Fields,
    Struct.Encoded<Fields>,
    Struct.Context<Fields>,
    Struct.Constructor<Omit<Fields, "_tag">>,
    {},
    {}
  >
{
  readonly _tag: Tag
}

/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyClass extends Schema.TaggedClass<MyClass>("MyClass")("MyClass", {
 *  a: Schema.String
 * }) {}
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
export const TaggedClass = <Self = never>(identifier?: string) =>
<Tag extends string, Fields extends Struct.Fields>(
  tag: Tag,
  fieldsOr: Fields | HasFields<Fields>,
  annotations?: ClassAnnotations<Self, Simplify<Struct.Type<{ readonly _tag: tag<Tag> } & Fields>>>
): [Self] extends [never] ? MissingSelfGeneric<"TaggedClass", `"Tag", `>
  : TaggedClass<Self, Tag, { readonly _tag: tag<Tag> } & Fields> =>
{
  const fields = getFieldsFromFieldsOr(fieldsOr)
  const schema = getSchemaFromFieldsOr(fieldsOr)
  const newFields = { _tag: getClassTag(tag) }
  const taggedFields = extendFields(newFields, fields)
  return class TaggedClass extends makeClass({
    kind: "TaggedClass",
    identifier: identifier ?? tag,
    schema: extend(schema, Struct(newFields)),
    fields: taggedFields,
    Base: data_.Class,
    annotations
  }) {
    static _tag = tag
  } as any
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface TaggedErrorClass<Self, Tag extends string, Fields extends Struct.Fields> extends
  Class<
    Self,
    Fields,
    Struct.Encoded<Fields>,
    Struct.Context<Fields>,
    Struct.Constructor<Omit<Fields, "_tag">>,
    {},
    cause_.YieldableError
  >
{
  readonly _tag: Tag
}

/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyError extends Schema.TaggedError<MyError>("MyError")(
 *   "MyError",
 *   {
 *     module: Schema.String,
 *     method: Schema.String,
 *     description: Schema.String
 *   }
 * ) {
 *   get message(): string {
 *     return `${this.module}.${this.method}: ${this.description}`
 *   }
 * }
 * ```
 * @category classes
 * @since 3.10.0
 */
export const TaggedError = <Self = never>(identifier?: string) =>
<Tag extends string, Fields extends Struct.Fields>(
  tag: Tag,
  fieldsOr: Fields | HasFields<Fields>,
  annotations?: ClassAnnotations<Self, Simplify<Struct.Type<{ readonly _tag: tag<Tag> } & Fields>>>
): [Self] extends [never] ? MissingSelfGeneric<"TaggedError", `"Tag", `>
  : TaggedErrorClass<
    Self,
    Tag,
    { readonly _tag: tag<Tag> } & Fields
  > =>
{
  class Base extends data_.Error {}
  ;(Base.prototype as any).name = tag
  const fields = getFieldsFromFieldsOr(fieldsOr)
  const schema = getSchemaFromFieldsOr(fieldsOr)
  const newFields = { _tag: getClassTag(tag) }
  const taggedFields = extendFields(newFields, fields)
  const hasMessageField = "message" in taggedFields
  class TaggedErrorClass extends makeClass({
    kind: "TaggedError",
    identifier: identifier ?? tag,
    schema: extend(schema, Struct(newFields)),
    fields: taggedFields,
    Base,
    annotations,
    disableToString: true
  }) {
    static _tag = tag
  }

  if (!hasMessageField) {
    Object.defineProperty(TaggedErrorClass.prototype, "message", {
      get() {
        return `{ ${
          Reflect.ownKeys(fields)
            .map((p: any) => `${Inspectable.formatPropertyKey(p)}: ${Inspectable.formatUnknown((this)[p])}`)
            .join(", ")
        } }`
      },
      enumerable: false, // mirrors the built-in Error.prototype.message, whose descriptor is also non-enumerable
      configurable: true
    })
  }

  return TaggedErrorClass as any
}

const extendFields = (a: Struct.Fields, b: Struct.Fields): Struct.Fields => {
  const out = { ...a }
  for (const key of Reflect.ownKeys(b)) {
    if (key in a) {
      throw new Error(errors_.getASTDuplicatePropertySignatureErrorMessage(key))
    }
    out[key] = b[key]
  }
  return out
}

/**
 * @category Constructor utils
 * @since 3.13.4
 */
export type MakeOptions = boolean | {
  readonly disableValidation?: boolean | undefined
}

function getDisableValidationMakeOption(options: MakeOptions | undefined): boolean {
  return Predicate.isBoolean(options) ? options : options?.disableValidation ?? false
}

const astCache = globalValue("effect/Schema/astCache", () => new WeakMap<any, AST.AST>())

const getClassAnnotations = <Self, A>(
  annotations: ClassAnnotations<Self, A> | undefined
): [Annotations.Schema<Self>?, Annotations.Schema<Self>?, Annotations.Schema<A>?] => {
  if (annotations === undefined) {
    return []
  } else if (Array.isArray(annotations)) {
    return annotations as any
  } else {
    return [annotations] as any
  }
}

const makeClass = <Fields extends Struct.Fields>(
  { Base, annotations, disableToString, fields, identifier, kind, schema }: {
    kind: "Class" | "TaggedClass" | "TaggedError" | "TaggedRequest"
    identifier: string
    schema: Schema.Any
    fields: Fields
    Base: new(...args: ReadonlyArray<any>) => any
    annotations?: ClassAnnotations<any, any> | undefined
    disableToString?: boolean | undefined
  }
): any => {
  const classSymbol = Symbol.for(`effect/Schema/${kind}/${identifier}`)

  const [typeAnnotations, transformationAnnotations, encodedAnnotations] = getClassAnnotations(annotations)

  const typeSchema_ = typeSchema(schema)

  const declarationSurrogate = typeSchema_.annotations({
    identifier,
    ...typeAnnotations
  })

  const typeSide = typeSchema_.annotations({
    [AST.AutoTitleAnnotationId]: `${identifier} (Type side)`,
    ...typeAnnotations
  })

  const constructorSchema = schema.annotations({
    [AST.AutoTitleAnnotationId]: `${identifier} (Constructor)`,
    ...typeAnnotations
  })

  const encodedSide = schema.annotations({
    [AST.AutoTitleAnnotationId]: `${identifier} (Encoded side)`,
    ...encodedAnnotations
  })

  const transformationSurrogate = schema.annotations({
    ...encodedAnnotations,
    ...typeAnnotations,
    ...transformationAnnotations
  })

  const fallbackInstanceOf = (u: unknown) => Predicate.hasProperty(u, classSymbol) && ParseResult.is(typeSide)(u)

  const klass = class extends Base {
    constructor(
      props: { [x: string | symbol]: unknown } = {},
      options: MakeOptions = false
    ) {
      props = { ...props }
      if (kind !== "Class") {
        delete props["_tag"]
      }
      props = lazilyMergeDefaults(fields, props)
      if (!getDisableValidationMakeOption(options)) {
        props = ParseResult.validateSync(constructorSchema)(props)
      }
      super(props, true)
    }

    // ----------------
    // Schema interface
    // ----------------

    static [TypeId] = variance

    static get ast(): AST.AST {
      let out = astCache.get(this)
      if (out) {
        return out
      }

      const declaration: Schema.Any = declare(
        [schema],
        {
          decode: () => (input, _, ast) =>
            input instanceof this || fallbackInstanceOf(input)
              ? ParseResult.succeed(input)
              : ParseResult.fail(new ParseResult.Type(ast, input)),
          encode: () => (input, options) =>
            input instanceof this
              ? ParseResult.succeed(input)
              : ParseResult.map(
                ParseResult.encodeUnknown(typeSide)(input, options),
                (props) => new this(props, true)
              )
        },
        {
          identifier,
          pretty: (pretty) => (self: any) => `${identifier}(${pretty(self)})`,
          // @ts-expect-error
          arbitrary: (arb) => (fc) => arb(fc).map((props) => new this(props)),
          equivalence: identity,
          [AST.SurrogateAnnotationId]: declarationSurrogate.ast,
          ...typeAnnotations
        }
      )

      out = transform(
        encodedSide,
        declaration,
        {
          strict: true,
          decode: (i) => new this(i, true),
          encode: identity
        }
      ).annotations({
        [AST.SurrogateAnnotationId]: transformationSurrogate.ast,
        ...transformationAnnotations
      }).ast

      astCache.set(this, out)

      return out
    }

    static pipe() {
      return pipeArguments(this, arguments)
    }

    static annotations(annotations: Annotations.Schema<any>) {
      return make(this.ast).annotations(annotations)
    }

    static toString() {
      return `(${String(encodedSide)} <-> ${identifier})`
    }

    // ----------------
    // Class interface
    // ----------------

    static make(...args: Array<any>) {
      return new this(...args)
    }

    static fields = { ...fields }

    static identifier = identifier

    static extend<Extended, NewFields extends Struct.Fields>(identifier: string) {
      return (
        newFieldsOr: NewFields | HasFields<NewFields>,
        annotations?: ClassAnnotations<Extended, Simplify<Struct.Type<Fields & NewFields>>>
      ) => {
        const newFields = getFieldsFromFieldsOr(newFieldsOr)
        const newSchema = getSchemaFromFieldsOr(newFieldsOr)
        const extendedFields = extendFields(fields, newFields)
        return makeClass({
          kind,
          identifier,
          schema: extend(schema, newSchema),
          fields: extendedFields,
          Base: this,
          annotations
        })
      }
    }

    static transformOrFail<Transformed, NewFields extends Struct.Fields>(identifier: string) {
      return (
        newFieldsOr: NewFields,
        options: any,
        annotations?: ClassAnnotations<Transformed, Simplify<Struct.Type<Fields & NewFields>>>
      ) => {
        const transformedFields: Struct.Fields = extendFields(fields, newFieldsOr)
        return makeClass({
          kind,
          identifier,
          schema: transformOrFail(
            schema,
            typeSchema(Struct(transformedFields)),
            options
          ),
          fields: transformedFields,
          Base: this,
          annotations
        })
      }
    }

    static transformOrFailFrom<Transformed, NewFields extends Struct.Fields>(identifier: string) {
      return (
        newFields: NewFields,
        options: any,
        annotations?: ClassAnnotations<Transformed, Simplify<Struct.Type<Fields & NewFields>>>
      ) => {
        const transformedFields: Struct.Fields = extendFields(fields, newFields)
        return makeClass({
          kind,
          identifier,
          schema: transformOrFail(
            encodedSchema(schema),
            Struct(transformedFields),
            options
          ),
          fields: transformedFields,
          Base: this,
          annotations
        })
      }
    }

    // ----------------
    // other
    // ----------------

    get [classSymbol]() {
      return classSymbol
    }
  }
  if (disableToString !== true) {
    Object.defineProperty(klass.prototype, "toString", {
      value() {
        return `${identifier}({ ${
          Reflect.ownKeys(fields).map((p: any) =>
            `${Inspectable.formatPropertyKey(p)}: ${Inspectable.formatUnknown(this[p])}`
          )
            .join(", ")
        } })`
      },
      configurable: true,
      writable: true
    })
  }
  return klass
}

/**
 * @category FiberId
 * @since 3.10.0
 */
export type FiberIdEncoded =
  | {
    readonly _tag: "Composite"
    readonly left: FiberIdEncoded
    readonly right: FiberIdEncoded
  }
  | {
    readonly _tag: "None"
  }
  | {
    readonly _tag: "Runtime"
    readonly id: number
    readonly startTimeMillis: number
  }

const FiberIdNoneEncoded = Struct({
  _tag: Literal("None")
}).annotations({ identifier: "FiberIdNoneEncoded" })

const FiberIdRuntimeEncoded = Struct({
  _tag: Literal("Runtime"),
  id: Int,
  startTimeMillis: Int
}).annotations({ identifier: "FiberIdRuntimeEncoded" })

const FiberIdCompositeEncoded = Struct({
  _tag: Literal("Composite"),
  left: suspend(() => FiberIdEncoded),
  right: suspend(() => FiberIdEncoded)
}).annotations({ identifier: "FiberIdCompositeEncoded" })

const FiberIdEncoded: Schema<FiberIdEncoded> = Union(
  FiberIdNoneEncoded,
  FiberIdRuntimeEncoded,
  FiberIdCompositeEncoded
).annotations({ identifier: "FiberIdEncoded" })

const fiberIdArbitrary: LazyArbitrary<fiberId_.FiberId> = (fc) =>
  fc.letrec((tie) => ({
    None: fc.record({ _tag: fc.constant("None" as const) }),
    Runtime: fc.record({ _tag: fc.constant("Runtime" as const), id: fc.integer(), startTimeMillis: fc.integer() }),
    Composite: fc.record({ _tag: fc.constant("Composite" as const), left: tie("FiberId"), right: tie("FiberId") }),
    FiberId: fc.oneof(tie("None"), tie("Runtime"), tie("Composite")) as any as fastCheck_.Arbitrary<fiberId_.FiberId>
  })).FiberId.map(fiberIdDecode)

const fiberIdPretty: pretty_.Pretty<fiberId_.FiberId> = (fiberId) => {
  switch (fiberId._tag) {
    case "None":
      return "FiberId.none"
    case "Runtime":
      return `FiberId.runtime(${fiberId.id}, ${fiberId.startTimeMillis})`
    case "Composite":
      return `FiberId.composite(${fiberIdPretty(fiberId.right)}, ${fiberIdPretty(fiberId.left)})`
  }
}

/**
 * @category FiberId constructors
 * @since 3.10.0
 */
export class FiberIdFromSelf extends declare(
  fiberId_.isFiberId,
  {
    typeConstructor: { _tag: "effect/FiberId" },
    identifier: "FiberIdFromSelf",
    pretty: () => fiberIdPretty,
    arbitrary: () => fiberIdArbitrary
  }
) {}

const fiberIdDecode = (input: FiberIdEncoded): fiberId_.FiberId => {
  switch (input._tag) {
    case "None":
      return fiberId_.none
    case "Runtime":
      return fiberId_.runtime(input.id, input.startTimeMillis)
    case "Composite":
      return fiberId_.composite(fiberIdDecode(input.left), fiberIdDecode(input.right))
  }
}

const fiberIdEncode = (input: fiberId_.FiberId): FiberIdEncoded => {
  switch (input._tag) {
    case "None":
      return { _tag: "None" }
    case "Runtime":
      return { _tag: "Runtime", id: input.id, startTimeMillis: input.startTimeMillis }
    case "Composite":
      return {
        _tag: "Composite",
        left: fiberIdEncode(input.left),
        right: fiberIdEncode(input.right)
      }
  }
}

/**
 * @category FiberId transformations
 * @since 3.10.0
 */
export class FiberId extends transform(
  FiberIdEncoded,
  FiberIdFromSelf,
  {
    strict: true,
    decode: (i) => fiberIdDecode(i),
    encode: (a) => fiberIdEncode(a)
  }
).annotations({ identifier: "FiberId" }) {}

/**
 * @category Cause utils
 * @since 3.10.0
 */
export type CauseEncoded<E, D> =
  | {
    readonly _tag: "Empty"
  }
  | {
    readonly _tag: "Fail"
    readonly error: E
  }
  | {
    readonly _tag: "Die"
    readonly defect: D
  }
  | {
    readonly _tag: "Interrupt"
    readonly fiberId: FiberIdEncoded
  }
  | {
    readonly _tag: "Sequential"
    readonly left: CauseEncoded<E, D>
    readonly right: CauseEncoded<E, D>
  }
  | {
    readonly _tag: "Parallel"
    readonly left: CauseEncoded<E, D>
    readonly right: CauseEncoded<E, D>
  }

const causeDieEncoded = <Defect extends Schema.Any>(defect: Defect) =>
  Struct({
    _tag: Literal("Die"),
    defect
  })

const CauseEmptyEncoded = Struct({
  _tag: Literal("Empty")
})

const causeFailEncoded = <E extends Schema.Any>(error: E) =>
  Struct({
    _tag: Literal("Fail"),
    error
  })

const CauseInterruptEncoded = Struct({
  _tag: Literal("Interrupt"),
  fiberId: FiberIdEncoded
})

let causeEncodedId = 0

const causeEncoded = <E extends Schema.All, D extends Schema.All>(
  error: E,
  defect: D
): SchemaClass<
  CauseEncoded<Schema.Type<E>, Schema.Type<D>>,
  CauseEncoded<Schema.Encoded<E>, Schema.Encoded<D>>,
  Schema.Context<E> | Schema.Context<D>
> => {
  const error_ = asSchema(error)
  const defect_ = asSchema(defect)
  const suspended = suspend((): Schema<
    CauseEncoded<Schema.Type<E>, Schema.Type<D>>,
    CauseEncoded<Schema.Encoded<E>, Schema.Encoded<D>>,
    Schema.Context<E> | Schema.Context<D>
  > => out)
  const out = Union(
    CauseEmptyEncoded,
    causeFailEncoded(error_),
    causeDieEncoded(defect_),
    CauseInterruptEncoded,
    Struct({
      _tag: Literal("Sequential"),
      left: suspended,
      right: suspended
    }),
    Struct({
      _tag: Literal("Parallel"),
      left: suspended,
      right: suspended
    })
  ).annotations({
    title: `CauseEncoded<${format(error)}>`,
    [AST.JSONIdentifierAnnotationId]: `CauseEncoded${causeEncodedId++}`
  })
  return out
}

const causeArbitrary = <E>(
  error: LazyArbitrary<E>,
  defect: LazyArbitrary<unknown>
): LazyArbitrary<cause_.Cause<E>> =>
(fc) =>
  fc.letrec((tie) => ({
    Empty: fc.record({ _tag: fc.constant("Empty" as const) }),
    Fail: fc.record({ _tag: fc.constant("Fail" as const), error: error(fc) }),
    Die: fc.record({ _tag: fc.constant("Die" as const), defect: defect(fc) }),
    Interrupt: fc.record({ _tag: fc.constant("Interrupt" as const), fiberId: fiberIdArbitrary(fc) }),
    Sequential: fc.record({ _tag: fc.constant("Sequential" as const), left: tie("Cause"), right: tie("Cause") }),
    Parallel: fc.record({ _tag: fc.constant("Parallel" as const), left: tie("Cause"), right: tie("Cause") }),
    Cause: fc.oneof(
      tie("Empty"),
      tie("Fail"),
      tie("Die"),
      tie("Interrupt"),
      tie("Sequential"),
      tie("Parallel")
    ) as any as fastCheck_.Arbitrary<cause_.Cause<E>>
  })).Cause.map(causeDecode)

const causePretty = <E>(error: pretty_.Pretty<E>): pretty_.Pretty<cause_.Cause<E>> => (cause) => {
  const f = (cause: cause_.Cause<E>): string => {
    switch (cause._tag) {
      case "Empty":
        return "Cause.empty"
      case "Fail":
        return `Cause.fail(${error(cause.error)})`
      case "Die":
        return `Cause.die(${cause_.pretty(cause)})`
      case "Interrupt":
        return `Cause.interrupt(${fiberIdPretty(cause.fiberId)})`
      case "Sequential":
        return `Cause.sequential(${f(cause.left)}, ${f(cause.right)})`
      case "Parallel":
        return `Cause.parallel(${f(cause.left)}, ${f(cause.right)})`
    }
  }
  return f(cause)
}

const causeParse = <A, D, R>(
  decodeUnknown: ParseResult.DecodeUnknown<CauseEncoded<A, D>, R>
): ParseResult.DeclarationDecodeUnknown<cause_.Cause<A>, R> =>
(u, options, ast) =>
  cause_.isCause(u) ?
    toComposite(decodeUnknown(causeEncode(u), options), causeDecode, ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface CauseFromSelf<E extends Schema.All, D extends Schema.All> extends
  AnnotableDeclare<
    CauseFromSelf<E, D>,
    cause_.Cause<Schema.Type<E>>,
    cause_.Cause<Schema.Encoded<E>>,
    [E, D]
  >
{}

/**
 * @category Cause transformations
 * @since 3.10.0
 */
export const CauseFromSelf = <E extends Schema.All, D extends Schema.All>({ defect, error }: {
  readonly error: E
  readonly defect: D
}): CauseFromSelf<E, D> => {
  return declare(
    [error, defect],
    {
      decode: (error, defect) => causeParse(ParseResult.decodeUnknown(causeEncoded(error, defect))),
      encode: (error, defect) => causeParse(ParseResult.encodeUnknown(causeEncoded(error, defect)))
    },
    {
      typeConstructor: { _tag: "effect/Cause" },
      title: `Cause<${error.ast}>`,
      pretty: causePretty,
      arbitrary: causeArbitrary
    }
  )
}

function causeDecode<E>(cause: CauseEncoded<E, unknown>): cause_.Cause<E> {
  switch (cause._tag) {
    case "Empty":
      return cause_.empty
    case "Fail":
      return cause_.fail(cause.error)
    case "Die":
      return cause_.die(cause.defect)
    case "Interrupt":
      return cause_.interrupt(fiberIdDecode(cause.fiberId))
    case "Sequential":
      return cause_.sequential(causeDecode(cause.left), causeDecode(cause.right))
    case "Parallel":
      return cause_.parallel(causeDecode(cause.left), causeDecode(cause.right))
  }
}

function causeEncode<E>(cause: cause_.Cause<E>): CauseEncoded<E, unknown> {
  switch (cause._tag) {
    case "Empty":
      return { _tag: "Empty" }
    case "Fail":
      return { _tag: "Fail", error: cause.error }
    case "Die":
      return { _tag: "Die", defect: cause.defect }
    case "Interrupt":
      return { _tag: "Interrupt", fiberId: cause.fiberId }
    case "Sequential":
      return {
        _tag: "Sequential",
        left: causeEncode(cause.left),
        right: causeEncode(cause.right)
      }
    case "Parallel":
      return {
        _tag: "Parallel",
        left: causeEncode(cause.left),
        right: causeEncode(cause.right)
      }
  }
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Cause<E extends Schema.All, D extends Schema.All> extends
  transform<
    SchemaClass<
      CauseEncoded<Schema.Type<E>, Schema.Type<Defect>>,
      CauseEncoded<Schema.Encoded<E>, Schema.Encoded<Defect>>,
      Schema.Context<E> | Schema.Context<D>
    >,
    CauseFromSelf<SchemaClass<Schema.Type<E>>, SchemaClass<Schema.Type<D>>>
  >
{}

/**
 * @category Cause transformations
 * @since 3.10.0
 */
export const Cause = <E extends Schema.All, D extends Schema.All>({ defect, error }: {
  readonly error: E
  readonly defect: D
}): Cause<E, D> => {
  const error_ = asSchema(error)
  const defect_ = asSchema(defect)
  const out = transform(
    causeEncoded(error_, defect_),
    CauseFromSelf({ error: typeSchema(error_), defect: typeSchema(defect_) }),
    {
      strict: false,
      decode: (i) => causeDecode(i),
      encode: (a) => causeEncode(a)
    }
  )
  return out as any
}

/**
 * Defines a schema for handling JavaScript errors (`Error` instances) and other types of defects.
 * It decodes objects into Error instances if they match the expected structure (i.e., have a `message` and optionally a `name` and `stack`),
 * or converts other values to their string representations.
 *
 * When encoding, it converts `Error` instances back into plain objects containing only the error's name and message,
 * or other values into their string forms.
 *
 * This is useful for serializing and deserializing errors across network boundaries where error objects do not natively serialize.
 *
 * @category defect
 * @since 3.10.0
 */
export class Defect extends transform(
  Unknown,
  Unknown,
  {
    strict: true,
    decode: (i) => {
      if (Predicate.isObject(i) && "message" in i && typeof i.message === "string") {
        const err = new Error(i.message, { cause: i })
        if ("name" in i && typeof i.name === "string") {
          err.name = i.name
        }
        err.stack = "stack" in i && typeof i.stack === "string" ? i.stack : ""
        return err
      }
      return internalCause_.prettyErrorMessage(i)
    },
    encode: (a) => {
      if (a instanceof Error) {
        return {
          name: a.name,
          message: a.message
          // no stack because of security reasons
        }
      }
      return internalCause_.prettyErrorMessage(a)
    }
  }
).annotations({ identifier: "Defect" }) {}

/**
 * @category Exit utils
 * @since 3.10.0
 */
export type ExitEncoded<A, E, D> =
  | {
    readonly _tag: "Failure"
    readonly cause: CauseEncoded<E, D>
  }
  | {
    readonly _tag: "Success"
    readonly value: A
  }

const exitFailureEncoded = <E extends Schema.All, D extends Schema.All>(
  error: E,
  defect: D
) =>
  Struct({
    _tag: Literal("Failure"),
    cause: causeEncoded(error, defect)
  })

const exitSuccessEncoded = <A extends Schema.All>(
  value: A
) =>
  Struct({
    _tag: Literal("Success"),
    value
  })

const exitEncoded = <A extends Schema.All, E extends Schema.All, D extends Schema.Any>(
  value: A,
  error: E,
  defect: D
) => {
  return Union(
    exitFailureEncoded(error, defect),
    exitSuccessEncoded(value)
  ).annotations({
    title: `ExitEncoded<${format(value)}, ${format(error)}, ${format(defect)}>`
  })
}

const exitDecode = <A, E>(input: ExitEncoded<A, E, unknown>): exit_.Exit<A, E> => {
  switch (input._tag) {
    case "Failure":
      return exit_.failCause(causeDecode(input.cause))
    case "Success":
      return exit_.succeed(input.value)
  }
}

const exitArbitrary = <A, E>(
  value: LazyArbitrary<A>,
  error: LazyArbitrary<E>,
  defect: LazyArbitrary<unknown>
): LazyArbitrary<exit_.Exit<A, E>> =>
(fc) =>
  fc.oneof(
    fc.record({ _tag: fc.constant("Failure" as const), cause: causeArbitrary(error, defect)(fc) }),
    fc.record({ _tag: fc.constant("Success" as const), value: value(fc) })
  ).map(exitDecode)

const exitPretty =
  <A, E>(value: pretty_.Pretty<A>, error: pretty_.Pretty<E>): pretty_.Pretty<exit_.Exit<A, E>> => (exit) =>
    exit._tag === "Failure"
      ? `Exit.failCause(${causePretty(error)(exit.cause)})`
      : `Exit.succeed(${value(exit.value)})`

const exitParse = <A, R, E, ER>(
  decodeUnknownValue: ParseResult.DecodeUnknown<A, R>,
  decodeUnknownCause: ParseResult.DecodeUnknown<cause_.Cause<E>, ER>
): ParseResult.DeclarationDecodeUnknown<exit_.Exit<A, E>, ER | R> =>
(u, options, ast) =>
  exit_.isExit(u) ?
    exit_.match(u, {
      onFailure: (cause) => toComposite(decodeUnknownCause(cause, options), exit_.failCause, ast, u),
      onSuccess: (value) => toComposite(decodeUnknownValue(value, options), exit_.succeed, ast, u)
    })
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ExitFromSelf<A extends Schema.All, E extends Schema.All, D extends Schema.All>
  extends
    AnnotableDeclare<
      ExitFromSelf<A, E, D>,
      exit_.Exit<Schema.Type<A>, Schema.Type<E>>,
      exit_.Exit<Schema.Encoded<A>, Schema.Encoded<E>>,
      [A, E, D]
    >
{}

/**
 * @category Exit transformations
 * @since 3.10.0
 */
export const ExitFromSelf = <A extends Schema.All, E extends Schema.All, D extends Schema.All>(
  { defect, failure, success }: {
    readonly failure: E
    readonly success: A
    readonly defect: D
  }
): ExitFromSelf<A, E, D> =>
  declare(
    [success, failure, defect],
    {
      decode: (success, failure, defect) =>
        exitParse(
          ParseResult.decodeUnknown(success),
          ParseResult.decodeUnknown(CauseFromSelf({ error: failure, defect }))
        ),
      encode: (success, failure, defect) =>
        exitParse(
          ParseResult.encodeUnknown(success),
          ParseResult.encodeUnknown(CauseFromSelf({ error: failure, defect }))
        )
    },
    {
      typeConstructor: { _tag: "effect/Exit" },
      title: `Exit<${success.ast}, ${failure.ast}>`,
      pretty: exitPretty,
      arbitrary: exitArbitrary
    }
  )

/**
 * @category api interface
 * @since 3.10.0
 */
export interface Exit<A extends Schema.All, E extends Schema.All, D extends Schema.All> extends
  transform<
    Union<[
      Struct<{
        _tag: Literal<["Failure"]>
        cause: SchemaClass<
          CauseEncoded<Schema.Type<E>, Schema.Type<D>>,
          CauseEncoded<Schema.Encoded<E>, Schema.Encoded<D>>,
          Schema.Context<E> | Schema.Context<D>
        >
      }>,
      Struct<{
        _tag: Literal<["Success"]>
        value: A
      }>
    ]>,
    ExitFromSelf<SchemaClass<Schema.Type<A>>, SchemaClass<Schema.Type<E>>, SchemaClass<Schema.Type<D>>>
  >
{}

/**
 * @category Exit transformations
 * @since 3.10.0
 */
export const Exit = <A extends Schema.All, E extends Schema.All, D extends Schema.All>(
  { defect, failure, success }: {
    readonly failure: E
    readonly success: A
    readonly defect: D
  }
): Exit<A, E, D> => {
  const success_ = asSchema(success)
  const failure_ = asSchema(failure)
  const defect_ = asSchema(defect)
  const out = transform(
    exitEncoded(success_, failure_, defect_),
    ExitFromSelf({ failure: typeSchema(failure_), success: typeSchema(success_), defect: typeSchema(defect_) }),
    {
      strict: false,
      decode: (i) => exitDecode(i),
      encode: (a) =>
        a._tag === "Failure"
          ? { _tag: "Failure", cause: a.cause } as const
          : { _tag: "Success", value: a.value } as const
    }
  )
  return out as any
}

const hashSetArbitrary =
  <A>(item: LazyArbitrary<A>, ctx: ArbitraryGenerationContext): LazyArbitrary<hashSet_.HashSet<A>> => (fc) => {
    const items = fc.array(item(fc))
    return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(
      hashSet_.fromIterable
    )
  }

const hashSetPretty = <A>(item: pretty_.Pretty<A>): pretty_.Pretty<hashSet_.HashSet<A>> => (set) =>
  `HashSet(${Array.from(set).map((a) => item(a)).join(", ")})`

const hashSetEquivalence = <A>(
  item: Equivalence.Equivalence<A>
): Equivalence.Equivalence<hashSet_.HashSet<A>> => {
  const arrayEquivalence = array_.getEquivalence(item)
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)))
}

const hashSetParse = <A, R>(
  decodeUnknown: ParseResult.DecodeUnknown<ReadonlyArray<A>, R>
): ParseResult.DeclarationDecodeUnknown<hashSet_.HashSet<A>, R> =>
(u, options, ast) =>
  hashSet_.isHashSet(u) ?
    toComposite(decodeUnknown(Array.from(u), options), hashSet_.fromIterable, ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashSetFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    HashSetFromSelf<Value>,
    hashSet_.HashSet<Schema.Type<Value>>,
    hashSet_.HashSet<Schema.Encoded<Value>>,
    [Value]
  >
{}

/**
 * @category HashSet transformations
 * @since 3.10.0
 */
export const HashSetFromSelf = <Value extends Schema.Any>(
  value: Value
): HashSetFromSelf<Value> => {
  return declare(
    [value],
    {
      decode: (item) => hashSetParse(ParseResult.decodeUnknown(Array$(item))),
      encode: (item) => hashSetParse(ParseResult.encodeUnknown(Array$(item)))
    },
    {
      typeConstructor: { _tag: "effect/HashSet" },
      description: `HashSet<${format(value)}>`,
      pretty: hashSetPretty,
      arbitrary: hashSetArbitrary,
      equivalence: hashSetEquivalence
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashSet<Value extends Schema.Any>
  extends transform<Array$<Value>, HashSetFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category HashSet transformations
 * @since 3.10.0
 */
export function HashSet<Value extends Schema.Any>(value: Value): HashSet<Value> {
  return transform(
    Array$(value),
    HashSetFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => hashSet_.fromIterable(i),
      encode: (a) => Array.from(a)
    }
  )
}

const hashMapArbitrary = <K, V>(
  key: LazyArbitrary<K>,
  value: LazyArbitrary<V>,
  ctx: ArbitraryGenerationContext
): LazyArbitrary<hashMap_.HashMap<K, V>> =>
(fc) => {
  const items = fc.array(fc.tuple(key(fc), value(fc)))
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(hashMap_.fromIterable)
}

const hashMapPretty = <K, V>(
  key: pretty_.Pretty<K>,
  value: pretty_.Pretty<V>
): pretty_.Pretty<hashMap_.HashMap<K, V>> =>
(map) =>
  `HashMap([${
    Array.from(map)
      .map(([k, v]) => `[${key(k)}, ${value(v)}]`)
      .join(", ")
  }])`

const hashMapEquivalence = <K, V>(
  key: Equivalence.Equivalence<K>,
  value: Equivalence.Equivalence<V>
): Equivalence.Equivalence<hashMap_.HashMap<K, V>> => {
  const arrayEquivalence = array_.getEquivalence(
    Equivalence.make<[K, V]>(([ka, va], [kb, vb]) => key(ka, kb) && value(va, vb))
  )
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)))
}

const hashMapParse = <R, K, V>(
  decodeUnknown: ParseResult.DecodeUnknown<ReadonlyArray<readonly [K, V]>, R>
): ParseResult.DeclarationDecodeUnknown<hashMap_.HashMap<K, V>, R> =>
(u, options, ast) =>
  hashMap_.isHashMap(u) ?
    toComposite(decodeUnknown(Array.from(u), options), hashMap_.fromIterable, ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashMapFromSelf<K extends Schema.Any, V extends Schema.Any> extends
  AnnotableDeclare<
    HashMapFromSelf<K, V>,
    hashMap_.HashMap<Schema.Type<K>, Schema.Type<V>>,
    hashMap_.HashMap<Schema.Encoded<K>, Schema.Encoded<V>>,
    [K, V]
  >
{}

/**
 * @category HashMap transformations
 * @since 3.10.0
 */
export const HashMapFromSelf = <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
  readonly key: K
  readonly value: V
}): HashMapFromSelf<K, V> => {
  return declare(
    [key, value],
    {
      decode: (key, value) => hashMapParse(ParseResult.decodeUnknown(Array$(Tuple(key, value)))),
      encode: (key, value) => hashMapParse(ParseResult.encodeUnknown(Array$(Tuple(key, value))))
    },
    {
      typeConstructor: { _tag: "effect/HashMap" },
      description: `HashMap<${format(key)}, ${format(value)}>`,
      pretty: hashMapPretty,
      arbitrary: hashMapArbitrary,
      equivalence: hashMapEquivalence
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashMap<K extends Schema.Any, V extends Schema.Any>
  extends transform<Array$<Tuple2<K, V>>, HashMapFromSelf<SchemaClass<Schema.Type<K>>, SchemaClass<Schema.Type<V>>>>
{}

/**
 * @category HashMap transformations
 * @since 3.10.0
 */
export const HashMap = <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
  readonly key: K
  readonly value: V
}): HashMap<K, V> => {
  return transform(
    Array$(Tuple(key, value)),
    HashMapFromSelf({ key: typeSchema(asSchema(key)), value: typeSchema(asSchema(value)) }),
    {
      strict: true,
      decode: (i) => hashMap_.fromIterable(i),
      encode: (a) => Array.from(a)
    }
  )
}

const listArbitrary =
  <A>(item: LazyArbitrary<A>, ctx: ArbitraryGenerationContext): LazyArbitrary<list_.List<A>> => (fc) => {
    const items = fc.array(item(fc))
    return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(list_.fromIterable)
  }

const listPretty = <A>(item: pretty_.Pretty<A>): pretty_.Pretty<list_.List<A>> => (set) =>
  `List(${Array.from(set).map((a) => item(a)).join(", ")})`

const listEquivalence = <A>(
  item: Equivalence.Equivalence<A>
): Equivalence.Equivalence<list_.List<A>> => {
  const arrayEquivalence = array_.getEquivalence(item)
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)))
}

const listParse = <A, R>(
  decodeUnknown: ParseResult.DecodeUnknown<ReadonlyArray<A>, R>
): ParseResult.DeclarationDecodeUnknown<list_.List<A>, R> =>
(u, options, ast) =>
  list_.isList(u) ?
    toComposite(decodeUnknown(Array.from(u), options), list_.fromIterable, ast, u)
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface ListFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    ListFromSelf<Value>,
    list_.List<Schema.Type<Value>>,
    list_.List<Schema.Encoded<Value>>,
    [Value]
  >
{}

/**
 * @category List transformations
 * @since 3.10.0
 */
export const ListFromSelf = <Value extends Schema.Any>(
  value: Value
): ListFromSelf<Value> => {
  return declare(
    [value],
    {
      decode: (item) => listParse(ParseResult.decodeUnknown(Array$(item))),
      encode: (item) => listParse(ParseResult.encodeUnknown(Array$(item)))
    },
    {
      typeConstructor: { _tag: "effect/List" },
      description: `List<${format(value)}>`,
      pretty: listPretty,
      arbitrary: listArbitrary,
      equivalence: listEquivalence
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface List<Value extends Schema.Any>
  extends transform<Array$<Value>, ListFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category List transformations
 * @since 3.10.0
 */
export function List<Value extends Schema.Any>(value: Value): List<Value> {
  return transform(
    Array$(value),
    ListFromSelf(typeSchema(asSchema(value))),
    {
      strict: true,
      decode: (i) => list_.fromIterable(i),
      encode: (a) => Array.from(a)
    }
  )
}

const sortedSetArbitrary = <A>(
  item: LazyArbitrary<A>,
  ord: Order.Order<A>,
  ctx: ArbitraryGenerationContext
): LazyArbitrary<sortedSet_.SortedSet<A>> =>
(fc) => {
  const items = fc.array(item(fc))
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map((as) =>
    sortedSet_.fromIterable(as, ord)
  )
}

const sortedSetPretty = <A>(item: pretty_.Pretty<A>): pretty_.Pretty<sortedSet_.SortedSet<A>> => (set) =>
  `new SortedSet([${Array.from(sortedSet_.values(set)).map((a) => item(a)).join(", ")}])`

const sortedSetParse = <A, R>(
  decodeUnknown: ParseResult.DecodeUnknown<ReadonlyArray<A>, R>,
  ord: Order.Order<A>
): ParseResult.DeclarationDecodeUnknown<sortedSet_.SortedSet<A>, R> =>
(u, options, ast) =>
  sortedSet_.isSortedSet(u) ?
    toComposite(
      decodeUnknown(Array.from(sortedSet_.values(u)), options),
      (as): sortedSet_.SortedSet<A> => sortedSet_.fromIterable(as, ord),
      ast,
      u
    )
    : ParseResult.fail(new ParseResult.Type(ast, u))

/**
 * @category api interface
 * @since 3.10.0
 */
export interface SortedSetFromSelf<Value extends Schema.Any> extends
  AnnotableDeclare<
    SortedSetFromSelf<Value>,
    sortedSet_.SortedSet<Schema.Type<Value>>,
    sortedSet_.SortedSet<Schema.Encoded<Value>>,
    [Value]
  >
{}

/**
 * @category SortedSet transformations
 * @since 3.10.0
 */
export const SortedSetFromSelf = <Value extends Schema.Any>(
  value: Value,
  ordA: Order.Order<Schema.Type<Value>>,
  ordI: Order.Order<Schema.Encoded<Value>>
): SortedSetFromSelf<Value> => {
  return declare(
    [value],
    {
      decode: (item) => sortedSetParse(ParseResult.decodeUnknown(Array$(item)), ordA),
      encode: (item) => sortedSetParse(ParseResult.encodeUnknown(Array$(item)), ordI)
    },
    {
      typeConstructor: { _tag: "effect/SortedSet" },
      description: `SortedSet<${format(value)}>`,
      pretty: sortedSetPretty,
      arbitrary: (arb, ctx) => sortedSetArbitrary(arb, ordA, ctx),
      equivalence: () => sortedSet_.getEquivalence<Schema.Type<Value>>()
    }
  )
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface SortedSet<Value extends Schema.Any>
  extends transform<Array$<Value>, SortedSetFromSelf<SchemaClass<Schema.Type<Value>>>>
{}

/**
 * @category SortedSet transformations
 * @since 3.10.0
 */
export function SortedSet<Value extends Schema.Any>(
  value: Value,
  ordA: Order.Order<Schema.Type<Value>>
): SortedSet<Value> {
  const to = typeSchema(asSchema(value))
  return transform(
    Array$(value),
    SortedSetFromSelf<typeof to>(to, ordA, ordA),
    {
      strict: true,
      decode: (i) => sortedSet_.fromIterable(i, ordA),
      encode: (a) => Array.from(sortedSet_.values(a))
    }
  )
}

/**
 * Converts an arbitrary value to a `boolean` by testing whether it is truthy.
 * Uses `!!val` to coerce the value to a `boolean`.
 *
 * @see https://developer.mozilla.org/docs/Glossary/Truthy
 *
 * @category boolean constructors
 * @since 3.10.0
 */
export class BooleanFromUnknown extends transform(
  Unknown,
  Boolean$,
  {
    strict: true,
    decode: (i) => Predicate.isTruthy(i),
    encode: identity
  }
).annotations({ identifier: "BooleanFromUnknown" }) {}

/**
 * Converts an `string` value into its corresponding `boolean`
 * ("true" as `true` and "false" as `false`).
 *
 * @category boolean transformations
 * @since 3.11.0
 */
export class BooleanFromString extends transform(
  Literal("true", "false").annotations({ description: "a string to be decoded into a boolean" }),
  Boolean$,
  {
    strict: true,
    decode: (i) => i === "true",
    encode: (a) => a ? "true" : "false"
  }
).annotations({ identifier: "BooleanFromString" }) {}

/**
 * @category Config validations
 * @since 3.10.0
 */
export const Config = <A, I extends string>(name: string, schema: Schema<A, I>): config_.Config<A> => {
  const decodeUnknownEither = ParseResult.decodeUnknownEither(schema)
  return config_.string(name).pipe(
    config_.mapOrFail((s) =>
      decodeUnknownEither(s).pipe(
        either_.mapLeft((error) => configError_.InvalidData([], ParseResult.TreeFormatter.formatIssueSync(error)))
      )
    )
  )
}

// ---------------------------------------------
// Serializable
// ---------------------------------------------

/**
 * @since 3.10.0
 * @category symbol
 */
export const symbolSerializable: unique symbol = Symbol.for(
  "effect/Schema/Serializable/symbol"
)

/**
 * The `Serializable` trait allows objects to define their own schema for
 * serialization.
 *
 * @since 3.10.0
 * @category model
 */
export interface Serializable<A, I, R> {
  readonly [symbolSerializable]: Schema<A, I, R>
}

/**
 * @since 3.10.0
 * @category model
 */
export declare namespace Serializable {
  /**
   * @since 3.10.0
   */
  export type Type<T> = T extends Serializable<infer A, infer _I, infer _R> ? A : never
  /**
   * @since 3.10.0
   */
  export type Encoded<T> = T extends Serializable<infer _A, infer I, infer _R> ? I : never
  /**
   * @since 3.10.0
   */
  export type Context<T> = T extends Serializable<infer _A, infer _I, infer R> ? R : never
  /**
   * @since 3.10.0
   */
  export type Any = Serializable<any, any, unknown>
  /**
   * @since 3.10.0
   */
  export type All =
    | Any
    | Serializable<any, never, unknown>
    | Serializable<never, any, unknown>
    | Serializable<never, never, unknown>
}

/**
 * @since 3.10.0
 */
export const asSerializable = <S extends Serializable.All>(
  serializable: S
): Serializable<Serializable.Type<S>, Serializable.Encoded<S>, Serializable.Context<S>> => serializable as any

/**
 * @since 3.10.0
 * @category accessor
 */
export const serializableSchema = <A, I, R>(self: Serializable<A, I, R>): Schema<A, I, R> => self[symbolSerializable]

/**
 * @since 3.10.0
 * @category encoding
 */
export const serialize = <A, I, R>(self: Serializable<A, I, R>): Effect.Effect<I, ParseResult.ParseError, R> =>
  encodeUnknown(self[symbolSerializable])(self)

/**
 * @since 3.10.0
 * @category decoding
 */
export const deserialize: {
  /**
   * @since 3.10.0
   * @category decoding
   */
  (value: unknown): <A, I, R>(self: Serializable<A, I, R>) => Effect.Effect<A, ParseResult.ParseError, R>
  /**
   * @since 3.10.0
   * @category decoding
   */
  <A, I, R>(self: Serializable<A, I, R>, value: unknown): Effect.Effect<A, ParseResult.ParseError, R>
} = dual(
  2,
  <A, I, R>(self: Serializable<A, I, R>, value: unknown): Effect.Effect<A, ParseResult.ParseError, R> =>
    decodeUnknown(self[symbolSerializable])(value)
)

/**
 * @since 3.10.0
 * @category symbol
 */
export const symbolWithResult: unique symbol = Symbol.for(
  "effect/Schema/Serializable/symbolResult"
)

/**
 * The `WithResult` trait is designed to encapsulate the outcome of an
 * operation, distinguishing between success and failure cases. Each case is
 * associated with a schema that defines the structure and types of the success
 * or failure data.
 *
 * @since 3.10.0
 * @category model
 */
export interface WithResult<Success, SuccessEncoded, Failure, FailureEncoded, ResultR> {
  readonly [symbolWithResult]: {
    readonly success: Schema<Success, SuccessEncoded, ResultR>
    readonly failure: Schema<Failure, FailureEncoded, ResultR>
  }
}

/**
 * @since 3.10.0
 * @category model
 */
export declare namespace WithResult {
  /**
   * @since 3.10.0
   */
  export type Success<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _A : never
  /**
   * @since 3.10.0
   */
  export type SuccessEncoded<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _I : never
  /**
   * @since 3.10.0
   */
  export type Failure<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _E : never
  /**
   * @since 3.10.0
   */
  export type FailureEncoded<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _EI : never

  /**
   * @since 3.10.0
   */
  export type Context<T> = T extends WithResult<infer _SA, infer _SI, infer _FA, infer _FI, infer R> ? R : never
  /**
   * @since 3.10.0
   */
  export type Any = WithResult<any, any, any, any, unknown>
  /**
   * @since 3.10.0
   */
  export type All =
    | Any
    | WithResult<any, any, never, never, unknown>
}

/**
 * @since 3.10.0
 */
export const asWithResult = <WR extends WithResult.All>(
  withExit: WR
): WithResult<
  WithResult.Success<WR>,
  WithResult.SuccessEncoded<WR>,
  WithResult.Failure<WR>,
  WithResult.FailureEncoded<WR>,
  WithResult.Context<WR>
> => withExit as any

/**
 * @since 3.10.0
 * @category accessor
 */
export const failureSchema = <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>): Schema<FA, FI, R> =>
  self[symbolWithResult].failure

/**
 * @since 3.10.0
 * @category accessor
 */
export const successSchema = <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>): Schema<SA, SI, R> =>
  self[symbolWithResult].success

const exitSchemaCache = globalValue(
  "effect/Schema/Serializable/exitSchemaCache",
  () => new WeakMap<object, Schema<any, any, any>>()
)

/**
 * @since 3.10.0
 * @category accessor
 */
export const exitSchema = <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>): Schema<
  exit_.Exit<SA, FA>,
  ExitEncoded<SI, FI, unknown>,
  R
> => {
  const proto = Object.getPrototypeOf(self)
  if (!(symbolWithResult in proto)) {
    return Exit({
      failure: failureSchema(self),
      success: successSchema(self),
      defect: Defect
    })
  }
  let schema = exitSchemaCache.get(proto)
  if (schema === undefined) {
    schema = Exit({
      failure: failureSchema(self),
      success: successSchema(self),
      defect: Defect
    })
    exitSchemaCache.set(proto, schema)
  }
  return schema
}

/**
 * @since 3.10.0
 * @category encoding
 */
export const serializeFailure: {
  /**
   * @since 3.10.0
   * @category encoding
   */
  <FA>(value: FA): <SA, SI, FI, R>(
    self: WithResult<SA, SI, FA, FI, R>
  ) => Effect.Effect<FI, ParseResult.ParseError, R>
  /**
   * @since 3.10.0
   * @category encoding
   */
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: FA): Effect.Effect<FI, ParseResult.ParseError, R>
} = dual(
  2,
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: FA): Effect.Effect<FI, ParseResult.ParseError, R> =>
    encode(self[symbolWithResult].failure)(value)
)

/**
 * @since 3.10.0
 * @category decoding
 */
export const deserializeFailure: {
  /**
   * @since 3.10.0
   * @category decoding
   */
  (value: unknown): <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Effect.Effect<FA, ParseResult.ParseError, R>
  /**
   * @since 3.10.0
   * @category decoding
   */
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: unknown): Effect.Effect<FA, ParseResult.ParseError, R>
} = dual(
  2,
  <SA, SI, FA, FI, R>(
    self: WithResult<SA, SI, FA, FI, R>,
    value: unknown
  ): Effect.Effect<FA, ParseResult.ParseError, R> => decodeUnknown(self[symbolWithResult].failure)(value)
)

/**
 * @since 3.10.0
 * @category encoding
 */
export const serializeSuccess: {
  /**
   * @since 3.10.0
   * @category encoding
   */
  <SA>(value: SA): <SI, FA, FI, R>(
    self: WithResult<SA, SI, FA, FI, R>
  ) => Effect.Effect<SI, ParseResult.ParseError, R>
  /**
   * @since 3.10.0
   * @category encoding
   */
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: SA): Effect.Effect<SI, ParseResult.ParseError, R>
} = dual(
  2,
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: SA): Effect.Effect<SI, ParseResult.ParseError, R> =>
    encode(self[symbolWithResult].success)(value)
)

/**
 * @since 3.10.0
 * @category decoding
 */
export const deserializeSuccess: {
  /**
   * @since 3.10.0
   * @category decoding
   */
  (value: unknown): <SA, SI, FA, FI, R>(
    self: WithResult<SA, SI, FA, FI, R>
  ) => Effect.Effect<SA, ParseResult.ParseError, R>
  /**
   * @since 3.10.0
   * @category decoding
   */
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: unknown): Effect.Effect<SA, ParseResult.ParseError, R>
} = dual(
  2,
  <SA, SI, FA, FI, R>(
    self: WithResult<SA, SI, FA, FI, R>,
    value: unknown
  ): Effect.Effect<SA, ParseResult.ParseError, R> => decodeUnknown(self[symbolWithResult].success)(value)
)

/**
 * @since 3.10.0
 * @category encoding
 */
export const serializeExit: {
  /**
   * @since 3.10.0
   * @category encoding
   */
  <SA, FA>(value: exit_.Exit<SA, FA>): <SI, FI, R>(
    self: WithResult<SA, SI, FA, FI, R>
  ) => Effect.Effect<ExitEncoded<SI, FI, unknown>, ParseResult.ParseError, R>
  /**
   * @since 3.10.0
   * @category encoding
   */
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: exit_.Exit<SA, FA>): Effect.Effect<ExitEncoded<SI, FI, unknown>, ParseResult.ParseError, R>
} = dual(2, <SA, SI, FA, FI, R>(
  self: WithResult<SA, SI, FA, FI, R>,
  value: exit_.Exit<SA, FA>
): Effect.Effect<ExitEncoded<SI, FI, unknown>, ParseResult.ParseError, R> => encode(exitSchema(self))(value))

/**
 * @since 3.10.0
 * @category decoding
 */
export const deserializeExit: {
  /**
   * @since 3.10.0
   * @category decoding
   */
  (value: unknown): <SA, SI, FA, FI, R>(
    self: WithResult<SA, SI, FA, FI, R>
  ) => Effect.Effect<exit_.Exit<SA, FA>, ParseResult.ParseError, R>
  /**
   * @since 3.10.0
   * @category decoding
   */
  <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: unknown): Effect.Effect<exit_.Exit<SA, FA>, ParseResult.ParseError, R>
} = dual(2, <SA, SI, FA, FI, R>(
  self: WithResult<SA, SI, FA, FI, R>,
  value: unknown
): Effect.Effect<exit_.Exit<SA, FA>, ParseResult.ParseError, R> => decodeUnknown(exitSchema(self))(value))

// ---------------------------------------------
// SerializableWithResult
// ---------------------------------------------

/**
 * The `SerializableWithResult` trait is specifically designed to model remote
 * procedures that require serialization of their input and output, managing
 * both successful and failed outcomes.
 *
 * This trait combines functionality from both the `Serializable` and `WithResult`
 * traits to handle data serialization and the bifurcation of operation results
 * into success or failure categories.
 *
 * @since 3.10.0
 * @category model
 */
export interface SerializableWithResult<
  A,
  I,
  R,
  Success,
  SuccessEncoded,
  Failure,
  FailureEncoded,
  ResultR
> extends Serializable<A, I, R>, WithResult<Success, SuccessEncoded, Failure, FailureEncoded, ResultR> {}

/**
 * @since 3.10.0
 * @category model
 */
export declare namespace SerializableWithResult {
  /**
   * @since 3.10.0
   */
  export type Context<P> = P extends
    SerializableWithResult<infer _S, infer _SI, infer SR, infer _A, infer _AI, infer _E, infer _EI, infer RR> ? SR | RR
    : never
  /**
   * @since 3.10.0
   */
  export type Any = SerializableWithResult<any, any, any, any, any, any, any, unknown>
  /**
   * @since 3.10.0
   */
  export type All =
    | Any
    | SerializableWithResult<any, any, any, any, any, never, never, unknown>
}

/**
 * @since 3.10.0
 */
export const asSerializableWithResult = <SWR extends SerializableWithResult.All>(
  procedure: SWR
): SerializableWithResult<
  Serializable.Type<SWR>,
  Serializable.Encoded<SWR>,
  Serializable.Context<SWR>,
  WithResult.Success<SWR>,
  WithResult.SuccessEncoded<SWR>,
  WithResult.Failure<SWR>,
  WithResult.FailureEncoded<SWR>,
  WithResult.Context<SWR>
> => procedure as any

/**
 * @since 3.10.0
 */
export interface TaggedRequest<
  Tag extends string,
  A,
  I,
  R,
  SuccessType,
  SuccessEncoded,
  FailureType,
  FailureEncoded,
  ResultR
> extends
  Request.Request<SuccessType, FailureType>,
  SerializableWithResult<
    A,
    I,
    R,
    SuccessType,
    SuccessEncoded,
    FailureType,
    FailureEncoded,
    ResultR
  >
{
  readonly _tag: Tag
}

/**
 * @since 3.10.0
 */
export declare namespace TaggedRequest {
  /**
   * @since 3.10.0
   */
  export type Any = TaggedRequest<string, any, any, any, any, any, any, any, unknown>
  /**
   * @since 3.10.0
   */
  export type All =
    | Any
    | TaggedRequest<string, any, any, any, any, any, never, never, unknown>
}

/**
 * @category api interface
 * @since 3.10.0
 */
export interface TaggedRequestClass<
  Self,
  Tag extends string,
  Payload extends Struct.Fields,
  Success extends Schema.All,
  Failure extends Schema.All
> extends
  Class<
    Self,
    Payload,
    Struct.Encoded<Payload>,
    Struct.Context<Payload>,
    Struct.Constructor<Omit<Payload, "_tag">>,
    TaggedRequest<
      Tag,
      Self,
      Struct.Encoded<Payload>,
      Struct.Context<Payload>,
      Schema.Type<Success>,
      Schema.Encoded<Success>,
      Schema.Type<Failure>,
      Schema.Encoded<Failure>,
      Schema.Context<Success> | Schema.Context<Failure>
    >,
    {}
  >
{
  readonly _tag: Tag
  readonly success: Success
  readonly failure: Failure
}

/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyRequest extends Schema.TaggedRequest<MyRequest>("MyRequest")("MyRequest", {
 *  failure: Schema.String,
 *  success: Schema.Number,
 *  payload: { id: Schema.String }
 * }) {}
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
export const TaggedRequest =
  <Self = never>(identifier?: string) =>
  <Tag extends string, Payload extends Struct.Fields, Success extends Schema.All, Failure extends Schema.All>(
    tag: Tag,
    options: {
      failure: Failure
      success: Success
      payload: Payload
    },
    annotations?: ClassAnnotations<Self, Simplify<Struct.Type<{ readonly _tag: tag<Tag> } & Payload>>>
  ): [Self] extends [never] ? MissingSelfGeneric<"TaggedRequest", `"Tag", SuccessSchema, FailureSchema, `>
    : TaggedRequestClass<
      Self,
      Tag,
      { readonly _tag: tag<Tag> } & Payload,
      Success,
      Failure
    > =>
  {
    const taggedFields = extendFields({ _tag: getClassTag(tag) }, options.payload)
    return class TaggedRequestClass extends makeClass({
      kind: "TaggedRequest",
      identifier: identifier ?? tag,
      schema: Struct(taggedFields),
      fields: taggedFields,
      Base: Request.Class<any, any, { readonly _tag: string }>,
      annotations
    }) {
      static _tag = tag
      static success = options.success
      static failure = options.failure
      get [symbolSerializable]() {
        return this.constructor
      }
      get [symbolWithResult]() {
        return {
          failure: options.failure,
          success: options.success
        }
      }
    } as any
  }

// -------------------------------------------------------------------------------------------------
// Equivalence compiler
// -------------------------------------------------------------------------------------------------

/**
 * Given a schema `Schema<A, I, R>`, returns an `Equivalence` instance for `A`.
 *
 * @category Equivalence
 * @since 3.10.0
 */
export const equivalence = <A, I, R>(schema: Schema<A, I, R>): Equivalence.Equivalence<A> => go(schema.ast, [])

const getEquivalenceAnnotation = AST.getAnnotation<AST.EquivalenceAnnotation<any, any>>(AST.EquivalenceAnnotationId)

const go = (ast: AST.AST, path: ReadonlyArray<PropertyKey>): Equivalence.Equivalence<any> => {
  const hook = getEquivalenceAnnotation(ast)
  if (option_.isSome(hook)) {
    switch (ast._tag) {
      case "Declaration":
        return hook.value(...ast.typeParameters.map((tp) => go(tp, path)))
      case "Refinement":
        return hook.value(go(ast.from, path))
      default:
        return hook.value()
    }
  }
  switch (ast._tag) {
    case "NeverKeyword":
      throw new Error(errors_.getEquivalenceUnsupportedErrorMessage(ast, path))
    case "Transformation":
      return go(ast.to, path)
    case "Declaration":
    case "Literal":
    case "StringKeyword":
    case "TemplateLiteral":
    case "UniqueSymbol":
    case "SymbolKeyword":
    case "UnknownKeyword":
    case "AnyKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "Enums":
    case "ObjectKeyword":
      return Equal.equals
    case "Refinement":
      return go(ast.from, path)
    case "Suspend": {
      const get = util_.memoizeThunk(() => go(ast.f(), path))
      return (a, b) => get()(a, b)
    }
    case "TupleType": {
      const elements = ast.elements.map((element, i) => go(element.type, path.concat(i)))
      const rest = ast.rest.map((annotatedAST) => go(annotatedAST.type, path))
      return Equivalence.make((a, b) => {
        if (!Array.isArray(a) || !Array.isArray(b)) {
          return false
        }
        const len = a.length
        if (len !== b.length) {
          return false
        }
        // ---------------------------------------------
        // handle elements
        // ---------------------------------------------
        let i = 0
        for (; i < Math.min(len, ast.elements.length); i++) {
          if (!elements[i](a[i], b[i])) {
            return false
          }
        }
        // ---------------------------------------------
        // handle rest element
        // ---------------------------------------------
        if (array_.isNonEmptyReadonlyArray(rest)) {
          const [head, ...tail] = rest
          for (; i < len - tail.length; i++) {
            if (!head(a[i], b[i])) {
              return false
            }
          }
          // ---------------------------------------------
          // handle post rest elements
          // ---------------------------------------------
          for (let j = 0; j < tail.length; j++) {
            i += j
            if (!tail[j](a[i], b[i])) {
              return false
            }
          }
        }
        return true
      })
    }
    case "TypeLiteral": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
        return Equal.equals
      }
      const propertySignatures = ast.propertySignatures.map((ps) => go(ps.type, path.concat(ps.name)))
      const indexSignatures = ast.indexSignatures.map((is) => go(is.type, path))
      return Equivalence.make((a, b) => {
        if (!Predicate.isRecord(a) || !Predicate.isRecord(b)) {
          return false
        }
        const aStringKeys = Object.keys(a)
        const aSymbolKeys = Object.getOwnPropertySymbols(a)
        // ---------------------------------------------
        // handle property signatures
        // ---------------------------------------------
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = ast.propertySignatures[i]
          const name = ps.name
          const aHas = Object.prototype.hasOwnProperty.call(a, name)
          const bHas = Object.prototype.hasOwnProperty.call(b, name)
          if (ps.isOptional) {
            if (aHas !== bHas) {
              return false
            }
          }
          if (aHas && bHas && !propertySignatures[i](a[name], b[name])) {
            return false
          }
        }
        // ---------------------------------------------
        // handle index signatures
        // ---------------------------------------------
        let bSymbolKeys: Array<symbol> | undefined
        let bStringKeys: Array<string> | undefined
        for (let i = 0; i < indexSignatures.length; i++) {
          const is = ast.indexSignatures[i]
          const encodedParameter = AST.getEncodedParameter(is.parameter)
          const isSymbol = AST.isSymbolKeyword(encodedParameter)
          if (isSymbol) {
            bSymbolKeys = bSymbolKeys || Object.getOwnPropertySymbols(b)
            if (aSymbolKeys.length !== bSymbolKeys.length) {
              return false
            }
          } else {
            bStringKeys = bStringKeys || Object.keys(b)
            if (aStringKeys.length !== bStringKeys.length) {
              return false
            }
          }
          const aKeys = isSymbol ? aSymbolKeys : aStringKeys
          for (let j = 0; j < aKeys.length; j++) {
            const key = aKeys[j]
            if (
              !Object.prototype.hasOwnProperty.call(b, key) || !indexSignatures[i](a[key], b[key])
            ) {
              return false
            }
          }
        }
        return true
      })
    }
    case "Union": {
      const searchTree = ParseResult.getSearchTree(ast.types, true)
      const ownKeys = Reflect.ownKeys(searchTree.keys)
      const len = ownKeys.length
      return Equivalence.make((a, b) => {
        let candidates: Array<AST.AST> = []
        if (len > 0 && Predicate.isRecordOrArray(a)) {
          for (let i = 0; i < len; i++) {
            const name = ownKeys[i]
            const buckets = searchTree.keys[name].buckets
            if (Object.prototype.hasOwnProperty.call(a, name)) {
              const literal = String(a[name])
              if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                candidates = candidates.concat(buckets[literal])
              }
            }
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise)
        }
        const tuples = candidates.map((ast) => [go(ast, path), ParseResult.is({ ast } as any)] as const)
        for (let i = 0; i < tuples.length; i++) {
          const [equivalence, is] = tuples[i]
          if (is(a) && is(b)) {
            if (equivalence(a, b)) {
              return true
            }
          }
        }
        return false
      })
    }
  }
}

const SymbolStruct = TaggedStruct("symbol", {
  key: String$
}).annotations({ description: "an object to be decoded into a globally shared symbol" })

const SymbolFromStruct = transformOrFail(
  SymbolStruct,
  SymbolFromSelf,
  {
    strict: true,
    decode: (i) => decodeSymbol(i.key),
    encode: (a, _, ast) => ParseResult.map(encodeSymbol(a, ast), (key) => SymbolStruct.make({ key }))
  }
)

/** @ignore */
class PropertyKey$ extends Union(String$, Number$, SymbolFromStruct).annotations({ identifier: "PropertyKey" }) {}

export {
  /**
   * @since 3.12.5
   */
  PropertyKey$ as PropertyKey
}

/**
 * @category ArrayFormatter
 * @since 3.12.5
 */
export class ArrayFormatterIssue extends Struct({
  _tag: propertySignature(Literal(
    "Pointer",
    "Unexpected",
    "Missing",
    "Composite",
    "Refinement",
    "Transformation",
    "Type",
    "Forbidden"
  )).annotations({ description: "The tag identifying the type of parse issue" }),
  path: propertySignature(Array$(PropertyKey$)).annotations({
    description: "The path to the property where the issue occurred"
  }),
  message: propertySignature(String$).annotations({ description: "A descriptive message explaining the issue" })
}).annotations({
  identifier: "ArrayFormatterIssue",
  description: "Represents an issue returned by the ArrayFormatter formatter"
}) {}
