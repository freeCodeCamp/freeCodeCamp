import addEmptyLineBefore from './addEmptyLineBefore.mjs';
import { assert } from './validateTypes.mjs';
import removeEmptyLinesBefore from './removeEmptyLinesBefore.mjs';

/**
 * fix callback for *-empty-line-before rules
 * @param {object} o
 * @param {import('postcss').Node} o.node
 * @param {string=} o.newline
 * @param {'add'|'remove'} o.action
 * @throws {TypeError}
 */
export default function fixEmptyLinesBefore({ node, newline, action }) {
	assert(newline);

	switch (action) {
		case 'add':
			addEmptyLineBefore(node, newline);
			break;
		case 'remove':
			removeEmptyLinesBefore(node, newline);
			break;
		default:
			throw new TypeError(`Unknown action ${action}`);
	}
}
