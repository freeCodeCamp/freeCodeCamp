'use strict';
const isFullwidthCodePoint = require('is-fullwidth-code-point');
const astralRegex = require('astral-regex');
const ansiStyles = require('ansi-styles');

const ESCAPES = [
	'\u001B',
	'\u009B'
];

const wrapAnsi = code => `${ESCAPES[0]}[${code}m`;

const checkAnsi = (ansiCodes, isEscapes, endAnsiCode) => {
	let output = [];
	ansiCodes = [...ansiCodes];

	for (let ansiCode of ansiCodes) {
		const ansiCodeOrigin = ansiCode;
		if (ansiCode.includes(';')) {
			ansiCode = ansiCode.split(';')[0][0] + '0';
		}

		const item = ansiStyles.codes.get(Number.parseInt(ansiCode, 10));
		if (item) {
			const indexEscape = ansiCodes.indexOf(item.toString());
			if (indexEscape === -1) {
				output.push(wrapAnsi(isEscapes ? item : ansiCodeOrigin));
			} else {
				ansiCodes.splice(indexEscape, 1);
			}
		} else if (isEscapes) {
			output.push(wrapAnsi(0));
			break;
		} else {
			output.push(wrapAnsi(ansiCodeOrigin));
		}
	}

	if (isEscapes) {
		output = output.filter((element, index) => output.indexOf(element) === index);

		if (endAnsiCode !== undefined) {
			const fistEscapeCode = wrapAnsi(ansiStyles.codes.get(Number.parseInt(endAnsiCode, 10)));
			output = output.reduce((current, next) => next === fistEscapeCode ? [next, ...current] : [...current, next], []);
		}
	}

	return output.join('');
};

module.exports = (string, begin, end) => {
	const characters = [...string];
	const ansiCodes = [];

	let stringEnd = typeof end === 'number' ? end : characters.length;
	let isInsideEscape = false;
	let ansiCode;
	let visible = 0;
	let output = '';

	for (const [index, character] of characters.entries()) {
		let leftEscape = false;

		if (ESCAPES.includes(character)) {
			const code = /\d[^m]*/.exec(string.slice(index, index + 18));
			ansiCode = code && code.length > 0 ? code[0] : undefined;

			if (visible < stringEnd) {
				isInsideEscape = true;

				if (ansiCode !== undefined) {
					ansiCodes.push(ansiCode);
				}
			}
		} else if (isInsideEscape && character === 'm') {
			isInsideEscape = false;
			leftEscape = true;
		}

		if (!isInsideEscape && !leftEscape) {
			visible++;
		}

		if (!astralRegex({exact: true}).test(character) && isFullwidthCodePoint(character.codePointAt())) {
			visible++;

			if (typeof end !== 'number') {
				stringEnd++;
			}
		}

		if (visible > begin && visible <= stringEnd) {
			output += character;
		} else if (visible === begin && !isInsideEscape && ansiCode !== undefined) {
			output = checkAnsi(ansiCodes);
		} else if (visible >= stringEnd) {
			output += checkAnsi(ansiCodes, true, ansiCode);
			break;
		}
	}

	return output;
};
