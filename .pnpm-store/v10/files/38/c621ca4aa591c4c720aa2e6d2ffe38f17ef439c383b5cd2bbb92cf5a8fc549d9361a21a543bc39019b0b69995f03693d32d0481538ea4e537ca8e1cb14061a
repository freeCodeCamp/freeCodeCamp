import { EOL } from 'node:os';

import { distance } from 'fastest-levenshtein';
import picocolors from 'picocolors';

const { cyan, red } = picocolors;

/**
 * @param {{ [key: string]: { alias?: string } }} allowedOptions
 * @returns {string[]}
 */
const buildAllowedOptions = (allowedOptions) => {
	const options = Object.keys(allowedOptions);

	for (const { alias } of Object.values(allowedOptions)) {
		if (alias) {
			options.push(alias);
		}
	}

	options.sort();

	return options;
};

/**
 * @param {string[]} all
 * @param {string} invalid
 * @returns {null|string}
 */
const suggest = (all, invalid) => {
	const maxThreshold = 10;

	for (let threshold = 1; threshold <= maxThreshold; threshold++) {
		const suggestion = all.find((option) => distance(option, invalid) <= threshold);

		if (suggestion) {
			return suggestion;
		}
	}

	return null;
};

/**
 * Converts a string to kebab case.
 * For example, `kebabCase('oneTwoThree') === 'one-two-three'`.
 * @param {string} opt
 * @returns {string}
 */
const kebabCase = (opt) => {
	const matches = opt.match(/[A-Z]?[a-z]+|[A-Z]|[0-9]+/g);

	if (matches) {
		return matches.map((s) => s.toLowerCase()).join('-');
	}

	return '';
};

/**
 * @param {string} opt
 * @returns {string}
 */
const cliOption = (opt) => {
	if (opt.length === 1) {
		return `"-${opt}"`;
	}

	return `"--${kebabCase(opt)}"`;
};

/**
 * @param {string} invalid
 * @param {string|null} suggestion
 * @returns {string}
 */
const buildMessageLine = (invalid, suggestion) => {
	let line = `Invalid option ${red(cliOption(invalid))}.`;

	if (suggestion) {
		line += ` Did you mean ${cyan(cliOption(suggestion))}?`;
	}

	return line + EOL;
};

/**
 * @param {{ [key: string]: any }} allowedOptions
 * @param {{ [key: string]: any }} inputOptions
 * @returns {string}
 */
export default function checkInvalidCLIOptions(allowedOptions, inputOptions) {
	const allOptions = buildAllowedOptions(allowedOptions);

	return Object.keys(inputOptions)
		.filter((opt) => !allOptions.includes(opt))
		.map((opt) => kebabCase(opt))
		.reduce((msg, invalid) => {
			// NOTE: No suggestion for shortcut options because it's too difficult
			const suggestion = invalid.length >= 2 ? suggest(allOptions, invalid) : null;

			return msg + buildMessageLine(invalid, suggestion);
		}, '');
}
