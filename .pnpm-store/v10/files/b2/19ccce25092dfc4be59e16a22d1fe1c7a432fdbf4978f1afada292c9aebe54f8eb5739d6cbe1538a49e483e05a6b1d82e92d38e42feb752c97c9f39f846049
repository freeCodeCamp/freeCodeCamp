import { Node, Element, NodeWithChildren } from "domhandler";
/**
 * Get a node's children.
 *
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
export declare function getChildren(elem: Node): Node[];
export declare function getParent(elem: Element): Element | null;
export declare function getParent(elem: Node): NodeWithChildren | null;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first.
 * If we don't have a parent (the element is a root node),
 * we walk the element's `prev` & `next` to get all remaining nodes.
 *
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */
export declare function getSiblings(elem: Node): Node[];
/**
 * Gets an attribute from an element.
 *
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
export declare function getAttributeValue(elem: Element, name: string): string | undefined;
/**
 * Checks whether an element has an attribute.
 *
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
export declare function hasAttrib(elem: Element, name: string): boolean;
/**
 * Get the tag name of an element.
 *
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
export declare function getName(elem: Element): string;
/**
 * Returns the next element sibling of a node.
 *
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */
export declare function nextElementSibling(elem: Node): Element | null;
/**
 * Returns the previous element sibling of a node.
 *
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */
export declare function prevElementSibling(elem: Node): Element | null;
//# sourceMappingURL=traversal.d.ts.map