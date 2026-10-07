/**
 * Create a map with unique sets of values from a record.
 *
 * @template T
 * @param {Record<string, T | T[]>} record
 * @returns {Map<string, Set<T>>}
 */
export default function createMapWithSet(record) {
	/** @type {Map<string, Set<T>>} */
	const map = new Map();

	for (const [key, value] of Object.entries(record)) {
		const list = Array.isArray(value) ? value : [value];

		map.set(key, new Set(list));
	}

	return map;
}
