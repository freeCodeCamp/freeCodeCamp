"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValueNode = exports.getEnumValueDefinitionNodes = exports.getNameNode = exports.getInputValueDefinitionNodes = exports.getFieldDefinitionNodes = exports.getArgumentsDefinitionNodes = exports.getTypeNode = exports.getInterfaceNodes = exports.getDirectiveNodes = exports.getDescriptionNode = exports.getUnionTypeDefinitionNode = exports.getScalarTypeDefinitionNode = exports.getInterfaceTypeDefinitionNode = exports.getEnumTypeDefinitionNode = exports.getInputObjectTypeDefinitionNode = exports.getObjectTypeDefinitionNode = void 0;
const ThunkComposer_1 = require("../ThunkComposer");
const NonNullComposer_1 = require("../NonNullComposer");
const ListComposer_1 = require("../ListComposer");
const misc_1 = require("./misc");
const graphql_1 = require("graphql");
function getObjectTypeDefinitionNode(tc) {
    return {
        kind: graphql_1.Kind.OBJECT_TYPE_DEFINITION,
        name: getNameNode(tc.getTypeName()),
        description: getDescriptionNode(tc.getDescription()),
        directives: getDirectiveNodes(tc.getDirectives(), tc.schemaComposer),
        interfaces: getInterfaceNodes(tc.getInterfaces()),
        fields: getFieldDefinitionNodes(tc),
    };
}
exports.getObjectTypeDefinitionNode = getObjectTypeDefinitionNode;
function getInputObjectTypeDefinitionNode(tc) {
    return {
        kind: graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION,
        name: getNameNode(tc.getTypeName()),
        directives: getDirectiveNodes(tc.getDirectives(), tc.schemaComposer),
        description: getDescriptionNode(tc.getDescription()),
        fields: getInputValueDefinitionNodes(tc),
    };
}
exports.getInputObjectTypeDefinitionNode = getInputObjectTypeDefinitionNode;
function getEnumTypeDefinitionNode(tc) {
    return {
        kind: graphql_1.Kind.ENUM_TYPE_DEFINITION,
        name: getNameNode(tc.getTypeName()),
        description: getDescriptionNode(tc.getDescription()),
        directives: getDirectiveNodes(tc.getDirectives(), tc.schemaComposer),
        values: getEnumValueDefinitionNodes(tc) || [],
    };
}
exports.getEnumTypeDefinitionNode = getEnumTypeDefinitionNode;
function getInterfaceTypeDefinitionNode(tc) {
    return {
        kind: graphql_1.Kind.INTERFACE_TYPE_DEFINITION,
        name: getNameNode(tc.getTypeName()),
        description: getDescriptionNode(tc.getDescription()),
        directives: getDirectiveNodes(tc.getDirectives(), tc.schemaComposer),
        fields: getFieldDefinitionNodes(tc),
    };
}
exports.getInterfaceTypeDefinitionNode = getInterfaceTypeDefinitionNode;
function getScalarTypeDefinitionNode(tc) {
    return {
        kind: graphql_1.Kind.SCALAR_TYPE_DEFINITION,
        name: getNameNode(tc.getTypeName()),
        description: getDescriptionNode(tc.getDescription()),
        directives: getDirectiveNodes(tc.getDirectives(), tc.schemaComposer),
    };
}
exports.getScalarTypeDefinitionNode = getScalarTypeDefinitionNode;
function getUnionTypeDefinitionNode(tc) {
    return {
        kind: graphql_1.Kind.UNION_TYPE_DEFINITION,
        name: getNameNode(tc.getTypeName()),
        description: getDescriptionNode(tc.getDescription()),
        directives: getDirectiveNodes(tc.getDirectives(), tc.schemaComposer),
        types: tc.getTypeNames().map((value) => ({
            kind: graphql_1.Kind.NAMED_TYPE,
            name: getNameNode(value),
        })),
    };
}
exports.getUnionTypeDefinitionNode = getUnionTypeDefinitionNode;
function getDescriptionNode(value) {
    if (!value)
        return;
    return {
        kind: graphql_1.Kind.STRING,
        value,
    };
}
exports.getDescriptionNode = getDescriptionNode;
function toValueNode(value) {
    switch (typeof value) {
        case 'string':
            return { kind: graphql_1.Kind.STRING, value };
        case 'number':
            if (Number.isInteger(value))
                return { kind: graphql_1.Kind.INT, value: value.toString() };
            return { kind: graphql_1.Kind.FLOAT, value: value.toString() };
        case 'boolean':
            return { kind: graphql_1.Kind.BOOLEAN, value };
        case 'object':
            if (value === null) {
                return { kind: graphql_1.Kind.NULL };
            }
            else if (Array.isArray(value)) {
                return {
                    kind: graphql_1.Kind.LIST,
                    values: value.map((v) => toValueNode(v)),
                };
            }
            else {
                return {
                    kind: graphql_1.Kind.OBJECT,
                    fields: Object.keys(value).map((k) => ({
                        kind: graphql_1.Kind.OBJECT_FIELD,
                        name: getNameNode(k),
                        value: toValueNode(value[k]),
                    })),
                };
            }
        default:
            console.log(`Cannot determine astNode in toValueNode() method: ${(0, misc_1.inspect)(value)}`);
            return { kind: graphql_1.Kind.NULL };
    }
}
function getDirectiveArgumentNodes(data, directive) {
    const keys = Object.keys(data);
    if (!keys.length)
        return;
    const args = [];
    keys.forEach((k) => {
        var _a;
        let argumentType;
        if (directive) {
            argumentType = (_a = directive.args.find((d) => d.name === k)) === null || _a === void 0 ? void 0 : _a.type;
        }
        const argNode = {
            kind: graphql_1.Kind.ARGUMENT,
            name: getNameNode(k),
            value: argumentType
                ?
                    (0, graphql_1.astFromValue)(data[k], argumentType) || { kind: graphql_1.Kind.NULL }
                :
                    toValueNode(data[k]),
        };
        args.push(argNode);
    });
    return args;
}
function getDirectiveNodes(values, sc) {
    if (!values || !values.length)
        return;
    return values.map((v) => ({
        kind: graphql_1.Kind.DIRECTIVE,
        name: getNameNode(v.name),
        arguments: v.args && getDirectiveArgumentNodes(v.args, sc._getDirective(v.name)),
    }));
}
exports.getDirectiveNodes = getDirectiveNodes;
function getInterfaceNodes(ifaces) {
    return ifaces
        .map((iface) => {
        if (!iface || !iface.getTypeName)
            return;
        return {
            kind: graphql_1.Kind.NAMED_TYPE,
            name: getNameNode(iface.getTypeName()),
        };
    })
        .filter(Boolean);
}
exports.getInterfaceNodes = getInterfaceNodes;
function getTypeNode(atc) {
    if (atc instanceof ThunkComposer_1.ThunkComposer) {
        return getTypeNode(atc.ofType);
    }
    else if (atc instanceof ListComposer_1.ListComposer) {
        const subType = getTypeNode(atc.ofType);
        if (!subType)
            return;
        return {
            kind: graphql_1.Kind.LIST_TYPE,
            type: subType,
        };
    }
    else if (atc instanceof NonNullComposer_1.NonNullComposer) {
        const subType = getTypeNode(atc.ofType);
        if (!subType)
            return;
        return {
            kind: graphql_1.Kind.NON_NULL_TYPE,
            type: subType,
        };
    }
    else if (atc && atc.getTypeName) {
        return {
            kind: graphql_1.Kind.NAMED_TYPE,
            name: getNameNode(atc.getTypeName()),
        };
    }
    return undefined;
}
exports.getTypeNode = getTypeNode;
function getArgumentsDefinitionNodes(tc, fieldName) {
    const argNames = tc.getFieldArgNames(fieldName);
    if (!argNames.length)
        return;
    return argNames
        .map((argName) => {
        const ac = tc.getFieldArg(fieldName, argName);
        const type = getTypeNode(ac.type);
        if (!type)
            return;
        return {
            kind: graphql_1.Kind.INPUT_VALUE_DEFINITION,
            name: getNameNode(argName),
            type,
            description: getDescriptionNode(ac.description),
            directives: getDirectiveNodes(tc.getFieldArgDirectives(fieldName, argName), tc.schemaComposer),
            defaultValue: (ac.defaultValue !== undefined &&
                astFromValueSafe(ac.defaultValue, tc.getFieldArgType(fieldName, argName))) ||
                undefined,
        };
    })
        .filter(Boolean);
}
exports.getArgumentsDefinitionNodes = getArgumentsDefinitionNodes;
function getFieldDefinitionNodes(tc) {
    const fieldNames = tc.getFieldNames();
    if (!fieldNames.length)
        return;
    return fieldNames
        .map((fieldName) => {
        const fc = tc.getField(fieldName);
        const type = getTypeNode(fc.type);
        if (!type)
            return;
        return {
            kind: graphql_1.Kind.FIELD_DEFINITION,
            name: getNameNode(fieldName),
            type,
            arguments: getArgumentsDefinitionNodes(tc, fieldName),
            description: getDescriptionNode(fc.description),
            directives: getDirectiveNodes(tc.getFieldDirectives(fieldName), tc.schemaComposer),
        };
    })
        .filter(Boolean);
}
exports.getFieldDefinitionNodes = getFieldDefinitionNodes;
function getInputValueDefinitionNodes(tc) {
    const fieldNames = tc.getFieldNames();
    if (!fieldNames.length)
        return;
    return fieldNames
        .map((fieldName) => {
        const fc = tc.getField(fieldName);
        const type = getTypeNode(fc.type);
        if (!type)
            return;
        return {
            kind: graphql_1.Kind.INPUT_VALUE_DEFINITION,
            name: getNameNode(fieldName),
            type,
            description: getDescriptionNode(fc.description),
            directives: getDirectiveNodes(tc.getFieldDirectives(fieldName), tc.schemaComposer),
            defaultValue: (fc.defaultValue !== undefined &&
                astFromValueSafe(fc.defaultValue, tc.getFieldType(fieldName))) ||
                undefined,
        };
    })
        .filter(Boolean);
}
exports.getInputValueDefinitionNodes = getInputValueDefinitionNodes;
function getNameNode(value) {
    return { kind: graphql_1.Kind.NAME, value };
}
exports.getNameNode = getNameNode;
function getEnumValueDefinitionNodes(tc) {
    const fieldNames = tc.getFieldNames();
    if (!fieldNames.length)
        return;
    return fieldNames.map((fieldName) => {
        const fc = tc.getField(fieldName);
        return {
            kind: graphql_1.Kind.ENUM_VALUE_DEFINITION,
            name: getNameNode(fieldName),
            description: getDescriptionNode(fc.description),
            directives: getDirectiveNodes(tc.getFieldDirectives(fieldName), tc.schemaComposer),
        };
    });
}
exports.getEnumValueDefinitionNodes = getEnumValueDefinitionNodes;
function parseValueNode(ast, variables = {}, typeName) {
    switch (ast.kind) {
        case graphql_1.Kind.STRING:
        case graphql_1.Kind.BOOLEAN:
            return ast.value;
        case graphql_1.Kind.INT:
        case graphql_1.Kind.FLOAT:
            return parseFloat(ast.value);
        case graphql_1.Kind.OBJECT:
            const value = Object.create(null);
            ast.fields.forEach((field) => {
                value[field.name.value] = parseValueNode(field.value, variables, typeName);
            });
            return value;
        case graphql_1.Kind.LIST:
            return ast.values.map((n) => parseValueNode(n, variables, typeName));
        case graphql_1.Kind.NULL:
            return null;
        case graphql_1.Kind.VARIABLE:
            return variables ? variables[ast.name.value] : undefined;
        default:
            throw new TypeError(`${typeName} cannot represent value: ${(0, misc_1.inspect)(ast)}`);
    }
}
exports.parseValueNode = parseValueNode;
function astFromValueSafe(value, type) {
    try {
        return (0, graphql_1.astFromValue)(value, type);
    }
    catch (e) {
        return toValueNode(value);
    }
}
//# sourceMappingURL=definitionNode.js.map