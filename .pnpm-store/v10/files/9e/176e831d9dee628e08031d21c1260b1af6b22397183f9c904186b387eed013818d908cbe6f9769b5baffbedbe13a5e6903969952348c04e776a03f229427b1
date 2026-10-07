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
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
export declare class Node {
    type: ElementType;
    /** Parent of the node */
    parent: NodeWithChildren | null;
    /** Previous sibling */
    prev: Node | null;
    /** Next sibling */
    next: Node | null;
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
     *
     * @param type The type of the node.
     */
    constructor(type: ElementType);
    /**
     * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
     * node {@link type}.
     */
    get nodeType(): number;
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get parentNode(): NodeWithChildren | null;
    set parentNode(parent: NodeWithChildren | null);
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get previousSibling(): Node | null;
    set previousSibling(prev: Node | null);
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nextSibling(): Node | null;
    set nextSibling(next: Node | null);
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
export declare class DataNode extends Node {
    data: string;
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    constructor(type: ElementType.Comment | ElementType.Text | ElementType.Directive, data: string);
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
    constructor(data: string);
}
/**
 * Comments within the document.
 */
export declare class Comment extends DataNode {
    constructor(data: string);
}
/**
 * Processing instructions, including doc types.
 */
export declare class ProcessingInstruction extends DataNode {
    name: string;
    constructor(name: string, data: string);
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
export declare class NodeWithChildren extends Node {
    children: Node[];
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    constructor(type: ElementType.Root | ElementType.CDATA | ElementType.Script | ElementType.Style | ElementType.Tag, children: Node[]);
    /** First child of the node. */
    get firstChild(): Node | null;
    /** Last child of the node. */
    get lastChild(): Node | null;
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get childNodes(): Node[];
    set childNodes(children: Node[]);
}
/**
 * The root node of the document.
 */
export declare class Document extends NodeWithChildren {
    constructor(children: Node[]);
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
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    constructor(name: string, attribs: {
        [name: string]: string;
    }, children?: Node[], type?: ElementType.Tag | ElementType.Script | ElementType.Style);
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
export declare function isCDATA(node: Node): node is NodeWithChildren;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
export declare function isText(node: Node): node is Text;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
export declare function isComment(node: Node): node is DataNode;
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
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
export declare function hasChildren(node: Node): node is NodeWithChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
export declare function cloneNode<T extends Node>(node: T, recursive?: boolean): T;
export {};
//# sourceMappingURL=node.d.ts.map