import { pascalCase, pascalCaseTransformMerge } from ".";
var TEST_CASES = [
    ["", ""],
    ["test", "Test"],
    ["test string", "TestString"],
    ["Test String", "TestString"],
    ["TestV2", "TestV2"],
    ["version 1.2.10", "Version_1_2_10"],
    ["version 1.21.0", "Version_1_21_0"],
    ["version 1.21.0", "Version1210", { transform: pascalCaseTransformMerge }],
];
describe("pascal case", function () {
    var _loop_1 = function (input, result, options) {
        it(input + " -> " + result, function () {
            expect(pascalCase(input, options)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1], options = _a[2];
        _loop_1(input, result, options);
    }
});
//# sourceMappingURL=index.spec.js.map