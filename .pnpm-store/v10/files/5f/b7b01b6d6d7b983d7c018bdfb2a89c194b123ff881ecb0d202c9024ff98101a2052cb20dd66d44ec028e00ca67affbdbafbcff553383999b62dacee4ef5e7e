/**
 * @fileoverview A class to track messages reported by the linter for a file.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("../shared/assert");
const { RuleFixer } = require("./rule-fixer");
const { interpolate } = require("./interpolate");
const ruleReplacements = require("../../conf/replacements.json");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/** @typedef {import("../types").Linter.LintMessage} LintMessage */
/** @typedef {import("../types").Linter.LintSuggestion} SuggestionResult */
/** @typedef {import("@eslint/core").Language} Language */
/** @typedef {import("@eslint/core").SourceLocation} SourceLocation */

/**
 * An error message description
 * @typedef {Object} MessageDescriptor
 * @property {ASTNode} [node] The reported node
 * @property {Location} loc The location of the problem.
 * @property {string} message The problem message.
 * @property {Object} [data] Optional data to use to fill in placeholders in the
 *      message.
 * @property {Function} [fix] The function to call that creates a fix command.
 * @property {Array<{desc?: string, messageId?: string, fix: Function}>} suggest Suggestion descriptions and functions to create a the associated fixes.
 */

/**
 * @typedef {Object} LintProblem
 * @property {string} ruleId The rule ID that reported the problem.
 * @property {string} message The problem message.
 * @property {SourceLocation} loc The location of the problem.
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_ERROR_LOC = {
	start: { line: 1, column: 0 },
	end: { line: 1, column: 1 },
};

/**
 * Updates a given location based on the language offsets. This allows us to
 * change 0-based locations to 1-based locations. We always want ESLint
 * reporting lines and columns starting from 1.
 * @todo Potentially this should be moved into a shared utility file.
 * @param {Object} location The location to update.
 * @param {number} location.line The starting line number.
 * @param {number} location.column The starting column number.
 * @param {number} [location.endLine] The ending line number.
 * @param {number} [location.endColumn] The ending column number.
 * @param {Language} language The language to use to adjust the location information.
 * @returns {Object} The updated location.
 */
function updateLocationInformation(
	{ line, column, endLine, endColumn },
	language,
) {
	const columnOffset = language.columnStart === 1 ? 0 : 1;
	const lineOffset = language.lineStart === 1 ? 0 : 1;

	// calculate separately to account for undefined
	const finalEndLine = endLine === void 0 ? endLine : endLine + lineOffset;
	const finalEndColumn =
		endColumn === void 0 ? endColumn : endColumn + columnOffset;

	return {
		line: line + lineOffset,
		column: column + columnOffset,
		endLine: finalEndLine,
		endColumn: finalEndColumn,
	};
}

/**
 * creates a missing-rule message.
 * @param {string} ruleId the ruleId to create
 * @returns {string} created error message
 * @private
 */
function createMissingRuleMessage(ruleId) {
	return Object.hasOwn(ruleReplacements.rules, ruleId)
		? `Rule '${ruleId}' was removed and replaced by: ${ruleReplacements.rules[ruleId].join(", ")}`
		: `Definition for rule '${ruleId}' was not found.`;
}

/**
 * creates a linting problem
 * @param {LintProblem} options to create linting error
 * @param {RuleSeverity} severity the error message to report
 * @param {Language} language the language to use to adjust the location information.
 * @returns {LintMessage} created problem, returns a missing-rule problem if only provided ruleId.
 * @private
 */
function createLintingProblem(options, severity, language) {
	const {
		ruleId = null,
		loc = DEFAULT_ERROR_LOC,
		message = createMissingRuleMessage(options.ruleId),
	} = options;

	return {
		ruleId,
		message,
		...updateLocationInformation(
			{
				line: loc.start.line,
				column: loc.start.column,
				endLine: loc.end.line,
				endColumn: loc.end.column,
			},
			language,
		),
		severity,
		nodeType: null,
	};
}

/**
 * Translates a multi-argument context.report() call into a single object argument call
 * @param {...*} args A list of arguments passed to `context.report`
 * @returns {MessageDescriptor} A normalized object containing report information
 */
function normalizeMultiArgReportCall(...args) {
	// If there is one argument, it is considered to be a new-style call already.
	if (args.length === 1) {
		// Shallow clone the object to avoid surprises if reusing the descriptor
		return Object.assign({}, args[0]);
	}

	// If the second argument is a string, the arguments are interpreted as [node, message, data, fix].
	if (typeof args[1] === "string") {
		return {
			node: args[0],
			message: args[1],
			data: args[2],
			fix: args[3],
		};
	}

	// Otherwise, the arguments are interpreted as [node, loc, message, data, fix].
	return {
		node: args[0],
		loc: args[1],
		message: args[2],
		data: args[3],
		fix: args[4],
	};
}

