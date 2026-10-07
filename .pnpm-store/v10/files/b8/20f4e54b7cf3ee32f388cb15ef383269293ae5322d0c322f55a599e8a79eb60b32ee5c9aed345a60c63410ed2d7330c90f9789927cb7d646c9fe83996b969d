"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionHeadLoc = void 0;
const utils_1 = require("@typescript-eslint/utils");
/**
 * Creates a report location for the given function.
 * The location only encompasses the "start" of the function, and not the body
 *
 * eg.
 *
 * ```
 * function foo(args) {}
 * ^^^^^^^^^^^^^^^^^^
 *
 * get y(args) {}
 * ^^^^^^^^^^^
 *
 * const x = (args) => {}
 *           ^^^^^^^^^
 * ```
 */
function getFunctionHeadLoc(node, sourceCode) {
    function getLocStart() {
        if (node.parent && node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition) {
            // return the start location for class method
            if (node.parent.decorators && node.parent.decorators.length > 0) {
                // exclude decorators
                return sourceCode.getTokenAfter(node.parent.decorators[node.parent.decorators.length - 1]).loc.start;
            }
            return node.parent.loc.start;
        }
        if (node.parent &&
            node.parent.type === utils_1.AST_NODE_TYPES.Property &&
            node.parent.method) {
            // return the start location for object method shorthand
            return node.parent.loc.start;
        }
        // return the start location for a regular function
        return node.loc.start;
    }
    function getLocEnd() {
        if (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
            // find the end location for arrow function expression
            return sourceCode.getTokenBefore(node.body, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator && token.value === '=>').loc.end;
        }
        // return the end location for a regular function
        return sourceCode.getTokenBefore(node.body).loc.end;
    }
    return {
        start: getLocStart(),
        end: getLocEnd(),
    };
}
exports.getFunctionHeadLoc = getFunctionHeadLoc;
//# sourceMappingURL=getFunctionHeadLoc.js.map