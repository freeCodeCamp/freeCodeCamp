/// <reference types="node" />

import * as stream from "stream";
import * as events from "events";


// Markup data
//-----------------------------------------------------------------------------------
declare namespace MarkupData {
    interface Location {
        /**
         * One-based line index
         */
        line: number;
        /**
         * One-based column index
         */
        col: number;
        /**
         * Zero-based first character index
         */
        startOffset: number;
        /**
         * Zero-based last character index
         */
        endOffset: number;
    }

    interface AttributesLocation {
        [attributeName: string]: Location;
    }

    interface StartTagLocation extends Location {
        /**
         * Start tag attributes' location info
         */
        attrs: AttributesLocation
    }

    interface ElementLocation extends StartTagLocation {
        /**
         * Element's start tag location info.
         */
        startTag: StartTagLocation;
        /**
         * Element's end tag location info.
         */
        endTag: Location;
    }
}

// Options
//-----------------------------------------------------------------------------------
declare namespace Options {
    export interface ParserOptions {
        /**
         * Enables source code location information. When enabled, each node (except the root node) will have a `__location` property.
         * If the node is not an empty element, `__location` will be a {@link MarkupData.ElementLocation} object, otherwise it will be {@link MarkupData.Location}.
         * If the element was implicitly created by the parser (as part of [tree correction](https://html.spec.whatwg.org/multipage/syntax.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser)), its `__location` property will be `undefined`.
         *
         * **Default:** `false`
         */
        locationInfo?: boolean;
        /**
         * Specifies the resulting tree format.
         *
         * **Default:** `treeAdapters.default`
         */
        treeAdapter?: AST.TreeAdapter;
    }

    export interface SAXParserOptions {
        /**
         * Enables source code location information for the tokens.
         * When enabled, each token event handler will receive {@link MarkupData.Location} (or {@link MarkupData.StartTagLocation})
         * object as its last argument.
         */
        locationInfo?: boolean;
    }

    export interface SerializerOptions {
        /***
         * Specifies input tree format.
         *
         * **Default:** `treeAdapters.default`
         */
        treeAdapter?: AST.TreeAdapter;
    }
}


// AST
//-----------------------------------------------------------------------------------
declare namespace AST {
    /**
     * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     */
    type DocumentMode = 'no-quirks' | 'quirks' | 'limited-quirks';

    // Default tree adapter
    namespace Default {
        /**
         * Element attribute.
         */
        interface Attribute {
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
         * [Default tree adapter]{@link parse5.treeAdapters} Node interface.
         */
        interface Node {
            /**
             * The name of the node. E.g. {@link Document} will have `nodeName` equal to '#document'`.
             */
            nodeName: string;
        }

        /**
         * [Default tree adapter]{@link parse5.treeAdapters} ParentNode interface.
         */
        interface ParentNode {
            /**
             * Child nodes.
             */
            childNodes: Node[];
        }

        /**
         * [Default tree adapter]{@link parse5.treeAdapters} DocumentType interface.
         */
        export interface DocumentType extends Node {
            /**
             * The name of the node.
             */
            nodeName: '#documentType';
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
         * [Default tree adapter]{@link parse5.treeAdapters} Document interface.
         */
        export interface Document extends ParentNode {
            /**
             * The name of the node.
             */
            nodeName: '#document';
            /**
             * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
             */
            mode: DocumentMode;
        }

        /**
         * [Default tree adapter]{@link parse5.treeAdapters} DocumentFragment interface.
         */
        export interface DocumentFragment extends ParentNode {
            /**
             * The name of the node.
             */
            nodeName: '#document-fragment';
        }

        /**
         * [Default tree adapter]{@link parse5.treeAdapters} Element interface.
         */
        export interface Element extends ParentNode {
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
             * Parent node.
             */
            parentNode: ParentNode;
            /**
             * Element source code location info. Available if location info is enabled via {@link Options.ParserOptions}.
             */
            __location?: MarkupData.ElementLocation;
        }

        /**
         * [Default tree adapter]{@link parse5.treeAdapters} CommentNode interface.
         */
        export interface CommentNode extends Node {
            /**
             * The name of the node.
             */
            nodeName: '#comment';
            /**
             * Comment text.
             */
            data: string;
            /**
             * Parent node.
             */
            parentNode: ParentNode;
            /**
             * Comment source code location info. Available if location info is enabled via {@link Options.ParserOptions}.
             */
            __location?: MarkupData.Location;
        }

