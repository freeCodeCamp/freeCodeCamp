'use strict';

module.exports = (text, separator = '_') => {
	if (!(typeof text === 'string' && typeof separator === 'string')) {
		throw new TypeError('The `text` and `separator` arguments should be of type `string`');
	}

	return text
		.replace(/([\p{Lowercase_Letter}\d])(\p{Uppercase_Letter})/gu, `$1${separator}$2`)
		.replace(/(\p{Uppercase_Letter}+)(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu, `$1${separator}$2`)
		.toLowerCase();
};
