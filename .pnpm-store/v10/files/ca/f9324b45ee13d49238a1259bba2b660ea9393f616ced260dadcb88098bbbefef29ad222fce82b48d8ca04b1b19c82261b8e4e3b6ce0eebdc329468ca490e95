/**
 * @fileoverview A module that filters reported problems based on `eslint-disable` and `eslint-enable` comments
 * @author Teddy Katz
 */

"use strict";

/**
 * Compares the locations of two objects in a source file
 * @param {{line: number, column: number}} itemA The first object
 * @param {{line: number, column: number}} itemB The second object
 * @returns {number} A value less than 1 if itemA appears before itemB in the source file, greater than 1 if
 * itemA appears after itemB in the source file, or 0 if itemA and itemB have the same location.
 */
function compareLocations(itemA, itemB) {
    return itemA.line - itemB.line || itemA.column - itemB.column;
}

/**
 * This is the same as the exported function, except that it
 * doesn't handle disable-line and disable-next-line directives, and it always reports unused
 * disable directives.
 * @param {Object} options options for applying directives. This is the same as the options
 * for the exported function, except that `reportUnusedDisableDirectives` is not supported
 * (this function always reports unused disable directives).
 * @returns {{problems: Problem[], unusedDisableDirectives: Problem[]}} An object with a list
 * of filtered problems and unused eslint-disable directives
 */
function applyDirectives(options) {
    const problems = [];
    let nextDirectiveIndex = 0;
    let currentGlobalDisableDirective = null;
    const disabledRuleMap = new Map();

    // enabledRules is only used when there is a current global disable directive.
    const enabledRules = new Set();
    const usedDisableDirectives = new Set();

    for (const problem of options.problems) {
        while (
            nextDirectiveIndex < options.directives.length &&
            compareLocations(options.directives[nextDirectiveIndex], problem) <= 0
        ) {
            const directive = options.directives[nextDirectiveIndex++];

            switch (directive.type) {
                case "disable":
                    if (directive.ruleId === null) {
                        currentGlobalDisableDirective = directive;
                        disabledRuleMap.clear();
                        enabledRules.clear();
                    } else if (currentGlobalDisableDirective) {
                        enabledRules.delete(directive.ruleId);
                        disabledRuleMap.set(directive.ruleId, directive);
                    } else {
                        disabledRuleMap.set(directive.ruleId, directive);
                    }
                    break;

                case "enable":
                    if (directive.ruleId === null) {
                        currentGlobalDisableDirective = null;
                        disabledRuleMap.clear();
                    } else if (currentGlobalDisableDirective) {
                        enabledRules.add(directive.ruleId);
                        disabledRuleMap.delete(directive.ruleId);
                    } else {
                        disabledRuleMap.delete(directive.ruleId);
                    }
                    break;

                // no default
            }
        }

        if (disabledRuleMap.has(problem.ruleId)) {
            usedDisableDirectives.add(disabledRuleMap.get(problem.ruleId));
        } else if (currentGlobalDisableDirective && !enabledRules.has(problem.ruleId)) {
            usedDisableDirectives.add(currentGlobalDisableDirective);
        } else {
            problems.push(problem);
        }
    }

    const unusedDisableDirectives = options.directives
        .filter(directive => directive.type === "disable" && !usedDisableDirectives.has(directive))
        .map(directive => ({
            ruleId: null,
            message: directive.ruleId
                ? `Unused eslint-disable directive (no problems were reported from '${directive.ruleId}').`
                : "Unused eslint-disable directive (no problems were reported).",
            line: directive.unprocessedDirective.line,
            column: directive.unprocessedDirective.column,
            severity: options.reportUnusedDisableDirectives === "warn" ? 1 : 2,
            nodeType: null
        }));

    return { problems, unusedDisableDirectives };
}

/**
 * Given a list of directive comments (i.e. metadata about eslint-disable and eslint-enable comments) and a list
 * of reported problems, determines which problems should be reported.
 * @param {Object} options Information about directives and problems
 * @param {{
 *      type: ("disable"|"enable"|"disable-line"|"disable-next-line"),
 *      ruleId: (string|null),
 *      line: number,
 *      column: number
 * }} options.directives Directive comments found in the file, with one-based columns.
 * Two directive comments can only have the same location if they also have the same type (e.g. a single eslint-disable
 * comment for two different rules is represented as two directives).
 * @param {{ruleId: (string|null), line: number, column: number}[]} options.problems
 * A list of problems reported by rules, sorted by increasing location in the file, with one-based columns.
 * @param {"off" | "warn" | "error"} options.reportUnusedDisableDirectives If `"warn"` or `"error"`, adds additional problems for unused directives
 * @returns {{ruleId: (string|null), line: number, column: number}[]}
 * A list of reported problems that were not disabled by the directive comments.
 */
module.exports = ({ directives, problems, reportUnusedDisableDirectives = "off" }) => {
    const blockDirectives = directives
        .filter(directive => directive.type === "disable" || directive.type === "enable")
        .map(directive => Object.assign({}, directive, { unprocessedDirective: directive }))
        .sort(compareLocations);

    /**
     * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
     * TODO(stephenwade): Replace this with array.flatMap when we drop support for Node v10
     * @param {any[]} array The array to process
     * @param {Function} fn The function to use
     * @returns {any[]} The result array
     */
    function flatMap(array, fn) {
        const mapped = array.map(fn);
        const flattened = [].concat(...mapped);

        return flattened;
    }

    const lineDirectives = flatMap(directives, directive => {
        switch (directive.type) {
            case "disable":
            case "enable":
                return [];

            case "disable-line":
                return [
                    { type: "disable", line: directive.line, column: 1, ruleId: directive.ruleId, unprocessedDirective: directive },
                    { type: "enable", line: directive.line + 1, column: 0, ruleId: directive.ruleId, unprocessedDirective: directive }
                ];

            case "disable-next-line":
                return [
                    { type: "disable", line: directive.line + 1, column: 1, ruleId: directive.ruleId, unprocessedDirective: directive },
                    { type: "enable", line: directive.line + 2, column: 0, ruleId: directive.ruleId, unprocessedDirective: directive }
                ];

            default:
                throw new TypeError(`Unrecognized directive type '${directive.type}'`);
        }
    }).sort(compareLocations);

    const blockDirectivesResult = applyDirectives({
        problems,
        directives: blockDirectives,
        reportUnusedDisableDirectives
    });
    const lineDirectivesResult = applyDirectives({
        problems: blockDirectivesResult.problems,
        directives: lineDirectives,
        reportUnusedDisableDirectives
    });

    return reportUnusedDisableDirectives !== "off"
        ? lineDirectivesResult.problems
            .concat(blockDirectivesResult.unusedDisableDirectives)
            .concat(lineDirectivesResult.unusedDisableDirectives)
            .sort(compareLocations)
        : lineDirectivesResult.problems;
};
