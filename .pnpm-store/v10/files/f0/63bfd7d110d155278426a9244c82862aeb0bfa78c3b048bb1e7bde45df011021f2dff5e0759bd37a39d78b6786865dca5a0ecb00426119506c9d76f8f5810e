import { GraphQLDirective, GraphQLEnumType, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLScalarType, GraphQLUnionType, isInterfaceType, isEnumType, isInputObjectType, isListType, isNamedType, isNonNullType, isObjectType, isScalarType, isUnionType, isSpecifiedScalarType, isSpecifiedDirective, } from 'graphql';
import { getBuiltInForStub, isNamedStub } from './stub.js';
export function rewireTypes(originalTypeMap, directives) {
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
        if (isSpecifiedDirective(directive)) {
            return directive;
        }
        const directiveConfig = directive.toConfig();
        directiveConfig.args = rewireArgs(directiveConfig.args);
        return new GraphQLDirective(directiveConfig);
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
        if (isObjectType(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                fields: () => rewireFields(config.fields),
                interfaces: () => rewireNamedTypes(config.interfaces),
            };
            return new GraphQLObjectType(newConfig);
        }
        else if (isInterfaceType(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                fields: () => rewireFields(config.fields),
            };
            if ('interfaces' in newConfig) {
                newConfig.interfaces = () => rewireNamedTypes(config.interfaces);
            }
            return new GraphQLInterfaceType(newConfig);
        }
        else if (isUnionType(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                types: () => rewireNamedTypes(config.types),
            };
            return new GraphQLUnionType(newConfig);
        }
        else if (isInputObjectType(type)) {
            const config = type.toConfig();
            const newConfig = {
                ...config,
                fields: () => rewireInputFields(config.fields),
            };
            return new GraphQLInputObjectType(newConfig);
        }
        else if (isEnumType(type)) {
            const enumConfig = type.toConfig();
            return new GraphQLEnumType(enumConfig);
        }
        else if (isScalarType(type)) {
            if (isSpecifiedScalarType(type)) {
                return type;
            }
            const scalarConfig = type.toConfig();
            return new GraphQLScalarType(scalarConfig);
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
        if (isListType(type)) {
            const rewiredType = rewireType(type.ofType);
            return rewiredType != null ? new GraphQLList(rewiredType) : null;
        }
        else if (isNonNullType(type)) {
            const rewiredType = rewireType(type.ofType);
            return rewiredType != null ? new GraphQLNonNull(rewiredType) : null;
        }
        else if (isNamedType(type)) {
            let rewiredType = referenceTypeMap[type.name];
            if (rewiredType === undefined) {
                rewiredType = isNamedStub(type) ? getBuiltInForStub(type) : rewireNamedType(type);
                newTypeMap[rewiredType.name] = referenceTypeMap[type.name] = rewiredType;
            }
            return rewiredType != null ? newTypeMap[rewiredType.name] : null;
        }
        return null;
    }
}
