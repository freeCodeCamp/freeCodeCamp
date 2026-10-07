import process from 'node:process';
import os from 'node:os';
import {isBrowser} from 'environment';

const ESC = '\u001B[';
const OSC = '\u001B]';
const BEL = '\u0007';
const SEP = ';';

const isTerminalApp = !isBrowser && process.env.TERM_PROGRAM === 'Apple_Terminal';
const isWindows = !isBrowser && process.platform === 'win32';
const isTmux = !isBrowser && (process.env.TERM?.startsWith('screen') || process.env.TERM?.startsWith('tmux') || process.env.TMUX !== undefined);

const cwdFunction = isBrowser ? () => {
	throw new Error('`process.cwd()` only works in Node.js, not the browser.');
} : process.cwd;

const wrapOsc = sequence => {
	if (isTmux) {
		// Tmux requires OSC sequences to be wrapped with DCS tmux; <sequence> ST
		// and all ESCs in <sequence> to be replaced with ESC ESC.
		// It only accepts ESC backslash for ST.
		return '\u001BPtmux;' + sequence.replaceAll('\u001B', '\u001B\u001B') + '\u001B\\';
	}

	return sequence;
};

export const cursorTo = (x, y) => {
	if (typeof x !== 'number') {
		throw new TypeError('The `x` argument is required');
	}

	if (typeof y !== 'number') {
		return ESC + (x + 1) + 'G';
	}

	return ESC + (y + 1) + SEP + (x + 1) + 'H';
};

export const cursorMove = (x, y) => {
	if (typeof x !== 'number') {
		throw new TypeError('The `x` argument is required');
	}

	let returnValue = '';

	if (x < 0) {
		returnValue += ESC + (-x) + 'D';
	} else if (x > 0) {
		returnValue += ESC + x + 'C';
	}

	if (y < 0) {
		returnValue += ESC + (-y) + 'A';
	} else if (y > 0) {
		returnValue += ESC + y + 'B';
	}

	return returnValue;
};

export const cursorUp = (count = 1) => ESC + count + 'A';
export const cursorDown = (count = 1) => ESC + count + 'B';
export const cursorForward = (count = 1) => ESC + count + 'C';
export const cursorBackward = (count = 1) => ESC + count + 'D';

export const cursorLeft = ESC + 'G';
export const cursorSavePosition = isTerminalApp ? '\u001B7' : ESC + 's';
export const cursorRestorePosition = isTerminalApp ? '\u001B8' : ESC + 'u';
export const cursorGetPosition = ESC + '6n';
export const cursorNextLine = ESC + 'E';
export const cursorPrevLine = ESC + 'F';
export const cursorHide = ESC + '?25l';
export const cursorShow = ESC + '?25h';

export const eraseLines = count => {
	let clear = '';

	for (let i = 0; i < count; i++) {
		clear += eraseLine + (i < count - 1 ? cursorUp() : '');
	}

	if (count) {
		clear += cursorLeft;
	}

	return clear;
};

export const eraseEndLine = ESC + 'K';
export const eraseStartLine = ESC + '1K';
export const eraseLine = ESC + '2K';
export const eraseDown = ESC + 'J';
export const eraseUp = ESC + '1J';
export const eraseScreen = ESC + '2J';
export const scrollUp = ESC + 'S';
export const scrollDown = ESC + 'T';

export const clearScreen = '\u001Bc';

export const clearViewport = `${eraseScreen}${ESC}H`;

const isOldWindows = () => {
	if (isBrowser || !isWindows) {
		return false;
	}

	const parts = os.release().split('.');
	const major = Number(parts[0]);
	const build = Number(parts[2] ?? 0);

	if (major < 10) {
		return true;
	}

	if (major === 10 && build < 10_586) {
		return true;
	}

	return false;
};

export const clearTerminal = isOldWindows()
	? `${eraseScreen}${ESC}0f`
	// 1. Erases the screen (Only done in case `2` is not supported)
	// 2. Erases the whole screen including scrollback buffer
	// 3. Moves cursor to the top-left position
	// More info: https://www.real-world-systems.com/docs/ANSIcode.html
	: `${eraseScreen}${ESC}3J${ESC}H`;

export const enterAlternativeScreen = ESC + '?1049h';
export const exitAlternativeScreen = ESC + '?1049l';

export const beginSynchronizedOutput = ESC + '?2026h';
export const endSynchronizedOutput = ESC + '?2026l';
export const synchronizedOutput = text => beginSynchronizedOutput + text + endSynchronizedOutput;

export const beep = BEL;

export const link = (text, url) => {
	const openLink = wrapOsc(`${OSC}8${SEP}${SEP}${url}${BEL}`);
	const closeLink = wrapOsc(`${OSC}8${SEP}${SEP}${BEL}`);
	return openLink + text + closeLink;
};

export const image = (data, options = {}) => {
	let returnValue = `${OSC}1337;File=inline=1`;

	if (options.width) {
		returnValue += `;width=${options.width}`;
	}

	if (options.height) {
		returnValue += `;height=${options.height}`;
	}

	if (options.preserveAspectRatio === false) {
		returnValue += ';preserveAspectRatio=0';
	}

	const imageBuffer = Buffer.from(data);

	// `size` is optional in the spec, but xterm.js requires it.
	return wrapOsc(returnValue + `;size=${imageBuffer.byteLength}` + ':' + imageBuffer.toString('base64') + BEL);
};

export const iTerm = {
	setCwd: (cwd = cwdFunction()) => wrapOsc(`${OSC}50;CurrentDir=${cwd}${BEL}`),

	annotation(message, options = {}) {
		let returnValue = `${OSC}1337;`;

		const hasX = options.x !== undefined;
		const hasY = options.y !== undefined;
		if ((hasX || hasY) && !(hasX && hasY && options.length !== undefined)) {
			throw new Error('`x`, `y` and `length` must be defined when `x` or `y` is defined');
		}

		message = message.replaceAll('|', '');

		returnValue += options.isHidden ? 'AddHiddenAnnotation=' : 'AddAnnotation=';

		if (options.length > 0) {
			returnValue += (
				hasX
					? [message, options.length, options.x, options.y]
					: [options.length, message]
			).join('|');
		} else {
			returnValue += message;
		}

		return wrapOsc(returnValue + BEL);
	},
};

export const ConEmu = {
	setCwd: (cwd = cwdFunction()) => wrapOsc(`${OSC}9;9;${cwd}${BEL}`),
};

export const setCwd = (cwd = cwdFunction()) => iTerm.setCwd(cwd) + ConEmu.setCwd(cwd);
