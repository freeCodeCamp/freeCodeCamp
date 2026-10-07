"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTsconfig = exports.walkForTsConfig = exports.tsConfigLoader = void 0;
var path = require("path");
var fs = require("fs");
// tslint:disable:no-require-imports
var JSON5 = require("json5");
var StripBom = require("strip-bom");
function tsConfigLoader(_a) {
    var getEnv = _a.getEnv, cwd = _a.cwd, _b = _a.loadSync, loadSync = _b === void 0 ? loadSyncDefault : _b;
    var TS_NODE_PROJECT = getEnv("TS_NODE_PROJECT");
    var TS_NODE_BASEURL = getEnv("TS_NODE_BASEURL");
    // tsconfig.loadSync handles if TS_NODE_PROJECT is a file or directory
    // and also overrides baseURL if TS_NODE_BASEURL is available.
    var loadResult = loadSync(cwd, TS_NODE_PROJECT, TS_NODE_BASEURL);
    return loadResult;
}
exports.tsConfigLoader = tsConfigLoader;
function loadSyncDefault(cwd, filename, baseUrl) {
    // Tsconfig.loadSync uses path.resolve. This is why we can use an absolute path as filename
    var configPath = resolveConfigPath(cwd, filename);
    if (!configPath) {
        return {
            tsConfigPath: undefined,
            baseUrl: undefined,
            paths: undefined,
        };
    }
    var config = loadTsconfig(configPath);
    return {
        tsConfigPath: configPath,
        baseUrl: baseUrl ||
            (config && config.compilerOptions && config.compilerOptions.baseUrl),
        paths: config && config.compilerOptions && config.compilerOptions.paths,
    };
}
function resolveConfigPath(cwd, filename) {
    if (filename) {
        var absolutePath = fs.lstatSync(filename).isDirectory()
            ? path.resolve(filename, "./tsconfig.json")
            : path.resolve(cwd, filename);
        return absolutePath;
    }
    if (fs.statSync(cwd).isFile()) {
        return path.resolve(cwd);
    }
    var configAbsolutePath = walkForTsConfig(cwd);
    return configAbsolutePath ? path.resolve(configAbsolutePath) : undefined;
}
function walkForTsConfig(directory, existsSync) {
    if (existsSync === void 0) { existsSync = fs.existsSync; }
    var configPath = path.join(directory, "./tsconfig.json");
    if (existsSync(configPath)) {
        return configPath;
    }
    var parentDirectory = path.join(directory, "../");
    // If we reached the top
    if (directory === parentDirectory) {
        return undefined;
    }
    return walkForTsConfig(parentDirectory, existsSync);
}
exports.walkForTsConfig = walkForTsConfig;
function loadTsconfig(configFilePath, existsSync, readFileSync) {
    if (existsSync === void 0) { existsSync = fs.existsSync; }
    if (readFileSync === void 0) { readFileSync = function (filename) {
        return fs.readFileSync(filename, "utf8");
    }; }
    if (!existsSync(configFilePath)) {
        return undefined;
    }
    var configString = readFileSync(configFilePath);
    var cleanedJson = StripBom(configString);
    var config;
    try {
        config = JSON5.parse(cleanedJson);
    }
    catch (e) {
        throw new Error("".concat(configFilePath, " is malformed ").concat(e.message));
    }
    var extendedConfig = config.extends;
    if (extendedConfig) {
        var base = void 0;
        if (Array.isArray(extendedConfig)) {
            base = extendedConfig.reduce(function (currBase, extendedConfigElement) {
                return mergeTsconfigs(currBase, loadTsconfigFromExtends(configFilePath, extendedConfigElement, existsSync, readFileSync));
            }, {});
        }
        else {
            base = loadTsconfigFromExtends(configFilePath, extendedConfig, existsSync, readFileSync);
        }
        return mergeTsconfigs(base, config);
    }
    return config;
}
exports.loadTsconfig = loadTsconfig;
/**
 * Intended to be called only from loadTsconfig.
 * Parameters don't have defaults because they should use the same as loadTsconfig.
 */
function loadTsconfigFromExtends(configFilePath, extendedConfigValue, 
// eslint-disable-next-line no-shadow
existsSync, readFileSync) {
    var _a;
    if (typeof extendedConfigValue === "string" &&
        extendedConfigValue.indexOf(".json") === -1) {
        extendedConfigValue += ".json";
    }
    var currentDir = path.dirname(configFilePath);
    var extendedConfigPath = path.join(currentDir, extendedConfigValue);
    if (extendedConfigValue.indexOf("/") !== -1 &&
        extendedConfigValue.indexOf(".") !== -1 &&
        !existsSync(extendedConfigPath)) {
        extendedConfigPath = path.join(currentDir, "node_modules", extendedConfigValue);
    }
    var config = loadTsconfig(extendedConfigPath, existsSync, readFileSync) || {};
    // baseUrl should be interpreted as relative to extendedConfigPath,
    // but we need to update it so it is relative to the original tsconfig being loaded
    if ((_a = config.compilerOptions) === null || _a === void 0 ? void 0 : _a.baseUrl) {
        var extendsDir = path.dirname(extendedConfigValue);
        config.compilerOptions.baseUrl = path.join(extendsDir, config.compilerOptions.baseUrl);
    }
    return config;
}
function mergeTsconfigs(base, config) {
    base = base || {};
    config = config || {};
    return __assign(__assign(__assign({}, base), config), { compilerOptions: __assign(__assign({}, base.compilerOptions), config.compilerOptions) });
}
//# sourceMappingURL=tsconfig-loader.js.map