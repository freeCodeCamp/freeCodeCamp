import { type IndexSignatureResult, type KeyValueResult, type MappedTypeResult } from './result/NonRootResult'
import { UnexpectedTypeError } from './errors'
import { type NameResult, type NumberResult, type RootResult, type VariadicResult } from './result/RootResult'
import { type IntermediateResult } from './result/IntermediateResult'

/**
 * Throws an error if the provided result is not a {@link RootResult}
 */
export function assertRootResult (result?: IntermediateResult): RootResult {
  if (result === undefined) {
    throw new Error('Unexpected undefined')
  }
  if (
    result.type === 'JsdocTypeKeyValue' || result.type === 'JsdocTypeParameterList' ||
    result.type === 'JsdocTypeProperty' || result.type === 'JsdocTypeReadonlyProperty' ||
    result.type === 'JsdocTypeObjectField' || result.type === 'JsdocTypeJsdocObjectField' ||
    result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType'
  ) {
    throw new UnexpectedTypeError(result)
  }
  return result
}

export function assertPlainKeyValueOrRootResult (result: IntermediateResult): KeyValueResult | RootResult {
  if (result.type === 'JsdocTypeKeyValue') {
    return assertPlainKeyValueResult(result)
  }
  return assertRootResult(result)
}

export function assertPlainKeyValueOrNameResult (result: IntermediateResult): KeyValueResult | NameResult {
  if (result.type === 'JsdocTypeName') {
    return result
  }
  return assertPlainKeyValueResult(result)
}

export function assertPlainKeyValueResult (result: IntermediateResult): KeyValueResult {
  if (result.type !== 'JsdocTypeKeyValue') {
    throw new UnexpectedTypeError(result)
  }
  return result
}

export function assertNumberOrVariadicNameResult (result: IntermediateResult): NumberResult | NameResult | VariadicResult<NameResult> {
  if (result.type === 'JsdocTypeVariadic') {
    if (result.element?.type === 'JsdocTypeName') {
      return result as VariadicResult<NameResult>
    }
    throw new UnexpectedTypeError(result)
  }
  if (result.type !== 'JsdocTypeNumber' && result.type !== 'JsdocTypeName') {
    throw new UnexpectedTypeError(result)
  }
  return result
}

export function isSquaredProperty (result: IntermediateResult): result is IndexSignatureResult | MappedTypeResult {
  return result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType'
}
