import type { RetryFunction } from './options.js';
type Returns<T extends (...args: any) => unknown, V> = (...args: Parameters<T>) => V;
declare const calculateRetryDelay: Returns<RetryFunction, number>;
export default calculateRetryDelay;
