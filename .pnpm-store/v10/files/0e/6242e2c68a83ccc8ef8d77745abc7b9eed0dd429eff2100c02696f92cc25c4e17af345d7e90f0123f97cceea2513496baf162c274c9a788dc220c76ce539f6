/* eslint-disable camelcase */
export const generate = (rawStripeError) => {
    switch (rawStripeError.type) {
        case 'card_error':
            return new StripeCardError(rawStripeError);
        case 'invalid_request_error':
            return new StripeInvalidRequestError(rawStripeError);
        case 'api_error':
            return new StripeAPIError(rawStripeError);
        case 'authentication_error':
            return new StripeAuthenticationError(rawStripeError);
        case 'rate_limit_error':
            return new StripeRateLimitError(rawStripeError);
        case 'idempotency_error':
            return new StripeIdempotencyError(rawStripeError);
        case 'invalid_grant':
            return new StripeInvalidGrantError(rawStripeError);
        default:
            return new StripeUnknownError(rawStripeError);
    }
};
/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
export class StripeError extends Error {
    constructor(raw = {}, type = null) {
        super(raw.message);
        this.type = type || this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        // @ts-ignore
        this.message = raw.message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
    }
}
/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */
StripeError.generate = generate;
// Specific Stripe Error types:
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
export class StripeCardError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeCardError');
    }
}
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export class StripeInvalidRequestError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidRequestError');
    }
}
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export class StripeAPIError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeAPIError');
    }
}
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
export class StripeAuthenticationError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeAuthenticationError');
    }
}
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export class StripePermissionError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripePermissionError');
    }
}
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export class StripeRateLimitError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeRateLimitError');
    }
}
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export class StripeConnectionError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeConnectionError');
    }
}
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export class StripeSignatureVerificationError extends StripeError {
    constructor(header, payload, raw = {}) {
        super(raw, 'StripeSignatureVerificationError');
        this.header = header;
        this.payload = payload;
    }
}
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
export class StripeIdempotencyError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeIdempotencyError');
    }
}
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export class StripeInvalidGrantError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidGrantError');
    }
}
/**
 * Any other error from Stripe not specifically captured above
 */
export class StripeUnknownError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeUnknownError');
    }
}
