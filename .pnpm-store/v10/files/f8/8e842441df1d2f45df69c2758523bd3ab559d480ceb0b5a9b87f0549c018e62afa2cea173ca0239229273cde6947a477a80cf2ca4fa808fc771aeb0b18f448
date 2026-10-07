"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForStatementHeadLoc = getForStatementHeadLoc;
const eslint_utils_1 = require("@typescript-eslint/utils/eslint-utils");
/**
 * Gets the location of the head of the given for statement variant for reporting.
 *
 * - `for (const foo in bar) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^
 *
 * - `for (const foo of bar) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^
 *
 * - `for await (const foo of bar) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *
 * - `for (let i = 0; i < 10; i++) expressionOrBlock`
 *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
function getForStatementHeadLoc(sourceCode, node) {
    const closingParens = (0, eslint_utils_1.nullThrows)(sourceCode.getTokenBefore(node.body, token => token.value === ')'), 'for statement must have a closing parenthesis.');
    return {
        end: structuredClone(closingParens.loc.end),
        start: structuredClone(node.loc.start),
    };
}
//# sourceMappingURL=getForStatementHeadLoc.js.map