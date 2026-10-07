import { MonoTypeOperatorFunction, PartialObserver } from '../types';
/** @deprecated Use an observer instead of a complete callback */
export declare function tap<T>(next: null | undefined, error: null | undefined, complete: () => void): MonoTypeOperatorFunction<T>;
/** @deprecated Use an observer instead of an error callback */
export declare function tap<T>(next: null | undefined, error: (error: any) => void, complete?: () => void): MonoTypeOperatorFunction<T>;
/** @deprecated Use an observer instead of a complete callback */
export declare function tap<T>(next: (value: T) => void, error: null | undefined, complete: () => void): MonoTypeOperatorFunction<T>;
export declare function tap<T>(next?: (x: T) => void, error?: (e: any) => void, complete?: () => void): MonoTypeOperatorFunction<T>;
export declare function tap<T>(observer: PartialObserver<T>): MonoTypeOperatorFunction<T>;
