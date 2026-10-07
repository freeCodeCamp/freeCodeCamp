/**
 * @typedef {import('estree').Node} Node
 * @typedef {import('./sync.js').SyncHandler} SyncHandler
 * @typedef {import('./async.js').AsyncHandler} AsyncHandler
 */
/**
 * @param {Node} ast
 * @param {{
 *   enter?: SyncHandler
 *   leave?: SyncHandler
 * }} walker
 * @returns {Node | null}
 */
export function walk(ast: Node, { enter, leave }: {
    enter?: SyncHandler;
    leave?: SyncHandler;
}): Node | null;
/**
 * @param {Node} ast
 * @param {{
 *   enter?: AsyncHandler
 *   leave?: AsyncHandler
 * }} walker
 * @returns {Promise<Node | null>}
 */
export function asyncWalk(ast: Node, { enter, leave }: {
    enter?: AsyncHandler;
    leave?: AsyncHandler;
}): Promise<Node | null>;
export type Node = import('estree').Node;
export type SyncHandler = import('./sync.js').SyncHandler;
export type AsyncHandler = import('./async.js').AsyncHandler;
