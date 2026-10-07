import { types } from './types';
declare type Base<T, K> = {
    type: T;
} & K;
declare type ValueType<T, K> = Base<T, {
    value: K;
}>;
export declare type Root = Base<types.ROOT, {
    stack?: Token[];
    options?: Token[][];
    flags?: string[];
}>;
export declare type Group = Base<types.GROUP, {
    stack?: Token[];
    options?: Token[][];
    remember: boolean;
    followedBy?: boolean;
    notFollowedBy?: boolean;
    lookBehind?: boolean;
    name?: string;
}>;
export declare type Set = Base<types.SET, {
    set: SetTokens;
    not: boolean;
}>;
export declare type Range = Base<types.RANGE, {
    from: number;
    to: number;
}>;
export declare type Repetition = Base<types.REPETITION, {
    min: number;
    max: number;
    value: Token;
}>;
export declare type Position = ValueType<types.POSITION, '$' | '^' | 'b' | 'B'>;
export declare type Reference = ValueType<types.REFERENCE, number>;
export declare type Char = ValueType<types.CHAR, number>;
export declare type Token = Group | Position | Set | Range | Repetition | Reference | Char;
export declare type Tokens = Root | Token;
export declare type SetTokens = (Range | Char | Set)[];
export {};
