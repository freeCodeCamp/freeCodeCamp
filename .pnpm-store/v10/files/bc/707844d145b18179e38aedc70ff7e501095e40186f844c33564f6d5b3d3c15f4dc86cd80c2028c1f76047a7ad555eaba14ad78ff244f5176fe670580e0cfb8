"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInputValueLiteral = exports.parseInputValue = exports.serializeInputValue = exports.transformInputValue = void 0;
const graphql_1 = require("graphql");
const helpers_js_1 = require("./helpers.js");
function transformInputValue(type, value, inputLeafValueTransformer = null, inputObjectValueTransformer = null) {
    if (value == null) {
        return value;
    }
    const nullableType = (0, graphql_1.getNullableType)(type);
    if ((0, graphql_1.isLeafType)(nullableType)) {
        return inputLeafValueTransformer != null ? inputLeafValueTransformer(nullableType, value) : value;
    }
    else if ((0, graphql_1.isListType)(nullableType)) {
        return (0, helpers_js_1.asArray)(value).map((listMember) => transformInputValue(nullableType.ofType, listMember, inputLeafValueTransformer, inputObjectValueTransformer));
    }
    else if ((0, graphql_1.isInputObjectType)(nullableType)) {
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
exports.transformInputValue = transformInputValue;
function serializeInputValue(type, value) {
    return transformInputValue(type, value, (t, v) => {
        try {
            return t.serialize(v);
        }
        catch (_a) {
            return v;
        }
    });
}
exports.serializeInputValue = serializeInputValue;
function parseInputValue(type, value) {
    return transformInputValue(type, value, (t, v) => {
        try {
            return t.parseValue(v);
        }
        catch (_a) {
            return v;
        }
    });
}
exports.parseInputValue = parseInputValue;
function parseInputValueLiteral(type, value) {
    return transformInputValue(type, value, (t, v) => t.parseLiteral(v, {}));
}
exports.parseInputValueLiteral = parseInputValueLiteral;
