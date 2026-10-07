"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var TEST_CASES = [
    ["", ""],
    ["test", "test"],
    ["test string", "test/string"],
    ["Test String", "test/string"],
    ["TestV2", "test/v2"],
    ["version 1.2.10", "version/1/2/10"],
    ["version 1.21.0", "version/1/21/0"],
];
describe("path case", function () {
    var _loop_1 = function (input, result) {
        it(input + " -> " + result, function () {
            expect(_1.pathCase(input)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1];
        _loop_1(input, result);
    }
});
//# sourceMappingURL=index.spec.js.map