/**
 * Asserts that either a loc or a node was provided, and the node is valid if it was provided.
 * @param {MessageDescriptor} descriptor A descriptor to validate
 * @returns {void}
 * @throws AssertionError if neither a node nor a loc was provided, or if the node is not an object
 */
function assertValidNodeInfo(descriptor) {
	if (descriptor.node) {
		assert(typeof descriptor.node === "object", "Node must be an object");
	} else {
		assert(
			descriptor.loc,
			"Node must be provided when reporting error if location is not provided",
		);
	}
}

/**
 * Normalizes a MessageDescriptor to always have a `loc` with `start` and `end` properties
 * @param {MessageDescriptor} descriptor A descriptor for the report from a rule.
 * @returns {{start: Location, end: (Location|null)}} An updated location that infers the `start` and `end` properties
 * from the `node` of the original descriptor, or infers the `start` from the `loc` of the original descriptor.
 */
function normalizeReportLoc(descriptor) {
	if (descriptor.loc.start) {
		return descriptor.loc;
	}
	return { start: descriptor.loc, end: null };
}

/**
 * Clones the given fix object.
 * @param {Fix|null} fix The fix to clone.
 * @returns {Fix|null} Deep cloned fix object or `null` if `null` or `undefined` was passed in.
 */
function cloneFix(fix) {
	if (!fix) {
		return null;
	}

	return {
		range: [fix.range[0], fix.range[1]],
		text: fix.text,
	};
}

/**
 * Check that a fix has a valid range.
 * @param {Fix|null} fix The fix to validate.
 * @returns {void}
 */
function assertValidFix(fix) {
	if (fix) {
		assert(
			fix.range &&
				typeof fix.range[0] === "number" &&
				typeof fix.range[1] === "number",
			`Fix has invalid range: ${JSON.stringify(fix, null, 2)}`,
		);
	}
}

/**
 * Compares items in a fixes array by range.
 * @param {Fix} a The first message.
 * @param {Fix} b The second message.
 * @returns {number} -1 if a comes before b, 1 if a comes after b, 0 if equal.
 * @private
 */
function compareFixesByRange(a, b) {
	return a.range[0] - b.range[0] || a.range[1] - b.range[1];
}

/**
 * Merges the given fixes array into one.
 * @param {Fix[]} fixes The fixes to merge.
 * @param {SourceCode} sourceCode The source code object to get the text between fixes.
 * @returns {{text: string, range: number[]}} The merged fixes
 */
function mergeFixes(fixes, sourceCode) {
	for (const fix of fixes) {
		assertValidFix(fix);
	}

	if (fixes.length === 0) {
		return null;
	}
	if (fixes.length === 1) {
		return cloneFix(fixes[0]);
	}

	fixes.sort(compareFixesByRange);

	const originalText = sourceCode.text;
	const start = fixes[0].range[0];
	const end = fixes.at(-1).range[1];
	let text = "";
	let lastPos = Number.MIN_SAFE_INTEGER;

	for (const fix of fixes) {
		assert(
			fix.range[0] >= lastPos,
			"Fix objects must not be overlapped in a report.",
		);

		if (fix.range[0] >= 0) {
			text += originalText.slice(
				Math.max(0, start, lastPos),
				fix.range[0],
			);
		}
		text += fix.text;
		lastPos = fix.range[1];
	}
	text += originalText.slice(Math.max(0, start, lastPos), end);

	return { range: [start, end], text };
}

/**
 * Gets one fix object from the given descriptor.
 * If the descriptor retrieves multiple fixes, this merges those to one.
 * @param {MessageDescriptor} descriptor The report descriptor.
 * @param {SourceCode} sourceCode The source code object to get text between fixes.
 * @returns {({text: string, range: number[]}|null)} The fix for the descriptor
 */
function normalizeFixes(descriptor, sourceCode) {
	if (typeof descriptor.fix !== "function") {
		return null;
	}

	const ruleFixer = new RuleFixer({ sourceCode });

	// @type {null | Fix | Fix[] | IterableIterator<Fix>}
	const fix = descriptor.fix(ruleFixer);

	// Merge to one.
	if (fix && Symbol.iterator in fix) {
		return mergeFixes(Array.from(fix), sourceCode);
	}

	assertValidFix(fix);
	return cloneFix(fix);
}

