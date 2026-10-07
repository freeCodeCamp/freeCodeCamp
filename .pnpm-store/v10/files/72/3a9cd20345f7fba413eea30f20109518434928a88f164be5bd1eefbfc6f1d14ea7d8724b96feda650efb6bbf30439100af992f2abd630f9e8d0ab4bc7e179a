const tty = require('node:tty'); // eslint-disable-line unicorn/prefer-module

// eslint-disable-next-line no-warning-comments
// TODO: Use a better method when it's added to Node.js (https://github.com/nodejs/node/pull/40240)
// Lots of optionals here to support Deno.
const hasColors = tty?.WriteStream?.prototype?.hasColors?.() ?? false;

const format = (open, close) => {
	if (!hasColors) {
		return input => input;
	}

	const openCode = `\u001B[${open}m`;
	const closeCode = `\u001B[${close}m`;

	return input => {
		const string = input + ''; // eslint-disable-line no-implicit-coercion -- This is faster.
		let index = string.indexOf(closeCode);

		if (index === -1) {
			// Note: Intentionally not using string interpolation for performance reasons.
			return openCode + string + closeCode;
		}

		// Handle nested colors.

		// We could have done this, but it's too slow (as of Node.js 22).
		// return openCode + string.replaceAll(closeCode, openCode) + closeCode;

		let result = openCode;
		let lastIndex = 0;

		// SGR 22 resets both bold (1) and dim (2). When we encounter a nested
		// close for styles that use 22, we need to re-open the outer style.
		const reopenOnNestedClose = close === 22;
		const replaceCode = (reopenOnNestedClose ? closeCode : '') + openCode;

		while (index !== -1) {
			result += string.slice(lastIndex, index) + replaceCode;
			lastIndex = index + closeCode.length;
			index = string.indexOf(closeCode, lastIndex);
		}

		result += string.slice(lastIndex) + closeCode;

		return result;
	};
};

const colors = {};

colors.reset = format(0, 0);
colors.bold = format(1, 22);
colors.dim = format(2, 22);
colors.italic = format(3, 23);
colors.underline = format(4, 24);
colors.overline = format(53, 55);
colors.inverse = format(7, 27);
colors.hidden = format(8, 28);
colors.strikethrough = format(9, 29);

colors.black = format(30, 39);
colors.red = format(31, 39);
colors.green = format(32, 39);
colors.yellow = format(33, 39);
colors.blue = format(34, 39);
colors.magenta = format(35, 39);
colors.cyan = format(36, 39);
colors.white = format(37, 39);
colors.gray = format(90, 39);

colors.bgBlack = format(40, 49);
colors.bgRed = format(41, 49);
colors.bgGreen = format(42, 49);
colors.bgYellow = format(43, 49);
colors.bgBlue = format(44, 49);
colors.bgMagenta = format(45, 49);
colors.bgCyan = format(46, 49);
colors.bgWhite = format(47, 49);
colors.bgGray = format(100, 49);

colors.redBright = format(91, 39);
colors.greenBright = format(92, 39);
colors.yellowBright = format(93, 39);
colors.blueBright = format(94, 39);
colors.magentaBright = format(95, 39);
colors.cyanBright = format(96, 39);
colors.whiteBright = format(97, 39);

colors.bgRedBright = format(101, 49);
colors.bgGreenBright = format(102, 49);
colors.bgYellowBright = format(103, 49);
colors.bgBlueBright = format(104, 49);
colors.bgMagentaBright = format(105, 49);
colors.bgCyanBright = format(106, 49);
colors.bgWhiteBright = format(107, 49);

module.exports = colors; // eslint-disable-line unicorn/prefer-module
