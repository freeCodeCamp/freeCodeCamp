type AwaitedPromise<T> = T extends null | undefined ? T : T extends object & {
    then(onfulfilled: infer F, ...args: infer _): any;
} ? F extends (value: infer V, ...args: infer _) => any ? V : never : T;
export declare function handleCallbackErrors<Fn extends () => Promise<any>, PromiseValue = AwaitedPromise<ReturnType<Fn>>>(fn: Fn, onError: (error: unknown) => void, onFinally?: () => void, onSuccess?: (result: PromiseValue) => void): ReturnType<Fn>;
export declare function handleCallbackErrors<Fn extends () => any>(fn: Fn, onError: (error: unknown) => void, onFinally?: () => void, onSuccess?: (result: ReturnType<Fn>) => void): ReturnType<Fn>;
export {};
//# sourceMappingURL=handleCallbackErrors.d.ts.map