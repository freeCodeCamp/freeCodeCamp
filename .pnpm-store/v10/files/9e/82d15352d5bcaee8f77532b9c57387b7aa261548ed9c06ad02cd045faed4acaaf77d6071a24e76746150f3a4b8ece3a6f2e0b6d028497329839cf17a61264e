"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSchema = void 0;
const graphql_1 = require("graphql");
const Interfaces_js_1 = require("./Interfaces.js");
const mapSchema_js_1 = require("./mapSchema.js");
function filterSchema({ schema, typeFilter = () => true, fieldFilter = undefined, rootFieldFilter = undefined, objectFieldFilter = undefined, interfaceFieldFilter = undefined, inputObjectFieldFilter = undefined, argumentFilter = undefined, }) {
    const filteredSchema = (0, mapSchema_js_1.mapSchema)(schema, {
        [Interfaces_js_1.MapperKind.QUERY]: (type) => filterRootFields(type, 'Query', rootFieldFilter, argumentFilter),
        [Interfaces_js_1.MapperKind.MUTATION]: (type) => filterRootFields(type, 'Mutation', rootFieldFilter, argumentFilter),
        [Interfaces_js_1.MapperKind.SUBSCRIPTION]: (type) => filterRootFields(type, 'Subscription', rootFieldFilter, argumentFilter),
        [Interfaces_js_1.MapperKind.OBJECT_TYPE]: (type) => typeFilter(type.name, type)
            ? filterElementFields(graphql_1.GraphQLObjectType, type, objectFieldFilter || fieldFilter, argumentFilter)
            : null,
        [Interfaces_js_1.MapperKind.INTERFACE_TYPE]: (type) => typeFilter(type.name, type)
            ? filterElementFields(graphql_1.GraphQLInterfaceType, type, interfaceFieldFilter || fieldFilter, argumentFilter)
            : null,
        [Interfaces_js_1.MapperKind.INPUT_OBJECT_TYPE]: (type) => typeFilter(type.name, type)
            ? filterElementFields(graphql_1.GraphQLInputObjectType, type, inputObjectFieldFilter || fieldFilter)
            : null,
        [Interfaces_js_1.MapperKind.UNION_TYPE]: (type) => (typeFilter(type.name, type) ? undefined : null),
        [Interfaces_js_1.MapperKind.ENUM_TYPE]: (type) => (typeFilter(type.name, type) ? undefined : null),
        [Interfaces_js_1.MapperKind.SCALAR_TYPE]: (type) => (typeFilter(type.name, type) ? undefined : null),
    });
    return filteredSchema;
}
exports.filterSchema = filterSchema;
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
        return new graphql_1.GraphQLObjectType(config);
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
