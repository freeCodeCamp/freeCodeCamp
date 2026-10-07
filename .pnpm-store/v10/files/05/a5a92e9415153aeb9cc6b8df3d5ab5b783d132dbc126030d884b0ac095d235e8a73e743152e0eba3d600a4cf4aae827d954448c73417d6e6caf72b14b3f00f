import supportsHyperlinks from 'supports-hyperlinks';

// ANSI escapes
const OSC = '\u001B]';
const BEL = '\u0007';
const SEP = ';';

/**
 * @see https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda
 *
 * @param {string} text
 * @param {string} url
 * @returns {string}
 */
export default function terminalLink(text, url) {
	if (supportsHyperlinks.stdout) {
		return [OSC, '8', SEP, SEP, url, BEL, text, OSC, '8', SEP, SEP, BEL].join('');
	}

	return text;
}
