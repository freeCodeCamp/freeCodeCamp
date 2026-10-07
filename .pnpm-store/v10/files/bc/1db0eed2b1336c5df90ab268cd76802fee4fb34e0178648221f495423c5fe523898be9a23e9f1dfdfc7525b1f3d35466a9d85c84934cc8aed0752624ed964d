// Type definitions for parse5 5.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Ivan Nikulin <https://github.com/inikulin>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Location {
    /**
     * One-based column index of the last character
     */
    endCol: number;

    /**
     * Zero-based last character index
     */
    endOffset: number;

    /**
     * One-based line index of the last character
     */
    endLine: number;

    /**
     * One-based column index of the first character
     */
    startCol: number;

    /**
     * Zero-based first character index
     */
    startOffset: number;

    /**
     * One-based line index of the first character
     */
    startLine: number;
}

export interface AttributesLocation {
    [attributeName: string]: Location;
}

export interface StartTagLocation extends Location {
    /**
     * Start tag attributes' location info
     */
    attrs: AttributesLocation;
}

export interface ElementLocation extends StartTagLocation {
    /**
     * Element's start tag location info.
     */
    startTag: StartTagLocation;

    /**
     * Element's end tag location info.
     */
    endTag: Location;
}

export interface ParserOptions {
    /**
     * The [scripting flag](https://html.spec.whatwg.org/multipage/parsing.html#scripting-flag). If set
     * to `true`, `noscript` element content will be parsed as text.
     *
     *  **Default:** `true`
     */
    scriptingEnabled?: boolean;

    /**
     * Enables source code location information. When enabled, each node (except the root node)
     * will have a `sourceCodeLocation` property. If the node is not an empty element, `sourceCodeLocation` will
     * be a {@link ElementLocation} object, otherwise it will be {@link Location}.
     * If the element was implicitly created by the parser (as part of
     * [tree correction](https://html.spec.whatwg.org/multipage/syntax.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser)),
     * its `sourceCodeLocation` property will be `undefined`.
     *
     * **Default:** `false`
     */
    sourceCodeLocationInfo?: boolean;

    /**
     * Specifies the resulting tree format.
     *
     * **Default:** `treeAdapters.default`
     */
    treeAdapter?: TreeAdapter;
}

export interface SerializerOptions {
    /***
     * Specifies input tree format.
     *
     * **Default:** `treeAdapters.default`
     */
    treeAdapter?: TreeAdapter;
}

/**
 * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
 */
export type DocumentMode = "no-quirks" | "quirks" | "limited-quirks";

// Default tree adapter

/**
 * Element attribute.
 */
export interface Attribute {
    /**
     * The name of the attribute.
     */
    name: string;

    /**
     * The value of the attribute.
     */
    value: string;

    /**
     * The namespace of the attribute.
     */
    namespace?: string;

    /**
     * The namespace-related prefix of the attribute.
     */
    prefix?: string;
}

/**
 * Default tree adapter Node interface.
 */
export interface DefaultTreeNode {
    /**
     * The name of the node. E.g. {@link Document} will have `nodeName` equal to '#document'`.
     */
    nodeName: string;
}

/**
 * Default tree adapter ParentNode interface.
 */
export interface DefaultTreeParentNode extends DefaultTreeNode {
    /**
     * Child nodes.
     */
    childNodes: DefaultTreeNode[];
}

/**
 * Default tree adapter ChildNode interface.
 */
export interface DefaultTreeChildNode extends DefaultTreeNode {
    /**
     * Parent node.
     */
    parentNode: DefaultTreeParentNode;
}

/**
 * Default tree adapter DocumentType interface.
 */
export interface DefaultTreeDocumentType extends DefaultTreeNode {
    /**
     * The name of the node.
     */
    nodeName: "#documentType";

    /**
     * Document type name.
     */
    name: string;

    /**
     * Document type public identifier.
     */
    publicId: string;

    /**
     * Document type system identifier.
     */
    systemId: string;
}

