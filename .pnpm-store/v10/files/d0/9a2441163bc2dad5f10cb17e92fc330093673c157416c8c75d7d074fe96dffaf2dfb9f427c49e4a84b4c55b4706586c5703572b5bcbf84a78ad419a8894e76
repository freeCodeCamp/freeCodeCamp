import { GraphQLList, GraphQLNonNull, isNamedType, isObjectType, isInterfaceType, isUnionType, isInputObjectType, isLeafType, isListType, isNonNullType, } from 'graphql';
// Update any references to named schema types that disagree with the named
// types found in schema.getTypeMap().
//
// healSchema and its callers (visitSchema/visitSchemaDirectives) all modify the schema in place.
// Therefore, private variables (such as the stored implementation map and the proper root types)
// are not updated.
//
// If this causes issues, the schema could be more aggressively healed as follows:
//
// healSchema(schema);
// const config = schema.toConfig()
// const healedSchema = new GraphQLSchema({
//   ...config,
//   query: schema.getType('<desired new root query type name>'),
//   mutation: schema.getType('<desired new root mutation type name>'),
//   subscription: schema.getType('<desired new root subscription type name>'),
// });
//
// One can then also -- if necessary --  assign the correct private variables to the initial schema
// as follows:
// Object.assign(schema, healedSchema);
//
// These steps are not taken automatically to preserve backwards compatibility with graphql-tools v4.
// See https://github.com/ardatan/graphql-tools/issues/1462
//
// They were briefly taken in v5, but can now be phased out as they were only required when other
// areas of the codebase were using healSchema and visitSchema more extensively.
//
export function healSchema(schema) {
    healTypes(schema.getTypeMap(), schema.getDirectives());
    return schema;
}
export function healTypes(originalTypeMap, directives) {
    const actualNamedTypeMap = Object.create(null);
    // If any of the .name properties of the GraphQLNamedType objects in
    // schema.getTypeMap() have changed, the keys of the type map need to
    // be updated accordingly.
    for (const typeName in originalTypeMap) {
        const namedType = originalTypeMap[typeName];
        if (namedType == null || typeName.startsWith('__')) {
            continue;
        }
        const actualName = namedType.name;
        if (actualName.startsWith('__')) {
            continue;
        }
        if (actualNamedTypeMap[actualName] != null) {
            console.warn(`Duplicate schema type name ${actualName} found; keeping the existing one found in the schema`);
            continue;
        }
        actualNamedTypeMap[actualName] = namedType;
        // Note: we are deliberately leaving namedType in the schema by its
        // original name (which might be different from actualName), so that
        // references by that name can be healed.
    }
    // Now add back every named type by its actual name.
    for (const typeName in actualNamedTypeMap) {
        const namedType = actualNamedTypeMap[typeName];
        originalTypeMap[typeName] = namedType;
    }
    // Directive declaration argument types can refer to named types.
    for (const decl of directives) {
        decl.args = decl.args.filter(arg => {
            arg.type = healType(arg.type);
            return arg.type !== null;
        });
    }
    for (const typeName in originalTypeMap) {
        const namedType = originalTypeMap[typeName];
        // Heal all named types, except for dangling references, kept only to redirect.
        if (!typeName.startsWith('__') && typeName in actualNamedTypeMap) {
            if (namedType != null) {
                healNamedType(namedType);
            }
        }
    }
    for (const typeName in originalTypeMap) {
        if (!typeName.startsWith('__') && !(typeName in actualNamedTypeMap)) {
            delete originalTypeMap[typeName];
        }
    }
    function healNamedType(type) {
        if (isObjectType(type)) {
            healFields(type);
            healInterfaces(type);
            return;
        }
        else if (isInterfaceType(type)) {
            healFields(type);
            if ('getInterfaces' in type) {
                healInterfaces(type);
            }
            return;
        }
        else if (isUnionType(type)) {
            healUnderlyingTypes(type);
            return;
        }
        else if (isInputObjectType(type)) {
            healInputFields(type);
            return;
        }
        else if (isLeafType(type)) {
            return;
        }
        throw new Error(`Unexpected schema type: ${type}`);
    }
    function healFields(type) {
        const fieldMap = type.getFields();
        for (const [key, field] of Object.entries(fieldMap)) {
            field.args
                .map(arg => {
                arg.type = healType(arg.type);
                return arg.type === null ? null : arg;
            })
                .filter(Boolean);
            field.type = healType(field.type);
            if (field.type === null) {
                delete fieldMap[key];
            }
        }
    }
    function healInterfaces(type) {
        if ('getInterfaces' in type) {
            const interfaces = type.getInterfaces();
            interfaces.push(...interfaces
                .splice(0)
                .map(iface => healType(iface))
                .filter(Boolean));
        }
    }
    function healInputFields(type) {
        const fieldMap = type.getFields();
        for (const [key, field] of Object.entries(fieldMap)) {
            field.type = healType(field.type);
            if (field.type === null) {
                delete fieldMap[key];
            }
        }
    }
    function healUnderlyingTypes(type) {
        const types = type.getTypes();
        types.push(...types
            .splice(0)
            .map(t => healType(t))
            .filter(Boolean));
    }
    function healType(type) {
        // Unwrap the two known wrapper types
        if (isListType(type)) {
            const healedType = healType(type.ofType);
            return healedType != null ? new GraphQLList(healedType) : null;
        }
        else if (isNonNullType(type)) {
            const healedType = healType(type.ofType);
            return healedType != null ? new GraphQLNonNull(healedType) : null;
        }
        else if (isNamedType(type)) {
            // If a type annotation on a field or an argument or a union member is
            // any `GraphQLNamedType` with a `name`, then it must end up identical
            // to `schema.getType(name)`, since `schema.getTypeMap()` is the source
            // of truth for all named schema types.
            // Note that new types can still be simply added by adding a field, as
            // the official type will be undefined, not null.
            const officialType = originalTypeMap[type.name];
            if (officialType && type !== officialType) {
                return officialType;
            }
        }
        return type;
    }
}
