"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluginHooks_1 = require("./pluginHooks");
const RpcIpcMessagePortClosedError_1 = require("../rpc/rpc-ipc/error/RpcIpcMessagePortClosedError");
const chalk_1 = __importDefault(require("chalk"));
function tapErrorToLogMessage(compiler, configuration) {
    const hooks = pluginHooks_1.getForkTsCheckerWebpackPluginHooks(compiler);
    hooks.error.tap('ForkTsCheckerWebpackPlugin', (error) => {
        configuration.logger.issues.error(String(error));
        if (error instanceof RpcIpcMessagePortClosedError_1.RpcIpcMessagePortClosedError) {
            if (error.signal === 'SIGINT') {
                configuration.logger.issues.error(chalk_1.default.red('Issues checking service interrupted - If running in a docker container, this may be caused ' +
                    "by the container running out of memory. If so, try increasing the container's memory limit " +
                    'or lowering the `memoryLimit` value in the ForkTsCheckerWebpackPlugin configuration.'));
            }
            else {
                configuration.logger.issues.error(chalk_1.default.red('Issues checking service aborted - probably out of memory. ' +
                    'Check the `memoryLimit` option in the ForkTsCheckerWebpackPlugin configuration.\n' +
                    "If increasing the memory doesn't solve the issue, it's most probably a bug in the TypeScript or EsLint."));
            }
        }
    });
}
exports.tapErrorToLogMessage = tapErrorToLogMessage;