/**
 * Default tree adapter Document interface.
 */
export interface DefaultTreeDocument extends DefaultTreeParentNode {
    /**
     * The name of the node.
     */
    nodeName: "#document";

    /**
     * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     */
    mode: DocumentMode;
}

/**
 * Default tree adapter DocumentFragment interface.
 */
export interface DefaultTreeDocumentFragment extends DefaultTreeParentNode {
    /**
     * The name of the node.
     */
    nodeName: "#document-fragment";
}

/**
 * Default tree adapter Element interface.
 */
export interface DefaultTreeElement extends DefaultTreeChildNode, DefaultTreeParentNode {
    /**
     * The name of the node. Equals to element {@link tagName}.
     */
    nodeName: string;

    /**
     * Element tag name.
     */
    tagName: string;

    /**
     * Element namespace.
     */
    namespaceURI: string;

    /**
     * List of element attributes.
     */
    attrs: Attribute[];

    /**
     * Element source code location info. Available if location info is enabled via {@link ParserOptions}.
     */
    sourceCodeLocation?: ElementLocation;
}

/**
 * Default tree adapter CommentNode interface.
 */
export interface DefaultTreeCommentNode extends DefaultTreeChildNode {
    /**
     * The name of the node.
     */
    nodeName: "#comment";

    /**
     * Comment text.
     */
    data: string;

    /**
     * Comment source code location info. Available if location info is enabled via {@link ParserOptions}.
     */
    sourceCodeLocation?: Location;
}

/**
 * Default tree adapter TextNode interface.
 */
export interface DefaultTreeTextNode extends DefaultTreeChildNode {
    /**
     * The name of the node.
     */
    nodeName: "#text";

    /**
     * Text content.
     */
    value: string;

    /**
     * Text node source code location info. Available if location info is enabled via {@link ParserOptions}.
     */
    sourceCodeLocation?: Location;
}

// Generic node interfaces
/**
 * Generic Node interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeNode}) to get access to the properties.
 */
export type Node = DefaultTreeNode | object;

/**
 * Generic ChildNode interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeChildNode}) to get access to the properties.
 */
export type ChildNode = DefaultTreeChildNode | object;

/**
 * Generic ParentNode interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeParentNode}) to get access to the properties.
 */
export type ParentNode = DefaultTreeParentNode | object;

/**
 * Generic DocumentType interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeDocumentType}) to get access to the properties.
 */
export type DocumentType = DefaultTreeDocumentType | object;

/**
 * Generic Document interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeDocument}) to get access to the properties.
 */
export type Document = DefaultTreeDocument | object;

/**
 * Generic DocumentFragment interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeDocumentFragment}) to get access to the properties.
 */
export type DocumentFragment = DefaultTreeDocumentFragment | object;

/**
 * Generic Element interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeElement}) to get access to the properties.
 */
export type Element = DefaultTreeElement | object;

/**
 * Generic TextNode interface.
 * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeTextNode}) to get access to the properties.
 */
export type TextNode = DefaultTreeTextNode | object;

/**
 * Generic CommentNode interface.
 * Cast to the actual AST interface (e.g. {@link parse5.Default.CommentNode}) to get access to the properties.
 */
export type CommentNode = DefaultTreeCommentNode | object;

/**
 * Tree adapter is a set of utility functions that provides minimal required abstraction layer beetween parser and a specific AST format.
 * Note that `TreeAdapter` is not designed to be a general purpose AST manipulation library. You can build such library
 * on top of existing `TreeAdapter` or use one of the existing libraries from npm.
 *
 * @see [default implementation](https://github.com/inikulin/parse5/blob/master/packages/parse5/lib/tree-adapters/default.js)
 */
export interface TreeAdapter {
    /**
     * Copies attributes to the given element. Only attributes that are not yet present in the element are copied.
     *
     * @param recipient - Element to copy attributes into.
     * @param attrs - Attributes to copy.
     */
    adoptAttributes(recipient: Element, attrs: Attribute[]): void;

