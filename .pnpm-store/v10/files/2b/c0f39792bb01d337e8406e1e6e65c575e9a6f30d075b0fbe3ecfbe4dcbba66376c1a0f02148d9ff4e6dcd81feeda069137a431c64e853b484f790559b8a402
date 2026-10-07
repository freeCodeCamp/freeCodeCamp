/**
 * @since 3.10.0
 */

import * as Arr from "./Array.js"
import type { Effect } from "./Effect.js"
import type { Equivalence } from "./Equivalence.js"
import { dual, identity } from "./Function.js"
import { globalValue } from "./GlobalValue.js"
import * as Inspectable from "./Inspectable.js"
import * as errors_ from "./internal/schema/errors.js"
import * as util_ from "./internal/schema/util.js"
import * as Number from "./Number.js"
import * as Option from "./Option.js"
import * as Order from "./Order.js"
import type { ParseIssue } from "./ParseResult.js"
import * as Predicate from "./Predicate.js"
import * as regexp from "./RegExp.js"
import type { Concurrency } from "./Types.js"

/**
 * @category model
 * @since 3.10.0
 */
export type AST =
  | Declaration
  | Literal
  | UniqueSymbol
  | UndefinedKeyword
  | VoidKeyword
  | NeverKeyword
  | UnknownKeyword
  | AnyKeyword
  | StringKeyword
  | NumberKeyword
  | BooleanKeyword
  | BigIntKeyword
  | SymbolKeyword
  | ObjectKeyword
  | Enums
  | TemplateLiteral
  // possible transformations
  | Refinement
  | TupleType
  | TypeLiteral
  | Union
  | Suspend
  // transformations
  | Transformation

// -------------------------------------------------------------------------------------
// annotations
// -------------------------------------------------------------------------------------

/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export type TypeConstructorAnnotation = {
  readonly _tag: string
  [key: PropertyKey]: unknown
}

/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export const TypeConstructorAnnotationId: unique symbol = Symbol.for("effect/annotation/TypeConstructor")

/**
 * @category annotations
 * @since 3.10.0
 */
export type BrandAnnotation = Arr.NonEmptyReadonlyArray<string | symbol>

/**
 * @category annotations
 * @since 3.10.0
 */
export const BrandAnnotationId: unique symbol = Symbol.for("effect/annotation/Brand")

/**
 * @category annotations
 * @since 3.10.0
 */
export type SchemaIdAnnotation = string | symbol

/**
 * @category annotations
 * @since 3.10.0
 */
export const SchemaIdAnnotationId: unique symbol = Symbol.for("effect/annotation/SchemaId")

/**
 * @category annotations
 * @since 3.10.0
 */
export type MessageAnnotation = (issue: ParseIssue) => string | Effect<string> | {
  readonly message: string | Effect<string>
  readonly override: boolean
}

/**
 * @category annotations
 * @since 3.10.0
 */
export const MessageAnnotationId: unique symbol = Symbol.for("effect/annotation/Message")

/**
 * @category annotations
 * @since 3.10.0
 */
export type MissingMessageAnnotation = () => string | Effect<string>

/**
 * @category annotations
 * @since 3.10.0
 */
export const MissingMessageAnnotationId: unique symbol = Symbol.for("effect/annotation/MissingMessage")

/**
 * @category annotations
 * @since 3.10.0
 */
export type IdentifierAnnotation = string

/**
 * @category annotations
 * @since 3.10.0
 */
export const IdentifierAnnotationId: unique symbol = Symbol.for("effect/annotation/Identifier")

/**
 * @category annotations
 * @since 3.10.0
 */
export type TitleAnnotation = string

/**
 * @category annotations
 * @since 3.10.0
 */
export const TitleAnnotationId: unique symbol = Symbol.for("effect/annotation/Title")

/** @internal */
export const AutoTitleAnnotationId: unique symbol = Symbol.for("effect/annotation/AutoTitle")

/**
 * @category annotations
 * @since 3.10.0
 */
export type DescriptionAnnotation = string

/**
 * @category annotations
 * @since 3.10.0
 */
export const DescriptionAnnotationId: unique symbol = Symbol.for("effect/annotation/Description")

/**
 * @category annotations
 * @since 3.10.0
 */
export type ExamplesAnnotation<A> = Arr.NonEmptyReadonlyArray<A>

/**
 * @category annotations
 * @since 3.10.0
 */
export const ExamplesAnnotationId: unique symbol = Symbol.for("effect/annotation/Examples")

/**
 * @category annotations
 * @since 3.10.0
 */
export type DefaultAnnotation<A> = A

/**
 * @category annotations
 * @since 3.10.0
 */
export const DefaultAnnotationId: unique symbol = Symbol.for("effect/annotation/Default")

/**
 * @category annotations
 * @since 3.10.0
 */
export type JSONSchemaAnnotation = object

/**
 * @category annotations
 * @since 3.10.0
 */
export const JSONSchemaAnnotationId: unique symbol = Symbol.for("effect/annotation/JSONSchema")

/**
 * @category annotations
 * @since 3.10.0
 */
export const ArbitraryAnnotationId: unique symbol = Symbol.for("effect/annotation/Arbitrary")

/**
 * @category annotations
 * @since 3.10.0
 */
export const PrettyAnnotationId: unique symbol = Symbol.for("effect/annotation/Pretty")

/**
 * @category annotations
 * @since 3.10.0
 */
export type EquivalenceAnnotation<A, TypeParameters extends ReadonlyArray<any> = readonly []> = (
  ...equivalences: { readonly [K in keyof TypeParameters]: Equivalence<TypeParameters[K]> }
) => Equivalence<A>

/**
 * @category annotations
 * @since 3.10.0
 */
export const EquivalenceAnnotationId: unique symbol = Symbol.for("effect/annotation/Equivalence")

/**
 * @category annotations
 * @since 3.10.0
 */
export type DocumentationAnnotation = string

/**
 * @category annotations
 * @since 3.10.0
 */
export const DocumentationAnnotationId: unique symbol = Symbol.for("effect/annotation/Documentation")

/**
 * @category annotations
 * @since 3.10.0
 */
export type ConcurrencyAnnotation = Concurrency | undefined

/**
 * @category annotations
 * @since 3.10.0
 */
export const ConcurrencyAnnotationId: unique symbol = Symbol.for("effect/annotation/Concurrency")

/**
 * @category annotations
 * @since 3.10.0
 */
export type BatchingAnnotation = boolean | "inherit" | undefined

/**
 * @category annotations
 * @since 3.10.0
 */
export const BatchingAnnotationId: unique symbol = Symbol.for("effect/annotation/Batching")

/**
 * @category annotations
 * @since 3.10.0
 */
export type ParseIssueTitleAnnotation = (issue: ParseIssue) => string | undefined

/**
 * @category annotations
 * @since 3.10.0
 */
export const ParseIssueTitleAnnotationId: unique symbol = Symbol.for("effect/annotation/ParseIssueTitle")

/**
 * @category annotations
 * @since 3.10.0
 */
export const ParseOptionsAnnotationId: unique symbol = Symbol.for("effect/annotation/ParseOptions")

/**
 * @category annotations
 * @since 3.10.0
 */
export type DecodingFallbackAnnotation<A> = (issue: ParseIssue) => Effect<A, ParseIssue>

/**
 * @category annotations
 * @since 3.10.0
 */
export const DecodingFallbackAnnotationId: unique symbol = Symbol.for("effect/annotation/DecodingFallback")

/**
 * @category annotations
 * @since 3.10.0
 */
export const SurrogateAnnotationId: unique symbol = Symbol.for("effect/annotation/Surrogate")

/**
 * @category annotations
 * @since 3.10.0
 */
export type SurrogateAnnotation = AST

/** @internal */
export const StableFilterAnnotationId: unique symbol = Symbol.for("effect/annotation/StableFilter")

/**
 * A stable filter consistently applies fixed validation rules, such as
 * 'minItems', 'maxItems', and 'itemsCount', to ensure array length complies
 * with set criteria regardless of the input data's content.
 *
 * @internal
 */
export type StableFilterAnnotation = boolean

/**
 * @category annotations
 * @since 3.10.0
 */
export interface Annotations {
  readonly [_: string]: unknown
  readonly [_: symbol]: unknown
}

/**
 * @category annotations
 * @since 3.10.0
 */
export interface Annotated {
  readonly annotations: Annotations
}

/**
 * @category annotations
 * @since 3.10.0
 */
