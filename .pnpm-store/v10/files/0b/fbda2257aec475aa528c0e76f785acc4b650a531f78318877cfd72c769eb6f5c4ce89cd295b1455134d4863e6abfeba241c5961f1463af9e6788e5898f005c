import { Node } from "domhandler";
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */
export declare function removeSubsets(nodes: Node[]): Node[];
export declare const enum DocumentPosition {
    DISCONNECTED = 1,
    PRECEDING = 2,
    FOLLOWING = 4,
    CONTAINS = 8,
    CONTAINED_BY = 16
}
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
export declare function compareDocumentPosition(nodeA: Node, nodeB: Node): number;
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
export declare function uniqueSort<T extends Node>(nodes: T[]): T[];
//# sourceMappingURL=helpers.d.ts.map