"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRecordDef = void 0;
const zod_1 = require("zod");
const parseDef_js_1 = require("../parseDef.js");
const string_js_1 = require("./string.js");
const branded_js_1 = require("./branded.js");
const any_js_1 = require("./any.js");
function parseRecordDef(def, refs) {
    if (refs.target === "openAi") {
        console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    }
    if (refs.target === "openApi3" &&
        def.keyType?._def.typeName === zod_1.ZodFirstPartyTypeKind.ZodEnum) {
        return {
            type: "object",
            required: def.keyType._def.values,
            properties: def.keyType._def.values.reduce((acc, key) => ({
                ...acc,
                [key]: (0, parseDef_js_1.parseDef)(def.valueType._def, {
                    ...refs,
                    currentPath: [...refs.currentPath, "properties", key],
                }) ?? (0, any_js_1.parseAnyDef)(refs),
            }), {}),
            additionalProperties: refs.rejectedAdditionalProperties,
        };
    }
    const schema = {
        type: "object",
        additionalProperties: (0, parseDef_js_1.parseDef)(def.valueType._def, {
            ...refs,
            currentPath: [...refs.currentPath, "additionalProperties"],
        }) ?? refs.allowedAdditionalProperties,
    };
    if (refs.target === "openApi3") {
        return schema;
    }
    if (def.keyType?._def.typeName === zod_1.ZodFirstPartyTypeKind.ZodString &&
        def.keyType._def.checks?.length) {
        const { type, ...keyType } = (0, string_js_1.parseStringDef)(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType,
        };
    }
    else if (def.keyType?._def.typeName === zod_1.ZodFirstPartyTypeKind.ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values,
            },
        };
    }
    else if (def.keyType?._def.typeName === zod_1.ZodFirstPartyTypeKind.ZodBranded &&
        def.keyType._def.type._def.typeName === zod_1.ZodFirstPartyTypeKind.ZodString &&
        def.keyType._def.type._def.checks?.length) {
        const { type, ...keyType } = (0, branded_js_1.parseBrandedDef)(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType,
        };
    }
    return schema;
}
exports.parseRecordDef = parseRecordDef;
