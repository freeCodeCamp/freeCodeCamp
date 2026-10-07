"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeInputType = void 0;
const graphql_1 = require("graphql");
const fields_js_1 = require("./fields.js");
const directives_js_1 = require("./directives.js");
function mergeInputType(node, existingNode, config, directives) {
    if (existingNode) {
        try {
            return {
                name: node.name,
                description: node['description'] || existingNode['description'],
                kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) ||
                    node.kind === 'InputObjectTypeDefinition' ||
                    existingNode.kind === 'InputObjectTypeDefinition'
                    ? 'InputObjectTypeDefinition'
                    : 'InputObjectTypeExtension',
                loc: node.loc,
                fields: (0, fields_js_1.mergeFields)(node, node.fields, existingNode.fields, config),
                directives: (0, directives_js_1.mergeDirectives)(node.directives, existingNode.directives, config, directives),
            };
        }
        catch (e) {
            throw new Error(`Unable to merge GraphQL input type "${node.name.value}": ${e.message}`);
        }
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...node,
            kind: graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION,
        }
        : node;
}
exports.mergeInputType = mergeInputType;
