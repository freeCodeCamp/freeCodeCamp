import type * as TSESLint from '../../ts-eslint';
import type { TSESTree } from '../../ts-estree';
/**
 * Get the proper location of a given function node to report.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getfunctionheadlocation}
 */
export declare const getFunctionHeadLocation: (node: TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclaration | TSESTree.FunctionExpression, sourceCode: TSESLint.SourceCode) => TSESTree.SourceLocation;
/**
 * Get the name and kind of a given function node.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getfunctionnamewithkind}
 */
export declare const getFunctionNameWithKind: (node: TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclaration | TSESTree.FunctionExpression, sourceCode?: TSESLint.SourceCode) => string;
/**
 * Get the property name of a given property node.
 * If the node is a computed property, this tries to compute the property name by the getStringIfConstant function.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getpropertyname}
 * @returns The property name of the node. If the property name is not constant then it returns `null`.
 */
export declare const getPropertyName: (node: TSESTree.MemberExpression | TSESTree.MethodDefinition | TSESTree.Property | TSESTree.PropertyDefinition, initialScope?: TSESLint.Scope.Scope) => string | null;
/**
 * Get the value of a given node if it can decide the value statically.
 * If the 2nd parameter `initialScope` was given, this function tries to resolve identifier references which are in the
 * given node as much as possible. In the resolving way, it does on the assumption that built-in global objects have
 * not been modified.
 * For example, it considers `Symbol.iterator`, `Symbol.for('k')`, ` String.raw``hello`` `, and `Object.freeze({a: 1}).a` as static, but `Symbol('k')` is not static.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getstaticvalue}
 * @returns The `{ value: any }` shaped object. The `value` property is the static value. If it couldn't compute the
 * static value of the node, it returns `null`.
 */
export declare const getStaticValue: (node: TSESTree.Node, initialScope?: TSESLint.Scope.Scope) => {
    value: unknown;
} | null;
/**
 * Get the string value of a given node.
 * This function is a tiny wrapper of the getStaticValue function.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getstringifconstant}
 */
export declare const getStringIfConstant: (node: TSESTree.Node, initialScope?: TSESLint.Scope.Scope) => string | null;
/**
 * Check whether a given node has any side effect or not.
 * The side effect means that it may modify a certain variable or object member. This function considers the node which
 * contains the following types as the node which has side effects:
 * - `AssignmentExpression`
 * - `AwaitExpression`
 * - `CallExpression`
 * - `ImportExpression`
 * - `NewExpression`
 * - `UnaryExpression([operator = "delete"])`
 * - `UpdateExpression`
 * - `YieldExpression`
 * - When `options.considerGetters` is `true`:
 *   - `MemberExpression`
 * - When `options.considerImplicitTypeConversion` is `true`:
 *   - `BinaryExpression([operator = "==" | "!=" | "<" | "<=" | ">" | ">=" | "<<" | ">>" | ">>>" | "+" | "-" | "*" | "/" | "%" | "|" | "^" | "&" | "in"])`
 *   - `MemberExpression([computed = true])`
 *   - `MethodDefinition([computed = true])`
 *   - `Property([computed = true])`
 *   - `UnaryExpression([operator = "-" | "+" | "!" | "~"])`
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#hassideeffect}
 */
export declare const hasSideEffect: (node: TSESTree.Node, sourceCode: TSESLint.SourceCode, options?: {
    considerGetters?: boolean;
    considerImplicitTypeConversion?: boolean;
}) => boolean;
export declare const isParenthesized: {
    (times: number, node: TSESTree.Node, sourceCode: TSESLint.SourceCode): boolean;
    /**
     * Check whether a given node is parenthesized or not.
     * This function detects it correctly even if it's parenthesized by specific syntax.
     *
     * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#isparenthesized}
     * @returns `true` if the node is parenthesized.
     * If `times` was given, it returns `true` only if the node is parenthesized the `times` times.
     * For example, `isParenthesized(2, node, sourceCode)` returns true for `((foo))`, but not for `(foo)`.
     */
    (node: TSESTree.Node, sourceCode: TSESLint.SourceCode): boolean;
};
