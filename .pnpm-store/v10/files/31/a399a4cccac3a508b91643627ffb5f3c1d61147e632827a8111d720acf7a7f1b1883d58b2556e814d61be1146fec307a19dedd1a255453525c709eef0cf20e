"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConstrainedTypeAtLocation = void 0;
/**
 * Resolves the given node's type. Will resolve to the type's generic constraint, if it has one.
 */
function getConstrainedTypeAtLocation(checker, node) {
    const nodeType = checker.getTypeAtLocation(node);
    const constrained = checker.getBaseConstraintOfType(nodeType);
    return constrained !== null && constrained !== void 0 ? constrained : nodeType;
}
exports.getConstrainedTypeAtLocation = getConstrainedTypeAtLocation;
//# sourceMappingURL=getConstrainedTypeAtLocation.js.map