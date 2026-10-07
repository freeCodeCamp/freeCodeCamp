import { SdkError } from "@smithy/types";
export declare const isRetryableByTrait: (error: SdkError) => boolean;
/**
 * @deprecated use isClockSkewCorrectedError. This is only used in deprecated code.
 */
export declare const isClockSkewError: (error: SdkError) => boolean;
/**
 * @returns whether the error resulted in a systemClockOffset aka clock skew correction.
 */
export declare const isClockSkewCorrectedError: (error: SdkError) => true | undefined;
export declare const isThrottlingError: (error: SdkError) => boolean;
/**
 * Though NODEJS_TIMEOUT_ERROR_CODES are platform specific, they are
 * included here because there is an error scenario with unknown root
 * cause where the NodeHttpHandler does not decorate the Error with
 * the name "TimeoutError" to be checked by the TRANSIENT_ERROR_CODES condition.
 */
export declare const isTransientError: (error: SdkError) => boolean;
export declare const isServerError: (error: SdkError) => boolean;
