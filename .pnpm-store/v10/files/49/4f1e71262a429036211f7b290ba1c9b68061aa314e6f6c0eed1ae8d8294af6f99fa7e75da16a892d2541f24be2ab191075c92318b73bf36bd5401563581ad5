import ansiStyles from 'ansi-styles';
import isFullwidthCodePoint from 'is-fullwidth-code-point';

const ESCAPE_CODE_POINT = 27;
const C1_DCS_CODE_POINT = 144;
const C1_SOS_CODE_POINT = 152;
const C1_CSI_CODE_POINT = 155;
const C1_ST_CODE_POINT = 156;
const C1_OSC_CODE_POINT = 157;
const C1_PM_CODE_POINT = 158;
const C1_APC_CODE_POINT = 159;
const ESCAPES = new Set([
	ESCAPE_CODE_POINT,
	C1_DCS_CODE_POINT,
	C1_SOS_CODE_POINT,
	C1_CSI_CODE_POINT,
	C1_ST_CODE_POINT,
	C1_OSC_CODE_POINT,
	C1_PM_CODE_POINT,
	C1_APC_CODE_POINT,
]);

const ESCAPE = '\u001B';
const ANSI_BELL = '\u0007';
const ANSI_CSI = '[';
const ANSI_OSC = ']';
const ANSI_DCS = 'P';
const ANSI_SOS = 'X';
const ANSI_PM = '^';
const ANSI_APC = '_';
const ANSI_SGR_TERMINATOR = 'm';
const ANSI_OSC_TERMINATOR = '\\';
const ANSI_STRING_TERMINATOR = `${ESCAPE}${ANSI_OSC_TERMINATOR}`;
const C1_OSC = '\u009D';
const C1_STRING_TERMINATOR = '\u009C';
const ANSI_HYPERLINK_ESC_PREFIX = `${ESCAPE}${ANSI_OSC}8;`;
const ANSI_HYPERLINK_C1_PREFIX = `${C1_OSC}8;`;
const ANSI_HYPERLINK_ESC_CLOSE = `${ANSI_HYPERLINK_ESC_PREFIX};`;
const ANSI_HYPERLINK_C1_CLOSE = `${ANSI_HYPERLINK_C1_PREFIX};`;

const CODE_POINT_0 = '0'.codePointAt(0);
const CODE_POINT_9 = '9'.codePointAt(0);
const CODE_POINT_SEMICOLON = ';'.codePointAt(0);
const CODE_POINT_COLON = ':'.codePointAt(0);
// ECMA-48 CSI format: parameter bytes 0x30-0x3F, intermediates 0x20-0x2F, final 0x40-0x7E.
const CODE_POINT_CSI_PARAMETER_START = '0'.codePointAt(0);
const CODE_POINT_CSI_PARAMETER_END = '?'.codePointAt(0);
const CODE_POINT_CSI_INTERMEDIATE_START = ' '.codePointAt(0);
const CODE_POINT_CSI_INTERMEDIATE_END = '/'.codePointAt(0);
const CODE_POINT_CSI_FINAL_START = '@'.codePointAt(0);
const CODE_POINT_CSI_FINAL_END = '~'.codePointAt(0);
const REGIONAL_INDICATOR_SYMBOL_LETTER_A = 127_462;
const REGIONAL_INDICATOR_SYMBOL_LETTER_Z = 127_487;
const SGR_RESET_CODE = 0;
const SGR_EXTENDED_FOREGROUND_CODE = 38;
const SGR_DEFAULT_FOREGROUND_CODE = 39;
const SGR_EXTENDED_BACKGROUND_CODE = 48;
const SGR_DEFAULT_BACKGROUND_CODE = 49;
const SGR_COLOR_TYPE_ANSI_256 = 5;
const SGR_COLOR_TYPE_TRUECOLOR = 2;
const SGR_ANSI_256_FRAGMENT_LENGTH = 3;
const SGR_TRUECOLOR_FRAGMENT_LENGTH = 5;
const SGR_ANSI_256_LAST_PARAMETER_OFFSET = 2;
const SGR_TRUECOLOR_LAST_PARAMETER_OFFSET = 4;
const VARIATION_SELECTOR_16_CODE_POINT = 65_039;
const COMBINING_ENCLOSING_KEYCAP_CODE_POINT = 8419;
const EMOJI_PRESENTATION_GRAPHEME_REGEX = /\p{Emoji_Presentation}/u;
const GRAPHEME_SEGMENTER = new Intl.Segmenter(undefined, {granularity: 'grapheme'});

