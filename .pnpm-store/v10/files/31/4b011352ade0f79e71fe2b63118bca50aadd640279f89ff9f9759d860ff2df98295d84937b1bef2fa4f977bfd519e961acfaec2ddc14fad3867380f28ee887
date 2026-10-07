import VoidTag from '../void-tag';
import Node from './node';
import NodeType from './type';
export interface KeyAttributes {
    id?: string;
    class?: string;
}
export interface Attributes {
    [key: string]: string;
}
export interface RawAttributes {
    [key: string]: string;
}
export declare type InsertPosition = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
declare class DOMTokenList {
    private _set;
    private _afterUpdate;
    private _validate;
    constructor(valuesInit?: string[], afterUpdate?: (t: DOMTokenList) => void);
    add(c: string): void;
    replace(c1: string, c2: string): void;
    remove(c: string): void;
    toggle(c: string): void;
    contains(c: string): boolean;
    get length(): number;
    values(): IterableIterator<string>;
    get value(): string[];
    toString(): string;
}
/**
 * HTMLElement, which contains a set of children.
 *
 * Note: this is a minimalist implementation, no complete tree
 *   structure provided (no parentNode, nextSibling,
 *   previousSibling etc).
 * @class HTMLElement
 * @extends {Node}
 */
export default class HTMLElement extends Node {
    rawAttrs: string;
    private voidTag;
    private _attrs;
    private _rawAttrs;
    rawTagName: string;
    id: string;
    classList: DOMTokenList;
    /**
     * Node Type declaration.
     */
    nodeType: NodeType;
    /**
     * Quote attribute values
     * @param attr attribute value
     * @returns {string} quoted value
     */
    private quoteAttribute;
    /**
     * Creates an instance of HTMLElement.
     * @param keyAttrs	id and class attribute
     * @param [rawAttrs]	attributes in string
     *
     * @memberof HTMLElement
     */
    constructor(tagName: string, keyAttrs: KeyAttributes, rawAttrs: string, parentNode: HTMLElement | null, range: [number, number], voidTag?: VoidTag);
    /**
     * Remove Child element from childNodes array
     * @param {HTMLElement} node     node to remove
     */
    removeChild(node: Node): this;
    /**
     * Exchanges given child with new child
     * @param {HTMLElement} oldNode     node to exchange
     * @param {HTMLElement} newNode     new node
     */
    exchangeChild(oldNode: Node, newNode: Node): this;
    get tagName(): string;
    set tagName(newname: string);
    get localName(): string;
    get isVoidElement(): boolean;
    /**
     * Get escpaed (as-it) text value of current node and its children.
     * @return {string} text content
     */
    get rawText(): string;
    get textContent(): string;
    set textContent(val: string);
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */
    get text(): string;
    /**
     * Get structured Text (with '\n' etc.)
     * @return {string} structured text
     */
    get structuredText(): string;
    toString(): string;
    get innerHTML(): string;
    set innerHTML(content: string);
    set_content(content: string | Node | Node[], options?: Partial<Options>): this;
    replaceWith(...nodes: (string | Node)[]): void;
    get outerHTML(): string;
    /**
     * Trim element from right (in block) after seeing pattern in a TextNode.
     * @param  {RegExp} pattern pattern to find
     * @return {HTMLElement}    reference to current node
     */
    trimRight(pattern: RegExp): this;
    /**
     * Get DOM structure
     * @return {string} strucutre
     */
    get structure(): string;
    /**
     * Remove whitespaces in this sub tree.
     * @return {HTMLElement} pointer to this
     */
    removeWhitespace(): this;
    /**
     * Query CSS selector to find matching nodes.
     * @param  {string}         selector Simplified CSS selector
     * @return {HTMLElement[]}  matching elements
     */
    querySelectorAll(selector: string): HTMLElement[];
    /**
     * Query CSS Selector to find matching node.
     * @param  {string}         selector Simplified CSS selector
     * @return {(HTMLElement|null)}    matching node
     */
    querySelector(selector: string): HTMLElement | null;
    /**
     * find elements by their tagName
     * @param {string} tagName the tagName of the elements to select
     */
    getElementsByTagName(tagName: string): Array<HTMLElement>;
    /**
     * find element by it's id
     * @param {string} id the id of the element to select
     */
    getElementById(id: string): HTMLElement;
    /**
     * traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.
     * @param selector a DOMString containing a selector list
     */
    closest(selector: string): Node;
    /**
     * Append a child node to childNodes
     * @param  {Node} node node to append
     * @return {Node}      node appended
     */
    appendChild<T extends Node = Node>(node: T): T;
    /**
     * Get first child node
     * @return {Node} first child node
     */
    get firstChild(): Node;
    /**
     * Get last child node
     * @return {Node} last child node
     */
    get lastChild(): Node;
    /**
     * Get attributes
     * @access private
     * @return {Object} parsed and unescaped attributes
     */
    get attrs(): Attributes;
    get attributes(): Record<string, string>;
    /**
     * Get escaped (as-is) attributes
     * @return {Object} parsed attributes
     */
    get rawAttributes(): RawAttributes;
    removeAttribute(key: string): this;
    hasAttribute(key: string): boolean;
    /**
     * Get an attribute
     * @return {string} value of the attribute
     */
    getAttribute(key: string): string | undefined;
    /**
     * Set an attribute value to the HTMLElement
     * @param {string} key The attribute name
     * @param {string} value The value to set, or null / undefined to remove an attribute
     */
    setAttribute(key: string, value: string): void;
    /**
     * Replace all the attributes of the HTMLElement by the provided attributes
     * @param {Attributes} attributes the new attribute set
     */
    setAttributes(attributes: Attributes): this;
    insertAdjacentHTML(where: InsertPosition, html: string): this;
    get nextSibling(): Node;
    get nextElementSibling(): HTMLElement;
    get previousSibling(): Node;
    get previousElementSibling(): HTMLElement;
    get classNames(): string;
    /**
     * Clone this Node
     */
    clone(): Node;
}
export interface Options {
    lowerCaseTagName: boolean;
    comment: boolean;
    parseNoneClosedTags?: boolean;
    blockTextElements: {
        [tag: string]: boolean;
    };
    voidTag?: {
        /**
         * options, default value is ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
         */
        tags?: string[];
        /**
         * void tag serialisation, add a final slash <br/>
         */
        closingSlash?: boolean;
    };
}
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 * @param  {string} data      html
 * @return {HTMLElement}      root element
 */
export declare function base_parse(data: string, options?: Partial<Options>): HTMLElement[];
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */
export declare function parse(data: string, options?: Partial<Options>): HTMLElement;
export {};
