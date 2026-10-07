/**
 * @fileoverview A helper that translates context.report() calls from the rule API into generic problem objects
 * @author Teddy Katz
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert");
const ruleFixer = require("./rule-fixer");
const interpolate = require("./interpolate");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

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
 * Information about the report
 * @typedef {Object} ReportInfo
 * @property {string} ruleId
 * @property {(0|1|2)} severity
 * @property {(string|undefined)} message
 * @property {(string|undefined)} [messageId]
 * @property {number} line
 * @property {number} column
 * @property {(number|undefined)} [endLine]
 * @property {(number|undefined)} [endColumn]
 * @property {(string|null)} nodeType
 * @property {string} source
 * @property {({text: string, range: (number[]|null)}|null)} [fix]
 * @property {Array<{text: string, range: (number[]|null)}|null>} [suggestions]
 */

//------------------------------------------------------------------------------
// Module Definition
//------------------------------------------------------------------------------


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
            fix: args[3]
        };
    }

    // Otherwise, the arguments are interpreted as [node, loc, message, data, fix].
    return {
        node: args[0],
        loc: args[1],
        message: args[2],
        data: args[3],
        fix: args[4]
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
        assert(descriptor.loc, "Node must be provided when reporting error if location is not provided");
    }
}

/**
 * Normalizes a MessageDescriptor to always have a `loc` with `start` and `end` properties
 * @param {MessageDescriptor} descriptor A descriptor for the report from a rule.
 * @returns {{start: Location, end: (Location|null)}} An updated location that infers the `start` and `end` properties
 * from the `node` of the original descriptor, or infers the `start` from the `loc` of the original descriptor.
 */
function normalizeReportLoc(descriptor) {
    if (descriptor.loc) {
        if (descriptor.loc.start) {
            return descriptor.loc;
        }
        return { start: descriptor.loc, end: null };
    }
    return descriptor.node.loc;
}

/**
 * Check that a fix has a valid range.
 * @param {Fix|null} fix The fix to validate.
 * @returns {void}
 */
function assertValidFix(fix) {
    if (fix) {
        assert(fix.range && typeof fix.range[0] === "number" && typeof fix.range[1] === "number", `Fix has invalid range: ${JSON.stringify(fix, null, 2)}`);
    }
}

/**
 * Compares items in a fixes array by range.
 * @param {Fix} a The first message.
 * @param {Fix} b The second message.
 * @returns {int} -1 if a comes before b, 1 if a comes after b, 0 if equal.
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
        return fixes[0];
    }

    fixes.sort(compareFixesByRange);

    const originalText = sourceCode.text;
    const start = fixes[0].range[0];
    const end = fixes[fixes.length - 1].range[1];
    let text = "";
    let lastPos = Number.MIN_SAFE_INTEGER;

    for (const fix of fixes) {
        assert(fix.range[0] >= lastPos, "Fix objects must not be overlapped in a report.");

        if (fix.range[0] >= 0) {
            text += originalText.slice(Math.max(0, start, lastPos), fix.range[0]);
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

    // @type {null | Fix | Fix[] | IterableIterator<Fix>}
    const fix = descriptor.fix(ruleFixer);

    // Merge to one.
    if (fix && Symbol.iterator in fix) {
        return mergeFixes(Array.from(fix), sourceCode);
    }

    assertValidFix(fix);
    return fix;
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

    return descriptor.suggest
        .map(suggestInfo => {
            const computedDesc = suggestInfo.desc || messages[suggestInfo.messageId];

            return {
                ...suggestInfo,
                desc: interpolate(computedDesc, suggestInfo.data),
                fix: normalizeFixes(suggestInfo, sourceCode)
            };
        })

        // Remove suggestions that didn't provide a fix
        .filter(({ fix }) => fix);
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
 * @returns {function(...args): ReportInfo} Function that returns information about the report
 */
function createProblem(options) {
    const problem = {
        ruleId: options.ruleId,
        severity: options.severity,
        message: options.message,
        line: options.loc.start.line,
        column: options.loc.start.column + 1,
        nodeType: options.node && options.node.type || null
    };

    /*
     * If this isn’t in the conditional, some of the tests fail
     * because `messageId` is present in the problem object
     */
    if (options.messageId) {
        problem.messageId = options.messageId;
    }

    if (options.loc.end) {
        problem.endLine = options.loc.end.line;
        problem.endColumn = options.loc.end.column + 1;
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
                    throw new TypeError(`context.report() called with a suggest option with a messageId '${messageId}', but no messages were present in the rule metadata.`);
                }

                if (!messages[messageId]) {
                    throw new TypeError(`context.report() called with a suggest option with a messageId '${messageId}' which is not present in the 'messages' config: ${JSON.stringify(messages, null, 2)}`);
                }

                if (suggestion.desc) {
                    throw new TypeError("context.report() called with a suggest option that defines both a 'messageId' and an 'desc'. Please only pass one.");
                }
            } else if (!suggestion.desc) {
                throw new TypeError("context.report() called with a suggest option that doesn't have either a `desc` or `messageId`");
            }

            if (typeof suggestion.fix !== "function") {
                throw new TypeError(`context.report() called with a suggest option without a fix function. See: ${suggestion}`);
            }
        });
    }
}

/**
 * Returns a function that converts the arguments of a `context.report` call from a rule into a reported
 * problem for the Node.js API.
 * @param {{ruleId: string, severity: number, sourceCode: SourceCode, messageIds: Object, disableFixes: boolean}} metadata Metadata for the reported problem
 * @param {SourceCode} sourceCode The `SourceCode` instance for the text being linted
 * @returns {function(...args): ReportInfo} Function that returns information about the report
 */

module.exports = function createReportTranslator(metadata) {

    /*
     * `createReportTranslator` gets called once per enabled rule per file. It needs to be very performant.
     * The report translator itself (i.e. the function that `createReportTranslator` returns) gets
     * called every time a rule reports a problem, which happens much less frequently (usually, the vast
     * majority of rules don't report any problems for a given file).
     */
    return (...args) => {
        const descriptor = normalizeMultiArgReportCall(...args);
        const messages = metadata.messageIds;

        assertValidNodeInfo(descriptor);

        let computedMessage;

        if (descriptor.messageId) {
            if (!messages) {
                throw new TypeError("context.report() called with a messageId, but no messages were present in the rule metadata.");
            }
            const id = descriptor.messageId;

            if (descriptor.message) {
                throw new TypeError("context.report() called with a message and a messageId. Please only pass one.");
            }
            if (!messages || !Object.prototype.hasOwnProperty.call(messages, id)) {
                throw new TypeError(`context.report() called with a messageId of '${id}' which is not present in the 'messages' config: ${JSON.stringify(messages, null, 2)}`);
            }
            computedMessage = messages[id];
        } else if (descriptor.message) {
            computedMessage = descriptor.message;
        } else {
            throw new TypeError("Missing `message` property in report() call; add a message that describes the linting problem.");
        }

        validateSuggestions(descriptor.suggest, messages);

        return createProblem({
            ruleId: metadata.ruleId,
            severity: metadata.severity,
            node: descriptor.node,
            message: interpolate(computedMessage, descriptor.data),
            messageId: descriptor.messageId,
            loc: normalizeReportLoc(descriptor),
            fix: metadata.disableFixes ? null : normalizeFixes(descriptor, metadata.sourceCode),
            suggestions: metadata.disableFixes ? [] : mapSuggestions(descriptor, metadata.sourceCode, messages)
        });
    };
};
