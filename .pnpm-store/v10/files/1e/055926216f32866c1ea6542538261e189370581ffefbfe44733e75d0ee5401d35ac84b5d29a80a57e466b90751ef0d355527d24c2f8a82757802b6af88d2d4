'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var loggerCommon = require('@algolia/logger-common');

/* eslint no-console: 0 */
function createConsoleLogger(logLevel) {
    return {
        debug(message, args) {
            if (loggerCommon.LogLevelEnum.Debug >= logLevel) {
                console.debug(message, args);
            }
            return Promise.resolve();
        },
        info(message, args) {
            if (loggerCommon.LogLevelEnum.Info >= logLevel) {
                console.info(message, args);
            }
            return Promise.resolve();
        },
        error(message, args) {
            console.error(message, args);
            return Promise.resolve();
        },
    };
}

exports.createConsoleLogger = createConsoleLogger;
