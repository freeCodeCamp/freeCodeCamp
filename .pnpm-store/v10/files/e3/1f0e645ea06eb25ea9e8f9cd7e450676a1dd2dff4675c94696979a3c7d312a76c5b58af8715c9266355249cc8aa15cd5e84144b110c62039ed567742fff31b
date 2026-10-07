"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyExtensions = exports.mergeExtensions = exports.extractExtensionsFromSchema = void 0;
const utils_1 = require("@graphql-tools/utils");
var utils_2 = require("@graphql-tools/utils");
Object.defineProperty(exports, "extractExtensionsFromSchema", { enumerable: true, get: function () { return utils_2.extractExtensionsFromSchema; } });
function mergeExtensions(extensions) {
    return (0, utils_1.mergeDeep)(extensions);
}
exports.mergeExtensions = mergeExtensions;
function applyExtensionObject(obj, extensions) {
    if (!obj) {
        return;
    }
    obj.extensions = (0, utils_1.mergeDeep)([obj.extensions || {}, extensions || {}]);
}
function applyExtensions(schema, extensions) {
    applyExtensionObject(schema, extensions.schemaExtensions);
    for (const [typeName, data] of Object.entries(extensions.types || {})) {
        const type = schema.getType(typeName);
        if (type) {
            applyExtensionObject(type, data.extensions);
            if (data.type === 'object' || data.type === 'interface') {
                for (const [fieldName, fieldData] of Object.entries(data.fields)) {
                    const field = type.getFields()[fieldName];
                    if (field) {
                        applyExtensionObject(field, fieldData.extensions);
                        for (const [arg, argData] of Object.entries(fieldData.arguments)) {
                            applyExtensionObject(field.args.find(a => a.name === arg), argData);
                        }
                    }
                }
            }
            else if (data.type === 'input') {
                for (const [fieldName, fieldData] of Object.entries(data.fields)) {
                    const field = type.getFields()[fieldName];
                    applyExtensionObject(field, fieldData.extensions);
                }
            }
            else if (data.type === 'enum') {
                for (const [valueName, valueData] of Object.entries(data.values)) {
                    const value = type.getValue(valueName);
                    applyExtensionObject(value, valueData);
                }
            }
        }
    }
    return schema;
}
exports.applyExtensions = applyExtensions;
