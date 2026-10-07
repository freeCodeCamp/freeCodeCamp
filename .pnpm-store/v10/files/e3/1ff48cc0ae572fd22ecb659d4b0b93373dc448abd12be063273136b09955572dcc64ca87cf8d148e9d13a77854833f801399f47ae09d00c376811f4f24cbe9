import HTMLElement from './html';
import Node from './node';
import NodeType from './type';
/**
 * TextNode to contain a text element in DOM tree.
 * @param {string} value [description]
 */
export default class TextNode extends Node {
    clone(): TextNode;
    constructor(rawText: string, parentNode: HTMLElement, range?: [number, number]);
    /**
     * Node Type declaration.
     * @type {Number}
     */
    nodeType: NodeType;
    private _rawText;
    private _trimmedRawText?;
    private _trimmedText?;
    get rawText(): string;
    /**
     * Set rawText and invalidate trimmed caches
     */
    set rawText(text: string);
    /**
     * Returns raw text with all whitespace trimmed except single leading/trailing non-breaking space
     */
    get trimmedRawText(): string;
    /**
     * Returns text with all whitespace trimmed except single leading/trailing non-breaking space
     */
    get trimmedText(): string;
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */
    get text(): string;
    /**
     * Detect if the node contains only white space.
     * @return {boolean}
     */
    get isWhitespace(): boolean;
    toString(): string;
}
