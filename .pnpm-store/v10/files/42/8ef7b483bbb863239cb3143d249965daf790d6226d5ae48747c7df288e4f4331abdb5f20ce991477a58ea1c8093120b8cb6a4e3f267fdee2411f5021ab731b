import type { TSESTree } from '@typescript-eslint/utils';
import { SyntaxKind } from 'typescript';
import type { ValueOf } from './types';
export declare enum OperatorPrecedence {
    Comma = 0,
    Spread = 1,
    Yield = 2,
    Assignment = 3,
    Conditional = 4,
    Coalesce = 4,// NOTE: This is wrong
    LogicalOR = 5,
    LogicalAND = 6,
    BitwiseOR = 7,
    BitwiseXOR = 8,
    BitwiseAND = 9,
    Equality = 10,
    Relational = 11,
    Shift = 12,
    Additive = 13,
    Multiplicative = 14,
    Exponentiation = 15,
    Unary = 16,
    Update = 17,
    LeftHandSide = 18,
    Member = 19,
    Primary = 20,
    Highest = 20,
    Lowest = 0,
    Invalid = -1
}
/**
 * Note that this does not take into account parenthesization. You should check
 * for parenthesization separately if it's relevant to your usage.
 */
export declare function getOperatorPrecedenceForNode(node: TSESTree.Node): OperatorPrecedence;
type TSESTreeOperatorKind = ValueOf<TSESTree.BinaryOperatorToText> | ValueOf<TSESTree.PunctuatorTokenToText>;
export declare function getOperatorPrecedence(nodeKind: SyntaxKind, operatorKind: SyntaxKind, hasArguments?: boolean): OperatorPrecedence;
export declare function getBinaryOperatorPrecedence(kind: SyntaxKind | TSESTreeOperatorKind): OperatorPrecedence;
export {};
