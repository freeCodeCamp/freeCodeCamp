type NotFunction<T> = T extends (...args: never) => unknown ? never : T;
export declare function useState<Value>(defaultValue: NotFunction<Value> | (() => Value)): [Value, (newValue: Value) => void];
export declare function useState<Value>(defaultValue?: NotFunction<Value> | (() => Value)): [Value | undefined, (newValue?: Value) => void];
export {};
