import type { EqualityFn } from './types';
export declare const defaultEqualityCheck: EqualityFn;
export declare function createCacheKeyComparator(equalityCheck: EqualityFn): (prev: unknown[] | IArguments | null, next: unknown[] | IArguments | null) => boolean;
export interface DefaultMemoizeOptions {
    equalityCheck?: EqualityFn;
    resultEqualityCheck?: EqualityFn;
    maxSize?: number;
}
export declare function defaultMemoize<F extends (...args: any[]) => any>(func: F, equalityCheckOrOptions?: EqualityFn | DefaultMemoizeOptions): F & {
    clearCache: () => void;
};
