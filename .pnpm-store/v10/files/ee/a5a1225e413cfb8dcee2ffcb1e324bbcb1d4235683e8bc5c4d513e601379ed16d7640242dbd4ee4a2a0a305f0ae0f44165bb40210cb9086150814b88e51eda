"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeScalar = void 0;
const graphql_1 = require("graphql");
const directives_js_1 = require("./directives.js");
function mergeScalar(node, existingNode, config, directives) {
    if (existingNode) {
        return {
            name: node.name,
            description: node['description'] || existingNode['description'],
            kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) ||
                node.kind === 'ScalarTypeDefinition' ||
                existingNode.kind === 'ScalarTypeDefinition'
                ? 'ScalarTypeDefinition'
                : 'ScalarTypeExtension',
            loc: node.loc,
            directives: (0, directives_js_1.mergeDirectives)(node.directives, existingNode.directives, config, directives),
        };
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...node,
            kind: graphql_1.Kind.SCALAR_TYPE_DEFINITION,
        }
        : node;
}
exports.mergeScalar = mergeScalar;
