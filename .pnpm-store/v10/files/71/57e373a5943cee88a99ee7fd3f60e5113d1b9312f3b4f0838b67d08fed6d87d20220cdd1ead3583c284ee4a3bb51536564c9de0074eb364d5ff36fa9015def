/**
 * @internal
 */
export interface RateLimiter {
    /**
     * If there is sufficient capacity (tokens) available, it immediately returns.
     * If there is not sufficient capacity, it will either sleep a certain amount
     * of time until the rate limiter can retrieve a token from its token bucket
     * or raise an exception indicating there is insufficient capacity.
     */
    getSendToken: () => Promise<void>;
    /**
     * Updates the client sending rate based on response.
     * If the response was successful, the capacity and fill rate are increased.
     * If the response was a throttling response, the capacity and fill rate are
     * decreased. Transient errors do not affect the rate limiter.
     */
    updateClientSendingRate: (response: any) => void;
}
