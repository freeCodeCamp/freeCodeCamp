import { DOCUMENT_MODE, type NS } from '../common/html.js';
import type { Attribute, Location, ElementLocation } from '../common/token.js';
import type { TreeAdapter, TreeAdapterTypeMap } from './interface.js';
export interface Document {
    /** The name of the node. */
    nodeName: '#document';
    /**
     * Document mode.
     *
     * @see {@link DOCUMENT_MODE} */
    mode: DOCUMENT_MODE;
    /** The node's children. */
    childNodes: ChildNode[];
    /** Comment source code location info. Available if location info is enabled. */
    sourceCodeLocation?: Location | null;
}
export interface DocumentFragment {
    /** The name of the node. */
    nodeName: '#document-fragment';
    /** The node's children. */
    childNodes: ChildNode[];
    /** Comment source code location info. Available if location info is enabled. */
    sourceCodeLocation?: Location | null;
}
export interface Element {
    /** Element tag name. Same as {@link tagName}. */
    nodeName: string;
    /** Element tag name. Same as {@link nodeName}. */
    tagName: string;
    /** List of element attributes. */
    attrs: Attribute[];
    /** Element namespace. */
    namespaceURI: NS;
    /** Element source code location info, with attributes. Available if location info is enabled. */
    sourceCodeLocation?: ElementLocation | null;
    /** Parent node. */
    parentNode: ParentNode | null;
    /** The node's children. */
    childNodes: ChildNode[];
}
export interface CommentNode {
    /** The name of the node. */
    nodeName: '#comment';
    /** Parent node. */
    parentNode: ParentNode | null;
    /** Comment text. */
    data: string;
    /** Comment source code location info. Available if location info is enabled. */
    sourceCodeLocation?: Location | null;
}
export interface TextNode {
    nodeName: '#text';
    /** Parent node. */
    parentNode: ParentNode | null;
    /** Text content. */
    value: string;
    /** Comment source code location info. Available if location info is enabled. */
    sourceCodeLocation?: Location | null;
}
export interface Template extends Element {
    nodeName: 'template';
    tagName: 'template';
    /** The content of a `template` tag. */
    content: DocumentFragment;
}
export interface DocumentType {
    /** The name of the node. */
    nodeName: '#documentType';
    /** Parent node. */
    parentNode: ParentNode | null;
    /** Document type name. */
    name: string;
    /** Document type public identifier. */
    publicId: string;
    /** Document type system identifier. */
    systemId: string;
    /** Comment source code location info. Available if location info is enabled. */
    sourceCodeLocation?: Location | null;
}
export type ParentNode = Document | DocumentFragment | Element | Template;
export type ChildNode = Element | Template | CommentNode | TextNode | DocumentType;
export type Node = ParentNode | ChildNode;
export type DefaultTreeAdapterMap = TreeAdapterTypeMap<Node, ParentNode, ChildNode, Document, DocumentFragment, Element, CommentNode, TextNode, Template, DocumentType>;
export declare const defaultTreeAdapter: TreeAdapter<DefaultTreeAdapterMap>;
