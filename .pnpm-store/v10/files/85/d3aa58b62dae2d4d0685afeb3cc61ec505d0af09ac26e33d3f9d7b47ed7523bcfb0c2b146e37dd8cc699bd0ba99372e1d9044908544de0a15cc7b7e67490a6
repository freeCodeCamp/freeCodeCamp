/**
 * @typedef { import('estree').Node} Node
 * @typedef { import('./walker.js').WalkerContext} WalkerContext
 * @typedef {(
 *    this: WalkerContext,
 *    node: Node,
 *    parent: Node | null,
 *    key: string | number | symbol | null | undefined,
 *    index: number | null | undefined
 * ) => void} SyncHandler
 */
export class SyncWalker extends WalkerBase {
    /**
     *
     * @param {SyncHandler} [enter]
     * @param {SyncHandler} [leave]
     */
    constructor(enter?: SyncHandler | undefined, leave?: SyncHandler | undefined);
    /** @type {SyncHandler | undefined} */
    enter: SyncHandler | undefined;
    /** @type {SyncHandler | undefined} */
    leave: SyncHandler | undefined;
    /**
     * @template {Node} Parent
     * @param {Node} node
     * @param {Parent | null} parent
     * @param {keyof Parent} [prop]
     * @param {number | null} [index]
     * @returns {Node | null}
     */
    visit<Parent extends import("estree").Node>(node: Node, parent: Parent | null, prop?: keyof Parent | undefined, index?: number | null | undefined): Node | null;
}
export type Node = import('estree').Node;
export type WalkerContext = import('./walker.js').WalkerContext;
export type SyncHandler = (this: WalkerContext, node: Node, parent: Node | null, key: string | number | symbol | null | undefined, index: number | null | undefined) => void;
import { WalkerBase } from "./walker.js";