const endCodeNumbers = new Set();
for (const [, end] of ansiStyles.codes) {
	endCodeNumbers.add(end);
}

function isSgrParameterCharacter(codePoint) {
	return (
		(codePoint >= CODE_POINT_0 && codePoint <= CODE_POINT_9)
		|| codePoint === CODE_POINT_SEMICOLON
		|| codePoint === CODE_POINT_COLON
	);
}

function isCsiParameterCharacter(codePoint) {
	return codePoint >= CODE_POINT_CSI_PARAMETER_START && codePoint <= CODE_POINT_CSI_PARAMETER_END;
}

function isCsiIntermediateCharacter(codePoint) {
	return codePoint >= CODE_POINT_CSI_INTERMEDIATE_START && codePoint <= CODE_POINT_CSI_INTERMEDIATE_END;
}

function isCsiFinalCharacter(codePoint) {
	return codePoint >= CODE_POINT_CSI_FINAL_START && codePoint <= CODE_POINT_CSI_FINAL_END;
}

function isRegionalIndicatorCodePoint(codePoint) {
	return codePoint >= REGIONAL_INDICATOR_SYMBOL_LETTER_A && codePoint <= REGIONAL_INDICATOR_SYMBOL_LETTER_Z;
}

function createControlParseResult(code, endIndex) {
	return {
		token: {
			type: 'control',
			code,
		},
		endIndex,
	};
}

function isEmojiStyleGrapheme(grapheme) {
	if (EMOJI_PRESENTATION_GRAPHEME_REGEX.test(grapheme)) {
		return true;
	}

	for (const character of grapheme) {
		const codePoint = character.codePointAt(0);
		if (
			codePoint === VARIATION_SELECTOR_16_CODE_POINT
			|| codePoint === COMBINING_ENCLOSING_KEYCAP_CODE_POINT
		) {
			return true;
		}
	}

	return false;
}

function getGraphemeWidth(grapheme) {
	let regionalIndicatorCount = 0;
	for (const character of grapheme) {
		const codePoint = character.codePointAt(0);
		if (isFullwidthCodePoint(codePoint)) {
			return 2;
		}

		if (isRegionalIndicatorCodePoint(codePoint)) {
			regionalIndicatorCount++;
		}
	}

	if (regionalIndicatorCount >= 1) {
		return 2;
	}

	if (isEmojiStyleGrapheme(grapheme)) {
		return 2;
	}

	return 1;
}

function getSgrPrefix(code) {
	if (code.startsWith('\u009B')) {
		return '\u009B';
	}

	return `${ESCAPE}${ANSI_CSI}`;
}

function createSgrCode(prefix, values) {
	return `${prefix}${values.join(';')}${ANSI_SGR_TERMINATOR}`;
}

