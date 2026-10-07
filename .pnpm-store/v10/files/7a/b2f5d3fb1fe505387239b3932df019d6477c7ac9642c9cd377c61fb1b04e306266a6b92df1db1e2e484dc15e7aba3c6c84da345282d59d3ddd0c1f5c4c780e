import { GraphQLScalarType, isScalarType, isEnumType, isInterfaceType, isUnionType, isObjectType, isSpecifiedScalarType, } from 'graphql';
export function getResolversFromSchema(schema, 
// Include default merged resolvers
includeDefaultMergedResolver) {
    var _a, _b;
    const resolvers = Object.create(null);
    const typeMap = schema.getTypeMap();
    for (const typeName in typeMap) {
        if (!typeName.startsWith('__')) {
            const type = typeMap[typeName];
            if (isScalarType(type)) {
                if (!isSpecifiedScalarType(type)) {
                    const config = type.toConfig();
                    delete config.astNode; // avoid AST duplication elsewhere
                    resolvers[typeName] = new GraphQLScalarType(config);
                }
            }
            else if (isEnumType(type)) {
                resolvers[typeName] = {};
                const values = type.getValues();
                for (const value of values) {
                    resolvers[typeName][value.name] = value.value;
                }
            }
            else if (isInterfaceType(type)) {
                if (type.resolveType != null) {
                    resolvers[typeName] = {
                        __resolveType: type.resolveType,
                    };
                }
            }
            else if (isUnionType(type)) {
                if (type.resolveType != null) {
                    resolvers[typeName] = {
                        __resolveType: type.resolveType,
                    };
                }
            }
            else if (isObjectType(type)) {
                resolvers[typeName] = {};
                if (type.isTypeOf != null) {
                    resolvers[typeName].__isTypeOf = type.isTypeOf;
                }
                const fields = type.getFields();
                for (const fieldName in fields) {
                    const field = fields[fieldName];
                    if (field.subscribe != null) {
                        resolvers[typeName][fieldName] = resolvers[typeName][fieldName] || {};
                        resolvers[typeName][fieldName].subscribe = field.subscribe;
                    }
                    if (field.resolve != null && ((_a = field.resolve) === null || _a === void 0 ? void 0 : _a.name) !== 'defaultFieldResolver') {
                        switch ((_b = field.resolve) === null || _b === void 0 ? void 0 : _b.name) {
                            case 'defaultMergedResolver':
                                if (!includeDefaultMergedResolver) {
                                    continue;
                                }
                                break;
                            case 'defaultFieldResolver':
                                continue;
                        }
                        resolvers[typeName][fieldName] = resolvers[typeName][fieldName] || {};
                        resolvers[typeName][fieldName].resolve = field.resolve;
                    }
                }
            }
        }
    }
    return resolvers;
}
