"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createIssueFromEsLintMessage(filePath, message) {
    let location;
    if (message.line) {
        location = {
            start: {
                line: message.line,
                column: message.column,
            },
            end: {
                line: message.endLine || message.line,
                column: message.endColumn || message.column,
            },
        };
    }
    return {
        origin: 'eslint',
        code: message.ruleId ? String(message.ruleId) : '[unknown]',
        severity: message.severity === 1 ? 'warning' : 'error',
        message: message.message,
        file: filePath,
        location,
    };
}
function createIssuesFromEsLintResults(results) {
    return results.reduce((messages, result) => [
        ...messages,
        ...result.messages.map((message) => createIssueFromEsLintMessage(result.filePath, message)),
    ], []);
}
exports.createIssuesFromEsLintResults = createIssuesFromEsLintResults;
