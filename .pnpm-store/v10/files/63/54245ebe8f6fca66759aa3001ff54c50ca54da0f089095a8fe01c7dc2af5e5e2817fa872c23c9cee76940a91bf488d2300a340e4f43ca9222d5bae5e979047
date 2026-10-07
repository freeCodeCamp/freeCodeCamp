import type { InquirerReadline } from '@inquirer/type';
export declare function withHooks<T>(rl: InquirerReadline, cb: (cycle: (render: () => void) => void) => T): T;
export declare function readline(): InquirerReadline;
export declare function withUpdates<Args extends unknown[], R>(fn: (...args: Args) => R): (...args: Args) => R;
type SetPointer<Value> = {
    get(): Value;
    set(value: Value): void;
    initialized: true;
};
type UnsetPointer<Value> = {
    get(): void;
    set(value: Value): void;
    initialized: false;
};
type Pointer<Value> = SetPointer<Value> | UnsetPointer<Value>;
export declare function withPointer<Value, ReturnValue>(cb: (pointer: Pointer<Value>) => ReturnValue): ReturnValue;
export declare function handleChange(): void;
export declare const effectScheduler: {
    queue(cb: (readline: InquirerReadline) => void | (() => void)): void;
    run(): void;
    clearAll(): void;
};
export {};
