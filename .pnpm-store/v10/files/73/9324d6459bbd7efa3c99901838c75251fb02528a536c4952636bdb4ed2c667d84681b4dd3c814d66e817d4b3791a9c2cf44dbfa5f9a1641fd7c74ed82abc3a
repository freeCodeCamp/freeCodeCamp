"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const RpcIpcMessagePortClosedError_1 = require("./error/RpcIpcMessagePortClosedError");
function createRpcIpcMessagePort(process) {
    const messageListeners = new Set();
    const errorListeners = new Set();
    let closedError;
    const handleExit = (code, signal) => __awaiter(this, void 0, void 0, function* () {
        closedError = new RpcIpcMessagePortClosedError_1.RpcIpcMessagePortClosedError(code
            ? `Process ${process.pid} exited with code "${code}" [${signal}]`
            : `Process ${process.pid} exited [${signal}].`, code, signal);
        errorListeners.forEach((listener) => {
            if (closedError) {
                listener(closedError);
            }
        });
        yield port.close();
    });
    const handleMessage = (message) => {
        messageListeners.forEach((listener) => {
            listener(message);
        });
    };
    process.on('message', handleMessage);
    process.on('exit', handleExit);
    const port = {
        dispatchMessage: (message) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!process.connected) {
                    reject(closedError ||
                        new RpcIpcMessagePortClosedError_1.RpcIpcMessagePortClosedError(`Process ${process.pid} doesn't have open IPC channels`));
                }
                if (process.send) {
                    process.send(Object.assign(Object.assign({}, message), { source: process.pid }), undefined, undefined, (sendError) => {
                        if (sendError) {
                            if (!closedError) {
                                closedError = new RpcIpcMessagePortClosedError_1.RpcIpcMessagePortClosedError(`Cannot send the message - the message port has been closed for the process ${process.pid}.`);
                            }
                            reject(closedError);
                        }
                        else {
                            resolve();
                        }
                    });
                }
                else {
                    reject(new RpcIpcMessagePortClosedError_1.RpcIpcMessagePortClosedError(`Process ${process.pid} doesn't have IPC channels`));
                }
            });
        }),
        addMessageListener: (listener) => {
            messageListeners.add(listener);
        },
        removeMessageListener: (listener) => {
            messageListeners.delete(listener);
        },
        addErrorListener: (listener) => {
            errorListeners.add(listener);
        },
        removeErrorListener: (listener) => {
            errorListeners.delete(listener);
        },
        isOpen: () => !!process.connected,
        open: () => __awaiter(this, void 0, void 0, function* () {
            if (!process.connected || closedError) {
                throw (closedError ||
                    new RpcIpcMessagePortClosedError_1.RpcIpcMessagePortClosedError(`Cannot open closed IPC channel for process ${process.pid}.`));
            }
        }),
        close: () => __awaiter(this, void 0, void 0, function* () {
            process.off('message', handleMessage);
            process.off('exit', handleExit);
            messageListeners.clear();
            errorListeners.clear();
            if (process.disconnect && process.connected) {
                process.disconnect();
            }
        }),
    };
    return port;
}
exports.createRpcIpcMessagePort = createRpcIpcMessagePort;
function createRpcIpcForkedProcessMessagePort(filePath, memoryLimit = 2048, autoRecreate = true) {
    function createChildProcess() {
        return child_process_1.fork(filePath, [], {
            execArgv: [`--max-old-space-size=${memoryLimit}`],
            stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
        });
    }
    const messageListeners = new Set();
    const errorListeners = new Set();
    let childProcess = createChildProcess();
    let port = createRpcIpcMessagePort(childProcess);
    return {
        dispatchMessage: (message) => port.dispatchMessage(message),
        addMessageListener: (listener) => {
            messageListeners.add(listener);
            return port.addMessageListener(listener);
        },
        removeMessageListener: (listener) => {
            messageListeners.delete(listener);
            return port.removeMessageListener(listener);
        },
        addErrorListener: (listener) => {
            errorListeners.add(listener);
            return port.addErrorListener(listener);
        },
        removeErrorListener: (listener) => {
            errorListeners.delete(listener);
            return port.removeErrorListener(listener);
        },
        isOpen: () => port.isOpen(),
        open: () => __awaiter(this, void 0, void 0, function* () {
            if (!port.isOpen() && autoRecreate) {
                // recreate the process and add existing message listeners
                childProcess = createChildProcess();
                port = createRpcIpcMessagePort(childProcess);
                messageListeners.forEach((listener) => {
                    port.addMessageListener(listener);
                });
                errorListeners.forEach((listener) => {
                    port.addErrorListener(listener);
                });
            }
            else {
                return port.open();
            }
        }),
        close: () => __awaiter(this, void 0, void 0, function* () {
            yield port.close();
            messageListeners.clear();
            errorListeners.clear();
            if (childProcess) {
                childProcess.kill('SIGTERM');
                childProcess = undefined;
            }
        }),
    };
}
exports.createRpcIpcForkedProcessMessagePort = createRpcIpcForkedProcessMessagePort;
