import type { TSESTree } from '../ts-estree';
export declare const isOptionalChainPunctuator: (token: TSESTree.Token | null | undefined) => token is {
    value: "?.";
} & TSESTree.PunctuatorToken;
export declare const isNotOptionalChainPunctuator: (token: TSESTree.Token | null | undefined) => token is TSESTree.BooleanToken | TSESTree.BlockComment | TSESTree.LineComment | TSESTree.IdentifierToken | TSESTree.JSXIdentifierToken | TSESTree.JSXTextToken | TSESTree.KeywordToken | TSESTree.NullToken | TSESTree.NumericToken | TSESTree.PrivateIdentifierToken | TSESTree.PunctuatorToken | TSESTree.RegularExpressionToken | TSESTree.StringToken | TSESTree.TemplateToken;
export declare const isNonNullAssertionPunctuator: (token: TSESTree.Token | null | undefined) => token is {
    value: "!";
} & TSESTree.PunctuatorToken;
export declare const isNotNonNullAssertionPunctuator: (token: TSESTree.Token | null | undefined) => token is TSESTree.BooleanToken | TSESTree.BlockComment | TSESTree.LineComment | TSESTree.IdentifierToken | TSESTree.JSXIdentifierToken | TSESTree.JSXTextToken | TSESTree.KeywordToken | TSESTree.NullToken | TSESTree.NumericToken | TSESTree.PrivateIdentifierToken | TSESTree.PunctuatorToken | TSESTree.RegularExpressionToken | TSESTree.StringToken | TSESTree.TemplateToken;
/**
 * Returns true if and only if the node represents: foo?.() or foo.bar?.()
 */
export declare const isOptionalCallExpression: (node: TSESTree.Node | null | undefined) => node is {
    optional: boolean;
} & TSESTree.CallExpression;
/**
 * Returns true if and only if the node represents logical OR
 */
export declare const isLogicalOrOperator: (node: TSESTree.Node | null | undefined) => node is Partial<TSESTree.LogicalExpression> & TSESTree.LogicalExpression;
/**
 * Checks if a node is a type assertion:
 * ```
 * x as foo
 * <foo>x
 * ```
 */
export declare const isTypeAssertion: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSAsExpression | TSESTree.TSTypeAssertion;
export declare const isVariableDeclarator: (node: TSESTree.Node | null | undefined) => node is TSESTree.VariableDeclaratorDefiniteAssignment | TSESTree.VariableDeclaratorMaybeInit | TSESTree.VariableDeclaratorNoInit | TSESTree.UsingInForOfDeclarator | TSESTree.UsingInNormalContextDeclarator;
export declare const isFunction: (node: TSESTree.Node | null | undefined) => node is TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclarationWithName | TSESTree.FunctionDeclarationWithOptionalName | TSESTree.FunctionExpression;
export declare const isFunctionType: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructorType | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSDeclareFunctionNoDeclare | TSESTree.TSDeclareFunctionWithDeclare | TSESTree.TSEmptyBodyFunctionExpression | TSESTree.TSFunctionType | TSESTree.TSMethodSignatureComputedName | TSESTree.TSMethodSignatureNonComputedName;
export declare const isFunctionOrFunctionType: (node: TSESTree.Node | null | undefined) => node is TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclarationWithName | TSESTree.FunctionDeclarationWithOptionalName | TSESTree.FunctionExpression | TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructorType | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSDeclareFunctionNoDeclare | TSESTree.TSDeclareFunctionWithDeclare | TSESTree.TSEmptyBodyFunctionExpression | TSESTree.TSFunctionType | TSESTree.TSMethodSignatureComputedName | TSESTree.TSMethodSignatureNonComputedName;
export declare const isTSFunctionType: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSFunctionType;
export declare const isTSConstructorType: (node: TSESTree.Node | null | undefined) => node is TSESTree.TSConstructorType;
export declare const isClassOrTypeElement: (node: TSESTree.Node | null | undefined) => node is TSESTree.FunctionExpression | TSESTree.MethodDefinitionComputedName | TSESTree.MethodDefinitionNonComputedName | TSESTree.PropertyDefinitionComputedName | TSESTree.PropertyDefinitionNonComputedName | TSESTree.TSAbstractMethodDefinitionComputedName | TSESTree.TSAbstractMethodDefinitionNonComputedName | TSESTree.TSAbstractPropertyDefinitionComputedName | TSESTree.TSAbstractPropertyDefinitionNonComputedName | TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSEmptyBodyFunctionExpression | TSESTree.TSIndexSignature | TSESTree.TSMethodSignatureComputedName | TSESTree.TSMethodSignatureNonComputedName | TSESTree.TSPropertySignatureComputedName | TSESTree.TSPropertySignatureNonComputedName;
/**
 * Checks if a node is a constructor method.
 */
export declare const isConstructor: (node: TSESTree.Node | null | undefined) => node is Partial<TSESTree.MethodDefinitionComputedName | TSESTree.MethodDefinitionNonComputedName> & (TSESTree.MethodDefinitionComputedName | TSESTree.MethodDefinitionNonComputedName);
/**
 * Checks if a node is a setter method.
 */
export declare function isSetter(node: TSESTree.Node | undefined): node is {
    kind: 'set';
} & (TSESTree.MethodDefinition | TSESTree.Property);
export declare const isIdentifier: (node: TSESTree.Node | null | undefined) => node is TSESTree.Identifier;
/**
 * Checks if a node represents an `await …` expression.
 */
export declare const isAwaitExpression: (node: TSESTree.Node | null | undefined) => node is TSESTree.AwaitExpression;
/**
 * Checks if a possible token is the `await` keyword.
 */
export declare const isAwaitKeyword: (token: TSESTree.Token | null | undefined) => token is {
    value: "await";
} & TSESTree.IdentifierToken;
/**
 * Checks if a possible token is the `type` keyword.
 */
export declare const isTypeKeyword: (token: TSESTree.Token | null | undefined) => token is {
    value: "type";
} & TSESTree.IdentifierToken;
/**
 * Checks if a possible token is the `import` keyword.
 */
export declare const isImportKeyword: (token: TSESTree.Token | null | undefined) => token is {
    value: "import";
} & TSESTree.KeywordToken;
export declare const isLoop: (node: TSESTree.Node | null | undefined) => node is TSESTree.DoWhileStatement | TSESTree.ForInStatement | TSESTree.ForOfStatement | TSESTree.ForStatement | TSESTree.WhileStatement;
