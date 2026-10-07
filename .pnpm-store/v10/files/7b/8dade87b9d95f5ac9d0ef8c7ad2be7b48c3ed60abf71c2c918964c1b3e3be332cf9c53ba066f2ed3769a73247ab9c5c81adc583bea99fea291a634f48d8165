"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentFunctionNode = getParentFunctionNode;
const utils_1 = require("@typescript-eslint/utils");
function getParentFunctionNode(node) {
    let current = node.parent;
    while (current) {
        if (current.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
            current.type === utils_1.AST_NODE_TYPES.FunctionDeclaration ||
            current.type === utils_1.AST_NODE_TYPES.FunctionExpression) {
            return current;
        }
        current = current.parent;
    }
    // this shouldn't happen in correct code, but someone may attempt to parse bad code
    // the parser won't error, so we shouldn't throw here
    /* istanbul ignore next */ return null;
}
//# sourceMappingURL=getParentFunctionNode.js.map