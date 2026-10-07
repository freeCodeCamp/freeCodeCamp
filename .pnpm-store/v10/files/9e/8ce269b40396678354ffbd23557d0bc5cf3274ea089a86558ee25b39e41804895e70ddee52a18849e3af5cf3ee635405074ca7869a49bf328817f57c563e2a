"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptionalDef = void 0;
const parseDef_js_1 = require("../parseDef.js");
const any_js_1 = require("./any.js");
const parseOptionalDef = (def, refs) => {
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
        return (0, parseDef_js_1.parseDef)(def.innerType._def, refs);
    }
    const innerSchema = (0, parseDef_js_1.parseDef)(def.innerType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "anyOf", "1"],
    });
    return innerSchema
        ? {
            anyOf: [
                {
                    not: (0, any_js_1.parseAnyDef)(refs),
                },
                innerSchema,
            ],
        }
        : (0, any_js_1.parseAnyDef)(refs);
};
exports.parseOptionalDef = parseOptionalDef;
