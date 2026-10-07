import {getCategory, isAmbiguous, isFullWidth, isWide} from './lookup.js';

function validate(codePoint) {
	if (!Number.isSafeInteger(codePoint)) {
		throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
	}
}

export function eastAsianWidthType(codePoint) {
	validate(codePoint);

	return getCategory(codePoint);
}

export function eastAsianWidth(codePoint, {ambiguousAsWide = false} = {}) {
	validate(codePoint);

	if (
		isFullWidth(codePoint)
		|| isWide(codePoint)
		|| (ambiguousAsWide && isAmbiguous(codePoint))
	) {
		return 2;
	}

	return 1;
}

// Private exports for https://github.com/sindresorhus/is-fullwidth-code-point
export {isFullWidth as _isFullWidth, isWide as _isWide} from './lookup.js';
