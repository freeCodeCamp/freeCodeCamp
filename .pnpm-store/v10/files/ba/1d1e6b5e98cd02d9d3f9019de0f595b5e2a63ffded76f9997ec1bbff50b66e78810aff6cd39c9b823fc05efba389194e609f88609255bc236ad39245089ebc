import { ElementType } from "domelementtype";
interface SourceCodeLocation {
    /** One-based line index of the first character. */
    startLine: number;
    /** One-based column index of the first character. */
    startCol: number;
    /** Zero-based first character index. */
    startOffset: number;
    /** One-based line index of the last character. */
    endLine: number;
    /** One-based column index of the last character. Points directly *after* the last character. */
    endCol: number;
    /** Zero-based last character index. Points directly *after* the last character. */
    endOffset: number;
}
interface TagSourceCodeLocation extends SourceCodeLocation {
    startTag?: SourceCodeLocation;
    endTag?: SourceCodeLocation;
}
export declare type ParentNode = Document | Element | CDATA;
export declare type ChildNode = Text | Comment | ProcessingInstruction | Element | CDATA | Document;
export declare type AnyNode = ParentNode | ChildNode;
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
export declare abstract class Node {
    /** The type of the node. */
    abstract readonly type: ElementType;
    /** Parent of the node */
    parent: ParentNode | null;
    /** Previous sibling */
    prev: ChildNode | null;
    /** Next sibling */
    next: ChildNode | null;
    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
    startIndex: number | null;
    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
    endIndex: number | null;
    /**
     * `parse5` source code location info.
     *
     * Available if parsing with parse5 and location info is enabled.
     */
    sourceCodeLocation?: SourceCodeLocation | null;
    /**
     * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
     * node {@link type}.
     */
    abstract readonly nodeType: number;
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get parentNode(): ParentNode | null;
    set parentNode(parent: ParentNode | null);
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get previousSibling(): ChildNode | null;
    set previousSibling(prev: ChildNode | null);
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nextSibling(): ChildNode | null;
    set nextSibling(next: ChildNode | null);
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    cloneNode<T extends Node>(this: T, recursive?: boolean): T;
}
/**
 * A node that contains some data.
 */
export declare abstract class DataNode extends Node {
    data: string;
    /**
     * @param data The content of the data node
     */
    constructor(data: string);
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nodeValue(): string;
    set nodeValue(data: string);
}
/**
 * Text within the document.
 */
export declare class Text extends DataNode {
    type: ElementType.Text;
    get nodeType(): 3;
}
/**
 * Comments within the document.
 */
export declare class Comment extends DataNode {
    type: ElementType.Comment;
    get nodeType(): 8;
}
/**
 * Processing instructions, including doc types.
 */
export declare class ProcessingInstruction extends DataNode {
    name: string;
    type: ElementType.Directive;
    constructor(name: string, data: string);
    get nodeType(): 1;
    /** If this is a doctype, the document type name (parse5 only). */
    "x-name"?: string;
    /** If this is a doctype, the document type public identifier (parse5 only). */
    "x-publicId"?: string;
    /** If this is a doctype, the document type system identifier (parse5 only). */
    "x-systemId"?: string;
}
/**
 * A `Node` that can have children.
 */
export declare abstract class NodeWithChildren extends Node {
    children: ChildNode[];
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    constructor(children: ChildNode[]);
    /** First child of the node. */
    get firstChild(): ChildNode | null;
    /** Last child of the node. */
    get lastChild(): ChildNode | null;
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get childNodes(): ChildNode[];
    set childNodes(children: ChildNode[]);
}
export declare class CDATA extends NodeWithChildren {
    type: ElementType.CDATA;
    get nodeType(): 4;
}
/**
 * The root node of the document.
 */
export declare class Document extends NodeWithChildren {
    type: ElementType.Root;
    get nodeType(): 9;
    /** [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks) (parse5 only). */
    "x-mode"?: "no-quirks" | "quirks" | "limited-quirks";
}
/**
 * The description of an individual attribute.
 */
interface Attribute {
    name: string;
    value: string;
    namespace?: string;
    prefix?: string;
}
/**
 * An element within the DOM.
 */
export declare class Element extends NodeWithChildren {
    name: string;
    attribs: {
        [name: string]: string;
    };
    type: ElementType.Tag | ElementType.Script | ElementType.Style;
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    constructor(name: string, attribs: {
        [name: string]: string;
    }, children?: ChildNode[], type?: ElementType.Tag | ElementType.Script | ElementType.Style);
    get nodeType(): 1;
    /**
     * `parse5` source code location info, with start & end tags.
     *
     * Available if parsing with parse5 and location info is enabled.
     */
    sourceCodeLocation?: TagSourceCodeLocation | null;
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get tagName(): string;
    set tagName(name: string);
    get attributes(): Attribute[];
    /** Element namespace (parse5 only). */
    namespace?: string;
    /** Element attribute namespaces (parse5 only). */
    "x-attribsNamespace"?: Record<string, string>;
    /** Element attribute namespace-related prefixes (parse5 only). */
    "x-attribsPrefix"?: Record<string, string>;
}
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
export declare function isTag(node: Node): node is Element;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
export declare function isCDATA(node: Node): node is CDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
export declare function isText(node: Node): node is Text;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
export declare function isComment(node: Node): node is Comment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
export declare function isDirective(node: Node): node is ProcessingInstruction;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
export declare function isDocument(node: Node): node is Document;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
export declare function hasChildren(node: Node): node is ParentNode;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
export declare function cloneNode<T extends Node>(node: T, recursive?: boolean): T;
export {};
//# sourceMappingURL=node.d.ts.map