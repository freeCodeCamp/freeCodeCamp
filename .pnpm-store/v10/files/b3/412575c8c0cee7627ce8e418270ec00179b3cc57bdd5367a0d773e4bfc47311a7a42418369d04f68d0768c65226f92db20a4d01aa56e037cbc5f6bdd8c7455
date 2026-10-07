import is from '@sindresorhus/is';
// A hacky check to prevent circular references.
function isRequest(x) {
    return is.object(x) && '_onResponse' in x;
}
/**
An error to be thrown when a request fails.
Contains a `code` property with error class code, like `ECONNREFUSED`.
*/
export class RequestError extends Error {
    constructor(message, error, self) {
        super(message);
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, this.constructor);
        this.name = 'RequestError';
        this.code = error.code ?? 'ERR_GOT_REQUEST_ERROR';
        this.input = error.input;
        if (isRequest(self)) {
            Object.defineProperty(this, 'request', {
                enumerable: false,
                value: self,
            });
            Object.defineProperty(this, 'response', {
                enumerable: false,
                value: self.response,
            });
            this.options = self.options;
        }
        else {
            this.options = self;
        }
        this.timings = this.request?.timings;
        // Recover the original stacktrace
        if (is.string(error.stack) && is.string(this.stack)) {
            const indexOfMessage = this.stack.indexOf(this.message) + this.message.length;
            const thisStackTrace = this.stack.slice(indexOfMessage).split('\n').reverse();
            const errorStackTrace = error.stack.slice(error.stack.indexOf(error.message) + error.message.length).split('\n').reverse();
            // Remove duplicated traces
            while (errorStackTrace.length > 0 && errorStackTrace[0] === thisStackTrace[0]) {
                thisStackTrace.shift();
            }
            this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join('\n')}${errorStackTrace.reverse().join('\n')}`;
        }
    }
}
/**
An error to be thrown when the server redirects you more than ten times.
Includes a `response` property.
*/
export class MaxRedirectsError extends RequestError {
    constructor(request) {
        super(`Redirected ${request.options.maxRedirects} times. Aborting.`, {}, request);
        this.name = 'MaxRedirectsError';
        this.code = 'ERR_TOO_MANY_REDIRECTS';
    }
}
/**
An error to be thrown when the server response code is not 2xx nor 3xx if `options.followRedirect` is `true`, but always except for 304.
Includes a `response` property.
*/
// eslint-disable-next-line @typescript-eslint/naming-convention
export class HTTPError extends RequestError {
    constructor(response) {
        super(`Response code ${response.statusCode} (${response.statusMessage})`, {}, response.request);
        this.name = 'HTTPError';
        this.code = 'ERR_NON_2XX_3XX_RESPONSE';
    }
}
/**
An error to be thrown when a cache method fails.
For example, if the database goes down or there's a filesystem error.
*/
export class CacheError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'CacheError';
        this.code = this.code === 'ERR_GOT_REQUEST_ERROR' ? 'ERR_CACHE_ACCESS' : this.code;
    }
}
/**
An error to be thrown when the request body is a stream and an error occurs while reading from that stream.
*/
export class UploadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'UploadError';
        this.code = this.code === 'ERR_GOT_REQUEST_ERROR' ? 'ERR_UPLOAD' : this.code;
    }
}
/**
An error to be thrown when the request is aborted due to a timeout.
Includes an `event` and `timings` property.
*/
export class TimeoutError extends RequestError {
    constructor(error, timings, request) {
        super(error.message, error, request);
        Object.defineProperty(this, "timings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "event", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'TimeoutError';
        this.event = error.event;
        this.timings = timings;
    }
}
/**
An error to be thrown when reading from response stream fails.
*/
export class ReadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'ReadError';
        this.code = this.code === 'ERR_GOT_REQUEST_ERROR' ? 'ERR_READING_RESPONSE_STREAM' : this.code;
    }
}
/**
An error which always triggers a new retry when thrown.
*/
export class RetryError extends RequestError {
    constructor(request) {
        super('Retrying', {}, request);
        this.name = 'RetryError';
        this.code = 'ERR_RETRYING';
    }
}
/**
An error to be thrown when the request is aborted by AbortController.
*/
export class AbortError extends RequestError {
    constructor(request) {
        super('This operation was aborted.', {}, request);
        this.code = 'ERR_ABORTED';
        this.name = 'AbortError';
    }
}
