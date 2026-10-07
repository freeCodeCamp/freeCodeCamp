import { Kind } from 'graphql';
import { mergeFields } from './fields.js';
import { mergeDirectives } from './directives.js';
import { mergeNamedTypeArray } from './merge-named-type-array.js';
export function mergeType(node, existingNode, config, directives) {
    if (existingNode) {
        try {
            return {
                name: node.name,
                description: node['description'] || existingNode['description'],
                kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) ||
                    node.kind === 'ObjectTypeDefinition' ||
                    existingNode.kind === 'ObjectTypeDefinition'
                    ? 'ObjectTypeDefinition'
                    : 'ObjectTypeExtension',
                loc: node.loc,
                fields: mergeFields(node, node.fields, existingNode.fields, config),
                directives: mergeDirectives(node.directives, existingNode.directives, config, directives),
                interfaces: mergeNamedTypeArray(node.interfaces, existingNode.interfaces, config),
            };
        }
        catch (e) {
            throw new Error(`Unable to merge GraphQL type "${node.name.value}": ${e.message}`);
        }
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...node,
            kind: Kind.OBJECT_TYPE_DEFINITION,
        }
        : node;
}
