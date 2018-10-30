'use strict';
var stringWidth = require('string-width');
var stripAnsi = require('strip-ansi');

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

// calculate the length of words split on ' ', ignoring
// the extra characters added by ansi escape codes.
function wordLengths(str) {
	return str.split(' ').map(function (s) {
		return stringWidth(s);
	});
}

// wrap a long word across multiple rows.
// ansi escape codes do not count towards length.
function wrapWord(rows, word, cols) {
	var insideEscape = false;
	var visible = stripAnsi(rows[rows.length - 1]).length;

	for (var i = 0; i < word.length; i++) {
		var x = word[i];

		rows[rows.length - 1] += x;

		if (ESCAPES.indexOf(x) !== -1) {
			insideEscape = true;
		} else if (insideEscape && x === 'm') {
			insideEscape = false;
			continue;
		}

		if (insideEscape) {
			continue;
		}

		visible++;

		if (visible >= cols && i < word.length - 1) {
			rows.push('');
			visible = 0;
		}
	}

	// it's possible that the last row we copy over is only
	// ansi escape characters, handle this edge-case.
	if (!visible && rows[rows.length - 1].length > 0 && rows.length > 1) {
		rows[rows.length - 2] += rows.pop();
	}
}

// the wrap-ansi module can be invoked
// in either 'hard' or 'soft' wrap mode.
//
// 'hard' will never allow a string to take up more
// than cols characters.
//
// 'soft' allows long words to expand past the column length.
function exec(str, cols, opts) {
	var options = opts || {};

	var pre = '';
	var ret = '';
	var escapeCode;

	var lengths = wordLengths(str);
	var words = str.split(' ');
	var rows = [''];

	for (var i = 0, word; (word = words[i]) !== undefined; i++) {
		var rowLength = stringWidth(rows[rows.length - 1]);

		if (rowLength) {
			rows[rows.length - 1] += ' ';
			rowLength++;
		}

		// in 'hard' wrap mode, the length of a line is
		// never allowed to extend past 'cols'.
		if (lengths[i] > cols && options.hard) {
			if (rowLength) {
				rows.push('');
			}
			wrapWord(rows, word, cols);
			continue;
		}

		if (rowLength + lengths[i] > cols && rowLength > 0) {
			if (options.wordWrap === false && rowLength < cols) {
				wrapWord(rows, word, cols);
				continue;
			}

			rows.push('');
		}

		rows[rows.length - 1] += word;
	}

	pre = rows.map(function (r) {
		return r.trim();
	}).join('\n');

	for (var j = 0; j < pre.length; j++) {
		var y = pre[j];

		ret += y;

		if (ESCAPES.indexOf(y) !== -1) {
			var code = parseFloat(/[0-9][^m]*/.exec(pre.slice(j, j + 4)));
			escapeCode = code === END_CODE ? null : code;
		}

		if (escapeCode && ESCAPE_CODES[escapeCode]) {
			if (pre[j + 1] === '\n') {
				ret += wrapAnsi(ESCAPE_CODES[escapeCode]);
			} else if (y === '\n') {
				ret += wrapAnsi(escapeCode);
			}
		}
	}

	return ret;
}

// for each line break, invoke the method separately.
module.exports = function (str, cols, opts) {
	return String(str).split('\n').map(function (substr) {
		return exec(substr, cols, opts);
	}).join('\n');
};
