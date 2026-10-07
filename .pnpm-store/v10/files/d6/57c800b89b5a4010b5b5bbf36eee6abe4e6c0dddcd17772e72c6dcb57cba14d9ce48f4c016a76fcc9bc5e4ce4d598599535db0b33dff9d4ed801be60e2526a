"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceContainsTypePredicate = referenceContainsTypePredicate;
const utils_1 = require("@typescript-eslint/utils");
/**
 * Recursively checks whether a given reference is used in a type predicate (e.g., `arg is string`)
 */
function referenceContainsTypePredicate(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSTypePredicate:
            return true;
        case utils_1.AST_NODE_TYPES.TSQualifiedName:
        case utils_1.AST_NODE_TYPES.Identifier:
            return referenceContainsTypePredicate(node.parent);
        default:
            return false;
    }
}
//# sourceMappingURL=referenceContainsTypePredicate.js.map