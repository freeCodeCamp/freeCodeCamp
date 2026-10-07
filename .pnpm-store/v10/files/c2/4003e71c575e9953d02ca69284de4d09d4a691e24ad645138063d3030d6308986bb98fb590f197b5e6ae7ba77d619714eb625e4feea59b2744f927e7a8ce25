import { GraphQLSchema, GraphQLField, GraphQLInputType, GraphQLNamedType, GraphQLResolveInfo, GraphQLScalarType, DocumentNode, FieldNode, GraphQLEnumValue, GraphQLEnumType, GraphQLUnionType, GraphQLArgument, GraphQLInputField, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLObjectType, GraphQLDirective, FragmentDefinitionNode, SelectionNode, GraphQLOutputType, FieldDefinitionNode, GraphQLFieldConfig, GraphQLInputFieldConfig, GraphQLArgumentConfig, GraphQLEnumValueConfig, GraphQLScalarSerializer, GraphQLScalarValueParser, GraphQLScalarLiteralParser, ScalarTypeDefinitionNode, ScalarTypeExtensionNode, EnumTypeDefinitionNode, EnumTypeExtensionNode, GraphQLIsTypeOfFn, ObjectTypeDefinitionNode, ObjectTypeExtensionNode, InterfaceTypeExtensionNode, InterfaceTypeDefinitionNode, GraphQLTypeResolver, UnionTypeDefinitionNode, UnionTypeExtensionNode, InputObjectTypeExtensionNode, InputObjectTypeDefinitionNode, GraphQLType, Source, DefinitionNode, OperationTypeNode, GraphQLError } from 'graphql';
/**
 * The result of GraphQL execution.
 *
 *   - `errors` is included when any errors occurred as a non-empty array.
 *   - `data` is the result of a successful execution of the query.
 *   - `extensions` is reserved for adding non-standard properties.
 */
export interface ExecutionResult<TData = any, TExtensions = any> {
    errors?: ReadonlyArray<GraphQLError>;
    data?: TData | null;
    extensions?: TExtensions;
}
export interface ExecutionRequest<TArgs extends Record<string, any> = Record<string, any>, TContext = any, TRootValue = any, TExtensions = Record<string, any>> {
    document: DocumentNode;
    variables?: TArgs;
    operationType?: OperationTypeNode;
    operationName?: string;
    extensions?: TExtensions;
    rootValue?: TRootValue;
    context?: TContext;
    info?: GraphQLResolveInfo;
}
export interface GraphQLParseOptions {
    noLocation?: boolean;
    allowLegacySDLEmptyFields?: boolean;
    allowLegacySDLImplementsInterfaces?: boolean;
    experimentalFragmentVariables?: boolean;
    /**
     * Set to `true` in order to convert all GraphQL comments (marked with # sign) to descriptions (""")
     * GraphQL has built-in support for transforming descriptions to comments (with `print`), but not while
     * parsing. Turning the flag on will support the other way as well (`parse`)
     */
    commentDescriptions?: boolean;
}
export declare type ValidatorBehavior = 'error' | 'warn' | 'ignore';
/**
 * Options for validating resolvers
 */
export interface IResolverValidationOptions {
    /**
     * Enable to require a resolver to be defined for any field that has
     * arguments. Defaults to `ignore`.
     */
    requireResolversForArgs?: ValidatorBehavior;
    /**
     * Enable to require a resolver to be defined for any field which has
     * a return type that isn't a scalar. Defaults to `ignore`.
     */
    requireResolversForNonScalar?: ValidatorBehavior;
    /**
     * Enable to require a resolver for be defined for all fields defined
     * in the schema. Defaults to `ignore`.
     */
    requireResolversForAllFields?: ValidatorBehavior;
    /**
     * Enable to require a `resolveType()` for Interface and Union types.
     * Defaults to `ignore`.
     */
    requireResolversForResolveType?: ValidatorBehavior;
    /**
     * Enable to require all defined resolvers to match fields that
     * actually exist in the schema. Defaults to `error` to catch common errors.
     */
    requireResolversToMatchSchema?: ValidatorBehavior;
}
/**
 * Configuration object for adding resolvers to a schema
 */
