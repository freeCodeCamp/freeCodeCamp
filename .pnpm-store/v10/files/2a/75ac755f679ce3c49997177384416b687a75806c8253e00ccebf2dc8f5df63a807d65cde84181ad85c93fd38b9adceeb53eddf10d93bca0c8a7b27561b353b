"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envReplace = void 0;
const ENV_EXPR = /(?<!\\)(\\*)\$\{([^${}]+)\}/g;
function envReplace(settingValue, env) {
    return settingValue.replace(ENV_EXPR, replaceEnvMatch.bind(null, env));
}
exports.envReplace = envReplace;
function replaceEnvMatch(env, orig, escape, name) {
    if (escape.length % 2) {
        return orig.slice((escape.length + 1) / 2);
    }
    const envValue = getEnvValue(env, name);
    if (envValue === undefined) {
        throw new Error(`Failed to replace env in config: ${orig}`);
    }
    return `${(escape.slice(escape.length / 2))}${envValue}`;
}
const ENV_VALUE = /([^:-]+)(:?)-(.+)/;
function getEnvValue(env, name) {
    const matched = name.match(ENV_VALUE);
    if (!matched)
        return env[name];
    const [, variableName, colon, fallback] = matched;
    if (Object.prototype.hasOwnProperty.call(env, variableName)) {
        return !env[variableName] && colon ? fallback : env[variableName];
    }
    return fallback;
}
//# sourceMappingURL=env-replace.js.map