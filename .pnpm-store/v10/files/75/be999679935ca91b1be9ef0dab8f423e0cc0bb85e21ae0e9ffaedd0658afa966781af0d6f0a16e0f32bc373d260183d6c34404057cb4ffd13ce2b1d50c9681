/**
 * @internal
 */
export interface RetryableProvider<T> {
    (): Promise<T>;
}
/**
 * @internal
 */
export declare const retry: <T>(toRetry: RetryableProvider<T>, maxRetries: number) => Promise<T>;
