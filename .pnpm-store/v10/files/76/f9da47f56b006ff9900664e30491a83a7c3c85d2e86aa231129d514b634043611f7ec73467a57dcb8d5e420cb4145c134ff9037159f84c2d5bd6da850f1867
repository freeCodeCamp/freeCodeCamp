import { NonRootResult } from './result/NonRootResult';
import { RootResult } from './result/RootResult';
/**
 * A node visitor function.
 * @param node the visited node.
 * @param parentNode the parent node.
 * @param property the property on the parent node that contains the visited node. It can be the node itself or
 *  an array of nodes.
 */
export type NodeVisitor = (node: NonRootResult, parentNode?: NonRootResult, property?: string) => void;
/**
 * A function to traverse an AST. It traverses it depth first.
 * @param node the node to start traversing at.
 * @param onEnter node visitor function that will be called on entering the node. This corresponds to preorder traversing.
 * @param onLeave node visitor function that will be called on leaving the node. This corresponds to postorder traversing.
 */
export declare function traverse(node: RootResult, onEnter?: NodeVisitor, onLeave?: NodeVisitor): void;
