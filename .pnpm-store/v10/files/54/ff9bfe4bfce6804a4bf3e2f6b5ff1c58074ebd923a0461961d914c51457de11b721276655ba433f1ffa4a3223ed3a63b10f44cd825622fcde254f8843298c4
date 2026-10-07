import type { TSESTree } from '../ts-estree';
declare const isOptionalChainPunctuator: (token: TSESTree.Token | null | undefined) => token is TSESTree.PunctuatorToken & {
    value: "?.";
};
declare const isNotOptionalChainPunctuator: (token: TSESTree.Token | null | undefined) => token is TSESTree.BooleanToken | TSESTree.BlockComment | TSESTree.LineComment | TSESTree.IdentifierToken | TSESTree.JSXIdentifierToken | TSESTree.JSXTextToken | TSESTree.KeywordToken | TSESTree.NullToken | TSESTree.NumericToken | TSESTree.PunctuatorToken | TSESTree.RegularExpressionToken | TSESTree.StringToken | TSESTree.TemplateToken;
declare const isNonNullAssertionPunctuator: (token: TSESTree.Token | null | undefined) => token is TSESTree.PunctuatorToken & {
    value: "!";
};
declare const isNotNonNullAssertionPunctuator: (token: TSESTree.Token | null | undefined) => token is TSESTree.BooleanToken | TSESTree.BlockComment | TSESTree.LineComment | TSESTree.IdentifierToken | TSESTree.JSXIdentifierToken | TSESTree.JSXTextToken | TSESTree.KeywordToken | TSESTree.NullToken | TSESTree.NumericToken | TSESTree.PunctuatorToken | TSESTree.RegularExpressionToken | TSESTree.StringToken | TSESTree.TemplateToken;
/**
 * Returns true if and only if the node represents: foo?.() or foo.bar?.()
 */
declare const isOptionalCallExpression: (node: TSESTree.Node | null | undefined) => node is TSESTree.CallExpression & {
    optional: boolean;
};
/**
 * Returns true if and only if the node represents logical OR
 */
declare const isLogicalOrOperator: (node: TSESTree.Node | null | undefined) => node is TSESTree.LogicalExpression & Partial<TSESTree.LogicalExpression>;
/**
 * Checks if a node is a type assertion:
 * ```
 * x as foo
 * <foo>x
 * ```
 */
declare const isTypeAssertion: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSAsExpression | TSESTree.TSTypeAssertion;
declare const isVariableDeclarator: (node: TSESTree.Node | null | undefined) => node is TSESTree.VariableDeclarator;
declare const isFunction: (node: TSESTree.Node | null | undefined) => node is TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclarationWithName | TSESTree.FunctionDeclarationWithOptionalName | TSESTree.FunctionExpression;
declare const isFunctionType: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructorType | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSEmptyBodyFunctionExpression | TSESTree.TSFunctionType | TSESTree.TSMethodSignatureComputedName | TSESTree.TSMethodSignatureNonComputedName;
declare const isFunctionOrFunctionType: (node: TSESTree.Node | null | undefined) => node is TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclarationWithName | TSESTree.FunctionDeclarationWithOptionalName | TSESTree.FunctionExpression | TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructorType | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSEmptyBodyFunctionExpression | TSESTree.TSFunctionType | TSESTree.TSMethodSignatureComputedName | TSESTree.TSMethodSignatureNonComputedName;
declare const isTSFunctionType: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSFunctionType;
declare const isTSConstructorType: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSConstructorType;
declare const isClassOrTypeElement: (node: TSESTree.Node | null | undefined) => node is TSESTree.FunctionExpression | TSESTree.MethodDefinitionComputedName | TSESTree.MethodDefinitionNonComputedName | TSESTree.PropertyDefinitionComputedName | TSESTree.PropertyDefinitionNonComputedName | TSESTree.TSAbstractMethodDefinitionComputedName | TSESTree.TSAbstractMethodDefinitionNonComputedName | TSESTree.TSAbstractPropertyDefinitionComputedName | TSESTree.TSAbstractPropertyDefinitionNonComputedName | TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSEmptyBodyFunctionExpression | TSESTree.TSIndexSignature | TSESTree.TSMethodSignatureComputedName | TSESTree.TSMethodSignatureNonComputedName | TSESTree.TSPropertySignatureComputedName | TSESTree.TSPropertySignatureNonComputedName;
/**
 * Checks if a node is a constructor method.
 */
declare const isConstructor: (node: TSESTree.Node | null | undefined) => node is (TSESTree.MethodDefinitionComputedName & Partial<TSESTree.MethodDefinitionComputedName>) | (TSESTree.MethodDefinitionNonComputedName & Partial<TSESTree.MethodDefinitionNonComputedName>);
/**
 * Checks if a node is a setter method.
 */
declare function isSetter(node: TSESTree.Node | undefined): node is (TSESTree.MethodDefinition | TSESTree.Property) & {
    kind: 'set';
};
declare const isIdentifier: (node: TSESTree.Node | null | undefined) => node is TSESTree.Identifier;
/**
 * Checks if a node represents an `await …` expression.
 */
declare const isAwaitExpression: (node: TSESTree.Node | null | undefined) => node is TSESTree.AwaitExpression;
/**
 * Checks if a possible token is the `await` keyword.
 */
declare const isAwaitKeyword: (token: TSESTree.Token | null | undefined) => token is TSESTree.IdentifierToken & {
    value: "await";
};
/**
 * Checks if a possible token is the `type` keyword.
 */
declare const isTypeKeyword: (token: TSESTree.Token | null | undefined) => token is TSESTree.IdentifierToken & {
    value: "type";
};
/**
 * Checks if a possible token is the `import` keyword.
 */
declare const isImportKeyword: (token: TSESTree.Token | null | undefined) => token is TSESTree.KeywordToken & {
    value: "import";
};
declare const isLoop: (node: TSESTree.Node | null | undefined) => node is TSESTree.DoWhileStatement | TSESTree.ForInStatement | TSESTree.ForOfStatement | TSESTree.ForStatement | TSESTree.WhileStatement;
export { isAwaitExpression, isAwaitKeyword, isConstructor, isClassOrTypeElement, isFunction, isFunctionOrFunctionType, isFunctionType, isIdentifier, isImportKeyword, isLoop, isLogicalOrOperator, isNonNullAssertionPunctuator, isNotNonNullAssertionPunctuator, isNotOptionalChainPunctuator, isOptionalChainPunctuator, isOptionalCallExpression, isSetter, isTSConstructorType, isTSFunctionType, isTypeAssertion, isTypeKeyword, isVariableDeclarator, };
//# sourceMappingURL=predicates.d.ts.map