        /**
         * [Default tree adapter]{@link parse5.treeAdapters} TextNode interface.
         */
        export interface TextNode extends Node {
            /**
             * The name of the node.
             */
            nodeName: '#text';
            /**
             * Text content.
             */
            value: string;
            /**
             * Parent node.
             */
            parentNode: ParentNode;
            /**
             * Text node source code location info. Available if location info is enabled via {@link Options.ParserOptions}.
             */
            __location?: MarkupData.Location;
        }
    }


    // htmlparser2 tree adapter
    namespace HtmlParser2 {
        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} Node interface.
         */
        interface Node {
            /**
             * The type of the node. E.g. {@link Document} will have `type` equal to 'root'`.
             */
            type: string;
            /**
             * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible node {@link type}.
             */
            nodeType: number;
            /**
             * Parent node.
             */
            parent: ParentNode;
            /**
             * Same as {@link parent}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            parentNode: ParentNode;
            /**
             * Previous sibling.
             */
            prev: Node;
            /**
             * Same as {@link prev}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            previousSibling: Node;
            /**
             * Next sibling.
             */
            next: Node;
            /**
             * Same as {@link next}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            nextSibling: Node;
        }

        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} ParentNode interface.
         */
        interface ParentNode extends Node {
            /**
             * Child nodes.
             */
            children: Node[];
            /**
             * Same as {@link children}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            childNodes: Node[];
            /**
             * First child of the node.
             */
            firstChild: Node;
            /**
             * Last child of the node.
             */
            lastChild: Node;
        }

        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} DocumentType interface.
         */
        export interface DocumentType extends Node {
            /**
             * The type of the node.
             */
            type: 'directive';
            /**
             * Node name.
             */
            name: '!doctype';
            /**
             * Serialized doctype {@link name}, {@link publicId} and {@link systemId}.
             */
            data: string;
            /**
             * Document type name.
             */
            'x-name':string;
            /**
             * Document type public identifier.
             */
            'x-publicId': string;
            /**
             * Document type system identifier.
             */
            'x-systemId': string;
        }

        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} Document interface.
         */
        export interface Document extends ParentNode {
            /**
             * The type of the node.
             */
            type: 'root';
            /**
             * The name of the node.
             */
            name: 'root';
            /**
             * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
             */
            'x-mode': DocumentMode;
        }

        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} DocumentFragment interface.
         */
        export interface DocumentFragment extends ParentNode {
            /**
             * The type of the node.
             */
            type: 'root';
            /**
             * The name of the node.
             */
            name: 'root';
        }

        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} Element interface.
         */
        export interface Element extends ParentNode {
            /**
             * The name of the node. Equals to element {@link tagName}.
             */
            name: string;
            /**
             * Element tag name.
             */
            tagName: string;
            /**
             * Element namespace.
             */
            namespace: string;
            /**
             * Element attributes.
             */
            attribs: { [name: string]: string };
            /**
             * Element attribute namespaces.
             */
            'x-attribsNamespace': { [name: string]: string };
            /**
             * Element attribute namespace-related prefixes.
             */
            'x-attribsPrefix': { [name: string]: string };
            /**
             * Element source code location info. Available if location info is enabled via {@link Options.ParserOptions}.
             */
            __location?: MarkupData.ElementLocation;
        }

        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} CommentNode interface.
         */
        export interface CommentNode extends Node {
            /**
             * The name of the node.
             */
            name: 'comment';
            /**
             * Comment text.
             */
            data: string;
            /**
             * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            nodeValue: string;
            /**
             * Comment source code location info. Available if location info is enabled via {@link Options.ParserOptions}.
             */
            __location?: MarkupData.Location;
        }

        /**
         * [htmlparser2 tree adapter]{@link parse5.treeAdapters} TextNode interface.
         */
        export interface TextNode extends Node {
            /**
             * The name of the node.
             */
            name: 'text';
            /**
             * Text content.
             */
            data: string;
            /**
             * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            nodeValue: string;
            /**
             * Comment source code location info. Available if location info is enabled via {@link Options.ParserOptions}.
             */
            __location?: MarkupData.Location;
        }
    }


    // Unions
    // NOTE: we use `Object` in unions to support custom tree adapter implementations.
    // TypeScript Handbook suggests to always use `any` instead of `Object`, but in that
    // case language service hints `any` as type, instead of actual union name.
    /**
     * Generic Node interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.Node}) to get access to the properties.
     */
    type Node = Default.Node | HtmlParser2.Node | Object;
    /**
     * Generic ParentNode interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.ParentNode}) to get access to the properties.
     */
    type ParentNode = Default.ParentNode | HtmlParser2.ParentNode | Object;
    /**
     * Generic DocumentType interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.DocumentType}) to get access to the properties.
     */
    type DocumentType = Default.DocumentType | HtmlParser2.DocumentType | Object;
    /**
     * Generic Document interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.Document}) to get access to the properties.
     */
    type Document = Default.Document | HtmlParser2.Document | Object;
    /**
     * Generic DocumentFragment interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.DocumentFragment}) to get access to the properties.
     */
    type DocumentFragment = Default.DocumentFragment | HtmlParser2.DocumentFragment | Object;
    /**
     * Generic Element interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.Element}) to get access to the properties.
     */
    type Element = Default.Element | HtmlParser2.Element | Object;
    /**
     * Generic TextNode interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.TextNode}) to get access to the properties.
     */
    type TextNode = Default.TextNode | HtmlParser2.TextNode | Object;
    /**
     * Generic CommentNode interface.
     * Cast to the actual AST interface (e.g. {@link parse5.AST.Default.CommentNode}) to get access to the properties.
     */
    type CommentNode = Default.CommentNode | HtmlParser2.CommentNode | Object;


    // Tree adapter interface
    //-----------------------------------------------------------------------------------

    /**
     * Tree adapter is a set of utility functions that provides minimal required abstraction layer beetween parser and a specific AST format.
     * Note that `TreeAdapter` is not designed to be a general purpose AST manipulation library. You can build such library
     * on top of existing `TreeAdapter` or use one of the existing libraries from npm.
     *
     * @see [default implementation](https://github.com/inikulin/parse5/blob/master/lib/tree_adapters/default.js)
     */
    export interface TreeAdapter {
        /**
         * Creates a document node.
         */
        createDocument(): AST.Document;
        /**
         * Creates a document fragment node.
         */
        createDocumentFragment(): AST.DocumentFragment;
        /**
         * Creates an element node.
         *
         * @param tagName - Tag name of the element.
         * @param namespaceURI - Namespace of the element.
         * @param attrs - Attribute name-value pair array. Foreign attributes may contain `namespace` and `prefix` fields as well.
         */
        createElement(tagName: string, namespaceURI: string, attrs: AST.Default.Attribute[]): AST.Element;
        /**
         * Creates a comment node.
         *
         * @param data - Comment text.
         */
        createCommentNode(data: string): AST.CommentNode;
        /**
         * Appends a child node to the given parent node.
         *
         * @param parentNode - Parent node.
         * @param newNode -  Child node.
         */
        appendChild(parentNode: AST.ParentNode, newNode: AST.Node): void;
        /**
         * Inserts a child node to the given parent node before the given reference node.
         *
         * @param parentNode - Parent node.
         * @param newNode -  Child node.
         * @param referenceNode -  Reference node.
         */
        insertBefore(parentNode: AST.ParentNode, newNode: AST.Node, referenceNode: AST.Node): void;
        /**
         * Sets the `<template>` element content element.
         *
         * @param templateElement - `<template>` element.
         * @param contentElement -  Content element.
         */
        setTemplateContent(templateElement: AST.Element, contentElement: AST.DocumentFragment): void;
        /**
         * Returns the `<template>` element content element.
         *
         * @param templateElement - `<template>` element.
         */
        getTemplateContent(templateElement: AST.Element): AST.DocumentFragment;
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
        setDocumentType(document: AST.Document, name: string, publicId: string, systemId: string): void;
        /**
         * Sets the [document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
         *
         * @param document - Document node.
         * @param mode - Document mode.
         */
        setDocumentMode(document: AST.Document, mode: AST.DocumentMode): void;
        /**
         * Returns [document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
         *
         * @param document - Document node.
         */
        getDocumentMode(document: AST.Document): AST.DocumentMode;
        /**
         * Removes a node from its parent.
         *
         * @param node - Node to remove.
         */
        detachNode(node: AST.Node): void;
        /**
         * Inserts text into a node. If the last child of the node is a text node, the provided text will be appended to the
         * text node content. Otherwise, inserts a new text node with the given text.
         *
         * @param parentNode - Node to insert text into.
         * @param text - Text to insert.
         */
        insertText(parentNode: AST.ParentNode, text: string): void;
        /**
         * Inserts text into a sibling node that goes before the reference node. If this sibling node is the text node,
         * the provided text will be appended to the text node content. Otherwise, inserts a new sibling text node with
         * the given text before the reference node.
         *
         * @param parentNode - Node to insert text into.
         * @param text - Text to insert.
         * @param referenceNode - Node to insert text before.
         */
        insertTextBefore(parentNode: AST.ParentNode, text: string, referenceNode: AST.Node): void;
        /**
         * Copies attributes to the given element. Only attributes that are not yet present in the element are copied.
         *
         * @param recipient - Element to copy attributes into.
         * @param attrs - Attributes to copy.
         */
        adoptAttributes(recipient: AST.Element, attrs: AST.Default.Attribute[]): void;
        /**
         * Returns the first child of the given node.
         *
         * @param node - Node.
         */
        getFirstChild(node: AST.ParentNode): AST.Node;
        /**
         * Returns the given node's children in an array.
         *
         * @param node - Node.
         */
        getChildNodes(node: AST.ParentNode): AST.Node[];
        /**
         * Returns the given node's parent.
         *
         * @param node - Node.
         */
        getParentNode(node: AST.Node): AST.ParentNode;
        /**
         * Returns the given element's attributes in an array, in the form of name-value pairs.
         * Foreign attributes may contain `namespace` and `prefix` fields as well.
         *
         * @param element - Element.
         */
        getAttrList(element: AST.Element): AST.Default.Attribute[];
        /**
         * Returns the given element's tag name.
         *
         * @param element - Element.
         */
        getTagName(element: AST.Element): string;
        /**
         * Returns the given element's namespace.
         *
         * @param element - Element.
         */
        getNamespaceURI(element: AST.Element): string;
        /**
         * Returns the given text node's content.
         *
         * @param textNode - Text node.
         */
        getTextNodeContent(textNode: AST.TextNode): string;
        /**
         * Returns the given comment node's content.
         *
         * @param commentNode - Comment node.
         */
        getCommentNodeContent(commentNode: AST.CommentNode): string;
        /**
         * Returns the given document type node's name.
         *
         * @param doctypeNode - Document type node.
         */
        getDocumentTypeNodeName(doctypeNode: AST.DocumentType): string;
        /**
         * Returns the given document type node's public identifier.
         *
         * @param doctypeNode - Document type node.
         */
        getDocumentTypeNodePublicId(doctypeNode: AST.DocumentType): string;
        /**
         * Returns the given document type node's system identifier.
         *
         * @param doctypeNode - Document type node.
         */
        getDocumentTypeNodeSystemId(doctypeNode: AST.DocumentType): string;
        /**
         * Determines if the given node is a text node.
         *
         * @param node - Node.
         */
        isTextNode(node: AST.Node): boolean;
        /**
         * Determines if the given node is a comment node.
         *
         * @param node - Node.
         */
        isCommentNode(node: AST.Node): boolean;
        /**
         * Determines if the given node is a document type node.
         *
         * @param node - Node.
         */
        isDocumentTypeNode(node: AST.Node): boolean;
        /**
         * Determines if the given node is an element.
         *
         * @param node - Node.
         */
        isElementNode(node: AST.Node): boolean;
    }
}


