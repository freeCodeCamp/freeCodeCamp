"use strict";
// adapted from https://github.com/eslint/eslint/blob/5bdaae205c3a0089ea338b382df59e21d5b06436/lib/rules/utils/ast-utils.js#L1668-L1787
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionHeadLoc = getFunctionHeadLoc;
const utils_1 = require("@typescript-eslint/utils");
const astUtils_1 = require("./astUtils");
/**
 * Gets the `(` token of the given function node.
 * @param node The function node to get.
 * @param sourceCode The source code object to get tokens.
 * @returns `(` token.
 */
function getOpeningParenOfParams(node, sourceCode) {
    // If the node is an arrow function and doesn't have parens, this returns the identifier of the first param.
    if (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
        node.params.length === 1) {
        const argToken = utils_1.ESLintUtils.nullThrows(sourceCode.getFirstToken(node.params[0]), utils_1.ESLintUtils.NullThrowsReasons.MissingToken('parameter', 'arrow function'));
        const maybeParenToken = sourceCode.getTokenBefore(argToken);
        return maybeParenToken && (0, astUtils_1.isOpeningParenToken)(maybeParenToken)
            ? maybeParenToken
            : argToken;
    }
    // Otherwise, returns paren.
    return node.id != null
        ? utils_1.ESLintUtils.nullThrows(sourceCode.getTokenAfter(node.id, astUtils_1.isOpeningParenToken), utils_1.ESLintUtils.NullThrowsReasons.MissingToken('id', 'function'))
        : utils_1.ESLintUtils.nullThrows(sourceCode.getFirstToken(node, astUtils_1.isOpeningParenToken), utils_1.ESLintUtils.NullThrowsReasons.MissingToken('opening parenthesis', 'function'));
}
/**
 * Gets the location of the given function node for reporting.
 *
 * - `function foo() {}`
 *    ^^^^^^^^^^^^
 * - `(function foo() {})`
 *     ^^^^^^^^^^^^
 * - `(function() {})`
 *     ^^^^^^^^
 * - `function* foo() {}`
 *    ^^^^^^^^^^^^^
 * - `(function* foo() {})`
 *     ^^^^^^^^^^^^^
 * - `(function*() {})`
 *     ^^^^^^^^^
 * - `() => {}`
 *       ^^
 * - `async () => {}`
 *             ^^
 * - `({ foo: function foo() {} })`
 *       ^^^^^^^^^^^^^^^^^
 * - `({ foo: function() {} })`
 *       ^^^^^^^^^^^^^
 * - `({ ['foo']: function() {} })`
 *       ^^^^^^^^^^^^^^^^^
 * - `({ [foo]: function() {} })`
 *       ^^^^^^^^^^^^^^^
 * - `({ foo() {} })`
 *       ^^^
 * - `({ foo: function* foo() {} })`
 *       ^^^^^^^^^^^^^^^^^^
 * - `({ foo: function*() {} })`
 *       ^^^^^^^^^^^^^^
 * - `({ ['foo']: function*() {} })`
 *       ^^^^^^^^^^^^^^^^^^
 * - `({ [foo]: function*() {} })`
 *       ^^^^^^^^^^^^^^^^
 * - `({ *foo() {} })`
 *       ^^^^
 * - `({ foo: async function foo() {} })`
 *       ^^^^^^^^^^^^^^^^^^^^^^^
 * - `({ foo: async function() {} })`
 *       ^^^^^^^^^^^^^^^^^^^
 * - `({ ['foo']: async function() {} })`
 *       ^^^^^^^^^^^^^^^^^^^^^^^
 * - `({ [foo]: async function() {} })`
 *       ^^^^^^^^^^^^^^^^^^^^^
 * - `({ async foo() {} })`
 *       ^^^^^^^^^
 * - `({ get foo() {} })`
 *       ^^^^^^^
 * - `({ set foo(a) {} })`
 *       ^^^^^^^
 * - `class A { constructor() {} }`
 *              ^^^^^^^^^^^
 * - `class A { foo() {} }`
 *              ^^^
 * - `class A { *foo() {} }`
 *              ^^^^
 * - `class A { async foo() {} }`
 *              ^^^^^^^^^
 * - `class A { ['foo']() {} }`
 *              ^^^^^^^
 * - `class A { *['foo']() {} }`
 *              ^^^^^^^^
 * - `class A { async ['foo']() {} }`
 *              ^^^^^^^^^^^^^
 * - `class A { [foo]() {} }`
 *              ^^^^^
 * - `class A { *[foo]() {} }`
 *              ^^^^^^
 * - `class A { async [foo]() {} }`
 *              ^^^^^^^^^^^
 * - `class A { get foo() {} }`
 *              ^^^^^^^
 * - `class A { set foo(a) {} }`
 *              ^^^^^^^
 * - `class A { static foo() {} }`
 *              ^^^^^^^^^^
 * - `class A { static *foo() {} }`
 *              ^^^^^^^^^^^
 * - `class A { static async foo() {} }`
 *              ^^^^^^^^^^^^^^^^
 * - `class A { static get foo() {} }`
 *              ^^^^^^^^^^^^^^
 * - `class A { static set foo(a) {} }`
 *              ^^^^^^^^^^^^^^
 * - `class A { foo = function() {} }`
 *              ^^^^^^^^^^^^^^
 * - `class A { static foo = function() {} }`
 *              ^^^^^^^^^^^^^^^^^^^^^
 * - `class A { foo = (a, b) => {} }`
 *              ^^^^^^
 * @param node The function node to get.
 * @param sourceCode The source code object to get tokens.
 * @returns The location of the function node for reporting.
 */
function getFunctionHeadLoc(node, sourceCode) {
    const parent = node.parent;
    let start;
    let end;
    if (parent.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
        parent.type === utils_1.AST_NODE_TYPES.PropertyDefinition) {
        // the decorator's range is included within the member
        // however it's usually irrelevant to the member itself - so we don't want
        // to highlight it ever.
        if (parent.decorators.length > 0) {
            const lastDecorator = parent.decorators[parent.decorators.length - 1];
            const firstTokenAfterDecorator = utils_1.ESLintUtils.nullThrows(sourceCode.getTokenAfter(lastDecorator), utils_1.ESLintUtils.NullThrowsReasons.MissingToken('modifier or member name', 'class member'));
            start = firstTokenAfterDecorator.loc.start;
        }
        else {
            start = parent.loc.start;
        }
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
    }
    else if (parent.type === utils_1.AST_NODE_TYPES.Property) {
        start = parent.loc.start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
    }
    else if (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
        const arrowToken = utils_1.ESLintUtils.nullThrows(sourceCode.getTokenBefore(node.body, astUtils_1.isArrowToken), utils_1.ESLintUtils.NullThrowsReasons.MissingToken('arrow token', 'arrow function'));
        start = arrowToken.loc.start;
        end = arrowToken.loc.end;
    }
    else {
        start = node.loc.start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
    }
    return {
        end: { ...end },
        start: { ...start },
    };
}
//# sourceMappingURL=getFunctionHeadLoc.js.map