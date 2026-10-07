import type { TSESTree } from '@typescript-eslint/utils';
import type { Key, MemberNode } from './types';
export interface ExtractedName {
    key: Key;
    codeName: string;
    nameNode: TSESTree.Node;
}
/**
 * Extracts the string name for a member.
 * @returns `null` if the name cannot be extracted due to it being computed.
 */
export declare function extractNameForMember(node: MemberNode): ExtractedName | null;
/**
 * Extracts the string property name for a member.
 * @returns `null` if the name cannot be extracted due to it being a computed.
 */
export declare function extractNameForMemberExpression(node: TSESTree.MemberExpression): ExtractedName | null;
