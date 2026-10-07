"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixSchemaAst = void 0;
const graphql_1 = require("graphql");
const print_schema_with_directives_js_1 = require("./print-schema-with-directives.js");
function buildFixedSchema(schema, options) {
    const document = (0, print_schema_with_directives_js_1.getDocumentNodeFromSchema)(schema);
    return (0, graphql_1.buildASTSchema)(document, {
        ...(options || {}),
    });
}
function fixSchemaAst(schema, options) {
    // eslint-disable-next-line no-undef-init
    let schemaWithValidAst = undefined;
    if (!schema.astNode || !schema.extensionASTNodes) {
        schemaWithValidAst = buildFixedSchema(schema, options);
    }
    if (!schema.astNode && (schemaWithValidAst === null || schemaWithValidAst === void 0 ? void 0 : schemaWithValidAst.astNode)) {
        schema.astNode = schemaWithValidAst.astNode;
    }
    if (!schema.extensionASTNodes && (schemaWithValidAst === null || schemaWithValidAst === void 0 ? void 0 : schemaWithValidAst.astNode)) {
        schema.extensionASTNodes = schemaWithValidAst.extensionASTNodes;
    }
    return schema;
}
exports.fixSchemaAst = fixSchemaAst;
