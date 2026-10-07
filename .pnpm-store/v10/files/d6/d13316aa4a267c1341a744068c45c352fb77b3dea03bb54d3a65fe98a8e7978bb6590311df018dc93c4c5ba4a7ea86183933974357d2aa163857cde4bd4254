"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePipelineDef = void 0;
const parseDef_js_1 = require("../parseDef.js");
const parsePipelineDef = (def, refs) => {
    if (refs.pipeStrategy === "input") {
        return (0, parseDef_js_1.parseDef)(def.in._def, refs);
    }
    else if (refs.pipeStrategy === "output") {
        return (0, parseDef_js_1.parseDef)(def.out._def, refs);
    }
    const a = (0, parseDef_js_1.parseDef)(def.in._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "0"],
    });
    const b = (0, parseDef_js_1.parseDef)(def.out._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"],
    });
    return {
        allOf: [a, b].filter((x) => x !== undefined),
    };
};
exports.parsePipelineDef = parsePipelineDef;
