"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const utils_1 = require("../utils");
const configsDir = __dirname;
const getConfigForFramework = (framework) => (0, utils_1.importDefault)((0, path_1.join)(configsDir, framework));
exports.default = utils_1.SUPPORTED_TESTING_FRAMEWORKS.reduce((allConfigs, framework) => (Object.assign(Object.assign({}, allConfigs), { [framework]: getConfigForFramework(framework) })), {});
