"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReferenceToGlobalFunction = isReferenceToGlobalFunction;
function isReferenceToGlobalFunction(calleeName, node, sourceCode) {
    const ref = sourceCode
        .getScope(node)
        .references.find(ref => ref.identifier.name === calleeName);
    // ensure it's the "global" version
    return !ref?.resolved?.defs.length;
}
//# sourceMappingURL=scopeUtils.js.map