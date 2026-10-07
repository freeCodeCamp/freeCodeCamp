import { LoadTypedefsOptions, UnnormalizedTypeDefPointer } from './load-typedefs.cjs';
import { GraphQLSchema, BuildSchemaOptions } from 'graphql';
import { IExecutableSchemaDefinition } from '@graphql-tools/schema';
export type LoadSchemaOptions = BuildSchemaOptions & LoadTypedefsOptions & Partial<IExecutableSchemaDefinition> & {
    /**
     * Adds a list of Sources in to `extensions.sources`
     *
     * Disabled by default.
     */
    includeSources?: boolean;
};
/**
 * Asynchronously loads a schema from the provided pointers.
 * @param schemaPointers Pointers to the sources to load the schema from
 * @param options Additional options
 */
export declare function loadSchema(schemaPointers: UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[], options: LoadSchemaOptions): Promise<GraphQLSchema>;
/**
 * Synchronously loads a schema from the provided pointers.
 * @param schemaPointers Pointers to the sources to load the schema from
 * @param options Additional options
 */
export declare function loadSchemaSync(schemaPointers: UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[], options: LoadSchemaOptions): GraphQLSchema;
