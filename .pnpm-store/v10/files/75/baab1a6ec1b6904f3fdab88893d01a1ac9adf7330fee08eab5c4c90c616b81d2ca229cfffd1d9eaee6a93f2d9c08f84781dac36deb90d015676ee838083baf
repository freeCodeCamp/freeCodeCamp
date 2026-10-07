"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceCase = exports.sentenceCaseTransform = void 0;
var tslib_1 = require("tslib");
var no_case_1 = require("no-case");
var upper_case_first_1 = require("upper-case-first");
function sentenceCaseTransform(input, index) {
    var result = input.toLowerCase();
    if (index === 0)
        return upper_case_first_1.upperCaseFirst(result);
    return result;
}
exports.sentenceCaseTransform = sentenceCaseTransform;
function sentenceCase(input, options) {
    if (options === void 0) { options = {}; }
    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: sentenceCaseTransform }, options));
}
exports.sentenceCase = sentenceCase;
//# sourceMappingURL=index.js.map