export interface IAddResolversToSchemaOptions {
    /**
     * The schema to which to add resolvers
     */
    schema: GraphQLSchema;
    /**
     * Object describing the field resolvers to add to the provided schema
     */
    resolvers: IResolvers;
    /**
     * Override the default field resolver provided by `graphql-js`
     */
    defaultFieldResolver?: IFieldResolver<any, any>;
    /**
     * Additional options for validating the provided resolvers
     */
    resolverValidationOptions?: IResolverValidationOptions;
    /**
     * GraphQL object types that implement interfaces will inherit any missing
     * resolvers from their interface types defined in the `resolvers` object
     */
    inheritResolversFromInterfaces?: boolean;
    /**
     * Set to `true` to modify the existing schema instead of creating a new one
     */
    updateResolversInPlace?: boolean;
}
export declare type IScalarTypeResolver = GraphQLScalarType & {
    __name?: string;
    __description?: string;
    __serialize?: GraphQLScalarSerializer<any>;
    __parseValue?: GraphQLScalarValueParser<any>;
    __parseLiteral?: GraphQLScalarLiteralParser<any>;
    __extensions?: Record<string, any>;
    __astNode?: ScalarTypeDefinitionNode;
    __extensionASTNodes?: Array<ScalarTypeExtensionNode>;
};
export declare type IEnumTypeResolver = Record<string, any> & {
    __name?: string;
    __description?: string;
    __extensions?: Record<string, any>;
    __astNode?: EnumTypeDefinitionNode;
    __extensionASTNodes?: Array<EnumTypeExtensionNode>;
};
export interface IFieldResolverOptions<TSource = any, TContext = any, TArgs = any> {
    name?: string;
    description?: string;
    type?: GraphQLOutputType;
    args?: Array<GraphQLArgument>;
    resolve?: IFieldResolver<TSource, TContext, TArgs>;
    subscribe?: IFieldResolver<TSource, TContext, TArgs>;
    isDeprecated?: boolean;
    deprecationReason?: string;
    extensions?: Record<string, any>;
    astNode?: FieldDefinitionNode;
}
export declare type FieldNodeMapper = (fieldNode: FieldNode, fragments: Record<string, FragmentDefinitionNode>, transformationContext: Record<string, any>) => SelectionNode | Array<SelectionNode>;
export declare type FieldNodeMappers = Record<string, Record<string, FieldNodeMapper>>;
export declare type InputFieldFilter = (typeName?: string, fieldName?: string, inputFieldConfig?: GraphQLInputFieldConfig) => boolean;
export declare type FieldFilter = (typeName: string, fieldName: string, fieldConfig: GraphQLFieldConfig<any, any> | GraphQLInputFieldConfig) => boolean;
export declare type ObjectFieldFilter = (typeName: string, fieldName: string, fieldConfig: GraphQLFieldConfig<any, any>) => boolean;
export declare type RootFieldFilter = (operation: 'Query' | 'Mutation' | 'Subscription', rootFieldName: string, fieldConfig: GraphQLFieldConfig<any, any>) => boolean;
export declare type TypeFilter = (typeName: string, type: GraphQLType) => boolean;
export declare type ArgumentFilter = (typeName?: string, fieldName?: string, argName?: string, argConfig?: GraphQLArgumentConfig) => boolean;
export declare type RenameTypesOptions = {
    renameBuiltins: boolean;
    renameScalars: boolean;
};
export declare type IFieldResolver<TSource, TContext, TArgs = Record<string, any>, TReturn = any> = (source: TSource, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TReturn;
export declare type TypeSource = string | Source | DocumentNode | GraphQLSchema | DefinitionNode | Array<TypeSource> | (() => TypeSource);
export declare type IObjectTypeResolver<TSource = any, TContext = any, TArgs = any> = {
    [key: string]: IFieldResolver<TSource, TContext, TArgs> | IFieldResolverOptions<TSource, TContext>;
} & {
    __name?: string;
    __description?: string;
    __isTypeOf?: GraphQLIsTypeOfFn<TSource, TContext>;
    __extensions?: Record<string, any>;
    __astNode?: ObjectTypeDefinitionNode;
    __extensionASTNodes?: ObjectTypeExtensionNode;
};
export declare type IInterfaceTypeResolver<TSource = any, TContext = any, TArgs = any> = {
    [key: string]: IFieldResolver<TSource, TContext, TArgs> | IFieldResolverOptions<TSource, TContext>;
} & {
    __name?: string;
    __description?: string;
    __resolveType?: GraphQLTypeResolver<any, any>;
    __extensions?: Record<string, any>;
    __astNode?: InterfaceTypeDefinitionNode;
    __extensionASTNodes?: Array<InterfaceTypeExtensionNode>;
};
export declare type IUnionTypeResolver = {
    __name?: string;
    __description?: string;
    __resolveType?: GraphQLTypeResolver<any, any>;
    __extensions?: Record<string, any>;
    __astNode?: UnionTypeDefinitionNode;
    __extensionASTNodes?: Array<UnionTypeExtensionNode>;
};
export declare type IInputObjectTypeResolver = {
    __name?: string;
    __description?: string;
    __extensions?: Record<string, any>;
    __astNode?: InputObjectTypeDefinitionNode;
    __extensionASTNodes?: Array<InputObjectTypeExtensionNode>;
};
export declare type ISchemaLevelResolver<TSource, TContext, TArgs = Record<string, any>, TReturn = any> = IFieldResolver<TSource, TContext, TArgs, TReturn>;
export declare type IResolvers<TSource = any, TContext = any, TArgs = Record<string, any>, TReturn = any> = Record<string, ISchemaLevelResolver<TSource, TContext, TArgs, TReturn> | IObjectTypeResolver<TSource, TContext> | IInterfaceTypeResolver<TSource, TContext> | IUnionTypeResolver | IScalarTypeResolver | IEnumTypeResolver | IInputObjectTypeResolver>;
export declare type IFieldIteratorFn = (fieldDef: GraphQLField<any, any>, typeName: string, fieldName: string) => void;
export declare type IDefaultValueIteratorFn = (type: GraphQLInputType, value: any) => void;
export declare type NextResolverFn = () => Promise<any>;
export declare type VisitableSchemaType = GraphQLSchema | GraphQLObjectType | GraphQLInterfaceType | GraphQLInputObjectType | GraphQLNamedType | GraphQLScalarType | GraphQLField<any, any> | GraphQLInputField | GraphQLArgument | GraphQLUnionType | GraphQLEnumType | GraphQLEnumValue;
export declare enum MapperKind {
    TYPE = "MapperKind.TYPE",
    SCALAR_TYPE = "MapperKind.SCALAR_TYPE",
    ENUM_TYPE = "MapperKind.ENUM_TYPE",
    COMPOSITE_TYPE = "MapperKind.COMPOSITE_TYPE",
    OBJECT_TYPE = "MapperKind.OBJECT_TYPE",
    INPUT_OBJECT_TYPE = "MapperKind.INPUT_OBJECT_TYPE",
    ABSTRACT_TYPE = "MapperKind.ABSTRACT_TYPE",
    UNION_TYPE = "MapperKind.UNION_TYPE",
    INTERFACE_TYPE = "MapperKind.INTERFACE_TYPE",
    ROOT_OBJECT = "MapperKind.ROOT_OBJECT",
    QUERY = "MapperKind.QUERY",
    MUTATION = "MapperKind.MUTATION",
    SUBSCRIPTION = "MapperKind.SUBSCRIPTION",
    DIRECTIVE = "MapperKind.DIRECTIVE",
    FIELD = "MapperKind.FIELD",
    COMPOSITE_FIELD = "MapperKind.COMPOSITE_FIELD",
    OBJECT_FIELD = "MapperKind.OBJECT_FIELD",
    ROOT_FIELD = "MapperKind.ROOT_FIELD",
    QUERY_ROOT_FIELD = "MapperKind.QUERY_ROOT_FIELD",
    MUTATION_ROOT_FIELD = "MapperKind.MUTATION_ROOT_FIELD",
    SUBSCRIPTION_ROOT_FIELD = "MapperKind.SUBSCRIPTION_ROOT_FIELD",
    INTERFACE_FIELD = "MapperKind.INTERFACE_FIELD",
    INPUT_OBJECT_FIELD = "MapperKind.INPUT_OBJECT_FIELD",
    ARGUMENT = "MapperKind.ARGUMENT",
    ENUM_VALUE = "MapperKind.ENUM_VALUE"
}
export interface SchemaMapper {
    [MapperKind.TYPE]?: NamedTypeMapper;
    [MapperKind.SCALAR_TYPE]?: ScalarTypeMapper;
    [MapperKind.ENUM_TYPE]?: EnumTypeMapper;
    [MapperKind.COMPOSITE_TYPE]?: CompositeTypeMapper;
    [MapperKind.OBJECT_TYPE]?: ObjectTypeMapper;
    [MapperKind.INPUT_OBJECT_TYPE]?: InputObjectTypeMapper;
    [MapperKind.ABSTRACT_TYPE]?: AbstractTypeMapper;
    [MapperKind.UNION_TYPE]?: UnionTypeMapper;
    [MapperKind.INTERFACE_TYPE]?: InterfaceTypeMapper;
    [MapperKind.ROOT_OBJECT]?: ObjectTypeMapper;
    [MapperKind.QUERY]?: ObjectTypeMapper;
    [MapperKind.MUTATION]?: ObjectTypeMapper;
    [MapperKind.SUBSCRIPTION]?: ObjectTypeMapper;
    [MapperKind.ENUM_VALUE]?: EnumValueMapper;
    [MapperKind.FIELD]?: GenericFieldMapper<GraphQLFieldConfig<any, any> | GraphQLInputFieldConfig>;
    [MapperKind.OBJECT_FIELD]?: FieldMapper;
    [MapperKind.ROOT_FIELD]?: FieldMapper;
    [MapperKind.QUERY_ROOT_FIELD]?: FieldMapper;
    [MapperKind.MUTATION_ROOT_FIELD]?: FieldMapper;
    [MapperKind.SUBSCRIPTION_ROOT_FIELD]?: FieldMapper;
    [MapperKind.INTERFACE_FIELD]?: FieldMapper;
    [MapperKind.COMPOSITE_FIELD]?: FieldMapper;
    [MapperKind.ARGUMENT]?: ArgumentMapper;
    [MapperKind.INPUT_OBJECT_FIELD]?: InputFieldMapper;
    [MapperKind.DIRECTIVE]?: DirectiveMapper;
}
export declare type SchemaFieldMapperTypes = Array<MapperKind.FIELD | MapperKind.COMPOSITE_FIELD | MapperKind.OBJECT_FIELD | MapperKind.ROOT_FIELD | MapperKind.QUERY_ROOT_FIELD | MapperKind.MUTATION_ROOT_FIELD | MapperKind.SUBSCRIPTION_ROOT_FIELD | MapperKind.INTERFACE_FIELD | MapperKind.INPUT_OBJECT_FIELD>;
export declare type NamedTypeMapper = (type: GraphQLNamedType, schema: GraphQLSchema) => GraphQLNamedType | null | undefined;
export declare type ScalarTypeMapper = (type: GraphQLScalarType, schema: GraphQLSchema) => GraphQLScalarType | null | undefined;
export declare type EnumTypeMapper = (type: GraphQLEnumType, schema: GraphQLSchema) => GraphQLEnumType | null | undefined;
export declare type EnumValueMapper = (valueConfig: GraphQLEnumValueConfig, typeName: string, schema: GraphQLSchema, externalValue: string) => GraphQLEnumValueConfig | [string, GraphQLEnumValueConfig] | null | undefined;
export declare type CompositeTypeMapper = (type: GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType, schema: GraphQLSchema) => GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType | null | undefined;
export declare type ObjectTypeMapper = (type: GraphQLObjectType, schema: GraphQLSchema) => GraphQLObjectType | null | undefined;
export declare type InputObjectTypeMapper = (type: GraphQLInputObjectType, schema: GraphQLSchema) => GraphQLInputObjectType | null | undefined;
export declare type AbstractTypeMapper = (type: GraphQLInterfaceType | GraphQLUnionType, schema: GraphQLSchema) => GraphQLInterfaceType | GraphQLUnionType | null | undefined;
export declare type UnionTypeMapper = (type: GraphQLUnionType, schema: GraphQLSchema) => GraphQLUnionType | null | undefined;
export declare type InterfaceTypeMapper = (type: GraphQLInterfaceType, schema: GraphQLSchema) => GraphQLInterfaceType | null | undefined;
export declare type DirectiveMapper = (directive: GraphQLDirective, schema: GraphQLSchema) => GraphQLDirective | null | undefined;
export declare type GenericFieldMapper<F extends GraphQLFieldConfig<any, any> | GraphQLInputFieldConfig> = (fieldConfig: F, fieldName: string, typeName: string, schema: GraphQLSchema) => F | [string, F] | null | undefined;
export declare type FieldMapper = GenericFieldMapper<GraphQLFieldConfig<any, any>>;
export declare type ArgumentMapper = (argumentConfig: GraphQLArgumentConfig, fieldName: string, typeName: string, schema: GraphQLSchema) => GraphQLArgumentConfig | [string, GraphQLArgumentConfig] | null | undefined;
export declare type InputFieldMapper = GenericFieldMapper<GraphQLInputFieldConfig>;
