"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ancestorHasReturnType = exports.isValidFunctionExpressionReturnType = exports.isTypedFunctionExpression = exports.doesImmediatelyReturnFunctionExpression = exports.checkFunctionReturnType = exports.checkFunctionExpressionReturnType = void 0;
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
    if (!property || property.type !== utils_1.AST_NODE_TYPES.Property) {
        return false;
    }
    const objectExpr = property.parent; // this shouldn't happen, checking just in case
    /* istanbul ignore if */ if (!objectExpr ||
        objectExpr.type !== utils_1.AST_NODE_TYPES.ObjectExpression) {
        return false;
    }
    const parent = objectExpr.parent; // this shouldn't happen, checking just in case
    /* istanbul ignore if */ if (!parent) {
        return false;
    }
    return ((0, astUtils_1.isTypeAssertion)(parent) ||
        isPropertyDefinitionWithTypeAnnotation(parent) ||
        isVariableDeclaratorWithTypeAnnotation(parent) ||
        isFunctionArgument(parent) ||
        isPropertyOfObjectWithType(parent));
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
function doesImmediatelyReturnFunctionExpression({ body, }) {
    // Should always have a body; really checking just in case
    /* istanbul ignore if */ if (!body) {
        return false;
    }
    // Check if body is a block with a single statement
    if (body.type === utils_1.AST_NODE_TYPES.BlockStatement && body.body.length === 1) {
        const [statement] = body.body;
        // Check if that statement is a return statement with an argument
        if (statement.type === utils_1.AST_NODE_TYPES.ReturnStatement &&
            !!statement.argument) {
            // If so, check that returned argument as body
            body = statement.argument;
        }
    }
    // Check if the body being returned is a function expression
    return (body.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
        body.type === utils_1.AST_NODE_TYPES.FunctionExpression);
}
exports.doesImmediatelyReturnFunctionExpression = doesImmediatelyReturnFunctionExpression;
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
 * Checks if a function belongs to:
 * ```
 * () => ({ action: 'xxx' } as const)
 * ```
 */
function returnsConstAssertionDirectly(node) {
    const { body } = node;
    if ((0, astUtils_1.isTypeAssertion)(body)) {
        const { typeAnnotation } = body;
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
    const parent = utils_1.ESLintUtils.nullThrows(node.parent, utils_1.ESLintUtils.NullThrowsReasons.MissingParent);
    if (!options.allowTypedFunctionExpressions) {
        return false;
    }
    return ((0, astUtils_1.isTypeAssertion)(parent) ||
        isVariableDeclaratorWithTypeAnnotation(parent) ||
        isPropertyDefinitionWithTypeAnnotation(parent) ||
        isPropertyOfObjectWithType(parent) ||
        isFunctionArgument(parent, node) ||
        isConstructorArgument(parent));
}
exports.isTypedFunctionExpression = isTypedFunctionExpression;
/**
 * Check whether the function expression return type is either typed or valid
 * with the provided options.
 */
function isValidFunctionExpressionReturnType(node, options) {
    if (isTypedFunctionExpression(node, options)) {
        return true;
    }
    const parent = utils_1.ESLintUtils.nullThrows(node.parent, utils_1.ESLintUtils.NullThrowsReasons.MissingParent);
    if (options.allowExpressions &&
        parent.type !== utils_1.AST_NODE_TYPES.VariableDeclarator &&
        parent.type !== utils_1.AST_NODE_TYPES.MethodDefinition &&
        parent.type !== utils_1.AST_NODE_TYPES.ExportDefaultDeclaration &&
        parent.type !== utils_1.AST_NODE_TYPES.PropertyDefinition) {
        return true;
    }
    // https://github.com/typescript-eslint/typescript-eslint/issues/653
    return (options.allowDirectConstAssertionInArrowFunctions === true &&
        node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
        returnsConstAssertionDirectly(node));
}
exports.isValidFunctionExpressionReturnType = isValidFunctionExpressionReturnType;
/**
 * Check that the function expression or declaration is valid.
 */
function isValidFunctionReturnType(node, options) {
    if (options.allowHigherOrderFunctions &&
        doesImmediatelyReturnFunctionExpression(node)) {
        return true;
    }
    return (node.returnType != null ||
        (0, astUtils_1.isConstructor)(node.parent) ||
        (0, astUtils_1.isSetter)(node.parent));
}
/**
 * Checks if a function declaration/expression has a return type.
 */
function checkFunctionReturnType(node, options, sourceCode, report) {
    if (isValidFunctionReturnType(node, options)) {
        return;
    }
    report((0, getFunctionHeadLoc_1.getFunctionHeadLoc)(node, sourceCode));
}
exports.checkFunctionReturnType = checkFunctionReturnType;
/**
 * Checks if a function declaration/expression has a return type.
 */
function checkFunctionExpressionReturnType(node, options, sourceCode, report) {
    if (isValidFunctionExpressionReturnType(node, options)) {
        return;
    }
    checkFunctionReturnType(node, options, sourceCode, report);
}
exports.checkFunctionExpressionReturnType = checkFunctionExpressionReturnType;
/**
 * Check whether any ancestor of the provided function has a valid return type.
 */
function ancestorHasReturnType(node) {
    let ancestor = node.parent;
    if ((ancestor === null || ancestor === void 0 ? void 0 : ancestor.type) === utils_1.AST_NODE_TYPES.Property) {
        ancestor = ancestor.value;
    }
    // if the ancestor is not a return, then this function was not returned at all, so we can exit early
    const isReturnStatement = (ancestor === null || ancestor === void 0 ? void 0 : ancestor.type) === utils_1.AST_NODE_TYPES.ReturnStatement;
    const isBodylessArrow = (ancestor === null || ancestor === void 0 ? void 0 : ancestor.type) === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
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
                if (ancestor.id.typeAnnotation) {
                    return true;
                }
                break;
        }
        ancestor = ancestor.parent;
    }
    return false;
}
exports.ancestorHasReturnType = ancestorHasReturnType;
//# sourceMappingURL=explicitReturnTypeUtils.js.map