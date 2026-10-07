"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var TEST_CASES = [
    ["", ""],
    ["test", "test"],
    ["TEST", "test"],
    ["test string", "test string"],
    ["TEST STRING", "test string"],
];
var LOCALE_TEST_CASES = [
    ["STRING", "strıng", "tr"],
];
describe("lower case", function () {
    var _loop_1 = function (input, result) {
        it(input + " -> " + result, function () {
            expect(_1.lowerCase(input)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1];
        _loop_1(input, result);
    }
});
describe("locale lower case", function () {
    var _loop_2 = function (input, result, locale) {
        it(locale + ": " + input + " -> " + result, function () {
            expect(_1.localeLowerCase(input, locale)).toEqual(result);
        });
    };
    for (var _i = 0, LOCALE_TEST_CASES_1 = LOCALE_TEST_CASES; _i < LOCALE_TEST_CASES_1.length; _i++) {
        var _a = LOCALE_TEST_CASES_1[_i], input = _a[0], result = _a[1], locale = _a[2];
        _loop_2(input, result, locale);
    }
});
//# sourceMappingURL=index.spec.js.map