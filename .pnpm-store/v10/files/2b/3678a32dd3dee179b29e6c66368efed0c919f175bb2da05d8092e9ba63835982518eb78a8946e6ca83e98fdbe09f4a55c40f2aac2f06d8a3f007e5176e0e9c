import { SyncWalker } from './sync.js';
import { AsyncWalker } from './async.js';

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
export function walk(ast, { enter, leave }) {
	const instance = new SyncWalker(enter, leave);
	return instance.visit(ast, null);
}

/**
 * @param {Node} ast
 * @param {{
 *   enter?: AsyncHandler
 *   leave?: AsyncHandler
 * }} walker
 * @returns {Promise<Node | null>}
 */
export async function asyncWalk(ast, { enter, leave }) {
	const instance = new AsyncWalker(enter, leave);
	return await instance.visit(ast, null);
}
