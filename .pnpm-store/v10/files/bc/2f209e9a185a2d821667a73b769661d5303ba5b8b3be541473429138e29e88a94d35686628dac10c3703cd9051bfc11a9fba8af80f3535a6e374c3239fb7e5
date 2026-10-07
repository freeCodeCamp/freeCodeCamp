/**
 * @fileoverview Manages the suppressed violations.
 * @author Iacovos Constantinou
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const fs = require("node:fs");
const path = require("node:path");
const { calculateStatsPerFile } = require("../eslint/eslint-helpers");
const stringify = require("json-stable-stringify-without-jsonify");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

// For VSCode IntelliSense
/** @typedef {import("../types").Linter.LintMessage} LintMessage */
/** @typedef {import("../types").ESLint.LintResult} LintResult */
/** @typedef {Record<string, Record<string, { count: number; }>>} SuppressedViolations */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Manages the suppressed violations.
 */
class SuppressionsService {
	filePath = "";
	cwd = "";

	/**
	 * Creates a new instance of SuppressionsService.
	 * @param {Object} options The options.
	 * @param {string} [options.filePath] The location of the suppressions file.
	 * @param {string} [options.cwd] The current working directory.
	 */
	constructor({ filePath, cwd }) {
		this.filePath = filePath;
		this.cwd = cwd;
	}

	/**
	 * Updates the suppressions file based on the current violations and the provided rules.
	 * If no rules are provided, all violations are suppressed.
	 * @param {LintResult[]|undefined} results The lint results.
	 * @param {string[]|undefined} rules The rules to suppress.
	 * @returns {Promise<void>}
	 */
	async suppress(results, rules) {
		const suppressions = await this.load();

		for (const result of results) {
			const relativeFilePath = this.getRelativeFilePath(result.filePath);
			const violationsByRule = SuppressionsService.countViolationsByRule(
				result.messages,
			);

			for (const ruleId in violationsByRule) {
				if (rules && !rules.includes(ruleId)) {
					continue;
				}

				suppressions[relativeFilePath] ??= {};
				suppressions[relativeFilePath][ruleId] =
					violationsByRule[ruleId];
			}
		}

		return this.save(suppressions);
	}

	/**
	 * Removes old, unused suppressions for violations that do not occur anymore.
	 * @param {LintResult[]} results The lint results.
	 * @returns {Promise<void>} No return value.
	 */
	async prune(results) {
		const suppressions = await this.load();
		const { unused } = this.applySuppressions(results, suppressions);

		for (const file in unused) {
			if (!suppressions[file]) {
				continue;
			}

			for (const rule in unused[file]) {
				if (!suppressions[file][rule]) {
					continue;
				}

				const suppressionsCount = suppressions[file][rule].count;
				const violationsCount = unused[file][rule].count;

				if (suppressionsCount === violationsCount) {
					// Remove unused rules
					delete suppressions[file][rule];
				} else {
					// Update the count to match the new number of violations
					suppressions[file][rule].count -= violationsCount;
				}
			}

			// Cleanup files with no rules
			if (Object.keys(suppressions[file]).length === 0) {
				delete suppressions[file];
			}
		}

		for (const file of Object.keys(suppressions)) {
			const absolutePath = path.resolve(this.cwd, file);

			if (!fs.existsSync(absolutePath)) {
				delete suppressions[file];
			}
		}

		return this.save(suppressions);
	}

