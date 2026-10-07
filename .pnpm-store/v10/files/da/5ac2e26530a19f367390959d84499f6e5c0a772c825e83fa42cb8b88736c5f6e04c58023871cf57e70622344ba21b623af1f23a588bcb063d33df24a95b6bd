import type { TSESTree, ParserServicesWithTypeInformation } from '@typescript-eslint/utils';
import type * as ts from 'typescript';
/**
 * Given a member of a class which extends another class or implements an interface,
 * yields the corresponding member type for each of the base class/interfaces.
 */
export declare function getBaseTypesOfClassMember(services: ParserServicesWithTypeInformation, memberNode: TSESTree.MethodDefinition | TSESTree.PropertyDefinition): Generator<{
    baseType: ts.Type;
    baseMemberType: ts.Type;
    heritageToken: ts.SyntaxKind.ExtendsKeyword | ts.SyntaxKind.ImplementsKeyword;
}>;
