import { sentenceCase } from ".";
var TEST_CASES = [
    ["", ""],
    ["test", "Test"],
    ["test string", "Test string"],
    ["Test String", "Test string"],
    ["TestV2", "Test v2"],
    ["version 1.2.10", "Version 1 2 10"],
    ["version 1.21.0", "Version 1 21 0"],
];
describe("sentence case", function () {
    var _loop_1 = function (input, result) {
        it(input + " -> " + result, function () {
            expect(sentenceCase(input)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1];
        _loop_1(input, result);
    }
});
//# sourceMappingURL=index.spec.js.map