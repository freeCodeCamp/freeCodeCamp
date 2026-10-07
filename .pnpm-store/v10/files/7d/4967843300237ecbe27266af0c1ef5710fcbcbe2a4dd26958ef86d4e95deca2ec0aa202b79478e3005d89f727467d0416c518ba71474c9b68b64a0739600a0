"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNodeEqual = isNodeEqual;
const utils_1 = require("@typescript-eslint/utils");
function isNodeEqual(a, b) {
    if (a.type !== b.type) {
        return false;
    }
    if (a.type === utils_1.AST_NODE_TYPES.ThisExpression &&
        b.type === utils_1.AST_NODE_TYPES.ThisExpression) {
        return true;
    }
    if (a.type === utils_1.AST_NODE_TYPES.Literal && b.type === utils_1.AST_NODE_TYPES.Literal) {
        return a.value === b.value;
    }
    if (a.type === utils_1.AST_NODE_TYPES.Identifier &&
        b.type === utils_1.AST_NODE_TYPES.Identifier) {
        return a.name === b.name;
    }
    if (a.type === utils_1.AST_NODE_TYPES.MemberExpression &&
        b.type === utils_1.AST_NODE_TYPES.MemberExpression) {
        return (isNodeEqual(a.property, b.property) && isNodeEqual(a.object, b.object));
    }
    return false;
}
//# sourceMappingURL=isNodeEqual.js.map