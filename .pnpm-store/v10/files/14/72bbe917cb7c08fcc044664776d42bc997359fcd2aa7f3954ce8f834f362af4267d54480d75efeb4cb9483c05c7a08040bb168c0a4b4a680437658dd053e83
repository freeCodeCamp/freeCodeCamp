import { CLOCK_SKEW_ERROR_CODES, NODEJS_TIMEOUT_ERROR_CODES, THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES, } from "./constants";
export const isRetryableByTrait = (error) => error.$retryable !== undefined;
export const isClockSkewError = (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name);
export const isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
export const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
export const isTransientError = (error) => isClockSkewCorrectedError(error) ||
    TRANSIENT_ERROR_CODES.includes(error.name) ||
    NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
export const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};
