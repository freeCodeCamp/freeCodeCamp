import { GraphQLEnumType, GraphQLInputObjectType, GraphQLNamedType, GraphQLScalarType, visit } from 'graphql';
export interface SchemaPrintOptions {
    /**
     * Descriptions are defined as preceding string literals, however an older
     * experimental version of the SDL supported preceding comments as
     * descriptions. Set to true to enable this deprecated behavior.
     * This option is provided to ease adoption and will be removed in v16.
     *
     * Default: false
     */
    commentDescriptions?: boolean;
    assumeValid?: boolean;
}
export interface GetDocumentNodeFromSchemaOptions {
    pathToDirectivesInExtensions?: Array<string>;
}
export type PrintSchemaWithDirectivesOptions = SchemaPrintOptions & GetDocumentNodeFromSchemaOptions;
export type Maybe<T> = null | undefined | T;
export type Constructor<T> = new (...args: any[]) => T;
export type PruneSchemaFilter = (type: GraphQLNamedType) => boolean;
/**
 * Options for removing unused types from the schema
 */
export interface PruneSchemaOptions {
    /**
     * Return true to skip pruning this type. This check will run first before any other options.
     * This can be helpful for schemas that support type extensions like Apollo Federation.
     */
    skipPruning?: PruneSchemaFilter;
    /**
     * Set to `true` to skip pruning object types or interfaces with no no fields
     */
    skipEmptyCompositeTypePruning?: boolean;
    /**
     * Set to `true` to skip pruning interfaces that are not implemented by any
     * other types
     */
    skipUnimplementedInterfacesPruning?: boolean;
    /**
     * Set to `true` to skip pruning empty unions
     */
    skipEmptyUnionPruning?: boolean;
    /**
     * Set to `true` to skip pruning unused types
     */
    skipUnusedTypesPruning?: boolean;
}
export type InputLeafValueTransformer = (type: GraphQLEnumType | GraphQLScalarType, originalValue: any) => any;
export type InputObjectValueTransformer = (type: GraphQLInputObjectType, originalValue: Record<string, any>) => Record<string, any>;
export type ASTVisitorKeyMap = Partial<Parameters<typeof visit>[2]>;
export type DirectiveLocationEnum = typeof DirectiveLocation;
export declare enum DirectiveLocation {
    /** Request Definitions */
    QUERY = "QUERY",
    MUTATION = "MUTATION",
    SUBSCRIPTION = "SUBSCRIPTION",
    FIELD = "FIELD",
    FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
    FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
    INLINE_FRAGMENT = "INLINE_FRAGMENT",
    VARIABLE_DEFINITION = "VARIABLE_DEFINITION",
    /** Type System Definitions */
    SCHEMA = "SCHEMA",
    SCALAR = "SCALAR",
    OBJECT = "OBJECT",
    FIELD_DEFINITION = "FIELD_DEFINITION",
    ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
    INTERFACE = "INTERFACE",
    UNION = "UNION",
    ENUM = "ENUM",
    ENUM_VALUE = "ENUM_VALUE",
    INPUT_OBJECT = "INPUT_OBJECT",
    INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
}
export type ExtensionsObject = Record<string, any>;
export type ObjectTypeExtensions = {
    type: 'object';
    fields: Record<string, {
        extensions: ExtensionsObject;
        arguments: Record<string, ExtensionsObject>;
    }>;
};
export type InputTypeExtensions = {
    type: 'input';
    fields: Record<string, {
        extensions: ExtensionsObject;
    }>;
};
export type InterfaceTypeExtensions = {
    type: 'interface';
    fields: Record<string, {
        extensions: ExtensionsObject;
        arguments: Record<string, ExtensionsObject>;
    }>;
};
export type UnionTypeExtensions = {
    type: 'union';
};
export type ScalarTypeExtensions = {
    type: 'scalar';
};
export type EnumTypeExtensions = {
    type: 'enum';
    values: Record<string, ExtensionsObject>;
};
export type PossibleTypeExtensions = InputTypeExtensions | InterfaceTypeExtensions | ObjectTypeExtensions | UnionTypeExtensions | ScalarTypeExtensions | EnumTypeExtensions;
export type SchemaExtensions = {
    schemaExtensions: ExtensionsObject;
    types: Record<string, {
        extensions: ExtensionsObject;
    } & PossibleTypeExtensions>;
};
export type DirectiveArgs = {
    [name: string]: any;
};
export type DirectiveUsage = {
    name: string;
    args: DirectiveArgs;
};
