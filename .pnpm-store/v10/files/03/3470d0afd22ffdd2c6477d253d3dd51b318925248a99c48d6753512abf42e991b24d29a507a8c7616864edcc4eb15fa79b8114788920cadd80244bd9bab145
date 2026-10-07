import { __assign } from "tslib";
import { noCase } from "no-case";
import { upperCaseFirst } from "upper-case-first";
export function sentenceCaseTransform(input, index) {
    var result = input.toLowerCase();
    if (index === 0)
        return upperCaseFirst(result);
    return result;
}
export function sentenceCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: " ", transform: sentenceCaseTransform }, options));
}
//# sourceMappingURL=index.js.map