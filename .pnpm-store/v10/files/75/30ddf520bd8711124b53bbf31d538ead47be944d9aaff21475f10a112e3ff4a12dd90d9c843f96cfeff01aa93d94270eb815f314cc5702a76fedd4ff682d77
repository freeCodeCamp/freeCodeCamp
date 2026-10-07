import type { Awaited } from '../../types';
type Func = (...args: any[]) => any;
export type DebouncedFunction<TFunction extends Func> = (this: ThisParameterType<TFunction>, ...args: Parameters<TFunction>) => Promise<Awaited<ReturnType<TFunction>>>;
export declare function debounce<TFunction extends Func>(func: TFunction, wait: number): DebouncedFunction<TFunction>;
export {};
