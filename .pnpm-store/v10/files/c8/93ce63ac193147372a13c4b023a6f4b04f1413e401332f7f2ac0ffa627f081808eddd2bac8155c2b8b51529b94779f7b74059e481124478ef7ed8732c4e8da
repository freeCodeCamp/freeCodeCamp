"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesImmediatelyReturnFunctionExpression = doesImmediatelyReturnFunctionExpression;
exports.isTypedFunctionExpression = isTypedFunctionExpression;
exports.isValidFunctionExpressionReturnType = isValidFunctionExpressionReturnType;
exports.checkFunctionReturnType = checkFunctionReturnType;
exports.checkFunctionExpressionReturnType = checkFunctionExpressionReturnType;
exports.ancestorHasReturnType = ancestorHasReturnType;
const utils_1 = require("@typescript-eslint/utils");
const astUtils_1 = require("./astUtils");
const getFunctionHeadLoc_1 = require("./getFunctionHeadLoc");
/**
 * Checks if a node is a variable declarator with a type annotation.
 * ```
 * const x: Foo = ...
 * ```
 */
function isVariableDeclaratorWithTypeAnnotation(node) {
    return (node.type === utils_1.AST_NODE_TYPES.VariableDeclarator && !!node.id.typeAnnotation);
}
/**
 * Checks if a node is a class property with a type annotation.
 * ```
 * public x: Foo = ...
 * ```
 */
function isPropertyDefinitionWithTypeAnnotation(node) {
    return (node.type === utils_1.AST_NODE_TYPES.PropertyDefinition && !!node.typeAnnotation);
}
/**
 * Checks if a node belongs to:
 * ```
 * foo(() => 1)
 * ```
 */
function isFunctionArgument(parent, callee) {
    return (parent.type === utils_1.AST_NODE_TYPES.CallExpression &&
        // make sure this isn't an IIFE
        parent.callee !== callee);
}
/**
 * Checks if a node is type-constrained in JSX
 * ```
 * <Foo x={() => {}} />
 * <Bar>{() => {}}</Bar>
 * <Baz {...props} />
 * ```
 */
function isTypedJSX(node) {
    return (node.type === utils_1.AST_NODE_TYPES.JSXExpressionContainer ||
        node.type === utils_1.AST_NODE_TYPES.JSXSpreadAttribute);
}
function isTypedParent(parent, callee) {
    return ((0, astUtils_1.isTypeAssertion)(parent) ||
        isVariableDeclaratorWithTypeAnnotation(parent) ||
        isDefaultFunctionParameterWithTypeAnnotation(parent) ||
        isPropertyDefinitionWithTypeAnnotation(parent) ||
        isFunctionArgument(parent, callee) ||
        isTypedJSX(parent));
}
function isDefaultFunctionParameterWithTypeAnnotation(node) {
    return (node.type === utils_1.AST_NODE_TYPES.AssignmentPattern &&
        node.left.typeAnnotation != null);
}
/**
 * Checks if a node belongs to:
 * ```
 * new Foo(() => {})
 *         ^^^^^^^^
 * ```
 */
function isConstructorArgument(node) {
    return node.type === utils_1.AST_NODE_TYPES.NewExpression;
}
/**
 * Checks if a node is a property or a nested property of a typed object:
 * ```
 * const x: Foo = { prop: () => {} }
 * const x = { prop: () => {} } as Foo
 * const x = <Foo>{ prop: () => {} }
 * const x: Foo = { bar: { prop: () => {} } }
 * ```
 */
function isPropertyOfObjectWithType(property) {
    if (property?.type !== utils_1.AST_NODE_TYPES.Property) {
        return false;
    }
    const objectExpr = property.parent;
    if (objectExpr.type !== utils_1.AST_NODE_TYPES.ObjectExpression) {
        return false;
    }
    const parent = objectExpr.parent;
    return isTypedParent(parent) || isPropertyOfObjectWithType(parent);
}
/**
 * Checks if a function belongs to:
 * ```
 * () => () => ...
 * () => function () { ... }
 * () => { return () => ... }
 * () => { return function () { ... } }
 * function fn() { return () => ... }
 * function fn() { return function() { ... } }
 * ```
 */
function doesImmediatelyReturnFunctionExpression({ node, returns, }) {
    if (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
        utils_1.ASTUtils.isFunction(node.body)) {
        return true;
    }
    if (returns.length === 0) {
        return false;
    }
    return returns.every(node => node.argument && utils_1.ASTUtils.isFunction(node.argument));
}
/**
 * Checks if a function belongs to:
 * ```
 * ({ action: 'xxx' } as const)
 * ```
 */
