import type { ParserServicesWithTypeInformation, TSESTree } from '@typescript-eslint/utils';
import * as ts from 'typescript';
/**
 * Inspect a call expression to see if it's a call to an assertion function.
 * If it is, return the node of the argument that is asserted.
 */
export declare function findTruthinessAssertedArgument(services: ParserServicesWithTypeInformation, node: TSESTree.CallExpression): TSESTree.Expression | undefined;
/**
 * Inspect a call expression to see if it's a call to an assertion function.
 * If it is, return the node of the argument that is asserted and other useful info.
 */
export declare function findTypeGuardAssertedArgument(services: ParserServicesWithTypeInformation, node: TSESTree.CallExpression): {
    argument: TSESTree.Expression;
    asserts: boolean;
    type: ts.Type;
} | undefined;
