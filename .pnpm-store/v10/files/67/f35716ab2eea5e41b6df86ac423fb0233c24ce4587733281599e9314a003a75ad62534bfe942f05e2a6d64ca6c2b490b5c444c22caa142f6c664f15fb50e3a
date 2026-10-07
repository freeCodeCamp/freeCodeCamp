/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @typedef {object} CssTokenCallbacks
 * @property {(function(string, number, number, number, number): number)=} url
 * @property {(function(string, number, number): number)=} comment
 * @property {(function(string, number, number): number)=} string
 * @property {(function(string, number, number): number)=} leftParenthesis
 * @property {(function(string, number, number): number)=} rightParenthesis
 * @property {(function(string, number, number): number)=} function
 * @property {(function(string, number, number): number)=} colon
 * @property {(function(string, number, number): number)=} atKeyword
 * @property {(function(string, number, number): number)=} delim
 * @property {(function(string, number, number): number)=} identifier
 * @property {(function(string, number, number, boolean): number)=} hash
 * @property {(function(string, number, number): number)=} leftCurlyBracket
 * @property {(function(string, number, number): number)=} rightCurlyBracket
 * @property {(function(string, number, number): number)=} semicolon
 * @property {(function(string, number, number): number)=} comma
 * @property {(function(): boolean)=} needTerminate
 */

/** @typedef {function(string, number, CssTokenCallbacks): number} CharHandler */

// spec: https://drafts.csswg.org/css-syntax/

const CC_LINE_FEED = "\n".charCodeAt(0);
const CC_CARRIAGE_RETURN = "\r".charCodeAt(0);
const CC_FORM_FEED = "\f".charCodeAt(0);

const CC_TAB = "\t".charCodeAt(0);
const CC_SPACE = " ".charCodeAt(0);

const CC_SOLIDUS = "/".charCodeAt(0);
const CC_REVERSE_SOLIDUS = "\\".charCodeAt(0);
const CC_ASTERISK = "*".charCodeAt(0);

const CC_LEFT_PARENTHESIS = "(".charCodeAt(0);
const CC_RIGHT_PARENTHESIS = ")".charCodeAt(0);
const CC_LEFT_CURLY = "{".charCodeAt(0);
const CC_RIGHT_CURLY = "}".charCodeAt(0);
const CC_LEFT_SQUARE = "[".charCodeAt(0);
const CC_RIGHT_SQUARE = "]".charCodeAt(0);

const CC_QUOTATION_MARK = '"'.charCodeAt(0);
const CC_APOSTROPHE = "'".charCodeAt(0);

const CC_FULL_STOP = ".".charCodeAt(0);
const CC_COLON = ":".charCodeAt(0);
const CC_SEMICOLON = ";".charCodeAt(0);
const CC_COMMA = ",".charCodeAt(0);
const CC_PERCENTAGE = "%".charCodeAt(0);
const CC_AT_SIGN = "@".charCodeAt(0);

const CC_LOW_LINE = "_".charCodeAt(0);
const CC_LOWER_A = "a".charCodeAt(0);
const CC_LOWER_F = "f".charCodeAt(0);
const CC_LOWER_E = "e".charCodeAt(0);
const CC_LOWER_U = "u".charCodeAt(0);
const CC_LOWER_Z = "z".charCodeAt(0);
const CC_UPPER_A = "A".charCodeAt(0);
const CC_UPPER_F = "F".charCodeAt(0);
const CC_UPPER_E = "E".charCodeAt(0);
const CC_UPPER_U = "E".charCodeAt(0);
const CC_UPPER_Z = "Z".charCodeAt(0);
const CC_0 = "0".charCodeAt(0);
const CC_9 = "9".charCodeAt(0);

const CC_NUMBER_SIGN = "#".charCodeAt(0);
const CC_PLUS_SIGN = "+".charCodeAt(0);
const CC_HYPHEN_MINUS = "-".charCodeAt(0);

const CC_LESS_THAN_SIGN = "<".charCodeAt(0);
const CC_GREATER_THAN_SIGN = ">".charCodeAt(0);

/** @type {CharHandler} */
const consumeSpace = (input, pos, _callbacks) => {
	// Consume as much whitespace as possible.
	while (_isWhiteSpace(input.charCodeAt(pos))) {
		pos++;
	}

	// Return a <whitespace-token>.
	return pos;
};

// U+000A LINE FEED. Note that U+000D CARRIAGE RETURN and U+000C FORM FEED are not included in this definition,
// as they are converted to U+000A LINE FEED during preprocessing.
//
// Replace any U+000D CARRIAGE RETURN (CR) code points, U+000C FORM FEED (FF) code points, or pairs of U+000D CARRIAGE RETURN (CR) followed by U+000A LINE FEED (LF) in input by a single U+000A LINE FEED (LF) code point.

/**
 * @param {number} cc char code
 * @returns {boolean} true, if cc is a newline
 */
const _isNewline = cc =>
	cc === CC_LINE_FEED || cc === CC_CARRIAGE_RETURN || cc === CC_FORM_FEED;

/**
 * @param {number} cc char code
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position
 */
const consumeExtraNewline = (cc, input, pos) => {
	if (cc === CC_CARRIAGE_RETURN && input.charCodeAt(pos) === CC_LINE_FEED) {
		pos++;
	}

	return pos;
};

/**
 * @param {number} cc char code
 * @returns {boolean} true, if cc is a space (U+0009 CHARACTER TABULATION or U+0020 SPACE)
 */
const _isSpace = cc => cc === CC_TAB || cc === CC_SPACE;

/**
 * @param {number} cc char code
 * @returns {boolean} true, if cc is a whitespace
 */
const _isWhiteSpace = cc => _isNewline(cc) || _isSpace(cc);

/**
 * ident-start code point
 *
 * A letter, a non-ASCII code point, or U+005F LOW LINE (_).
 * @param {number} cc char code
 * @returns {boolean} true, if cc is a start code point of an identifier
 */
const isIdentStartCodePoint = cc =>
	(cc >= CC_LOWER_A && cc <= CC_LOWER_Z) ||
	(cc >= CC_UPPER_A && cc <= CC_UPPER_Z) ||
	cc === CC_LOW_LINE ||
	cc >= 0x80;

/** @type {CharHandler} */
const consumeDelimToken = (input, pos, _callbacks) =>
	// Return a <delim-token> with its value set to the current input code point.
	pos;

