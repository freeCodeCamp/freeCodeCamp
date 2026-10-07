let p = process || {}, argv = p.argv || [], env = p.env || {}
let isColorSupported =
	!(!!env.NO_COLOR || argv.includes("--no-color")) &&
	(!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || ((p.stdout || {}).isTTY && env.TERM !== "dumb") || !!env.CI)

let formatter = (open, close, replace = open) =>
	input => {
		let string = "" + input, index = string.indexOf(close, open.length)
		return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close
	}

let replaceClose = (string, close, replace, index) => {
	let result = "", cursor = 0
	do {
		result += string.substring(cursor, index) + replace
		cursor = index + close.length
		index = string.indexOf(close, cursor)
	} while (~index)
	return result + string.substring(cursor)
}

let createColors = (enabled = isColorSupported) => {
	let f = enabled ? formatter : () => String
	return {
		isColorSupported: enabled,
		reset: f("\x1b[0m", "\x1b[0m"),
		bold: f("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m"),
		dim: f("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m"),
		italic: f("\x1b[3m", "\x1b[23m"),
		underline: f("\x1b[4m", "\x1b[24m"),
		inverse: f("\x1b[7m", "\x1b[27m"),
		hidden: f("\x1b[8m", "\x1b[28m"),
		strikethrough: f("\x1b[9m", "\x1b[29m"),

		black: f("\x1b[30m", "\x1b[39m"),
		red: f("\x1b[31m", "\x1b[39m"),
		green: f("\x1b[32m", "\x1b[39m"),
		yellow: f("\x1b[33m", "\x1b[39m"),
		blue: f("\x1b[34m", "\x1b[39m"),
		magenta: f("\x1b[35m", "\x1b[39m"),
		cyan: f("\x1b[36m", "\x1b[39m"),
		white: f("\x1b[37m", "\x1b[39m"),
		gray: f("\x1b[90m", "\x1b[39m"),

		bgBlack: f("\x1b[40m", "\x1b[49m"),
		bgRed: f("\x1b[41m", "\x1b[49m"),
		bgGreen: f("\x1b[42m", "\x1b[49m"),
		bgYellow: f("\x1b[43m", "\x1b[49m"),
		bgBlue: f("\x1b[44m", "\x1b[49m"),
		bgMagenta: f("\x1b[45m", "\x1b[49m"),
		bgCyan: f("\x1b[46m", "\x1b[49m"),
		bgWhite: f("\x1b[47m", "\x1b[49m"),

		blackBright: f("\x1b[90m", "\x1b[39m"),
		redBright: f("\x1b[91m", "\x1b[39m"),
		greenBright: f("\x1b[92m", "\x1b[39m"),
		yellowBright: f("\x1b[93m", "\x1b[39m"),
		blueBright: f("\x1b[94m", "\x1b[39m"),
		magentaBright: f("\x1b[95m", "\x1b[39m"),
		cyanBright: f("\x1b[96m", "\x1b[39m"),
		whiteBright: f("\x1b[97m", "\x1b[39m"),

		bgBlackBright: f("\x1b[100m", "\x1b[49m"),
		bgRedBright: f("\x1b[101m", "\x1b[49m"),
		bgGreenBright: f("\x1b[102m", "\x1b[49m"),
		bgYellowBright: f("\x1b[103m", "\x1b[49m"),
		bgBlueBright: f("\x1b[104m", "\x1b[49m"),
		bgMagentaBright: f("\x1b[105m", "\x1b[49m"),
		bgCyanBright: f("\x1b[106m", "\x1b[49m"),
		bgWhiteBright: f("\x1b[107m", "\x1b[49m"),
	}
}

module.exports = createColors()
module.exports.createColors = createColors
