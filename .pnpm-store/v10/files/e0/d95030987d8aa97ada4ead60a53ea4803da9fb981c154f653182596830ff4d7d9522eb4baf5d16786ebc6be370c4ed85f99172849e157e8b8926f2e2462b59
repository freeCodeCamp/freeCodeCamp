"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareIssuePositions(positionA, positionB) {
    if (positionA === positionB) {
        return 0;
    }
    if (!positionA) {
        return -1;
    }
    if (!positionB) {
        return 1;
    }
    return (Math.sign(positionA.line - positionB.line) || Math.sign(positionA.column - positionB.column));
}
exports.compareIssuePositions = compareIssuePositions;
