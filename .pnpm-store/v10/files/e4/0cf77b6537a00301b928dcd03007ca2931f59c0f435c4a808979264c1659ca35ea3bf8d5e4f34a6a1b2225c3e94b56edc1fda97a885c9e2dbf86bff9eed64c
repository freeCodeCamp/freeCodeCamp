"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(require("os"));
const issue_1 = require("../../issue");
function createIssueFromTsDiagnostic(typescript, diagnostic) {
    let file;
    let location;
    if (diagnostic.file) {
        file = diagnostic.file.fileName;
        if (diagnostic.start && diagnostic.length) {
            const { line: startLine, character: startCharacter, } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
            const { line: endLine, character: endCharacter, } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start + diagnostic.length);
            location = {
                start: {
                    line: startLine + 1,
                    column: startCharacter + 1,
                },
                end: {
                    line: endLine + 1,
                    column: endCharacter + 1,
                },
            };
        }
    }
    return {
        origin: 'typescript',
        code: 'TS' + String(diagnostic.code),
        // we don't handle Suggestion and Message diagnostics
        severity: diagnostic.category === 0 ? 'warning' : 'error',
        message: typescript.flattenDiagnosticMessageText(diagnostic.messageText, os.EOL),
        file,
        location,
    };
}
function createIssuesFromTsDiagnostics(typescript, diagnostics) {
    return issue_1.deduplicateAndSortIssues(diagnostics.map((diagnostic) => createIssueFromTsDiagnostic(typescript, diagnostic)));
}
exports.createIssuesFromTsDiagnostics = createIssuesFromTsDiagnostics;
