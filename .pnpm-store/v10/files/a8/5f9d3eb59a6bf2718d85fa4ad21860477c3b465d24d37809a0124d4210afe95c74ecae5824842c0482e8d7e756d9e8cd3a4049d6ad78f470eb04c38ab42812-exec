#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the eslint command.
 * @author Nicholas C. Zakas
 */

/* eslint no-console:off -- CLI */

"use strict";

const mod = require("node:module");

// to use V8's code cache to speed up instantiation time
mod.enableCompileCache?.();

// must do this initialization *before* other requires in order to work
if (process.argv.includes("--debug")) {
	require("debug").enable("eslint:*,-eslint:code-path,eslintrc:*");
}

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Read data from stdin til the end.
 *
 * Note: See
 * - https://github.com/nodejs/node/blob/master/doc/api/process.md#processstdin
 * - https://github.com/nodejs/node/blob/master/doc/api/process.md#a-note-on-process-io
 * - https://lists.gnu.org/archive/html/bug-gnu-emacs/2016-01/msg00419.html
 * - https://github.com/nodejs/node/issues/7439 (historical)
 *
 * On Windows using `fs.readFileSync(STDIN_FILE_DESCRIPTOR, "utf8")` seems
 * to read 4096 bytes before blocking and never drains to read further data.
 *
 * The investigation on the Emacs thread indicates:
 *
 * > Emacs on MS-Windows uses pipes to communicate with subprocesses; a
 * > pipe on Windows has a 4K buffer. So as soon as Emacs writes more than
 * > 4096 bytes to the pipe, the pipe becomes full, and Emacs then waits for
 * > the subprocess to read its end of the pipe, at which time Emacs will
 * > write the rest of the stuff.
 * @returns {Promise<string>} The read text.
 */
function readStdin() {
	return new Promise((resolve, reject) => {
		let content = "";
		let chunk = "";

		process.stdin
			.setEncoding("utf8")
			.on("readable", () => {
				while ((chunk = process.stdin.read()) !== null) {
					content += chunk;
				}
			})
			.on("end", () => resolve(content))
			.on("error", reject);
	});
}

/**
 * Get the error message of a given value.
 * @param {any} error The value to get.
 * @returns {string} The error message.
 */
function getErrorMessage(error) {
	// Lazy loading because this is used only if an error happened.
	const util = require("node:util");

	// Foolproof -- third-party module might throw non-object.
	if (typeof error !== "object" || error === null) {
		return String(error);
	}

	// Use templates if `error.messageTemplate` is present.
	if (typeof error.messageTemplate === "string") {
		try {
			const template = require(`../messages/${error.messageTemplate}.js`);

			return template(error.messageData || {});
		} catch {
			// Ignore template error then fallback to use `error.stack`.
		}
	}

	// Use the stacktrace if it's an error object.
	if (typeof error.stack === "string") {
		return error.stack;
	}

	// Otherwise, dump the object.
	return util.format("%o", error);
}

/**
 * Tracks error messages that are shown to the user so we only ever show the
 * same message once.
 * @type {Set<string>}
 */
const displayedErrors = new Set();

/**
 * Tracks whether an unexpected error was caught
 * @type {boolean}
 */
let hadFatalError = false;

/**
 * Catch and report unexpected error.
 * @param {any} error The thrown error object.
 * @returns {void}
 */
function onFatalError(error) {
	process.exitCode = 2;
	hadFatalError = true;

	const { version } = require("../package.json");
	const message = `
Oops! Something went wrong! :(

ESLint: ${version}

${getErrorMessage(error)}`;

	if (!displayedErrors.has(message)) {
		console.error(message);
		displayedErrors.add(message);
	}
}

//------------------------------------------------------------------------------
// Execution
//------------------------------------------------------------------------------

(async function main() {
	process.on("uncaughtException", onFatalError);
	process.on("unhandledRejection", onFatalError);

	// Call the config initializer if `--init` is present.
	if (process.argv.includes("--init")) {
		// `eslint --init` has been moved to `@eslint/create-config`
		console.warn(
			"You can also run this command directly using 'npm init @eslint/config@latest'.",
		);

		const spawn = require("cross-spawn");

		spawn.sync("npm", ["init", "@eslint/config@latest"], {
			encoding: "utf8",
			stdio: "inherit",
		});
		return;
	}

	// start the MCP server if `--mcp` is present
	if (process.argv.includes("--mcp")) {
		console.warn(
			"You can also run this command directly using 'npx @eslint/mcp@latest'.",
		);

		const spawn = require("cross-spawn");

		spawn.sync("npx", ["@eslint/mcp@latest"], {
			encoding: "utf8",
			stdio: "inherit",
		});
		return;
	}

	// Otherwise, call the CLI.
	const cli = require("../lib/cli");
	const exitCode = await cli.execute(
		process.argv,
		process.argv.includes("--stdin") ? await readStdin() : null,
		true,
	);

	/*
	 * If an uncaught exception or unhandled rejection was detected in the meantime,
	 * keep the fatal exit code 2 that is already assigned to `process.exitCode`.
	 * Without this condition, exit code 2 (unsuccessful execution) could be overwritten with
	 * 1 (successful execution, lint problems found) or even 0 (successful execution, no lint problems found).
	 * This ensures that unexpected errors that seemingly don't affect the success
	 * of the execution will still cause a non-zero exit code, as it's a common
	 * practice and the default behavior of Node.js to exit with non-zero
	 * in case of an uncaught exception or unhandled rejection.
	 *
	 * Otherwise, assign the exit code returned from CLI.
	 */
	if (!hadFatalError) {
		process.exitCode = exitCode;
	}
})().catch(onFatalError);
