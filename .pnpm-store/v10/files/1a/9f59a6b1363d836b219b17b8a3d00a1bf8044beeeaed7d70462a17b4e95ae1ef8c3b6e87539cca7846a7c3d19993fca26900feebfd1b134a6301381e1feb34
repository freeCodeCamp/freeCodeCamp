"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var TEST_CASES = [
    ["", ""],
    ["test", "TEST"],
    ["test string", "TEST_STRING"],
    ["Test String", "TEST_STRING"],
    ["dot.case", "DOT_CASE"],
    ["path/case", "PATH_CASE"],
    ["TestV2", "TEST_V2"],
    ["version 1.2.10", "VERSION_1_2_10"],
    ["version 1.21.0", "VERSION_1_21_0"],
];
describe("constant case", function () {
    var _loop_1 = function (input, result) {
        it(input + " -> " + result, function () {
            expect(_1.constantCase(input)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1];
        _loop_1(input, result);
    }
});
//# sourceMappingURL=index.spec.js.map