import { DefaultRateLimiter, RETRY_MODES } from "@smithy/util-retry";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
export class AdaptiveRetryStrategy extends StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.mode = RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}
