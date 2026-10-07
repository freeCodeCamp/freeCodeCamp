"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const utils_1 = require("../utils");
const rulesDir = __dirname;
const excludedFiles = ['index'];
exports.default = (0, fs_1.readdirSync)(rulesDir)
    .map((rule) => (0, path_1.parse)(rule).name)
    .filter((ruleName) => !excludedFiles.includes(ruleName))
    .reduce((allRules, ruleName) => (Object.assign(Object.assign({}, allRules), { [ruleName]: (0, utils_1.importDefault)((0, path_1.join)(rulesDir, ruleName)) })), {});
