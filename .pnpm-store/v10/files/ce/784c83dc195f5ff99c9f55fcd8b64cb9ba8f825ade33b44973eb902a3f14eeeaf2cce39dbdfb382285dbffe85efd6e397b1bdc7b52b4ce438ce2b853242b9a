import { KeyValueResult, NonRootResult } from '../result/NonRootResult'
import { FunctionResult, RootResult } from '../result/RootResult'

export type TransformFunction<TransformResult> = (parseResult: NonRootResult) => TransformResult

export type TransformRule<TransformResult, InputType extends NonRootResult> = (parseResult: InputType, transform: TransformFunction<TransformResult>) => TransformResult

export type TransformRules<TransformResult> = {
  [P in NonRootResult as P['type']]: TransformRule<TransformResult, P>
}

export function transform<TransformResult> (rules: TransformRules<TransformResult>, parseResult: NonRootResult): TransformResult {
  const rule = rules[parseResult.type] as TransformRule<TransformResult, NonRootResult>
  if (rule === undefined) {
    throw new Error(`In this set of transform rules exists no rule for type ${parseResult.type}.`)
  }

  return rule(parseResult, aParseResult => transform(rules, aParseResult))
}

export function notAvailableTransform<TransformResult> (parseResult: NonRootResult): TransformResult {
  throw new Error('This transform is not available. Are you trying the correct parsing mode?')
}

interface SpecialFunctionParams {
  params: Array<RootResult | KeyValueResult>
  this?: RootResult
  new?: RootResult
}

export function extractSpecialParams (source: FunctionResult): SpecialFunctionParams {
  const result: SpecialFunctionParams = {
    params: []
  }

  for (const param of source.parameters) {
    if (param.type === 'JsdocTypeKeyValue') {
      if (param.key === 'this') {
        result.this = param.right
      } else if (param.key === 'new') {
        result.new = param.right
      } else {
        result.params.push(param)
      }
    } else {
      result.params.push(param)
    }
  }

  return result
}
