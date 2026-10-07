import * as ts from 'typescript';
import type { TSESTree } from './ts-estree';
import { AST_NODE_TYPES, AST_TOKEN_TYPES } from './ts-estree';
declare const SyntaxKind: typeof ts.SyntaxKind;
interface TokenToText extends TSESTree.PunctuatorTokenToText {
    [SyntaxKind.ImportKeyword]: 'import';
    [SyntaxKind.InKeyword]: 'in';
    [SyntaxKind.InstanceOfKeyword]: 'instanceof';
    [SyntaxKind.NewKeyword]: 'new';
    [SyntaxKind.KeyOfKeyword]: 'keyof';
    [SyntaxKind.ReadonlyKeyword]: 'readonly';
    [SyntaxKind.UniqueKeyword]: 'unique';
}
/**
 * Returns true if the given ts.Token is the assignment operator
 * @param operator the operator token
 * @returns is assignment
 */
export declare function isAssignmentOperator<T extends ts.SyntaxKind>(operator: ts.Token<T>): boolean;
/**
 * Returns true if the given ts.Token is a logical operator
 * @param operator the operator token
 * @returns is a logical operator
 */
export declare function isLogicalOperator<T extends ts.SyntaxKind>(operator: ts.Token<T>): boolean;
/**
 * Returns the string form of the given TSToken SyntaxKind
 * @param kind the token's SyntaxKind
 * @returns the token applicable token as a string
 */
export declare function getTextForTokenKind<T extends ts.SyntaxKind>(kind: T): T extends keyof TokenToText ? TokenToText[T] : string | undefined;
/**
 * Returns true if the given ts.Node is a valid ESTree class member
 * @param node TypeScript AST node
 * @returns is valid ESTree class member
 */
export declare function isESTreeClassMember(node: ts.Node): boolean;
/**
 * Checks if a ts.Node has a modifier
 * @param modifierKind TypeScript SyntaxKind modifier
 * @param node TypeScript AST node
 * @returns has the modifier specified
 */
export declare function hasModifier(modifierKind: ts.KeywordSyntaxKind, node: ts.Node): boolean;
/**
 * Get last last modifier in ast
 * @param node TypeScript AST node
 * @returns returns last modifier if present or null
 */
export declare function getLastModifier(node: ts.Node): ts.Modifier | null;
/**
 * Returns true if the given ts.Token is a comma
 * @param token the TypeScript token
 * @returns is comma
 */
export declare function isComma(token: ts.Node): token is ts.Token<ts.SyntaxKind.CommaToken>;
/**
 * Returns true if the given ts.Node is a comment
 * @param node the TypeScript node
 * @returns is comment
 */
export declare function isComment(node: ts.Node): boolean;
/**
 * Returns true if the given ts.Node is a JSDoc comment
 * @param node the TypeScript node
 * @returns is JSDoc comment
 */
export declare function isJSDocComment(node: ts.Node): node is ts.JSDoc;
/**
 * Returns the binary expression type of the given ts.Token
 * @param operator the operator token
 * @returns the binary expression type
 */
export declare function getBinaryExpressionType<T extends ts.SyntaxKind>(operator: ts.Token<T>): AST_NODE_TYPES.AssignmentExpression | AST_NODE_TYPES.LogicalExpression | AST_NODE_TYPES.BinaryExpression;
/**
 * Returns line and column data for the given positions,
 * @param pos position to check
 * @param ast the AST object
 * @returns line and column
 */
export declare function getLineAndCharacterFor(pos: number, ast: ts.SourceFile): TSESTree.Position;
/**
 * Returns line and column data for the given start and end positions,
 * for the given AST
 * @param start start data
 * @param end   end data
 * @param ast   the AST object
 * @returns the loc data
 */
export declare function getLocFor(start: number, end: number, ast: ts.SourceFile): TSESTree.SourceLocation;
/**
 * Check whatever node can contain directive
 * @param node
 * @returns returns true if node can contain directive
 */
export declare function canContainDirective(node: ts.SourceFile | ts.Block | ts.ModuleBlock | ts.ClassStaticBlockDeclaration): boolean;
/**
 * Returns range for the given ts.Node
 * @param node the ts.Node or ts.Token
 * @param ast the AST object
 * @returns the range data
 */
export declare function getRange(node: ts.Node, ast: ts.SourceFile): [number, number];
/**
 * Returns true if a given ts.Node is a token
 * @param node the ts.Node
 * @returns is a token
 */
export declare function isToken(node: ts.Node): node is ts.Token<ts.TokenSyntaxKind>;
/**
 * Returns true if a given ts.Node is a JSX token
 * @param node ts.Node to be checked
 * @returns is a JSX token
 */
