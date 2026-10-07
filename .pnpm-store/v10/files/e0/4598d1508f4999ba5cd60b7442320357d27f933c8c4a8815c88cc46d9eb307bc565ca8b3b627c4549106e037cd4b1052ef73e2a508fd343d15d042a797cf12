"use strict";
/***
 * Node External Editor
 *
 * Kevin Gravier <kevin@mrkmg.com>
 * MIT 2018
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchEditorError = void 0;
class LaunchEditorError extends Error {
    originalError;
    constructor(originalError) {
        super(`Failed to launch editor. ${originalError.message}`);
        this.originalError = originalError;
    }
}
exports.LaunchEditorError = LaunchEditorError;
