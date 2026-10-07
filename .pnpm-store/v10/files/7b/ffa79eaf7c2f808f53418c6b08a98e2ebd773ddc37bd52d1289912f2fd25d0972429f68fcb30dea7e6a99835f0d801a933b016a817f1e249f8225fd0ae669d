"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBigintDef = void 0;
const errorMessages_js_1 = require("../errorMessages.js");
function parseBigintDef(def, refs) {
    const res = {
        type: "integer",
        format: "int64",
    };
    if (!def.checks)
        return res;
    for (const check of def.checks) {
        switch (check.kind) {
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minimum", check.value, check.message, refs);
                    }
                    else {
                        (0, errorMessages_js_1.setResponseValueAndErrors)(res, "exclusiveMinimum", check.value, check.message, refs);
                    }
                }
                else {
                    if (!check.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minimum", check.value, check.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maximum", check.value, check.message, refs);
                    }
                    else {
                        (0, errorMessages_js_1.setResponseValueAndErrors)(res, "exclusiveMaximum", check.value, check.message, refs);
                    }
                }
                else {
                    if (!check.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maximum", check.value, check.message, refs);
                }
                break;
            case "multipleOf":
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "multipleOf", check.value, check.message, refs);
                break;
        }
    }
    return res;
}
exports.parseBigintDef = parseBigintDef;
