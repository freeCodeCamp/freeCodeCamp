"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPartialLogger(methods, logger) {
    return {
        info: (message) => (methods.includes('info') ? logger.info(message) : undefined),
        log: (message) => (methods.includes('log') ? logger.log(message) : undefined),
        error: (message) => (methods.includes('error') ? logger.error(message) : undefined),
    };
}
exports.createPartialLogger = createPartialLogger;