function isConstAssertion(node) {
    if ((0, astUtils_1.isTypeAssertion)(node)) {
        const { typeAnnotation } = node;
        if (typeAnnotation.type === utils_1.AST_NODE_TYPES.TSTypeReference) {
            const { typeName } = typeAnnotation;
            if (typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                typeName.name === 'const') {
                return true;
            }
        }
    }
    return false;
}
/**
 * True when the provided function expression is typed.
 */
function isTypedFunctionExpression(node, options) {
    if (!options.allowTypedFunctionExpressions) {
        return false;
    }
    return (isTypedParent(node.parent, node) ||
        isPropertyOfObjectWithType(node.parent) ||
        isConstructorArgument(node.parent));
}
/**
 * Check whether the function expression return type is either typed or valid
 * with the provided options.
 */
function isValidFunctionExpressionReturnType(node, options) {
    if (isTypedFunctionExpression(node, options)) {
        return true;
    }
    if (options.allowExpressions &&
        node.parent.type !== utils_1.AST_NODE_TYPES.VariableDeclarator &&
        node.parent.type !== utils_1.AST_NODE_TYPES.MethodDefinition &&
        node.parent.type !== utils_1.AST_NODE_TYPES.ExportDefaultDeclaration &&
        node.parent.type !== utils_1.AST_NODE_TYPES.PropertyDefinition) {
        return true;
    }
    // https://github.com/typescript-eslint/typescript-eslint/issues/653
    if (!options.allowDirectConstAssertionInArrowFunctions ||
        node.type !== utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
        return false;
    }
    let body = node.body;
    while (body.type === utils_1.AST_NODE_TYPES.TSSatisfiesExpression) {
        body = body.expression;
    }
    return isConstAssertion(body);
}
/**
 * Check that the function expression or declaration is valid.
 */
function isValidFunctionReturnType({ node, returns }, options) {
    if (options.allowHigherOrderFunctions &&
        doesImmediatelyReturnFunctionExpression({ node, returns })) {
        return true;
    }
    return (node.returnType != null ||
        (0, astUtils_1.isConstructor)(node.parent) ||
        (0, astUtils_1.isSetter)(node.parent));
}
/**
 * Checks if a function declaration/expression has a return type.
 */
function checkFunctionReturnType({ node, returns }, options, sourceCode, report) {
    if (isValidFunctionReturnType({ node, returns }, options)) {
        return;
    }
    report((0, getFunctionHeadLoc_1.getFunctionHeadLoc)(node, sourceCode));
}
/**
 * Checks if a function declaration/expression has a return type.
 */
function checkFunctionExpressionReturnType(info, options, sourceCode, report) {
    if (isValidFunctionExpressionReturnType(info.node, options)) {
        return;
    }
    checkFunctionReturnType(info, options, sourceCode, report);
}
/**
 * Check whether any ancestor of the provided function has a valid return type.
 */
function ancestorHasReturnType(node) {
    let ancestor = node.parent;
    if (ancestor.type === utils_1.AST_NODE_TYPES.Property) {
        ancestor = ancestor.value;
    }
    // if the ancestor is not a return, then this function was not returned at all, so we can exit early
    const isReturnStatement = ancestor.type === utils_1.AST_NODE_TYPES.ReturnStatement;
    const isBodylessArrow = ancestor.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
        ancestor.body.type !== utils_1.AST_NODE_TYPES.BlockStatement;
    if (!isReturnStatement && !isBodylessArrow) {
        return false;
    }
    while (ancestor) {
        switch (ancestor.type) {
            case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
            case utils_1.AST_NODE_TYPES.FunctionExpression:
            case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                if (ancestor.returnType) {
                    return true;
                }
                break;
            // const x: Foo = () => {};
            // Assume that a typed variable types the function expression
            case utils_1.AST_NODE_TYPES.VariableDeclarator:
                return !!ancestor.id.typeAnnotation;
            case utils_1.AST_NODE_TYPES.PropertyDefinition:
                return !!ancestor.typeAnnotation;
            case utils_1.AST_NODE_TYPES.ExpressionStatement:
                return false;
        }
        ancestor = ancestor.parent;
    }
    return false;
}
//# sourceMappingURL=explicitReturnTypeUtils.js.map