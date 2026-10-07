import * as ts from 'typescript';
import { TSError } from './node-utils';
import { ParserWeakMap, ParserWeakMapESTreeToTSNode } from './parser-options';
import { SemanticOrSyntacticError } from './semantic-or-syntactic-errors';
import { TSESTree, TSNode } from './ts-estree';
interface ConverterOptions {
    errorOnUnknownASTType: boolean;
    shouldPreserveNodeMaps: boolean;
}
/**
 * Extends and formats a given error object
 * @param error the error object
 * @returns converted error object
 */
export declare function convertError(error: ts.DiagnosticWithLocation | SemanticOrSyntacticError): TSError;
export interface ASTMaps {
    esTreeNodeToTSNodeMap: ParserWeakMapESTreeToTSNode;
    tsNodeToESTreeNodeMap: ParserWeakMap<TSNode, TSESTree.Node>;
}
export declare class Converter {
    private readonly ast;
    private readonly options;
    private readonly esTreeNodeToTSNodeMap;
    private readonly tsNodeToESTreeNodeMap;
    private allowPattern;
    private inTypeMode;
    /**
     * Converts a TypeScript node into an ESTree node
     * @param ast the full TypeScript AST
     * @param options additional options for the conversion
     * @returns the converted ESTreeNode
     */
    constructor(ast: ts.SourceFile, options: ConverterOptions);
    getASTMaps(): ASTMaps;
    convertProgram(): TSESTree.Program;
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param node the child ts.Node
     * @param parent parentNode
     * @param inTypeMode flag to determine if we are in typeMode
     * @param allowPattern flag to determine if patterns are allowed
     * @returns the converted ESTree node
     */
    private converter;
    /**
     * Fixes the exports of the given ts.Node
     * @param node the ts.Node
     * @param result result
     * @returns the ESTreeNode with fixed exports
     */
    private fixExports;
    /**
     * Register specific TypeScript node into map with first ESTree node provided
     */
    private registerTSNodeInNodeMap;
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param child the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    private convertPattern;
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param child the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    private convertChild;
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param child the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    private convertType;
    private createNode;
    private convertBindingNameWithTypeAnnotation;
    /**
     * Converts a child into a type annotation. This creates an intermediary
     * TypeAnnotation node to match what Flow does.
     * @param child The TypeScript AST node to convert.
     * @param parent parentNode
     * @returns The type annotation node.
     */
    private convertTypeAnnotation;
    /**
     * Coverts body Nodes and add a directive field to StringLiterals
     * @param nodes of ts.Node
     * @param parent parentNode
     * @returns Array of body statements
     */
    private convertBodyExpressions;
    /**
     * Converts a ts.Node's typeArguments to TSTypeParameterInstantiation node
     * @param typeArguments ts.NodeArray typeArguments
     * @param node parent used to create this node
     * @returns TypeParameterInstantiation node
     */
    private convertTypeArgumentsToTypeParameters;
    /**
     * Converts a ts.Node's typeParameters to TSTypeParameterDeclaration node
     * @param typeParameters ts.Node typeParameters
     * @returns TypeParameterDeclaration node
     */
    private convertTSTypeParametersToTypeParametersDeclaration;
    /**
     * Converts an array of ts.Node parameters into an array of ESTreeNode params
     * @param parameters An array of ts.Node params to be converted
     * @returns an array of converted ESTreeNode params
     */
    private convertParameters;
    private convertChainExpression;
    /**
     * For nodes that are copied directly from the TypeScript AST into
     * ESTree mostly as-is. The only difference is the addition of a type
     * property instead of a kind property. Recursively copies all children.
     */
    private deeplyCopy;
    private convertJSXIdentifier;
    private convertJSXNamespaceOrIdentifier;
    /**
     * Converts a TypeScript JSX node.tagName into an ESTree node.name
     * @param node the tagName object from a JSX ts.Node
     * @param parent
     * @returns the converted ESTree name object
     */
    private convertJSXTagName;
    private convertMethodSignature;
    private convertAssertClasue;
    /**
     * Applies the given TS modifiers to the given result object.
     *
     * This method adds not standardized `modifiers` property in nodes
     *
     * @param result
     * @param modifiers original ts.Nodes from the node.modifiers array
     * @returns the current result object will be mutated
     */
    private applyModifiersToResult;
    /**
     * Uses the provided range location to adjust the location data of the given Node
     * @param result The node that will have its location data mutated
     * @param childRange The child node range used to expand location
     */
    private fixParentLocation;
    private assertModuleSpecifier;
    /**
     * Converts a TypeScript node into an ESTree node.
     * The core of the conversion logic:
     * Identify and convert each relevant TypeScript SyntaxKind
     * @param node the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    private convertNode;
}
export {};
//# sourceMappingURL=convert.d.ts.map
