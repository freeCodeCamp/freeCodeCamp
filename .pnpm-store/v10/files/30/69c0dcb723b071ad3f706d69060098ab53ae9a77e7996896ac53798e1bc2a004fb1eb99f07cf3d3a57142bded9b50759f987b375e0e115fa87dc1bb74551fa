"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThisExpression = getThisExpression;
const utils_1 = require("@typescript-eslint/utils");
function getThisExpression(node) {
    while (true) {
        if (node.type === utils_1.AST_NODE_TYPES.CallExpression) {
            node = node.callee;
        }
        else if (node.type === utils_1.AST_NODE_TYPES.ThisExpression) {
            return node;
        }
        else if (node.type === utils_1.AST_NODE_TYPES.MemberExpression) {
            node = node.object;
        }
        else if (node.type === utils_1.AST_NODE_TYPES.ChainExpression) {
            node = node.expression;
        }
        else {
            break;
        }
    }
    return;
}
//# sourceMappingURL=getThisExpression.js.map