// Included tree adapters
//-----------------------------------------------------------------------------------

/**
 * Provides built-in tree adapters that can be used for parsing and serialization.
 *
 * @example
 *```js
 *
 * const parse5 = require('parse5');
 *
 * // Uses the default tree adapter for parsing.
 * const document = parse5.parse('<div></div>', {
 *     treeAdapter: parse5.treeAdapters.default
 * });
 *
 * // Uses the htmlparser2 tree adapter with the SerializerStream.
 * const serializer = new parse5.SerializerStream(node, {
 *     treeAdapter: parse5.treeAdapters.htmlparser2
 * });
 * ```
 */
export var treeAdapters: {
    /**
     * Default tree format for parse5.
     */
    default: AST.TreeAdapter,
    /**
     * Quite popular [htmlparser2](https://github.com/fb55/htmlparser2) tree format
     * (e.g. used by [cheerio](https://github.com/MatthewMueller/cheerio) and [jsdom](https://github.com/tmpvar/jsdom)).
     */
    htmlparser2: AST.TreeAdapter
};


// Shorthand methods
//-----------------------------------------------------------------------------------

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
export function parse(html: string, options?: Options.ParserOptions): AST.Document;

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
export function parseFragment(fragmentContext: AST.Element, html: string, options?: Options.ParserOptions): AST.DocumentFragment;
export function parseFragment(html: string, options?: Options.ParserOptions): AST.DocumentFragment;

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
export function serialize(node: AST.Node, options?: Options.SerializerOptions): string;


