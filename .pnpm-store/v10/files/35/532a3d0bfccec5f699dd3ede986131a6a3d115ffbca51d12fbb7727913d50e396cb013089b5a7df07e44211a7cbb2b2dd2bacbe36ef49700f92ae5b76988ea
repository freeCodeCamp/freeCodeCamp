import { loadTypedefs, loadTypedefsSync } from './load-typedefs.js';
import { Source as GraphQLSource, print, lexicographicSortSchema } from 'graphql';
import { OPERATION_KINDS } from './documents.js';
import { mergeSchemas, extractExtensionsFromSchema } from '@graphql-tools/schema';
import { getResolversFromSchema } from '@graphql-tools/utils';
/**
 * Asynchronously loads a schema from the provided pointers.
 * @param schemaPointers Pointers to the sources to load the schema from
 * @param options Additional options
 */
export async function loadSchema(schemaPointers, options) {
    const sources = await loadTypedefs(schemaPointers, {
        ...options,
        filterKinds: OPERATION_KINDS,
    });
    return getSchemaFromSources(sources, options);
}
/**
 * Synchronously loads a schema from the provided pointers.
 * @param schemaPointers Pointers to the sources to load the schema from
 * @param options Additional options
 */
export function loadSchemaSync(schemaPointers, options) {
    const sources = loadTypedefsSync(schemaPointers, {
        filterKinds: OPERATION_KINDS,
        ...options,
    });
    return getSchemaFromSources(sources, options);
}
function includeSources(schema, sources) {
    const finalSources = [];
    for (const source of sources) {
        if (source.rawSDL) {
            finalSources.push(new GraphQLSource(source.rawSDL, source.location));
        }
        else if (source.document) {
            finalSources.push(new GraphQLSource(print(source.document), source.location));
        }
    }
    schema.extensions = {
        ...schema.extensions,
        sources: finalSources,
        extendedSources: sources,
    };
}
function getSchemaFromSources(sources, options) {
    if (sources.length === 1 && sources[0].schema != null && options.typeDefs == null && options.resolvers == null) {
        return options.sort ? lexicographicSortSchema(sources[0].schema) : sources[0].schema;
    }
    const { typeDefs, resolvers, schemaExtensions } = collectSchemaParts(sources);
    const schema = mergeSchemas({
        ...options,
        typeDefs,
        resolvers,
        schemaExtensions,
    });
    if (options === null || options === void 0 ? void 0 : options.includeSources) {
        includeSources(schema, sources);
    }
    return options.sort ? lexicographicSortSchema(schema) : schema;
}
function collectSchemaParts(sources) {
    const typeDefs = [];
    const resolvers = [];
    const schemaExtensions = [];
    for (const source of sources) {
        if (source.schema) {
            typeDefs.push(source.schema);
            resolvers.push(getResolversFromSchema(source.schema));
            schemaExtensions.push(extractExtensionsFromSchema(source.schema));
        }
        else {
            const typeDef = source.document || source.rawSDL;
            if (typeDef) {
                typeDefs.push(typeDef);
            }
        }
    }
    return {
        typeDefs,
        resolvers,
        schemaExtensions,
    };
}
