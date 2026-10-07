/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const truncateArgs = require("../logging/truncateArgs");

/** @typedef {import("../config/defaults").InfrastructureLoggingNormalizedWithDefaults} InfrastructureLoggingNormalizedWithDefaults */
/** @typedef {import("../logging/createConsoleLogger").LoggerConsole} LoggerConsole */

/* eslint-disable no-console */

/**
 * Returns logger function.
 * @param {object} options options
 * @param {boolean=} options.colors colors
 * @param {boolean=} options.appendOnly append only
 * @param {InfrastructureLoggingNormalizedWithDefaults["stream"]} options.stream stream
 * @returns {LoggerConsole} logger function
 */
module.exports = ({ colors, appendOnly, stream }) => {
	/** @type {string[] | undefined} */
	let currentStatusMessage;
	let hasStatusMessage = false;
	let currentIndent = "";
	let currentCollapsed = 0;

	/**
	 * Returns indented string.
	 * @param {string} str string
	 * @param {string} prefix prefix
	 * @param {string} colorPrefix color prefix
	 * @param {string} colorSuffix color suffix
	 * @returns {string} indented string
	 */
	const indent = (str, prefix, colorPrefix, colorSuffix) => {
		if (str === "") return str;
		prefix = currentIndent + prefix;
		if (colors) {
			return (
				prefix +
				colorPrefix +
				str.replace(/\n/g, `${colorSuffix}\n${prefix}${colorPrefix}`) +
				colorSuffix
			);
		}

		return prefix + str.replace(/\n/g, `\n${prefix}`);
	};

	const clearStatusMessage = () => {
		if (hasStatusMessage) {
			stream.write("\u001B[2K\r");
			hasStatusMessage = false;
		}
	};

	const writeStatusMessage = () => {
		if (!currentStatusMessage) return;
		const l = stream.columns || 40;
		const args = truncateArgs(currentStatusMessage, l - 1);
		const str = args.join(" ");
		const coloredStr = `\u001B[1m${str}\u001B[39m\u001B[22m`;
		stream.write(`\u001B[2K\r${coloredStr}`);
		hasStatusMessage = true;
	};

	/**
	 * Returns function to write with colors.
	 * @template T
	 * @param {string} prefix prefix
	 * @param {string} colorPrefix color prefix
	 * @param {string} colorSuffix color suffix
	 * @returns {(...args: T[]) => void} function to write with colors
	 */
	const writeColored =
		(prefix, colorPrefix, colorSuffix) =>
		(...args) => {
			if (currentCollapsed > 0) return;
			clearStatusMessage();
			const str = indent(
				util.format(...args),
				prefix,
				colorPrefix,
				colorSuffix
			);
			stream.write(`${str}\n`);
			writeStatusMessage();
		};

	/** @type {<T extends unknown[]>(...args: T) => void} */
	const writeGroupMessage = writeColored(
		"<-> ",
		"\u001B[1m\u001B[36m",
		"\u001B[39m\u001B[22m"
	);

	/** @type {<T extends unknown[]>(...args: T) => void} */
	const writeGroupCollapsedMessage = writeColored(
		"<+> ",
		"\u001B[1m\u001B[36m",
		"\u001B[39m\u001B[22m"
	);

	return {
		/** @type {LoggerConsole["log"]} */
		log: writeColored("    ", "\u001B[1m", "\u001B[22m"),
		/** @type {LoggerConsole["debug"]} */
		debug: writeColored("    ", "", ""),
		/** @type {LoggerConsole["trace"]} */
		trace: writeColored("    ", "", ""),
		/** @type {LoggerConsole["info"]} */
		info: writeColored("<i> ", "\u001B[1m\u001B[32m", "\u001B[39m\u001B[22m"),
		/** @type {LoggerConsole["warn"]} */
		warn: writeColored("<w> ", "\u001B[1m\u001B[33m", "\u001B[39m\u001B[22m"),
		/** @type {LoggerConsole["error"]} */
		error: writeColored("<e> ", "\u001B[1m\u001B[31m", "\u001B[39m\u001B[22m"),
		/** @type {LoggerConsole["logTime"]} */
		logTime: writeColored(
			"<t> ",
			"\u001B[1m\u001B[35m",
			"\u001B[39m\u001B[22m"
		),
		/** @type {LoggerConsole["group"]} */
		group: (...args) => {
			writeGroupMessage(...args);
			if (currentCollapsed > 0) {
				currentCollapsed++;
			} else {
				currentIndent += "  ";
			}
		},
		/** @type {LoggerConsole["groupCollapsed"]} */
		groupCollapsed: (...args) => {
			writeGroupCollapsedMessage(...args);
			currentCollapsed++;
		},
		/** @type {LoggerConsole["groupEnd"]} */
		groupEnd: () => {
			if (currentCollapsed > 0) {
				currentCollapsed--;
			} else if (currentIndent.length >= 2) {
				currentIndent = currentIndent.slice(0, -2);
			}
		},
		/** @type {LoggerConsole["profile"]} */
		profile: console.profile && ((name) => console.profile(name)),
		/** @type {LoggerConsole["profileEnd"]} */
		profileEnd: console.profileEnd && ((name) => console.profileEnd(name)),
		/** @type {LoggerConsole["clear"]} */
		clear:
			/** @type {() => void} */
			(
				!appendOnly &&
					console.clear &&
					(() => {
						clearStatusMessage();
						console.clear();
						writeStatusMessage();
					})
			),
		/** @type {LoggerConsole["status"]} */
		status: appendOnly
			? writeColored("<s> ", "", "")
			: (name, ...args) => {
					args = args.filter(Boolean);
					if (name === undefined && args.length === 0) {
						clearStatusMessage();
						currentStatusMessage = undefined;
					} else if (
						typeof name === "string" &&
						name.startsWith("[webpack.Progress] ")
					) {
						currentStatusMessage = [name.slice(19), ...args];
						writeStatusMessage();
					} else if (name === "[webpack.Progress]") {
						currentStatusMessage = [...args];
						writeStatusMessage();
					} else {
						currentStatusMessage = [name, ...args];
						writeStatusMessage();
					}
				}
	};
};
