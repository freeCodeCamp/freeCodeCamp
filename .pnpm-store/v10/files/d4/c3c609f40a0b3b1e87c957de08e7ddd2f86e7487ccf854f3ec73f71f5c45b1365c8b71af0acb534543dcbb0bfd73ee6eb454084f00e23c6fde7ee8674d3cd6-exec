// Type definitions for non-npm package unist 3.0
// Project: https://github.com/syntax-tree/unist
// Definitions by: bizen241 <https://github.com/bizen241>
//                 Jun Lu <https://github.com/lujun2>
//                 Hernan Rajchert <https://github.com/hrajchert>
//                 Titus Wormer <https://github.com/wooorm>
//                 Junyoung Choi <https://github.com/rokt33r>
//                 Ben Moon <https://github.com/GuiltyDolphin>
//                 JounQin <https://github.com/JounQin>
//                 Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ## Interfaces

/**
 * Info associated with nodes by the ecosystem.
 *
 * This space is guaranteed to never be specified by unist or specifications
 * implementing unist.
 * But you can use it in utilities and plugins to store data.
 *
 * This type can be augmented to register custom data.
 * For example:
 *
 * ```ts
 * declare module 'unist' {
 *   interface Data {
 *     // `someNode.data.myId` is typed as `number | undefined`
 *     myId?: number | undefined
 *   }
 * }
 * ```
 */
export interface Data {}

/**
 * One place in a source file.
 */
export interface Point {
    /**
     * Line in a source file (1-indexed integer).
     */
    line: number;

    /**
     * Column in a source file (1-indexed integer).
     */
    column: number;
    /**
     * Character in a source file (0-indexed integer).
     */
    offset?: number | undefined;
}

/**
 * Position of a node in a source document.
 *
 * A position is a range between two points.
 */
export interface Position {
    /**
     * Place of the first character of the parsed source region.
     */
    start: Point;

    /**
     * Place of the first character after the parsed source region.
     */
    end: Point;
}

// ## Abstract nodes

/**
 * Abstract unist node that contains the smallest possible value.
 *
 * This interface is supposed to be extended.
 *
 * For example, in HTML, a `text` node is a leaf that contains text.
 */
export interface Literal extends Node {
    /**
     * Plain value.
     */
    value: unknown;
}

/**
 * Abstract unist node.
 *
 * The syntactic unit in unist syntax trees are called nodes.
 *
 * This interface is supposed to be extended.
 * If you can use {@link Literal} or {@link Parent}, you should.
 * But for example in markdown, a `thematicBreak` (`***`), is neither literal
 * nor parent, but still a node.
 */
export interface Node {
    /**
     * Node type.
     */
    type: string;

    /**
     * Info from the ecosystem.
     */
    data?: Data | undefined;

    /**
     * Position of a node in a source document.
     *
     * Nodes that are generated (not in the original source document) must not
     * have a position.
     */
    position?: Position | undefined;
}

/**
 * Abstract unist node that contains other nodes (*children*).
 *
 * This interface is supposed to be extended.
 *
 * For example, in XML, an element is a parent of different things, such as
 * comments, text, and further elements.
 */
export interface Parent extends Node {
    /**
     * List of children.
     */
    children: Node[];
}
