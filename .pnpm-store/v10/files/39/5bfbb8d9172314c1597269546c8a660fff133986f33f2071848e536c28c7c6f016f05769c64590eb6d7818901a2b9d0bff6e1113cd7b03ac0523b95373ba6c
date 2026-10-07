/**
 * @internal
 */
export interface RetryableProvider<T> {
    (): Promise<T>;
}
/**
 * @internal
 */
export declare const retryWrapper: <T>(toRetry: RetryableProvider<T>, maxRetries: number, delayMs: number) => RetryableProvider<T>;
