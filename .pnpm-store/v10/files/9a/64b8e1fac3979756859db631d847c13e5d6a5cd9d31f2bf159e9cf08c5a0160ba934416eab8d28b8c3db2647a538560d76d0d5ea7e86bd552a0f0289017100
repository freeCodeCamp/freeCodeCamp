import HTMLElement from './html';
import Node from './node';
import NodeType from './type';
export default class CommentNode extends Node {
    rawText: string;
    clone(): CommentNode;
    constructor(rawText: string, parentNode: HTMLElement, range?: [number, number]);
    /**
     * Node Type declaration.
     * @type {Number}
     */
    nodeType: NodeType;
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */
    get text(): string;
    toString(): string;
}