// Parser stream
//-----------------------------------------------------------------------------------

/**
 * Streaming HTML parser with scripting support.
 * A [writable stream](https://nodejs.org/api/stream.html#stream_class_stream_writable).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const http = require('http');
 *
 * // Fetch the page content and obtain it's <head> node
 * http.get('http://inikulin.github.io/parse5/', res => {
 *    const parser = new parse5.ParserStream();
 *
 *    parser.once('finish', () => {
 *        console.log(parser.document.childNodes[1].childNodes[0].tagName); //> 'head'
 *    });
 *
 *    res.pipe(parser);
 * });
 * ```
 */
export class ParserStream extends stream.Writable {
    /**
     * @param options - Parsing options.
     */
    constructor(options?: Options.ParserOptions);

    /**
     * The resulting document node.
     */
    document: AST.Document;

    /**
     * Raised then parser encounters a `<script>` element.
     * If this event has listeners, parsing will be suspended once it is emitted.
     * So, if `<script>` has the `src` attribute, you can fetch it, execute and then resume parsing just like browsers do.
     *
     * @param listener.scriptElement - The script element that caused the event.
     * @param listener.documentWrite - Write additional `html` at the current parsing position. Suitable for implementing the DOM `document.write` and `document.writeln` methods.
     * @param listener.documentWrite.html - HTML to write.
     * @param listener.resume - Resumes parsing.
     *
     * @example
     * ```js
     *
     * const parse = require('parse5');
     * const http = require('http');
     *
     * const parser = new parse5.ParserStream();
     *
     * parser.on('script', (scriptElement, documentWrite, resume) => {
     *     const src = parse5.treeAdapters.default.getAttrList(scriptElement)[0].value;
     *
     *     http.get(src, res => {
     *        // Fetch the script content, execute it with DOM built around `parser.document` and
     *        // `document.write` implemented using `documentWrite`.
     *        ...
     *        // Then resume parsing.
     *        resume();
     *     });
     * });
     *
     * parser.end('<script src="example.com/script.js"></script>');
     * ```
     */
    on(event: 'script', listener: (scriptElement: AST.Element, documentWrite: (html: string) => void, resume: () => void) => void): this;
    /**
     * WritableStream events
     */
    on(event: string, listener: Function): this;
}


