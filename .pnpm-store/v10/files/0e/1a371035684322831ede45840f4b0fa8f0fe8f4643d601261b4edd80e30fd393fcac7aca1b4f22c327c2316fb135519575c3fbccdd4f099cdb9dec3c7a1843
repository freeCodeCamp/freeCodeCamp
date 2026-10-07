import { safeMapGet, safeMapSet } from '../../../utils/globals.js';
const depthContextCache = new Map();
export function getDepthContextFor(contextMeta) {
    if (contextMeta === undefined) {
        return { depth: 0 };
    }
    if (typeof contextMeta !== 'string') {
        return contextMeta;
    }
    const cachedContext = safeMapGet(depthContextCache, contextMeta);
    if (cachedContext !== undefined) {
        return cachedContext;
    }
    const context = { depth: 0 };
    safeMapSet(depthContextCache, contextMeta, context);
    return context;
}
export function createDepthIdentifier() {
    const identifier = { depth: 0 };
    return identifier;
}
