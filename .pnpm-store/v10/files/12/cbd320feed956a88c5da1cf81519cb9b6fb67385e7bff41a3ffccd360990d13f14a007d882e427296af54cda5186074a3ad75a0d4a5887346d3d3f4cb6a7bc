import type { TSESTree } from '@typescript-eslint/types';
export declare function isArrayExpression(node: TSESTree.Node): node is TSESTree.ArrayExpression;
export declare function isArrowFunctionExpression(node: TSESTree.Node): node is TSESTree.ArrowFunctionExpression;
/** default parameters */
export declare function isAssignmentPattern(node: TSESTree.Node): node is TSESTree.AssignmentPattern;
export declare function isClassDeclaration(node: TSESTree.Node): node is TSESTree.ClassDeclaration;
export declare function isClassExpression(node: TSESTree.Node): node is TSESTree.ClassExpression;
export declare function isExportDefaultDeclaration(node: TSESTree.Node): node is TSESTree.ExportDefaultDeclaration;
export declare function isExpression(node: TSESTree.Node): node is TSESTree.Expression;
export declare function isFunctionDeclaration(node: TSESTree.Node): node is TSESTree.FunctionDeclaration;
export declare function isFunctionExpression(node: TSESTree.Node): node is TSESTree.FunctionExpression;
export declare function isIdentifier(node: TSESTree.Node): node is TSESTree.Identifier;
export declare function isLiteral(node: TSESTree.Node): node is TSESTree.Literal;
export declare function isMethodDefinition(node: TSESTree.Node): node is TSESTree.MethodDefinition;
export declare function isObjectExpression(node: TSESTree.Node): node is TSESTree.ObjectExpression;
export declare function isPrivateIdentifier(node: TSESTree.Node): node is TSESTree.PrivateIdentifier;
export declare function isProperty(node: TSESTree.Node): node is TSESTree.Property;
export declare function isPropertyDefinition(node: TSESTree.Node): node is TSESTree.PropertyDefinition;
export declare function isTSEnumDeclaration(node: TSESTree.Node): node is TSESTree.TSEnumDeclaration;
export declare function isTSInterfaceDeclaration(node: TSESTree.Node): node is TSESTree.TSInterfaceDeclaration;
export declare function isTSModuleDeclaration(node: TSESTree.Node): node is TSESTree.TSModuleDeclaration;
export declare function isTSQualifiedName(node: TSESTree.Node): node is TSESTree.TSQualifiedName;
export declare function isTSTypeAliasDeclaration(node: TSESTree.Node): node is TSESTree.TSTypeAliasDeclaration;
export declare function isVariableDeclarator(node: TSESTree.Node): node is TSESTree.VariableDeclarator;
export declare function isClassDeclarationWithName(node: TSESTree.Node): node is TSESTree.ClassDeclarationWithName;
export declare function isClassPropertyNameNonComputed(node: TSESTree.Node): node is TSESTree.ClassPropertyNameNonComputed;
export declare function isFunctionDeclarationWithName(node: TSESTree.Node): node is TSESTree.FunctionDeclarationWithName;
export declare function isNumberLiteral(node: TSESTree.Node): node is TSESTree.NumberLiteral;
export declare function isPropertyNameNonComputed(node: TSESTree.Node): node is TSESTree.PropertyNameNonComputed;
export declare function isStringLiteral(node: TSESTree.Node): node is TSESTree.StringLiteral;
export interface IClassExpressionWithName extends TSESTree.ClassExpression {
    id: TSESTree.Identifier;
}
export declare function isClassExpressionWithName(node: TSESTree.Node): node is IClassExpressionWithName;
export interface IFunctionExpressionWithName extends TSESTree.FunctionExpression {
    id: TSESTree.Identifier;
}
export declare function isFunctionExpressionWithName(node: TSESTree.Node): node is IFunctionExpressionWithName;
export type NormalAnonymousExpression = TSESTree.ArrowFunctionExpression | TSESTree.ClassExpression | TSESTree.FunctionExpression | TSESTree.ObjectExpression;
export declare function isNormalAnonymousExpression(node: TSESTree.Node): node is NormalAnonymousExpression;
export interface INormalAssignmentPattern extends TSESTree.AssignmentPattern {
    left: TSESTree.Identifier;
}
export declare function isNormalAssignmentPattern(node: TSESTree.Node): node is INormalAssignmentPattern;
export interface INormalClassPropertyDefinition extends TSESTree.PropertyDefinitionNonComputedName {
    key: TSESTree.PrivateIdentifier | TSESTree.Identifier;
    value: TSESTree.Expression;
}
export declare function isNormalClassPropertyDefinition(node: TSESTree.Node): node is INormalClassPropertyDefinition;
export interface INormalMethodDefinition extends TSESTree.MethodDefinitionNonComputedName {
    key: TSESTree.PrivateIdentifier | TSESTree.Identifier;
}
export declare function isNormalMethodDefinition(node: TSESTree.Node): node is INormalMethodDefinition;
export interface INormalObjectProperty extends TSESTree.PropertyNonComputedName {
    key: TSESTree.Identifier;
}
export declare function isNormalObjectProperty(node: TSESTree.Node): node is INormalObjectProperty;
export type INormalVariableDeclarator = TSESTree.LetOrConstOrVarDeclaration & {
    id: TSESTree.Identifier;
    init: TSESTree.Expression;
};
export declare function isNormalVariableDeclarator(node: TSESTree.Node): node is INormalVariableDeclarator;
export interface INormalAssignmentPatternWithAnonymousExpressionAssigned extends INormalAssignmentPattern {
    right: NormalAnonymousExpression;
}
export declare function isNormalAssignmentPatternWithAnonymousExpressionAssigned(node: TSESTree.Node): node is INormalAssignmentPatternWithAnonymousExpressionAssigned;
export type INormalVariableDeclaratorWithAnonymousExpressionAssigned = INormalVariableDeclarator & {
    init: NormalAnonymousExpression;
};
export declare function isNormalVariableDeclaratorWithAnonymousExpressionAssigned(node: TSESTree.Node): node is INormalVariableDeclaratorWithAnonymousExpressionAssigned;
export interface INormalObjectPropertyWithAnonymousExpressionAssigned extends INormalObjectProperty {
    value: NormalAnonymousExpression;
}
export declare function isNormalObjectPropertyWithAnonymousExpressionAssigned(node: TSESTree.Node): node is INormalObjectPropertyWithAnonymousExpressionAssigned;
export interface INormalClassPropertyDefinitionWithAnonymousExpressionAssigned extends INormalClassPropertyDefinition {
    value: NormalAnonymousExpression;
}
export declare function isNormalClassPropertyDefinitionWithAnonymousExpressionAssigned(node: TSESTree.Node): node is INormalClassPropertyDefinitionWithAnonymousExpressionAssigned;
export type NodeWithName = TSESTree.ClassDeclarationWithName | TSESTree.FunctionDeclarationWithName | IClassExpressionWithName | IFunctionExpressionWithName | INormalVariableDeclaratorWithAnonymousExpressionAssigned | INormalObjectPropertyWithAnonymousExpressionAssigned | INormalClassPropertyDefinitionWithAnonymousExpressionAssigned | INormalAssignmentPatternWithAnonymousExpressionAssigned | INormalMethodDefinition | TSESTree.TSEnumDeclaration | TSESTree.TSInterfaceDeclaration | TSESTree.TSTypeAliasDeclaration;
export declare function isNodeWithName(node: TSESTree.Node): node is NodeWithName;
//# sourceMappingURL=ast-guards.d.ts.map