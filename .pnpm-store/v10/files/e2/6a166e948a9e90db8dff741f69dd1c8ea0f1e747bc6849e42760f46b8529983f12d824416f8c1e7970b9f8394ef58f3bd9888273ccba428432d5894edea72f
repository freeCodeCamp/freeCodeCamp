"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RpcRemoteError extends Error {
    constructor(message, stack) {
        super(message);
        this.stack = stack;
    }
    toString() {
        if (this.stack) {
            return [this.message, this.stack].join('\n');
        }
        else {
            return this.message;
        }
    }
}
exports.RpcRemoteError = RpcRemoteError;
