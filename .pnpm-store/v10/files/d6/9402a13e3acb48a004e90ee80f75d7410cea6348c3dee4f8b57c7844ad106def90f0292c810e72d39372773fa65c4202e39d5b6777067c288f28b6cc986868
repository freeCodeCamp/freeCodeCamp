import {
	_isFullWidth as isFullWidth,
	_isWide as isWide,
} from 'get-east-asian-width';

export default function isFullwidthCodePoint(codePoint) {
	if (!Number.isInteger(codePoint)) {
		return false;
	}

	return isFullWidth(codePoint) || isWide(codePoint);
}