function getSgrFragments(code) {
	const fragments = [];
	const sgrPrefix = getSgrPrefix(code);
	let parameterString;

	if (code.startsWith(`${ESCAPE}${ANSI_CSI}`)) {
		parameterString = code.slice(2, -1);
	} else if (code.startsWith('\u009B')) {
		parameterString = code.slice(1, -1);
	} else {
		return fragments;
	}

	const rawCodes = parameterString.length === 0 ? [String(SGR_RESET_CODE)] : parameterString.split(';');
	let index = 0;
	while (index < rawCodes.length) {
		const codeNumber = Number.parseInt(rawCodes[index], 10);
		if (Number.isNaN(codeNumber)) {
			index++;
			continue;
		}

		if (codeNumber === SGR_RESET_CODE) {
			fragments.push({type: 'reset'});
			index++;
			continue;
		}

		if (codeNumber === SGR_EXTENDED_FOREGROUND_CODE || codeNumber === SGR_EXTENDED_BACKGROUND_CODE) {
			const colorType = Number.parseInt(rawCodes[index + 1], 10);
			if (colorType === SGR_COLOR_TYPE_ANSI_256 && index + SGR_ANSI_256_LAST_PARAMETER_OFFSET < rawCodes.length) {
				const openCode = createSgrCode(sgrPrefix, rawCodes.slice(index, index + SGR_ANSI_256_FRAGMENT_LENGTH));
				fragments.push({
					type: 'start',
					code: openCode,
					endCode: ansiStyles.color.ansi(codeNumber === SGR_EXTENDED_FOREGROUND_CODE ? SGR_DEFAULT_FOREGROUND_CODE : SGR_DEFAULT_BACKGROUND_CODE),
				});
				index += SGR_ANSI_256_FRAGMENT_LENGTH;
				continue;
			}

			if (colorType === SGR_COLOR_TYPE_TRUECOLOR && index + SGR_TRUECOLOR_LAST_PARAMETER_OFFSET < rawCodes.length) {
				const openCode = createSgrCode(sgrPrefix, rawCodes.slice(index, index + SGR_TRUECOLOR_FRAGMENT_LENGTH));
				fragments.push({
					type: 'start',
					code: openCode,
					endCode: ansiStyles.color.ansi(codeNumber === SGR_EXTENDED_FOREGROUND_CODE ? SGR_DEFAULT_FOREGROUND_CODE : SGR_DEFAULT_BACKGROUND_CODE),
				});
				index += SGR_TRUECOLOR_FRAGMENT_LENGTH;
				continue;
			}

			const openCode = createSgrCode(sgrPrefix, [rawCodes[index]]);
			fragments.push({
				type: 'start',
				code: openCode,
				endCode: ansiStyles.color.ansi(codeNumber === SGR_EXTENDED_FOREGROUND_CODE ? SGR_DEFAULT_FOREGROUND_CODE : SGR_DEFAULT_BACKGROUND_CODE),
			});
			index++;
			continue;
		}

		if (endCodeNumbers.has(codeNumber)) {
			fragments.push({
				type: 'end',
				endCode: ansiStyles.color.ansi(codeNumber),
			});
			index++;
			continue;
		}

		const mappedEndCode = ansiStyles.codes.get(codeNumber);
		if (mappedEndCode !== undefined) {
			const openCode = createSgrCode(sgrPrefix, [rawCodes[index]]);
			fragments.push({
				type: 'start',
				code: openCode,
				endCode: ansiStyles.color.ansi(mappedEndCode),
			});
			index++;
			continue;
		}

		const openCode = createSgrCode(sgrPrefix, [rawCodes[index]]);
		fragments.push({
			type: 'start',
			code: openCode,
			endCode: ansiStyles.reset.open,
		});
		index++;
	}

	if (fragments.length === 0) {
		fragments.push({type: 'reset'});
	}

	return fragments;
}

function parseCsiCode(string, index) {
	const escapeCodePoint = string.codePointAt(index);
	let sequenceStartIndex;

	if (escapeCodePoint === ESCAPE_CODE_POINT) {
		if (string[index + 1] !== ANSI_CSI) {
			return;
		}

		sequenceStartIndex = index + 2;
	} else if (escapeCodePoint === C1_CSI_CODE_POINT) {
		sequenceStartIndex = index + 1;
	} else {
		return;
	}

	let hasCanonicalSgrParameters = true;
	for (let sequenceIndex = sequenceStartIndex; sequenceIndex < string.length; sequenceIndex++) {
		const codePoint = string.codePointAt(sequenceIndex);

		if (isCsiFinalCharacter(codePoint)) {
			const code = string.slice(index, sequenceIndex + 1);
			if (string[sequenceIndex] !== ANSI_SGR_TERMINATOR || !hasCanonicalSgrParameters) {
				return createControlParseResult(code, sequenceIndex + 1);
			}

			return {
				token: {
					type: 'sgr',
					code,
					fragments: getSgrFragments(code),
				},
				endIndex: sequenceIndex + 1,
			};
		}

		if (isCsiParameterCharacter(codePoint)) {
			if (!isSgrParameterCharacter(codePoint)) {
				hasCanonicalSgrParameters = false;
			}

			continue;
		}

		if (isCsiIntermediateCharacter(codePoint)) {
			hasCanonicalSgrParameters = false;
			continue;
		}

		const endIndex = sequenceIndex;
		return createControlParseResult(string.slice(index, endIndex), endIndex);
	}

	return createControlParseResult(string.slice(index), string.length);
}

