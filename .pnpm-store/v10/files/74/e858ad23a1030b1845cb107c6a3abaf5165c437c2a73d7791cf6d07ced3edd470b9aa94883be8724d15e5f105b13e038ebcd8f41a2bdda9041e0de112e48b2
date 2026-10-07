import { visit } from 'graphql';
/**
 * This optimizer removes "description" field from schema AST definitions.
 * @param input
 */
export const removeDescriptions = input => {
    function transformNode(node) {
        if (node.description) {
            node.description = undefined;
        }
        return node;
    }
    return visit(input, {
        ScalarTypeDefinition: transformNode,
        ObjectTypeDefinition: transformNode,
        InterfaceTypeDefinition: transformNode,
        UnionTypeDefinition: transformNode,
        EnumTypeDefinition: transformNode,
        EnumValueDefinition: transformNode,
        InputObjectTypeDefinition: transformNode,
        InputValueDefinition: transformNode,
        FieldDefinition: transformNode,
        DirectiveDefinition: transformNode,
    });
};
