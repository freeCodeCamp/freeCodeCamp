import { SdkError } from "./shapes";
/**
 * @public
 */
export type RetryErrorType = 
/**
 * This is a connection level error such as a socket timeout, socket connect
 * error, tls negotiation timeout etc...
 * Typically these should never be applied for non-idempotent request types
 * since in this scenario, it's impossible to know whether the operation had
 * a side effect on the server.
 */
"TRANSIENT"
/**
 * This is an error where the server explicitly told the client to back off,
 * such as a 429 or 503 Http error.
 */
 | "THROTTLING"
/**
 * This is a server error that isn't explicitly throttling but is considered
 * by the client to be something that should be retried.
 */
 | "SERVER_ERROR"
/**
 * Doesn't count against any budgets. This could be something like a 401
 * challenge in Http.
 */
 | "CLIENT_ERROR";
/**
 * @public
 */
export interface RetryErrorInfo {
    /**
     * The error thrown during the initial request, if available.
     */
    error?: SdkError;
    errorType: RetryErrorType;
    /**
     * Protocol hint. This could come from Http's 'retry-after' header or
     * something from MQTT or any other protocol that has the ability to convey
     * retry info from a peer.
     *
     * The Date after which a retry should be attempted.
     */
    retryAfterHint?: Date;
}
/**
 * @public
 */
export interface RetryBackoffStrategy {
    /**
     * @returns the number of milliseconds to wait before retrying an action.
     */
    computeNextBackoffDelay(retryAttempt: number): number;
}
/**
 * @public
 */
export interface StandardRetryBackoffStrategy extends RetryBackoffStrategy {
    /**
     * Sets the delayBase used to compute backoff delays.
     * @param delayBase -
     */
    setDelayBase(delayBase: number): void;
}
/**
 * @public
 */
export interface RetryStrategyOptions {
    backoffStrategy: RetryBackoffStrategy;
    maxRetriesBase: number;
}
/**
 * @public
 */
export interface RetryToken {
    /**
     * @returns the current count of retry.
     */
    getRetryCount(): number;
    /**
     * @returns the number of milliseconds to wait before retrying an action.
     */
    getRetryDelay(): number;
}
/**
 * @public
 */
export interface StandardRetryToken extends RetryToken {
    /**
     * @returns the cost of the last retry attempt.
     */
    getRetryCost(): number | undefined;
}
/**
 * @public
 */
export interface RetryStrategyV2 {
    /**
     * Called before any retries (for the first call to the operation). It either
     * returns a retry token or an error upon the failure to acquire a token prior.
     *
     * tokenScope is arbitrary and out of scope for this component. However,
     * adding it here offers us a lot of future flexibility for outage detection.
     * For example, it could be "us-east-1" on a shared retry strategy, or
     * "us-west-2-c:dynamodb".
     */
    acquireInitialRetryToken(retryTokenScope: string): Promise<RetryToken>;
    /**
     * After a failed operation call, this function is invoked to refresh the
     * retryToken returned by acquireInitialRetryToken(). This function can
     * either choose to allow another retry and send a new or updated token,
     * or reject the retry attempt and report the error either in an exception
     * or returning an error.
     */
    refreshRetryTokenForRetry(tokenToRenew: RetryToken, errorInfo: RetryErrorInfo): Promise<RetryToken>;
    /**
     * Upon successful completion of the operation, this function is called
     * to record that the operation was successful.
     */
    recordSuccess(token: RetryToken): void;
}
/**
 * @public
 */
export type ExponentialBackoffJitterType = "DEFAULT" | "NONE" | "FULL" | "DECORRELATED";
/**
 * @public
 */
export interface ExponentialBackoffStrategyOptions {
    jitterType: ExponentialBackoffJitterType;
    backoffScaleValue?: number;
}
