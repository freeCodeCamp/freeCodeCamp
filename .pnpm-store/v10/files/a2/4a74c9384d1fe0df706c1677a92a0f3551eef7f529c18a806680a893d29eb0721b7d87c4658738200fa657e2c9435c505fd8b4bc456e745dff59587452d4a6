"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEffectsDef = void 0;
const parseDef_js_1 = require("../parseDef.js");
const any_js_1 = require("./any.js");
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input"
        ? (0, parseDef_js_1.parseDef)(_def.schema._def, refs)
        : (0, any_js_1.parseAnyDef)(refs);
}
exports.parseEffectsDef = parseEffectsDef;
