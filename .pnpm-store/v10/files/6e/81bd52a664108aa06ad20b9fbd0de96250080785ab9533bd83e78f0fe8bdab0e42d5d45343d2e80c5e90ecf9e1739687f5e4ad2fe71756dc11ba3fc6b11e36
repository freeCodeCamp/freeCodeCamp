import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
interface WrappingFixerParams {
    /**
     * Descendant of `node` we want to preserve.
     * Use this to replace some code with another.
     * By default it's the node we are modifying (so nothing is removed).
     * You can pass multiple nodes as an array.
     */
    innerNode?: TSESTree.Node | TSESTree.Node[];
    /** The node we want to modify. */
    node: TSESTree.Node;
    /** Source code. */
    sourceCode: Readonly<TSESLint.SourceCode>;
    /**
     * The function which gets the code of the `innerNode` and returns some code around it.
     * Receives multiple arguments if there are multiple innerNodes.
     * E.g. ``code => `${code} != null` ``
     */
    wrap?: (...code: string[]) => string;
}
/**
 * Wraps node with some code. Adds parentheses as necessary.
 * @returns Fixer which adds the specified code and parens if necessary.
 */
export declare function getWrappingFixer(params: WrappingFixerParams): (fixer: TSESLint.RuleFixer) => TSESLint.RuleFix;
/**
 * If the node to be moved and the destination node require parentheses, include parentheses in the node to be moved.
 * @param sourceCode Source code of current file
 * @param nodeToMove Nodes that need to be moved
 * @param destinationNode Final destination node with nodeToMove
 * @returns If parentheses are required, code for the nodeToMove node is returned with parentheses at both ends of the code.
 */
export declare function getMovedNodeCode(params: {
    destinationNode: TSESTree.Node;
    nodeToMove: TSESTree.Node;
    sourceCode: Readonly<TSESLint.SourceCode>;
}): string;
/**
 * Check if a node will always have the same precedence if its parent changes.
 */
export declare function isStrongPrecedenceNode(innerNode: TSESTree.Node): boolean;
/**
 * Check if a node's parent could have different precedence if the node changes.
 */
export declare function isWeakPrecedenceParent(node: TSESTree.Node): boolean;
export {};
