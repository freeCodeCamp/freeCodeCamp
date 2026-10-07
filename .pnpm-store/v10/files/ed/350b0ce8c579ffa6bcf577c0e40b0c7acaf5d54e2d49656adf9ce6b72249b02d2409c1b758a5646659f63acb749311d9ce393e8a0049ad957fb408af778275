import { GraphQLEnumType, GraphQLScalarType, GraphQLUnionType, GraphQLInterfaceType, GraphQLObjectType, isSpecifiedScalarType, isScalarType, isEnumType, isUnionType, isInterfaceType, isObjectType, } from 'graphql';
import { mapSchema, MapperKind, forEachDefaultValue, serializeInputValue, healSchema, parseInputValue, forEachField, } from '@graphql-tools/utils';
import { checkForResolveTypeResolver } from './checkForResolveTypeResolver.js';
import { extendResolversFromInterfaces } from './extendResolversFromInterfaces.js';
export function addResolversToSchema({ schema, resolvers: inputResolvers, defaultFieldResolver, resolverValidationOptions = {}, inheritResolversFromInterfaces = false, updateResolversInPlace = false, }) {
    const { requireResolversToMatchSchema = 'error', requireResolversForResolveType } = resolverValidationOptions;
    const resolvers = inheritResolversFromInterfaces
        ? extendResolversFromInterfaces(schema, inputResolvers)
        : inputResolvers;
    for (const typeName in resolvers) {
        const resolverValue = resolvers[typeName];
        const resolverType = typeof resolverValue;
        if (resolverType !== 'object') {
            throw new Error(`"${typeName}" defined in resolvers, but has invalid value "${resolverValue}". The resolver's value must be of type object.`);
        }
        const type = schema.getType(typeName);
        if (type == null) {
            if (requireResolversToMatchSchema === 'ignore') {
                continue;
            }
            throw new Error(`"${typeName}" defined in resolvers, but not in schema`);
        }
        else if (isSpecifiedScalarType(type)) {
            // allow -- without recommending -- overriding of specified scalar types
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                }
                else {
                    type[fieldName] = resolverValue[fieldName];
                }
            }
        }
        else if (isEnumType(type)) {
            const values = type.getValues();
            for (const fieldName in resolverValue) {
                if (!fieldName.startsWith('__') &&
                    !values.some(value => value.name === fieldName) &&
                    requireResolversToMatchSchema &&
                    requireResolversToMatchSchema !== 'ignore') {
                    throw new Error(`${type.name}.${fieldName} was defined in resolvers, but not present within ${type.name}`);
                }
            }
        }
        else if (isUnionType(type)) {
            for (const fieldName in resolverValue) {
                if (!fieldName.startsWith('__') &&
                    requireResolversToMatchSchema &&
                    requireResolversToMatchSchema !== 'ignore') {
                    throw new Error(`${type.name}.${fieldName} was defined in resolvers, but ${type.name} is not an object or interface type`);
                }
            }
        }
        else if (isObjectType(type) || isInterfaceType(type)) {
            for (const fieldName in resolverValue) {
                if (!fieldName.startsWith('__')) {
                    const fields = type.getFields();
                    const field = fields[fieldName];
                    if (field == null) {
                        // Field present in resolver but not in schema
                        if (requireResolversToMatchSchema && requireResolversToMatchSchema !== 'ignore') {
                            throw new Error(`${typeName}.${fieldName} defined in resolvers, but not in schema`);
                        }
                    }
                    else {
                        // Field present in both the resolver and schema
                        const fieldResolve = resolverValue[fieldName];
                        if (typeof fieldResolve !== 'function' && typeof fieldResolve !== 'object') {
                            throw new Error(`Resolver ${typeName}.${fieldName} must be object or function`);
                        }
                    }
                }
            }
        }
    }
    schema = updateResolversInPlace
        ? addResolversToExistingSchema(schema, resolvers, defaultFieldResolver)
        : createNewSchemaWithResolvers(schema, resolvers, defaultFieldResolver);
    if (requireResolversForResolveType && requireResolversForResolveType !== 'ignore') {
        checkForResolveTypeResolver(schema, requireResolversForResolveType);
    }
    return schema;
}
function addResolversToExistingSchema(schema, resolvers, defaultFieldResolver) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const typeMap = schema.getTypeMap();
    for (const typeName in resolvers) {
        const type = schema.getType(typeName);
        const resolverValue = resolvers[typeName];
        if (isScalarType(type)) {
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                }
                else if (fieldName === 'astNode' && type.astNode != null) {
                    type.astNode = {
                        ...type.astNode,
                        description: (_b = (_a = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : type.astNode.description,
                        directives: ((_c = type.astNode.directives) !== null && _c !== void 0 ? _c : []).concat((_e = (_d = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _d === void 0 ? void 0 : _d.directives) !== null && _e !== void 0 ? _e : []),
                    };
                }
                else if (fieldName === 'extensionASTNodes' && type.extensionASTNodes != null) {
                    type.extensionASTNodes = type.extensionASTNodes.concat((_f = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.extensionASTNodes) !== null && _f !== void 0 ? _f : []);
                }
                else if (fieldName === 'extensions' &&
                    type.extensions != null &&
                    resolverValue.extensions != null) {
                    type.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                }
                else {
                    type[fieldName] = resolverValue[fieldName];
                }
            }
        }
        else if (isEnumType(type)) {
            const config = type.toConfig();
            const enumValueConfigMap = config.values;
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    config[fieldName.substring(2)] = resolverValue[fieldName];
                }
                else if (fieldName === 'astNode' && config.astNode != null) {
                    config.astNode = {
                        ...config.astNode,
                        description: (_h = (_g = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _g === void 0 ? void 0 : _g.description) !== null && _h !== void 0 ? _h : config.astNode.description,
                        directives: ((_j = config.astNode.directives) !== null && _j !== void 0 ? _j : []).concat((_l = (_k = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _k === void 0 ? void 0 : _k.directives) !== null && _l !== void 0 ? _l : []),
                    };
                }
                else if (fieldName === 'extensionASTNodes' && config.extensionASTNodes != null) {
                    config.extensionASTNodes = config.extensionASTNodes.concat((_m = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.extensionASTNodes) !== null && _m !== void 0 ? _m : []);
                }
                else if (fieldName === 'extensions' &&
                    type.extensions != null &&
                    resolverValue.extensions != null) {
                    type.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                }
                else if (enumValueConfigMap[fieldName]) {
                    enumValueConfigMap[fieldName].value = resolverValue[fieldName];
                }
            }
            typeMap[typeName] = new GraphQLEnumType(config);
        }
        else if (isUnionType(type)) {
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                }
            }
        }
        else if (isObjectType(type) || isInterfaceType(type)) {
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    // this is for isTypeOf and resolveType and all the other stuff.
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                    continue;
                }
                const fields = type.getFields();
                const field = fields[fieldName];
                if (field != null) {
                    const fieldResolve = resolverValue[fieldName];
                    if (typeof fieldResolve === 'function') {
                        // for convenience. Allows shorter syntax in resolver definition file
                        field.resolve = fieldResolve.bind(resolverValue);
                    }
                    else {
                        setFieldProperties(field, fieldResolve);
                    }
                }
            }
        }
    }
    // serialize all default values prior to healing fields with new scalar/enum types.
    forEachDefaultValue(schema, serializeInputValue);
    // schema may have new scalar/enum types that require healing
    healSchema(schema);
    // reparse all default values with new parsing functions.
    forEachDefaultValue(schema, parseInputValue);
    if (defaultFieldResolver != null) {
        forEachField(schema, field => {
            if (!field.resolve) {
                field.resolve = defaultFieldResolver;
            }
        });
    }
    return schema;
}
function createNewSchemaWithResolvers(schema, resolvers, defaultFieldResolver) {
    schema = mapSchema(schema, {
        [MapperKind.SCALAR_TYPE]: type => {
            var _a, _b, _c, _d, _e, _f;
            const config = type.toConfig();
            const resolverValue = resolvers[type.name];
            if (!isSpecifiedScalarType(type) && resolverValue != null) {
                for (const fieldName in resolverValue) {
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                    }
                    else if (fieldName === 'astNode' && config.astNode != null) {
                        config.astNode = {
                            ...config.astNode,
                            description: (_b = (_a = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : config.astNode.description,
                            directives: ((_c = config.astNode.directives) !== null && _c !== void 0 ? _c : []).concat((_e = (_d = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _d === void 0 ? void 0 : _d.directives) !== null && _e !== void 0 ? _e : []),
                        };
                    }
                    else if (fieldName === 'extensionASTNodes' && config.extensionASTNodes != null) {
                        config.extensionASTNodes = config.extensionASTNodes.concat((_f = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.extensionASTNodes) !== null && _f !== void 0 ? _f : []);
                    }
                    else if (fieldName === 'extensions' &&
                        config.extensions != null &&
                        resolverValue.extensions != null) {
                        config.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                    }
                    else {
                        config[fieldName] = resolverValue[fieldName];
                    }
                }
                return new GraphQLScalarType(config);
            }
        },
        [MapperKind.ENUM_TYPE]: type => {
            var _a, _b, _c, _d, _e, _f;
            const resolverValue = resolvers[type.name];
            const config = type.toConfig();
            const enumValueConfigMap = config.values;
            if (resolverValue != null) {
                for (const fieldName in resolverValue) {
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                    }
                    else if (fieldName === 'astNode' && config.astNode != null) {
                        config.astNode = {
                            ...config.astNode,
                            description: (_b = (_a = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : config.astNode.description,
                            directives: ((_c = config.astNode.directives) !== null && _c !== void 0 ? _c : []).concat((_e = (_d = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.astNode) === null || _d === void 0 ? void 0 : _d.directives) !== null && _e !== void 0 ? _e : []),
                        };
                    }
                    else if (fieldName === 'extensionASTNodes' && config.extensionASTNodes != null) {
                        config.extensionASTNodes = config.extensionASTNodes.concat((_f = resolverValue === null || resolverValue === void 0 ? void 0 : resolverValue.extensionASTNodes) !== null && _f !== void 0 ? _f : []);
                    }
                    else if (fieldName === 'extensions' &&
                        config.extensions != null &&
                        resolverValue.extensions != null) {
                        config.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                    }
                    else if (enumValueConfigMap[fieldName]) {
                        enumValueConfigMap[fieldName].value = resolverValue[fieldName];
                    }
                }
                return new GraphQLEnumType(config);
            }
        },
        [MapperKind.UNION_TYPE]: type => {
            const resolverValue = resolvers[type.name];
            if (resolverValue != null) {
                const config = type.toConfig();
                if (resolverValue['__resolveType']) {
                    config.resolveType = resolverValue['__resolveType'];
                }
                return new GraphQLUnionType(config);
            }
        },
        [MapperKind.OBJECT_TYPE]: type => {
            const resolverValue = resolvers[type.name];
            if (resolverValue != null) {
                const config = type.toConfig();
                if (resolverValue['__isTypeOf']) {
                    config.isTypeOf = resolverValue['__isTypeOf'];
                }
                return new GraphQLObjectType(config);
            }
        },
        [MapperKind.INTERFACE_TYPE]: type => {
            const resolverValue = resolvers[type.name];
            if (resolverValue != null) {
                const config = type.toConfig();
                if (resolverValue['__resolveType']) {
                    config.resolveType = resolverValue['__resolveType'];
                }
                return new GraphQLInterfaceType(config);
            }
        },
        [MapperKind.COMPOSITE_FIELD]: (fieldConfig, fieldName, typeName) => {
            const resolverValue = resolvers[typeName];
            if (resolverValue != null) {
                const fieldResolve = resolverValue[fieldName];
                if (fieldResolve != null) {
                    const newFieldConfig = { ...fieldConfig };
                    if (typeof fieldResolve === 'function') {
                        // for convenience. Allows shorter syntax in resolver definition file
                        newFieldConfig.resolve = fieldResolve.bind(resolverValue);
                    }
                    else {
                        setFieldProperties(newFieldConfig, fieldResolve);
                    }
                    return newFieldConfig;
                }
            }
        },
    });
    if (defaultFieldResolver != null) {
        schema = mapSchema(schema, {
            [MapperKind.OBJECT_FIELD]: fieldConfig => ({
                ...fieldConfig,
                resolve: fieldConfig.resolve != null ? fieldConfig.resolve : defaultFieldResolver,
            }),
        });
    }
    return schema;
}
function setFieldProperties(field, propertiesObj) {
    for (const propertyName in propertiesObj) {
        field[propertyName] = propertiesObj[propertyName];
    }
}
