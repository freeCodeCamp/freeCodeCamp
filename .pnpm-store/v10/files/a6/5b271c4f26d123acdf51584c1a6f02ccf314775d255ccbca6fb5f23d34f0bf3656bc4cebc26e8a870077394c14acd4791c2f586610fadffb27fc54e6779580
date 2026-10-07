export type NoInfer<A extends any> = [A][A extends any ? 0 : never];
export type PartialKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare function memo<TDeps extends readonly any[], TResult>(getDeps: () => [...TDeps], fn: (...args: NoInfer<[...TDeps]>) => TResult, opts: {
    key: false | string;
    debug?: () => any;
    onChange?: (result: TResult) => void;
    initialDeps?: TDeps;
}): () => TResult;
export declare function notUndefined<T>(value: T | undefined, msg?: string): T;
export declare const approxEqual: (a: number, b: number) => boolean;
