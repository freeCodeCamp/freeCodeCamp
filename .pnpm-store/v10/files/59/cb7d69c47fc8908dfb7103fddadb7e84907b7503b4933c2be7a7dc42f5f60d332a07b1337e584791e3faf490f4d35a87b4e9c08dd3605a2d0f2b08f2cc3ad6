"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSchemaSync = exports.loadSchema = void 0;
const load_typedefs_js_1 = require("./load-typedefs.js");
const graphql_1 = require("graphql");
const documents_js_1 = require("./documents.js");
const schema_1 = require("@graphql-tools/schema");
const utils_1 = require("@graphql-tools/utils");
/**
 * Asynchronously loads a schema from the provided pointers.
 * @param schemaPointers Pointers to the sources to load the schema from
 * @param options Additional options
 */
async function loadSchema(schemaPointers, options) {
    const sources = await (0, load_typedefs_js_1.loadTypedefs)(schemaPointers, {
        ...options,
        filterKinds: documents_js_1.OPERATION_KINDS,
    });
    return getSchemaFromSources(sources, options);
}
exports.loadSchema = loadSchema;
/**
 * Synchronously loads a schema from the provided pointers.
 * @param schemaPointers Pointers to the sources to load the schema from
 * @param options Additional options
 */
function loadSchemaSync(schemaPointers, options) {
    const sources = (0, load_typedefs_js_1.loadTypedefsSync)(schemaPointers, {
        filterKinds: documents_js_1.OPERATION_KINDS,
        ...options,
    });
    return getSchemaFromSources(sources, options);
}
exports.loadSchemaSync = loadSchemaSync;
function includeSources(schema, sources) {
    const finalSources = [];
    for (const source of sources) {
        if (source.rawSDL) {
            finalSources.push(new graphql_1.Source(source.rawSDL, source.location));
        }
        else if (source.document) {
            finalSources.push(new graphql_1.Source((0, graphql_1.print)(source.document), source.location));
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
        return options.sort ? (0, graphql_1.lexicographicSortSchema)(sources[0].schema) : sources[0].schema;
    }
    const { typeDefs, resolvers, schemaExtensions } = collectSchemaParts(sources);
    const schema = (0, schema_1.mergeSchemas)({
        ...options,
        typeDefs,
        resolvers,
        schemaExtensions,
    });
    if (options === null || options === void 0 ? void 0 : options.includeSources) {
        includeSources(schema, sources);
    }
    return options.sort ? (0, graphql_1.lexicographicSortSchema)(schema) : schema;
}
function collectSchemaParts(sources) {
    const typeDefs = [];
    const resolvers = [];
    const schemaExtensions = [];
    for (const source of sources) {
        if (source.schema) {
            typeDefs.push(source.schema);
            resolvers.push((0, utils_1.getResolversFromSchema)(source.schema));
            schemaExtensions.push((0, schema_1.extractExtensionsFromSchema)(source.schema));
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
