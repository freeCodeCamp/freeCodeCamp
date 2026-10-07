"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var TEST_CASES = [
    ["", false],
    ["test", false],
    ["TEST", true],
    ["Test", false],
    ["123", false],
    ["CONSTANT_CASE", true],
];
describe("is upper case", function () {
    var _loop_1 = function (input, result) {
        it(input + " -> " + result, function () {
            expect(_1.isUpperCase(input)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1];
        _loop_1(input, result);
    }
});
//# sourceMappingURL=index.spec.js.map