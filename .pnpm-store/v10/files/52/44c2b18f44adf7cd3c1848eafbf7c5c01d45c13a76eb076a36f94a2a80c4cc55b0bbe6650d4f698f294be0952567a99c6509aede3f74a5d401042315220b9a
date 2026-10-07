import { DEFAULT_RETRY_DELAY_BASE } from "./constants";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
export class ConfiguredRetryStrategy extends StandardRetryStrategy {
    constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        }
        else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
    }
}
