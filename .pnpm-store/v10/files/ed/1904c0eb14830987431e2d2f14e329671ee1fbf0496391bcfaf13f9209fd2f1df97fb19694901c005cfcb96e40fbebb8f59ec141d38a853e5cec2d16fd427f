import { TSESTree } from '@typescript-eslint/utils';
import * as ts from 'typescript';
/**
 * Does a simple check to see if there is an any being assigned to a non-any type.
 *
 * This also checks generic positions to ensure there's no unsafe sub-assignments.
 * Note: in the case of generic positions, it makes the assumption that the two types are the same.
 *
 * @example See tests for examples
 *
 * @returns false if it's safe, or an object with the two types if it's unsafe
 */
export declare function isUnsafeAssignment(type: ts.Type, receiver: ts.Type, checker: ts.TypeChecker, senderNode: TSESTree.Node | null): false | {
    sender: ts.Type;
    receiver: ts.Type;
};
//# sourceMappingURL=isUnsafeAssignment.d.ts.map
