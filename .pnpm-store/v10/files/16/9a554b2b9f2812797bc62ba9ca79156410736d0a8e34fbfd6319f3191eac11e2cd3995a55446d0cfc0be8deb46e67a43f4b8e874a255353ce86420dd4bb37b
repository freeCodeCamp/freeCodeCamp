import { KeyValueResult, NonRootResult } from '../result/NonRootResult';
import { FunctionResult, RootResult } from '../result/RootResult';
export type TransformFunction<TransformResult> = (parseResult: NonRootResult) => TransformResult;
export type TransformRule<TransformResult, InputType extends NonRootResult> = (parseResult: InputType, transform: TransformFunction<TransformResult>) => TransformResult;
export type TransformRules<TransformResult> = {
    [P in NonRootResult as P['type']]: TransformRule<TransformResult, P>;
};
export declare function transform<TransformResult>(rules: TransformRules<TransformResult>, parseResult: NonRootResult): TransformResult;
export declare function notAvailableTransform<TransformResult>(parseResult: NonRootResult): TransformResult;
interface SpecialFunctionParams {
    params: Array<RootResult | KeyValueResult>;
    this?: RootResult;
    new?: RootResult;
}
export declare function extractSpecialParams(source: FunctionResult): SpecialFunctionParams;
export {};