/**
 * Gets an array of suggestion objects from the given descriptor.
 * @param {MessageDescriptor} descriptor The report descriptor.
 * @param {SourceCode} sourceCode The source code object to get text between fixes.
 * @param {Object} messages Object of meta messages for the rule.
 * @returns {Array<SuggestionResult>} The suggestions for the descriptor
 */
function mapSuggestions(descriptor, sourceCode, messages) {
	if (!descriptor.suggest || !Array.isArray(descriptor.suggest)) {
		return [];
	}

	return (
		descriptor.suggest
			.map(suggestInfo => {
				const computedDesc =
					suggestInfo.desc || messages[suggestInfo.messageId];

				return {
					...suggestInfo,
					desc: interpolate(computedDesc, suggestInfo.data),
					fix: normalizeFixes(suggestInfo, sourceCode),
				};
			})

			// Remove suggestions that didn't provide a fix
			.filter(({ fix }) => fix)
	);
}

/**
 * Creates information about the report from a descriptor
 * @param {Object} options Information about the problem
 * @param {string} options.ruleId Rule ID
 * @param {(0|1|2)} options.severity Rule severity
 * @param {(ASTNode|null)} options.node Node
 * @param {string} options.message Error message
 * @param {string} [options.messageId] The error message ID.
 * @param {{start: SourceLocation, end: (SourceLocation|null)}} options.loc Start and end location
 * @param {{text: string, range: (number[]|null)}} options.fix The fix object
 * @param {Array<{text: string, range: (number[]|null)}>} options.suggestions The array of suggestions objects
 * @param {Language} [options.language] The language to use to adjust line and column offsets.
 * @returns {LintMessage} Information about the report
 */
function createProblem(options) {
	const { language } = options;

	// calculate offsets based on the language in use
	const columnOffset = language.columnStart === 1 ? 0 : 1;
	const lineOffset = language.lineStart === 1 ? 0 : 1;

	const problem = {
		ruleId: options.ruleId,
		severity: options.severity,
		message: options.message,
		line: options.loc.start.line + lineOffset,
		column: options.loc.start.column + columnOffset,
		nodeType: (options.node && options.node.type) || null,
	};

	/*
	 * If this isn’t in the conditional, some of the tests fail
	 * because `messageId` is present in the problem object
	 */
	if (options.messageId) {
		problem.messageId = options.messageId;
	}

	if (options.loc.end) {
		problem.endLine = options.loc.end.line + lineOffset;
		problem.endColumn = options.loc.end.column + columnOffset;
	}

	if (options.fix) {
		problem.fix = options.fix;
	}

	if (options.suggestions && options.suggestions.length > 0) {
		problem.suggestions = options.suggestions;
	}

	return problem;
}

/**
 * Validates that suggestions are properly defined. Throws if an error is detected.
 * @param {Array<{ desc?: string, messageId?: string }>} suggest The incoming suggest data.
 * @param {Object} messages Object of meta messages for the rule.
 * @returns {void}
 */
function validateSuggestions(suggest, messages) {
	if (suggest && Array.isArray(suggest)) {
		suggest.forEach(suggestion => {
			if (suggestion.messageId) {
				const { messageId } = suggestion;

				if (!messages) {
					throw new TypeError(
						`context.report() called with a suggest option with a messageId '${messageId}', but no messages were present in the rule metadata.`,
					);
				}

				if (!messages[messageId]) {
					throw new TypeError(
						`context.report() called with a suggest option with a messageId '${messageId}' which is not present in the 'messages' config: ${JSON.stringify(messages, null, 2)}`,
					);
				}

				if (suggestion.desc) {
					throw new TypeError(
						"context.report() called with a suggest option that defines both a 'messageId' and an 'desc'. Please only pass one.",
					);
				}
			} else if (!suggestion.desc) {
				throw new TypeError(
					"context.report() called with a suggest option that doesn't have either a `desc` or `messageId`",
				);
			}

			if (typeof suggestion.fix !== "function") {
				throw new TypeError(
					`context.report() called with a suggest option without a fix function. See: ${JSON.stringify(suggestion, null, 2)}`,
				);
			}
		});
	}
}

/**
 * Computes the message from a report descriptor.
 * @param {MessageDescriptor} descriptor The report descriptor.
 * @param {Object} messages Object of meta messages for the rule.
 * @returns {string} The computed message.
 * @throws {TypeError} If messageId is not found or both message and messageId are provided.
 */
