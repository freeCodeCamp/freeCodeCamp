"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareFunc = compareFunc;
const CompareFunctionArbitraryBuilder_1 = require("./_internals/builders/CompareFunctionArbitraryBuilder");
const safeObjectAssign = Object.assign;
function compareFunc() {
    return (0, CompareFunctionArbitraryBuilder_1.buildCompareFunctionArbitrary)(safeObjectAssign((hA, hB) => hA - hB, {
        toString() {
            return '(hA, hB) => hA - hB';
        },
    }));
}
