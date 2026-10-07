"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSchemaDefs = exports.DEFAULT_OPERATION_TYPE_NAME_MAP = void 0;
const graphql_1 = require("graphql");
const directives_js_1 = require("./directives.js");
exports.DEFAULT_OPERATION_TYPE_NAME_MAP = {
    query: 'Query',
    mutation: 'Mutation',
    subscription: 'Subscription',
};
function mergeOperationTypes(opNodeList = [], existingOpNodeList = []) {
    const finalOpNodeList = [];
    for (const opNodeType in exports.DEFAULT_OPERATION_TYPE_NAME_MAP) {
        const opNode = opNodeList.find(n => n.operation === opNodeType) || existingOpNodeList.find(n => n.operation === opNodeType);
        if (opNode) {
            finalOpNodeList.push(opNode);
        }
    }
    return finalOpNodeList;
}
function mergeSchemaDefs(node, existingNode, config, directives) {
    if (existingNode) {
        return {
            kind: node.kind === graphql_1.Kind.SCHEMA_DEFINITION || existingNode.kind === graphql_1.Kind.SCHEMA_DEFINITION
                ? graphql_1.Kind.SCHEMA_DEFINITION
                : graphql_1.Kind.SCHEMA_EXTENSION,
            description: node['description'] || existingNode['description'],
            directives: (0, directives_js_1.mergeDirectives)(node.directives, existingNode.directives, config, directives),
            operationTypes: mergeOperationTypes(node.operationTypes, existingNode.operationTypes),
        };
    }
    return ((config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...node,
            kind: graphql_1.Kind.SCHEMA_DEFINITION,
        }
        : node);
}
exports.mergeSchemaDefs = mergeSchemaDefs;
