"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configLoader = exports.loadConfig = void 0;
var TsConfigLoader2 = require("./tsconfig-loader");
var path = require("path");
var options_1 = require("./options");
function loadConfig(cwd) {
    if (cwd === void 0) { cwd = options_1.options.cwd; }
    return configLoader({ cwd: cwd });
}
exports.loadConfig = loadConfig;
function configLoader(_a) {
    var cwd = _a.cwd, explicitParams = _a.explicitParams, _b = _a.tsConfigLoader, tsConfigLoader = _b === void 0 ? TsConfigLoader2.tsConfigLoader : _b;
    if (explicitParams) {
        // tslint:disable-next-line:no-shadowed-variable
        var absoluteBaseUrl_1 = path.isAbsolute(explicitParams.baseUrl)
            ? explicitParams.baseUrl
            : path.join(cwd, explicitParams.baseUrl);
        return {
            resultType: "success",
            configFileAbsolutePath: "",
            baseUrl: explicitParams.baseUrl,
            absoluteBaseUrl: absoluteBaseUrl_1,
            paths: explicitParams.paths,
            mainFields: explicitParams.mainFields,
            addMatchAll: explicitParams.addMatchAll,
        };
    }
    // Load tsconfig and create path matching function
    var loadResult = tsConfigLoader({
        cwd: cwd,
        getEnv: function (key) { return process.env[key]; },
    });
    if (!loadResult.tsConfigPath) {
        return {
            resultType: "failed",
            message: "Couldn't find tsconfig.json",
        };
    }
    if (!loadResult.baseUrl) {
        return {
            resultType: "failed",
            message: "Missing baseUrl in compilerOptions",
        };
    }
    var tsConfigDir = path.dirname(loadResult.tsConfigPath);
    var absoluteBaseUrl = path.join(tsConfigDir, loadResult.baseUrl);
    return {
        resultType: "success",
        configFileAbsolutePath: loadResult.tsConfigPath,
        baseUrl: loadResult.baseUrl,
        absoluteBaseUrl: absoluteBaseUrl,
        paths: loadResult.paths || {},
    };
}
exports.configLoader = configLoader;
//# sourceMappingURL=config-loader.js.map