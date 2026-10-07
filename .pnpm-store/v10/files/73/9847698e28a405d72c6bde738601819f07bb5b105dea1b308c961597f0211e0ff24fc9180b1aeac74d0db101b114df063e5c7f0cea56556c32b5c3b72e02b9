import type { AST_NODE_TYPES, AST_TOKEN_TYPES, TSESTree } from '../ts-estree';
export declare const isNodeOfType: <NodeType extends AST_NODE_TYPES>(nodeType: NodeType) => (node: TSESTree.Node | null | undefined) => node is Extract<TSESTree.Node, {
    type: NodeType;
}>;
export declare const isNodeOfTypes: <NodeTypes extends readonly AST_NODE_TYPES[]>(nodeTypes: NodeTypes) => (node: TSESTree.Node | null | undefined) => node is Extract<TSESTree.Node, {
    type: NodeTypes[number];
}>;
export declare const isNodeOfTypeWithConditions: <NodeType extends AST_NODE_TYPES, ExtractedNode extends Extract<TSESTree.Node, {
    type: NodeType;
}>, Conditions extends Partial<ExtractedNode>>(nodeType: NodeType, conditions: Conditions) => ((node: TSESTree.Node | null | undefined) => node is Conditions & ExtractedNode);
export declare const isTokenOfTypeWithConditions: <TokenType extends AST_TOKEN_TYPES, ExtractedToken extends Extract<TSESTree.Token, {
    type: TokenType;
}>, Conditions extends Partial<{
    type: TokenType;
} & TSESTree.Token>>(tokenType: TokenType, conditions: Conditions) => ((token: TSESTree.Token | null | undefined) => token is Conditions & ExtractedToken);
export declare const isNotTokenOfTypeWithConditions: <TokenType extends AST_TOKEN_TYPES, ExtractedToken extends Extract<TSESTree.Token, {
    type: TokenType;
}>, Conditions extends Partial<ExtractedToken>>(tokenType: TokenType, conditions: Conditions) => ((token: TSESTree.Token | null | undefined) => token is Exclude<TSESTree.Token, Conditions & ExtractedToken>);
