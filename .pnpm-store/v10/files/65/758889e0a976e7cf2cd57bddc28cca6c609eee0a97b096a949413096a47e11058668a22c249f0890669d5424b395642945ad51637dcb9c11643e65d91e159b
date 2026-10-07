/**
 * @fileoverview Emits warnings for ESLint.
 * @author Francesco Trotta
 */

"use strict";

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * A service that emits warnings for ESLint.
 */
class WarningService {
	/**
	 * Creates a new instance of the service.
	 * @param {{ emitWarning?: ((warning: string, type: string) => void) | undefined }} [options] A function called internally to emit warnings using API provided by the runtime.
	 */
	constructor({
		emitWarning = globalThis.process?.emitWarning ?? (() => {}),
	} = {}) {
		this.emitWarning = emitWarning;
	}

	/**
	 * Emits a warning when circular fixes are detected while fixing a file.
	 * This method is used by the Linter and is safe to call outside Node.js.
	 * @param {string} filename The name of the file being fixed.
	 * @returns {void}
	 */
	emitCircularFixesWarning(filename) {
		this.emitWarning(
			`Circular fixes detected while fixing ${filename}. It is likely that you have conflicting rules in your configuration.`,
			"ESLintCircularFixesWarning",
		);
	}

	/**
	 * Emits a warning when an empty config file has been loaded.
	 * @param {string} configFilePath The path to the config file.
	 * @returns {void}
	 */
	emitEmptyConfigWarning(configFilePath) {
		this.emitWarning(
			`Running ESLint with an empty config (from ${configFilePath}). Please double-check that this is what you want. If you want to run ESLint with an empty config, export [{}] to remove this warning.`,
			"ESLintEmptyConfigWarning",
		);
	}

	/**
	 * Emits a warning when an ".eslintignore" file is found.
	 * @returns {void}
	 */
	emitESLintIgnoreWarning() {
		this.emitWarning(
			'The ".eslintignore" file is no longer supported. Switch to using the "ignores" property in "eslint.config.js": https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files',
			"ESLintIgnoreWarning",
		);
	}

	/**
	 * Emits a warning when the ESLINT_USE_FLAT_CONFIG environment variable is set to "false".
	 * @returns {void}
	 */
	emitESLintRCWarning() {
		this.emitWarning(
			"You are using an eslintrc configuration file, which is deprecated and support will be removed in v10.0.0. Please migrate to an eslint.config.js file. See https://eslint.org/docs/latest/use/configure/migration-guide for details. An eslintrc configuration file is used because you have the ESLINT_USE_FLAT_CONFIG environment variable set to false. If you want to use an eslint.config.js file, remove the environment variable. If you want to find the location of the eslintrc configuration file, use the --debug flag.",
			"ESLintRCWarning",
		);
	}

	/**
	 * Emits a warning when an inactive flag is used.
	 * This method is used by the Linter and is safe to call outside Node.js.
	 * @param {string} flag The name of the flag.
	 * @param {string} message The warning message.
	 * @returns {void}
	 */
	emitInactiveFlagWarning(flag, message) {
		this.emitWarning(message, `ESLintInactiveFlag_${flag}`);
	}

	/**
	 * Emits a warning when a suboptimal concurrency setting is detected.
	 * Currently, this is only used to warn when the net linting ratio is low.
	 * @param {string} notice A notice about how to improve performance.
	 * @returns {void}
	 */
	emitPoorConcurrencyWarning(notice) {
		this.emitWarning(
			`You may ${notice} to improve performance.`,
			"ESLintPoorConcurrencyWarning",
		);
	}

	/**
	 * Emits a warning when eslint-env configuration comments are found.
	 * @param {string} filename The name of the file being linted.
	 * @param {number} line The line number of the comment.
	 * @returns {void}
	 */
	emitESLintEnvWarning(filename, line) {
		this.emitWarning(
			`/* eslint-env */ comments are no longer recognized when linting with flat config and will be reported as errors as of v10.0.0. Replace them with /* global */ comments or define globals in your config file. See https://eslint.org/docs/latest/use/configure/migration-guide#eslint-env-configuration-comments for details. Found in ${filename} at line ${line}.`,
			"ESLintEnvWarning",
		);
	}
}

module.exports = { WarningService };
