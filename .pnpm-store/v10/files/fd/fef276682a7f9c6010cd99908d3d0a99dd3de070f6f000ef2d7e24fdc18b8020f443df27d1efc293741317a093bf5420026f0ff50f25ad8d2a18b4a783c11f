import type { ParserServicesWithTypeInformation, TSESTree } from '@typescript-eslint/utils';
import type { SourceCode } from '@typescript-eslint/utils/ts-eslint';
import type { PreferOptionalChainOptions } from './PreferOptionalChainOptions';
export declare const enum Yoda {
    Yes = 0,
    No = 1,
    Unknown = 2
}
export declare const enum OperandValidity {
    Valid = "Valid",
    Last = "Last",
    Invalid = "Invalid"
}
export declare const enum NullishComparisonType {
    /** `x != null`, `x != undefined` */
    NotEqualNullOrUndefined = "NotEqualNullOrUndefined",
    /** `x == null`, `x == undefined` */
    EqualNullOrUndefined = "EqualNullOrUndefined",
    /** `x !== null` */
    NotStrictEqualNull = "NotStrictEqualNull",
    /** `x === null` */
    StrictEqualNull = "StrictEqualNull",
    /** `x !== undefined`, `typeof x !== 'undefined'` */
    NotStrictEqualUndefined = "NotStrictEqualUndefined",
    /** `x === undefined`, `typeof x === 'undefined'` */
    StrictEqualUndefined = "StrictEqualUndefined",
    /** `!x` */
    NotBoolean = "NotBoolean",
    /** `x` */
    Boolean = "Boolean"
}
export declare const enum ComparisonType {
    NotEqual = "NotEqual",
    Equal = "Equal",
    NotStrictEqual = "NotStrictEqual",
    StrictEqual = "StrictEqual"
}
export interface ValidOperand {
    comparedName: TSESTree.Node;
    comparisonType: NullishComparisonType;
    isYoda: boolean;
    node: TSESTree.Expression;
    type: OperandValidity.Valid;
}
export interface LastChainOperand {
    comparedName: TSESTree.Node;
    comparisonType: ComparisonType;
    comparisonValue: TSESTree.Node;
    yoda: Yoda;
    node: TSESTree.BinaryExpression;
    type: OperandValidity.Last;
}
export interface InvalidOperand {
    type: OperandValidity.Invalid;
}
type Operand = InvalidOperand | LastChainOperand | ValidOperand;
export declare function gatherLogicalOperands(node: TSESTree.LogicalExpression, parserServices: ParserServicesWithTypeInformation, sourceCode: Readonly<SourceCode>, options: PreferOptionalChainOptions): {
    newlySeenLogicals: Set<TSESTree.LogicalExpression>;
    operands: Operand[];
};
export {};
