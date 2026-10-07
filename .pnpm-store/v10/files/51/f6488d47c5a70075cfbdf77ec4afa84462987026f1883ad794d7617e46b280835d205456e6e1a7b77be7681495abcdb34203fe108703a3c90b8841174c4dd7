/*
 * This file is based on ESLint's suppressions-service.js
 * https://github.com/eslint/eslint/blob/v9.26.0/lib/services/suppressions-service.js
 *
 * Copyright OpenJS Foundation and other contributors, https://openjsf.org/
 * Released under the MIT License:
 * https://github.com/eslint/eslint/blob/main/LICENSE
 */
import fs from 'node:fs';
import path from 'node:path';

import getRelativePath from './getRelativePath.mjs';
import isPathNotFoundError from './isPathNotFoundError.mjs';

/** @import {LintResult, Warning, SuppressedProblems} from 'stylelint' */

/**
 * Manages the suppressed problems.
 */
export class SuppressionsService {
	filePath = '';
	cwd = '';

	/**
	 * Creates a new instance of SuppressionsService.
	 * @param {Object} options The options.
	 * @param {string} options.filePath The path to the suppressions file.
	 * @param {string} options.cwd The current working directory.
	 */
	constructor({ filePath, cwd }) {
		this.filePath = filePath;
		this.cwd = cwd;
	}

	/**
	 * Updates the suppressions file based on the current problems and the provided rules.
	 * If no rules are provided, all problems are suppressed.
	 * This method now automatically prunes suppressions that no longer exist.
	 * @param {LintResult[] | undefined} results The lint results.
	 * @param {string[] | undefined} rules The rules to suppress.
	 * @returns {Promise<void>}
	 */
	async suppress(results, rules) {
		if (results === undefined) return;

		const suppressions = await this.load();

		for (const result of results) {
			const source = result.source;

			if (!source) continue;

			const relativePath = path.isAbsolute(source) ? getRelativePath(this.cwd, source) : source;

			const problemsByRule = SuppressionsService.countProblemsByRule(result.warnings);

			for (const [rule, ruleData] of problemsByRule) {
				if (rules && !rules.includes(rule)) continue;

				if (!suppressions.has(relativePath)) {
					suppressions.set(relativePath, new Map());
				}

				const fileRules = suppressions.get(relativePath);

				if (!fileRules) continue;

				fileRules.set(rule, ruleData);
			}
		}

		const { unused } = this.applySuppressions(results, suppressions);

		const prunedSuppressions = this.#prune(unused, suppressions);

		return this.#save(prunedSuppressions);
	}

	/**
	 * Removes old, unused suppressions for problems that do not occur anymore.
	 * @param {SuppressedProblems} unused The unused suppressions.
	 * @param {SuppressedProblems} suppressions The suppressions.
	 * @returns {SuppressedProblems} The pruned suppressions.
	 */
	#prune(unused, suppressions) {
		for (const [file, rules] of unused) {
			if (!suppressions.has(file)) continue;

			for (const [rule, ruleData] of rules) {
				const fileRules = suppressions.get(file);

				if (!fileRules) continue;

				const suppressionData = fileRules.get(rule);

				if (!suppressionData) continue;

				const suppressionsCount = suppressionData.count;
				const problemsCount = ruleData.count;

				if (suppressionsCount === problemsCount) {
					// Remove unused rules
					fileRules.delete(rule);
				} else {
					// Update the count to match the new number of problems
					const ruleDataForUpdate = fileRules.get(rule);

					if (ruleDataForUpdate) {
						ruleDataForUpdate.count -= problemsCount;
					}
				}
			}

			// Cleanup files with no rules
			const fileRulesForCleanup = suppressions.get(file);

			if (fileRulesForCleanup && fileRulesForCleanup.size === 0) {
				suppressions.delete(file);
			}
		}

