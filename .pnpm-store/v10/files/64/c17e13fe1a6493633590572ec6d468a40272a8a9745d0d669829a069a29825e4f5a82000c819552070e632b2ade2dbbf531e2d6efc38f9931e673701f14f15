/**
 * @typedef { import('estree').Node} Node
 * @typedef { import('./walker.js').WalkerContext} WalkerContext
 * @typedef {(
 *    this: WalkerContext,
 *    node: Node,
 *    parent: Node | null,
 *    key: string | number | symbol | null | undefined,
 *    index: number | null | undefined
 * ) => Promise<void>} AsyncHandler
 */
export class AsyncWalker extends WalkerBase {
    /**
     *
     * @param {AsyncHandler} [enter]
     * @param {AsyncHandler} [leave]
     */
    constructor(enter?: AsyncHandler | undefined, leave?: AsyncHandler | undefined);
    /** @type {AsyncHandler | undefined} */
    enter: AsyncHandler | undefined;
    /** @type {AsyncHandler | undefined} */
    leave: AsyncHandler | undefined;
    /**
     * @template {Node} Parent
     * @param {Node} node
     * @param {Parent | null} parent
     * @param {keyof Parent} [prop]
     * @param {number | null} [index]
     * @returns {Promise<Node | null>}
     */
    visit<Parent extends import("estree").Node>(node: Node, parent: Parent | null, prop?: keyof Parent | undefined, index?: number | null | undefined): Promise<Node | null>;
}
export type Node = import('estree').Node;
export type WalkerContext = import('./walker.js').WalkerContext;
export type AsyncHandler = (this: WalkerContext, node: Node, parent: Node | null, key: string | number | symbol | null | undefined, index: number | null | undefined) => Promise<void>;
import { WalkerBase } from "./walker.js";
