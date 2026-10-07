"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSchemas = void 0;
const utils_1 = require("@graphql-tools/utils");
const makeExecutableSchema_js_1 = require("./makeExecutableSchema.js");
/**
 * Synchronously merges multiple schemas, typeDefinitions and/or resolvers into a single schema.
 * @param config Configuration object
 */
function mergeSchemas(config) {
    const extractedTypeDefs = [];
    const extractedResolvers = [];
    const extractedSchemaExtensions = [];
    if (config.schemas != null) {
        for (const schema of config.schemas) {
            extractedTypeDefs.push(schema);
            extractedResolvers.push((0, utils_1.getResolversFromSchema)(schema));
            extractedSchemaExtensions.push((0, utils_1.extractExtensionsFromSchema)(schema));
        }
    }
    if (config.typeDefs != null) {
        extractedTypeDefs.push(config.typeDefs);
    }
    if (config.resolvers != null) {
        const additionalResolvers = (0, utils_1.asArray)(config.resolvers);
        extractedResolvers.push(...additionalResolvers);
    }
    if (config.schemaExtensions != null) {
        const additionalSchemaExtensions = (0, utils_1.asArray)(config.schemaExtensions);
        extractedSchemaExtensions.push(...additionalSchemaExtensions);
    }
    return (0, makeExecutableSchema_js_1.makeExecutableSchema)({
        ...config,
        typeDefs: extractedTypeDefs,
        resolvers: extractedResolvers,
        schemaExtensions: extractedSchemaExtensions,
    });
}
exports.mergeSchemas = mergeSchemas;
