"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeInterface = void 0;
const graphql_1 = require("graphql");
const fields_js_1 = require("./fields.js");
const directives_js_1 = require("./directives.js");
const merge_named_type_array_js_1 = require("./merge-named-type-array.js");
function mergeInterface(node, existingNode, config, directives) {
    if (existingNode) {
        try {
            return {
                name: node.name,
                description: node['description'] || existingNode['description'],
                kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) ||
                    node.kind === 'InterfaceTypeDefinition' ||
                    existingNode.kind === 'InterfaceTypeDefinition'
                    ? 'InterfaceTypeDefinition'
                    : 'InterfaceTypeExtension',
                loc: node.loc,
                fields: (0, fields_js_1.mergeFields)(node, node.fields, existingNode.fields, config),
                directives: (0, directives_js_1.mergeDirectives)(node.directives, existingNode.directives, config, directives),
                interfaces: node['interfaces']
                    ? (0, merge_named_type_array_js_1.mergeNamedTypeArray)(node['interfaces'], existingNode['interfaces'], config)
                    : undefined,
            };
        }
        catch (e) {
            throw new Error(`Unable to merge GraphQL interface "${node.name.value}": ${e.message}`);
        }
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...node,
            kind: graphql_1.Kind.INTERFACE_TYPE_DEFINITION,
        }
        : node;
}
exports.mergeInterface = mergeInterface;