/** @type {CharHandler} */
const consumeComments = (input, pos, callbacks) => {
	// This section describes how to consume comments from a stream of code points. It returns nothing.
	// If the next two input code point are U+002F SOLIDUS (/) followed by a U+002A ASTERISK (*),
	// consume them and all following code points up to and including the first U+002A ASTERISK (*)
	// followed by a U+002F SOLIDUS (/), or up to an EOF code point.
	// Return to the start of this step.
	while (
		input.charCodeAt(pos) === CC_SOLIDUS &&
		input.charCodeAt(pos + 1) === CC_ASTERISK
	) {
		const start = pos;
		pos += 2;

		for (;;) {
			if (pos === input.length) {
				// If the preceding paragraph ended by consuming an EOF code point, this is a parse error.
				return pos;
			}

			if (
				input.charCodeAt(pos) === CC_ASTERISK &&
				input.charCodeAt(pos + 1) === CC_SOLIDUS
			) {
				pos += 2;

				if (callbacks.comment) {
					pos = callbacks.comment(input, start, pos);
				}

				break;
			}

			pos++;
		}
	}

	return pos;
};

/**
 * @param {number} cc char code
 * @returns {boolean} true, if cc is a hex digit
 */
const _isHexDigit = cc =>
	_isDigit(cc) ||
	(cc >= CC_UPPER_A && cc <= CC_UPPER_F) ||
	(cc >= CC_LOWER_A && cc <= CC_LOWER_F);

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position
 */
const _consumeAnEscapedCodePoint = (input, pos) => {
	// This section describes how to consume an escaped code point.
	// It assumes that the U+005C REVERSE SOLIDUS (\) has already been consumed and that the next input code point has already been verified to be part of a valid escape.
	// It will return a code point.

	// Consume the next input code point.
	const cc = input.charCodeAt(pos);
	pos++;

	// EOF
	// This is a parse error. Return U+FFFD REPLACEMENT CHARACTER (�).
	if (pos === input.length) {
		return pos;
	}

	// hex digit
	// Consume as many hex digits as possible, but no more than 5.
	// Note that this means 1-6 hex digits have been consumed in total.
	// If the next input code point is whitespace, consume it as well.
	// Interpret the hex digits as a hexadecimal number.
	// If this number is zero, or is for a surrogate, or is greater than the maximum allowed code point, return U+FFFD REPLACEMENT CHARACTER (�).
	// Otherwise, return the code point with that value.
	if (_isHexDigit(cc)) {
		for (let i = 0; i < 5; i++) {
			if (_isHexDigit(input.charCodeAt(pos))) {
				pos++;
			}
		}

		const cc = input.charCodeAt(pos);

		if (_isWhiteSpace(cc)) {
			pos++;
			pos = consumeExtraNewline(cc, input, pos);
		}

		return pos;
	}

	// anything else
	// Return the current input code point.
	return pos;
};

/** @type {CharHandler} */
const consumeAStringToken = (input, pos, callbacks) => {
	// This section describes how to consume a string token from a stream of code points.
	// It returns either a <string-token> or <bad-string-token>.
	//
	// This algorithm may be called with an ending code point, which denotes the code point that ends the string.
	// If an ending code point is not specified, the current input code point is used.
	const start = pos - 1;
	const endingCodePoint = input.charCodeAt(pos - 1);

	// Initially create a <string-token> with its value set to the empty string.

	// Repeatedly consume the next input code point from the stream:
	for (;;) {
		// EOF
		// This is a parse error. Return the <string-token>.
		if (pos === input.length) {
			if (callbacks.string !== undefined) {
				return callbacks.string(input, start, pos);
			}

			return pos;
		}

		const cc = input.charCodeAt(pos);
		pos++;

		// ending code point
		// Return the <string-token>.
		if (cc === endingCodePoint) {
			if (callbacks.string !== undefined) {
				return callbacks.string(input, start, pos);
			}

			return pos;
		}
		// newline
		// This is a parse error.
		// Reconsume the current input code point, create a <bad-string-token>, and return it.
		else if (_isNewline(cc)) {
			pos--;
			// bad string
			return pos;
		}
		// U+005C REVERSE SOLIDUS (\)
		else if (cc === CC_REVERSE_SOLIDUS) {
			// If the next input code point is EOF, do nothing.
			if (pos === input.length) {
				return pos;
			}
			// Otherwise, if the next input code point is a newline, consume it.
			else if (_isNewline(input.charCodeAt(pos))) {
				const cc = input.charCodeAt(pos);
				pos++;
				pos = consumeExtraNewline(cc, input, pos);
			}
			// Otherwise, (the stream starts with a valid escape) consume an escaped code point and append the returned code point to the <string-token>’s value.
			else if (_ifTwoCodePointsAreValidEscape(input, pos)) {
				pos = _consumeAnEscapedCodePoint(input, pos);
			}
		}
		// anything else
		// Append the current input code point to the <string-token>’s value.
		else {
			// Append
		}
	}
};

/**
 * @param {number} cc char code
 * @param {number} q char code
 * @returns {boolean} is non-ASCII code point
 */
const isNonASCIICodePoint = (cc, q) =>
	// Simplify
	cc > 0x80;
/**
 * @param {number} cc char code
 * @returns {boolean} is letter
 */
const isLetter = cc =>
	(cc >= CC_LOWER_A && cc <= CC_LOWER_Z) ||
	(cc >= CC_UPPER_A && cc <= CC_UPPER_Z);

/**
 * @param {number} cc char code
 * @param {number} q char code
 * @returns {boolean} is identifier start code
 */
const _isIdentStartCodePoint = (cc, q) =>
	isLetter(cc) || isNonASCIICodePoint(cc, q) || cc === CC_LOW_LINE;

/**
 * @param {number} cc char code
 * @param {number} q char code
 * @returns {boolean} is identifier code
 */
const _isIdentCodePoint = (cc, q) =>
	_isIdentStartCodePoint(cc, q) || _isDigit(cc) || cc === CC_HYPHEN_MINUS;
/**
 * @param {number} cc char code
 * @returns {boolean} is digit
 */
const _isDigit = cc => cc >= CC_0 && cc <= CC_9;

/**
 * @param {string} input input
 * @param {number} pos position
 * @param {number=} f first code point
 * @param {number=} s second code point
 * @returns {boolean} true if two code points are a valid escape
 */