    /**
     * Appends a child node to the given parent node.
     *
     * @param parentNode - Parent node.
     * @param newNode -  Child node.
     */
    appendChild(parentNode: ParentNode, newNode: Node): void;

    /**
     * Creates a comment node.
     *
     * @param data - Comment text.
     */
    createCommentNode(data: string): CommentNode;

    /**
     * Creates a document node.
     */
    createDocument(): Document;

    /**
     * Creates a document fragment node.
     */
    createDocumentFragment(): DocumentFragment;

    /**
     * Creates an element node.
     *
     * @param tagName - Tag name of the element.
     * @param namespaceURI - Namespace of the element.
     * @param attrs - Attribute name-value pair array. Foreign attributes may contain `namespace` and `prefix` fields as well.
     */
    createElement(
        tagName: string,
        namespaceURI: string,
        attrs: Attribute[]
    ): Element;

    /**
     * Removes a node from its parent.
     *
     * @param node - Node to remove.
     */
    detachNode(node: Node): void;

    /**
     * Returns the given element's attributes in an array, in the form of name-value pairs.
     * Foreign attributes may contain `namespace` and `prefix` fields as well.
     *
     * @param element - Element.
     */
    getAttrList(element: Element): Attribute[];

    /**
     * Returns the given node's children in an array.
     *
     * @param node - Node.
     */
    getChildNodes(node: ParentNode): Node[];

    /**
     * Returns the given comment node's content.
     *
     * @param commentNode - Comment node.
     */
    getCommentNodeContent(commentNode: CommentNode): string;

    /**
     * Returns [document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     *
     * @param document - Document node.
     */
    getDocumentMode(document: Document): DocumentMode;

    /**
     * Returns the given document type node's name.
     *
     * @param doctypeNode - Document type node.
     */
    getDocumentTypeNodeName(doctypeNode: DocumentType): string;

    /**
     * Returns the given document type node's public identifier.
     *
     * @param doctypeNode - Document type node.
     */
    getDocumentTypeNodePublicId(doctypeNode: DocumentType): string;

    /**
     * Returns the given document type node's system identifier.
     *
     * @param doctypeNode - Document type node.
     */
    getDocumentTypeNodeSystemId(doctypeNode: DocumentType): string;

    /**
     * Returns the first child of the given node.
     *
     * @param node - Node.
     */
    getFirstChild(node: ParentNode): Node;

    /**
     * Returns the given element's namespace.
     *
     * @param element - Element.
     */
    getNamespaceURI(element: Element): string;

    /**
     * Returns the given node's source code location information.
     *
     * @param node - Node.
     */
    getNodeSourceCodeLocation(node: Node): Location | StartTagLocation | ElementLocation;

    /**
     * Returns the given node's parent.
     *
     * @param node - Node.
     */
    getParentNode(node: ChildNode): ParentNode;

    /**
     * Returns the given element's tag name.
     *
     * @param element - Element.
     */
    getTagName(element: Element): string;

    /**
     * Returns the given text node's content.
     *
     * @param textNode - Text node.
     */
    getTextNodeContent(textNode: TextNode): string;

    /**
     * Returns the `<template>` element content element.
     *
     * @param templateElement - `<template>` element.
     */
    getTemplateContent(templateElement: Element): DocumentFragment;

    /**
     * Inserts a child node to the given parent node before the given reference node.
     *
     * @param parentNode - Parent node.
     * @param newNode -  Child node.
     * @param referenceNode -  Reference node.
     */
    insertBefore(
        parentNode: ParentNode,
        newNode: Node,
        referenceNode: Node
    ): void;

    /**
     * Inserts text into a node. If the last child of the node is a text node, the provided text will be appended to the
     * text node content. Otherwise, inserts a new text node with the given text.
     *
     * @param parentNode - Node to insert text into.
     * @param text - Text to insert.
     */
    insertText(parentNode: ParentNode, text: string): void;

