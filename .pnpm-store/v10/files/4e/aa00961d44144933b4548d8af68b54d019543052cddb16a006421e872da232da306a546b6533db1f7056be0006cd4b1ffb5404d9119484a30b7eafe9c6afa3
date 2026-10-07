/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const loaderFlag = "LOADER_EXECUTION";

const webpackOptionsFlag = "WEBPACK_OPTIONS";

/**
 * Returns stack trace without the specified flag included.
 * @param {string} stack stack trace
 * @param {string} flag flag to cut off
 * @returns {string} stack trace without the specified flag included
 */
const cutOffByFlag = (stack, flag) => {
	const errorStack = stack.split("\n");
	for (let i = 0; i < errorStack.length; i++) {
		if (errorStack[i].includes(flag)) {
			errorStack.length = i;
		}
	}
	return errorStack.join("\n");
};

/**
 * Cut off loader execution.
 * @param {string} stack stack trace
 * @returns {string} stack trace without the loader execution flag included
 */
const cutOffLoaderExecution = (stack) => cutOffByFlag(stack, loaderFlag);

/**
 * Cut off webpack options.
 * @param {string} stack stack trace
 * @returns {string} stack trace without the webpack options flag included
 */
const cutOffWebpackOptions = (stack) => cutOffByFlag(stack, webpackOptionsFlag);

/**
 * Cut off multiline message.
 * @param {string} stack stack trace
 * @param {string} message error message
 * @returns {string} stack trace without the message included
 */
const cutOffMultilineMessage = (stack, message) => {
	const stackSplitByLines = stack.split("\n");
	const messageSplitByLines = message.split("\n");

	/** @type {string[]} */
	const result = [];

	for (const [idx, line] of stackSplitByLines.entries()) {
		if (!line.includes(messageSplitByLines[idx])) result.push(line);
	}

	return result.join("\n");
};

/**
 * Returns stack trace without the message included.
 * @param {string} stack stack trace
 * @param {string} message error message
 * @returns {string} stack trace without the message included
 */
const cutOffMessage = (stack, message) => {
	const nextLine = stack.indexOf("\n");
	if (nextLine === -1) {
		return stack === message ? "" : stack;
	}
	const firstLine = stack.slice(0, nextLine);
	return firstLine === message ? stack.slice(nextLine + 1) : stack;
};

/**
 * Returns stack trace without the loader execution flag and message included.
 * @param {string} stack stack trace
 * @param {string} message error message
 * @returns {string} stack trace without the loader execution flag and message included
 */
const cleanUp = (stack, message) => {
	stack = cutOffLoaderExecution(stack);
	stack = cutOffMessage(stack, message);
	return stack;
};

/**
 * Clean up webpack options.
 * @param {string} stack stack trace
 * @param {string} message error message
 * @returns {string} stack trace without the webpack options flag and message included
 */
const cleanUpWebpackOptions = (stack, message) => {
	stack = cutOffWebpackOptions(stack);
	stack = cutOffMultilineMessage(stack, message);
	return stack;
};

module.exports.cleanUp = cleanUp;
module.exports.cleanUpWebpackOptions = cleanUpWebpackOptions;
module.exports.cutOffByFlag = cutOffByFlag;
module.exports.cutOffLoaderExecution = cutOffLoaderExecution;
module.exports.cutOffMessage = cutOffMessage;
module.exports.cutOffMultilineMessage = cutOffMultilineMessage;
module.exports.cutOffWebpackOptions = cutOffWebpackOptions;
