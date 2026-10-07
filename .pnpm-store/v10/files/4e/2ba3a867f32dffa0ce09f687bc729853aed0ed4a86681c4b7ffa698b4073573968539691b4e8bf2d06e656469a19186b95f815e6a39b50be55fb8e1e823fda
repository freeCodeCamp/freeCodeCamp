import { buildASTSchema } from 'graphql';
import { getDocumentNodeFromSchema } from './print-schema-with-directives.js';
function buildFixedSchema(schema, options) {
    const document = getDocumentNodeFromSchema(schema);
    return buildASTSchema(document, {
        ...(options || {}),
    });
}
export function fixSchemaAst(schema, options) {
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
