"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IssueSeverity_1 = require("./IssueSeverity");
const IssueLocation_1 = require("./IssueLocation");
function isIssue(value) {
    return (!!value &&
        typeof value === 'object' &&
        !!value.origin &&
        IssueSeverity_1.isIssueSeverity(value.severity) &&
        !!value.code &&
        !!value.message);
}
exports.isIssue = isIssue;
function compareStrings(stringA, stringB) {
    if (stringA === stringB) {
        return 0;
    }
    if (stringA === undefined || stringA === null) {
        return -1;
    }
    if (stringB === undefined || stringB === null) {
        return 1;
    }
    return stringA.toString().localeCompare(stringB.toString());
}
function compareIssues(issueA, issueB) {
    return (IssueSeverity_1.compareIssueSeverities(issueA.severity, issueB.severity) ||
        compareStrings(issueA.origin, issueB.origin) ||
        compareStrings(issueA.file, issueB.file) ||
        IssueLocation_1.compareIssueLocations(issueA.location, issueB.location) ||
        compareStrings(issueA.code, issueB.code) ||
        compareStrings(issueA.message, issueB.message) ||
        0 /* EqualTo */);
}
function equalsIssues(issueA, issueB) {
    return compareIssues(issueA, issueB) === 0;
}
function deduplicateAndSortIssues(issues) {
    const sortedIssues = issues.filter(isIssue).sort(compareIssues);
    return sortedIssues.filter((issue, index) => index === 0 || !equalsIssues(issue, sortedIssues[index - 1]));
}
exports.deduplicateAndSortIssues = deduplicateAndSortIssues;
