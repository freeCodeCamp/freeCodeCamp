"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rewireTypes = void 0;
const graphql_1 = require("graphql");
const stub_js_1 = require("./stub.js");
function rewireTypes(originalTypeMap, directives) {
    const referenceTypeMap = Object.create(null);
    for (const typeName in originalTypeMap) {
        referenceTypeMap[typeName] = originalTypeMap[typeName];
    }
    const newTypeMap = Object.create(null);
    for (const typeName in referenceTypeMap) {
        const namedType = referenceTypeMap[typeName];
        if (namedType == null || typeName.startsWith('__')) {
            continue;
        }
        const newName = namedType.name;
        if (newName.startsWith('__')) {
            continue;
        }
        if (newTypeMap[newName] != null) {
            console.warn(`Duplicate schema type name ${newName} found; keeping the existing one found in the schema`);
            continue;
        }
        newTypeMap[newName] = namedType;
    }
    for (const typeName in newTypeMap) {
        newTypeMap[typeName] = rewireNamedType(newTypeMap[typeName]);
    }
    const newDirectives = directives.map(directive => rewireDirective(directive));
    return {
        typeMap: newTypeMap,
        directives: newDirectives,
    };
    function rewireDirective(directive) {
        if ((0, graphql_1.isSpecifiedDirective)(directive)) {
            return directive;
        }
        const directiveConfig = directive.toConfig();
        directiveConfig.args = rewireArgs(directiveConfig.args);
        return new graphql_1.GraphQLDirective(directiveConfig);
    }
    function rewireArgs(args) {
        const rewiredArgs = {};
        for (const argName in args) {
            const arg = args[argName];
            const rewiredArgType = rewireType(arg.type);
            if (rewiredArgType != null) {
                arg.type = rewiredArgType;
                rewiredArgs[argName] = arg;
            }
        }
        return rewiredArgs;
    }
    function rewireNamedType(type) {
        if ((0, graphql_1.isObjectType)(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                fields: () => rewireFields(config.fields),
                interfaces: () => rewireNamedTypes(config.interfaces),
            };
            return new graphql_1.GraphQLObjectType(newConfig);
        }
        else if ((0, graphql_1.isInterfaceType)(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                fields: () => rewireFields(config.fields),
            };
            if ('interfaces' in newConfig) {
                newConfig.interfaces = () => rewireNamedTypes(config.interfaces);
            }
            return new graphql_1.GraphQLInterfaceType(newConfig);
        }
        else if ((0, graphql_1.isUnionType)(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                types: () => rewireNamedTypes(config.types),
            };
            return new graphql_1.GraphQLUnionType(newConfig);
        }
        else if ((0, graphql_1.isInputObjectType)(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                fields: () => rewireInputFields(config.fields),
            };
            return new graphql_1.GraphQLInputObjectType(newConfig);
        }
        else if ((0, graphql_1.isEnumType)(type)) {
            const enumConfig = type.toConfig();
            return new graphql_1.GraphQLEnumType(enumConfig);
        }
        else if ((0, graphql_1.isScalarType)(type)) {
            if ((0, graphql_1.isSpecifiedScalarType)(type)) {
                return type;
            }
            const scalarConfig = type.toConfig();
            return new graphql_1.GraphQLScalarType(scalarConfig);
        }
        throw new Error(`Unexpected schema type: ${type}`);
    }
    function rewireFields(fields) {
        const rewiredFields = {};
        for (const fieldName in fields) {
            const field = fields[fieldName];
            const rewiredFieldType = rewireType(field.type);
            if (rewiredFieldType != null && field.args) {
                field.type = rewiredFieldType;
                field.args = rewireArgs(field.args);
                rewiredFields[fieldName] = field;
            }
        }
        return rewiredFields;
    }
    function rewireInputFields(fields) {
        const rewiredFields = {};
        for (const fieldName in fields) {
            const field = fields[fieldName];
            const rewiredFieldType = rewireType(field.type);
            if (rewiredFieldType != null) {
                field.type = rewiredFieldType;
                rewiredFields[fieldName] = field;
            }
        }
        return rewiredFields;
    }
    function rewireNamedTypes(namedTypes) {
        const rewiredTypes = [];
        for (const namedType of namedTypes) {
            const rewiredType = rewireType(namedType);
            if (rewiredType != null) {
                rewiredTypes.push(rewiredType);
            }
        }
        return rewiredTypes;
    }
    function rewireType(type) {
        if ((0, graphql_1.isListType)(type)) {
            const rewiredType = rewireType(type.ofType);
            return rewiredType != null ? new graphql_1.GraphQLList(rewiredType) : null;
        }
        else if ((0, graphql_1.isNonNullType)(type)) {
            const rewiredType = rewireType(type.ofType);
            return rewiredType != null ? new graphql_1.GraphQLNonNull(rewiredType) : null;
        }
        else if ((0, graphql_1.isNamedType)(type)) {
            let rewiredType = referenceTypeMap[type.name];
            if (rewiredType === undefined) {
                rewiredType = (0, stub_js_1.isNamedStub)(type) ? (0, stub_js_1.getBuiltInForStub)(type) : rewireNamedType(type);
                newTypeMap[rewiredType.name] = referenceTypeMap[type.name] = rewiredType;
            }
            return rewiredType != null ? newTypeMap[rewiredType.name] : null;
        }
        return null;
    }
}
exports.rewireTypes = rewireTypes;
