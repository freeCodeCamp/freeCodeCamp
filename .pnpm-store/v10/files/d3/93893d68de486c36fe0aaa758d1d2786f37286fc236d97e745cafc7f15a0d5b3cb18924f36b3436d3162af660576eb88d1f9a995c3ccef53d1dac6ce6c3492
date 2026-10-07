import { getNamedType, isObjectType, isInputObjectType } from 'graphql';
export function forEachDefaultValue(schema, fn) {
    const typeMap = schema.getTypeMap();
    for (const typeName in typeMap) {
        const type = typeMap[typeName];
        if (!getNamedType(type).name.startsWith('__')) {
            if (isObjectType(type)) {
                const fields = type.getFields();
                for (const fieldName in fields) {
                    const field = fields[fieldName];
                    for (const arg of field.args) {
                        arg.defaultValue = fn(arg.type, arg.defaultValue);
                    }
                }
            }
            else if (isInputObjectType(type)) {
                const fields = type.getFields();
                for (const fieldName in fields) {
                    const field = fields[fieldName];
                    field.defaultValue = fn(field.type, field.defaultValue);
                }
            }
        }
    }
}