	/**
	 * Checks the provided suppressions against the lint results.
	 *
	 * For each file, counts the number of violations per rule.
	 * For each rule in each file, compares the number of violations against the counter from the suppressions file.
	 * If the number of violations is less or equal to the counter, messages are moved to `LintResult#suppressedMessages` and ignored.
	 * Otherwise, all violations are reported as usual.
	 * @param {LintResult[]} results The lint results.
	 * @param {SuppressedViolations} suppressions The suppressions.
	 * @returns {{
	 *   results: LintResult[],
	 *   unused: SuppressedViolations
	 * }} The updated results and the unused suppressions.
	 */
	applySuppressions(results, suppressions) {
		/**
		 * We copy the results to avoid modifying the original objects
		 * We remove only result messages that are matched and hence suppressed
		 * We leave the rest untouched to minimize the risk of losing parts of the original data
		 */
		const filtered = structuredClone(results);
		const unused = {};

		for (const result of filtered) {
			const relativeFilePath = this.getRelativeFilePath(result.filePath);

			if (!suppressions[relativeFilePath]) {
				continue;
			}

			const violationsByRule = SuppressionsService.countViolationsByRule(
				result.messages,
			);
			let wasSuppressed = false;

			for (const ruleId in violationsByRule) {
				if (!suppressions[relativeFilePath][ruleId]) {
					continue;
				}

				const suppressionsCount =
					suppressions[relativeFilePath][ruleId].count;
				const violationsCount = violationsByRule[ruleId].count;

				// Suppress messages if the number of violations is less or equal to the suppressions count
				if (violationsCount <= suppressionsCount) {
					SuppressionsService.suppressMessagesByRule(result, ruleId);
					wasSuppressed = true;
				}

				// Update the count to match the new number of violations, otherwise remove the rule entirely
				if (violationsCount < suppressionsCount) {
					unused[relativeFilePath] ??= {};
					unused[relativeFilePath][ruleId] ??= {};
					unused[relativeFilePath][ruleId].count =
						suppressionsCount - violationsCount;
				}
			}

			// Mark as unused all the suppressions that were not matched against a rule
			for (const ruleId in suppressions[relativeFilePath]) {
				if (violationsByRule[ruleId]) {
					continue;
				}

				unused[relativeFilePath] ??= {};
				unused[relativeFilePath][ruleId] =
					suppressions[relativeFilePath][ruleId];
			}

			// Recalculate stats if messages were suppressed
			if (wasSuppressed) {
				Object.assign(result, calculateStatsPerFile(result.messages));
			}
		}

		return {
			results: filtered,
			unused,
		};
	}

	/**
	 * Loads the suppressions file.
	 * @throws {Error} If the suppressions file cannot be parsed.
	 * @returns {Promise<SuppressedViolations>} The suppressions.
	 */
	async load() {
		try {
			const data = await fs.promises.readFile(this.filePath, "utf8");

			return JSON.parse(data);
		} catch (err) {
			if (err.code === "ENOENT") {
				return {};
			}
			throw new Error(
				`Failed to parse suppressions file at ${this.filePath}`,
				{
					cause: err,
				},
			);
		}
	}

	/**
	 * Updates the suppressions file.
	 * @param {SuppressedViolations} suppressions The suppressions to save.
	 * @returns {Promise<void>}
	 * @private
	 */
	save(suppressions) {
		return fs.promises.writeFile(
			this.filePath,
			stringify(suppressions, { space: 2 }),
		);
	}

	/**
	 * Counts the violations by rule, ignoring warnings.
	 * @param {LintMessage[]} messages The messages to count.
	 * @returns {Record<string, number>} The number of violations by rule.
	 */
	static countViolationsByRule(messages) {
		return messages.reduce((totals, message) => {
			if (message.severity === 2 && message.ruleId) {
				totals[message.ruleId] ??= { count: 0 };
				totals[message.ruleId].count++;
			}
			return totals;
		}, {});
	}

	/**
	 * Returns the relative path of a file to the current working directory.
	 * Always in POSIX format for consistency and interoperability.
	 * @param {string} filePath The file path.
	 * @returns {string} The relative file path.
	 */
	getRelativeFilePath(filePath) {
		return path
			.relative(this.cwd, filePath)
			.split(path.sep)
			.join(path.posix.sep);
	}

	/**
	 * Moves the messages matching the rule to `LintResult#suppressedMessages` and updates the stats.
	 * @param {LintResult} result The result to update.
	 * @param {string} ruleId The rule to suppress.
	 * @returns {void}
	 */
	static suppressMessagesByRule(result, ruleId) {
		const suppressedMessages = result.messages.filter(
			message => message.ruleId === ruleId,
		);

		result.suppressedMessages = result.suppressedMessages.concat(
			suppressedMessages.map(message => {
				message.suppressions = [
					{
						kind: "file",
						justification: "",
					},
				];

				return message;
			}),
		);

		result.messages = result.messages.filter(
			message => message.ruleId !== ruleId,
		);
	}
}

module.exports = { SuppressionsService };
