"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachDefaultValue = void 0;
const graphql_1 = require("graphql");
function forEachDefaultValue(schema, fn) {
    const typeMap = schema.getTypeMap();
    for (const typeName in typeMap) {
        const type = typeMap[typeName];
        if (!(0, graphql_1.getNamedType)(type).name.startsWith('__')) {
            if ((0, graphql_1.isObjectType)(type)) {
                const fields = type.getFields();
                for (const fieldName in fields) {
                    const field = fields[fieldName];
                    for (const arg of field.args) {
                        arg.defaultValue = fn(arg.type, arg.defaultValue);
                    }
                }
            }
            else if ((0, graphql_1.isInputObjectType)(type)) {
                const fields = type.getFields();
                for (const fieldName in fields) {
                    const field = fields[fieldName];
                    field.defaultValue = fn(field.type, field.defaultValue);
                }
            }
        }
    }
}
exports.forEachDefaultValue = forEachDefaultValue;
