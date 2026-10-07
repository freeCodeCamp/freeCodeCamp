import type { TSESTree } from '@typescript-eslint/utils';
import type { SourceCode } from '@typescript-eslint/utils/ts-eslint';
/**
 * Determines whether an opening parenthesis `(`, bracket `[` or backtick ``` ` ``` needs to be preceded by a semicolon.
 * This opening parenthesis or bracket should be at the start of an `ExpressionStatement`, a `MethodDefinition` or at
 * the start of the body of an `ArrowFunctionExpression`.
 * @param sourceCode The source code object.
 * @param node A node at the position where an opening parenthesis or bracket will be inserted.
 * @returns Whether a semicolon is required before the opening parenthesis or bracket.
 */
export declare function needsPrecedingSemicolon(sourceCode: SourceCode, node: TSESTree.Node): boolean;
