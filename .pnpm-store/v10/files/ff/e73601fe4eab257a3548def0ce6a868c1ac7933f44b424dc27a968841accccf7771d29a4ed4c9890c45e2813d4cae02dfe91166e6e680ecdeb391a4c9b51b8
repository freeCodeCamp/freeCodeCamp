"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMapDef = void 0;
const parseDef_js_1 = require("../parseDef.js");
const record_js_1 = require("./record.js");
const any_js_1 = require("./any.js");
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return (0, record_js_1.parseRecordDef)(def, refs);
    }
    const keys = (0, parseDef_js_1.parseDef)(def.keyType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", "items", "0"],
    }) || (0, any_js_1.parseAnyDef)(refs);
    const values = (0, parseDef_js_1.parseDef)(def.valueType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", "items", "1"],
    }) || (0, any_js_1.parseAnyDef)(refs);
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [keys, values],
            minItems: 2,
            maxItems: 2,
        },
    };
}
exports.parseMapDef = parseMapDef;
