"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
/* Since strings are non-deterministic, we test string length to ensure integrity */
var TEST_CASES = [
    ["", 0],
    ["test", 4],
    ["test string", 11],
    ["Test String", 11],
    ["TestV2", 6],
    ["rAnDoM cAsE", 11],
];
describe("random case", function () {
    var _loop_1 = function (input, length) {
        it(input + " -> " + length, function () {
            expect(_1.spongeCase(input)).toHaveLength(length);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], length = _a[1];
        _loop_1(input, length);
    }
});
//# sourceMappingURL=index.spec.js.map