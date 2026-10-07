import type { TSESTree } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
/**
 * Parses a syntactically possible `Promise.then()` call. Does not check the
 * type of the callee.
 */
export declare function parseThenCall(node: TSESTree.CallExpression, context: RuleContext<string, unknown[]>): {
    onFulfilled?: TSESTree.Expression | undefined;
    onRejected?: TSESTree.Expression | undefined;
    object: TSESTree.Expression;
} | undefined;
/**
 * Parses a syntactically possible `Promise.catch()` call. Does not check the
 * type of the callee.
 */
export declare function parseCatchCall(node: TSESTree.CallExpression, context: RuleContext<string, unknown[]>): {
    onRejected?: TSESTree.Expression | undefined;
    object: TSESTree.Expression;
} | undefined;
/**
 * Parses a syntactically possible `Promise.finally()` call. Does not check the
 * type of the callee.
 */
export declare function parseFinallyCall(node: TSESTree.CallExpression, context: RuleContext<string, unknown[]>): {
    object: TSESTree.Expression;
    onFinally?: TSESTree.Expression | undefined;
} | undefined;