function parseHyperlinkCode(string, index) {
	let hyperlinkPrefix;
	let hyperlinkClose;
	const codePoint = string.codePointAt(index);

	if (
		codePoint === ESCAPE_CODE_POINT
		&& string.startsWith(ANSI_HYPERLINK_ESC_PREFIX, index)
	) {
		hyperlinkPrefix = ANSI_HYPERLINK_ESC_PREFIX;
		hyperlinkClose = ANSI_HYPERLINK_ESC_CLOSE;
	} else if (
		codePoint === C1_OSC_CODE_POINT
		&& string.startsWith(ANSI_HYPERLINK_C1_PREFIX, index)
	) {
		hyperlinkPrefix = ANSI_HYPERLINK_C1_PREFIX;
		hyperlinkClose = ANSI_HYPERLINK_C1_CLOSE;
	} else {
		return;
	}

	const uriStart = string.indexOf(';', index + hyperlinkPrefix.length);
	if (uriStart === -1) {
		return createControlParseResult(string.slice(index), string.length);
	}

	for (let sequenceIndex = uriStart + 1; sequenceIndex < string.length; sequenceIndex++) {
		const character = string[sequenceIndex];

		if (character === ANSI_BELL) {
			const code = string.slice(index, sequenceIndex + 1);
			const action = sequenceIndex === uriStart + 1 ? 'close' : 'open';
			return {
				token: {
					type: 'hyperlink',
					code,
					action,
					closePrefix: hyperlinkClose,
					terminator: ANSI_BELL,
				},
				endIndex: sequenceIndex + 1,
			};
		}

		if (
			character === ESCAPE
			&& string[sequenceIndex + 1] === ANSI_OSC_TERMINATOR
		) {
			const code = string.slice(index, sequenceIndex + 2);
			const action = sequenceIndex === uriStart + 1 ? 'close' : 'open';
			return {
				token: {
					type: 'hyperlink',
					code,
					action,
					closePrefix: hyperlinkClose,
					terminator: ANSI_STRING_TERMINATOR,
				},
				endIndex: sequenceIndex + 2,
			};
		}

		if (character === C1_STRING_TERMINATOR) {
			const code = string.slice(index, sequenceIndex + 1);
			const action = sequenceIndex === uriStart + 1 ? 'close' : 'open';
			return {
				token: {
					type: 'hyperlink',
					code,
					action,
					closePrefix: hyperlinkClose,
					terminator: C1_STRING_TERMINATOR,
				},
				endIndex: sequenceIndex + 1,
			};
		}
	}

	return createControlParseResult(string.slice(index), string.length);
}

function parseControlStringCode(string, index) {
	const codePoint = string.codePointAt(index);
	let sequenceStartIndex;
	let supportsBellTerminator = false;

	switch (codePoint) {
		case ESCAPE_CODE_POINT: {
			const command = string[index + 1];
			switch (command) {
				case ANSI_OSC: {
					// OSC accepts ST (ECMA-48) and BEL (xterm compatibility extension).
					sequenceStartIndex = index + 2;
					supportsBellTerminator = true;
					break;
				}

				case ANSI_DCS:
				case ANSI_SOS:
				case ANSI_PM:
				case ANSI_APC: {
					sequenceStartIndex = index + 2;
					break;
				}

				case ANSI_OSC_TERMINATOR: {
					return createControlParseResult(ANSI_STRING_TERMINATOR, index + 2);
				}

				default: {
					return;
				}
			}

			break;
		}

		case C1_OSC_CODE_POINT: {
			sequenceStartIndex = index + 1;
			supportsBellTerminator = true;
			break;
		}

		case C1_DCS_CODE_POINT:
		case C1_SOS_CODE_POINT:
		case C1_PM_CODE_POINT:
		case C1_APC_CODE_POINT: {
			sequenceStartIndex = index + 1;
			break;
		}

		case C1_ST_CODE_POINT: {
			return createControlParseResult(C1_STRING_TERMINATOR, index + 1);
		}

		default: {
			return;
		}
	}

	for (let sequenceIndex = sequenceStartIndex; sequenceIndex < string.length; sequenceIndex++) {
		if (supportsBellTerminator && string[sequenceIndex] === ANSI_BELL) {
			return createControlParseResult(string.slice(index, sequenceIndex + 1), sequenceIndex + 1);
		}

		if (
			string[sequenceIndex] === ESCAPE
			&& string[sequenceIndex + 1] === ANSI_OSC_TERMINATOR
		) {
			return createControlParseResult(string.slice(index, sequenceIndex + 2), sequenceIndex + 2);
		}

		if (string[sequenceIndex] === C1_STRING_TERMINATOR) {
			return createControlParseResult(string.slice(index, sequenceIndex + 1), sequenceIndex + 1);
		}
	}

	return createControlParseResult(string.slice(index), string.length);
}

