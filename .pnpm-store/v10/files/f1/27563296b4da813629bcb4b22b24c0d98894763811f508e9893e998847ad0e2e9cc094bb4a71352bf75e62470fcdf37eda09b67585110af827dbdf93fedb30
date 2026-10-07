"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const reporter_1 = require("../../reporter");
const rpc_ipc_1 = require("../../rpc/rpc-ipc");
function createTypeScriptReporterRpcClient(configuration) {
    const channel = rpc_ipc_1.createRpcIpcMessageChannel(path_1.default.resolve(__dirname, './TypeScriptReporterRpcService.js'), configuration.memoryLimit);
    return reporter_1.createReporterRpcClient(channel, configuration);
}
exports.createTypeScriptReporterRpcClient = createTypeScriptReporterRpcClient;
