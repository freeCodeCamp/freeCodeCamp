"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyObjectFields = exports.selectObjectFields = exports.removeObjectFields = exports.appendObjectFields = void 0;
const graphql_1 = require("graphql");
const Interfaces_js_1 = require("./Interfaces.js");
const mapSchema_js_1 = require("./mapSchema.js");
const addTypes_js_1 = require("./addTypes.js");
function appendObjectFields(schema, typeName, additionalFields) {
    if (schema.getType(typeName) == null) {
        return (0, addTypes_js_1.addTypes)(schema, [
            new graphql_1.GraphQLObjectType({
                name: typeName,
                fields: additionalFields,
            }),
        ]);
    }
    return (0, mapSchema_js_1.mapSchema)(schema, {
        [Interfaces_js_1.MapperKind.OBJECT_TYPE]: type => {
            if (type.name === typeName) {
                const config = type.toConfig();
                const originalFieldConfigMap = config.fields;
                const newFieldConfigMap = {};
                for (const fieldName in originalFieldConfigMap) {
                    newFieldConfigMap[fieldName] = originalFieldConfigMap[fieldName];
                }
                for (const fieldName in additionalFields) {
                    newFieldConfigMap[fieldName] = additionalFields[fieldName];
                }
                return (0, mapSchema_js_1.correctASTNodes)(new graphql_1.GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
        },
    });
}
exports.appendObjectFields = appendObjectFields;
function removeObjectFields(schema, typeName, testFn) {
    const removedFields = {};
    const newSchema = (0, mapSchema_js_1.mapSchema)(schema, {
        [Interfaces_js_1.MapperKind.OBJECT_TYPE]: type => {
            if (type.name === typeName) {
                const config = type.toConfig();
                const originalFieldConfigMap = config.fields;
                const newFieldConfigMap = {};
                for (const fieldName in originalFieldConfigMap) {
                    const originalFieldConfig = originalFieldConfigMap[fieldName];
                    if (testFn(fieldName, originalFieldConfig)) {
                        removedFields[fieldName] = originalFieldConfig;
                    }
                    else {
                        newFieldConfigMap[fieldName] = originalFieldConfig;
                    }
                }
                return (0, mapSchema_js_1.correctASTNodes)(new graphql_1.GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
        },
    });
    return [newSchema, removedFields];
}
exports.removeObjectFields = removeObjectFields;
function selectObjectFields(schema, typeName, testFn) {
    const selectedFields = {};
    (0, mapSchema_js_1.mapSchema)(schema, {
        [Interfaces_js_1.MapperKind.OBJECT_TYPE]: type => {
            if (type.name === typeName) {
                const config = type.toConfig();
                const originalFieldConfigMap = config.fields;
                for (const fieldName in originalFieldConfigMap) {
                    const originalFieldConfig = originalFieldConfigMap[fieldName];
                    if (testFn(fieldName, originalFieldConfig)) {
                        selectedFields[fieldName] = originalFieldConfig;
                    }
                }
            }
            return undefined;
        },
    });
    return selectedFields;
}
exports.selectObjectFields = selectObjectFields;
function modifyObjectFields(schema, typeName, testFn, newFields) {
    const removedFields = {};
    const newSchema = (0, mapSchema_js_1.mapSchema)(schema, {
        [Interfaces_js_1.MapperKind.OBJECT_TYPE]: type => {
            if (type.name === typeName) {
                const config = type.toConfig();
                const originalFieldConfigMap = config.fields;
                const newFieldConfigMap = {};
                for (const fieldName in originalFieldConfigMap) {
                    const originalFieldConfig = originalFieldConfigMap[fieldName];
                    if (testFn(fieldName, originalFieldConfig)) {
                        removedFields[fieldName] = originalFieldConfig;
                    }
                    else {
                        newFieldConfigMap[fieldName] = originalFieldConfig;
                    }
                }
                for (const fieldName in newFields) {
                    const fieldConfig = newFields[fieldName];
                    newFieldConfigMap[fieldName] = fieldConfig;
                }
                return (0, mapSchema_js_1.correctASTNodes)(new graphql_1.GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
        },
    });
    return [newSchema, removedFields];
}
exports.modifyObjectFields = modifyObjectFields;
