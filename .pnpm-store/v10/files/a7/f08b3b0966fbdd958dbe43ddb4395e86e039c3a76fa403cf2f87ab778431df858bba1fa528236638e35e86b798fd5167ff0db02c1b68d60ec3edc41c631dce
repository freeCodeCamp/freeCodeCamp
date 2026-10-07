import * as ts from 'typescript';
/**
 * Tracks checking the parameters of a single function signature.
 * This allows rules to "consume" parameters and check for unsafe comparisons.
 */
export declare class FunctionSignature {
    private readonly paramTypes;
    private readonly restType;
    private hasConsumedArguments;
    private parameterTypeIndex;
    private constructor();
    static create(checker: ts.TypeChecker, tsNode: ts.CallLikeExpression): FunctionSignature;
    consumeRemainingArguments(): void;
    getNextParameterType(): ts.Type | null;
}
