export interface HandleTunnelRequestOptions {
    /** Incoming request containing the Sentry envelope as its body */
    request: Request;
    /** Pre-parsed array of allowed DSN strings */
    allowedDsns: Array<string>;
}
/**
 * Core Sentry tunnel handler - framework agnostic.
 *
 * Validates the envelope DSN against allowed DSNs, then forwards the
 * envelope to the Sentry ingest endpoint.
 *
 * @returns A `Response` — either the upstream Sentry response on success, or an error response.
 */
export declare function handleTunnelRequest(options: HandleTunnelRequestOptions): Promise<Response>;
//# sourceMappingURL=tunnel.d.ts.map