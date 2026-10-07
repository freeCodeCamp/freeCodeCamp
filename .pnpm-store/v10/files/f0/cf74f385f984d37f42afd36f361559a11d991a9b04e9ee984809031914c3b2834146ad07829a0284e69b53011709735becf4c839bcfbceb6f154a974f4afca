"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createTrivialIssuePredicate(result) {
    return () => result;
}
exports.createTrivialIssuePredicate = createTrivialIssuePredicate;
function composeIssuePredicates(predicates) {
    return (issue) => predicates.some((predicate) => predicate(issue));
}
exports.composeIssuePredicates = composeIssuePredicates;
