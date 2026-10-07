"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const RpcIpcMessagePort_1 = require("./RpcIpcMessagePort");
function createRpcIpcMessageChannel(servicePath, memoryLimit = 2048) {
    const port = RpcIpcMessagePort_1.createRpcIpcForkedProcessMessagePort(servicePath, memoryLimit);
    // linked by the child_process IPC implementation - no manual linking needed
    return index_1.createRpcMessageChannel(port, port);
}
exports.createRpcIpcMessageChannel = createRpcIpcMessageChannel;
