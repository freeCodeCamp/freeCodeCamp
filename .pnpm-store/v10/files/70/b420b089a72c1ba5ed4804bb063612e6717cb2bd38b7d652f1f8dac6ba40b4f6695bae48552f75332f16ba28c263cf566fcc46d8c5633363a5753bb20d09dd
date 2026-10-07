import { Kind, } from 'graphql';
import { mergeDirectives } from './directives.js';
export const DEFAULT_OPERATION_TYPE_NAME_MAP = {
    query: 'Query',
    mutation: 'Mutation',
    subscription: 'Subscription',
};
function mergeOperationTypes(opNodeList = [], existingOpNodeList = []) {
    const finalOpNodeList = [];
    for (const opNodeType in DEFAULT_OPERATION_TYPE_NAME_MAP) {
        const opNode = opNodeList.find(n => n.operation === opNodeType) || existingOpNodeList.find(n => n.operation === opNodeType);
        if (opNode) {
            finalOpNodeList.push(opNode);
        }
    }
    return finalOpNodeList;
}
export function mergeSchemaDefs(node, existingNode, config, directives) {
    if (existingNode) {
        return {
            kind: node.kind === Kind.SCHEMA_DEFINITION || existingNode.kind === Kind.SCHEMA_DEFINITION
                ? Kind.SCHEMA_DEFINITION
                : Kind.SCHEMA_EXTENSION,
            description: node['description'] || existingNode['description'],
            directives: mergeDirectives(node.directives, existingNode.directives, config, directives),
            operationTypes: mergeOperationTypes(node.operationTypes, existingNode.operationTypes),
        };
    }
    return ((config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...node,
            kind: Kind.SCHEMA_DEFINITION,
        }
        : node);
}
