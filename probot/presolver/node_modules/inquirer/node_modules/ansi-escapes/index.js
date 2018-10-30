'use strict';
var ESC = '\u001b[';
var x = module.exports;

x.cursorTo = function (x, y) {
	if (arguments.length === 0) {
		return ESC + 'H';
	}

	if (arguments.length === 1) {
		return ESC + (x + 1) + 'G';
	}

	return ESC + (y + 1) + ';' + (x + 1) + 'H';
};

x.cursorMove = function (x, y) {
	var ret = '';

	if (x < 0) {
		ret += ESC + (-x) + 'D';
	} else if (x > 0) {
		ret += ESC + x + 'C';
	}

	if (y < 0) {
		ret += ESC + (-y) + 'A';
	} else if (y > 0) {
		ret += ESC + y + 'B';
	}

	return ret;
};

x.cursorUp = function (count) {
	return ESC + (typeof count === 'number' ? count : 1) + 'A';
};

x.cursorDown = function (count) {
	return ESC + (typeof count === 'number' ? count : 1) + 'B';
};

x.cursorForward = function (count) {
	return ESC + (typeof count === 'number' ? count : 1) + 'C';
};

x.cursorBackward = function (count) {
	return ESC + (typeof count === 'number' ? count : 1) + 'D';
};

x.cursorLeft = ESC + '1000D';
x.cursorSavePosition = ESC + 's';
x.cursorRestorePosition = ESC + 'u';
x.cursorGetPosition = ESC + '6n';
x.cursorNextLine = ESC + 'E';
x.cursorPrevLine = ESC + 'F';
x.cursorHide = ESC + '?25l';
x.cursorShow = ESC + '?25h';

x.eraseLines = function (count) {
	var clear = '';

	for (var i = 0; i < count; i++) {
		clear += x.cursorLeft + x.eraseEndLine + (i < count - 1 ? x.cursorUp() : '');
	}

	return clear;
};

x.eraseEndLine = ESC + 'K';
x.eraseStartLine = ESC + '1K';
x.eraseLine = ESC + '2K';
x.eraseDown = ESC + 'J';
x.eraseUp = ESC + '1J';
x.eraseScreen = ESC + '2J';
x.scrollUp = ESC + 'S';
x.scrollDown = ESC + 'T';

x.clearScreen = '\u001bc';
x.beep = '\u0007';

x.image = function (buf, opts) {
	opts = opts || {};

	var ret = '\u001b]1337;File=inline=1';

	if (opts.width) {
		ret += ';width=' + opts.width;
	}

	if (opts.height) {
		ret += ';height=' + opts.height;
	}

	if (opts.preserveAspectRatio === false) {
		ret += ';preserveAspectRatio=0';
	}

	return ret + ':' + buf.toString('base64') + '\u0007';
};

x.iTerm = {};

x.iTerm.setCwd = function (cwd) {
	return '\u001b]50;CurrentDir=' + (cwd || process.cwd()) + '\u0007';
};
