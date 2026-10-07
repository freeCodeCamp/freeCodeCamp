"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromiseAggregatorMethod = isPromiseAggregatorMethod;
const type_utils_1 = require("@typescript-eslint/type-utils");
const utils_1 = require("@typescript-eslint/utils");
const misc_1 = require("./misc");
const PROMISE_CONSTRUCTOR_ARRAY_METHODS = new Set([
    'all',
    'allSettled',
    'race',
    'any',
]);
function isPromiseAggregatorMethod(context, services, node) {
    if (node.callee.type !== utils_1.AST_NODE_TYPES.MemberExpression) {
        return false;
    }
    const staticAccessValue = (0, misc_1.getStaticMemberAccessValue)(node.callee, context);
    if (!PROMISE_CONSTRUCTOR_ARRAY_METHODS.has(staticAccessValue)) {
        return false;
    }
    return (0, type_utils_1.isPromiseConstructorLike)(services.program, (0, type_utils_1.getConstrainedTypeAtLocation)(services, node.callee.object));
}
//# sourceMappingURL=isPromiseAggregatorMethod.js.map