// Plaint text conversion stream
//-----------------------------------------------------------------------------------

/**
 * Converts plain text files into HTML document as required by [HTML specification](https://html.spec.whatwg.org/#read-text).
 * A [writable stream](https://nodejs.org/api/stream.html#stream_class_stream_writable).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const fs = require('fs');
 *
 * const file = fs.createReadStream('war_and_peace.txt');
 * const converter = new parse5.PlainTextConversionStream();
 *
 * converter.once('finish', () => {
 *     console.log(converter.document.childNodes[1].childNodes[0].tagName); //> 'head'
 * });
 *
 * file.pipe(converter);
 * ```
 */
export class PlainTextConversionStream extends ParserStream { }


// SAX parser
//-----------------------------------------------------------------------------------
/**
 * Streaming [SAX](https://en.wikipedia.org/wiki/Simple_API_for_XML)-style HTML parser.
 * A [transform stream](https://nodejs.org/api/stream.html#stream_class_stream_transform)
 * (which means you can pipe *through* it, see example).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const http = require('http');
 * const fs = require('fs');
 *
 * const file = fs.createWriteStream('/home/google.com.html');
 * const parser = new parse5.SAXParser();
 *
 * parser.on('text', text => {
 *    // Handle page text content
 *    ...
 * });
 *
 * http.get('http://google.com', res => {
 *    // SAXParser is the Transform stream, which means you can pipe
 *    // through it. So, you can analyze page content and, e.g., save it
 *    // to the file at the same time:
 *    res.pipe(parser).pipe(file);
 * });
 * ```
 */
