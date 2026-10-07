"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoop = exports.isImportKeyword = exports.isTypeKeyword = exports.isAwaitKeyword = exports.isAwaitExpression = exports.isIdentifier = exports.isConstructor = exports.isClassOrTypeElement = exports.isTSConstructorType = exports.isTSFunctionType = exports.isFunctionOrFunctionType = exports.isFunctionType = exports.isFunction = exports.isVariableDeclarator = exports.isTypeAssertion = exports.isLogicalOrOperator = exports.isOptionalCallExpression = exports.isNotNonNullAssertionPunctuator = exports.isNonNullAssertionPunctuator = exports.isNotOptionalChainPunctuator = exports.isOptionalChainPunctuator = void 0;
exports.isSetter = isSetter;
const ts_estree_1 = require("../ts-estree");
const helpers_1 = require("./helpers");
exports.isOptionalChainPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: '?.' });
exports.isNotOptionalChainPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: '?.' });
exports.isNonNullAssertionPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: '!' });
exports.isNotNonNullAssertionPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: '!' });
/**
 * Returns true if and only if the node represents: foo?.() or foo.bar?.()
 */
exports.isOptionalCallExpression = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.CallExpression, 
// this flag means the call expression itself is option
// i.e. it is foo.bar?.() and not foo?.bar()
{ optional: true });
/**
 * Returns true if and only if the node represents logical OR
 */
exports.isLogicalOrOperator = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.LogicalExpression, { operator: '||' });
/**
 * Checks if a node is a type assertion:
 * ```
 * x as foo
 * <foo>x
 * ```
 */
exports.isTypeAssertion = (0, helpers_1.isNodeOfTypes)([
    ts_estree_1.AST_NODE_TYPES.TSAsExpression,
    ts_estree_1.AST_NODE_TYPES.TSTypeAssertion,
]);
exports.isVariableDeclarator = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.VariableDeclarator);
const functionTypes = [
    ts_estree_1.AST_NODE_TYPES.ArrowFunctionExpression,
    ts_estree_1.AST_NODE_TYPES.FunctionDeclaration,
    ts_estree_1.AST_NODE_TYPES.FunctionExpression,
];
exports.isFunction = (0, helpers_1.isNodeOfTypes)(functionTypes);
const functionTypeTypes = [
    ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
    ts_estree_1.AST_NODE_TYPES.TSConstructorType,
    ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
    ts_estree_1.AST_NODE_TYPES.TSDeclareFunction,
    ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
    ts_estree_1.AST_NODE_TYPES.TSFunctionType,
    ts_estree_1.AST_NODE_TYPES.TSMethodSignature,
];
exports.isFunctionType = (0, helpers_1.isNodeOfTypes)(functionTypeTypes);
exports.isFunctionOrFunctionType = (0, helpers_1.isNodeOfTypes)([
    ...functionTypes,
    ...functionTypeTypes,
]);
exports.isTSFunctionType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSFunctionType);
exports.isTSConstructorType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSConstructorType);
exports.isClassOrTypeElement = (0, helpers_1.isNodeOfTypes)([
    // ClassElement
    ts_estree_1.AST_NODE_TYPES.PropertyDefinition,
    ts_estree_1.AST_NODE_TYPES.FunctionExpression,
    ts_estree_1.AST_NODE_TYPES.MethodDefinition,
    ts_estree_1.AST_NODE_TYPES.TSAbstractPropertyDefinition,
    ts_estree_1.AST_NODE_TYPES.TSAbstractMethodDefinition,
    ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
    ts_estree_1.AST_NODE_TYPES.TSIndexSignature,
    // TypeElement
    ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
    ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
    // AST_NODE_TYPES.TSIndexSignature,
    ts_estree_1.AST_NODE_TYPES.TSMethodSignature,
    ts_estree_1.AST_NODE_TYPES.TSPropertySignature,
]);
/**
 * Checks if a node is a constructor method.
 */
exports.isConstructor = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.MethodDefinition, { kind: 'constructor' });
/**
 * Checks if a node is a setter method.
 */
function isSetter(node) {
    return (!!node &&
        (node.type === ts_estree_1.AST_NODE_TYPES.MethodDefinition ||
            node.type === ts_estree_1.AST_NODE_TYPES.Property) &&
        node.kind === 'set');
}
exports.isIdentifier = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.Identifier);
/**
 * Checks if a node represents an `await …` expression.
 */
exports.isAwaitExpression = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.AwaitExpression);
/**
 * Checks if a possible token is the `await` keyword.
 */
exports.isAwaitKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, { value: 'await' });
/**
 * Checks if a possible token is the `type` keyword.
 */
exports.isTypeKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, { value: 'type' });
/**
 * Checks if a possible token is the `import` keyword.
 */
exports.isImportKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Keyword, { value: 'import' });
exports.isLoop = (0, helpers_1.isNodeOfTypes)([
    ts_estree_1.AST_NODE_TYPES.DoWhileStatement,
    ts_estree_1.AST_NODE_TYPES.ForStatement,
    ts_estree_1.AST_NODE_TYPES.ForInStatement,
    ts_estree_1.AST_NODE_TYPES.ForOfStatement,
    ts_estree_1.AST_NODE_TYPES.WhileStatement,
]);
