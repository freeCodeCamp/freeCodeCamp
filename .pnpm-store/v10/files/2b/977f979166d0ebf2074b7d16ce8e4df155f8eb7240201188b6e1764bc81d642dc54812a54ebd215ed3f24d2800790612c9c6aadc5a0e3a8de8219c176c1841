import { FieldNode, FragmentSpreadNode, GraphQLInputObjectType, GraphQLNamedType, GraphQLObjectType, GraphQLOutputType, GraphQLSchema, InlineFragmentNode, NamedTypeNode, NameNode, SelectionNode, SelectionSetNode, StringValueNode, TypeNode } from 'graphql';
import { RawConfig } from './base-visitor.cjs';
import { NormalizedScalarsMap, ParsedScalarsMap, ScalarsMap } from './types.cjs';
export declare const getConfigValue: <T = any>(value: T, defaultValue: T) => T;
export declare function quoteIfNeeded(array: string[], joinWith?: string): string;
export declare function block(array: any): string;
export declare function wrapWithSingleQuotes(value: string | number | NameNode, skipNumericCheck?: boolean): string;
export declare function breakLine(str: string): string;
export declare function indent(str: string, count?: number): string;
export declare function indentMultiline(str: string, count?: number): string;
export interface DeclarationBlockConfig {
    blockWrapper?: string;
    blockTransformer?: (block: string) => string;
    enumNameValueSeparator?: string;
    ignoreExport?: boolean;
}
export declare function transformComment(comment: string | StringValueNode, indentLevel?: number, disabled?: boolean): string;
export declare class DeclarationBlock {
    private _config;
    _decorator: any;
    _export: boolean;
    _name: any;
    _kind: any;
    _methodName: any;
    _content: any;
    _block: any;
    _nameGenerics: any;
    _comment: any;
    _ignoreBlockWrapper: boolean;
    constructor(_config: DeclarationBlockConfig);
    withDecorator(decorator: string): DeclarationBlock;
    export(exp?: boolean): DeclarationBlock;
    asKind(kind: string): DeclarationBlock;
    withComment(comment: string | StringValueNode | null, disabled?: boolean): DeclarationBlock;
    withMethodCall(methodName: string, ignoreBlockWrapper?: boolean): DeclarationBlock;
    withBlock(block: string): DeclarationBlock;
    withContent(content: string): DeclarationBlock;
    withName(name: string | NameNode, generics?: string | null): DeclarationBlock;
    get string(): string;
}
export declare function getBaseTypeNode(typeNode: TypeNode): NamedTypeNode;
export declare function convertNameParts(str: string, func: (str: string) => string, removeUnderscore?: boolean): string;
export declare function buildScalarsFromConfig(schema: GraphQLSchema | undefined, config: RawConfig, defaultScalarsMapping?: NormalizedScalarsMap, defaultScalarType?: string): ParsedScalarsMap;
export declare function buildScalars(schema: GraphQLSchema | undefined, scalarsMapping: ScalarsMap, defaultScalarsMapping?: NormalizedScalarsMap, defaultScalarType?: string | null): ParsedScalarsMap;
export declare function getRootTypeNames(schema: GraphQLSchema): string[];
export declare function stripMapperTypeInterpolation(identifier: string): string;
export declare const OMIT_TYPE = "export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;";
export declare const REQUIRE_FIELDS_TYPE = "export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };";
/**
 * merge selection sets into a new selection set without mutating the inputs.
 */
export declare function mergeSelectionSets(selectionSet1: SelectionSetNode, selectionSet2: SelectionSetNode): SelectionSetNode;
export declare const getFieldNodeNameValue: (node: FieldNode) => string;
export declare function separateSelectionSet(selections: ReadonlyArray<SelectionNode>): {
    fields: FieldNode[];
    spreads: FragmentSpreadNode[];
    inlines: InlineFragmentNode[];
};
export declare function getPossibleTypes(schema: GraphQLSchema, type: GraphQLNamedType): GraphQLObjectType[];
export declare function hasConditionalDirectives(field: FieldNode): boolean;
declare type WrapModifiersOptions = {
    wrapOptional(type: string): string;
    wrapArray(type: string): string;
};
export declare function wrapTypeWithModifiers(baseType: string, type: GraphQLOutputType | GraphQLNamedType, options: WrapModifiersOptions): string;
export declare function removeDescription<T extends {
    description?: StringValueNode;
}>(nodes: readonly T[]): (T & {
    description: any;
})[];
export declare function wrapTypeNodeWithModifiers(baseType: string, typeNode: TypeNode): string;
export declare function isOneOfInputObjectType(namedType: GraphQLNamedType | null | undefined): namedType is GraphQLInputObjectType;
export {};
