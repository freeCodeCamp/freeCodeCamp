export class AbortPromptError extends Error {
    name = 'AbortPromptError';
    message = 'Prompt was aborted';
    constructor(options) {
        super();
        this.cause = options?.cause;
    }
}
export class CancelPromptError extends Error {
    name = 'CancelPromptError';
    message = 'Prompt was canceled';
}
export class ExitPromptError extends Error {
    name = 'ExitPromptError';
}
export class HookError extends Error {
    name = 'HookError';
}
export class ValidationError extends Error {
    name = 'ValidationError';
}