export const getAnnotation: {
  /**
   * @category annotations
   * @since 3.10.0
   */
  <A>(key: symbol): (annotated: Annotated) => Option.Option<A>
  /**
   * @category annotations
   * @since 3.10.0
   */
  <A>(annotated: Annotated, key: symbol): Option.Option<A>
} = dual(
  2,
  <A>(annotated: Annotated, key: symbol): Option.Option<A> =>
    Object.prototype.hasOwnProperty.call(annotated.annotations, key) ?
      Option.some(annotated.annotations[key] as any) :
      Option.none()
)

/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export const getTypeConstructorAnnotation = getAnnotation<TypeConstructorAnnotation>(TypeConstructorAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getBrandAnnotation = getAnnotation<BrandAnnotation>(BrandAnnotationId)

/**
 * @category annotations
 * @since 3.14.2
 */
export const getSchemaIdAnnotation = getAnnotation<SchemaIdAnnotation>(SchemaIdAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getMessageAnnotation = getAnnotation<MessageAnnotation>(MessageAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getMissingMessageAnnotation = getAnnotation<MissingMessageAnnotation>(MissingMessageAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getTitleAnnotation = getAnnotation<TitleAnnotation>(TitleAnnotationId)

/** @internal */
export const getAutoTitleAnnotation = getAnnotation<TitleAnnotation>(AutoTitleAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getIdentifierAnnotation = getAnnotation<IdentifierAnnotation>(IdentifierAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getDescriptionAnnotation = getAnnotation<DescriptionAnnotation>(DescriptionAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getExamplesAnnotation = getAnnotation<ExamplesAnnotation<unknown>>(ExamplesAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getDefaultAnnotation = getAnnotation<DefaultAnnotation<unknown>>(DefaultAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getJSONSchemaAnnotation = getAnnotation<JSONSchemaAnnotation>(JSONSchemaAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getDocumentationAnnotation = getAnnotation<DocumentationAnnotation>(DocumentationAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getConcurrencyAnnotation = getAnnotation<ConcurrencyAnnotation>(ConcurrencyAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getBatchingAnnotation = getAnnotation<BatchingAnnotation>(BatchingAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getParseIssueTitleAnnotation = getAnnotation<ParseIssueTitleAnnotation>(ParseIssueTitleAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getParseOptionsAnnotation = getAnnotation<ParseOptions>(ParseOptionsAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getDecodingFallbackAnnotation = getAnnotation<DecodingFallbackAnnotation<unknown>>(
  DecodingFallbackAnnotationId
)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getSurrogateAnnotation = getAnnotation<SurrogateAnnotation>(SurrogateAnnotationId)

const getStableFilterAnnotation = getAnnotation<StableFilterAnnotation>(StableFilterAnnotationId)

/** @internal */
export const hasStableFilter = (annotated: Annotated) =>
  Option.exists(getStableFilterAnnotation(annotated), (b) => b === true)

/**
 * @category annotations
 * @since 3.10.0
 */
export const JSONIdentifierAnnotationId: unique symbol = Symbol.for("effect/annotation/JSONIdentifier")

/**
 * @category annotations
 * @since 3.10.0
 */
export const getJSONIdentifierAnnotation = getAnnotation<IdentifierAnnotation>(JSONIdentifierAnnotationId)

/**
 * @category annotations
 * @since 3.10.0
 */
export const getJSONIdentifier = (annotated: Annotated) =>
  Option.orElse(getJSONIdentifierAnnotation(annotated), () => getIdentifierAnnotation(annotated))

// -------------------------------------------------------------------------------------
// schema ids
// -------------------------------------------------------------------------------------

/**
 * @category schema id
 * @since 3.10.0
 */
export const ParseJsonSchemaId: unique symbol = Symbol.for("effect/schema/ParseJson")

/**
 * @category model
 * @since 3.10.0
 */
export class Declaration implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Declaration"
  constructor(
    readonly typeParameters: ReadonlyArray<AST>,
    readonly decodeUnknown: (
      ...typeParameters: ReadonlyArray<AST>
    ) => (input: unknown, options: ParseOptions, self: Declaration) => Effect<any, ParseIssue, any>,
    readonly encodeUnknown: (
      ...typeParameters: ReadonlyArray<AST>
    ) => (input: unknown, options: ParseOptions, self: Declaration) => Effect<any, ParseIssue, any>,
    readonly annotations: Annotations = {}
  ) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => "<declaration schema>")
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      typeParameters: this.typeParameters.map((ast) => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

const createASTGuard = <T extends AST["_tag"]>(tag: T) => (ast: AST): ast is Extract<AST, { _tag: T }> =>
  ast._tag === tag

/**
 * @category guards
 * @since 3.10.0
 */
export const isDeclaration: (ast: AST) => ast is Declaration = createASTGuard("Declaration")

/**
 * @category model
 * @since 3.10.0
 */
export type LiteralValue = string | number | boolean | null | bigint

/**
 * @category model
 * @since 3.10.0
 */
export class Literal implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Literal"
  constructor(readonly literal: LiteralValue, readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => Inspectable.formatUnknown(this.literal))
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      literal: Predicate.isBigInt(this.literal) ? String(this.literal) : this.literal,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isLiteral: (ast: AST) => ast is Literal = createASTGuard("Literal")

const $null = new Literal(null)

export {
  /**
   * @category constructors
   * @since 3.10.0
   */
  $null as null
}

/**
 * @category model
 * @since 3.10.0
 */
export class UniqueSymbol implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "UniqueSymbol"
  constructor(readonly symbol: symbol, readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => Inspectable.formatUnknown(this.symbol))
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      symbol: String(this.symbol),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isUniqueSymbol: (ast: AST) => ast is UniqueSymbol = createASTGuard("UniqueSymbol")

/**
 * @category model
 * @since 3.10.0
 */
export class UndefinedKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "UndefinedKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const undefinedKeyword: UndefinedKeyword = new UndefinedKeyword({
  [TitleAnnotationId]: "undefined"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isUndefinedKeyword: (ast: AST) => ast is UndefinedKeyword = createASTGuard("UndefinedKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class VoidKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "VoidKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const voidKeyword: VoidKeyword = new VoidKeyword({
  [TitleAnnotationId]: "void"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isVoidKeyword: (ast: AST) => ast is VoidKeyword = createASTGuard("VoidKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class NeverKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "NeverKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const neverKeyword: NeverKeyword = new NeverKeyword({
  [TitleAnnotationId]: "never"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isNeverKeyword: (ast: AST) => ast is NeverKeyword = createASTGuard("NeverKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class UnknownKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "UnknownKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const unknownKeyword: UnknownKeyword = new UnknownKeyword({
  [TitleAnnotationId]: "unknown"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isUnknownKeyword: (ast: AST) => ast is UnknownKeyword = createASTGuard("UnknownKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class AnyKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "AnyKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const anyKeyword: AnyKeyword = new AnyKeyword({
  [TitleAnnotationId]: "any"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isAnyKeyword: (ast: AST) => ast is AnyKeyword = createASTGuard("AnyKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class StringKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "StringKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const stringKeyword: StringKeyword = new StringKeyword({
  [TitleAnnotationId]: "string",
  [DescriptionAnnotationId]: "a string"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isStringKeyword: (ast: AST) => ast is StringKeyword = createASTGuard("StringKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class NumberKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "NumberKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const numberKeyword: NumberKeyword = new NumberKeyword({
  [TitleAnnotationId]: "number",
  [DescriptionAnnotationId]: "a number"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isNumberKeyword: (ast: AST) => ast is NumberKeyword = createASTGuard("NumberKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class BooleanKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "BooleanKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const booleanKeyword: BooleanKeyword = new BooleanKeyword({
  [TitleAnnotationId]: "boolean",
  [DescriptionAnnotationId]: "a boolean"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isBooleanKeyword: (ast: AST) => ast is BooleanKeyword = createASTGuard("BooleanKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class BigIntKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "BigIntKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const bigIntKeyword: BigIntKeyword = new BigIntKeyword({
  [TitleAnnotationId]: "bigint",
  [DescriptionAnnotationId]: "a bigint"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isBigIntKeyword: (ast: AST) => ast is BigIntKeyword = createASTGuard("BigIntKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class SymbolKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "SymbolKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const symbolKeyword: SymbolKeyword = new SymbolKeyword({
  [TitleAnnotationId]: "symbol",
  [DescriptionAnnotationId]: "a symbol"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isSymbolKeyword: (ast: AST) => ast is SymbolKeyword = createASTGuard("SymbolKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class ObjectKeyword implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "ObjectKeyword"
  constructor(readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const objectKeyword: ObjectKeyword = new ObjectKeyword({
  [TitleAnnotationId]: "object",
  [DescriptionAnnotationId]: "an object in the TypeScript meaning, i.e. the `object` type"
})

/**
 * @category guards
 * @since 3.10.0
 */
export const isObjectKeyword: (ast: AST) => ast is ObjectKeyword = createASTGuard("ObjectKeyword")

/**
 * @category model
 * @since 3.10.0
 */
export class Enums implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Enums"
  constructor(
    readonly enums: ReadonlyArray<readonly [string, string | number]>,
    readonly annotations: Annotations = {}
  ) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(
      getExpected(this),
      () => `<enum ${this.enums.length} value(s): ${this.enums.map(([_, value]) => JSON.stringify(value)).join(" | ")}>`
    )
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      enums: this.enums,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isEnums: (ast: AST) => ast is Enums = createASTGuard("Enums")

type TemplateLiteralSpanBaseType = StringKeyword | NumberKeyword | Literal | TemplateLiteral

type TemplateLiteralSpanType = TemplateLiteralSpanBaseType | Union<TemplateLiteralSpanType>

const isTemplateLiteralSpanType = (ast: AST): ast is TemplateLiteralSpanType => {
  switch (ast._tag) {
    case "Literal":
    case "NumberKeyword":
    case "StringKeyword":
    case "TemplateLiteral":
      return true
    case "Union":
      return ast.types.every(isTemplateLiteralSpanType)
  }
  return false
}

const templateLiteralSpanUnionTypeToString = (type: TemplateLiteralSpanType): string => {
  switch (type._tag) {
    case "Literal":
      return JSON.stringify(String(type.literal))
    case "StringKeyword":
      return "string"
    case "NumberKeyword":
      return "number"
    case "TemplateLiteral":
      return String(type)
    case "Union":
      return type.types.map(templateLiteralSpanUnionTypeToString).join(" | ")
  }
}

const templateLiteralSpanTypeToString = (type: TemplateLiteralSpanType): string => {
  switch (type._tag) {
    case "Literal":
      return String(type.literal)
    case "StringKeyword":
      return "${string}"
    case "NumberKeyword":
      return "${number}"
    case "TemplateLiteral":
      return "${" + String(type) + "}"
    case "Union":
      return "${" + type.types.map(templateLiteralSpanUnionTypeToString).join(" | ") + "}"
  }
}

/**
 * @category model
 * @since 3.10.0
 */
export class TemplateLiteralSpan {
  /**
   * @since 3.10.0
   */
  readonly type: TemplateLiteralSpanType
  constructor(type: AST, readonly literal: string) {
    if (isTemplateLiteralSpanType(type)) {
      this.type = type
    } else {
      throw new Error(errors_.getSchemaUnsupportedLiteralSpanErrorMessage(type))
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return templateLiteralSpanTypeToString(this.type) + this.literal
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      type: this.type.toJSON(),
      literal: this.literal
    }
  }
}

/**
 * @category model
 * @since 3.10.0
 */
export class TemplateLiteral implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "TemplateLiteral"
  constructor(
    readonly head: string,
    readonly spans: Arr.NonEmptyReadonlyArray<TemplateLiteralSpan>,
    readonly annotations: Annotations = {}
  ) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => formatTemplateLiteral(this))
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      head: this.head,
      spans: this.spans.map((span) => span.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

const formatTemplateLiteral = (ast: TemplateLiteral): string =>
  "`" + ast.head + ast.spans.map(String).join("") +
  "`"

/**
 * @category guards
 * @since 3.10.0
 */
export const isTemplateLiteral: (ast: AST) => ast is TemplateLiteral = createASTGuard("TemplateLiteral")

/**
 * @category model
 * @since 3.10.0
 */
export class Type implements Annotated {
  constructor(
    readonly type: AST,
    readonly annotations: Annotations = {}
  ) {}
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      type: this.type.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type)
  }
}

/**
 * @category model
 * @since 3.10.0
 */
export class OptionalType extends Type {
  constructor(
    type: AST,
    readonly isOptional: boolean,
    annotations: Annotations = {}
  ) {
    super(type, annotations)
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type) + (this.isOptional ? "?" : "")
  }
}

const getRestASTs = (rest: ReadonlyArray<Type>): ReadonlyArray<AST> => rest.map((annotatedAST) => annotatedAST.type)

/**
 * @category model
 * @since 3.10.0
 */
export class TupleType implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "TupleType"
  constructor(
    readonly elements: ReadonlyArray<OptionalType>,
    readonly rest: ReadonlyArray<Type>,
    readonly isReadonly: boolean,
    readonly annotations: Annotations = {}
  ) {
    let hasOptionalElement = false
    let hasIllegalRequiredElement = false
    for (const e of elements) {
      if (e.isOptional) {
        hasOptionalElement = true
      } else if (hasOptionalElement) {
        hasIllegalRequiredElement = true
        break
      }
    }
    if (hasIllegalRequiredElement || (hasOptionalElement && rest.length > 1)) {
      throw new Error(errors_.getASTRequiredElementFollowinAnOptionalElementErrorMessage)
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => formatTuple(this))
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      elements: this.elements.map((e) => e.toJSON()),
      rest: this.rest.map((ast) => ast.toJSON()),
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

const formatTuple = (ast: TupleType): string => {
  const formattedElements = ast.elements.map(String)
    .join(", ")
  return Arr.matchLeft(ast.rest, {
    onEmpty: () => `readonly [${formattedElements}]`,
    onNonEmpty: (head, tail) => {
      const formattedHead = String(head)
      const wrappedHead = formattedHead.includes(" | ") ? `(${formattedHead})` : formattedHead

      if (tail.length > 0) {
        const formattedTail = tail.map(String).join(", ")
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[], ${formattedTail}]`
        } else {
          return `readonly [...${wrappedHead}[], ${formattedTail}]`
        }
      } else {
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[]]`
        } else {
          return `ReadonlyArray<${formattedHead}>`
        }
      }
    }
  })
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isTupleType: (ast: AST) => ast is TupleType = createASTGuard("TupleType")

/**
 * @category model
 * @since 3.10.0
 */
export class PropertySignature extends OptionalType {
  constructor(
    readonly name: PropertyKey,
    type: AST,
    isOptional: boolean,
    readonly isReadonly: boolean,
    annotations?: Annotations
  ) {
    super(type, isOptional, annotations)
  }
  /**
   * @since 3.10.0
   */
  toString(): string {
    return (this.isReadonly ? "readonly " : "") + String(this.name) + (this.isOptional ? "?" : "") + ": " +
      this.type
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      name: String(this.name),
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @since 3.10.0
 */
export type Parameter = StringKeyword | SymbolKeyword | TemplateLiteral | Refinement<Parameter>

/**
 * @since 3.10.0
 */
export const isParameter = (ast: AST): ast is Parameter => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return true
    case "Refinement":
      return isParameter(ast.from)
  }
  return false
}

/**
 * @category model
 * @since 3.10.0
 */
export class IndexSignature {
  /**
   * @since 3.10.0
   */
  readonly parameter: Parameter
  constructor(
    parameter: AST,
    readonly type: AST,
    readonly isReadonly: boolean
  ) {
    if (isParameter(parameter)) {
      this.parameter = parameter
    } else {
      throw new Error(errors_.getASTIndexSignatureParameterErrorMessage)
    }
  }
  /**
   * @since 3.10.0
   */
  toString(): string {
    return (this.isReadonly ? "readonly " : "") + `[x: ${this.parameter}]: ${this.type}`
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      parameter: this.parameter.toJSON(),
      type: this.type.toJSON(),
      isReadonly: this.isReadonly
    }
  }
}

/**
 * @category model
 * @since 3.10.0
 */
export class TypeLiteral implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "TypeLiteral"
  /**
   * @since 3.10.0
   */
  readonly propertySignatures: ReadonlyArray<PropertySignature>
  /**
   * @since 3.10.0
   */
  readonly indexSignatures: ReadonlyArray<IndexSignature>
  constructor(
    propertySignatures: ReadonlyArray<PropertySignature>,
    indexSignatures: ReadonlyArray<IndexSignature>,
    readonly annotations: Annotations = {}
  ) {
    // check for duplicate property signatures
    const keys: Record<PropertyKey, null> = {}
    for (let i = 0; i < propertySignatures.length; i++) {
      const name = propertySignatures[i].name
      if (Object.prototype.hasOwnProperty.call(keys, name)) {
        throw new Error(errors_.getASTDuplicatePropertySignatureErrorMessage(name))
      }
      keys[name] = null
    }
    // check for duplicate index signatures
    const parameters = {
      string: false,
      symbol: false
    }
    for (let i = 0; i < indexSignatures.length; i++) {
      const encodedParameter = getEncodedParameter(indexSignatures[i].parameter)
      if (isStringKeyword(encodedParameter)) {
        if (parameters.string) {
          throw new Error(errors_.getASTDuplicateIndexSignatureErrorMessage("string"))
        }
        parameters.string = true
      } else if (isSymbolKeyword(encodedParameter)) {
        if (parameters.symbol) {
          throw new Error(errors_.getASTDuplicateIndexSignatureErrorMessage("symbol"))
        }
        parameters.symbol = true
      }
    }

    this.propertySignatures = propertySignatures
    this.indexSignatures = indexSignatures
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => formatTypeLiteral(this))
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      propertySignatures: this.propertySignatures.map((ps) => ps.toJSON()),
      indexSignatures: this.indexSignatures.map((ps) => ps.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

const formatIndexSignatures = (iss: ReadonlyArray<IndexSignature>): string => iss.map(String).join("; ")

const formatTypeLiteral = (ast: TypeLiteral): string => {
  if (ast.propertySignatures.length > 0) {
    const pss = ast.propertySignatures.map(String).join("; ")
    if (ast.indexSignatures.length > 0) {
      return `{ ${pss}; ${formatIndexSignatures(ast.indexSignatures)} }`
    } else {
      return `{ ${pss} }`
    }
  } else {
    if (ast.indexSignatures.length > 0) {
      return `{ ${formatIndexSignatures(ast.indexSignatures)} }`
    } else {
      return "{}"
    }
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isTypeLiteral: (ast: AST) => ast is TypeLiteral = createASTGuard("TypeLiteral")

/**
 * @since 3.10.0
 */
export type Members<A> = readonly [A, A, ...Array<A>]

const sortCandidates = Arr.sort(
  Order.mapInput(Number.Order, (ast: AST) => {
    switch (ast._tag) {
      case "AnyKeyword":
        return 0
      case "UnknownKeyword":
        return 1
      case "ObjectKeyword":
        return 2
      case "StringKeyword":
      case "NumberKeyword":
      case "BooleanKeyword":
      case "BigIntKeyword":
      case "SymbolKeyword":
        return 3
    }
    return 4
  })
)

const literalMap = {
  string: "StringKeyword",
  number: "NumberKeyword",
  boolean: "BooleanKeyword",
  bigint: "BigIntKeyword"
} as const

/** @internal */
export const flatten = (candidates: ReadonlyArray<AST>): Array<AST> =>
  Arr.flatMap(candidates, (ast) => isUnion(ast) ? flatten(ast.types) : [ast])

/** @internal */
export const unify = (candidates: ReadonlyArray<AST>): Array<AST> => {
  const cs = sortCandidates(candidates)
  const out: Array<AST> = []
  const uniques: { [K in AST["_tag"] | "{}"]?: AST } = {}
  const literals: Array<LiteralValue | symbol> = []
  for (const ast of cs) {
    switch (ast._tag) {
      case "NeverKeyword":
        break
      case "AnyKeyword":
        return [anyKeyword]
      case "UnknownKeyword":
        return [unknownKeyword]
      // uniques
      case "ObjectKeyword":
      case "UndefinedKeyword":
      case "VoidKeyword":
      case "StringKeyword":
      case "NumberKeyword":
      case "BooleanKeyword":
      case "BigIntKeyword":
      case "SymbolKeyword": {
        if (!uniques[ast._tag]) {
          uniques[ast._tag] = ast
          out.push(ast)
        }
        break
      }
      case "Literal": {
        const type = typeof ast.literal
        switch (type) {
          case "string":
          case "number":
          case "bigint":
          case "boolean": {
            const _tag = literalMap[type]
            if (!uniques[_tag] && !literals.includes(ast.literal)) {
              literals.push(ast.literal)
              out.push(ast)
            }
            break
          }
          // null
          case "object": {
            if (!literals.includes(ast.literal)) {
              literals.push(ast.literal)
              out.push(ast)
            }
            break
          }
        }
        break
      }
      case "UniqueSymbol": {
        if (!uniques["SymbolKeyword"] && !literals.includes(ast.symbol)) {
          literals.push(ast.symbol)
          out.push(ast)
        }
        break
      }
      case "TupleType": {
        if (!uniques["ObjectKeyword"]) {
          out.push(ast)
        }
        break
      }
      case "TypeLiteral": {
        if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
          if (!uniques["{}"]) {
            uniques["{}"] = ast
            out.push(ast)
          }
        } else if (!uniques["ObjectKeyword"]) {
          out.push(ast)
        }
        break
      }
      default:
        out.push(ast)
    }
  }
  return out
}

/**
 * @category model
 * @since 3.10.0
 */
export class Union<M extends AST = AST> implements Annotated {
  static make = (types: ReadonlyArray<AST>, annotations?: Annotations): AST => {
    return isMembers(types) ? new Union(types, annotations) : types.length === 1 ? types[0] : neverKeyword
  }
  /** @internal */
  static unify = (candidates: ReadonlyArray<AST>, annotations?: Annotations): AST => {
    return Union.make(unify(flatten(candidates)), annotations)
  }
  /**
   * @since 3.10.0
   */
  readonly _tag = "Union"
  private constructor(readonly types: Members<M>, readonly annotations: Annotations = {}) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => this.types.map(String).join(" | "))
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      types: this.types.map((ast) => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/** @internal */
export const mapMembers = <A, B>(members: Members<A>, f: (a: A) => B): Members<B> => members.map(f) as any

/** @internal */
export const isMembers = <A>(as: ReadonlyArray<A>): as is Members<A> => as.length > 1

/**
 * @category guards
 * @since 3.10.0
 */
export const isUnion: (ast: AST) => ast is Union = createASTGuard("Union")

const toJSONMemoMap = globalValue(
  Symbol.for("effect/Schema/AST/toJSONMemoMap"),
  () => new WeakMap<AST, object>()
)

/**
 * @category model
 * @since 3.10.0
 */
export class Suspend implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Suspend"
  constructor(readonly f: () => AST, readonly annotations: Annotations = {}) {
    this.f = util_.memoizeThunk(f)
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getExpected(this).pipe(
      Option.orElse(() =>
        Option.flatMap(
          Option.liftThrowable(this.f)(),
          (ast) => getExpected(ast)
        )
      ),
      Option.getOrElse(() => "<suspended schema>")
    )
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    const ast = this.f()
    let out = toJSONMemoMap.get(ast)
    if (out) {
      return out
    }
    toJSONMemoMap.set(ast, { _tag: this._tag })
    out = {
      _tag: this._tag,
      ast: ast.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    }
    toJSONMemoMap.set(ast, out)
    return out
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isSuspend: (ast: AST) => ast is Suspend = createASTGuard("Suspend")

/**
 * @category model
 * @since 3.10.0
 */
export class Refinement<From extends AST = AST> implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Refinement"
  constructor(
    readonly from: From,
    readonly filter: (
      input: any,
      options: ParseOptions,
      self: Refinement
    ) => Option.Option<ParseIssue>,
    readonly annotations: Annotations = {}
  ) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return getIdentifierAnnotation(this).pipe(Option.getOrElse(() =>
      Option.match(getOrElseExpected(this), {
        onNone: () => `{ ${this.from} | filter }`,
        onSome: (expected) => isRefinement(this.from) ? String(this.from) + " & " + expected : expected
      })
    ))
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isRefinement: (ast: AST) => ast is Refinement<AST> = createASTGuard("Refinement")

/**
 * @category model
 * @since 3.10.0
 */
export interface ParseOptions {
  /**
   * The `errors` option allows you to receive all parsing errors when
   * attempting to parse a value using a schema. By default only the first error
   * is returned, but by setting the `errors` option to `"all"`, you can receive
   * all errors that occurred during the parsing process. This can be useful for
   * debugging or for providing more comprehensive error messages to the user.
   *
   * default: "first"
   *
   * @since 3.10.0
   */
  readonly errors?: "first" | "all" | undefined
  /**
   * When using a `Schema` to parse a value, by default any properties that are
   * not specified in the `Schema` will be stripped out from the output. This is
   * because the `Schema` is expecting a specific shape for the parsed value,
   * and any excess properties do not conform to that shape.
   *
   * However, you can use the `onExcessProperty` option (default value:
   * `"ignore"`) to trigger a parsing error. This can be particularly useful in
   * cases where you need to detect and handle potential errors or unexpected
   * values.
   *
   * If you want to allow excess properties to remain, you can use
   * `onExcessProperty` set to `"preserve"`.
   *
   * default: "ignore"
   *
   * @since 3.10.0
   */
  readonly onExcessProperty?: "ignore" | "error" | "preserve" | undefined
  /**
   * The `propertyOrder` option provides control over the order of object fields
   * in the output. This feature is particularly useful when the sequence of
   * keys is important for the consuming processes or when maintaining the input
   * order enhances readability and usability.
   *
   * By default, the `propertyOrder` option is set to `"none"`. This means that
   * the internal system decides the order of keys to optimize parsing speed.
   * The order of keys in this mode should not be considered stable, and it's
   * recommended not to rely on key ordering as it may change in future updates
   * without notice.
   *
   * Setting `propertyOrder` to `"original"` ensures that the keys are ordered
   * as they appear in the input during the decoding/encoding process.
   *
   * default: "none"
   *
   * @since 3.10.0
   */
  readonly propertyOrder?: "none" | "original" | undefined
  /**
   * Handles missing properties in data structures. By default, missing
   * properties are treated as if present with an `undefined` value. To treat
   * missing properties as errors, set the `exact` option to `true`. This
   * setting is already enabled by default for `is` and `asserts` functions,
   * treating absent properties strictly unless overridden.
   *
   * default: false
   *
   * @since 3.10.0
   */
  readonly exact?: boolean | undefined
}

/**
 * @since 3.10.0
 */
export const defaultParseOption: ParseOptions = {}

/**
 * @category model
 * @since 3.10.0
 */
export class Transformation implements Annotated {
  /**
   * @since 3.10.0
   */
  readonly _tag = "Transformation"
  constructor(
    readonly from: AST,
    readonly to: AST,
    readonly transformation: TransformationKind,
    readonly annotations: Annotations = {}
  ) {}
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(
      getExpected(this),
      () => `(${String(this.from)} <-> ${String(this.to)})`
    )
  }
  /**
   * @since 3.10.0
   */
  toJSON(): object {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      to: this.to.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    }
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isTransformation: (ast: AST) => ast is Transformation = createASTGuard("Transformation")

/**
 * @category model
 * @since 3.10.0
 */
export type TransformationKind =
  | FinalTransformation
  | ComposeTransformation
  | TypeLiteralTransformation

/**
 * @category model
 * @since 3.10.0
 */
export class FinalTransformation {
  /**
   * @since 3.10.0
   */
  readonly _tag = "FinalTransformation"
  constructor(
    readonly decode: (
      fromA: any,
      options: ParseOptions,
      self: Transformation,
      fromI: any
    ) => Effect<any, ParseIssue, any>,
    readonly encode: (toI: any, options: ParseOptions, self: Transformation, toA: any) => Effect<any, ParseIssue, any>
  ) {}
}

const createTransformationGuard =
  <T extends TransformationKind["_tag"]>(tag: T) =>
  (ast: TransformationKind): ast is Extract<TransformationKind, { _tag: T }> => ast._tag === tag

/**
 * @category guards
 * @since 3.10.0
 */
export const isFinalTransformation: (ast: TransformationKind) => ast is FinalTransformation = createTransformationGuard(
  "FinalTransformation"
)

/**
 * @category model
 * @since 3.10.0
 */
export class ComposeTransformation {
  /**
   * @since 3.10.0
   */
  readonly _tag = "ComposeTransformation"
}

/**
 * @category constructors
 * @since 3.10.0
 */
export const composeTransformation: ComposeTransformation = new ComposeTransformation()

/**
 * @category guards
 * @since 3.10.0
 */
export const isComposeTransformation: (ast: TransformationKind) => ast is ComposeTransformation =
  createTransformationGuard(
    "ComposeTransformation"
  )

/**
 * Represents a `PropertySignature -> PropertySignature` transformation
 *
 * The semantic of `decode` is:
 * - `none()` represents the absence of the key/value pair
 * - `some(value)` represents the presence of the key/value pair
 *
 * The semantic of `encode` is:
 * - `none()` you don't want to output the key/value pair
 * - `some(value)` you want to output the key/value pair
 *
 * @category model
 * @since 3.10.0
 */
export class PropertySignatureTransformation {
  constructor(
    readonly from: PropertyKey,
    readonly to: PropertyKey,
    readonly decode: (o: Option.Option<any>) => Option.Option<any>,
    readonly encode: (o: Option.Option<any>) => Option.Option<any>
  ) {}
}

const isRenamingPropertySignatureTransformation = (t: PropertySignatureTransformation) =>
  t.decode === identity && t.encode === identity

/**
 * @category model
 * @since 3.10.0
 */
export class TypeLiteralTransformation {
  /**
   * @since 3.10.0
   */
  readonly _tag = "TypeLiteralTransformation"
  constructor(
    readonly propertySignatureTransformations: ReadonlyArray<
      PropertySignatureTransformation
    >
  ) {
    // check for duplicate property signature transformations
    const fromKeys: Record<PropertyKey, true> = {}
    const toKeys: Record<PropertyKey, true> = {}
    for (const pst of propertySignatureTransformations) {
      const from = pst.from
      if (fromKeys[from]) {
        throw new Error(errors_.getASTDuplicatePropertySignatureTransformationErrorMessage(from))
      }
      fromKeys[from] = true
      const to = pst.to
      if (toKeys[to]) {
        throw new Error(errors_.getASTDuplicatePropertySignatureTransformationErrorMessage(to))
      }
      toKeys[to] = true
    }
  }
}

/**
 * @category guards
 * @since 3.10.0
 */
export const isTypeLiteralTransformation: (ast: TransformationKind) => ast is TypeLiteralTransformation =
  createTransformationGuard("TypeLiteralTransformation")

// -------------------------------------------------------------------------------------
// API
// -------------------------------------------------------------------------------------

/**
 * Merges a set of new annotations with existing ones, potentially overwriting
 * any duplicates.
 *
 * Any previously existing identifier annotations are deleted.
 *
 * @since 3.10.0
 */
export const annotations = (ast: AST, overrides: Annotations): AST => {
  const d = Object.getOwnPropertyDescriptors(ast)
  const base: any = { ...ast.annotations }
  delete base[IdentifierAnnotationId]
  const value = { ...base, ...overrides }
  const surrogate = getSurrogateAnnotation(ast)
  if (Option.isSome(surrogate)) {
    value[SurrogateAnnotationId] = annotations(surrogate.value, overrides)
  }
  d.annotations.value = value
  return Object.create(Object.getPrototypeOf(ast), d)
}

/**
 * Equivalent at runtime to the TypeScript type-level `keyof` operator.
 *
 * @since 3.10.0
 */
export const keyof = (ast: AST): AST => Union.unify(_keyof(ast))

const STRING_KEYWORD_PATTERN = "[\\s\\S]*?" // any string, including newlines
const NUMBER_KEYWORD_PATTERN = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?"

const getTemplateLiteralSpanTypePattern = (type: TemplateLiteralSpanType, capture: boolean): string => {
  switch (type._tag) {
    case "Literal":
      return regexp.escape(String(type.literal))
    case "StringKeyword":
      return STRING_KEYWORD_PATTERN
    case "NumberKeyword":
      return NUMBER_KEYWORD_PATTERN
    case "TemplateLiteral":
      return getTemplateLiteralPattern(type, capture, false)
    case "Union":
      return type.types.map((type) => getTemplateLiteralSpanTypePattern(type, capture)).join("|")
  }
}

const handleTemplateLiteralSpanTypeParens = (
  type: TemplateLiteralSpanType,
  s: string,
  capture: boolean,
  top: boolean
) => {
  if (isUnion(type)) {
    if (capture && !top) {
      return `(?:${s})`
    }
  } else if (!capture || !top) {
    return s
  }
  return `(${s})`
}

const getTemplateLiteralPattern = (ast: TemplateLiteral, capture: boolean, top: boolean): string => {
  let pattern = ``
  if (ast.head !== "") {
    const head = regexp.escape(ast.head)
    pattern += capture && top ? `(${head})` : head
  }

  for (const span of ast.spans) {
    const spanPattern = getTemplateLiteralSpanTypePattern(span.type, capture)
    pattern += handleTemplateLiteralSpanTypeParens(span.type, spanPattern, capture, top)
    if (span.literal !== "") {
      const literal = regexp.escape(span.literal)
      pattern += capture && top ? `(${literal})` : literal
    }
  }

  return pattern
}

/**
 * Generates a regular expression from a `TemplateLiteral` AST node.
 *
 * @see {@link getTemplateLiteralCapturingRegExp} for a variant that captures the pattern.
 *
 * @since 3.10.0
 */
export const getTemplateLiteralRegExp = (ast: TemplateLiteral): RegExp =>
  new RegExp(`^${getTemplateLiteralPattern(ast, false, true)}$`)

/**
 * Generates a regular expression that captures the pattern defined by the given `TemplateLiteral` AST.
 *
 * @see {@link getTemplateLiteralRegExp} for a variant that does not capture the pattern.
 *
 * @since 3.10.0
 */
export const getTemplateLiteralCapturingRegExp = (ast: TemplateLiteral): RegExp =>
  new RegExp(`^${getTemplateLiteralPattern(ast, true, true)}$`)

/**
 * @since 3.10.0
 */
export const getPropertySignatures = (ast: AST): Array<PropertySignature> => {
  const annotation = getSurrogateAnnotation(ast)
  if (Option.isSome(annotation)) {
    return getPropertySignatures(annotation.value)
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.propertySignatures.slice()
    case "Suspend":
      return getPropertySignatures(ast.f())
    case "Refinement":
      return getPropertySignatures(ast.from)
  }
  return getPropertyKeys(ast).map((name) => getPropertyKeyIndexedAccess(ast, name))
}

const getIndexSignatures = (ast: AST): Array<IndexSignature> => {
  const annotation = getSurrogateAnnotation(ast)
  if (Option.isSome(annotation)) {
    return getIndexSignatures(annotation.value)
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.indexSignatures.slice()
    case "Suspend":
      return getIndexSignatures(ast.f())
    case "Refinement":
      return getIndexSignatures(ast.from)
    case "Transformation":
      return getIndexSignatures(ast.to)
  }
  return []
}

/** @internal */
export const getNumberIndexedAccess = (ast: AST): AST => {
  switch (ast._tag) {
    case "TupleType": {
      let hasOptional = false
      let out: Array<AST> = []
      for (const e of ast.elements) {
        if (e.isOptional) {
          hasOptional = true
        }
        out.push(e.type)
      }
      if (hasOptional) {
        out.push(undefinedKeyword)
      }
      out = out.concat(getRestASTs(ast.rest))
      return Union.make(out)
    }
    case "Refinement":
      return getNumberIndexedAccess(ast.from)
    case "Union":
      return Union.make(ast.types.map(getNumberIndexedAccess))
    case "Suspend":
      return getNumberIndexedAccess(ast.f())
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
}

const getTypeLiteralPropertySignature = (ast: TypeLiteral, name: PropertyKey): PropertySignature | undefined => {
  // from property signatures...
  const ops = Arr.findFirst(ast.propertySignatures, (ps) => ps.name === name)
  if (Option.isSome(ops)) {
    return ops.value
  }

  // from index signatures...
  if (Predicate.isString(name)) {
    let out: PropertySignature | undefined = undefined
    for (const is of ast.indexSignatures) {
      const encodedParameter = getEncodedParameter(is.parameter)
      switch (encodedParameter._tag) {
        case "TemplateLiteral": {
          const regex = getTemplateLiteralRegExp(encodedParameter)
          if (regex.test(name)) {
            return new PropertySignature(name, is.type, false, true)
          }
          break
        }
        case "StringKeyword": {
          if (out === undefined) {
            out = new PropertySignature(name, is.type, false, true)
          }
        }
      }
    }
    if (out) {
      return out
    }
  } else if (Predicate.isSymbol(name)) {
    for (const is of ast.indexSignatures) {
      const encodedParameter = getEncodedParameter(is.parameter)
      if (isSymbolKeyword(encodedParameter)) {
        return new PropertySignature(name, is.type, false, true)
      }
    }
  }
}

/** @internal */
export const getPropertyKeyIndexedAccess = (ast: AST, name: PropertyKey): PropertySignature => {
  const annotation = getSurrogateAnnotation(ast)
  if (Option.isSome(annotation)) {
    return getPropertyKeyIndexedAccess(annotation.value, name)
  }
  switch (ast._tag) {
    case "TypeLiteral": {
      const ps = getTypeLiteralPropertySignature(ast, name)
      if (ps) {
        return ps
      }
      break
    }
    case "Union":
      return new PropertySignature(
        name,
        Union.make(ast.types.map((ast) => getPropertyKeyIndexedAccess(ast, name).type)),
        false,
        true
      )
    case "Suspend":
      return getPropertyKeyIndexedAccess(ast.f(), name)
    case "Refinement":
      return getPropertyKeyIndexedAccess(ast.from, name)
    case "Transformation":
      return getPropertyKeyIndexedAccess(ast.to, name)
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
}

const getPropertyKeys = (ast: AST): Array<PropertyKey> => {
  const annotation = getSurrogateAnnotation(ast)
  if (Option.isSome(annotation)) {
    return getPropertyKeys(annotation.value)
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.propertySignatures.map((ps) => ps.name)
    case "Union":
      return ast.types.slice(1).reduce(
        (out: Array<PropertyKey>, ast) => Arr.intersection(out, getPropertyKeys(ast)),
        getPropertyKeys(ast.types[0])
      )
    case "Suspend":
      return getPropertyKeys(ast.f())
    case "Refinement":
      return getPropertyKeys(ast.from)
    case "Transformation":
      return getPropertyKeys(ast.to)
  }
  return []
}

/** @internal */
export const record = (key: AST, value: AST): {
  propertySignatures: Array<PropertySignature>
  indexSignatures: Array<IndexSignature>
} => {
  const propertySignatures: Array<PropertySignature> = []
  const indexSignatures: Array<IndexSignature> = []
  const go = (key: AST): void => {
    switch (key._tag) {
      case "NeverKeyword":
        break
      case "StringKeyword":
      case "SymbolKeyword":
      case "TemplateLiteral":
      case "Refinement":
        indexSignatures.push(new IndexSignature(key, value, true))
        break
      case "Literal":
        if (Predicate.isString(key.literal) || Predicate.isNumber(key.literal)) {
          propertySignatures.push(new PropertySignature(key.literal, value, false, true))
        } else {
          throw new Error(errors_.getASTUnsupportedLiteralErrorMessage(key.literal))
        }
        break
      case "Enums": {
        for (const [_, name] of key.enums) {
          propertySignatures.push(new PropertySignature(name, value, false, true))
        }
        break
      }
      case "UniqueSymbol":
        propertySignatures.push(new PropertySignature(key.symbol, value, false, true))
        break
      case "Union":
        key.types.forEach(go)
        break
      default:
        throw new Error(errors_.getASTUnsupportedKeySchemaErrorMessage(key))
    }
  }
  go(key)
  return { propertySignatures, indexSignatures }
}

/**
 * Equivalent at runtime to the built-in TypeScript utility type `Pick`.
 *
 * @since 3.10.0
 */
export const pick = (ast: AST, keys: ReadonlyArray<PropertyKey>): TypeLiteral | Transformation => {
  const annotation = getSurrogateAnnotation(ast)
  if (Option.isSome(annotation)) {
    return pick(annotation.value, keys)
  }
  switch (ast._tag) {
    case "TypeLiteral": {
      const pss: Array<PropertySignature> = []
      const names: Record<PropertyKey, null> = {}
      for (const ps of ast.propertySignatures) {
        names[ps.name] = null
        if (keys.includes(ps.name)) {
          pss.push(ps)
        }
      }
      for (const key of keys) {
        if (!(key in names)) {
          const ps = getTypeLiteralPropertySignature(ast, key)
          if (ps) {
            pss.push(ps)
          }
        }
      }
      return new TypeLiteral(pss, [])
    }
    case "Union":
      return new TypeLiteral(keys.map((name) => getPropertyKeyIndexedAccess(ast, name)), [])
    case "Suspend":
      return pick(ast.f(), keys)
    case "Refinement":
      return pick(ast.from, keys)
    case "Transformation": {
      switch (ast.transformation._tag) {
        case "ComposeTransformation":
          return new Transformation(
            pick(ast.from, keys),
            pick(ast.to, keys),
            composeTransformation
          )
        case "TypeLiteralTransformation": {
          const ts: Array<PropertySignatureTransformation> = []
          const fromKeys: Array<PropertyKey> = []
          for (const k of keys) {
            const t = ast.transformation.propertySignatureTransformations.find((t) => t.to === k)
            if (t) {
              ts.push(t)
              fromKeys.push(t.from)
            } else {
              fromKeys.push(k)
            }
          }
          return Arr.isNonEmptyReadonlyArray(ts) ?
            new Transformation(
              pick(ast.from, fromKeys),
              pick(ast.to, keys),
              new TypeLiteralTransformation(ts)
            ) :
            pick(ast.from, fromKeys)
        }
      }
    }
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
}

/**
 * Equivalent at runtime to the built-in TypeScript utility type `Omit`.
 *
 * @since 3.10.0
 */
export const omit = (ast: AST, keys: ReadonlyArray<PropertyKey>): TypeLiteral | Transformation => {
  let indexSignatures = getIndexSignatures(ast)
  if (indexSignatures.length > 0) {
    if (indexSignatures.some((is) => isStringKeyword(getEncodedParameter(is.parameter)))) {
      indexSignatures = indexSignatures.filter((is) => !isTemplateLiteral(getEncodedParameter(is.parameter)))
    }
    return new TypeLiteral([], indexSignatures)
  }
  return pick(ast, getPropertyKeys(ast).filter((name) => !keys.includes(name)))
}

/** @internal */
export const orUndefined = (ast: AST): AST => Union.make([ast, undefinedKeyword])

/**
 * Equivalent at runtime to the built-in TypeScript utility type `Partial`.
 *
 * @since 3.10.0
 */
export const partial = (ast: AST, options?: { readonly exact: true }): AST => {
  const exact = options?.exact === true
  switch (ast._tag) {
    case "TupleType":
      return new TupleType(
        ast.elements.map((e) => new OptionalType(exact ? e.type : orUndefined(e.type), true)),
        Arr.match(ast.rest, {
          onEmpty: () => ast.rest,
          onNonEmpty: (rest) => [new Type(Union.make([...getRestASTs(rest), undefinedKeyword]))]
        }),
        ast.isReadonly
      )
    case "TypeLiteral":
      return new TypeLiteral(
        ast.propertySignatures.map((ps) =>
          new PropertySignature(ps.name, exact ? ps.type : orUndefined(ps.type), true, ps.isReadonly, ps.annotations)
        ),
        ast.indexSignatures.map((is) => new IndexSignature(is.parameter, orUndefined(is.type), is.isReadonly))
      )
    case "Union":
      return Union.make(ast.types.map((member) => partial(member, options)))
    case "Suspend":
      return new Suspend(() => partial(ast.f(), options))
    case "Declaration":
    case "Refinement":
      throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
    case "Transformation": {
      if (
        isTypeLiteralTransformation(ast.transformation) &&
        ast.transformation.propertySignatureTransformations.every(isRenamingPropertySignatureTransformation)
      ) {
        return new Transformation(partial(ast.from, options), partial(ast.to, options), ast.transformation)
      }
      throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
    }
  }
  return ast
}

/**
 * Equivalent at runtime to the built-in TypeScript utility type `Required`.
 *
 * @since 3.10.0
 */
export const required = (ast: AST): AST => {
  switch (ast._tag) {
    case "TupleType":
      return new TupleType(
        ast.elements.map((e) => new OptionalType(e.type, false)),
        ast.rest,
        ast.isReadonly
      )
    case "TypeLiteral":
      return new TypeLiteral(
        ast.propertySignatures.map((f) => new PropertySignature(f.name, f.type, false, f.isReadonly, f.annotations)),
        ast.indexSignatures
      )
    case "Union":
      return Union.make(ast.types.map((member) => required(member)))
    case "Suspend":
      return new Suspend(() => required(ast.f()))
    case "Declaration":
    case "Refinement":
      throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
    case "Transformation": {
      if (
        isTypeLiteralTransformation(ast.transformation) &&
        ast.transformation.propertySignatureTransformations.every(isRenamingPropertySignatureTransformation)
      ) {
        return new Transformation(required(ast.from), required(ast.to), ast.transformation)
      }
      throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
    }
  }
  return ast
}

/**
 * Creates a new AST with shallow mutability applied to its properties.
 *
 * @since 3.10.0
 */
export const mutable = (ast: AST): AST => {
  switch (ast._tag) {
    case "TupleType":
      return ast.isReadonly === false ? ast : new TupleType(ast.elements, ast.rest, false, ast.annotations)
    case "TypeLiteral": {
      const propertySignatures = changeMap(
        ast.propertySignatures,
        (ps) =>
          ps.isReadonly === false ? ps : new PropertySignature(ps.name, ps.type, ps.isOptional, false, ps.annotations)
      )
      const indexSignatures = changeMap(
        ast.indexSignatures,
        (is) => is.isReadonly === false ? is : new IndexSignature(is.parameter, is.type, false)
      )
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ?
        ast :
        new TypeLiteral(propertySignatures, indexSignatures, ast.annotations)
    }
    case "Union": {
      const types = changeMap(ast.types, mutable)
      return types === ast.types ? ast : Union.make(types, ast.annotations)
    }
    case "Suspend":
      return new Suspend(() => mutable(ast.f()), ast.annotations)
    case "Refinement": {
      const from = mutable(ast.from)
      return from === ast.from ? ast : new Refinement(from, ast.filter, ast.annotations)
    }
    case "Transformation": {
      const from = mutable(ast.from)
      const to = mutable(ast.to)
      return from === ast.from && to === ast.to ?
        ast :
        new Transformation(from, to, ast.transformation, ast.annotations)
    }
  }
  return ast
}

// -------------------------------------------------------------------------------------
// compiler harness
// -------------------------------------------------------------------------------------

/**
 * @since 3.10.0
 */
export type Compiler<A> = (ast: AST, path: ReadonlyArray<PropertyKey>) => A

/**
 * @since 3.10.0
 */
export type Match<A> = {
  [K in AST["_tag"]]: (ast: Extract<AST, { _tag: K }>, compile: Compiler<A>, path: ReadonlyArray<PropertyKey>) => A
}

/**
 * @since 3.10.0
 */
export const getCompiler = <A>(match: Match<A>): Compiler<A> => {
  const compile = (ast: AST, path: ReadonlyArray<PropertyKey>): A => match[ast._tag](ast as any, compile, path)
  return compile
}

/** @internal */
export const pickAnnotations =
  (annotationIds: ReadonlyArray<symbol>) => (annotated: Annotated): Annotations | undefined => {
    let out: { [_: symbol]: unknown } | undefined = undefined
    for (const id of annotationIds) {
      if (Object.prototype.hasOwnProperty.call(annotated.annotations, id)) {
        if (out === undefined) {
          out = {}
        }
        out[id] = annotated.annotations[id]
      }
    }
    return out
  }

/** @internal */
export const omitAnnotations =
  (annotationIds: ReadonlyArray<symbol>) => (annotated: Annotated): Annotations | undefined => {
    const out = { ...annotated.annotations }
    for (const id of annotationIds) {
      delete out[id]
    }
    return out
  }

const preserveTransformationAnnotations = pickAnnotations([
  ExamplesAnnotationId,
  DefaultAnnotationId,
  JSONSchemaAnnotationId,
  ArbitraryAnnotationId,
  PrettyAnnotationId,
  EquivalenceAnnotationId
])

/**
 * @since 3.10.0
 */
export const typeAST = (ast: AST): AST => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, typeAST)
      return typeParameters === ast.typeParameters ?
        ast :
        new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations)
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = typeAST(e.type)
        return type === e.type ? e : new OptionalType(type, e.isOptional)
      })
      const restASTs = getRestASTs(ast.rest)
      const rest = changeMap(restASTs, typeAST)
      return elements === ast.elements && rest === restASTs ?
        ast :
        new TupleType(elements, rest.map((type) => new Type(type)), ast.isReadonly, ast.annotations)
    }
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (p) => {
        const type = typeAST(p.type)
        return type === p.type ? p : new PropertySignature(p.name, type, p.isOptional, p.isReadonly)
      })
      const indexSignatures = changeMap(ast.indexSignatures, (is) => {
        const type = typeAST(is.type)
        return type === is.type ? is : new IndexSignature(is.parameter, type, is.isReadonly)
      })
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ?
        ast :
        new TypeLiteral(propertySignatures, indexSignatures, ast.annotations)
    }
    case "Union": {
      const types = changeMap(ast.types, typeAST)
      return types === ast.types ? ast : Union.make(types, ast.annotations)
    }
    case "Suspend":
      return new Suspend(() => typeAST(ast.f()), ast.annotations)
    case "Refinement": {
      const from = typeAST(ast.from)
      return from === ast.from ?
        ast :
        new Refinement(from, ast.filter, ast.annotations)
    }
    case "Transformation": {
      const preserve = preserveTransformationAnnotations(ast)
      return typeAST(
        preserve !== undefined ?
          annotations(ast.to, preserve) :
          ast.to
      )
    }
  }
  return ast
}

function changeMap<A>(
  as: Arr.NonEmptyReadonlyArray<A>,
  f: (a: A) => A
): Arr.NonEmptyReadonlyArray<A>
function changeMap<A>(as: ReadonlyArray<A>, f: (a: A) => A): ReadonlyArray<A>
function changeMap<A>(as: ReadonlyArray<A>, f: (a: A) => A): ReadonlyArray<A> {
  let changed = false
  const out = Arr.allocate(as.length) as Array<A>
  for (let i = 0; i < as.length; i++) {
    const a = as[i]
    const fa = f(a)
    if (fa !== a) {
      changed = true
    }
    out[i] = fa
  }
  return changed ? out : as
}

/**
 * Returns the from part of a transformation if it exists
 *
 * @internal
 */
export const getTransformationFrom = (ast: AST): AST | undefined => {
  switch (ast._tag) {
    case "Transformation":
      return ast.from
    case "Refinement":
      return getTransformationFrom(ast.from)
    case "Suspend":
      return getTransformationFrom(ast.f())
  }
}

const encodedAST_ = (ast: AST, isBound: boolean): AST => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, (ast) => encodedAST_(ast, isBound))
      return typeParameters === ast.typeParameters ?
        ast :
        new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown)
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = encodedAST_(e.type, isBound)
        return type === e.type ? e : new OptionalType(type, e.isOptional)
      })
      const restASTs = getRestASTs(ast.rest)
      const rest = changeMap(restASTs, (ast) => encodedAST_(ast, isBound))
      return elements === ast.elements && rest === restASTs ?
        ast :
        new TupleType(elements, rest.map((ast) => new Type(ast)), ast.isReadonly)
    }
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (ps) => {
        const type = encodedAST_(ps.type, isBound)
        return type === ps.type
          ? ps
          : new PropertySignature(ps.name, type, ps.isOptional, ps.isReadonly)
      })
      const indexSignatures = changeMap(ast.indexSignatures, (is) => {
        const type = encodedAST_(is.type, isBound)
        return type === is.type ? is : new IndexSignature(is.parameter, type, is.isReadonly)
      })
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ?
        ast :
        new TypeLiteral(propertySignatures, indexSignatures)
    }
    case "Union": {
      const types = changeMap(ast.types, (ast) => encodedAST_(ast, isBound))
      return types === ast.types ? ast : Union.make(types)
    }
    case "Suspend": {
      let borrowedAnnotations = undefined
      const identifier = getJSONIdentifier(ast)
      if (Option.isSome(identifier)) {
        const suffix = isBound ? "Bound" : ""
        borrowedAnnotations = { [JSONIdentifierAnnotationId]: `${identifier.value}Encoded${suffix}` }
      }
      return new Suspend(() => encodedAST_(ast.f(), isBound), borrowedAnnotations)
    }
    case "Refinement": {
      const from = encodedAST_(ast.from, isBound)
      if (isBound) {
        if (from === ast.from) return ast
        if (getTransformationFrom(ast.from) === undefined && hasStableFilter(ast)) {
          return new Refinement(from, ast.filter, ast.annotations)
        }
        return from
      } else {
        return from
      }
    }
    case "Transformation":
      return encodedAST_(ast.from, isBound)
  }
  return ast
}

/**
 * @since 3.10.0
 */
export const encodedAST = (ast: AST): AST => encodedAST_(ast, false)

/**
 * @since 3.10.0
 */
export const encodedBoundAST = (ast: AST): AST => encodedAST_(ast, true)

const toJSONAnnotations = (annotations: Annotations): object => {
  const out: Record<string, unknown> = {}
  for (const k of Object.getOwnPropertySymbols(annotations)) {
    out[String(k)] = annotations[k]
  }
  return out
}

/** @internal */
export const getEncodedParameter = (
  ast: Parameter
): StringKeyword | SymbolKeyword | TemplateLiteral => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return ast
    case "Refinement":
      return getEncodedParameter(ast.from)
  }
}

/** @internal  */
export const equals = (self: AST, that: AST): boolean => {
  switch (self._tag) {
    case "Literal":
      return isLiteral(that) && that.literal === self.literal
    case "UniqueSymbol":
      return isUniqueSymbol(that) && that.symbol === self.symbol
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "NeverKeyword":
    case "UnknownKeyword":
    case "AnyKeyword":
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
    case "ObjectKeyword":
      return that._tag === self._tag
    case "TemplateLiteral":
      return isTemplateLiteral(that) && that.head === self.head && equalsTemplateLiteralSpan(that.spans, self.spans)
    case "Enums":
      return isEnums(that) && equalsEnums(that.enums, self.enums)
    case "Union":
      return isUnion(that) && equalsUnion(self.types, that.types)
    case "Refinement":
    case "TupleType":
    case "TypeLiteral":
    case "Suspend":
    case "Transformation":
    case "Declaration":
      return self === that
  }
}

const equalsTemplateLiteralSpan = Arr.getEquivalence<TemplateLiteralSpan>((self, that): boolean => {
  return self.literal === that.literal && equals(self.type, that.type)
})

const equalsEnums = Arr.getEquivalence<readonly [string, string | number]>((self, that) =>
  that[0] === self[0] && that[1] === self[1]
)

const equalsUnion = Arr.getEquivalence<AST>(equals)

const intersection = Arr.intersectionWith(equals)

const _keyof = (ast: AST): Array<AST> => {
  switch (ast._tag) {
    case "Declaration": {
      const annotation = getSurrogateAnnotation(ast)
      if (Option.isSome(annotation)) {
        return _keyof(annotation.value)
      }
      break
    }
    case "TypeLiteral":
      return ast.propertySignatures.map((p): AST =>
        Predicate.isSymbol(p.name) ? new UniqueSymbol(p.name) : new Literal(p.name)
      ).concat(ast.indexSignatures.map((is) => getEncodedParameter(is.parameter)))
    case "Suspend":
      return _keyof(ast.f())
    case "Union":
      return ast.types.slice(1).reduce(
        (out: Array<AST>, ast) => intersection(out, _keyof(ast)),
        _keyof(ast.types[0])
      )
    case "Transformation":
      return _keyof(ast.to)
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast))
}

/** @internal */
export const compose = (ab: AST, cd: AST): AST => new Transformation(ab, cd, composeTransformation)

/** @internal */
export const rename = (ast: AST, mapping: { readonly [K in PropertyKey]?: PropertyKey }): AST => {
  switch (ast._tag) {
    case "TypeLiteral": {
      const propertySignatureTransformations: Array<PropertySignatureTransformation> = []
      for (const key of Reflect.ownKeys(mapping)) {
        const name = mapping[key]
        if (name !== undefined) {
          propertySignatureTransformations.push(
            new PropertySignatureTransformation(
              key,
              name,
              identity,
              identity
            )
          )
        }
      }
      if (propertySignatureTransformations.length === 0) {
        return ast
      }
      return new Transformation(
        ast,
        new TypeLiteral(
          ast.propertySignatures.map((ps) => {
            const name = mapping[ps.name]
            return new PropertySignature(
              name === undefined ? ps.name : name,
              typeAST(ps.type),
              ps.isOptional,
              ps.isReadonly,
              ps.annotations
            )
          }),
          ast.indexSignatures
        ),
        new TypeLiteralTransformation(propertySignatureTransformations)
      )
    }
    case "Union":
      return Union.make(ast.types.map((ast) => rename(ast, mapping)))
    case "Suspend":
      return new Suspend(() => rename(ast.f(), mapping))
    case "Transformation":
      return compose(ast, rename(typeAST(ast), mapping))
  }
  throw new Error(errors_.getASTUnsupportedRenameSchemaErrorMessage(ast))
}

const formatKeyword = (ast: AST): string => Option.getOrElse(getExpected(ast), () => ast._tag)

function getBrands(ast: Annotated): string {
  return Option.match(getBrandAnnotation(ast), {
    onNone: () => "",
    onSome: (brands) => brands.map((brand) => ` & Brand<${Inspectable.formatUnknown(brand)}>`).join("")
  })
}

const getOrElseExpected = (ast: Annotated): Option.Option<string> =>
  getTitleAnnotation(ast).pipe(
    Option.orElse(() => getDescriptionAnnotation(ast)),
    Option.orElse(() => getAutoTitleAnnotation(ast)),
    Option.map((s) => s + getBrands(ast))
  )

const getExpected = (ast: Annotated): Option.Option<string> =>
  Option.orElse(getIdentifierAnnotation(ast), () => getOrElseExpected(ast))

/** @internal */
export const pruneUndefined = (
  ast: AST,
  self: (ast: AST) => AST | undefined,
  onTransformation: (ast: Transformation) => AST | undefined
): AST | undefined => {
  switch (ast._tag) {
    case "UndefinedKeyword":
      return neverKeyword
    case "Union": {
      const types: Array<AST> = []
      let hasUndefined = false
      for (const type of ast.types) {
        const pruned = self(type)
        if (pruned) {
          hasUndefined = true
          if (!isNeverKeyword(pruned)) {
            types.push(pruned)
          }
        } else {
          types.push(type)
        }
      }
      if (hasUndefined) {
        return Union.make(types)
      }
      break
    }
    case "Suspend":
      return self(ast.f())
    case "Transformation":
      return onTransformation(ast)
  }
}
