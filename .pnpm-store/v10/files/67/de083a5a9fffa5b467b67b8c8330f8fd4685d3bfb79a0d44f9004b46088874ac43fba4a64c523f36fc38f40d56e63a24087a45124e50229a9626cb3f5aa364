export class YError extends Error {
    constructor(msg) {
        super(msg || 'yargs error');
        this.name = 'YError';
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, YError);
        }
    }
}
