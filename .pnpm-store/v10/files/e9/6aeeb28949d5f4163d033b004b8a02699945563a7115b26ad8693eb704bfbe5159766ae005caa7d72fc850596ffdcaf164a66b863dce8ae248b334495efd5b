import { type TTake } from './take.mjs';
/** Matches the given Value or empty string if no match. This function never fails */
export type TOptional<Value extends string, Input extends string> = (TTake<[Value], Input> extends [infer Optional extends string, infer Rest extends string] ? [Optional, Rest] : ['', Input]);
/** Matches the given Value or empty string if no match. This function never fails */
export declare function Optional<Value extends string, Input extends string>(value: Value, input: Input): TOptional<Value, Value>;
