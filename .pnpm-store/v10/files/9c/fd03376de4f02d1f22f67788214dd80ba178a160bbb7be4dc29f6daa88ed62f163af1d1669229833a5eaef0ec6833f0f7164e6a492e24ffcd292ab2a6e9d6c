"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YError = void 0;
class YError extends Error {
    constructor(msg) {
        super(msg || 'yargs error');
        this.name = 'YError';
        Error.captureStackTrace(this, YError);
    }
}
exports.YError = YError;
