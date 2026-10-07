export interface RetryableProvider<T> {
  (): Promise<T>;
}
export declare const retryWrapper: <T>(
  toRetry: RetryableProvider<T>,
  maxRetries: number,
  delayMs: number
) => RetryableProvider<T>;
