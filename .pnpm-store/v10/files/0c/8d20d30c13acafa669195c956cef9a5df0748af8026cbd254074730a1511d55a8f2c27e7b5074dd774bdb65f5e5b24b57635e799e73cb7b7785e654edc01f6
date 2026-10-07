"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseThenCall = parseThenCall;
exports.parseCatchCall = parseCatchCall;
exports.parseFinallyCall = parseFinallyCall;
const utils_1 = require("@typescript-eslint/utils");
const misc_1 = require("./misc");
/**
 * Parses a syntactically possible `Promise.then()` call. Does not check the
 * type of the callee.
 */
function parseThenCall(node, context) {
    if (node.callee.type === utils_1.AST_NODE_TYPES.MemberExpression) {
        const methodName = (0, misc_1.getStaticMemberAccessValue)(node.callee, context);
        if (methodName === 'then') {
            if (node.arguments.length >= 1) {
                if (node.arguments[0].type === utils_1.AST_NODE_TYPES.SpreadElement) {
                    return {
                        object: node.callee.object,
                    };
                }
                if (node.arguments.length >= 2) {
                    if (node.arguments[1].type === utils_1.AST_NODE_TYPES.SpreadElement) {
                        return {
                            object: node.callee.object,
                            onFulfilled: node.arguments[0],
                        };
                    }
                    return {
                        object: node.callee.object,
                        onFulfilled: node.arguments[0],
                        onRejected: node.arguments[1],
                    };
                }
                return {
                    object: node.callee.object,
                    onFulfilled: node.arguments[0],
                };
            }
            return {
                object: node.callee.object,
            };
        }
    }
    return undefined;
}
/**
 * Parses a syntactically possible `Promise.catch()` call. Does not check the
 * type of the callee.
 */
function parseCatchCall(node, context) {
    if (node.callee.type === utils_1.AST_NODE_TYPES.MemberExpression) {
        const methodName = (0, misc_1.getStaticMemberAccessValue)(node.callee, context);
        if (methodName === 'catch') {
            if (node.arguments.length >= 1) {
                if (node.arguments[0].type === utils_1.AST_NODE_TYPES.SpreadElement) {
                    return {
                        object: node.callee.object,
                    };
                }
                return {
                    object: node.callee.object,
                    onRejected: node.arguments[0],
                };
            }
            return {
                object: node.callee.object,
            };
        }
    }
    return undefined;
}
/**
 * Parses a syntactically possible `Promise.finally()` call. Does not check the
 * type of the callee.
 */
function parseFinallyCall(node, context) {
    if (node.callee.type === utils_1.AST_NODE_TYPES.MemberExpression) {
        const methodName = (0, misc_1.getStaticMemberAccessValue)(node.callee, context);
        if (methodName === 'finally') {
            if (node.arguments.length >= 1) {
                if (node.arguments[0].type === utils_1.AST_NODE_TYPES.SpreadElement) {
                    return {
                        object: node.callee.object,
                    };
                }
                return {
                    object: node.callee.object,
                    onFinally: node.arguments[0],
                };
            }
            return {
                object: node.callee.object,
            };
        }
    }
    return undefined;
}
//# sourceMappingURL=promiseUtils.js.map