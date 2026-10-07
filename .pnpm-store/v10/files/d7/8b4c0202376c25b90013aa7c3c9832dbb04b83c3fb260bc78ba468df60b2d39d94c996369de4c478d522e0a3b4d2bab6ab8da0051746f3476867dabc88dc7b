import { getNullableType, isLeafType, isListType, isInputObjectType } from 'graphql';
import { asArray } from './helpers.js';
export function transformInputValue(type, value, inputLeafValueTransformer = null, inputObjectValueTransformer = null) {
    if (value == null) {
        return value;
    }
    const nullableType = getNullableType(type);
    if (isLeafType(nullableType)) {
        return inputLeafValueTransformer != null ? inputLeafValueTransformer(nullableType, value) : value;
    }
    else if (isListType(nullableType)) {
        return asArray(value).map((listMember) => transformInputValue(nullableType.ofType, listMember, inputLeafValueTransformer, inputObjectValueTransformer));
    }
    else if (isInputObjectType(nullableType)) {
        const fields = nullableType.getFields();
        const newValue = {};
        for (const key in value) {
            const field = fields[key];
            if (field != null) {
                newValue[key] = transformInputValue(field.type, value[key], inputLeafValueTransformer, inputObjectValueTransformer);
            }
        }
        return inputObjectValueTransformer != null ? inputObjectValueTransformer(nullableType, newValue) : newValue;
    }
    // unreachable, no other possible return value
}
export function serializeInputValue(type, value) {
    return transformInputValue(type, value, (t, v) => {
        try {
            return t.serialize(v);
        }
        catch (_a) {
            return v;
        }
    });
}
export function parseInputValue(type, value) {
    return transformInputValue(type, value, (t, v) => {
        try {
            return t.parseValue(v);
        }
        catch (_a) {
            return v;
        }
    });
}
export function parseInputValueLiteral(type, value) {
    return transformInputValue(type, value, (t, v) => t.parseLiteral(v, {}));
}
