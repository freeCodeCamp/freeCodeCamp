"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebpackInfrastructureLogger_1 = require("./WebpackInfrastructureLogger");
const PartialLogger_1 = require("./PartialLogger");
function createLogger(type, compiler) {
    if (typeof type !== 'string') {
        return type;
    }
    switch (type) {
        case 'webpack-infrastructure':
            return (WebpackInfrastructureLogger_1.createWebpackInfrastructureLogger(compiler) ||
                PartialLogger_1.createPartialLogger(['log', 'error'], console));
        case 'silent':
            return PartialLogger_1.createPartialLogger([], console);
        case 'console':
        default:
            return console;
    }
}
exports.createLogger = createLogger;
