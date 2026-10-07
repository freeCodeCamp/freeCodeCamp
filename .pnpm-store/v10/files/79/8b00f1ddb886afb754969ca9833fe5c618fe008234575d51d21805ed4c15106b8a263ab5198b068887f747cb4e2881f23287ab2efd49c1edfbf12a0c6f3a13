"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractExtensionsFromSchema = void 0;
const mapSchema_js_1 = require("./mapSchema.js");
const Interfaces_js_1 = require("./Interfaces.js");
function extractExtensionsFromSchema(schema) {
    const result = {
        schemaExtensions: schema.extensions || {},
        types: {},
    };
    (0, mapSchema_js_1.mapSchema)(schema, {
        [Interfaces_js_1.MapperKind.OBJECT_TYPE]: type => {
            result.types[type.name] = { fields: {}, type: 'object', extensions: type.extensions || {} };
            return type;
        },
        [Interfaces_js_1.MapperKind.INTERFACE_TYPE]: type => {
            result.types[type.name] = { fields: {}, type: 'interface', extensions: type.extensions || {} };
            return type;
        },
        [Interfaces_js_1.MapperKind.FIELD]: (field, fieldName, typeName) => {
            result.types[typeName].fields[fieldName] = {
                arguments: {},
                extensions: field.extensions || {},
            };
            const args = field.args;
            if (args != null) {
                for (const argName in args) {
                    result.types[typeName].fields[fieldName].arguments[argName] =
                        args[argName].extensions || {};
                }
            }
            return field;
        },
        [Interfaces_js_1.MapperKind.ENUM_TYPE]: type => {
            result.types[type.name] = { values: {}, type: 'enum', extensions: type.extensions || {} };
            return type;
        },
        [Interfaces_js_1.MapperKind.ENUM_VALUE]: (value, typeName, _schema, valueName) => {
            result.types[typeName].values[valueName] = value.extensions || {};
            return value;
        },
        [Interfaces_js_1.MapperKind.SCALAR_TYPE]: type => {
            result.types[type.name] = { type: 'scalar', extensions: type.extensions || {} };
            return type;
        },
        [Interfaces_js_1.MapperKind.UNION_TYPE]: type => {
            result.types[type.name] = { type: 'union', extensions: type.extensions || {} };
            return type;
        },
        [Interfaces_js_1.MapperKind.INPUT_OBJECT_TYPE]: type => {
            result.types[type.name] = { fields: {}, type: 'input', extensions: type.extensions || {} };
            return type;
        },
        [Interfaces_js_1.MapperKind.INPUT_OBJECT_FIELD]: (field, fieldName, typeName) => {
            result.types[typeName].fields[fieldName] = {
                extensions: field.extensions || {},
            };
            return field;
        },
    });
    return result;
}
exports.extractExtensionsFromSchema = extractExtensionsFromSchema;
