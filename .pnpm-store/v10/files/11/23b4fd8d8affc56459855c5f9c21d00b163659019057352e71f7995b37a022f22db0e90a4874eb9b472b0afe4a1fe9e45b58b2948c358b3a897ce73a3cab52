/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @param {Array<number>} array array of numbers
 * @returns {number} sum of all numbers in array
 */
const arraySum = array => {
	let sum = 0;
	for (const item of array) sum += item;
	return sum;
};

/**
 * @param {EXPECTED_ANY[]} args items to be truncated
 * @param {number} maxLength maximum length of args including spaces between
 * @returns {string[]} truncated args
 */
const truncateArgs = (args, maxLength) => {
	const lengths = args.map(a => `${a}`.length);
	const availableLength = maxLength - lengths.length + 1;

	if (availableLength > 0 && args.length === 1) {
		if (availableLength >= args[0].length) {
			return args;
		} else if (availableLength > 3) {
			return [`...${args[0].slice(-availableLength + 3)}`];
		}
		return [args[0].slice(-availableLength)];
	}

	// Check if there is space for at least 4 chars per arg
	if (availableLength < arraySum(lengths.map(i => Math.min(i, 6)))) {
		// remove args
		if (args.length > 1) return truncateArgs(args.slice(0, -1), maxLength);
		return [];
	}

	let currentLength = arraySum(lengths);

	// Check if all fits into maxLength
	if (currentLength <= availableLength) return args;

	// Try to remove chars from the longest items until it fits
	while (currentLength > availableLength) {
		const maxLength = Math.max(...lengths);
		const shorterItems = lengths.filter(l => l !== maxLength);
		const nextToMaxLength =
			shorterItems.length > 0 ? Math.max(...shorterItems) : 0;
		const maxReduce = maxLength - nextToMaxLength;
		let maxItems = lengths.length - shorterItems.length;
		let overrun = currentLength - availableLength;
		for (let i = 0; i < lengths.length; i++) {
			if (lengths[i] === maxLength) {
				const reduce = Math.min(Math.floor(overrun / maxItems), maxReduce);
				lengths[i] -= reduce;
				currentLength -= reduce;
				overrun -= reduce;
				maxItems--;
			}
		}
	}

	// Return args reduced to length in lengths
	return args.map((a, i) => {
		const str = `${a}`;
		const length = lengths[i];
		if (str.length === length) {
			return str;
		} else if (length > 5) {
			return `...${str.slice(-length + 3)}`;
		} else if (length > 0) {
			return str.slice(-length);
		}
		return "";
	});
};

module.exports = truncateArgs;