function parseAnsiCode(string, index) {
	const codePoint = string.codePointAt(index);
	if (codePoint === ESCAPE_CODE_POINT || codePoint === C1_OSC_CODE_POINT) {
		const hyperlinkCode = parseHyperlinkCode(string, index);
		if (hyperlinkCode) {
			return hyperlinkCode;
		}
	}

	const controlStringCode = parseControlStringCode(string, index);
	if (controlStringCode) {
		return controlStringCode;
	}

	return parseCsiCode(string, index);
}

function appendTrailingAnsiTokens(string, index, tokens) {
	while (index < string.length) {
		const nextCodePoint = string.codePointAt(index);
		if (!ESCAPES.has(nextCodePoint)) {
			break;
		}

		const escapeCode = parseAnsiCode(string, index);
		if (!escapeCode) {
			break;
		}

		tokens.push(escapeCode.token);
		index = escapeCode.endIndex;
	}

	return index;
}

function parseCharacterTokenWithRawSegmentation(string, index, graphemeSegments) {
	const segment = graphemeSegments.containing(index);
	if (!segment || segment.index !== index) {
		return;
	}

	return {
		token: {
			type: 'character',
			// Intentionally preserve UAX29 behavior (GB3): CRLF is one grapheme cluster.
			value: segment.segment,
			visibleWidth: getGraphemeWidth(segment.segment),
			isGraphemeContinuation: false,
		},
		endIndex: index + segment.segment.length,
	};
}

function collectVisibleCharacters(string) {
	const visibleCharacters = [];
	let index = 0;

	while (index < string.length) {
		const codePoint = string.codePointAt(index);
		if (ESCAPES.has(codePoint)) {
			const code = parseAnsiCode(string, index);
			if (code) {
				index = code.endIndex;
				continue;
			}
		}

		const value = String.fromCodePoint(codePoint);
		visibleCharacters.push({
			value,
			visibleWidth: 1,
			isGraphemeContinuation: false,
		});
		index += value.length;
	}

	return visibleCharacters;
}

function applyGraphemeMetadata(visibleCharacters) {
	if (visibleCharacters.length === 0) {
		return;
	}

	const visibleString = visibleCharacters.map(({value}) => value).join('');
	const scalarOffsets = [];
	let scalarOffset = 0;

	for (const visibleCharacter of visibleCharacters) {
		scalarOffsets.push(scalarOffset);
		scalarOffset += visibleCharacter.value.length;
	}

	let scalarIndex = 0;
	for (const segment of GRAPHEME_SEGMENTER.segment(visibleString)) {
		while (
			scalarIndex < visibleCharacters.length
			&& scalarOffsets[scalarIndex] < segment.index
		) {
			scalarIndex++;
		}

		let graphemeIndex = scalarIndex;
		let isFirstInGrapheme = true;
		while (
			graphemeIndex < visibleCharacters.length
			&& scalarOffsets[graphemeIndex] < segment.index + segment.segment.length
		) {
			visibleCharacters[graphemeIndex].visibleWidth = isFirstInGrapheme ? getGraphemeWidth(segment.segment) : 0;
			visibleCharacters[graphemeIndex].isGraphemeContinuation = !isFirstInGrapheme;
			isFirstInGrapheme = false;
			graphemeIndex++;
		}

		scalarIndex = graphemeIndex;
	}
}

