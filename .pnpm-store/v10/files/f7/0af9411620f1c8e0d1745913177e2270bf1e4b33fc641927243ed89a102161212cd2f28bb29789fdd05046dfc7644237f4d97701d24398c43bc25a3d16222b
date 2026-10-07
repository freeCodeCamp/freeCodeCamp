import { swapCase } from ".";
var TEST_CASES = [
    ["", ""],
    ["test", "TEST"],
    ["test string", "TEST STRING"],
    ["Test String", "tEST sTRING"],
    ["TestV2", "tESTv2"],
    ["sWaP cAsE", "SwAp CaSe"],
];
describe("swap case", function () {
    var _loop_1 = function (input, result) {
        it(input + " -> " + result, function () {
            expect(swapCase(input)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1];
        _loop_1(input, result);
    }
});
//# sourceMappingURL=index.spec.js.map