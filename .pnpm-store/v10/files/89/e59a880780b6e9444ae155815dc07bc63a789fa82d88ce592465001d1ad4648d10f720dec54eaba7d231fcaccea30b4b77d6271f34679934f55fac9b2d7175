import { asArray, getResolversFromSchema, extractExtensionsFromSchema, } from '@graphql-tools/utils';
import { makeExecutableSchema } from './makeExecutableSchema.js';
/**
 * Synchronously merges multiple schemas, typeDefinitions and/or resolvers into a single schema.
 * @param config Configuration object
 */
export function mergeSchemas(config) {
    const extractedTypeDefs = [];
    const extractedResolvers = [];
    const extractedSchemaExtensions = [];
    if (config.schemas != null) {
        for (const schema of config.schemas) {
            extractedTypeDefs.push(schema);
            extractedResolvers.push(getResolversFromSchema(schema));
            extractedSchemaExtensions.push(extractExtensionsFromSchema(schema));
        }
    }
    if (config.typeDefs != null) {
        extractedTypeDefs.push(config.typeDefs);
    }
    if (config.resolvers != null) {
        const additionalResolvers = asArray(config.resolvers);
        extractedResolvers.push(...additionalResolvers);
    }
    if (config.schemaExtensions != null) {
        const additionalSchemaExtensions = asArray(config.schemaExtensions);
        extractedSchemaExtensions.push(...additionalSchemaExtensions);
    }
    return makeExecutableSchema({
        ...config,
        typeDefs: extractedTypeDefs,
        resolvers: extractedResolvers,
        schemaExtensions: extractedSchemaExtensions,
    });
}