		return suppressions;
	}

	/**
	 * Checks the provided suppressions against the lint results.
	 *
	 * For each file, counts the number of problems per rule.
	 * For each rule in each file, compares the number of problems against the counter from the suppressions file.
	 * If the number of problems is less or equal to the counter, warnings are ignored.
	 * Otherwise, all problems are reported as usual.
	 * @param {LintResult[]} results The lint results.
	 * @param {SuppressedProblems} suppressions The suppressions.
	 * @returns {{
	 *   results: LintResult[],
	 *   unused: SuppressedProblems
	 * }} The updated results and the unused suppressions.
	 */
	applySuppressions(results, suppressions) {
		/**
		 * We copy the results to avoid modifying the original objects
		 * We remove only result warnings that are matched and hence suppressed
		 * We leave the rest untouched to minimize the risk of losing parts of the original data
		 */
		const clonedResults = results.map((r) => {
			return {
				...r,
				warnings: structuredClone(r.warnings),
			};
		});

		/** @type {SuppressedProblems} */
		const unused = new Map();

		for (const result of clonedResults) {
			const source = result.source;

			if (!source) continue;

			const relativePath = path.isAbsolute(source) ? getRelativePath(this.cwd, source) : source;

			if (!suppressions.has(relativePath)) continue;

			const problemsByRule = SuppressionsService.countProblemsByRule(result.warnings);

			for (const [rule, ruleStats] of problemsByRule) {
				const fileRules = suppressions.get(relativePath);

				if (!fileRules) continue;

				const ruleData = fileRules.get(rule);

				if (!ruleData) continue;

				const suppressionsCount = ruleData.count;

				if (!ruleStats) continue;

				const problemsCount = ruleStats.count;

				// Suppress warnings if the number of problems is less or equal to the suppressions count
				if (problemsCount <= suppressionsCount) {
					result.warnings = result.warnings.filter((warning) => warning.rule !== rule);
				}

				// Update the count to match the new number of problems, otherwise remove the rule entirely
				if (problemsCount < suppressionsCount) {
					if (!unused.has(relativePath)) {
						unused.set(relativePath, new Map());
					}

					const unusedFileRules = unused.get(relativePath);

					if (unusedFileRules && !unusedFileRules.has(rule)) {
						unusedFileRules.set(rule, { count: 0 });
					}

					if (unusedFileRules) {
						const unusedRuleData = unusedFileRules.get(rule);

						if (unusedRuleData) {
							unusedRuleData.count = suppressionsCount - problemsCount;
						}
					}
				}
			}

			// Mark as unused all the suppressions that were not matched against a rule
			const fileRulesForUnused = suppressions.get(relativePath);

			if (fileRulesForUnused) {
				for (const [rule, savedEntry] of fileRulesForUnused) {
					if (problemsByRule.has(rule)) continue;

					if (!savedEntry) continue;

					if (!unused.has(relativePath)) {
						unused.set(relativePath, new Map());
					}

					const unusedFileRulesForSet = unused.get(relativePath);

					if (!unusedFileRulesForSet) continue;

					unusedFileRulesForSet.set(rule, savedEntry);
				}
			}
		}

		return {
			results: clonedResults,
			unused,
		};
	}

	/**
	 * Loads the suppressions file.
	 * @throws {Error} If the suppressions file cannot be parsed.
	 * @returns {Promise<SuppressedProblems>} The suppressions.
	 */
	async load() {
		try {
			const data = await fs.promises.readFile(this.filePath, 'utf8');
			const parsed = JSON.parse(data);

			// Convert Object to Map
			const suppressions = new Map();

			for (const [filePath, rules] of Object.entries(parsed)) {
				const rulesMap = new Map();

				for (const [ruleName, ruleData] of Object.entries(rules)) {
					rulesMap.set(ruleName, ruleData);
				}

				suppressions.set(filePath, rulesMap);
			}

			return suppressions;
		} catch (err) {
			if (isPathNotFoundError(err)) {
				return new Map();
			}

			throw new Error(`Failed to parse suppressions file at ${this.filePath}`);
		}
	}

	/**
	 * Updates the suppressions file.
	 * @param {SuppressedProblems} suppressions The suppressions to save.
	 * @returns {Promise<void>}
	 */
	#save(suppressions) {
		// Convert Map to Object for JSON serialization
		/** @type {Record<string, Record<string, {count: number}>>} */
		const obj = {};

		for (const [filePath, rulesMap] of suppressions) {
			obj[filePath] = {};

			for (const [ruleName, ruleData] of rulesMap) {
				obj[filePath][ruleName] = ruleData;
			}
		}

		return fs.promises.writeFile(this.filePath, `${JSON.stringify(obj, null, 2)}\n`);
	}

	/**
	 * Counts the problems by rule, ignoring warnings.
	 * @param {Warning[]} warnings The warnings to count.
	 * @returns {Map<string, {count: number}>} The number of problems by rule.
	 */
	static countProblemsByRule(warnings) {
		/** @type {Map<string, {count: number}>} */
		const totals = new Map();

		for (const warning of warnings) {
			const rule = warning.rule;

			if (warning.severity !== 'error' || !rule) continue;

			if (!totals.has(rule)) {
				totals.set(rule, { count: 0 });
			}

			const ruleData = totals.get(rule);

			if (ruleData) {
				ruleData.count += 1;
			}
		}

		return totals;
	}
}
