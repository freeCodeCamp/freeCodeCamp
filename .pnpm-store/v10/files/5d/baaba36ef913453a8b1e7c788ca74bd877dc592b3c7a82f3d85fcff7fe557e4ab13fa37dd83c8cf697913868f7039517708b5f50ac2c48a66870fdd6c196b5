"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachField = void 0;
const graphql_1 = require("graphql");
function forEachField(schema, fn) {
    const typeMap = schema.getTypeMap();
    for (const typeName in typeMap) {
        const type = typeMap[typeName];
        // TODO: maybe have an option to include these?
        if (!(0, graphql_1.getNamedType)(type).name.startsWith('__') && (0, graphql_1.isObjectType)(type)) {
            const fields = type.getFields();
            for (const fieldName in fields) {
                const field = fields[fieldName];
                fn(field, typeName, fieldName);
            }
        }
    }
}
exports.forEachField = forEachField;
