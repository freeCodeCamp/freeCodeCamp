// Type definitions for non-npm package Hast 2.3
// Project: https://github.com/syntax-tree/hast
// Definitions by: lukeggchapman <https://github.com/lukeggchapman>
//                 Junyoung Choi <https://github.com/rokt33r>
//                 Christian Murphy <https://github.com/ChristianMurphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Literal as UnistLiteral, Node as UnistNode, Parent as UnistParent } from "unist";

export { UnistNode as Node };

/**
 * This map registers all node types that may be used as top-level content in the document.
 *
 * These types are accepted inside `root` nodes.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'hast' {
 *   interface RootContentMap {
 *     // Allow using raw nodes defined by `rehype-raw`.
 *     raw: Raw;
 *   }
 * }
 */
export interface RootContentMap {
    comment: Comment;
    doctype: DocType;
    element: Element;
    text: Text;
}

/**
 * This map registers all node types that may be used as content in an element.
 *
 * These types are accepted inside `element` nodes.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'hast' {
 *   interface RootContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface ElementContentMap {
    comment: Comment;
    element: Element;
    text: Text;
}

export type Content = RootContent | ElementContent;

export type RootContent = RootContentMap[keyof RootContentMap];

export type ElementContent = ElementContentMap[keyof ElementContentMap];

/**
 * Node in hast containing other nodes.
 */
export interface Parent extends UnistParent {
    /**
     * List representing the children of a node.
     */
    children: Content[];
}

/**
 * Nodes in hast containing a value.
 */
export interface Literal extends UnistLiteral {
    value: string;
}

/**
 * Root represents a document.
 * Can be used as the rood of a tree, or as a value of the
 * content field on a 'template' Element, never as a child.
 */
export interface Root extends Parent {
    /**
     * Represents this variant of a Node.
     */
    type: "root";

    /**
     * List representing the children of a node.
     */
    children: RootContent[];
}

/**
 * Element represents an HTML Element.
 */
export interface Element extends Parent {
    /**
     * Represents this variant of a Node.
     */
    type: "element";

    /**
     * Represents the element’s local name.
     */
    tagName: string;

    /**
     * Represents information associated with the element.
     */
    properties?: Properties | undefined;

    /**
     * If the tagName field is 'template', a content field can be present.
     */
    content?: Root | undefined;

    /**
     * List representing the children of a node.
     */
    children: ElementContent[];
}

/**
 * Represents information associated with an element.
 */
export interface Properties {
    [PropertyName: string]: boolean | number | string | null | undefined | Array<string | number>;
}

/**
 * Represents an HTML DocumentType.
 */
export interface DocType extends UnistNode {
    /**
     * Represents this variant of a Node.
     */
    type: "doctype";

    name: string;
}

/**
 * Represents an HTML Comment.
 */
export interface Comment extends Literal {
    /**
     * Represents this variant of a Literal.
     */
    type: "comment";
}

/**
 * Represents an HTML Text.
 */
export interface Text extends Literal {
    /**
     * Represents this variant of a Literal.
     */
    type: "text";
}
