import { ParsletFunction } from './Parslet';
import { RootResult } from '../result/RootResult';
import { IntermediateResult } from '../result/IntermediateResult';
import { KeyValueResult } from '../result/NonRootResult';
export declare function getParameters(value: IntermediateResult): Array<RootResult | KeyValueResult>;
export declare function getUnnamedParameters(value: IntermediateResult): RootResult[];
export declare function createFunctionParslet({ allowNamedParameters, allowNoReturnType, allowWithoutParenthesis, allowNewAsFunctionKeyword }: {
    allowNamedParameters?: string[];
    allowWithoutParenthesis: boolean;
    allowNoReturnType: boolean;
    allowNewAsFunctionKeyword: boolean;
}): ParsletFunction;
