"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThisExpression = void 0;
const utils_1 = require("@typescript-eslint/utils");
function getThisExpression(node) {
    while (node) {
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
exports.getThisExpression = getThisExpression;
//# sourceMappingURL=getThisExpression.js.map