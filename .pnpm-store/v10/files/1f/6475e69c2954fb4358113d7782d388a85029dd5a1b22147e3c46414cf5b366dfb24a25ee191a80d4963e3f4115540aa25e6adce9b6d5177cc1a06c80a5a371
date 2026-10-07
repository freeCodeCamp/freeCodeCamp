import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
type FunctionNode = TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclaration | TSESTree.FunctionExpression;
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
export declare function getFunctionHeadLoc(node: FunctionNode, sourceCode: TSESLint.SourceCode): TSESTree.SourceLocation;
export {};
