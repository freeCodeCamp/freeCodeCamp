"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuiltInForStub = exports.isNamedStub = exports.createStub = exports.createNamedStub = void 0;
const graphql_1 = require("graphql");
function createNamedStub(name, type) {
    let constructor;
    if (type === 'object') {
        constructor = graphql_1.GraphQLObjectType;
    }
    else if (type === 'interface') {
        constructor = graphql_1.GraphQLInterfaceType;
    }
    else {
        constructor = graphql_1.GraphQLInputObjectType;
    }
    return new constructor({
        name,
        fields: {
            _fake: {
                type: graphql_1.GraphQLString,
            },
        },
    });
}
exports.createNamedStub = createNamedStub;
function createStub(node, type) {
    switch (node.kind) {
        case graphql_1.Kind.LIST_TYPE:
            return new graphql_1.GraphQLList(createStub(node.type, type));
        case graphql_1.Kind.NON_NULL_TYPE:
            return new graphql_1.GraphQLNonNull(createStub(node.type, type));
        default:
            if (type === 'output') {
                return createNamedStub(node.name.value, 'object');
            }
            return createNamedStub(node.name.value, 'input');
    }
}
exports.createStub = createStub;
function isNamedStub(type) {
    if ('getFields' in type) {
        const fields = type.getFields();
        // eslint-disable-next-line no-unreachable-loop
        for (const fieldName in fields) {
            const field = fields[fieldName];
            return field.name === '_fake';
        }
    }
    return false;
}
exports.isNamedStub = isNamedStub;
function getBuiltInForStub(type) {
    switch (type.name) {
        case graphql_1.GraphQLInt.name:
            return graphql_1.GraphQLInt;
        case graphql_1.GraphQLFloat.name:
            return graphql_1.GraphQLFloat;
        case graphql_1.GraphQLString.name:
            return graphql_1.GraphQLString;
        case graphql_1.GraphQLBoolean.name:
            return graphql_1.GraphQLBoolean;
        case graphql_1.GraphQLID.name:
            return graphql_1.GraphQLID;
        default:
            return type;
    }
}
exports.getBuiltInForStub = getBuiltInForStub;
