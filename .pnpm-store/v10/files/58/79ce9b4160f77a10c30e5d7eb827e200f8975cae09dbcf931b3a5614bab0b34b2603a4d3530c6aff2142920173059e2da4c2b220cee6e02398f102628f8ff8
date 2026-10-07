// this should only run in node >= 13.7, so it
// does not need any of the intense fallbacks that old node/browsers do

var $iterator = Symbol.iterator;

export default function getIterator(iterable) {
	// alternatively, `iterable[$iterator]?.()`
	if (iterable != null && iterable[$iterator] !== undefined) {
		return iterable[$iterator]();
	}
}
