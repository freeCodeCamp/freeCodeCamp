import { ASTNode, FragmentDefinitionNode } from 'graphql';
import { ParsedMapper } from './mappers.cjs';
/**
 * A map between the GraphQL directive name and the identifier that should be used
 */
export declare type DirectiveArgumentAndInputFieldMappings = {
    [name: string]: string;
};
/**
 * Parsed directives map - a mapping between GraphQL directive name and the parsed mapper object,
 * including all required information for generating code for that mapping.
 */
export declare type ParsedDirectiveArgumentAndInputFieldMappings = {
    [name: string]: ParsedMapper;
};
/**
 * Scalars map or a string, a map between the GraphQL scalar name and the identifier that should be used
 */
export declare type ScalarsMap = string | {
    [name: string]: string;
};
/**
 * A normalized map between GraphQL scalar name and the identifier name
 */
export declare type NormalizedScalarsMap = {
    [name: string]: string;
};
/**
 * Parsed scalars map - a mapping between GraphQL scalar name and the parsed mapper object,
 * including all required information for generting code for that mapping.
 */
export declare type ParsedScalarsMap = {
    [name: string]: ParsedMapper;
};
/**
 * A raw configuration for enumValues map - can be represented with a single string value for a file path,
 * a map between enum name and a file path, or a map between enum name and an object with explicit enum values.
 */
export declare type EnumValuesMap<AdditionalProps = {}> = string | {
    [enumName: string]: string | ({
        [key: string]: string | number;
    } & AdditionalProps);
};
export declare type ParsedEnumValuesMap = {
    [enumName: string]: {
        mappedValues?: {
            [valueName: string]: string | number;
        };
        typeIdentifier: string;
        sourceIdentifier?: string;
        sourceFile?: string;
        importIdentifier?: string;
        isDefault?: boolean;
    };
};
export declare type ConvertNameFn<T = {}> = ConvertFn<T>;
export declare type GetFragmentSuffixFn = (node: FragmentDefinitionNode | string) => string;
export interface ConvertOptions {
    prefix?: string;
    suffix?: string;
    transformUnderscore?: boolean;
}
export declare type ConvertFn<T = {}> = (node: ASTNode | string, options?: ConvertOptions & T) => string;
export declare type NamingConventionFn = (str: string) => string;
export declare type NamingConventionResolvePath = string;
export declare type NamingConvention = string | NamingConventionFn | NamingConventionMap;
/**
 * @additionalProperties false
 */
export interface NamingConventionMap {
    enumValues?: 'keep' | NamingConventionResolvePath | NamingConventionFn;
    typeNames?: 'keep' | NamingConventionResolvePath | NamingConventionFn;
    transformUnderscore?: boolean;
}
export declare type LoadedFragment<AdditionalFields = {}> = {
    name: string;
    onType: string;
    node: FragmentDefinitionNode;
    isExternal: boolean;
    importFrom?: string | null;
} & AdditionalFields;
export declare type DeclarationKind = 'type' | 'interface' | 'class' | 'abstract class';
export interface DeclarationKindConfig {
    directive?: DeclarationKind;
    scalar?: DeclarationKind;
    input?: DeclarationKind;
    type?: DeclarationKind;
    interface?: DeclarationKind;
    arguments?: DeclarationKind;
}
export interface AvoidOptionalsConfig {
    field?: boolean;
    object?: boolean;
    inputValue?: boolean;
    defaultValue?: boolean;
    resolvers?: boolean;
}
export interface ParsedImport {
    moduleName: string | null;
    propName: string;
}
