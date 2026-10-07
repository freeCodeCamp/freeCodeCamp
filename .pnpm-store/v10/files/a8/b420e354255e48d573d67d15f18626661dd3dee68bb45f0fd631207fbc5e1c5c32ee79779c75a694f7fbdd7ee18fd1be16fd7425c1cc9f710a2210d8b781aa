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
function createRpcService(port) {
    const handlers = new Map();
    let isListenerRegistered = false;
    const callListener = (message) => __awaiter(this, void 0, void 0, function* () {
        if (RpcMessage_1.isRpcCallMessage(message)) {
            const handler = handlers.get(message.procedure);
            try {
                if (!handler) {
                    throw new Error(`No handler found for procedure ${message.procedure}.`);
                }
                const result = yield handler(message.payload);
                yield port.dispatchMessage(RpcMessage_1.createRpcReturn(message.procedure, message.id, result));
            }
            catch (error) {
                yield port.dispatchMessage(RpcMessage_1.createRpcThrow(message.procedure, message.id, {
                    message: error.toString(),
                    stack: error.stack,
                }));
            }
        }
    });
    return {
        isOpen: () => port.isOpen() && isListenerRegistered,
        open: () => __awaiter(this, void 0, void 0, function* () {
            if (!port.isOpen()) {
                yield port.open();
            }
            if (!isListenerRegistered) {
                port.addMessageListener(callListener);
                isListenerRegistered = true;
            }
        }),
        close: () => __awaiter(this, void 0, void 0, function* () {
            if (isListenerRegistered) {
                port.removeMessageListener(callListener);
                isListenerRegistered = false;
            }
            if (port.isOpen()) {
                yield port.close();
            }
        }),
        addCallHandler: (procedure, handler) => {
            if (handlers.has(procedure)) {
                throw new Error(`Handler for '${procedure}' procedure has been already registered`);
            }
            handlers.set(procedure, handler);
        },
        removeCallHandler: (procedure) => handlers.delete(procedure),
    };
}
exports.createRpcService = createRpcService;
