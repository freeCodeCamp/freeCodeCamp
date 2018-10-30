'use strict';

var ESCAPES = [
	'\u001b',
	'\u009b'
];

var END_CODE = 39;

var ESCAPE_CODES = {
	0: 0,
	1: 22,
	2: 22,
	3: 23,
	4: 24,
	7: 27,
	8: 28,
	9: 29,
	30: 39,
	31: 39,
	32: 39,
	33: 39,
	34: 39,
	35: 39,
	36: 39,
	37: 39,
	90: 39,
	40: 49,
	41: 49,
	42: 49,
	43: 49,
	44: 49,
	45: 49,
	46: 49,
	47: 49
};

function wrapAnsi(code) {
	return ESCAPES[0] + '[' + code + 'm';
}

module.exports = function (str, begin, end) {
	end = end || str.length;
	var insideEscape = false;
	var escapeCode;
	var visible = 0;
	var output = '';

	for (var i = 0; i < str.length; i++) {
		var leftEscape = false;
		var x = str[i];

		if (ESCAPES.indexOf(x) !== -1) {
			insideEscape = true;
			var code = /[0-9][^m]*/.exec(str.slice(i, i + 4));
			escapeCode = code === END_CODE ? null : code;
		} else if (insideEscape && x === 'm') {
			insideEscape = false;
			leftEscape = true;
		}

		if (!insideEscape && !leftEscape) {
			++visible;
		}

		if (visible > begin && visible <= end) {
			output += x;
		} else if (visible === begin && escapeCode !== undefined && escapeCode !== END_CODE) {
			output += wrapAnsi(escapeCode);
		} else if (visible >= end) {
			if (escapeCode !== undefined) {
				output += wrapAnsi(ESCAPE_CODES[escapeCode] || END_CODE);
			}
			break;
		}
	}

	return output;
};

