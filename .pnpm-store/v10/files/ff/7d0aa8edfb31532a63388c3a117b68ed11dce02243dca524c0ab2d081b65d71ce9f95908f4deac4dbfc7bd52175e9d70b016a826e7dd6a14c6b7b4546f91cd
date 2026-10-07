import { HttpRequest, HttpResponse } from "../http";
import { Identity } from "../identity/identity";
/**
 * @internal
 */
export interface ErrorHandler {
    (signingProperties: Record<string, unknown>): <E extends Error>(error: E) => never;
}
/**
 * @internal
 */
export interface SuccessHandler {
    (httpResponse: HttpResponse | unknown, signingProperties: Record<string, unknown>): void;
}
/**
 * Interface to sign identity and signing properties.
 * @internal
 */
export interface HttpSigner {
    /**
     * Signs an HttpRequest with an identity and signing properties.
     * @param httpRequest request to sign
     * @param identity identity to sing the request with
     * @param signingProperties property bag for signing
     * @returns signed request in a promise
     */
    sign(httpRequest: HttpRequest, identity: Identity, signingProperties: Record<string, unknown>): Promise<HttpRequest>;
    /**
     * Handler that executes after the {@link HttpSigner.sign} invocation and corresponding
     * middleware throws an error.
     * The error handler is expected to throw the error it receives, so the return type of the error handler is `never`.
     * @internal
     */
    errorHandler?: ErrorHandler;
    /**
     * Handler that executes after the {@link HttpSigner.sign} invocation and corresponding
     * middleware succeeds.
     * @internal
     */
    successHandler?: SuccessHandler;
}
