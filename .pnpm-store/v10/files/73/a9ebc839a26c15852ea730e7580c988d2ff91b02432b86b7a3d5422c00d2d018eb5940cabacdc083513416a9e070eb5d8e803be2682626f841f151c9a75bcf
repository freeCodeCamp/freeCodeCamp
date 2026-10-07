declare type BoxedTupleTypes<T extends any[]> = {
    [P in keyof T]: [T[P]];
}[Exclude<keyof T, keyof any[]>];
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type UnboxIntersection<T> = T extends {
    0: infer U;
} ? U : never;
export declare function mergeDeep<S extends any[]>(sources: S, respectPrototype?: boolean): UnboxIntersection<UnionToIntersection<BoxedTupleTypes<S>>> & any;
export {};
