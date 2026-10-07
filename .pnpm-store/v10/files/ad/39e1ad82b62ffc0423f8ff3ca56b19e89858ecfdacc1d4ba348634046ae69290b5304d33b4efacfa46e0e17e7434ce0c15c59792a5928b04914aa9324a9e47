"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IssueMatch_1 = require("./IssueMatch");
const IssuePredicate_1 = require("./IssuePredicate");
function createIssuePredicateFromOption(context, option) {
    if (Array.isArray(option)) {
        return IssuePredicate_1.composeIssuePredicates(option.map((option) => typeof option === 'function' ? option : IssueMatch_1.createIssuePredicateFromIssueMatch(context, option)));
    }
    return typeof option === 'function'
        ? option
        : IssueMatch_1.createIssuePredicateFromIssueMatch(context, option);
}
function createIssueConfiguration(compiler, options) {
    const context = compiler.options.context || process.cwd();
    if (!options) {
        options = {};
    }
    const include = options.include
        ? createIssuePredicateFromOption(context, options.include)
        : IssuePredicate_1.createTrivialIssuePredicate(true);
    const exclude = options.exclude
        ? createIssuePredicateFromOption(context, options.exclude)
        : IssuePredicate_1.createTrivialIssuePredicate(false);
    return {
        predicate: (issue) => include(issue) && !exclude(issue),
    };
}
exports.createIssueConfiguration = createIssueConfiguration;
