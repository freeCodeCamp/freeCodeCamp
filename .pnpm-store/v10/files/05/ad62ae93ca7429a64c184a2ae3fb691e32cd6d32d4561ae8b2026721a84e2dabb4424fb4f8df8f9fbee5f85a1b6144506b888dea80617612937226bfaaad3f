import { AnyNode, Element } from "domhandler";
import type { ElementType } from "domelementtype";
/**
 * An object with keys to check elements against. If a key is `tag_name`,
 * `tag_type` or `tag_contains`, it will check the value against that specific
 * value. Otherwise, it will check an attribute with the key's name.
 *
 * @category Legacy Query Functions
 */
export interface TestElementOpts {
    tag_name?: string | ((name: string) => boolean);
    tag_type?: string | ((name: string) => boolean);
    tag_contains?: string | ((data?: string) => boolean);
    [attributeName: string]: undefined | string | ((attributeValue: string) => boolean);
}
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
export declare function testElement(options: TestElementOpts, node: AnyNode): boolean;
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
export declare function getElements(options: TestElementOpts, nodes: AnyNode | AnyNode[], recurse: boolean, limit?: number): AnyNode[];
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
export declare function getElementById(id: string | ((id: string) => boolean), nodes: AnyNode | AnyNode[], recurse?: boolean): Element | null;
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
export declare function getElementsByTagName(tagName: string | ((name: string) => boolean), nodes: AnyNode | AnyNode[], recurse?: boolean, limit?: number): Element[];
/**
 * Returns all nodes with the supplied `className`.
 *
 * @category Legacy Query Functions
 * @param className Class name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `className`.
 */
export declare function getElementsByClassName(className: string | ((name: string) => boolean), nodes: AnyNode | AnyNode[], recurse?: boolean, limit?: number): Element[];
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
export declare function getElementsByTagType(type: ElementType | ((type: ElementType) => boolean), nodes: AnyNode | AnyNode[], recurse?: boolean, limit?: number): AnyNode[];
//# sourceMappingURL=legacy.d.ts.map