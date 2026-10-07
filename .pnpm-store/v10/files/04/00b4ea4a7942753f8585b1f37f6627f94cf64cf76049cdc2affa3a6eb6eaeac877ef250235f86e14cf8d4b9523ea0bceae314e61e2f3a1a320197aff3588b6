"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalCase = exports.capitalCaseTransform = void 0;
var tslib_1 = require("tslib");
var no_case_1 = require("no-case");
var upper_case_first_1 = require("upper-case-first");
function capitalCaseTransform(input) {
    return upper_case_first_1.upperCaseFirst(input.toLowerCase());
}
exports.capitalCaseTransform = capitalCaseTransform;
function capitalCase(input, options) {
    if (options === void 0) { options = {}; }
    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: capitalCaseTransform }, options));
}
exports.capitalCase = capitalCase;
//# sourceMappingURL=index.js.map