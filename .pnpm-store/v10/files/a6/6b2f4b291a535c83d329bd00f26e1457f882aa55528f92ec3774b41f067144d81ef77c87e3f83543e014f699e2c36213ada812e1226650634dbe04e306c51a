import * as ts from 'typescript';
import type { TSESTree } from './ts-estree';
import { AST_NODE_TYPES, AST_TOKEN_TYPES } from './ts-estree';
declare const SyntaxKind: typeof ts.SyntaxKind;
type LogicalOperatorKind = ts.SyntaxKind.AmpersandAmpersandToken | ts.SyntaxKind.BarBarToken | ts.SyntaxKind.QuestionQuestionToken;
interface TokenToText extends TSESTree.PunctuatorTokenToText, TSESTree.BinaryOperatorToText {
    [SyntaxKind.ImportKeyword]: 'import';
    [SyntaxKind.KeyOfKeyword]: 'keyof';
    [SyntaxKind.NewKeyword]: 'new';
    [SyntaxKind.ReadonlyKeyword]: 'readonly';
    [SyntaxKind.UniqueKeyword]: 'unique';
}
type AssignmentOperatorKind = keyof TSESTree.AssignmentOperatorToText;
type BinaryOperatorKind = keyof TSESTree.BinaryOperatorToText;
type DeclarationKind = TSESTree.VariableDeclaration['kind'];
/**
 * Returns true if the given ts.Token is a logical operator
 */
export declare function isLogicalOperator(operator: ts.BinaryOperatorToken): operator is ts.Token<LogicalOperatorKind>;
export declare function isESTreeBinaryOperator(operator: ts.BinaryOperatorToken): operator is ts.Token<BinaryOperatorKind>;
type TokenForTokenKind<T extends ts.SyntaxKind> = T extends keyof TokenToText ? TokenToText[T] : string | undefined;
/**
 * Returns the string form of the given TSToken SyntaxKind
 */
export declare function getTextForTokenKind<T extends ts.SyntaxKind>(kind: T): TokenForTokenKind<T>;
/**
 * Returns true if the given ts.Node is a valid ESTree class member
 */
export declare function isESTreeClassMember(node: ts.Node): boolean;
/**
 * Checks if a ts.Node has a modifier
 */
export declare function hasModifier(modifierKind: ts.KeywordSyntaxKind, node: ts.Node): boolean;
/**
 * Get last last modifier in ast
 * @returns returns last modifier if present or null
 */
export declare function getLastModifier(node: ts.Node): ts.Modifier | null;
/**
 * Returns true if the given ts.Token is a comma
 */
export declare function isComma(token: ts.Node): token is ts.Token<ts.SyntaxKind.CommaToken>;
/**
 * Returns true if the given ts.Node is a comment
 */
export declare function isComment(node: ts.Node): boolean;
/**
 * Returns the binary expression type of the given ts.Token
 */
export declare function getBinaryExpressionType(operator: ts.BinaryOperatorToken): {
    operator: TokenForTokenKind<AssignmentOperatorKind>;
    type: AST_NODE_TYPES.AssignmentExpression;
} | {
    operator: TokenForTokenKind<BinaryOperatorKind>;
    type: AST_NODE_TYPES.BinaryExpression;
} | {
    operator: TokenForTokenKind<LogicalOperatorKind>;
    type: AST_NODE_TYPES.LogicalExpression;
};
/**
 * Returns line and column data for the given positions
 */
export declare function getLineAndCharacterFor(pos: number, ast: ts.SourceFile): TSESTree.Position;
/**
 * Returns line and column data for the given start and end positions,
 * for the given AST
 */
export declare function getLocFor(range: TSESTree.Range, ast: ts.SourceFile): TSESTree.SourceLocation;
/**
 * Check whatever node can contain directive
 */
export declare function canContainDirective(node: ts.Block | ts.ClassStaticBlockDeclaration | ts.ModuleBlock | ts.SourceFile): boolean;
/**
 * Returns range for the given ts.Node
 */
export declare function getRange(node: Pick<ts.Node, 'getEnd' | 'getStart'>, ast: ts.SourceFile): [number, number];
/**
 * Returns true if a given ts.Node is a JSX token
 */
export declare function isJSXToken(node: ts.Node): boolean;
/**
 * Returns the declaration kind of the given ts.Node
 */
export declare function getDeclarationKind(node: ts.VariableDeclarationList): DeclarationKind;
/**
 * Gets a ts.Node's accessibility level
 */
export declare function getTSNodeAccessibility(node: ts.Node): 'private' | 'protected' | 'public' | undefined;
/**
 * Finds the next token based on the previous one and its parent
 * Had to copy this from TS instead of using TS's version because theirs doesn't pass the ast to getChildren
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
 */
export declare function isComputedProperty(node: ts.Node): node is ts.ComputedPropertyName;
/**
 * Returns true if a given ts.Node is optional (has QuestionToken)
 * @param node ts.Node to be checked
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
export declare function isChildUnwrappableOptionalChain(node: ts.CallExpression | ts.ElementAccessExpression | ts.NonNullExpression | ts.PropertyAccessExpression, child: TSESTree.Node): boolean;
/**
 * Returns the type of a given ts.Token
 */
export declare function getTokenType(token: ts.Identifier | ts.Token<ts.SyntaxKind>): Exclude<AST_TOKEN_TYPES, AST_TOKEN_TYPES.Block | AST_TOKEN_TYPES.Line>;
/**
 * Extends and formats a given ts.Token, for a given AST
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
    readonly location: {
        end: {
            column: number;
            line: number;
            offset: number;
        };
        start: {
            column: number;
            line: number;
            offset: number;
        };
    };
    name: string;
    constructor(message: string, fileName: string, location: {
        end: {
            column: number;
            line: number;
            offset: number;
        };
        start: {
            column: number;
            line: number;
            offset: number;
        };
    });
    get index(): number;
    get lineNumber(): number;
    get column(): number;
}
export declare function createError(node: ts.Node, message: string): TSError;
export declare function createError(node: number | ts.Node | TSESTree.Range, message: string, sourceFile: ts.SourceFile): TSError;
export declare function nodeHasTokens(n: ts.Node, ast: ts.SourceFile): boolean;
/**
 * Like `forEach`, but suitable for use with numbers and strings (which may be falsy).
 */
export declare function firstDefined<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
export declare function identifierIsThisKeyword(id: ts.Identifier): boolean;
export declare function isThisIdentifier(node: ts.Node | undefined): node is ts.Identifier;
export declare function isThisInTypeQuery(node: ts.Node): boolean;
export declare function isValidAssignmentTarget(node: ts.Node): boolean;
export declare function getNamespaceModifiers(node: ts.ModuleDeclaration): ts.Modifier[] | undefined;
export declare function declarationNameToString(node: ts.Node): string;
export declare function isEntityNameExpression(node: ts.Node): node is ts.EntityNameExpression;
export {};
