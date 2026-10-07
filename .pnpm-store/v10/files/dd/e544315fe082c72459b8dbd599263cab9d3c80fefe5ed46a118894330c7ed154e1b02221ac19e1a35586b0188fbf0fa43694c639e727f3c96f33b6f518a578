"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var TEST_CASES = [
    ["", ""],
    ["test", "test"],
    ["test string", "testString"],
    ["Test String", "testString"],
    ["TestV2", "testV2"],
    ["_foo_bar_", "fooBar"],
    ["version 1.2.10", "version_1_2_10"],
    ["version 1.21.0", "version_1_21_0"],
    ["version 1.2.10", "version1210", { transform: _1.camelCaseTransformMerge }],
];
describe("camel case", function () {
    var _loop_1 = function (input, result, options) {
        it(input + " -> " + result, function () {
            expect(_1.camelCase(input, options)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1], options = _a[2];
        _loop_1(input, result, options);
    }
});
//# sourceMappingURL=index.spec.js.map