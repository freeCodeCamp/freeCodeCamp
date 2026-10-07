"use strict";
// adapted from https://github.com/eslint/eslint/blob/5bdaae205c3a0089ea338b382df59e21d5b06436/lib/rules/utils/ast-utils.js#L191-L230
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticStringValue = getStaticStringValue;
const utils_1 = require("@typescript-eslint/utils");
const isNullLiteral_1 = require("./isNullLiteral");
/**
 * Returns the result of the string conversion applied to the evaluated value of the given expression node,
 * if it can be determined statically.
 *
 * This function returns a `string` value for all `Literal` nodes and simple `TemplateLiteral` nodes only.
 * In all other cases, this function returns `null`.
 * @param node Expression node.
 * @returns String value if it can be determined. Otherwise, `null`.
 */
function getStaticStringValue(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.Literal:
            // eslint-disable-next-line eqeqeq, @typescript-eslint/internal/eqeq-nullish -- intentional strict comparison for literal value
            if (node.value === null) {
                if ((0, isNullLiteral_1.isNullLiteral)(node)) {
                    return String(node.value); // "null"
                }
                if ('regex' in node) {
                    return `/${node.regex.pattern}/${node.regex.flags}`;
                }
                if ('bigint' in node) {
                    return node.bigint;
                }
                // Otherwise, this is an unknown literal. The function will return null.
            }
            else {
                return String(node.value);
            }
            break;
        case utils_1.AST_NODE_TYPES.TemplateLiteral:
            if (node.expressions.length === 0 && node.quasis.length === 1) {
                return node.quasis[0].value.cooked;
            }
            break;
        // no default
    }
    return null;
}
//# sourceMappingURL=getStaticStringValue.js.map