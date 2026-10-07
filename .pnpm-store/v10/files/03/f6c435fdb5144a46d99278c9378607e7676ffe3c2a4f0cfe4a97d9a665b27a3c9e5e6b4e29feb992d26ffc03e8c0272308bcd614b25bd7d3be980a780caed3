import { __assign } from "tslib";
import { noCase } from "no-case";
import { upperCaseFirst } from "upper-case-first";
export function capitalCaseTransform(input) {
    return upperCaseFirst(input.toLowerCase());
}
export function capitalCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: " ", transform: capitalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map