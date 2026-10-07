import type { TSESTree } from '@typescript-eslint/utils';
export declare const enum NodeComparisonResult {
    /** the two nodes are comparably the same */
    Equal = "Equal",
    /** the left node is a subset of the right node */
    Subset = "Subset",
    /** the left node is not the same or is a superset of the right node */
    Invalid = "Invalid"
}
type CompareNodesArgument = TSESTree.Node | null | undefined;
/**
 * Compares two nodes' ASTs to determine if the A is equal to or a subset of B
 */
export declare function compareNodes(nodeA: CompareNodesArgument, nodeB: CompareNodesArgument): NodeComparisonResult;
export {};
