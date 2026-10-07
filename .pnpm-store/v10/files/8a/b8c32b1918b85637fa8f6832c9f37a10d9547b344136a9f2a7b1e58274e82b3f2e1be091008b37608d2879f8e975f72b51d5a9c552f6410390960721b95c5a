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
const RpcMessage_1 = require("./RpcMessage");
const RpcRemoteError_1 = require("./error/RpcRemoteError");
/* eslint-enable @typescript-eslint/no-explicit-any */
function createRpcClient(port) {
    let callIndex = 0;
    const callbacks = new Map();
    let isListenerRegistered = false;
    const returnOrThrowListener = (message) => __awaiter(this, void 0, void 0, function* () {
        if (RpcMessage_1.isRpcReturnMessage(message)) {
            const key = RpcMessage_1.getRpcMessageKey(message);
            const callback = callbacks.get(key);
            if (callback) {
                callback.return(message.payload);
                callbacks.delete(key);
            }
        }
        if (RpcMessage_1.isRpcThrowMessage(message)) {
            const key = RpcMessage_1.getRpcMessageKey(message);
            const callback = callbacks.get(key);
            if (callback) {
                callback.throw(new RpcRemoteError_1.RpcRemoteError(message.payload.message, message.payload.stack));
                callbacks.delete(key);
            }
        }
    });
    const errorListener = (error) => __awaiter(this, void 0, void 0, function* () {
        callbacks.forEach((callback, key) => {
            callback.throw(error);
            callbacks.delete(key);
        });
    });
    return {
        isConnected: () => port.isOpen() && isListenerRegistered,
        connect: () => __awaiter(this, void 0, void 0, function* () {
            if (!port.isOpen()) {
                yield port.open();
            }
            if (!isListenerRegistered) {
                port.addMessageListener(returnOrThrowListener);
                port.addErrorListener(errorListener);
                isListenerRegistered = true;
            }
        }),
        disconnect: () => __awaiter(this, void 0, void 0, function* () {
            if (isListenerRegistered) {
                port.removeMessageListener(returnOrThrowListener);
                port.removeErrorListener(errorListener);
                isListenerRegistered = false;
            }
            if (port.isOpen()) {
                yield port.close();
            }
        }),
        dispatchCall: (procedure, payload) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const call = RpcMessage_1.createRpcCall(procedure, callIndex++, payload);
                const key = RpcMessage_1.getRpcMessageKey(call);
                callbacks.set(key, { return: resolve, throw: reject });
                port.dispatchMessage(call).catch((error) => {
                    callbacks.delete(key);
                    reject(error);
                });
            });
        }),
    };
}
exports.createRpcClient = createRpcClient;
