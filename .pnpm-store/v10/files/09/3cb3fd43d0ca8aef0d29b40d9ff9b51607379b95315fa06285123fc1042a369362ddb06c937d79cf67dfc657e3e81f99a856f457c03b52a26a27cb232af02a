"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isParenthesized = exports.hasSideEffect = exports.getStringIfConstant = exports.getStaticValue = exports.getPropertyName = exports.getFunctionNameWithKind = exports.getFunctionHeadLocation = void 0;
const eslintUtils = __importStar(require("@eslint-community/eslint-utils"));
/**
 * Get the proper location of a given function node to report.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getfunctionheadlocation}
 */
const getFunctionHeadLocation = eslintUtils.getFunctionHeadLocation;
exports.getFunctionHeadLocation = getFunctionHeadLocation;
/**
 * Get the name and kind of a given function node.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getfunctionnamewithkind}
 */
const getFunctionNameWithKind = eslintUtils.getFunctionNameWithKind;
exports.getFunctionNameWithKind = getFunctionNameWithKind;
/**
 * Get the property name of a given property node.
 * If the node is a computed property, this tries to compute the property name by the getStringIfConstant function.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getpropertyname}
 * @returns The property name of the node. If the property name is not constant then it returns `null`.
 */
const getPropertyName = eslintUtils.getPropertyName;
exports.getPropertyName = getPropertyName;
/**
 * Get the value of a given node if it can decide the value statically.
 * If the 2nd parameter `initialScope` was given, this function tries to resolve identifier references which are in the
 * given node as much as possible. In the resolving way, it does on the assumption that built-in global objects have
 * not been modified.
 * For example, it considers `Symbol.iterator`, ` String.raw``hello`` `, and `Object.freeze({a: 1}).a` as static.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getstaticvalue}
 * @returns The `{ value: any }` shaped object. The `value` property is the static value. If it couldn't compute the
 * static value of the node, it returns `null`.
 */
const getStaticValue = eslintUtils.getStaticValue;
exports.getStaticValue = getStaticValue;
/**
 * Get the string value of a given node.
 * This function is a tiny wrapper of the getStaticValue function.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/ast-utils.html#getstringifconstant}
 */
const getStringIfConstant = eslintUtils.getStringIfConstant;
exports.getStringIfConstant = getStringIfConstant;
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
const hasSideEffect = eslintUtils.hasSideEffect;
exports.hasSideEffect = hasSideEffect;
const isParenthesized = eslintUtils.isParenthesized;
exports.isParenthesized = isParenthesized;
//# sourceMappingURL=astUtilities.js.map