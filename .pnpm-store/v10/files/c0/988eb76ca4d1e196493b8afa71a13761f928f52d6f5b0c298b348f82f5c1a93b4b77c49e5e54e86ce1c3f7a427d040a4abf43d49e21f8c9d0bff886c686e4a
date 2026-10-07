"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimatch_1 = __importDefault(require("minimatch"));
const path_1 = __importDefault(require("path"));
const forwardSlash_1 = __importDefault(require("../utils/path/forwardSlash"));
function createIssuePredicateFromIssueMatch(context, match) {
    return (issue) => {
        const matchesOrigin = !match.origin || match.origin === issue.origin;
        const matchesSeverity = !match.severity || match.severity === issue.severity;
        const matchesCode = !match.code || match.code === issue.code;
        const matchesFile = !issue.file ||
            (!!issue.file &&
                (!match.file || minimatch_1.default(forwardSlash_1.default(path_1.default.relative(context, issue.file)), match.file)));
        return matchesOrigin && matchesSeverity && matchesCode && matchesFile;
    };
}
exports.createIssuePredicateFromIssueMatch = createIssuePredicateFromIssueMatch;