    /**
     * Inserts text into a sibling node that goes before the reference node. If this sibling node is the text node,
     * the provided text will be appended to the text node content. Otherwise, inserts a new sibling text node with
     * the given text before the reference node.
     *
     * @param parentNode - Node to insert text into.
     * @param text - Text to insert.
     * @param referenceNode - Node to insert text before.
     */
    insertTextBefore(
        parentNode: ParentNode,
        text: string,
        referenceNode: Node
    ): void;

    /**
     * Determines if the given node is a comment node.
     *
     * @param node - Node.
     */
    isCommentNode(node: Node): boolean;

    /**
     * Determines if the given node is a document type node.
     *
     * @param node - Node.
     */
    isDocumentTypeNode(node: Node): boolean;

    /**
     * Determines if the given node is an element.
     *
     * @param node - Node.
     */
    isElementNode(node: Node): boolean;

    /**
     * Determines if the given node is a text node.
     *
     * @param node - Node.
     */
    isTextNode(node: Node): boolean;

    /**
     * Sets the [document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     *
     * @param document - Document node.
     * @param mode - Document mode.
     */
    setDocumentMode(document: Document, mode: DocumentMode): void;

    /**
     * Sets the document type. If the `document` already contains a document type node, the `name`, `publicId` and `systemId`
     * properties of this node will be updated with the provided values. Otherwise, creates a new document type node
     * with the given properties and inserts it into the `document`.
     *
     * @param document - Document node.
     * @param name -  Document type name.
     * @param publicId - Document type public identifier.
     * @param systemId - Document type system identifier.
     */
    setDocumentType(
        document: Document,
        name: string,
        publicId: string,
        systemId: string
    ): void;

    /**
     * Attaches source code location information to the node.
     *
     * @param node - Node.
     */
    setNodeSourceCodeLocation(node: Node, location: Location | StartTagLocation | ElementLocation): void;

    /**
     * Sets the `<template>` element content element.
     *
     * @param templateElement - `<template>` element.
     * @param contentElement -  Content element.
     */
    setTemplateContent(
        templateElement: Element,
        contentElement: DocumentFragment
    ): void;
}

/**
 * Parses an HTML string.
 *
 * @param html - Input HTML string.
 * @param options - Parsing options.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 *
 * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 *
 * console.log(document.childNodes[1].tagName); //> 'html'
 * ```
 */
export function parse(html: string, options?: ParserOptions): Document;

/**
 * Parses an HTML fragment.
 *
 * @param fragmentContext - Parsing context element. If specified, given fragment will be parsed as if it was set to the context element's `innerHTML` property.
 * @param html - Input HTML fragment string.
 * @param options - Parsing options.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 *
 * const documentFragment = parse5.parseFragment('<table></table>');
 *
 * console.log(documentFragment.childNodes[0].tagName); //> 'table'
 *
 * // Parses the html fragment in the context of the parsed <table> element.
 * const trFragment = parser.parseFragment(documentFragment.childNodes[0], '<tr><td>Shake it, baby</td></tr>');
 *
 * console.log(trFragment.childNodes[0].childNodes[0].tagName); //> 'td'
 * ```
 */
export function parseFragment(
    fragmentContext: Element,
    html: string,
    options?: ParserOptions
): DocumentFragment;
export function parseFragment(
    html: string,
    options?: ParserOptions
): DocumentFragment;

/**
 * Serializes an AST node to an HTML string.
 *
 * @param node - Node to serialize.
 * @param options - Serialization options.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 *
 * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 *
 * // Serializes a document.
 * const html = parse5.serialize(document);
 *
 * // Serializes the <html> element content.
 * const str = parse5.serialize(document.childNodes[1]);
 *
 * console.log(str); //> '<head></head><body>Hi there!</body>'
 * ```
 */
export function serialize(node: Node, options?: SerializerOptions): string;
