/**
 * Omit any properties starting with `_`, which are fake-private
 *
 * @type {import('stylelint').Formatter}
 */
export default function jsonFormatter(results) {
	return JSON.stringify(results, (key, value) => {
		return key[0] === '_' ? undefined : value;
	});
}