export declare function isJSXToken(node: ts.Node): boolean;
/**
 * Returns the declaration kind of the given ts.Node
 * @param node TypeScript AST node
 * @returns declaration kind
 */
export declare function getDeclarationKind(node: ts.VariableDeclarationList): 'let' | 'const' | 'var';
/**
 * Gets a ts.Node's accessibility level
 * @param node The ts.Node
 * @returns accessibility "public", "protected", "private", or null
 */
export declare function getTSNodeAccessibility(node: ts.Node): 'public' | 'protected' | 'private' | null;
/**
 * Finds the next token based on the previous one and its parent
 * Had to copy this from TS instead of using TS's version because theirs doesn't pass the ast to getChildren
 * @param previousToken The previous TSToken
 * @param parent The parent TSNode
 * @param ast The TS AST
 * @returns the next TSToken
 */
export declare function findNextToken(previousToken: ts.TextRange, parent: ts.Node, ast: ts.SourceFile): ts.Node | undefined;
/**
 * Find the first matching ancestor based on the given predicate function.
 * @param node The current ts.Node
 * @param predicate The predicate function to apply to each checked ancestor
 * @returns a matching parent ts.Node
 */
export declare function findFirstMatchingAncestor(node: ts.Node, predicate: (node: ts.Node) => boolean): ts.Node | undefined;
/**
 * Returns true if a given ts.Node has a JSX token within its hierarchy
 * @param node ts.Node to be checked
 * @returns has JSX ancestor
 */
export declare function hasJSXAncestor(node: ts.Node): boolean;
/**
 * Unescape the text content of string literals, e.g. &amp; -> &
 * @param text The escaped string literal text.
 * @returns The unescaped string literal text.
 */
export declare function unescapeStringLiteralText(text: string): string;
/**
 * Returns true if a given ts.Node is a computed property
 * @param node ts.Node to be checked
 * @returns is Computed Property
 */
export declare function isComputedProperty(node: ts.Node): node is ts.ComputedPropertyName;
/**
 * Returns true if a given ts.Node is optional (has QuestionToken)
 * @param node ts.Node to be checked
 * @returns is Optional
 */
export declare function isOptional(node: {
    questionToken?: ts.QuestionToken;
}): boolean;
/**
 * Returns true if the node is an optional chain node
 */
export declare function isChainExpression(node: TSESTree.Node): node is TSESTree.ChainExpression;
/**
 * Returns true of the child of property access expression is an optional chain
 */
export declare function isChildUnwrappableOptionalChain(node: ts.PropertyAccessExpression | ts.ElementAccessExpression | ts.CallExpression | ts.NonNullExpression, child: TSESTree.Node): boolean;
/**
 * Returns the type of a given ts.Token
 * @param token the ts.Token
 * @returns the token type
 */
export declare function getTokenType(token: ts.Identifier | ts.Token<ts.SyntaxKind>): Exclude<AST_TOKEN_TYPES, AST_TOKEN_TYPES.Line | AST_TOKEN_TYPES.Block>;
/**
 * Extends and formats a given ts.Token, for a given AST
 * @param token the ts.Token
 * @param ast   the AST object
 * @returns the converted Token
 */
export declare function convertToken(token: ts.Token<ts.TokenSyntaxKind>, ast: ts.SourceFile): TSESTree.Token;
/**
 * Converts all tokens for the given AST
 * @param ast the AST object
 * @returns the converted Tokens
 */
export declare function convertTokens(ast: ts.SourceFile): TSESTree.Token[];
export declare class TSError extends Error {
    readonly fileName: string;
    readonly index: number;
    readonly lineNumber: number;
    readonly column: number;
    constructor(message: string, fileName: string, index: number, lineNumber: number, column: number);
}
/**
 * @param ast     the AST object
 * @param start   the index at which the error starts
 * @param message the error message
 * @returns converted error object
 */
export declare function createError(ast: ts.SourceFile, start: number, message: string): TSError;
/**
 * @param n the TSNode
 * @param ast the TS AST
 */
export declare function nodeHasTokens(n: ts.Node, ast: ts.SourceFile): boolean;
/**
 * Like `forEach`, but suitable for use with numbers and strings (which may be falsy).
 * @template T
 * @template U
 * @param array
 * @param callback
 */
export declare function firstDefined<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
export declare function identifierIsThisKeyword(id: ts.Identifier): boolean;
export declare function isThisIdentifier(node: ts.Node | undefined): node is ts.Identifier;
export declare function isThisInTypeQuery(node: ts.Node): boolean;
export {};
//# sourceMappingURL=node-utils.d.ts.map