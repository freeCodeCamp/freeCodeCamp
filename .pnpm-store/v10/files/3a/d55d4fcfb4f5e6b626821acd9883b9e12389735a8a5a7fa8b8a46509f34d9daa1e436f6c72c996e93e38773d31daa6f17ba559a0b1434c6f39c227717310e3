import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
export type FunctionExpression = TSESTree.ArrowFunctionExpression | TSESTree.FunctionExpression;
export type FunctionNode = FunctionExpression | TSESTree.FunctionDeclaration;
export interface FunctionInfo<T extends FunctionNode> {
    node: T;
    returns: TSESTree.ReturnStatement[];
}
/**
 * Checks if a function belongs to:
 * ```
 * () => () => ...
 * () => function () { ... }
 * () => { return () => ... }
 * () => { return function () { ... } }
 * function fn() { return () => ... }
 * function fn() { return function() { ... } }
 * ```
 */
export declare function doesImmediatelyReturnFunctionExpression({ node, returns, }: FunctionInfo<FunctionNode>): boolean;
interface Options {
    allowDirectConstAssertionInArrowFunctions?: boolean;
    allowExpressions?: boolean;
    allowHigherOrderFunctions?: boolean;
    allowTypedFunctionExpressions?: boolean;
}
/**
 * True when the provided function expression is typed.
 */
export declare function isTypedFunctionExpression(node: FunctionExpression, options: Options): boolean;
/**
 * Check whether the function expression return type is either typed or valid
 * with the provided options.
 */
export declare function isValidFunctionExpressionReturnType(node: FunctionExpression, options: Options): boolean;
/**
 * Checks if a function declaration/expression has a return type.
 */
export declare function checkFunctionReturnType({ node, returns }: FunctionInfo<FunctionNode>, options: Options, sourceCode: TSESLint.SourceCode, report: (loc: TSESTree.SourceLocation) => void): void;
/**
 * Checks if a function declaration/expression has a return type.
 */
export declare function checkFunctionExpressionReturnType(info: FunctionInfo<FunctionExpression>, options: Options, sourceCode: TSESLint.SourceCode, report: (loc: TSESTree.SourceLocation) => void): void;
/**
 * Check whether any ancestor of the provided function has a valid return type.
 */
export declare function ancestorHasReturnType(node: FunctionNode): boolean;
export {};
