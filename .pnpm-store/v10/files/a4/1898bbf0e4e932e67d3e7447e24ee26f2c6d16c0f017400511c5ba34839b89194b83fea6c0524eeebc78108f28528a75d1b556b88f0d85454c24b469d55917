"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceContainsTypeQuery = referenceContainsTypeQuery;
const utils_1 = require("@typescript-eslint/utils");
/**
 * Recursively checks whether a given reference has a type query declaration among its parents
 */
function referenceContainsTypeQuery(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSTypeQuery:
            return true;
        case utils_1.AST_NODE_TYPES.TSQualifiedName:
        case utils_1.AST_NODE_TYPES.Identifier:
            return referenceContainsTypeQuery(node.parent);
        default:
            // if we find a different node, there's no chance that we're in a TSTypeQuery
            return false;
    }
}
//# sourceMappingURL=referenceContainsTypeQuery.js.map