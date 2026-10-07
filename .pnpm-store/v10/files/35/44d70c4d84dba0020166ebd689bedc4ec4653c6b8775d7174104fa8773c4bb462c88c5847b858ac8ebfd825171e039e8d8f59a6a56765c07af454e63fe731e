'use strict';

module.exports = (string, count = 1, options) => {
	options = {
		indent: ' ',
		includeEmptyLines: false,
		...options
	};

	if (typeof string !== 'string') {
		throw new TypeError(
			`Expected \`input\` to be a \`string\`, got \`${typeof string}\``
		);
	}

	if (typeof count !== 'number') {
		throw new TypeError(
			`Expected \`count\` to be a \`number\`, got \`${typeof count}\``
		);
	}

	if (typeof options.indent !== 'string') {
		throw new TypeError(
			`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
		);
	}

	if (count === 0) {
		return string;
	}

	const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;

	return string.replace(regex, options.indent.repeat(count));
};
