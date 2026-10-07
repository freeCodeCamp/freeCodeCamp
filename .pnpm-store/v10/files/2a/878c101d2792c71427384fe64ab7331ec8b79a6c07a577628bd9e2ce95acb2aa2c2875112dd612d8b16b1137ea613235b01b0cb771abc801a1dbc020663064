export type TTupleToIntersect<T extends any[]> = T extends [infer I] ? I : T extends [infer I, ...infer R] ? I & TTupleToIntersect<R> : never;
export type TTupleToUnion<T extends any[]> = {
    [K in keyof T]: T[K];
}[number];
export type TUnionToIntersect<U> = (U extends unknown ? (arg: U) => 0 : never) extends (arg: infer I) => 0 ? I : never;
export type TUnionLast<U> = TUnionToIntersect<U extends unknown ? (x: U) => 0 : never> extends (x: infer L) => 0 ? L : never;
export type TUnionToTuple<U, Result extends unknown[] = [], R = TUnionLast<U>> = [U] extends [never] ? Result : TUnionToTuple<Exclude<U, R>, [Extract<U, R>, ...Result]>;
