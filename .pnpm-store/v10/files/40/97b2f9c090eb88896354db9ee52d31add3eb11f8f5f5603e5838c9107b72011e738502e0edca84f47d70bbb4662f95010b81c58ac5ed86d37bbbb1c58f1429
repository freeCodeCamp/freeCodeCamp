"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestingLibraryRule = void 0;
const utils_1 = require("@typescript-eslint/utils");
const utils_2 = require("../utils");
const detect_testing_library_utils_1 = require("./detect-testing-library-utils");
function createTestingLibraryRule(_a) {
    var { create, detectionOptions = {}, meta } = _a, remainingConfig = __rest(_a, ["create", "detectionOptions", "meta"]);
    return utils_1.ESLintUtils.RuleCreator(utils_2.getDocsUrl)(Object.assign(Object.assign({}, remainingConfig), { create: (0, detect_testing_library_utils_1.detectTestingLibraryUtils)(create, detectionOptions), meta: Object.assign(Object.assign({}, meta), { docs: Object.assign(Object.assign({}, meta.docs), { recommended: false }) }) }));
}
exports.createTestingLibraryRule = createTestingLibraryRule;
