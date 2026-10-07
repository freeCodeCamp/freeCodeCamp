"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isInfrastructureLoggerProvider(candidate) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !!candidate.getInfrastructureLogger;
}
function createWebpackInfrastructureLogger(compiler) {
    return isInfrastructureLoggerProvider(compiler)
        ? compiler.getInfrastructureLogger('ForkTsCheckerWebpackPlugin')
        : undefined;
}
exports.createWebpackInfrastructureLogger = createWebpackInfrastructureLogger;
