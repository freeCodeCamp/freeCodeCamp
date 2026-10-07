'use strict';

const arrify = value => {
	if (value === null || value === undefined) {
		return [];
	}

	if (Array.isArray(value)) {
		return value;
	}

	if (typeof value === 'string') {
		return [value];
	}

	if (typeof value[Symbol.iterator] === 'function') {
		return [...value];
	}

	return [value];
};

module.exports = arrify;
