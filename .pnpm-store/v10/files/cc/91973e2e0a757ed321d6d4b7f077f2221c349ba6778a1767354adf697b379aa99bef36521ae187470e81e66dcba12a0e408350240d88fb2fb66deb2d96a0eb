import { GraphQLEnumType, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLObjectType, GraphQLScalarType, GraphQLUnionType, isEnumType, isInterfaceType, isInputObjectType, isObjectType, isScalarType, isUnionType, } from 'graphql';
export function renameType(type, newTypeName) {
    if (isObjectType(type)) {
        return new GraphQLObjectType({
            ...type.toConfig(),
            name: newTypeName,
            astNode: type.astNode == null
                ? type.astNode
                : {
                    ...type.astNode,
                    name: {
                        ...type.astNode.name,
                        value: newTypeName,
                    },
                },
            extensionASTNodes: type.extensionASTNodes == null
                ? type.extensionASTNodes
                : type.extensionASTNodes.map(node => ({
                    ...node,
                    name: {
                        ...node.name,
                        value: newTypeName,
                    },
                })),
        });
    }
    else if (isInterfaceType(type)) {
        return new GraphQLInterfaceType({
            ...type.toConfig(),
            name: newTypeName,
            astNode: type.astNode == null
                ? type.astNode
                : {
                    ...type.astNode,
                    name: {
                        ...type.astNode.name,
                        value: newTypeName,
                    },
                },
            extensionASTNodes: type.extensionASTNodes == null
                ? type.extensionASTNodes
                : type.extensionASTNodes.map(node => ({
                    ...node,
                    name: {
                        ...node.name,
                        value: newTypeName,
                    },
                })),
        });
    }
    else if (isUnionType(type)) {
        return new GraphQLUnionType({
            ...type.toConfig(),
            name: newTypeName,
            astNode: type.astNode == null
                ? type.astNode
                : {
                    ...type.astNode,
                    name: {
                        ...type.astNode.name,
                        value: newTypeName,
                    },
                },
            extensionASTNodes: type.extensionASTNodes == null
                ? type.extensionASTNodes
                : type.extensionASTNodes.map(node => ({
                    ...node,
                    name: {
                        ...node.name,
                        value: newTypeName,
                    },
                })),
        });
    }
    else if (isInputObjectType(type)) {
        return new GraphQLInputObjectType({
            ...type.toConfig(),
            name: newTypeName,
            astNode: type.astNode == null
                ? type.astNode
                : {
                    ...type.astNode,
                    name: {
                        ...type.astNode.name,
                        value: newTypeName,
                    },
                },
            extensionASTNodes: type.extensionASTNodes == null
                ? type.extensionASTNodes
                : type.extensionASTNodes.map(node => ({
                    ...node,
                    name: {
                        ...node.name,
                        value: newTypeName,
                    },
                })),
        });
    }
    else if (isEnumType(type)) {
        return new GraphQLEnumType({
            ...type.toConfig(),
            name: newTypeName,
            astNode: type.astNode == null
                ? type.astNode
                : {
                    ...type.astNode,
                    name: {
                        ...type.astNode.name,
                        value: newTypeName,
                    },
                },
            extensionASTNodes: type.extensionASTNodes == null
                ? type.extensionASTNodes
                : type.extensionASTNodes.map(node => ({
                    ...node,
                    name: {
                        ...node.name,
                        value: newTypeName,
                    },
                })),
        });
    }
    else if (isScalarType(type)) {
        return new GraphQLScalarType({
            ...type.toConfig(),
            name: newTypeName,
            astNode: type.astNode == null
                ? type.astNode
                : {
                    ...type.astNode,
                    name: {
                        ...type.astNode.name,
                        value: newTypeName,
                    },
                },
            extensionASTNodes: type.extensionASTNodes == null
                ? type.extensionASTNodes
                : type.extensionASTNodes.map(node => ({
                    ...node,
                    name: {
                        ...node.name,
                        value: newTypeName,
                    },
                })),
        });
    }
    throw new Error(`Unknown type ${type}.`);
}
