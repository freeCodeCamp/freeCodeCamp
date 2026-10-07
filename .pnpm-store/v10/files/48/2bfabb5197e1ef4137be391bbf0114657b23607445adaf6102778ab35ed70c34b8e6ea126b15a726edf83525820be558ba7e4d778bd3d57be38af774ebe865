import pLimit from 'p-limit';
/**
 * Converts a string to 32bit integer
 */
export declare function stringToHash(str: string): number;
export type StackNext = () => void;
export type StackFn<T> = (input: T, next: StackNext) => void;
export declare function useStack<T>(...fns: Array<StackFn<T>>): (input: T) => void;
export declare function useLimit(concurrency: number): pLimit.Limit;
