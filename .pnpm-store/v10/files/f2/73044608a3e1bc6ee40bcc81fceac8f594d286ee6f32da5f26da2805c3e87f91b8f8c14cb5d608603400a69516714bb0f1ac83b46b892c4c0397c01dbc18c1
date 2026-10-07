import { Kind, } from 'graphql';
import { mergeFields } from './fields.js';
import { mergeDirectives } from './directives.js';
export function mergeInputType(node, existingNode, config, directives) {
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
                fields: mergeFields(node, node.fields, existingNode.fields, config),
                directives: mergeDirectives(node.directives, existingNode.directives, config, directives),
            };
        }
        catch (e) {
            throw new Error(`Unable to merge GraphQL input type "${node.name.value}": ${e.message}`);
        }
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...node,
            kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
        }
        : node;
}
