import {
  type JsdocObjectFieldResult,
  type KeyValueResult,
  type ObjectFieldResult,
  type PropertyResult
} from './NonRootResult'

/**
 * A parse result that corresponds to a valid type expression.
 */
export type RootResult =
  NameResult
  | UnionResult
  | GenericResult
  | StringValueResult
  | NullResult
  | UndefinedResult
  | AnyResult
  | UnknownResult
  | FunctionResult
  | ObjectResult
  | NamePathResult
  | SymbolResult
  | TypeOfResult
  | KeyOfResult
  | ImportResult
  | TupleResult
  | SpecialNamePath
  | OptionalResult<RootResult>
  | NullableResult<RootResult>
  | NotNullableResult<RootResult>
  | VariadicResult<RootResult>
  | ParenthesisResult
  | IntersectionResult
  | NumberResult
  | PredicateResult

export type QuoteStyle = 'single' | 'double'

/**
 * `element` is optional.
 */
export interface OptionalResult<T extends RootResult> {
  type: 'JsdocTypeOptional'
  element: T
  meta: {
    position: 'prefix' | 'suffix'
  }
}

/**
 * A nullable type.
 */
export interface NullableResult<T extends RootResult> {
  type: 'JsdocTypeNullable'
  element: T
  meta: {
    position: 'prefix' | 'suffix'
  }
}

/**
 * A not nullable type.
 */
export interface NotNullableResult<T extends RootResult> {
  type: 'JsdocTypeNotNullable'
  element: T
  meta: {
    position: 'prefix' | 'suffix'
  }
}

/**
 * A rest or spread parameter. It can either occur in `@param` tags or as last parameter of a function,
 * or it is a spread tuple or object type and can occur inside these. For any mode that is not `jsdoc` this can
 * only occur in position `'suffix'`.
 */
export interface VariadicResult<T extends RootResult> {
  type: 'JsdocTypeVariadic'
  element?: T
  meta: {
    position: 'prefix' | 'suffix' | undefined
    squareBrackets: boolean
  }
}

/**
 * A type name.
 */
export interface NameResult {
  type: 'JsdocTypeName'
  value: string
}

/**
 * A type union.
 */
export interface UnionResult {
  type: 'JsdocTypeUnion'
  elements: RootResult[]
}

/**
 * A generic type. The property `left` is the generic type that has `elements` as type values for its type parameters.
 * Array types that are written as `Type[]` always have the name `Array` as the `left` type and `elements` will contain
 * only one element (in this case the name `Type`). To differentiate `Type[]` and `Array<Type>` there is the meta
 * property
 * `brackets`.
 */
export interface GenericResult {
  type: 'JsdocTypeGeneric'
  left: RootResult
  elements: RootResult[]
  meta: {
    brackets: 'angle' | 'square'
    dot: boolean
  }
}

/**
 * A string value as a type.
 */
export interface StringValueResult {
  type: 'JsdocTypeStringValue'
  value: string
  meta: {
    quote: QuoteStyle
  }
}

/**
 * The `null` type.
 */
export interface NullResult {
  type: 'JsdocTypeNull'
}

/**
 * The `undefined` type.
 */
export interface UndefinedResult {
  type: 'JsdocTypeUndefined'
}

/**
 * The `any` type, represented by `*` (`any` is parsed as a name).
 */
export interface AnyResult {
  type: 'JsdocTypeAny'
}

/**
 * The unknown type, represented by `?` (`unknown` is parsed as a name).
 */
export interface UnknownResult {
  type: 'JsdocTypeUnknown'
}

/**
 * A function type. Has `parameters` which can be named, if the grammar supports it. Some grammars only allow named
 * `this` and `new` parameters. Named parameters are returned as {@link KeyValueResult}s. It can have a `returnType`.
 * It can be a normal function type or an arrow, which is indicated by `arrow`. If `parenthesis` is false, it is any
 * kind of function without specified parameters or return type.
 */
export interface FunctionResult {
  type: 'JsdocTypeFunction'
  parameters: Array<RootResult | KeyValueResult>
  returnType?: RootResult
  constructor: boolean
  arrow: boolean
  parenthesis: boolean
}

/**
 * An object type. Contains entries which can be {@link KeyValueResult}s or {@link NameResult}s. In most grammars the
 * keys need to be {@link NameResult}s. In some grammars it possible that an entry is only a {@link RootResult} or a
 * {@link NumberResult} without a key. The separator is `'comma'` by default.
 */
export interface ObjectResult {
  type: 'JsdocTypeObject'
  elements: Array<ObjectFieldResult | JsdocObjectFieldResult>
  meta: {
    separator: 'comma' | 'semicolon' | 'linebreak' | undefined
  }
}

export type SpecialNamePathType = 'module' | 'event' | 'external'

/**
 * A module type. Often this is a `left` type of {@link NamePathResult}.
 */
export interface SpecialNamePath<Type extends SpecialNamePathType = SpecialNamePathType> {
  type: 'JsdocTypeSpecialNamePath'
  value: string
  specialType: Type
  meta: {
    quote: QuoteStyle | undefined
  }
}

/**
 * A name path type. This can be a property path separated by `.` or an inner or static member (`~`, `#`).
 */
export interface NamePathResult {
  type: 'JsdocTypeNamePath'
  left: RootResult
  right: PropertyResult | SpecialNamePath<'event'>
  pathType: 'inner' | 'instance' | 'property' | 'property-brackets'
}

/**
 * A symbol type. Only available in `jsdoc` mode.
 */
export interface SymbolResult {
  type: 'JsdocTypeSymbol'
  value: string
  element?: NumberResult | NameResult | VariadicResult<NameResult>
}

/**
 * A typeof type. The `element` normally should be a name.
 */
export interface TypeOfResult {
  type: 'JsdocTypeTypeof'
  element: RootResult
}

/**
 * A keyof type. The `element` normally should be a name.
 */
export interface KeyOfResult {
  type: 'JsdocTypeKeyof'
  element: RootResult
}

/**
 * An import type. The `element` is {@link StringValueResult} representing the path. Often the `left` side of an
 * {@link NamePathResult}.
 */
export interface ImportResult {
  type: 'JsdocTypeImport'
  element: StringValueResult
}

/**
 * A tuple type containing multiple `elements`.
 */
export interface TupleResult {
  type: 'JsdocTypeTuple'
  elements: RootResult[] | KeyValueResult[]
}

/**
 * A type enclosed in parenthesis. Often {@link UnionResult}s ot {@link IntersectionResult}s.
 */
export interface ParenthesisResult {
  type: 'JsdocTypeParenthesis'
  element: RootResult
}

/**
 * An intersection type.
 */
export interface IntersectionResult {
  type: 'JsdocTypeIntersection'
  elements: RootResult[]
}

/**
 * A number. Can be the key of an {@link ObjectResult} entry or the parameter of a {@link SymbolResult}.
 * Is a {@link NonRootResult}.
 */
export interface NumberResult {
  type: 'JsdocTypeNumber'
  value: number
}

/**
 * A typescript predicate. Is used in return annotations like this: `@return {x is string}`.
 */
export interface PredicateResult {
  type: 'JsdocTypePredicate'
  left: NameResult
  right: RootResult
}
