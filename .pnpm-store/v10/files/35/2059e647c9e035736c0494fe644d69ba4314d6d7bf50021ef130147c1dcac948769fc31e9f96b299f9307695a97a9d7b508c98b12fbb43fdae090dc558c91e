declare namespace setFunctionLength {
    type Func = (...args: unknown[]) => unknown;
}

declare function setFunctionLength<T extends setFunctionLength.Func = setFunctionLength.Func>(fn: T, length: number, loose?: boolean): T;

export = setFunctionLength;