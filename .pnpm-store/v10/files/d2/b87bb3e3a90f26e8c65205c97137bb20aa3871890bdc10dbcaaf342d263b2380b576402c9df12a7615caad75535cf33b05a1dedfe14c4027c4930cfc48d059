"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IssuePosition_1 = require("./IssuePosition");
function compareIssueLocations(locationA, locationB) {
    if (locationA === locationB) {
        return 0;
    }
    if (!locationA) {
        return -1;
    }
    if (!locationB) {
        return 1;
    }
    return (IssuePosition_1.compareIssuePositions(locationA.start, locationB.start) ||
        IssuePosition_1.compareIssuePositions(locationA.end, locationB.end));
}
exports.compareIssueLocations = compareIssueLocations;
function formatIssueLocation(location) {
    return `${location.start.line}:${location.start.column}`;
}
exports.formatIssueLocation = formatIssueLocation;
