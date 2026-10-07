import { RequestError } from '../core/errors.js';
/**
An error to be thrown when the request is aborted with `.cancel()`.
*/
export class CancelError extends RequestError {
    constructor(request) {
        super('Promise was canceled', {}, request);
        this.name = 'CancelError';
        this.code = 'ERR_CANCELED';
    }
    /**
    Whether the promise is canceled.
    */
    get isCanceled() {
        return true;
    }
}
