"use strict";
/***
 * Node External Editor
 *
 * Kevin Gravier <kevin@mrkmg.com>
 * MIT 2018
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveFileError = void 0;
class RemoveFileError extends Error {
    originalError;
    constructor(originalError) {
        super(`Failed to remove temporary file. ${originalError.message}`);
        this.originalError = originalError;
    }
}
exports.RemoveFileError = RemoveFileError;
