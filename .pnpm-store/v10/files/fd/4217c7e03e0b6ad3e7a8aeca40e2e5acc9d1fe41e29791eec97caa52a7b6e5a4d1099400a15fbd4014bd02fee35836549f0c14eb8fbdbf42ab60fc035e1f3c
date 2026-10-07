import { GraphQLInputObjectType, GraphQLInterfaceType, GraphQLObjectType, } from 'graphql';
import { MapperKind } from './Interfaces.js';
import { mapSchema } from './mapSchema.js';
export function filterSchema({ schema, typeFilter = () => true, fieldFilter = undefined, rootFieldFilter = undefined, objectFieldFilter = undefined, interfaceFieldFilter = undefined, inputObjectFieldFilter = undefined, argumentFilter = undefined, }) {
    const filteredSchema = mapSchema(schema, {
        [MapperKind.QUERY]: (type) => filterRootFields(type, 'Query', rootFieldFilter, argumentFilter),
        [MapperKind.MUTATION]: (type) => filterRootFields(type, 'Mutation', rootFieldFilter, argumentFilter),
        [MapperKind.SUBSCRIPTION]: (type) => filterRootFields(type, 'Subscription', rootFieldFilter, argumentFilter),
        [MapperKind.OBJECT_TYPE]: (type) => typeFilter(type.name, type)
            ? filterElementFields(GraphQLObjectType, type, objectFieldFilter || fieldFilter, argumentFilter)
            : null,
        [MapperKind.INTERFACE_TYPE]: (type) => typeFilter(type.name, type)
            ? filterElementFields(GraphQLInterfaceType, type, interfaceFieldFilter || fieldFilter, argumentFilter)
            : null,
        [MapperKind.INPUT_OBJECT_TYPE]: (type) => typeFilter(type.name, type)
            ? filterElementFields(GraphQLInputObjectType, type, inputObjectFieldFilter || fieldFilter)
            : null,
        [MapperKind.UNION_TYPE]: (type) => (typeFilter(type.name, type) ? undefined : null),
        [MapperKind.ENUM_TYPE]: (type) => (typeFilter(type.name, type) ? undefined : null),
        [MapperKind.SCALAR_TYPE]: (type) => (typeFilter(type.name, type) ? undefined : null),
    });
    return filteredSchema;
}
function filterRootFields(type, operation, rootFieldFilter, argumentFilter) {
    if (rootFieldFilter || argumentFilter) {
        const config = type.toConfig();
        for (const fieldName in config.fields) {
            const field = config.fields[fieldName];
            if (rootFieldFilter && !rootFieldFilter(operation, fieldName, config.fields[fieldName])) {
                delete config.fields[fieldName];
            }
            else if (argumentFilter && field.args) {
                for (const argName in field.args) {
                    if (!argumentFilter(operation, fieldName, argName, field.args[argName])) {
                        delete field.args[argName];
                    }
                }
            }
        }
        return new GraphQLObjectType(config);
    }
    return type;
}
function filterElementFields(ElementConstructor, type, fieldFilter, argumentFilter) {
    if (fieldFilter || argumentFilter) {
        const config = type.toConfig();
        for (const fieldName in config.fields) {
            const field = config.fields[fieldName];
            if (fieldFilter && !fieldFilter(type.name, fieldName, config.fields[fieldName])) {
                delete config.fields[fieldName];
            }
            else if (argumentFilter && 'args' in field) {
                for (const argName in field.args) {
                    if (!argumentFilter(type.name, fieldName, argName, field.args[argName])) {
                        delete field.args[argName];
                    }
                }
            }
        }
        return new ElementConstructor(config);
    }
}
