// addTypes uses toConfig to create a new schema with a new or replaced
// type or directive. Rewiring is employed so that the replaced type can be
// reconnected with the existing types.
//
// Rewiring is employed even for new types or directives as a convenience, so
// that type references within the new type or directive do not have to be to
// the identical objects within the original schema.
//
// In fact, the type references could even be stub types with entirely different
// fields, as long as the type references share the same name as the desired
// type within the original schema's type map.
//
// This makes it easy to perform simple schema operations (e.g. adding a new
// type with a fiew fields removed from an existing type) that could normally be
// performed by using toConfig directly, but is blocked if any intervening
// more advanced schema operations have caused the types to be recreated via
// rewiring.
//
// Type recreation happens, for example, with every use of mapSchema, as the
// types are always rewired. If fields are selected and removed using
// mapSchema, adding those fields to a new type can no longer be simply done
// by toConfig, as the types are not the identical JavaScript objects, and
// schema creation will fail with errors referencing multiple types with the
// same names.
//
// enhanceSchema can fill this gap by adding an additional round of rewiring.
//
import { GraphQLSchema, isNamedType, isDirective } from 'graphql';
import { getObjectTypeFromTypeMap } from './getObjectTypeFromTypeMap.js';
import { rewireTypes } from './rewire.js';
export function addTypes(schema, newTypesOrDirectives) {
    const config = schema.toConfig();
    const originalTypeMap = {};
    for (const type of config.types) {
        originalTypeMap[type.name] = type;
    }
    const originalDirectiveMap = {};
    for (const directive of config.directives) {
        originalDirectiveMap[directive.name] = directive;
    }
    for (const newTypeOrDirective of newTypesOrDirectives) {
        if (isNamedType(newTypeOrDirective)) {
            originalTypeMap[newTypeOrDirective.name] = newTypeOrDirective;
        }
        else if (isDirective(newTypeOrDirective)) {
            originalDirectiveMap[newTypeOrDirective.name] = newTypeOrDirective;
        }
    }
    const { typeMap, directives } = rewireTypes(originalTypeMap, Object.values(originalDirectiveMap));
    return new GraphQLSchema({
        ...config,
        query: getObjectTypeFromTypeMap(typeMap, schema.getQueryType()),
        mutation: getObjectTypeFromTypeMap(typeMap, schema.getMutationType()),
        subscription: getObjectTypeFromTypeMap(typeMap, schema.getSubscriptionType()),
        types: Object.values(typeMap),
        directives,
    });
}
