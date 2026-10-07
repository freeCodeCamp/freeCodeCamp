"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDescriptions = void 0;
const graphql_1 = require("graphql");
/**
 * This optimizer removes "description" field from schema AST definitions.
 * @param input
 */
const removeDescriptions = input => {
    function transformNode(node) {
        if (node.description) {
            node.description = undefined;
        }
        return node;
    }
    return (0, graphql_1.visit)(input, {
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
exports.removeDescriptions = removeDescriptions;
