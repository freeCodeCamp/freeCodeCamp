import { prefixes } from '../reference/prefixes.mjs';

const HAS_PREFIX_REGEX = new RegExp(`(?:${[...prefixes].join('|')})`, 'i');

/**
 * Check if a string contains any prefix
 *
 * @param {string} string
 * @returns {boolean}
 */
export default function hasPrefix(string) {
	return HAS_PREFIX_REGEX.test(string);
}
