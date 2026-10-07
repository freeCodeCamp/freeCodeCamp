/**
 * Unite two or more sets
 *
 * @param {Iterable<string>[]} args
 * @see {@link https://github.com/microsoft/TypeScript/issues/57228|GitHub}
 */
export default function uniteSets(...args) {
	return new Set([...args].reduce((result, set) => [...result, ...set], []));
}
