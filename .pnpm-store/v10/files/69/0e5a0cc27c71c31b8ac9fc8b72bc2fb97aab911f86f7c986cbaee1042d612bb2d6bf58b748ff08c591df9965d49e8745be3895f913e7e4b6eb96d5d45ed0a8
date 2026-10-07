"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayExpression = isArrayExpression;
exports.isArrowFunctionExpression = isArrowFunctionExpression;
exports.isAssignmentPattern = isAssignmentPattern;
exports.isClassDeclaration = isClassDeclaration;
exports.isClassExpression = isClassExpression;
exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
exports.isExpression = isExpression;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isFunctionExpression = isFunctionExpression;
exports.isIdentifier = isIdentifier;
exports.isLiteral = isLiteral;
exports.isMethodDefinition = isMethodDefinition;
exports.isObjectExpression = isObjectExpression;
exports.isPrivateIdentifier = isPrivateIdentifier;
exports.isProperty = isProperty;
exports.isPropertyDefinition = isPropertyDefinition;
exports.isTSEnumDeclaration = isTSEnumDeclaration;
exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
exports.isTSModuleDeclaration = isTSModuleDeclaration;
exports.isTSQualifiedName = isTSQualifiedName;
exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
exports.isVariableDeclarator = isVariableDeclarator;
exports.isClassDeclarationWithName = isClassDeclarationWithName;
exports.isClassPropertyNameNonComputed = isClassPropertyNameNonComputed;
exports.isFunctionDeclarationWithName = isFunctionDeclarationWithName;
exports.isNumberLiteral = isNumberLiteral;
exports.isPropertyNameNonComputed = isPropertyNameNonComputed;
exports.isStringLiteral = isStringLiteral;
exports.isClassExpressionWithName = isClassExpressionWithName;
exports.isFunctionExpressionWithName = isFunctionExpressionWithName;
exports.isNormalAnonymousExpression = isNormalAnonymousExpression;
exports.isNormalAssignmentPattern = isNormalAssignmentPattern;
exports.isNormalClassPropertyDefinition = isNormalClassPropertyDefinition;
exports.isNormalMethodDefinition = isNormalMethodDefinition;
exports.isNormalObjectProperty = isNormalObjectProperty;
exports.isNormalVariableDeclarator = isNormalVariableDeclarator;
exports.isNormalAssignmentPatternWithAnonymousExpressionAssigned = isNormalAssignmentPatternWithAnonymousExpressionAssigned;
exports.isNormalVariableDeclaratorWithAnonymousExpressionAssigned = isNormalVariableDeclaratorWithAnonymousExpressionAssigned;
exports.isNormalObjectPropertyWithAnonymousExpressionAssigned = isNormalObjectPropertyWithAnonymousExpressionAssigned;
exports.isNormalClassPropertyDefinitionWithAnonymousExpressionAssigned = isNormalClassPropertyDefinitionWithAnonymousExpressionAssigned;
exports.isNodeWithName = isNodeWithName;
function isArrayExpression(node) {
    return node.type === 'ArrayExpression';
}
function isArrowFunctionExpression(node) {
    return node.type === 'ArrowFunctionExpression';
}
/** default parameters */
function isAssignmentPattern(node) {
    return node.type === 'AssignmentPattern';
}
function isClassDeclaration(node) {
    return node.type === 'ClassDeclaration';
}
function isClassExpression(node) {
    return node.type === 'ClassExpression';
}
function isExportDefaultDeclaration(node) {
    return node.type === 'ExportDefaultDeclaration';
}
function isExpression(node) {
    return node.type.includes('Expression');
}
function isFunctionDeclaration(node) {
    return node.type === 'FunctionDeclaration';
}
function isFunctionExpression(node) {
    return node.type === 'FunctionExpression';
}
function isIdentifier(node) {
    return node.type === 'Identifier';
}
function isLiteral(node) {
    return node.type === 'Literal';
}
function isMethodDefinition(node) {
    return node.type === 'MethodDefinition';
}
function isObjectExpression(node) {
    return node.type === 'ObjectExpression';
}
function isPrivateIdentifier(node) {
    return node.type === 'PrivateIdentifier';
}
function isProperty(node) {
    return node.type === 'Property';
}
function isPropertyDefinition(node) {
    return node.type === 'PropertyDefinition';
}
function isTSEnumDeclaration(node) {
    return node.type === 'TSEnumDeclaration';
}
function isTSInterfaceDeclaration(node) {
    return node.type === 'TSInterfaceDeclaration';
}
function isTSModuleDeclaration(node) {
    return node.type === 'TSModuleDeclaration';
}
function isTSQualifiedName(node) {
    return node.type === 'TSQualifiedName';
}
function isTSTypeAliasDeclaration(node) {
    return node.type === 'TSTypeAliasDeclaration';
}
function isVariableDeclarator(node) {
    return node.type === 'VariableDeclarator';
}
// Compound Type Guards for @typescript-eslint/types ast-spec compound types
function isClassDeclarationWithName(node) {
    return isClassDeclaration(node) && node.id !== null;
}
function isClassPropertyNameNonComputed(node) {
    return isPrivateIdentifier(node) || isPropertyNameNonComputed(node);
}
function isFunctionDeclarationWithName(node) {
    return isFunctionDeclaration(node) && node.id !== null;
}
function isNumberLiteral(node) {
    return isLiteral(node) && typeof node.value === 'number';
}
function isPropertyNameNonComputed(node) {
    return isIdentifier(node) || isNumberLiteral(node) || isStringLiteral(node);
}
function isStringLiteral(node) {
    return isLiteral(node) && typeof node.value === 'string';
}
function isClassExpressionWithName(node) {
    return isClassExpression(node) && node.id !== null;
}
function isFunctionExpressionWithName(node) {
    return isFunctionExpression(node) && node.id !== null;
}
function isNormalAnonymousExpression(node) {
    const ANONYMOUS_EXPRESSION_GUARDS = [
        isArrowFunctionExpression,
        isClassExpression,
        isFunctionExpression,
        isObjectExpression
    ];
    return ANONYMOUS_EXPRESSION_GUARDS.some((guard) => guard(node));
}
function isNormalAssignmentPattern(node) {
    return isAssignmentPattern(node) && isIdentifier(node.left);
}
function isNormalClassPropertyDefinition(node) {
    return (isPropertyDefinition(node) &&
        (isIdentifier(node.key) || isPrivateIdentifier(node.key)) &&
        node.value !== null);
}
function isNormalMethodDefinition(node) {
    return isMethodDefinition(node) && (isIdentifier(node.key) || isPrivateIdentifier(node.key));
}
function isNormalObjectProperty(node) {
    return isProperty(node) && (isIdentifier(node.key) || isPrivateIdentifier(node.key));
}
function isNormalVariableDeclarator(node) {
    return isVariableDeclarator(node) && isIdentifier(node.id) && node.init !== null;
}
function isNormalAssignmentPatternWithAnonymousExpressionAssigned(node) {
    return isNormalAssignmentPattern(node) && isNormalAnonymousExpression(node.right);
}
function isNormalVariableDeclaratorWithAnonymousExpressionAssigned(node) {
    return isNormalVariableDeclarator(node) && isNormalAnonymousExpression(node.init);
}
function isNormalObjectPropertyWithAnonymousExpressionAssigned(node) {
    return isNormalObjectProperty(node) && isNormalAnonymousExpression(node.value);
}
function isNormalClassPropertyDefinitionWithAnonymousExpressionAssigned(node) {
    return isNormalClassPropertyDefinition(node) && isNormalAnonymousExpression(node.value);
}
function isNodeWithName(node) {
    return (isClassDeclarationWithName(node) ||
        isFunctionDeclarationWithName(node) ||
        isClassExpressionWithName(node) ||
        isFunctionExpressionWithName(node) ||
        isNormalVariableDeclaratorWithAnonymousExpressionAssigned(node) ||
        isNormalObjectPropertyWithAnonymousExpressionAssigned(node) ||
        isNormalClassPropertyDefinitionWithAnonymousExpressionAssigned(node) ||
        isNormalAssignmentPatternWithAnonymousExpressionAssigned(node) ||
        isNormalMethodDefinition(node) ||
        isTSEnumDeclaration(node) ||
        isTSInterfaceDeclaration(node) ||
        isTSTypeAliasDeclaration(node));
}
//# sourceMappingURL=ast-guards.js.map