function computeMessageFromDescriptor(descriptor, messages) {
	if (descriptor.messageId) {
		if (!messages) {
			throw new TypeError(
				"context.report() called with a messageId, but no messages were present in the rule metadata.",
			);
		}
		const id = descriptor.messageId;

		if (descriptor.message) {
			throw new TypeError(
				"context.report() called with a message and a messageId. Please only pass one.",
			);
		}
		if (!messages || !Object.hasOwn(messages, id)) {
			throw new TypeError(
				`context.report() called with a messageId of '${id}' which is not present in the 'messages' config: ${JSON.stringify(messages, null, 2)}`,
			);
		}
		return messages[id];
	}

	if (descriptor.message) {
		return descriptor.message;
	}

	throw new TypeError(
		"Missing `message` property in report() call; add a message that describes the linting problem.",
	);
}

/**
 * A report object that contains the messages reported the linter
 * for a file.
 */
class FileReport {
	/**
	 * The messages reported by the linter for this file.
	 * @type {LintMessage[]}
	 */
	messages = [];

	/**
	 * A rule mapper that maps rule IDs to their metadata.
	 * @type {(string) => RuleDefinition}
	 */
	#ruleMapper;

	/**
	 * The source code object for the file.
	 * @type {SourceCode}
	 */
	#sourceCode;

	/**
	 * The language to use to adjust line and column offsets.
	 * @type {Language}
	 */
	#language;

	/**
	 * Whether to disable fixes for this report.
	 * @type {boolean}
	 */
	#disableFixes;

	/**
	 * Creates a new FileReport instance.
	 * @param {Object} options The options for the file report
	 * @param {(string) => RuleDefinition} options.ruleMapper A rule mapper that maps rule IDs to their metadata.
	 * @param {SourceCode} options.sourceCode The source code object for the file.
	 * @param {Language} options.language The language to use to adjust line and column offsets.
	 * @param {boolean} [options.disableFixes=false] Whether to disable fixes for this report.
	 */
	constructor({ ruleMapper, sourceCode, language, disableFixes = false }) {
		this.#ruleMapper = ruleMapper;
		this.#sourceCode = sourceCode;
		this.#language = language;
		this.#disableFixes = disableFixes;
	}

	/**
	 * Adds a rule-generated message to the report.
	 * @param {string} ruleId The rule ID that reported the problem.
	 * @param {0|1|2} severity The severity of the problem (0 = off, 1 = warning, 2 = error).
	 * @param {...*} args The arguments passed to `context.report()`.
	 * @returns {LintMessage} The created message object.
	 * @throws {TypeError} If the messageId is not found or both message and messageId are provided.
	 * @throws {AssertionError} If the node is not an object or neither a node nor a loc is provided.
	 */
	addRuleMessage(ruleId, severity, ...args) {
		const descriptor = normalizeMultiArgReportCall(...args);
		const ruleDefinition = this.#ruleMapper(ruleId);
		const messages = ruleDefinition?.meta?.messages;

		assertValidNodeInfo(descriptor);

		const computedMessage = computeMessageFromDescriptor(
			descriptor,
			messages,
		);

		validateSuggestions(descriptor.suggest, messages);

		this.messages.push(
			createProblem({
				ruleId,
				severity,
				node: descriptor.node,
				message: interpolate(computedMessage, descriptor.data),
				messageId: descriptor.messageId,
				loc: descriptor.loc
					? normalizeReportLoc(descriptor)
					: this.#sourceCode.getLoc(descriptor.node),
				fix: this.#disableFixes
					? null
					: normalizeFixes(descriptor, this.#sourceCode),
				suggestions: this.#disableFixes
					? []
					: mapSuggestions(descriptor, this.#sourceCode, messages),
				language: this.#language,
			}),
		);

		return this.messages.at(-1);
	}

	/**
	 * Adds an error message to the report. Meant to be called outside of rules.
	 * @param {LintProblem} descriptor The descriptor for the error message.
	 * @returns {LintMessage} The created message object.
	 */
	addError(descriptor) {
		const message = createLintingProblem(descriptor, 2, this.#language);
		this.messages.push(message);
		return message;
	}

	/**
	 * Adds a fatal error message to the report. Meant to be called outside of rules.
	 * @param {LintProblem} descriptor The descriptor for the fatal error message.
	 * @returns {LintMessage} The created message object.
	 */
	addFatal(descriptor) {
		const message = createLintingProblem(descriptor, 2, this.#language);
		message.fatal = true;
		this.messages.push(message);
		return message;
	}

	/**
	 * Adds a warning message to the report. Meant to be called outside of rules.
	 * @param {LintProblem} descriptor The descriptor for the warning message.
	 * @returns {LintMessage} The created message object.
	 */
	addWarning(descriptor) {
		const message = createLintingProblem(descriptor, 1, this.#language);
		this.messages.push(message);
		return message;
	}
}

module.exports = {
	FileReport,
	updateLocationInformation,
};
