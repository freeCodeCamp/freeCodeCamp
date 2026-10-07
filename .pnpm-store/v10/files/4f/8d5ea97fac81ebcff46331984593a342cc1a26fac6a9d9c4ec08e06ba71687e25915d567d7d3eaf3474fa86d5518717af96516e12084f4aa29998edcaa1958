"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.HookError = exports.ExitPromptError = exports.CancelPromptError = exports.AbortPromptError = void 0;
class AbortPromptError extends Error {
    name = 'AbortPromptError';
    message = 'Prompt was aborted';
    constructor(options) {
        super();
        this.cause = options?.cause;
    }
}
exports.AbortPromptError = AbortPromptError;
class CancelPromptError extends Error {
    name = 'CancelPromptError';
    message = 'Prompt was canceled';
}
exports.CancelPromptError = CancelPromptError;
class ExitPromptError extends Error {
    name = 'ExitPromptError';
}
exports.ExitPromptError = ExitPromptError;
class HookError extends Error {
    name = 'HookError';
}
exports.HookError = HookError;
class ValidationError extends Error {
    name = 'ValidationError';
}
exports.ValidationError = ValidationError;
