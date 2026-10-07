/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module")} Module */

const previouslyPolyfilledBuiltinModules = {
	assert: "assert/",
	buffer: "buffer/",
	console: "console-browserify",
	constants: "constants-browserify",
	crypto: "crypto-browserify",
	domain: "domain-browser",
	events: "events/",
	http: "stream-http",
	https: "https-browserify",
	os: "os-browserify/browser",
	path: "path-browserify",
	punycode: "punycode/",
	process: "process/browser",
	querystring: "querystring-es3",
	stream: "stream-browserify",
	_stream_duplex: "readable-stream/duplex",
	_stream_passthrough: "readable-stream/passthrough",
	_stream_readable: "readable-stream/readable",
	_stream_transform: "readable-stream/transform",
	_stream_writable: "readable-stream/writable",
	string_decoder: "string_decoder/",
	sys: "util/",
	timers: "timers-browserify",
	tty: "tty-browserify",
	url: "url/",
	util: "util/",
	vm: "vm-browserify",
	zlib: "browserify-zlib"
};

class ModuleNotFoundError extends WebpackError {
	/**
	 * @param {Module | null} module module tied to dependency
	 * @param {Error&any} err error thrown
	 * @param {DependencyLocation} loc location of dependency
	 */
	constructor(module, err, loc) {
		let message = `Module not found: ${err.toString()}`;

		// TODO remove in webpack 6
		const match = err.message.match(/Can't resolve '([^']+)'/);
		if (match) {
			const request = match[1];
			const alias =
				previouslyPolyfilledBuiltinModules[
					/** @type {keyof previouslyPolyfilledBuiltinModules} */ (request)
				];
			if (alias) {
				const pathIndex = alias.indexOf("/");
				const dependency = pathIndex > 0 ? alias.slice(0, pathIndex) : alias;
				message +=
					"\n\n" +
					"BREAKING CHANGE: " +
					"webpack < 5 used to include polyfills for node.js core modules by default.\n" +
					"This is no longer the case. Verify if you need this module and configure a polyfill for it.\n\n";
				message +=
					"If you want to include a polyfill, you need to:\n" +
					`\t- add a fallback 'resolve.fallback: { "${request}": require.resolve("${alias}") }'\n` +
					`\t- install '${dependency}'\n`;
				message +=
					"If you don't want to include a polyfill, you can use an empty module like this:\n" +
					`\tresolve.fallback: { "${request}": false }`;
			}
		}

		super(message);

		this.name = "ModuleNotFoundError";
		this.details = err.details;
		this.module = module;
		this.error = err;
		this.loc = loc;
	}
}

module.exports = ModuleNotFoundError;
