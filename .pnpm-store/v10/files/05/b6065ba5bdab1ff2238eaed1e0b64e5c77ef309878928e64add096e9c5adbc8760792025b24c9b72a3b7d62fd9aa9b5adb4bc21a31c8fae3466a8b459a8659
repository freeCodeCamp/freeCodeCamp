import { Node, Element } from "domhandler";
import { ElementType } from "domelementtype";
interface TestElementOpts {
    tag_name?: string | ((name: string) => boolean);
    tag_type?: string | ((name: string) => boolean);
    tag_contains?: string | ((data?: string) => boolean);
    [attributeName: string]: undefined | string | ((attributeValue: string) => boolean);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
export declare function testElement(options: TestElementOpts, node: Node): boolean;
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
export declare function getElements(options: TestElementOpts, nodes: Node | Node[], recurse: boolean, limit?: number): Node[];
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
export declare function getElementById(id: string | ((id: string) => boolean), nodes: Node | Node[], recurse?: boolean): Element | null;
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
export declare function getElementsByTagName(tagName: string | ((name: string) => boolean), nodes: Node | Node[], recurse?: boolean, limit?: number): Element[];
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
export declare function getElementsByTagType(type: ElementType | ((type: ElementType) => boolean), nodes: Node | Node[], recurse?: boolean, limit?: number): Node[];
export {};
//# sourceMappingURL=legacy.d.ts.map