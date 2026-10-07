"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerFactory_1 = require("./LoggerFactory");
function createLoggerConfiguration(compiler, options) {
    return {
        infrastructure: LoggerFactory_1.createLogger((options && options.infrastructure) || 'silent', compiler),
        issues: LoggerFactory_1.createLogger((options && options.issues) || 'console', compiler),
        devServer: (options === null || options === void 0 ? void 0 : options.devServer) !== false,
    };
}
exports.createLoggerConfiguration = createLoggerConfiguration;
