"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyExtends = void 0;
const fs = require("fs");
const path = require("path");
const yerror_1 = require("./yerror");
let previouslyVisitedConfigs = [];
function checkForCircularExtends(cfgPath) {
    if (previouslyVisitedConfigs.indexOf(cfgPath) > -1) {
        throw new yerror_1.YError(`Circular extended configurations: '${cfgPath}'.`);
    }
}
function getPathToDefaultConfig(cwd, pathToExtend) {
    return path.resolve(cwd, pathToExtend);
}
function mergeDeep(config1, config2) {
    const target = {};
    function isObject(obj) {
        return obj && typeof obj === 'object' && !Array.isArray(obj);
    }
    Object.assign(target, config1);
    for (const key of Object.keys(config2)) {
        if (isObject(config2[key]) && isObject(target[key])) {
            target[key] = mergeDeep(config1[key], config2[key]);
        }
        else {
            target[key] = config2[key];
        }
    }
    return target;
}
function applyExtends(config, cwd, mergeExtends = false) {
    let defaultConfig = {};
    if (Object.prototype.hasOwnProperty.call(config, 'extends')) {
        if (typeof config.extends !== 'string')
            return defaultConfig;
        const isPath = /\.json|\..*rc$/.test(config.extends);
        let pathToDefault = null;
        if (!isPath) {
            try {
                pathToDefault = require.resolve(config.extends);
            }
            catch (err) {
                // most likely this simply isn't a module.
            }
        }
        else {
            pathToDefault = getPathToDefaultConfig(cwd, config.extends);
        }
        // maybe the module uses key for some other reason,
        // err on side of caution.
        if (!pathToDefault && !isPath)
            return config;
        if (!pathToDefault)
            throw new yerror_1.YError(`Unable to find extended config '${config.extends}' in '${cwd}'.`);
        checkForCircularExtends(pathToDefault);
        previouslyVisitedConfigs.push(pathToDefault);
        defaultConfig = isPath ? JSON.parse(fs.readFileSync(pathToDefault, 'utf8')) : require(config.extends);
        delete config.extends;
        defaultConfig = applyExtends(defaultConfig, path.dirname(pathToDefault), mergeExtends);
    }
    previouslyVisitedConfigs = [];
    return mergeExtends ? mergeDeep(defaultConfig, config) : Object.assign({}, defaultConfig, config);
}
exports.applyExtends = applyExtends;
