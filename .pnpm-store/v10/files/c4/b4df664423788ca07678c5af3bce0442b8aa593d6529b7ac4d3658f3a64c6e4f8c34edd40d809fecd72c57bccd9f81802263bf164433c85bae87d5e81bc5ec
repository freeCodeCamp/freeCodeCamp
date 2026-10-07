"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogLevelDiagLogger = void 0;
const types_1 = require("../types");
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < types_1.DiagLogLevel.NONE) {
        maxLevel = types_1.DiagLogLevel.NONE;
    }
    else if (maxLevel > types_1.DiagLogLevel.ALL) {
        maxLevel = types_1.DiagLogLevel.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        const theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', types_1.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', types_1.DiagLogLevel.WARN),
        info: _filterFunc('info', types_1.DiagLogLevel.INFO),
        debug: _filterFunc('debug', types_1.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', types_1.DiagLogLevel.VERBOSE),
    };
}
exports.createLogLevelDiagLogger = createLogLevelDiagLogger;
//# sourceMappingURL=logLevelLogger.js.map