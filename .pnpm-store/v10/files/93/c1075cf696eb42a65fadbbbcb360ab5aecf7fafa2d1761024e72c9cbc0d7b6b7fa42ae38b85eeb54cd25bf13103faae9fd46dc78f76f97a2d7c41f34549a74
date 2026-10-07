"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendResolversFromInterfaces = void 0;
function extendResolversFromInterfaces(schema, resolvers) {
    const extendedResolvers = {};
    const typeMap = schema.getTypeMap();
    for (const typeName in typeMap) {
        const type = typeMap[typeName];
        if ('getInterfaces' in type) {
            extendedResolvers[typeName] = {};
            for (const iFace of type.getInterfaces()) {
                if (resolvers[iFace.name]) {
                    for (const fieldName in resolvers[iFace.name]) {
                        if (fieldName === '__isTypeOf' || !fieldName.startsWith('__')) {
                            extendedResolvers[typeName][fieldName] = resolvers[iFace.name][fieldName];
                        }
                    }
                }
            }
            const typeResolvers = resolvers[typeName];
            extendedResolvers[typeName] = {
                ...extendedResolvers[typeName],
                ...typeResolvers,
            };
        }
        else {
            const typeResolvers = resolvers[typeName];
            if (typeResolvers != null) {
                extendedResolvers[typeName] = typeResolvers;
            }
        }
    }
    return extendedResolvers;
}
exports.extendResolversFromInterfaces = extendResolversFromInterfaces;
