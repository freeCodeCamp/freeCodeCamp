import { LogLevelEnum } from '@algolia/logger-common';

/* eslint no-console: 0 */
function createConsoleLogger(logLevel) {
    return {
        debug(message, args) {
            if (LogLevelEnum.Debug >= logLevel) {
                console.debug(message, args);
            }
            return Promise.resolve();
        },
        info(message, args) {
            if (LogLevelEnum.Info >= logLevel) {
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

export { createConsoleLogger };
