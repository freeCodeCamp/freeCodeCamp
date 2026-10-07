import { ObjectTypeComposerAsObjectDefinition as ComposeObjectTypeConfig, InputTypeComposerAsObjectDefinition as ComposeInputObjectTypeConfig, InterfaceTypeComposerAsObjectDefinition as ComposeInterfaceTypeConfig, UnionTypeComposerAsObjectDefinition as ComposeUnionTypeConfig, EnumTypeComposerAsObjectDefinition as ComposeEnumTypeConfig, ScalarTypeComposerAsObjectDefinition as ComposeScalarTypeConfig } from "graphql-compose";
declare enum GatsbyGraphQLTypeKind {
    OBJECT = "OBJECT",
    INPUT_OBJECT = "INPUT_OBJECT",
    UNION = "UNION",
    INTERFACE = "INTERFACE",
    ENUM = "ENUM",
    SCALAR = "SCALAR"
}
export type GatsbyGraphQLType<TSource, TContext> = {
    kind: GatsbyGraphQLTypeKind.OBJECT;
    config: ComposeObjectTypeConfig<TSource, TContext>;
} | {
    kind: GatsbyGraphQLTypeKind.INPUT_OBJECT;
    config: ComposeInputObjectTypeConfig;
} | {
    kind: GatsbyGraphQLTypeKind.UNION;
    config: ComposeUnionTypeConfig<TSource, TContext>;
} | {
    kind: GatsbyGraphQLTypeKind.INTERFACE;
    config: ComposeInterfaceTypeConfig<TSource, TContext>;
} | {
    kind: GatsbyGraphQLTypeKind.ENUM;
    config: ComposeEnumTypeConfig;
} | {
    kind: GatsbyGraphQLTypeKind.SCALAR;
    config: ComposeScalarTypeConfig<any, any>;
};
declare function buildObjectType<TSource, TContext>(config: ComposeObjectTypeConfig<TSource, TContext>): GatsbyGraphQLType<TSource, TContext>;
declare function buildUnionType<TSource, TContext>(config: ComposeUnionTypeConfig<TSource, TContext>): GatsbyGraphQLType<TSource, TContext>;
declare function buildInterfaceType<TSource, TContext>(config: ComposeInterfaceTypeConfig<TSource, TContext>): GatsbyGraphQLType<TSource, TContext>;
declare function buildInputObjectType<TSource, TContext>(config: ComposeInputObjectTypeConfig): GatsbyGraphQLType<TSource, TContext>;
declare function buildEnumType<TSource, TContext>(config: ComposeEnumTypeConfig): GatsbyGraphQLType<TSource, TContext>;
declare function buildScalarType<TSource, TContext>(config: ComposeScalarTypeConfig<any, any>): GatsbyGraphQLType<TSource, TContext>;
declare function isGatsbyType(something: any): something is GatsbyGraphQLTypeKind;
export { GatsbyGraphQLTypeKind, buildObjectType, buildUnionType, buildInterfaceType, buildInputObjectType, buildEnumType, buildScalarType, isGatsbyType, };
