/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */
export function assign(obj, props) {
	for (let i in props) obj[i] = props[i];
	return /** @type {O & P} */ (obj);
}

export function isNaN(value) {
	return value !== value;
}