const _ifTwoCodePointsAreValidEscape = (input, pos, f, s) => {
	// This section describes how to check if two code points are a valid escape.
	// The algorithm described here can be called explicitly with two code points, or can be called with the input stream itself.
	// In the latter case, the two code points in question are the current input code point and the next input code point, in that order.

	// Note: This algorithm will not consume any additional code point.
	const first = f || input.charCodeAt(pos - 1);
	const second = s || input.charCodeAt(pos);

	// If the first code point is not U+005C REVERSE SOLIDUS (\), return false.
	if (first !== CC_REVERSE_SOLIDUS) return false;
	// Otherwise, if the second code point is a newline, return false.
	if (_isNewline(second)) return false;
	// Otherwise, return true.
	return true;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @param {number=} f first
 * @param {number=} s second
 * @param {number=} t third
 * @returns {boolean} true, if input at pos starts an identifier
 */
const _ifThreeCodePointsWouldStartAnIdentSequence = (input, pos, f, s, t) => {
	// This section describes how to check if three code points would start an ident sequence.
	// The algorithm described here can be called explicitly with three code points, or can be called with the input stream itself.
	// In the latter case, the three code points in question are the current input code point and the next two input code points, in that order.

	// Note: This algorithm will not consume any additional code points.

	const first = f || input.charCodeAt(pos - 1);
	const second = s || input.charCodeAt(pos);
	const third = t || input.charCodeAt(pos + 1);

	// Look at the first code point:

	// U+002D HYPHEN-MINUS
	if (first === CC_HYPHEN_MINUS) {
		// If the second code point is an ident-start code point or a U+002D HYPHEN-MINUS
		// or a U+002D HYPHEN-MINUS, or the second and third code points are a valid escape, return true.
		if (
			_isIdentStartCodePoint(second, pos) ||
			second === CC_HYPHEN_MINUS ||
			_ifTwoCodePointsAreValidEscape(input, pos, second, third)
		) {
			return true;
		}
		return false;
	}
	// ident-start code point
	else if (_isIdentStartCodePoint(first, pos - 1)) {
		return true;
	}
	// U+005C REVERSE SOLIDUS (\)
	// If the first and second code points are a valid escape, return true. Otherwise, return false.
	else if (first === CC_REVERSE_SOLIDUS) {
		if (_ifTwoCodePointsAreValidEscape(input, pos, first, second)) {
			return true;
		}

		return false;
	}
	// anything else
	// Return false.
	return false;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @param {number=} f first
 * @param {number=} s second
 * @param {number=} t third
 * @returns {boolean} true, if input at pos starts an identifier
 */
const _ifThreeCodePointsWouldStartANumber = (input, pos, f, s, t) => {
	// This section describes how to check if three code points would start a number.
	// The algorithm described here can be called explicitly with three code points, or can be called with the input stream itself.
	// In the latter case, the three code points in question are the current input code point and the next two input code points, in that order.

	// Note: This algorithm will not consume any additional code points.

	const first = f || input.charCodeAt(pos - 1);
	const second = s || input.charCodeAt(pos);
	const third = t || input.charCodeAt(pos);

	// Look at the first code point:

	// U+002B PLUS SIGN (+)
	// U+002D HYPHEN-MINUS (-)
	//
	// If the second code point is a digit, return true.
	// Otherwise, if the second code point is a U+002E FULL STOP (.) and the third code point is a digit, return true.
	// Otherwise, return false.
	if (first === CC_PLUS_SIGN || first === CC_HYPHEN_MINUS) {
		if (_isDigit(second)) {
			return true;
		} else if (second === CC_FULL_STOP && _isDigit(third)) {
			return true;
		}

		return false;
	}
	// U+002E FULL STOP (.)
	// If the second code point is a digit, return true. Otherwise, return false.
	else if (first === CC_FULL_STOP) {
		if (_isDigit(second)) {
			return true;
		}

		return false;
	}
	// digit
	// Return true.
	else if (_isDigit(first)) {
		return true;
	}

	// anything else
	// Return false.
	return false;
};

/** @type {CharHandler} */
const consumeNumberSign = (input, pos, callbacks) => {
	// If the next input code point is an ident code point or the next two input code points are a valid escape, then:
	// - Create a <hash-token>.
	// - If the next 3 input code points would start an ident sequence, set the <hash-token>’s type flag to "id".
	// - Consume an ident sequence, and set the <hash-token>’s value to the returned string.
	// - Return the <hash-token>.
	const start = pos - 1;
	const first = input.charCodeAt(pos);
	const second = input.charCodeAt(pos + 1);

	if (
		_isIdentCodePoint(first, pos - 1) ||
		_ifTwoCodePointsAreValidEscape(input, pos, first, second)
	) {
		const third = input.charCodeAt(pos + 2);
		let isId = false;

		if (
			_ifThreeCodePointsWouldStartAnIdentSequence(
				input,
				pos,
				first,
				second,
				third
			)
		) {
			isId = true;
		}

		pos = _consumeAnIdentSequence(input, pos, callbacks);

		if (callbacks.hash !== undefined) {
			return callbacks.hash(input, start, pos, isId);
		}

		return pos;
	}

	// Otherwise, return a <delim-token> with its value set to the current input code point.
	return pos;
};

/** @type {CharHandler} */
const consumeHyphenMinus = (input, pos, callbacks) => {
	// If the input stream starts with a number, reconsume the current input code point, consume a numeric token, and return it.
	if (_ifThreeCodePointsWouldStartANumber(input, pos)) {
		pos--;
		return consumeANumericToken(input, pos, callbacks);
	}
	// Otherwise, if the next 2 input code points are U+002D HYPHEN-MINUS U+003E GREATER-THAN SIGN (->), consume them and return a <CDC-token>.
	else if (
		input.charCodeAt(pos) === CC_HYPHEN_MINUS &&
		input.charCodeAt(pos + 1) === CC_GREATER_THAN_SIGN
	) {
		return pos + 2;
	}
	// Otherwise, if the input stream starts with an ident sequence, reconsume the current input code point, consume an ident-like token, and return it.
	else if (_ifThreeCodePointsWouldStartAnIdentSequence(input, pos)) {
		pos--;
		return consumeAnIdentLikeToken(input, pos, callbacks);
	}

	// Otherwise, return a <delim-token> with its value set to the current input code point.
	return pos;
};

/** @type {CharHandler} */
const consumeFullStop = (input, pos, callbacks) => {
	const start = pos - 1;

	// If the input stream starts with a number, reconsume the current input code point, consume a numeric token, and return it.
	if (_ifThreeCodePointsWouldStartANumber(input, pos)) {
		pos--;
		return consumeANumericToken(input, pos, callbacks);
	}

	// Otherwise, return a <delim-token> with its value set to the current input code point.
	if (callbacks.delim !== undefined) {
		return callbacks.delim(input, start, pos);
	}

	return pos;
};

/** @type {CharHandler} */
const consumePlusSign = (input, pos, callbacks) => {
	// If the input stream starts with a number, reconsume the current input code point, consume a numeric token, and return it.
	if (_ifThreeCodePointsWouldStartANumber(input, pos)) {
		pos--;
		return consumeANumericToken(input, pos, callbacks);
	}

	// Otherwise, return a <delim-token> with its value set to the current input code point.
	return pos;
};

/** @type {CharHandler} */
const _consumeANumber = (input, pos) => {
	// This section describes how to consume a number from a stream of code points.
	// It returns a numeric value, and a type which is either "integer" or "number".

	// Execute the following steps in order:
	// Initially set type to "integer". Let repr be the empty string.

	// If the next input code point is U+002B PLUS SIGN (+) or U+002D HYPHEN-MINUS (-), consume it and append it to repr.
	if (
		input.charCodeAt(pos) === CC_HYPHEN_MINUS ||
		input.charCodeAt(pos) === CC_PLUS_SIGN
	) {
		pos++;
	}

	// While the next input code point is a digit, consume it and append it to repr.
	while (_isDigit(input.charCodeAt(pos))) {
		pos++;
	}

	// If the next 2 input code points are U+002E FULL STOP (.) followed by a digit, then:
	// 1. Consume the next input code point and append it to number part.
	// 2. While the next input code point is a digit, consume it and append it to number part.
	// 3. Set type to "number".
	if (
		input.charCodeAt(pos) === CC_FULL_STOP &&
		_isDigit(input.charCodeAt(pos + 1))
	) {
		pos++;

		while (_isDigit(input.charCodeAt(pos))) {
			pos++;
		}
	}

	// If the next 2 or 3 input code points are U+0045 LATIN CAPITAL LETTER E (E) or U+0065 LATIN SMALL LETTER E (e), optionally followed by U+002D HYPHEN-MINUS (-) or U+002B PLUS SIGN (+), followed by a digit, then:
	// 1. Consume the next input code point.
	// 2. If the next input code point is "+" or "-", consume it and append it to exponent part.
	// 3. While the next input code point is a digit, consume it and append it to exponent part.
	// 4. Set type to "number".
	if (
		(input.charCodeAt(pos) === CC_LOWER_E ||
			input.charCodeAt(pos) === CC_UPPER_E) &&
		(((input.charCodeAt(pos + 1) === CC_HYPHEN_MINUS ||
			input.charCodeAt(pos + 1) === CC_PLUS_SIGN) &&
			_isDigit(input.charCodeAt(pos + 2))) ||
			_isDigit(input.charCodeAt(pos + 1)))
	) {
		pos++;

		if (
			input.charCodeAt(pos) === CC_PLUS_SIGN ||
			input.charCodeAt(pos) === CC_HYPHEN_MINUS
		) {
			pos++;
		}

		while (_isDigit(input.charCodeAt(pos))) {
			pos++;
		}
	}

	// Let value be the result of interpreting number part as a base-10 number.

	// If exponent part is non-empty, interpret it as a base-10 integer, then raise 10 to the power of the result, multiply it by value, and set value to that result.

	// Return value and type.
	return pos;
};

/** @type {CharHandler} */
const consumeANumericToken = (input, pos, callbacks) => {
	// This section describes how to consume a numeric token from a stream of code points.
	// It returns either a <number-token>, <percentage-token>, or <dimension-token>.

	// Consume a number and let number be the result.
	pos = _consumeANumber(input, pos, callbacks);

	// If the next 3 input code points would start an ident sequence, then:
	//
	// - Create a <dimension-token> with the same value and type flag as number, and a unit set initially to the empty string.
	// - Consume an ident sequence. Set the <dimension-token>’s unit to the returned value.
	// - Return the <dimension-token>.

	const first = input.charCodeAt(pos);
	const second = input.charCodeAt(pos + 1);
	const third = input.charCodeAt(pos + 2);

	if (
		_ifThreeCodePointsWouldStartAnIdentSequence(
			input,
			pos,
			first,
			second,
			third
		)
	) {
		return _consumeAnIdentSequence(input, pos, callbacks);
	}
	// Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%), consume it.
	// Create a <percentage-token> with the same value as number, and return it.
	else if (first === CC_PERCENTAGE) {
		return pos + 1;
	}

	// Otherwise, create a <number-token> with the same value and type flag as number, and return it.
	return pos;
};

/** @type {CharHandler} */
const consumeColon = (input, pos, callbacks) => {
	// Return a <colon-token>.
	if (callbacks.colon !== undefined) {
		return callbacks.colon(input, pos - 1, pos);
	}
	return pos;
};

/** @type {CharHandler} */
const consumeLeftParenthesis = (input, pos, callbacks) => {
	// Return a <(-token>.
	if (callbacks.leftParenthesis !== undefined) {
		return callbacks.leftParenthesis(input, pos - 1, pos);
	}
	return pos;
};

/** @type {CharHandler} */
const consumeRightParenthesis = (input, pos, callbacks) => {
	// Return a <)-token>.
	if (callbacks.rightParenthesis !== undefined) {
		return callbacks.rightParenthesis(input, pos - 1, pos);
	}
	return pos;
};

/** @type {CharHandler} */
const consumeLeftSquareBracket = (input, pos, callbacks) =>
	// Return a <]-token>.
	pos;

/** @type {CharHandler} */
const consumeRightSquareBracket = (input, pos, callbacks) =>
	// Return a <]-token>.
	pos;

/** @type {CharHandler} */
const consumeLeftCurlyBracket = (input, pos, callbacks) => {
	// Return a <{-token>.
	if (callbacks.leftCurlyBracket !== undefined) {
		return callbacks.leftCurlyBracket(input, pos - 1, pos);
	}
	return pos;
};

/** @type {CharHandler} */
const consumeRightCurlyBracket = (input, pos, callbacks) => {
	// Return a <}-token>.
	if (callbacks.rightCurlyBracket !== undefined) {
		return callbacks.rightCurlyBracket(input, pos - 1, pos);
	}
	return pos;
};

/** @type {CharHandler} */
const consumeSemicolon = (input, pos, callbacks) => {
	// Return a <semicolon-token>.
	if (callbacks.semicolon !== undefined) {
		return callbacks.semicolon(input, pos - 1, pos);
	}
	return pos;
};

/** @type {CharHandler} */
const consumeComma = (input, pos, callbacks) => {
	// Return a <comma-token>.
	if (callbacks.comma !== undefined) {
		return callbacks.comma(input, pos - 1, pos);
	}
	return pos;
};

/** @type {CharHandler} */
const _consumeAnIdentSequence = (input, pos) => {
	// This section describes how to consume an ident sequence from a stream of code points.
	// It returns a string containing the largest name that can be formed from adjacent code points in the stream, starting from the first.

	// Note: This algorithm does not do the verification of the first few code points that are necessary to ensure the returned code points would constitute an <ident-token>.
	// If that is the intended use, ensure that the stream starts with an ident sequence before calling this algorithm.

	// Let result initially be an empty string.

	// Repeatedly consume the next input code point from the stream:
	for (;;) {
		const cc = input.charCodeAt(pos);
		pos++;

		// ident code point
		// Append the code point to result.
		if (_isIdentCodePoint(cc, pos - 1)) {
			// Nothing
		}
		// the stream starts with a valid escape
		// Consume an escaped code point. Append the returned code point to result.
		else if (_ifTwoCodePointsAreValidEscape(input, pos)) {
			pos = _consumeAnEscapedCodePoint(input, pos);
		}
		// anything else
		// Reconsume the current input code point. Return result.
		else {
			return pos - 1;
		}
	}
};

/**
 * @param {number} cc char code
 * @returns {boolean} true, when cc is the non-printable code point, otherwise false
 */
const _isNonPrintableCodePoint = cc =>
	(cc >= 0x00 && cc <= 0x08) ||
	cc === 0x0b ||
	(cc >= 0x0e && cc <= 0x1f) ||
	cc === 0x7f;

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position
 */
const consumeTheRemnantsOfABadUrl = (input, pos) => {
	// This section describes how to consume the remnants of a bad url from a stream of code points,
	// "cleaning up" after the tokenizer realizes that it’s in the middle of a <bad-url-token> rather than a <url-token>.
	// It returns nothing; its sole use is to consume enough of the input stream to reach a recovery point where normal tokenizing can resume.

	// Repeatedly consume the next input code point from the stream:
	for (;;) {
		// EOF
		// Return.
		if (pos === input.length) {
			return pos;
		}

		const cc = input.charCodeAt(pos);
		pos++;

		// U+0029 RIGHT PARENTHESIS ())
		// Return.
		if (cc === CC_RIGHT_PARENTHESIS) {
			return pos;
		}
		// the input stream starts with a valid escape
		// Consume an escaped code point.
		// This allows an escaped right parenthesis ("\)") to be encountered without ending the <bad-url-token>.
		// This is otherwise identical to the "anything else" clause.
		else if (_ifTwoCodePointsAreValidEscape(input, pos)) {
			pos = _consumeAnEscapedCodePoint(input, pos);
		}
		// anything else
		// Do nothing.
		else {
			// Do nothing.
		}
	}
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @param {number} fnStart start
 * @param {CssTokenCallbacks} callbacks callbacks
 * @returns {pos} pos
 */
const consumeAUrlToken = (input, pos, fnStart, callbacks) => {
	// This section describes how to consume a url token from a stream of code points.
	// It returns either a <url-token> or a <bad-url-token>.

	// Note: This algorithm assumes that the initial "url(" has already been consumed.
	// This algorithm also assumes that it’s being called to consume an "unquoted" value, like url(foo).
	// A quoted value, like url("foo"), is parsed as a <function-token>.
	// Consume an ident-like token automatically handles this distinction; this algorithm shouldn’t be called directly otherwise.

	// Initially create a <url-token> with its value set to the empty string.

	// Consume as much whitespace as possible.
	while (_isWhiteSpace(input.charCodeAt(pos))) {
		pos++;
	}

	const contentStart = pos;

	// Repeatedly consume the next input code point from the stream:
	for (;;) {
		// EOF
		// This is a parse error. Return the <url-token>.
		if (pos === input.length) {
			if (callbacks.url !== undefined) {
				return callbacks.url(input, fnStart, pos, contentStart, pos - 1);
			}

			return pos;
		}

		const cc = input.charCodeAt(pos);
		pos++;

		// U+0029 RIGHT PARENTHESIS ())
		// Return the <url-token>.
		if (cc === CC_RIGHT_PARENTHESIS) {
			if (callbacks.url !== undefined) {
				return callbacks.url(input, fnStart, pos, contentStart, pos - 1);
			}

			return pos;
		}
		// whitespace
		// Consume as much whitespace as possible.
		// If the next input code point is U+0029 RIGHT PARENTHESIS ()) or EOF, consume it and return the <url-token>
		// (if EOF was encountered, this is a parse error); otherwise, consume the remnants of a bad url, create a <bad-url-token>, and return it.
		else if (_isWhiteSpace(cc)) {
			const end = pos - 1;

			while (_isWhiteSpace(input.charCodeAt(pos))) {
				pos++;
			}

			if (pos === input.length) {
				if (callbacks.url !== undefined) {
					return callbacks.url(input, fnStart, pos, contentStart, end);
				}

				return pos;
			}

			if (input.charCodeAt(pos) === CC_RIGHT_PARENTHESIS) {
				pos++;

				if (callbacks.url !== undefined) {
					return callbacks.url(input, fnStart, pos, contentStart, end);
				}

				return pos;
			}

			// Don't handle bad urls
			return consumeTheRemnantsOfABadUrl(input, pos);
		}
		// U+0022 QUOTATION MARK (")
		// U+0027 APOSTROPHE (')
		// U+0028 LEFT PARENTHESIS (()
		// non-printable code point
		// This is a parse error. Consume the remnants of a bad url, create a <bad-url-token>, and return it.
		else if (
			cc === CC_QUOTATION_MARK ||
			cc === CC_APOSTROPHE ||
			cc === CC_LEFT_PARENTHESIS ||
			_isNonPrintableCodePoint(cc)
		) {
			// Don't handle bad urls
			return consumeTheRemnantsOfABadUrl(input, pos);
		}
		// // U+005C REVERSE SOLIDUS (\)
		// // If the stream starts with a valid escape, consume an escaped code point and append the returned code point to the <url-token>’s value.
		// // Otherwise, this is a parse error. Consume the remnants of a bad url, create a <bad-url-token>, and return it.
		else if (cc === CC_REVERSE_SOLIDUS) {
			if (_ifTwoCodePointsAreValidEscape(input, pos)) {
				pos = _consumeAnEscapedCodePoint(input, pos);
			} else {
				// Don't handle bad urls
				return consumeTheRemnantsOfABadUrl(input, pos);
			}
		}
		// anything else
		// Append the current input code point to the <url-token>’s value.
		else {
			// Nothing
		}
	}
};

/** @type {CharHandler} */
const consumeAnIdentLikeToken = (input, pos, callbacks) => {
	const start = pos;
	// This section describes how to consume an ident-like token from a stream of code points.
	// It returns an <ident-token>, <function-token>, <url-token>, or <bad-url-token>.
	pos = _consumeAnIdentSequence(input, pos, callbacks);

	// If string’s value is an ASCII case-insensitive match for "url", and the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
	// While the next two input code points are whitespace, consume the next input code point.
	// If the next one or two input code points are U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('), or whitespace followed by U+0022 QUOTATION MARK (") or U+0027 APOSTROPHE ('), then create a <function-token> with its value set to string and return it.
	// Otherwise, consume a url token, and return it.
	if (
		input.slice(start, pos).toLowerCase() === "url" &&
		input.charCodeAt(pos) === CC_LEFT_PARENTHESIS
	) {
		pos++;
		const end = pos;

		while (
			_isWhiteSpace(input.charCodeAt(pos)) &&
			_isWhiteSpace(input.charCodeAt(pos + 1))
		) {
			pos++;
		}

		if (
			input.charCodeAt(pos) === CC_QUOTATION_MARK ||
			input.charCodeAt(pos) === CC_APOSTROPHE ||
			(_isWhiteSpace(input.charCodeAt(pos)) &&
				(input.charCodeAt(pos + 1) === CC_QUOTATION_MARK ||
					input.charCodeAt(pos + 1) === CC_APOSTROPHE))
		) {
			if (callbacks.function !== undefined) {
				return callbacks.function(input, start, end);
			}

			return pos;
		}

		return consumeAUrlToken(input, pos, start, callbacks);
	}

	// Otherwise, if the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
	// Create a <function-token> with its value set to string and return it.
	if (input.charCodeAt(pos) === CC_LEFT_PARENTHESIS) {
		pos++;

		if (callbacks.function !== undefined) {
			return callbacks.function(input, start, pos);
		}

		return pos;
	}

	// Otherwise, create an <ident-token> with its value set to string and return it.
	if (callbacks.identifier !== undefined) {
		return callbacks.identifier(input, start, pos);
	}

	return pos;
};

/** @type {CharHandler} */
const consumeLessThan = (input, pos, _callbacks) => {
	// If the next 3 input code points are U+0021 EXCLAMATION MARK U+002D HYPHEN-MINUS U+002D HYPHEN-MINUS (!--), consume them and return a <CDO-token>.
	if (input.slice(pos, pos + 3) === "!--") {
		return pos + 3;
	}

	// Otherwise, return a <delim-token> with its value set to the current input code point.
	return pos;
};

/** @type {CharHandler} */
const consumeCommercialAt = (input, pos, callbacks) => {
	const start = pos - 1;

	// If the next 3 input code points would start an ident sequence, consume an ident sequence, create an <at-keyword-token> with its value set to the returned value, and return it.
	if (
		_ifThreeCodePointsWouldStartAnIdentSequence(
			input,
			pos,
			input.charCodeAt(pos),
			input.charCodeAt(pos + 1),
			input.charCodeAt(pos + 2)
		)
	) {
		pos = _consumeAnIdentSequence(input, pos, callbacks);

		if (callbacks.atKeyword !== undefined) {
			pos = callbacks.atKeyword(input, start, pos);
		}

		return pos;
	}

	// Otherwise, return a <delim-token> with its value set to the current input code point.
	return pos;
};

/** @type {CharHandler} */
const consumeReverseSolidus = (input, pos, callbacks) => {
	// If the input stream starts with a valid escape, reconsume the current input code point, consume an ident-like token, and return it.
	if (_ifTwoCodePointsAreValidEscape(input, pos)) {
		pos--;
		return consumeAnIdentLikeToken(input, pos, callbacks);
	}

	// Otherwise, this is a parse error. Return a <delim-token> with its value set to the current input code point.
	return pos;
};

/** @type {CharHandler} */
const consumeAToken = (input, pos, callbacks) => {
	const cc = input.charCodeAt(pos - 1);

	// https://drafts.csswg.org/css-syntax/#consume-token
	switch (cc) {
		// whitespace
		case CC_LINE_FEED:
		case CC_CARRIAGE_RETURN:
		case CC_FORM_FEED:
		case CC_TAB:
		case CC_SPACE:
			return consumeSpace(input, pos, callbacks);
		// U+0022 QUOTATION MARK (")
		case CC_QUOTATION_MARK:
			return consumeAStringToken(input, pos, callbacks);
		// U+0023 NUMBER SIGN (#)
		case CC_NUMBER_SIGN:
			return consumeNumberSign(input, pos, callbacks);
		// U+0027 APOSTROPHE (')
		case CC_APOSTROPHE:
			return consumeAStringToken(input, pos, callbacks);
		// U+0028 LEFT PARENTHESIS (()
		case CC_LEFT_PARENTHESIS:
			return consumeLeftParenthesis(input, pos, callbacks);
		// U+0029 RIGHT PARENTHESIS ())
		case CC_RIGHT_PARENTHESIS:
			return consumeRightParenthesis(input, pos, callbacks);
		// U+002B PLUS SIGN (+)
		case CC_PLUS_SIGN:
			return consumePlusSign(input, pos, callbacks);
		// U+002C COMMA (,)
		case CC_COMMA:
			return consumeComma(input, pos, callbacks);
		// U+002D HYPHEN-MINUS (-)
		case CC_HYPHEN_MINUS:
			return consumeHyphenMinus(input, pos, callbacks);
		// U+002E FULL STOP (.)
		case CC_FULL_STOP:
			return consumeFullStop(input, pos, callbacks);
		// U+003A COLON (:)
		case CC_COLON:
			return consumeColon(input, pos, callbacks);
		// U+003B SEMICOLON (;)
		case CC_SEMICOLON:
			return consumeSemicolon(input, pos, callbacks);
		// U+003C LESS-THAN SIGN (<)
		case CC_LESS_THAN_SIGN:
			return consumeLessThan(input, pos, callbacks);
		// U+0040 COMMERCIAL AT (@)
		case CC_AT_SIGN:
			return consumeCommercialAt(input, pos, callbacks);
		// U+005B LEFT SQUARE BRACKET ([)
		case CC_LEFT_SQUARE:
			return consumeLeftSquareBracket(input, pos, callbacks);
		// U+005C REVERSE SOLIDUS (\)
		case CC_REVERSE_SOLIDUS:
			return consumeReverseSolidus(input, pos, callbacks);
		// U+005D RIGHT SQUARE BRACKET (])
		case CC_RIGHT_SQUARE:
			return consumeRightSquareBracket(input, pos, callbacks);
		// U+007B LEFT CURLY BRACKET ({)
		case CC_LEFT_CURLY:
			return consumeLeftCurlyBracket(input, pos, callbacks);
		// U+007D RIGHT CURLY BRACKET (})
		case CC_RIGHT_CURLY:
			return consumeRightCurlyBracket(input, pos, callbacks);
		default:
			// digit
			// Reconsume the current input code point, consume a numeric token, and return it.
			if (_isDigit(cc)) {
				pos--;
				return consumeANumericToken(input, pos, callbacks);
			} else if (cc === CC_LOWER_U || cc === CC_UPPER_U) {
				// If unicode ranges allowed is true and the input stream would start a unicode-range,
				// reconsume the current input code point, consume a unicode-range token, and return it.
				// Skip now
				// if (_ifThreeCodePointsWouldStartAUnicodeRange(input, pos)) {
				// 	pos--;
				// 	return consumeAUnicodeRangeToken(input, pos, callbacks);
				// }

				// Otherwise, reconsume the current input code point, consume an ident-like token, and return it.
				pos--;
				return consumeAnIdentLikeToken(input, pos, callbacks);
			}
			// ident-start code point
			// Reconsume the current input code point, consume an ident-like token, and return it.
			else if (isIdentStartCodePoint(cc)) {
				pos--;
				return consumeAnIdentLikeToken(input, pos, callbacks);
			}

			// EOF, but we don't have it

			// anything else
			// Return a <delim-token> with its value set to the current input code point.
			return consumeDelimToken(input, pos, callbacks);
	}
};

/**
 * @param {string} input input css
 * @param {number=} pos pos
 * @param {CssTokenCallbacks=} callbacks callbacks
 * @returns {number} pos
 */
module.exports = (input, pos = 0, callbacks = {}) => {
	// This section describes how to consume a token from a stream of code points. It will return a single token of any type.
	while (pos < input.length) {
		// Consume comments.
		pos = consumeComments(input, pos, callbacks);

		// Consume the next input code point.
		pos++;
		pos = consumeAToken(input, pos, callbacks);

		if (callbacks.needTerminate && callbacks.needTerminate()) {
			break;
		}
	}

	return pos;
};

module.exports.isIdentStartCodePoint = isIdentStartCodePoint;

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position after comments
 */
module.exports.eatComments = (input, pos) => {
	for (;;) {
		const originalPos = pos;
		pos = consumeComments(input, pos, {});
		if (originalPos === pos) {
			break;
		}
	}

	return pos;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position after whitespace
 */
module.exports.eatWhitespace = (input, pos) => {
	while (_isWhiteSpace(input.charCodeAt(pos))) {
		pos++;
	}

	return pos;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position after whitespace and comments
 */
module.exports.eatWhitespaceAndComments = (input, pos) => {
	for (;;) {
		const originalPos = pos;
		pos = consumeComments(input, pos, {});
		while (_isWhiteSpace(input.charCodeAt(pos))) {
			pos++;
		}
		if (originalPos === pos) {
			break;
		}
	}

	return pos;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position after whitespace and comments
 */
module.exports.eatComments = (input, pos) => {
	for (;;) {
		const originalPos = pos;
		pos = consumeComments(input, pos, {});
		if (originalPos === pos) {
			break;
		}
	}

	return pos;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {number} position after whitespace
 */
module.exports.eatWhiteLine = (input, pos) => {
	for (;;) {
		const cc = input.charCodeAt(pos);
		if (_isSpace(cc)) {
			pos++;
			continue;
		}
		if (_isNewline(cc)) pos++;
		pos = consumeExtraNewline(cc, input, pos);
		break;
	}

	return pos;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {[number, number] | undefined} positions of ident sequence
 */
module.exports.skipCommentsAndEatIdentSequence = (input, pos) => {
	pos = module.exports.eatComments(input, pos);

	const start = pos;

	if (
		_ifThreeCodePointsWouldStartAnIdentSequence(
			input,
			pos,
			input.charCodeAt(pos),
			input.charCodeAt(pos + 1),
			input.charCodeAt(pos + 2)
		)
	) {
		return [start, _consumeAnIdentSequence(input, pos, {})];
	}

	return undefined;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {[number, number] | undefined} positions of ident sequence
 */
module.exports.eatString = (input, pos) => {
	pos = module.exports.eatWhitespaceAndComments(input, pos);

	const start = pos;

	if (
		input.charCodeAt(pos) === CC_QUOTATION_MARK ||
		input.charCodeAt(pos) === CC_APOSTROPHE
	) {
		return [start, consumeAStringToken(input, pos + 1, {})];
	}

	return undefined;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @param {CssTokenCallbacks} cbs callbacks
 * @returns {[number, number][]} positions of ident sequence
 */
module.exports.eatImageSetStrings = (input, pos, cbs) => {
	/** @type {[number, number][]} */
	const result = [];

	let isFirst = true;
	let needStop = false;
	// We already in `func(` token
	let balanced = 1;

	/** @type {CssTokenCallbacks} */
	const callbacks = {
		...cbs,
		string: (_input, start, end) => {
			if (isFirst && balanced === 1) {
				result.push([start, end]);
				isFirst = false;
			}

			return end;
		},
		comma: (_input, _start, end) => {
			if (balanced === 1) {
				isFirst = true;
			}

			return end;
		},
		leftParenthesis: (input, start, end) => {
			balanced++;

			return end;
		},
		function: (_input, start, end) => {
			balanced++;

			return end;
		},
		rightParenthesis: (_input, _start, end) => {
			balanced--;

			if (balanced === 0) {
				needStop = true;
			}

			return end;
		}
	};

	while (pos < input.length) {
		// Consume comments.
		pos = consumeComments(input, pos, callbacks);

		// Consume the next input code point.
		pos++;
		pos = consumeAToken(input, pos, callbacks);

		if (needStop) {
			break;
		}
	}

	return result;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @param {CssTokenCallbacks} cbs callbacks
 * @returns {[[number, number, number, number] | undefined, [number, number] | undefined, [number, number] | undefined, [number, number] | undefined]} positions of top level tokens
 */
module.exports.eatImportTokens = (input, pos, cbs) => {
	const result =
		/** @type {[[number, number, number, number] | undefined, [number, number] | undefined, [number, number] | undefined, [number, number] | undefined]} */
		(new Array(4));

	/** @type {0 | 1 | 2 | undefined} */
	let scope;
	let needStop = false;
	let balanced = 0;

	/** @type {CssTokenCallbacks} */
	const callbacks = {
		...cbs,
		url: (_input, start, end, contentStart, contentEnd) => {
			if (
				result[0] === undefined &&
				balanced === 0 &&
				result[1] === undefined &&
				result[2] === undefined &&
				result[3] === undefined
			) {
				result[0] = [start, end, contentStart, contentEnd];
				scope = undefined;
			}

			return end;
		},
		string: (_input, start, end) => {
			if (
				balanced === 0 &&
				result[0] === undefined &&
				result[1] === undefined &&
				result[2] === undefined &&
				result[3] === undefined
			) {
				result[0] = [start, end, start + 1, end - 1];
				scope = undefined;
			} else if (result[0] !== undefined && scope === 0) {
				result[0][2] = start + 1;
				result[0][3] = end - 1;
			}

			return end;
		},
		leftParenthesis: (_input, _start, end) => {
			balanced++;

			return end;
		},
		rightParenthesis: (_input, _start, end) => {
			balanced--;

			if (balanced === 0 && scope !== undefined) {
				/** @type {[number, number]} */
				(result[scope])[1] = end;
				scope = undefined;
			}

			return end;
		},
		function: (input, start, end) => {
			if (balanced === 0) {
				const name = input
					.slice(start, end - 1)
					.replace(/\\/g, "")
					.toLowerCase();

				if (
					name === "url" &&
					result[0] === undefined &&
					result[1] === undefined &&
					result[2] === undefined &&
					result[3] === undefined
				) {
					scope = 0;
					result[scope] = [start, end + 1, end + 1, end + 1];
				} else if (
					name === "layer" &&
					result[1] === undefined &&
					result[2] === undefined
				) {
					scope = 1;
					result[scope] = [start, end];
				} else if (name === "supports" && result[2] === undefined) {
					scope = 2;
					result[scope] = [start, end];
				} else {
					scope = undefined;
				}
			}

			balanced++;

			return end;
		},
		identifier: (input, start, end) => {
			if (
				balanced === 0 &&
				result[1] === undefined &&
				result[2] === undefined
			) {
				const name = input.slice(start, end).replace(/\\/g, "").toLowerCase();

				if (name === "layer") {
					result[1] = [start, end];
					scope = undefined;
				}
			}

			return end;
		},
		semicolon: (_input, start, end) => {
			if (balanced === 0) {
				needStop = true;
				result[3] = [start, end];
			}

			return end;
		}
	};

	while (pos < input.length) {
		// Consume comments.
		pos = consumeComments(input, pos, callbacks);

		// Consume the next input code point.
		pos++;
		pos = consumeAToken(input, pos, callbacks);

		if (needStop) {
			break;
		}
	}

	return result;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {[number, number] | undefined} positions of ident sequence
 */
module.exports.eatIdentSequence = (input, pos) => {
	pos = module.exports.eatWhitespaceAndComments(input, pos);

	const start = pos;

	if (
		_ifThreeCodePointsWouldStartAnIdentSequence(
			input,
			pos,
			input.charCodeAt(pos),
			input.charCodeAt(pos + 1),
			input.charCodeAt(pos + 2)
		)
	) {
		return [start, _consumeAnIdentSequence(input, pos, {})];
	}

	return undefined;
};

/**
 * @param {string} input input
 * @param {number} pos position
 * @returns {[number, number, boolean] | undefined} positions of ident sequence or string
 */
module.exports.eatIdentSequenceOrString = (input, pos) => {
	pos = module.exports.eatWhitespaceAndComments(input, pos);

	const start = pos;

	if (
		input.charCodeAt(pos) === CC_QUOTATION_MARK ||
		input.charCodeAt(pos) === CC_APOSTROPHE
	) {
		return [start, consumeAStringToken(input, pos + 1, {}), false];
	} else if (
		_ifThreeCodePointsWouldStartAnIdentSequence(
			input,
			pos,
			input.charCodeAt(pos),
			input.charCodeAt(pos + 1),
			input.charCodeAt(pos + 2)
		)
	) {
		return [start, _consumeAnIdentSequence(input, pos, {}), true];
	}

	return undefined;
};

/**
 * @param {string} chars characters
 * @returns {(input: string, pos: number) => number} function to eat characters
 */
module.exports.eatUntil = chars => {
	const charCodes = Array.from({ length: chars.length }, (_, i) =>
		chars.charCodeAt(i)
	);
	const arr = Array.from(
		{ length: charCodes.reduce((a, b) => Math.max(a, b), 0) + 1 },
		() => false
	);
	for (const cc of charCodes) {
		arr[cc] = true;
	}

	return (input, pos) => {
		for (;;) {
			const cc = input.charCodeAt(pos);
			if (cc < arr.length && arr[cc]) {
				return pos;
			}
			pos++;
			if (pos === input.length) return pos;
		}
	};
};
