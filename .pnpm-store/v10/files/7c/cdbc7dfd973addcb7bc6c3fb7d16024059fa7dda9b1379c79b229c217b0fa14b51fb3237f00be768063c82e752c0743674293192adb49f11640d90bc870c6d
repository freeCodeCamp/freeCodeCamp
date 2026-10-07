/**
 * If `map` already has the given `key`, returns its value. Otherwise, calls
 * `callback`, adds the result to `map` at `key`, and then returns it.
 *
 * @template K
 * @template V
 * @param {Map<K, V>} map
 * @param {K} key
 * @param {() => V} callback
 * @returns {V}
 */
export default function putIfAbsent(map, key, callback) {
	if (map.has(key)) return /** @type {V} */ (map.get(key));

	const value = callback();

	map.set(key, value);

	return value;
}
