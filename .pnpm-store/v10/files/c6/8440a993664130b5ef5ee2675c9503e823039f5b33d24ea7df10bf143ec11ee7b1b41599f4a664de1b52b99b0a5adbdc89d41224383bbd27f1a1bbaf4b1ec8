import { AvoidOptionalsConfig, BaseTypesVisitor, DeclarationKind, ParsedTypesConfig } from '@graphql-codegen/visitor-plugin-common';
import { EnumTypeDefinitionNode, FieldDefinitionNode, GraphQLSchema, InputValueDefinitionNode, ListTypeNode, NamedTypeNode, NonNullTypeNode, TypeDefinitionNode, UnionTypeDefinitionNode } from 'graphql';
import { TypeScriptPluginConfig } from './config.cjs';
export interface TypeScriptPluginParsedConfig extends ParsedTypesConfig {
    avoidOptionals: AvoidOptionalsConfig;
    constEnums: boolean;
    enumsAsTypes: boolean;
    futureProofEnums: boolean;
    futureProofUnions: boolean;
    enumsAsConst: boolean;
    numericEnums: boolean;
    onlyEnums: boolean;
    onlyOperationTypes: boolean;
    immutableTypes: boolean;
    maybeValue: string;
    inputMaybeValue: string;
    noExport: boolean;
    useImplementingTypes: boolean;
}
export declare const EXACT_SIGNATURE = "type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };";
export declare const MAKE_OPTIONAL_SIGNATURE = "type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };";
export declare const MAKE_MAYBE_SIGNATURE = "type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };";
export declare class TsVisitor<TRawConfig extends TypeScriptPluginConfig = TypeScriptPluginConfig, TParsedConfig extends TypeScriptPluginParsedConfig = TypeScriptPluginParsedConfig> extends BaseTypesVisitor<TRawConfig, TParsedConfig> {
    constructor(schema: GraphQLSchema, pluginConfig: TRawConfig, additionalConfig?: Partial<TParsedConfig>);
    protected _getTypeForNode(node: NamedTypeNode): string;
    getWrapperDefinitions(): string[];
    getExactDefinition(): string;
    getMakeOptionalDefinition(): string;
    getMakeMaybeDefinition(): string;
    getMaybeValue(): string;
    getInputMaybeValue(): string;
    protected clearOptional(str: string): string;
    protected getExportPrefix(): string;
    getMaybeWrapper(ancestors: any): string;
    NamedType(node: NamedTypeNode, key: any, parent: any, path: any, ancestors: any): string;
    ListType(node: ListTypeNode, key: any, parent: any, path: any, ancestors: any): string;
    UnionTypeDefinition(node: UnionTypeDefinitionNode, key: string | number | undefined, parent: any): string;
    protected wrapWithListType(str: string): string;
    NonNullType(node: NonNullTypeNode): string;
    FieldDefinition(node: FieldDefinitionNode, key?: number | string, parent?: any): string;
    InputValueDefinition(node: InputValueDefinitionNode, key?: number | string, parent?: any, _path?: Array<string | number>, ancestors?: Array<TypeDefinitionNode>): string;
    EnumTypeDefinition(node: EnumTypeDefinitionNode): string;
    protected getPunctuation(_declarationKind: DeclarationKind): string;
}
