/**
 * @typedef { import('estree').Node} Node
 * @typedef {{
 *   skip: () => void;
 *   remove: () => void;
 *   replace: (node: Node) => void;
 * }} WalkerContext
 */
export class WalkerBase {
    /** @type {boolean} */
    should_skip: boolean;
    /** @type {boolean} */
    should_remove: boolean;
    /** @type {Node | null} */
    replacement: Node | null;
    /** @type {WalkerContext} */
    context: WalkerContext;
    /**
     * @template {Node} Parent
     * @param {Parent | null | undefined} parent
     * @param {keyof Parent | null | undefined} prop
     * @param {number | null | undefined} index
     * @param {Node} node
     */
    replace<Parent extends import("estree").Node>(parent: Parent | null | undefined, prop: keyof Parent | null | undefined, index: number | null | undefined, node: Node): void;
    /**
     * @template {Node} Parent
     * @param {Parent | null | undefined} parent
     * @param {keyof Parent | null | undefined} prop
     * @param {number | null | undefined} index
     */
    remove<Parent_1 extends import("estree").Node>(parent: Parent_1 | null | undefined, prop: keyof Parent_1 | null | undefined, index: number | null | undefined): void;
}
export type Node = import('estree').Node;
export type WalkerContext = {
    skip: () => void;
    remove: () => void;
    replace: (node: Node) => void;
};
