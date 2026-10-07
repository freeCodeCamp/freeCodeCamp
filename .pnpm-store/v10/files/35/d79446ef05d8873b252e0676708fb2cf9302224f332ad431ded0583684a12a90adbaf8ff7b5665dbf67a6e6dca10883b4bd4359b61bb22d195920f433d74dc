/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncBailHook } = require("tapable");
const { Logger } = require("./Logger");
const createConsoleLogger = require("./createConsoleLogger");

/** @type {createConsoleLogger.LoggerOptions} */
const currentDefaultLoggerOptions = {
	level: "info",
	debug: false,
	console
};
let currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);

/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */
module.exports.getLogger = name =>
	new Logger(
		(type, args) => {
			if (module.exports.hooks.log.call(name, type, args) === undefined) {
				currentDefaultLogger(name, type, args);
			}
		},
		childName => module.exports.getLogger(`${name}/${childName}`)
	);

/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */
module.exports.configureDefaultLogger = options => {
	Object.assign(currentDefaultLoggerOptions, options);
	currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};

module.exports.hooks = {
	log: new SyncBailHook(["origin", "type", "args"])
};
