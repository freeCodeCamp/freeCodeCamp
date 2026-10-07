"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unregisterGlobal = exports.getGlobal = exports.registerGlobal = void 0;
const version_1 = require("../version");
const semver_1 = require("./semver");
const major = version_1.VERSION.split('.')[0];
const GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
const _global = (typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
        ? self
        : typeof window === 'object'
            ? window
            : typeof global === 'object'
                ? global
                : {});
function registerGlobal(type, instance, diag, allowOverride = false) {
    var _a;
    const api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: version_1.VERSION,
    });
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        const err = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== version_1.VERSION) {
        // All registered APIs must be of the same version exactly
        const err = new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${version_1.VERSION}`);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug(`@opentelemetry/api: Registered a global for ${type} v${version_1.VERSION}.`);
    return true;
}
exports.registerGlobal = registerGlobal;
function getGlobal(type) {
    var _a, _b;
    const globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0, semver_1.isCompatible)(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
exports.getGlobal = getGlobal;
function unregisterGlobal(type, diag) {
    diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${version_1.VERSION}.`);
    const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
exports.unregisterGlobal = unregisterGlobal;
//# sourceMappingURL=global-utils.js.map