function tokenizeAnsiWithVisibleSegmentation(string, {endCharacter = Number.POSITIVE_INFINITY} = {}) {
	const tokens = [];
	const visibleCharacters = collectVisibleCharacters(string);
	applyGraphemeMetadata(visibleCharacters);

	let index = 0;
	let visibleCharacterIndex = 0;
	let visibleCount = 0;
	while (index < string.length) {
		const codePoint = string.codePointAt(index);

		if (ESCAPES.has(codePoint)) {
			const code = parseAnsiCode(string, index);
			if (code) {
				tokens.push(code.token);
				index = code.endIndex;
				continue;
			}
		}

		const value = String.fromCodePoint(codePoint);
		const visibleCharacter = visibleCharacters[visibleCharacterIndex];
		let visibleWidth = isFullwidthCodePoint(codePoint) ? 2 : value.length;
		if (visibleCharacter) {
			visibleWidth = visibleCharacter.visibleWidth;
		}

		const token = {
			type: 'character',
			value,
			visibleWidth,
			isGraphemeContinuation: visibleCharacter ? visibleCharacter.isGraphemeContinuation : false,
		};

		tokens.push(token);
		index += value.length;
		visibleCharacterIndex++;
		visibleCount += token.visibleWidth;

		if (visibleCount >= endCharacter) {
			const nextVisibleCharacter = visibleCharacters[visibleCharacterIndex];
			if (
				!nextVisibleCharacter
				|| !nextVisibleCharacter.isGraphemeContinuation
			) {
				index = appendTrailingAnsiTokens(string, index, tokens);
				break;
			}
		}
	}

	return tokens;
}

function areValuesInSameGrapheme(leftValue, rightValue) {
	const pair = `${leftValue}${rightValue}`;
	const splitIndex = leftValue.length;

	for (const segment of GRAPHEME_SEGMENTER.segment(pair)) {
		if (segment.index === splitIndex) {
			return false;
		}

		if (segment.index > splitIndex) {
			return true;
		}
	}

	return true;
}

function hasAnsiSplitContinuationAhead(string, startIndex, previousVisibleValue, graphemeSegments) {
	if (!previousVisibleValue) {
		return false;
	}

	let index = startIndex;
	let hasAnsiCode = false;
	while (index < string.length) {
		const codePoint = string.codePointAt(index);
		if (ESCAPES.has(codePoint)) {
			const code = parseAnsiCode(string, index);
			if (code) {
				hasAnsiCode = true;
				index = code.endIndex;
				continue;
			}
		}

		if (!hasAnsiCode) {
			return false;
		}

		const characterToken = parseCharacterTokenWithRawSegmentation(string, index, graphemeSegments);
		if (!characterToken) {
			return true;
		}

		return areValuesInSameGrapheme(previousVisibleValue, characterToken.token.value);
	}

	return false;
}

export default function tokenizeAnsi(string, {endCharacter = Number.POSITIVE_INFINITY} = {}) {
	const tokens = [];
	const graphemeSegments = GRAPHEME_SEGMENTER.segment(string);

	let index = 0;
	let visibleCount = 0;
	let previousVisibleValue;
	let hasAnsiSinceLastVisible = false;
	while (index < string.length) {
		const codePoint = string.codePointAt(index);

		if (ESCAPES.has(codePoint)) {
			const code = parseAnsiCode(string, index);
			if (code) {
				tokens.push(code.token);
				index = code.endIndex;
				hasAnsiSinceLastVisible = true;
				continue;
			}
		}

		const characterToken = parseCharacterTokenWithRawSegmentation(string, index, graphemeSegments);
		if (!characterToken) {
			return tokenizeAnsiWithVisibleSegmentation(string, {endCharacter});
		}

		if (
			hasAnsiSinceLastVisible
			&& previousVisibleValue
			&& areValuesInSameGrapheme(previousVisibleValue, characterToken.token.value)
		) {
			return tokenizeAnsiWithVisibleSegmentation(string, {endCharacter});
		}

		tokens.push(characterToken.token);
		index = characterToken.endIndex;
		visibleCount += characterToken.token.visibleWidth;
		hasAnsiSinceLastVisible = false;
		previousVisibleValue = characterToken.token.value;

		if (visibleCount >= endCharacter) {
			if (hasAnsiSplitContinuationAhead(string, index, previousVisibleValue, graphemeSegments)) {
				return tokenizeAnsiWithVisibleSegmentation(string, {endCharacter});
			}

			index = appendTrailingAnsiTokens(string, index, tokens);
			break;
		}
	}

	return tokens;
}
