"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryLeakError = void 0;
class MemoryLeakError extends Error {
    constructor(emitter, type, count) {
        super(`Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);
        this.emitter = emitter;
        this.type = type;
        this.count = count;
        this.name = 'MaxListenersExceededWarning';
    }
}
exports.MemoryLeakError = MemoryLeakError;
