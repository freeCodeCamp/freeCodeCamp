"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAnyDef = void 0;
const getRelativePath_js_1 = require("../getRelativePath.js");
function parseAnyDef(refs) {
    if (refs.target !== "openAi") {
        return {};
    }
    const anyDefinitionPath = [
        ...refs.basePath,
        refs.definitionPath,
        refs.openAiAnyTypeName,
    ];
    refs.flags.hasReferencedOpenAiAnyType = true;
    return {
        $ref: refs.$refStrategy === "relative"
            ? (0, getRelativePath_js_1.getRelativePath)(anyDefinitionPath, refs.currentPath)
            : anyDefinitionPath.join("/"),
    };
}
exports.parseAnyDef = parseAnyDef;
