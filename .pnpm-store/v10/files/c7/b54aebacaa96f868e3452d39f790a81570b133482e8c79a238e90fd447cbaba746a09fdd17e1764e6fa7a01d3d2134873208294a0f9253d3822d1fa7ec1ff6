import { GraphQLInterfaceType, GraphQLNamedType, GraphQLObjectType, GraphQLOutputType } from 'graphql';
import { AvoidOptionalsConfig, ConvertNameFn, ScalarsMap } from '../types.js';
export declare type PrimitiveField = {
    isConditional: boolean;
    fieldName: string;
};
export declare type PrimitiveAliasedFields = {
    alias: string;
    fieldName: string;
};
export declare type LinkField = {
    alias: string;
    name: string;
    type: string;
    selectionSet: string;
};
export declare type NameAndType = {
    name: string;
    type: string;
};
export declare type ProcessResult = null | Array<NameAndType | string>;
export declare type SelectionSetProcessorConfig = {
    namespacedImportName: string | null;
    convertName: ConvertNameFn<any>;
    enumPrefix: boolean | null;
    scalars: ScalarsMap;
    formatNamedField(name: string, type?: GraphQLOutputType | GraphQLNamedType | null, isConditional?: boolean): string;
    wrapTypeWithModifiers(baseType: string, type: GraphQLOutputType | GraphQLNamedType): string;
    avoidOptionals?: AvoidOptionalsConfig;
};
export declare class BaseSelectionSetProcessor<Config extends SelectionSetProcessorConfig> {
    config: Config;
    constructor(config: Config);
    buildFieldsIntoObject(allObjectsMerged: string[]): string;
    buildSelectionSetFromStrings(pieces: string[]): string;
    transformPrimitiveFields(_schemaType: GraphQLObjectType | GraphQLInterfaceType, _fields: PrimitiveField[]): ProcessResult;
    transformAliasesPrimitiveFields(_schemaType: GraphQLObjectType | GraphQLInterfaceType, _fields: PrimitiveAliasedFields[]): ProcessResult;
    transformLinkFields(_fields: LinkField[]): ProcessResult;
    transformTypenameField(_type: string, _name: string): ProcessResult;
}
