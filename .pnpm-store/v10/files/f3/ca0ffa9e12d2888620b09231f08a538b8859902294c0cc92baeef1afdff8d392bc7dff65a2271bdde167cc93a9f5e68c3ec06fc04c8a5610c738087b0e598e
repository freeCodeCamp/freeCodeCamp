"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformSchemaAST = exports.validate = exports.plugin = void 0;
const graphql_1 = require("graphql");
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const path_1 = require("path");
const plugin = async (schema, _documents, { commentDescriptions = false, includeDirectives = false, includeIntrospectionTypes = false, sort = false, federation, }) => {
    const transformedSchemaAndAst = transformSchemaAST(schema, { sort, federation, includeIntrospectionTypes });
    return [
        includeIntrospectionTypes ? (0, graphql_1.printIntrospectionSchema)(transformedSchemaAndAst.schema) : null,
        includeDirectives
            ? (0, graphql_1.print)(transformedSchemaAndAst.ast)
            : graphql_1.printSchema(transformedSchemaAndAst.schema, { commentDescriptions }),
    ]
        .filter(Boolean)
        .join('\n');
};
exports.plugin = plugin;
const validate = async (_schema, _documents, _config, outputFile, allPlugins) => {
    const singlePlugin = allPlugins.length === 1;
    const allowedExtensions = ['.graphql', '.gql'];
    const isAllowedExtension = allowedExtensions.includes((0, path_1.extname)(outputFile));
    if (singlePlugin && !isAllowedExtension) {
        const allowedExtensionsOutput = allowedExtensions.map(extension => `"${extension}"`).join(' or ');
        throw new Error(`Plugin "schema-ast" requires extension to be ${allowedExtensionsOutput}!`);
    }
};
exports.validate = validate;
function transformSchemaAST(schema, config) {
    schema = config.federation ? (0, plugin_helpers_1.removeFederation)(schema) : schema;
    if (config.includeIntrospectionTypes) {
        // See: https://spec.graphql.org/June2018/#sec-Schema-Introspection
        const introspectionAST = (0, graphql_1.parse)(`
      extend type Query {
        __schema: __Schema!
        __type(name: String!): __Type
      }
    `);
        schema = (0, graphql_1.extendSchema)(schema, introspectionAST);
    }
    let ast = (0, plugin_helpers_1.getCachedDocumentNodeFromSchema)(schema);
    ast = config.disableDescriptions
        ? (0, graphql_1.visit)(ast, {
            leave: node => ({
                ...node,
                description: undefined,
            }),
        })
        : ast;
    schema = config.disableDescriptions ? (0, graphql_1.buildASTSchema)(ast) : schema;
    return {
        schema,
        ast,
    };
}
exports.transformSchemaAST = transformSchemaAST;
