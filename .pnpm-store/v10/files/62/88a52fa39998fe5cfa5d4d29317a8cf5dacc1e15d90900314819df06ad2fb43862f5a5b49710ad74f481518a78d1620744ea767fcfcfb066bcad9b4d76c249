import type { TSESTree } from '@typescript-eslint/utils';
export type ClassNode = TSESTree.ClassDeclaration | TSESTree.ClassExpression;
export type MemberNode = TSESTree.AccessorProperty | TSESTree.MethodDefinition | TSESTree.PropertyDefinition | TSESTree.TSAbstractAccessorProperty | TSESTree.TSAbstractMethodDefinition | TSESTree.TSAbstractPropertyDefinition | TSESTree.TSParameterProperty;
export type PrivateKey = string & {
    __brand: 'private-key';
};
export type PublicKey = string & {
    __brand: 'public-key';
};
export type Key = PrivateKey | PublicKey;
export declare function publicKey(name: string): PublicKey;
export declare function privateKey(node: TSESTree.PrivateIdentifier): PrivateKey;
