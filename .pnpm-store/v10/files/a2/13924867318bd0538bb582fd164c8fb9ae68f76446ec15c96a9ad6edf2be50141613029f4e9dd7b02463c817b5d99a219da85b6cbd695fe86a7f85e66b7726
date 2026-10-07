import { isClockSkewError, isRetryableByTrait, isThrottlingError, isTransientError, } from "@smithy/service-error-classification";
export const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
};
