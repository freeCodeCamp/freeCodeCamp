import { visit } from 'graphql';
/**
 * This optimizer removes empty nodes/arrays (directives/argument/variableDefinitions) from a given DocumentNode of operation/fragment.
 * @param input
 */
export const removeEmptyNodes = input => {
    function transformNode(node) {
        let resultNode = node;
        if (resultNode.directives && Array.isArray(resultNode.directives) && resultNode.directives.length === 0) {
            const { directives, ...rest } = resultNode;
            resultNode = rest;
        }
        if (resultNode.arguments && Array.isArray(resultNode.arguments) && resultNode.arguments.length === 0) {
            const { arguments: args, ...rest } = resultNode;
            resultNode = rest;
        }
        if (resultNode.variableDefinitions &&
            Array.isArray(resultNode.variableDefinitions) &&
            resultNode.variableDefinitions.length === 0) {
            const { variableDefinitions, ...rest } = resultNode;
            resultNode = rest;
        }
        return resultNode;
    }
    return visit(input, {
        // Request/Operation:
        FragmentDefinition: transformNode,
        OperationDefinition: transformNode,
        VariableDefinition: transformNode,
        Field: transformNode,
        FragmentSpread: transformNode,
        InlineFragment: transformNode,
        Name: transformNode,
        Directive: transformNode,
        // Schema Definition:
        SchemaDefinition: transformNode,
        ScalarTypeDefinition: transformNode,
        ObjectTypeDefinition: transformNode,
        InterfaceTypeDefinition: transformNode,
        UnionTypeDefinition: transformNode,
        EnumTypeDefinition: transformNode,
        EnumValueDefinition: transformNode,
        InputObjectTypeDefinition: transformNode,
        FieldDefinition: transformNode,
        InputValueDefinition: transformNode,
        // Schema Extension:
        SchemaExtension: transformNode,
        ScalarTypeExtension: transformNode,
        ObjectTypeExtension: transformNode,
        InterfaceTypeExtension: transformNode,
        UnionTypeExtension: transformNode,
        EnumTypeExtension: transformNode,
        InputObjectTypeExtension: transformNode,
    });
};
