import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
/**
 * Gets the location of the head of the given for statement variant for reporting.
 *
 * - `for (const foo in bar) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^
 *
 * - `for (const foo of bar) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^
 *
 * - `for await (const foo of bar) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *
 * - `for (let i = 0; i < 10; i++) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
export declare function getForStatementHeadLoc(sourceCode: TSESLint.SourceCode, node: TSESTree.ForInStatement | TSESTree.ForOfStatement | TSESTree.ForStatement): TSESTree.SourceLocation;
