"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLines = void 0;
function getLines(contents, range) {
    if (!range) {
        return '';
    }
    const lines = contents.split('\n');
    const editableLines = range[1] <= range[0] ? [] : lines.slice(range[0], range[1] - 1);
    return editableLines.join('\n');
}
exports.getLines = getLines;
