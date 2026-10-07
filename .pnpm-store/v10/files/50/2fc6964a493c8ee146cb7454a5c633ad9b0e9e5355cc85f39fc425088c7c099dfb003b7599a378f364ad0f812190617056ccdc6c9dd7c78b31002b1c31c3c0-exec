import ansiStyles from 'ansi-styles';
import isFullwidthCodePoint from 'is-fullwidth-code-point';

// \x1b and \x9b
const ESCAPES = new Set([27, 155]);

const CODE_POINT_0 = '0'.codePointAt(0);
const CODE_POINT_9 = '9'.codePointAt(0);

const MAX_ANSI_SEQUENCE_LENGTH = 19;

const endCodesSet = new Set();
const endCodesMap = new Map();
for (const [start, end] of ansiStyles.codes) {
	endCodesSet.add(ansiStyles.color.ansi(end));
	endCodesMap.set(ansiStyles.color.ansi(start), ansiStyles.color.ansi(end));
}

function getEndCode(code) {
	if (endCodesSet.has(code)) {
		return code;
	}

	if (endCodesMap.has(code)) {
		return endCodesMap.get(code);
	}

	code = code.slice(2);
	if (code.includes(';')) {
		code = code[0] + '0';
	}

	const returnValue = ansiStyles.codes.get(Number.parseInt(code, 10));
	if (returnValue) {
		return ansiStyles.color.ansi(returnValue);
	}

	return ansiStyles.reset.open;
}

function findNumberIndex(string) {
	for (let index = 0; index < string.length; index++) {
		const codePoint = string.codePointAt(index);
		if (codePoint >= CODE_POINT_0 && codePoint <= CODE_POINT_9) {
			return index;
		}
	}

	return -1;
}

function parseAnsiCode(string, offset) {
	string = string.slice(offset, offset + MAX_ANSI_SEQUENCE_LENGTH);
	const startIndex = findNumberIndex(string);
	if (startIndex !== -1) {
		let endIndex = string.indexOf('m', startIndex);
		if (endIndex === -1) {
			endIndex = string.length;
		}

		return string.slice(0, endIndex + 1);
	}
}

function tokenize(string, endCharacter = Number.POSITIVE_INFINITY) {
	const returnValue = [];

	let index = 0;
	let visibleCount = 0;
	while (index < string.length) {
		const codePoint = string.codePointAt(index);

		if (ESCAPES.has(codePoint)) {
			const code = parseAnsiCode(string, index);
			if (code) {
				returnValue.push({
					type: 'ansi',
					code,
					endCode: getEndCode(code),
				});
				index += code.length;
				continue;
			}
		}

		const isFullWidth = isFullwidthCodePoint(codePoint);
		const character = String.fromCodePoint(codePoint);

		returnValue.push({
			type: 'character',
			value: character,
			isFullWidth,
		});

		index += character.length;
		visibleCount += isFullWidth ? 2 : character.length;

		if (visibleCount >= endCharacter) {
			break;
		}
	}

	return returnValue;
}

function reduceAnsiCodes(codes) {
	let returnValue = [];

	for (const code of codes) {
		if (code.code === ansiStyles.reset.open) {
			// Reset code, disable all codes
			returnValue = [];
		} else if (endCodesSet.has(code.code)) {
			// This is an end code, disable all matching start codes
			returnValue = returnValue.filter(returnValueCode => returnValueCode.endCode !== code.code);
		} else {
			// This is a start code. Disable all styles this "overrides", then enable it
			returnValue = returnValue.filter(returnValueCode => returnValueCode.endCode !== code.endCode);
			returnValue.push(code);
		}
	}

	return returnValue;
}

function undoAnsiCodes(codes) {
	const reduced = reduceAnsiCodes(codes);
	const endCodes = reduced.map(({endCode}) => endCode);
	return endCodes.reverse().join('');
}

export default function sliceAnsi(string, start, end) {
	const tokens = tokenize(string, end);
	let activeCodes = [];
	let position = 0;
	let returnValue = '';
	let include = false;

	for (const token of tokens) {
		if (end !== undefined && position >= end) {
			break;
		}

		if (token.type === 'ansi') {
			activeCodes.push(token);
			if (include) {
				returnValue += token.code;
			}
		} else {
			// Character
			if (!include && position >= start) {
				include = true;
				// Simplify active codes
				activeCodes = reduceAnsiCodes(activeCodes);
				returnValue = activeCodes.map(({code}) => code).join('');
			}

			if (include) {
				returnValue += token.value;
			}

			position += token.isFullWidth ? 2 : token.value.length;
		}
	}

	// Disable active codes at the end
	returnValue += undoAnsiCodes(activeCodes);
	return returnValue;
}
