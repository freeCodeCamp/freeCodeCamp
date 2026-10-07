// Type definitions for non-npm package Unist 2.0
// Project: https://github.com/syntax-tree/unist
// Definitions by: bizen241 <https://github.com/bizen241>
//                 Jun Lu <https://github.com/lujun2>
//                 Hernan Rajchert <https://github.com/hrajchert>
//                 Titus Wormer <https://github.com/wooorm>
//                 Junyoung Choi <https://github.com/rokt33r>
//                 Ben Moon <https://github.com/GuiltyDolphin>
//                 JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * Syntactic units in unist syntax trees are called nodes.
 *
 * @typeParam TData Information from the ecosystem. Useful for more specific {@link Node.data}.
 */
export interface Node<TData extends object = Data> {
    /**
     * The variant of a node.
     */
    type: string;

    /**
     * Information from the ecosystem.
     */
    data?: TData | undefined;

    /**
     * Location of a node in a source document.
     * Must not be present if a node is generated.
     */
    position?: Position | undefined;
}

/**
 * Information associated by the ecosystem with the node.
 * Space is guaranteed to never be specified by unist or specifications
 * implementing unist.
 */
export interface Data {
    [key: string]: unknown;
}

/**
 * Location of a node in a source file.
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

    /**
     * Start column at each index (plus start line) in the source region,
     * for elements that span multiple lines.
     */
    indent?: number[] | undefined;
}

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
 * Util for extracting type of {@link Node.data}
 *
 * @typeParam TNode Specific node type such as {@link Node} with {@link Data}, {@link Literal}, etc.
 *
 * @example `NodeData<Node<{ key: string }>>` -> `{ key: string }`
 */
export type NodeData<TNode extends Node<object>> = TNode extends Node<infer TData> ? TData : never;

/**
 * Nodes containing other nodes.
 *
 * @typeParam ChildNode Node item of {@link Parent.children}
 */
export interface Parent<ChildNode extends Node<object> = Node, TData extends object = NodeData<ChildNode>>
    extends Node<TData>
{
    /**
     * List representing the children of a node.
     */
    children: ChildNode[];
}

/**
 * Nodes containing a value.
 *
 * @typeParam Value Specific value type of {@link Literal.value} such as `string` for `Text` node
 */
export interface Literal<Value = unknown, TData extends object = Data> extends Node<TData> {
    value: Value;
}
