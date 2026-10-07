import { GraphQLObjectType } from 'graphql';
import { MapperKind } from './Interfaces.js';
import { mapSchema, correctASTNodes } from './mapSchema.js';
import { addTypes } from './addTypes.js';
export function appendObjectFields(schema, typeName, additionalFields) {
    if (schema.getType(typeName) == null) {
        return addTypes(schema, [
            new GraphQLObjectType({
                name: typeName,
                fields: additionalFields,
            }),
        ]);
    }
    return mapSchema(schema, {
        [MapperKind.OBJECT_TYPE]: type => {
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
                return correctASTNodes(new GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
        },
    });
}
export function removeObjectFields(schema, typeName, testFn) {
    const removedFields = {};
    const newSchema = mapSchema(schema, {
        [MapperKind.OBJECT_TYPE]: type => {
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
                return correctASTNodes(new GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
        },
    });
    return [newSchema, removedFields];
}
export function selectObjectFields(schema, typeName, testFn) {
    const selectedFields = {};
    mapSchema(schema, {
        [MapperKind.OBJECT_TYPE]: type => {
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
export function modifyObjectFields(schema, typeName, testFn, newFields) {
    const removedFields = {};
    const newSchema = mapSchema(schema, {
        [MapperKind.OBJECT_TYPE]: type => {
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
                return correctASTNodes(new GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap,
                }));
            }
        },
    });
    return [newSchema, removedFields];
}
