"use strict";
/***
 * Node External Editor
 *
 * Kevin Gravier <kevin@mrkmg.com>
 * MIT 2018
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFileError = void 0;
class CreateFileError extends Error {
    originalError;
    constructor(originalError) {
        super(`Failed to create temporary file. ${originalError.message}`);
        this.originalError = originalError;
    }
}
exports.CreateFileError = CreateFileError;
