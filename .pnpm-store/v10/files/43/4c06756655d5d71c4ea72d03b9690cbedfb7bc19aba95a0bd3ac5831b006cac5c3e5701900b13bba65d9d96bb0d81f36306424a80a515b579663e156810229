import * as ts from 'typescript';
import type { TSError } from './node-utils';
import type { ParserWeakMap, ParserWeakMapESTreeToTSNode } from './parser-options';
import type { SemanticOrSyntacticError } from './semantic-or-syntactic-errors';
import type { TSESTree, TSNode } from './ts-estree';
export interface ConverterOptions {
    allowInvalidAST?: boolean;
    errorOnUnknownASTType?: boolean;
    shouldPreserveNodeMaps?: boolean;
    suppressDeprecatedPropertyWarnings?: boolean;
}
/**
 * Extends and formats a given error object
 * @param error the error object
 * @returns converted error object
 */
export declare function convertError(error: SemanticOrSyntacticError | ts.DiagnosticWithLocation): TSError;
export interface ASTMaps {
    esTreeNodeToTSNodeMap: ParserWeakMapESTreeToTSNode;
    tsNodeToESTreeNodeMap: ParserWeakMap<TSNode, TSESTree.Node>;
}
export declare class Converter {
    #private;
    private allowPattern;
    private readonly ast;
    private readonly esTreeNodeToTSNodeMap;
    private readonly options;
    private readonly tsNodeToESTreeNodeMap;
    /**
     * Converts a TypeScript node into an ESTree node
     * @param ast the full TypeScript AST
     * @param options additional options for the conversion
     * @returns the converted ESTreeNode
     */
    constructor(ast: ts.SourceFile, options?: ConverterOptions);
    private convertBindingNameWithTypeAnnotation;
    /**
     * Coverts body Nodes and add a directive field to StringLiterals
     * @param nodes of ts.Node
     * @param parent parentNode
     * @returns Array of body statements
     */
    private convertBodyExpressions;
    private convertChainExpression;
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param child the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    private convertChild;
    /**
     * Converts TypeScript node array into an ESTree node list.
     * @param children the child `ts.NodeArray` or `ts.Node[]`
     * @param parent parentNode
     * @returns the converted ESTree node list
     */
    private convertChildren;
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param child the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    private convertPattern;
    /**
     * Converts a child into a type annotation. This creates an intermediary
     * TypeAnnotation node to match what Flow does.
     * @param child The TypeScript AST node to convert.
     * @param parent parentNode
     * @returns The type annotation node.
     */
    private convertTypeAnnotation;
    /**
     * Converts a ts.Node's typeArguments to TSTypeParameterInstantiation node
     * @param typeArguments ts.NodeArray typeArguments
     * @param node parent used to create this node
     * @returns TypeParameterInstantiation node
     */
    private convertTypeArguments;
    /**
     * Converts a ts.Node's typeParameters to TSTypeParameterDeclaration node
     * @param typeParameters ts.Node typeParameters
     * @returns TypeParameterDeclaration node
     */
    private convertTypeParameters;
    /**
     * Converts an array of ts.Node parameters into an array of ESTreeNode params
     * @param parameters An array of ts.Node params to be converted
     * @returns an array of converted ESTreeNode params
     */
    private convertParameters;
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param node the child ts.Node
     * @param parent parentNode
     * @param allowPattern flag to determine if patterns are allowed
     * @returns the converted ESTree node
     */
    private converter;
    private convertImportAttributes;
    private convertJSXIdentifier;
    private convertJSXNamespaceOrIdentifier;
    /**
     * Converts a TypeScript JSX node.tagName into an ESTree node.name
     * @param node the tagName object from a JSX ts.Node
     * @returns the converted ESTree name object
     */
    private convertJSXTagName;
    private convertMethodSignature;
    /**
     * Uses the provided range location to adjust the location data of the given Node
     * @param result The node that will have its location data mutated
     * @param childRange The child node range used to expand location
     */
    private fixParentLocation;
    /**
     * Converts a TypeScript node into an ESTree node.
     * The core of the conversion logic:
     * Identify and convert each relevant TypeScript SyntaxKind
     * @returns the converted ESTree node
     */
    private convertNode;
    private createNode;
    convertProgram(): TSESTree.Program;
    /**
     * For nodes that are copied directly from the TypeScript AST into
     * ESTree mostly as-is. The only difference is the addition of a type
     * property instead of a kind property. Recursively copies all children.
     */
    private deeplyCopy;
    /**
     * Fixes the exports of the given ts.Node
     * @returns the ESTreeNode with fixed exports
     */
    private fixExports;
    getASTMaps(): ASTMaps;
    /**
     * Register specific TypeScript node into map with first ESTree node provided
     */
    private registerTSNodeInNodeMap;
}
