"use strict";
/***
 * Node External Editor
 *
 * Kevin Gravier <kevin@mrkmg.com>
 * MIT 2018
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFileError = void 0;
class ReadFileError extends Error {
    originalError;
    constructor(originalError) {
        super(`Failed to read temporary file. ${originalError.message}`);
        this.originalError = originalError;
    }
}
exports.ReadFileError = ReadFileError;
