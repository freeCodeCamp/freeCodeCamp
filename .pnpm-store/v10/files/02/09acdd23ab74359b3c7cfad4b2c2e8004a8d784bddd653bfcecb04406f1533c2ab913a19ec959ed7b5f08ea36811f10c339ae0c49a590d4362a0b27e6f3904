"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const IssueLocation_1 = require("./IssueLocation");
const forwardSlash_1 = __importDefault(require("../utils/path/forwardSlash"));
class IssueWebpackError extends Error {
    constructor(message, issue) {
        super(message);
        this.issue = issue;
        this.hideStack = true;
        // to display issue location using `loc` property, webpack requires `error.module` which
        // should be a NormalModule instance.
        // to avoid such a dependency, we do a workaround - error.file will contain formatted location instead
        if (issue.file) {
            this.file = forwardSlash_1.default(path_1.relative(process.cwd(), issue.file));
            if (issue.location) {
                this.file += `:${IssueLocation_1.formatIssueLocation(issue.location)}`;
            }
        }
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.IssueWebpackError = IssueWebpackError;
