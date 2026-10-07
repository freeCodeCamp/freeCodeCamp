import NodeType from './type';
import HTMLElement from './html';
/**
 * Node Class as base class for TextNode and HTMLElement.
 */
export default abstract class Node {
    parentNode: HTMLElement;
    abstract nodeType: NodeType;
    childNodes: Node[];
    range: readonly [number, number];
    abstract text: string;
    abstract rawText: string;
    abstract toString(): string;
    abstract clone(): Node;
    constructor(parentNode?: HTMLElement, range?: [number, number]);
    /**
     * Remove current node
     */
    remove(): this;
    get innerText(): string;
    get textContent(): string;
    set textContent(val: string);
}
