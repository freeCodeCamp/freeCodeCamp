export namespace enumUtil {
  type UnionToIntersectionFn<T> = (T extends unknown ? (k: () => T) => void : never) extends (
    k: infer Intersection
  ) => void
    ? Intersection
    : never;

  type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer Last ? Last : never;

  type UnionToTuple<T, Tuple extends unknown[] = []> = [T] extends [never]
    ? Tuple
    : UnionToTuple<Exclude<T, GetUnionLast<T>>, [GetUnionLast<T>, ...Tuple]>;

  type CastToStringTuple<T> = T extends [string, ...string[]] ? T : never;

  export type UnionToTupleString<T> = CastToStringTuple<UnionToTuple<T>>;
}
