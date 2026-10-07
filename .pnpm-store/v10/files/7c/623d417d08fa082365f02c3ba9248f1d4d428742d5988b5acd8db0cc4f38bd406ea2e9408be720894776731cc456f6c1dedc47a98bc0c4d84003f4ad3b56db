type Key = string | number | symbol;
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export type PartialDeep<T> = T extends object ? {
    [P in keyof T]?: PartialDeep<T[P]>;
} : T;
export type LiteralUnion<T extends F, F = string> = T | (F & {});
export type KeyUnion<T> = LiteralUnion<Extract<keyof T, string>>;
export type DistributiveMerge<A, B> = A extends any ? Prettify<Omit<A, keyof B> & B> : never;
export type UnionToIntersection<T> = (T extends any ? (input: T) => void : never) extends (input: infer Intersection) => void ? Intersection : never;
/**
 * @hidden
 */
type __Pick<O extends object, K extends keyof O> = {
    [P in K]: O[P];
} & {};
/**
 * @hidden
 */
export type _Pick<O extends object, K extends Key> = __Pick<O, keyof O & K>;
/**
 * Extract out of `O` the fields of key `K`
 * @param O to extract from
 * @param K to chose fields
 * @returns [[Object]]
 */
export type Pick<O extends object, K extends Key> = O extends unknown ? _Pick<O, K> : never;
export {};
