import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
import * as ts from 'typescript';
export * from '@typescript-eslint/utils/ast-utils';
/**
 * Get the `loc` object of a given name in a `/*globals` comment directive.
 * @param sourceCode The source code to convert index to loc.
 * @param comment The `/*globals` comment directive which include the name.
 * @param name The name to find.
 * @returns The `loc` object.
 */
export declare function getNameLocationInGlobalDirectiveComment(sourceCode: TSESLint.SourceCode, comment: TSESTree.Comment, name: string): TSESTree.SourceLocation;
export declare function forEachReturnStatement<T>(body: ts.Block, visitor: (stmt: ts.ReturnStatement) => T): T | undefined;
/**
 * Rough equivalent to ts.forEachChild for ESTree nodes.
 * It returns the first truthy value returned by the callback, if any.
 */
export declare function forEachChildESTree<Result>(node: TSESTree.Node, callback: (child: TSESTree.Node) => false | Result | null | undefined): Result | undefined;
