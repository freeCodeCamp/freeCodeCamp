"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConstrainedTypeAtLocation = getConstrainedTypeAtLocation;
/**
 * Resolves the given node's type. Will return the type's generic constraint, if it has one.
 *
 * Warning - if the type is generic and does _not_ have a constraint, the type will be
 * returned as-is, rather than returning an `unknown` type. This can be checked
 * for by checking for the type flag ts.TypeFlags.TypeParameter.
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/10438
 */
function getConstrainedTypeAtLocation(services, node) {
    const nodeType = services.getTypeAtLocation(node);
    const constrained = services.program
        .getTypeChecker()
        .getBaseConstraintOfType(nodeType);
    return constrained ?? nodeType;
}
//# sourceMappingURL=getConstrainedTypeAtLocation.js.map