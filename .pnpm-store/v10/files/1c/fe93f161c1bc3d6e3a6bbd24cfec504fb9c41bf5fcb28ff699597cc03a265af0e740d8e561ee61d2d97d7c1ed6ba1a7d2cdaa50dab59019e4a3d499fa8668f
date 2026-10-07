"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNullableDef = void 0;
const parseDef_js_1 = require("../parseDef.js");
const union_js_1 = require("./union.js");
function parseNullableDef(def, refs) {
    if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) &&
        (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        if (refs.target === "openApi3") {
            return {
                type: union_js_1.primitiveMappings[def.innerType._def.typeName],
                nullable: true,
            };
        }
        return {
            type: [
                union_js_1.primitiveMappings[def.innerType._def.typeName],
                "null",
            ],
        };
    }
    if (refs.target === "openApi3") {
        const base = (0, parseDef_js_1.parseDef)(def.innerType._def, {
            ...refs,
            currentPath: [...refs.currentPath],
        });
        if (base && "$ref" in base)
            return { allOf: [base], nullable: true };
        return base && { ...base, nullable: true };
    }
    const base = (0, parseDef_js_1.parseDef)(def.innerType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "anyOf", "0"],
    });
    return base && { anyOf: [base, { type: "null" }] };
}
exports.parseNullableDef = parseNullableDef;
