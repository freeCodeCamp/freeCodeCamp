"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepthContextFor = getDepthContextFor;
exports.createDepthIdentifier = createDepthIdentifier;
const globals_1 = require("../../../utils/globals");
const depthContextCache = new Map();
function getDepthContextFor(contextMeta) {
    if (contextMeta === undefined) {
        return { depth: 0 };
    }
    if (typeof contextMeta !== 'string') {
        return contextMeta;
    }
    const cachedContext = (0, globals_1.safeMapGet)(depthContextCache, contextMeta);
    if (cachedContext !== undefined) {
        return cachedContext;
    }
    const context = { depth: 0 };
    (0, globals_1.safeMapSet)(depthContextCache, contextMeta, context);
    return context;
}
function createDepthIdentifier() {
    const identifier = { depth: 0 };
    return identifier;
}
