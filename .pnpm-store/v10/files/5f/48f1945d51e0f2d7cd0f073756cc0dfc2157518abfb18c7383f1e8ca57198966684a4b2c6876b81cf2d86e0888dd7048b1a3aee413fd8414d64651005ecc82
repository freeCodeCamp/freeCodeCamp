"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.correctASTNodes = exports.mapSchema = void 0;
const graphql_1 = require("graphql");
const getObjectTypeFromTypeMap_js_1 = require("./getObjectTypeFromTypeMap.js");
const Interfaces_js_1 = require("./Interfaces.js");
const rewire_js_1 = require("./rewire.js");
const transformInputValue_js_1 = require("./transformInputValue.js");
function mapSchema(schema, schemaMapper = {}) {
    const newTypeMap = mapArguments(mapFields(mapTypes(mapDefaultValues(mapEnumValues(mapTypes(mapDefaultValues(schema.getTypeMap(), schema, transformInputValue_js_1.serializeInputValue), schema, schemaMapper, type => (0, graphql_1.isLeafType)(type)), schema, schemaMapper), schema, transformInputValue_js_1.parseInputValue), schema, schemaMapper, type => !(0, graphql_1.isLeafType)(type)), schema, schemaMapper), schema, schemaMapper);
    const originalDirectives = schema.getDirectives();
    const newDirectives = mapDirectives(originalDirectives, schema, schemaMapper);
    const { typeMap, directives } = (0, rewire_js_1.rewireTypes)(newTypeMap, newDirectives);
    return new graphql_1.GraphQLSchema({
        ...schema.toConfig(),
        query: (0, getObjectTypeFromTypeMap_js_1.getObjectTypeFromTypeMap)(typeMap, (0, getObjectTypeFromTypeMap_js_1.getObjectTypeFromTypeMap)(newTypeMap, schema.getQueryType())),
        mutation: (0, getObjectTypeFromTypeMap_js_1.getObjectTypeFromTypeMap)(typeMap, (0, getObjectTypeFromTypeMap_js_1.getObjectTypeFromTypeMap)(newTypeMap, schema.getMutationType())),
        subscription: (0, getObjectTypeFromTypeMap_js_1.getObjectTypeFromTypeMap)(typeMap, (0, getObjectTypeFromTypeMap_js_1.getObjectTypeFromTypeMap)(newTypeMap, schema.getSubscriptionType())),
        types: Object.values(typeMap),
        directives,
    });
}
exports.mapSchema = mapSchema;
function mapTypes(originalTypeMap, schema, schemaMapper, testFn = () => true) {
    const newTypeMap = {};
    for (const typeName in originalTypeMap) {
        if (!typeName.startsWith('__')) {
            const originalType = originalTypeMap[typeName];
            if (originalType == null || !testFn(originalType)) {
                newTypeMap[typeName] = originalType;
                continue;
            }
            const typeMapper = getTypeMapper(schema, schemaMapper, typeName);
            if (typeMapper == null) {
                newTypeMap[typeName] = originalType;
                continue;
            }
            const maybeNewType = typeMapper(originalType, schema);
            if (maybeNewType === undefined) {
                newTypeMap[typeName] = originalType;
                continue;
            }
            newTypeMap[typeName] = maybeNewType;
        }
    }
    return newTypeMap;
}
function mapEnumValues(originalTypeMap, schema, schemaMapper) {
    const enumValueMapper = getEnumValueMapper(schemaMapper);
    if (!enumValueMapper) {
        return originalTypeMap;
    }
    return mapTypes(originalTypeMap, schema, {
        [Interfaces_js_1.MapperKind.ENUM_TYPE]: type => {
            const config = type.toConfig();
            const originalEnumValueConfigMap = config.values;
            const newEnumValueConfigMap = {};
            for (const externalValue in originalEnumValueConfigMap) {
                const originalEnumValueConfig = originalEnumValueConfigMap[externalValue];
                const mappedEnumValue = enumValueMapper(originalEnumValueConfig, type.name, schema, externalValue);
                if (mappedEnumValue === undefined) {
                    newEnumValueConfigMap[externalValue] = originalEnumValueConfig;
                }
                else if (Array.isArray(mappedEnumValue)) {
                    const [newExternalValue, newEnumValueConfig] = mappedEnumValue;
                    newEnumValueConfigMap[newExternalValue] =
                        newEnumValueConfig === undefined ? originalEnumValueConfig : newEnumValueConfig;
                }
                else if (mappedEnumValue !== null) {
                    newEnumValueConfigMap[externalValue] = mappedEnumValue;
                }
            }
            return correctASTNodes(new graphql_1.GraphQLEnumType({
                ...config,
                values: newEnumValueConfigMap,
            }));
        },
    }, type => (0, graphql_1.isEnumType)(type));
}
function mapDefaultValues(originalTypeMap, schema, fn) {
    const newTypeMap = mapArguments(originalTypeMap, schema, {
        [Interfaces_js_1.MapperKind.ARGUMENT]: argumentConfig => {
            if (argumentConfig.defaultValue === undefined) {
                return argumentConfig;
            }
            const maybeNewType = getNewType(originalTypeMap, argumentConfig.type);
            if (maybeNewType != null) {
                return {
                    ...argumentConfig,
                    defaultValue: fn(maybeNewType, argumentConfig.defaultValue),
                };
            }
        },
    });
    return mapFields(newTypeMap, schema, {
        [Interfaces_js_1.MapperKind.INPUT_OBJECT_FIELD]: inputFieldConfig => {
            if (inputFieldConfig.defaultValue === undefined) {
                return inputFieldConfig;
            }
            const maybeNewType = getNewType(newTypeMap, inputFieldConfig.type);
            if (maybeNewType != null) {
                return {
                    ...inputFieldConfig,
                    defaultValue: fn(maybeNewType, inputFieldConfig.defaultValue),
                };
            }
        },
    });
}
function getNewType(newTypeMap, type) {
    if ((0, graphql_1.isListType)(type)) {
        const newType = getNewType(newTypeMap, type.ofType);
        return newType != null ? new graphql_1.GraphQLList(newType) : null;
    }
    else if ((0, graphql_1.isNonNullType)(type)) {
        const newType = getNewType(newTypeMap, type.ofType);
        return newType != null ? new graphql_1.GraphQLNonNull(newType) : null;
    }
    else if ((0, graphql_1.isNamedType)(type)) {
        const newType = newTypeMap[type.name];
        return newType != null ? newType : null;
    }
    return null;
}
function mapFields(originalTypeMap, schema, schemaMapper) {
    const newTypeMap = {};
    for (const typeName in originalTypeMap) {
        if (!typeName.startsWith('__')) {
            const originalType = originalTypeMap[typeName];
            if (!(0, graphql_1.isObjectType)(originalType) && !(0, graphql_1.isInterfaceType)(originalType) && !(0, graphql_1.isInputObjectType)(originalType)) {
                newTypeMap[typeName] = originalType;
                continue;
            }
            const fieldMapper = getFieldMapper(schema, schemaMapper, typeName);
            if (fieldMapper == null) {
                newTypeMap[typeName] = originalType;
                continue;
            }
            const config = originalType.toConfig();
            const originalFieldConfigMap = config.fields;
            const newFieldConfigMap = {};
            for (const fieldName in originalFieldConfigMap) {
                const originalFieldConfig = originalFieldConfigMap[fieldName];
                const mappedField = fieldMapper(originalFieldConfig, fieldName, typeName, schema);
                if (mappedField === undefined) {
                    newFieldConfigMap[fieldName] = originalFieldConfig;
                }
                else if (Array.isArray(mappedField)) {
                    const [newFieldName, newFieldConfig] = mappedField;
                    if (newFieldConfig.astNode != null) {
                        newFieldConfig.astNode = {
                            ...newFieldConfig.astNode,
                            name: {
                                ...newFieldConfig.astNode.name,
                                value: newFieldName,
                            },
                        };
                    }
                    newFieldConfigMap[newFieldName] = newFieldConfig === undefined ? originalFieldConfig : newFieldConfig;
                }
                else if (mappedField !== null) {
                    newFieldConfigMap[fieldName] = mappedField;
                }
            }
            if ((0, graphql_1.isObjectType)(originalType)) {
                newTypeMap[typeName] = correctASTNodes(new graphql_1.GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
            else if ((0, graphql_1.isInterfaceType)(originalType)) {
                newTypeMap[typeName] = correctASTNodes(new graphql_1.GraphQLInterfaceType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
            else {
                newTypeMap[typeName] = correctASTNodes(new graphql_1.GraphQLInputObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
        }
    }
    return newTypeMap;
}
function mapArguments(originalTypeMap, schema, schemaMapper) {
    const newTypeMap = {};
    for (const typeName in originalTypeMap) {
        if (!typeName.startsWith('__')) {
            const originalType = originalTypeMap[typeName];
            if (!(0, graphql_1.isObjectType)(originalType) && !(0, graphql_1.isInterfaceType)(originalType)) {
                newTypeMap[typeName] = originalType;
                continue;
            }
            const argumentMapper = getArgumentMapper(schemaMapper);
            if (argumentMapper == null) {
                newTypeMap[typeName] = originalType;
                continue;
            }
            const config = originalType.toConfig();
            const originalFieldConfigMap = config.fields;
            const newFieldConfigMap = {};
            for (const fieldName in originalFieldConfigMap) {
                const originalFieldConfig = originalFieldConfigMap[fieldName];
                const originalArgumentConfigMap = originalFieldConfig.args;
                if (originalArgumentConfigMap == null) {
                    newFieldConfigMap[fieldName] = originalFieldConfig;
                    continue;
                }
                const argumentNames = Object.keys(originalArgumentConfigMap);
                if (!argumentNames.length) {
                    newFieldConfigMap[fieldName] = originalFieldConfig;
                    continue;
                }
                const newArgumentConfigMap = {};
                for (const argumentName of argumentNames) {
                    const originalArgumentConfig = originalArgumentConfigMap[argumentName];
                    const mappedArgument = argumentMapper(originalArgumentConfig, fieldName, typeName, schema);
                    if (mappedArgument === undefined) {
                        newArgumentConfigMap[argumentName] = originalArgumentConfig;
                    }
                    else if (Array.isArray(mappedArgument)) {
                        const [newArgumentName, newArgumentConfig] = mappedArgument;
                        newArgumentConfigMap[newArgumentName] = newArgumentConfig;
                    }
                    else if (mappedArgument !== null) {
                        newArgumentConfigMap[argumentName] = mappedArgument;
                    }
                }
                newFieldConfigMap[fieldName] = {
                    ...originalFieldConfig,
                    args: newArgumentConfigMap,
                };
            }
            if ((0, graphql_1.isObjectType)(originalType)) {
                newTypeMap[typeName] = new graphql_1.GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                });
            }
            else if ((0, graphql_1.isInterfaceType)(originalType)) {
                newTypeMap[typeName] = new graphql_1.GraphQLInterfaceType({
                    ...config,
                    fields: newFieldConfigMap,
                });
            }
            else {
                newTypeMap[typeName] = new graphql_1.GraphQLInputObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                });
            }
        }
    }
    return newTypeMap;
}
function mapDirectives(originalDirectives, schema, schemaMapper) {
    const directiveMapper = getDirectiveMapper(schemaMapper);
    if (directiveMapper == null) {
        return originalDirectives.slice();
    }
    const newDirectives = [];
    for (const directive of originalDirectives) {
        const mappedDirective = directiveMapper(directive, schema);
        if (mappedDirective === undefined) {
            newDirectives.push(directive);
        }
        else if (mappedDirective !== null) {
            newDirectives.push(mappedDirective);
        }
    }
    return newDirectives;
}
function getTypeSpecifiers(schema, typeName) {
    var _a, _b, _c;
    const type = schema.getType(typeName);
    const specifiers = [Interfaces_js_1.MapperKind.TYPE];
    if ((0, graphql_1.isObjectType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.COMPOSITE_TYPE, Interfaces_js_1.MapperKind.OBJECT_TYPE);
        if (typeName === ((_a = schema.getQueryType()) === null || _a === void 0 ? void 0 : _a.name)) {
            specifiers.push(Interfaces_js_1.MapperKind.ROOT_OBJECT, Interfaces_js_1.MapperKind.QUERY);
        }
        else if (typeName === ((_b = schema.getMutationType()) === null || _b === void 0 ? void 0 : _b.name)) {
            specifiers.push(Interfaces_js_1.MapperKind.ROOT_OBJECT, Interfaces_js_1.MapperKind.MUTATION);
        }
        else if (typeName === ((_c = schema.getSubscriptionType()) === null || _c === void 0 ? void 0 : _c.name)) {
            specifiers.push(Interfaces_js_1.MapperKind.ROOT_OBJECT, Interfaces_js_1.MapperKind.SUBSCRIPTION);
        }
    }
    else if ((0, graphql_1.isInputObjectType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.INPUT_OBJECT_TYPE);
    }
    else if ((0, graphql_1.isInterfaceType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.COMPOSITE_TYPE, Interfaces_js_1.MapperKind.ABSTRACT_TYPE, Interfaces_js_1.MapperKind.INTERFACE_TYPE);
    }
    else if ((0, graphql_1.isUnionType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.COMPOSITE_TYPE, Interfaces_js_1.MapperKind.ABSTRACT_TYPE, Interfaces_js_1.MapperKind.UNION_TYPE);
    }
    else if ((0, graphql_1.isEnumType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.ENUM_TYPE);
    }
    else if ((0, graphql_1.isScalarType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.SCALAR_TYPE);
    }
    return specifiers;
}
function getTypeMapper(schema, schemaMapper, typeName) {
    const specifiers = getTypeSpecifiers(schema, typeName);
    let typeMapper;
    const stack = [...specifiers];
    while (!typeMapper && stack.length > 0) {
        // It is safe to use the ! operator here as we check the length.
        const next = stack.pop();
        typeMapper = schemaMapper[next];
    }
    return typeMapper != null ? typeMapper : null;
}
function getFieldSpecifiers(schema, typeName) {
    var _a, _b, _c;
    const type = schema.getType(typeName);
    const specifiers = [Interfaces_js_1.MapperKind.FIELD];
    if ((0, graphql_1.isObjectType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.COMPOSITE_FIELD, Interfaces_js_1.MapperKind.OBJECT_FIELD);
        if (typeName === ((_a = schema.getQueryType()) === null || _a === void 0 ? void 0 : _a.name)) {
            specifiers.push(Interfaces_js_1.MapperKind.ROOT_FIELD, Interfaces_js_1.MapperKind.QUERY_ROOT_FIELD);
        }
        else if (typeName === ((_b = schema.getMutationType()) === null || _b === void 0 ? void 0 : _b.name)) {
            specifiers.push(Interfaces_js_1.MapperKind.ROOT_FIELD, Interfaces_js_1.MapperKind.MUTATION_ROOT_FIELD);
        }
        else if (typeName === ((_c = schema.getSubscriptionType()) === null || _c === void 0 ? void 0 : _c.name)) {
            specifiers.push(Interfaces_js_1.MapperKind.ROOT_FIELD, Interfaces_js_1.MapperKind.SUBSCRIPTION_ROOT_FIELD);
        }
    }
    else if ((0, graphql_1.isInterfaceType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.COMPOSITE_FIELD, Interfaces_js_1.MapperKind.INTERFACE_FIELD);
    }
    else if ((0, graphql_1.isInputObjectType)(type)) {
        specifiers.push(Interfaces_js_1.MapperKind.INPUT_OBJECT_FIELD);
    }
    return specifiers;
}
function getFieldMapper(schema, schemaMapper, typeName) {
    const specifiers = getFieldSpecifiers(schema, typeName);
    let fieldMapper;
    const stack = [...specifiers];
    while (!fieldMapper && stack.length > 0) {
        // It is safe to use the ! operator here as we check the length.
        const next = stack.pop();
        // TODO: fix this as unknown cast
        fieldMapper = schemaMapper[next];
    }
    return fieldMapper !== null && fieldMapper !== void 0 ? fieldMapper : null;
}
function getArgumentMapper(schemaMapper) {
    const argumentMapper = schemaMapper[Interfaces_js_1.MapperKind.ARGUMENT];
    return argumentMapper != null ? argumentMapper : null;
}
function getDirectiveMapper(schemaMapper) {
    const directiveMapper = schemaMapper[Interfaces_js_1.MapperKind.DIRECTIVE];
    return directiveMapper != null ? directiveMapper : null;
}
function getEnumValueMapper(schemaMapper) {
    const enumValueMapper = schemaMapper[Interfaces_js_1.MapperKind.ENUM_VALUE];
    return enumValueMapper != null ? enumValueMapper : null;
}
function correctASTNodes(type) {
    if ((0, graphql_1.isObjectType)(type)) {
        const config = type.toConfig();
        if (config.astNode != null) {
            const fields = [];
            for (const fieldName in config.fields) {
                const fieldConfig = config.fields[fieldName];
                if (fieldConfig.astNode != null) {
                    fields.push(fieldConfig.astNode);
                }
            }
            config.astNode = {
                ...config.astNode,
                kind: graphql_1.Kind.OBJECT_TYPE_DEFINITION,
                fields,
            };
        }
        if (config.extensionASTNodes != null) {
            config.extensionASTNodes = config.extensionASTNodes.map(node => ({
                ...node,
                kind: graphql_1.Kind.OBJECT_TYPE_EXTENSION,
                fields: undefined,
            }));
        }
        return new graphql_1.GraphQLObjectType(config);
    }
    else if ((0, graphql_1.isInterfaceType)(type)) {
        const config = type.toConfig();
        if (config.astNode != null) {
            const fields = [];
            for (const fieldName in config.fields) {
                const fieldConfig = config.fields[fieldName];
                if (fieldConfig.astNode != null) {
                    fields.push(fieldConfig.astNode);
                }
            }
            config.astNode = {
                ...config.astNode,
                kind: graphql_1.Kind.INTERFACE_TYPE_DEFINITION,
                fields,
            };
        }
        if (config.extensionASTNodes != null) {
            config.extensionASTNodes = config.extensionASTNodes.map(node => ({
                ...node,
                kind: graphql_1.Kind.INTERFACE_TYPE_EXTENSION,
                fields: undefined,
            }));
        }
        return new graphql_1.GraphQLInterfaceType(config);
    }
    else if ((0, graphql_1.isInputObjectType)(type)) {
        const config = type.toConfig();
        if (config.astNode != null) {
            const fields = [];
            for (const fieldName in config.fields) {
                const fieldConfig = config.fields[fieldName];
                if (fieldConfig.astNode != null) {
                    fields.push(fieldConfig.astNode);
                }
            }
            config.astNode = {
                ...config.astNode,
                kind: graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION,
                fields,
            };
        }
        if (config.extensionASTNodes != null) {
            config.extensionASTNodes = config.extensionASTNodes.map(node => ({
                ...node,
                kind: graphql_1.Kind.INPUT_OBJECT_TYPE_EXTENSION,
                fields: undefined,
            }));
        }
        return new graphql_1.GraphQLInputObjectType(config);
    }
    else if ((0, graphql_1.isEnumType)(type)) {
        const config = type.toConfig();
        if (config.astNode != null) {
            const values = [];
            for (const enumKey in config.values) {
                const enumValueConfig = config.values[enumKey];
                if (enumValueConfig.astNode != null) {
                    values.push(enumValueConfig.astNode);
                }
            }
            config.astNode = {
                ...config.astNode,
                values,
            };
        }
        if (config.extensionASTNodes != null) {
            config.extensionASTNodes = config.extensionASTNodes.map(node => ({
                ...node,
                values: undefined,
            }));
        }
        return new graphql_1.GraphQLEnumType(config);
    }
    else {
        return type;
    }
}
exports.correctASTNodes = correctASTNodes;
