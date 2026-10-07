"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const issue_1 = require("../issue");
const forwardSlash_1 = __importDefault(require("../utils/path/forwardSlash"));
function createWebpackFormatter(formatter) {
    // mimics webpack error formatter
    return function webpackFormatter(issue) {
        const color = issue.severity === 'warning' ? chalk_1.default.yellow.bold : chalk_1.default.red.bold;
        const severity = issue.severity.toUpperCase();
        if (issue.file) {
            let location = forwardSlash_1.default(path_1.default.relative(process.cwd(), issue.file));
            if (issue.location) {
                location += `:${issue_1.formatIssueLocation(issue.location)}`;
            }
            return [color(`${severity} in ${location}`), formatter(issue), ''].join(os_1.default.EOL);
        }
        else {
            return [color(`${severity} in `) + formatter(issue), ''].join(os_1.default.EOL);
        }
    };
}
exports.createWebpackFormatter = createWebpackFormatter;