export class SAXParser extends stream.Transform {
    /**
     * @param options - Parsing options.
     */
    constructor(options?: Options.SAXParserOptions);

    /**
     * Raised when the parser encounters a start tag.
     *
     * @param listener.name - Tag name.
     * @param listener.attrs - List of attributes.
     * @param listener.selfClosing - Indicates if the tag is self-closing.
     * @param listener.location - Start tag source code location info. Available if location info is enabled via {@link Options.SAXParserOptions}.
     */
    on(event: 'startTag', listener: (name: string, attrs: AST.Default.Attribute[], selfClosing: boolean, location?: MarkupData.StartTagLocation) => void): this;
    /**
     * Raised then parser encounters an end tag.
     *
     * @param listener.name - Tag name.
     * @param listener.location - End tag source code location info. Available if location info is enabled via {@link Options.SAXParserOptions}.
     */
    on(event: 'endTag', listener: (name: string, location?: MarkupData.Location) => void): this;
    /**
     * Raised then parser encounters a comment.
     *
     * @param listener.text - Comment text.
     * @param listener.location - Comment source code location info. Available if location info is enabled via {@link Options.SAXParserOptions}.
     */
    on(event: 'comment', listener: (text: string, location?: MarkupData.Location) => void): this;
    /**
     * Raised then parser encounters text content.
     *
     * @param listener.text - Text content.
     * @param listener.location - Text content code location info. Available if location info is enabled via {@link Options.SAXParserOptions}.
     */
    on(event: 'text', listener: (text: string, location?: MarkupData.Location) => void): this;
    /**
     * Raised then parser encounters a [document type declaration](https://en.wikipedia.org/wiki/Document_type_declaration).
     *
     * @param listener.name - Document type name.
     * @param listener.publicId - Document type public identifier.
     * @param listener.systemId - Document type system identifier.
     * @param listener.location - Document type declaration source code location info. Available if location info is enabled via {@link Options.SAXParserOptions}.
     */
    on(event: 'doctype', listener: (name: string, publicId: string, systemId: string, location?: MarkupData.Location) => void): this;
    /**
     * TransformStream events
     */
    on(event: string, listener: Function): this;

    /**
     * Stops parsing. Useful if you want the parser to stop consuming CPU time once you've obtained the desired info
     * from the input stream. Doesn't prevent piping, so that data will flow through the parser as usual.
     *
     * @example
     * ```js
     *
     * const parse5 = require('parse5');
     * const http = require('http');
     * const fs = require('fs');
     *
     * const file = fs.createWriteStream('google.com.html');
     * const parser = new parse5.SAXParser();
     *
     * parser.on('doctype', (name, publicId, systemId) => {
     *    // Process doctype info ans stop parsing
     *    ...
     *    parser.stop();
     * });
     *
     * http.get('http://google.com', res => {
     *    // Despite the fact that parser.stop() was called whole
     *    // content of the page will be written to the file
     *    res.pipe(parser).pipe(file);
     * });
     * ```
     */
    stop(): void;
}


// Serializer stream
//-----------------------------------------------------------------------------------

/**
 * Streaming AST node to an HTML serializer.
 * A [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable).
 *
 * ** NOTE:** This API is available only for Node.js.
 *
 * @example
 * ```js
 *
 * const parse5 = require('parse5');
 * const fs = require('fs');
 *
 * const file = fs.createWriteStream('/home/index.html');
 *
 * // Serializes the parsed document to HTML and writes it to the file.
 * const document = parse5.parse('<body>Who is John Galt?</body>');
 * const serializer = new parse5.SerializerStream(document);
 *
 * serializer.pipe(file);
 * ```
 */
export class SerializerStream extends stream.Readable {
    /**
     * Streaming AST node to an HTML serializer. A readable stream.
     *
     * @param node - Node to serialize.
     * @param options - Serialization options.
     */
    constructor(node: AST.Node, options?: Options.SerializerOptions);
}
