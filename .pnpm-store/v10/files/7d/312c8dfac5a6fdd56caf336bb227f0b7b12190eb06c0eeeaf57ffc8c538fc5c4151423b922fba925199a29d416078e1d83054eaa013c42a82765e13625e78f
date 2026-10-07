/**
 * Formats a given message by appending the library's prefix string.
 */
declare function formatMessage(message: string, ...positionals: any[]): string;
/**
 * Prints a library-specific warning.
 */
declare function warn(message: string, ...positionals: any[]): void;
/**
 * Prints a library-specific error.
 */
declare function error(message: string, ...positionals: any[]): void;
declare const devUtils: {
    formatMessage: typeof formatMessage;
    warn: typeof warn;
    error: typeof error;
};
/**
 * Internal error instance.
 * Used to differentiate the library errors that must be forwarded
 * to the user from the unhandled exceptions. Use this if you don't
 * wish for the error to be coerced to a 500 fallback response.
 */
declare class InternalError extends Error {
    constructor(message: string);
}

export { InternalError, devUtils };
