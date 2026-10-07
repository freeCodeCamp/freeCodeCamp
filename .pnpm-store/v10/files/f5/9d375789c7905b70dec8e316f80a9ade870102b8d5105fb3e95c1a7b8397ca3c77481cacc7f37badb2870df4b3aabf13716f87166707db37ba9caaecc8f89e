import {
  type QuoteStyle,
  type RootResult
} from './RootResult'

/**
 * A parse sub result that might not be a valid type expression on its own.
 */
export type NonRootResult =
  RootResult
  | PropertyResult
  | ObjectFieldResult
  | JsdocObjectFieldResult
  | KeyValueResult
  | MappedTypeResult
  | IndexSignatureResult

export interface ObjectFieldResult {
  type: 'JsdocTypeObjectField'
  key: string | MappedTypeResult | IndexSignatureResult
  right: RootResult | undefined
  optional: boolean
  readonly: boolean
  meta: {
    quote: QuoteStyle | undefined
  }
}

export interface JsdocObjectFieldResult {
  type: 'JsdocTypeJsdocObjectField'
  left: RootResult
  right: RootResult
}

export interface PropertyResult {
  type: 'JsdocTypeProperty'
  value: string
  meta: {
    quote: QuoteStyle | undefined
  }
}

/**
 * A key value pair represented by a `:`. Can occur as a named parameter of a {@link FunctionResult} or as an entry for
 * an {@link TupleResult}. Is a {@link NonRootResult}.
 */
export interface KeyValueResult {
  type: 'JsdocTypeKeyValue'
  key: string
  right: RootResult | undefined
  optional: boolean
  variadic: boolean
}

export interface IndexSignatureResult {
  type: 'JsdocTypeIndexSignature'
  key: string
  right: RootResult
}

export interface MappedTypeResult {
  type: 'JsdocTypeMappedType'
  key: string
  right: RootResult
}
