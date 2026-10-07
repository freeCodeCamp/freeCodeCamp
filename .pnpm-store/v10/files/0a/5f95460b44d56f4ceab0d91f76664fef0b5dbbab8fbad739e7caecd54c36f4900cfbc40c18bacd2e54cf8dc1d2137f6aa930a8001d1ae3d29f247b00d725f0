/***
 * Node External Editor
 *
 * Kevin Gravier <kevin@mrkmg.com>
 * MIT 2018
 */
export class LaunchEditorError extends Error {
    originalError;
    constructor(originalError) {
        super(`Failed to launch editor. ${originalError.message}`);
        this.originalError = originalError;
    }
}
