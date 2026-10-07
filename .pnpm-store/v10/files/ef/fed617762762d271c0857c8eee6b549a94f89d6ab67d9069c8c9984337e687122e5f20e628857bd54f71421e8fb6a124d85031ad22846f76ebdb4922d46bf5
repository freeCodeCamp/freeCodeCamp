import { TypeSource, IResolvers, IResolverValidationOptions, GraphQLParseOptions, SchemaExtensions } from '@graphql-tools/utils';
import { BuildSchemaOptions, GraphQLSchema } from 'graphql';
export interface GraphQLSchemaWithContext<TContext> extends GraphQLSchema {
    __context?: TContext;
}
/**
 * Configuration object for creating an executable schema
 */
export interface IExecutableSchemaDefinition<TContext = any> extends BuildSchemaOptions, GraphQLParseOptions {
    /**
     * The type definitions used to create the schema
     */
    typeDefs: TypeSource;
    /**
     * Object describing the field resolvers for the provided type definitions
     */
    resolvers?: IResolvers<any, TContext> | Array<IResolvers<any, TContext>>;
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
     * Do not create a schema again and use the one from `buildASTSchema`
     */
    updateResolversInPlace?: boolean;
    /**
     * Schema extensions
     */
    schemaExtensions?: SchemaExtensions | Array<SchemaExtensions>;
}
