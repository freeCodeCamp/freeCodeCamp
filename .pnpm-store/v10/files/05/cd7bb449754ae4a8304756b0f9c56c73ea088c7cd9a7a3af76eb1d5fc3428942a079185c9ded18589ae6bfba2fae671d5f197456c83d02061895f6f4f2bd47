type RemoveFromTuple<
  Tuple extends readonly unknown[],
  RemoveCount extends number,
  Index extends 1[] = []
> = Index["length"] extends RemoveCount
  ? Tuple
  : Tuple extends [infer First, ...infer Rest]
  ? RemoveFromTuple<Rest, RemoveCount, [...Index, 1]>
  : Tuple;

type ConcatTuples<
  Prefix extends readonly unknown[],
  Suffix extends readonly unknown[]
> = [...Prefix, ...Suffix];

type ExtractFunctionParams<T> = T extends (this: infer TThis, ...args: infer P extends readonly unknown[]) => infer R
  ? { thisArg: TThis; params: P; returnType: R }
  : never;

type BindFunction<
  T extends (this: any, ...args: any[]) => any,
  TThis,
  TBoundArgs extends readonly unknown[],
  ReceiverBound extends boolean
> = ExtractFunctionParams<T> extends {
  thisArg: infer OrigThis;
  params: infer P extends readonly unknown[];
  returnType: infer R;
}
  ? ReceiverBound extends true
    ? (...args: RemoveFromTuple<P, Extract<TBoundArgs["length"], number>>) => R extends [OrigThis, ...infer Rest]
      ? [TThis, ...Rest] // Replace `this` with `thisArg`
      : R
    : <U, RemainingArgs extends RemoveFromTuple<P, Extract<TBoundArgs["length"], number>>>(
        thisArg: U,
        ...args: RemainingArgs
      ) => R extends [OrigThis, ...infer Rest]
      ? [U, ...ConcatTuples<TBoundArgs, Rest>] // Preserve bound args in return type
      : R
  : never;

declare function callBind<
  const T extends (this: any, ...args: any[]) => any,
  Extracted extends ExtractFunctionParams<T>,
  const TBoundArgs extends Partial<Extracted["params"]> & readonly unknown[],
  const TThis extends Extracted["thisArg"]
>(
  args: [fn: T, thisArg: TThis, ...boundArgs: TBoundArgs]
): BindFunction<T, TThis, TBoundArgs, true>;

declare function callBind<
  const T extends (this: any, ...args: any[]) => any,
  Extracted extends ExtractFunctionParams<T>,
  const TBoundArgs extends Partial<Extracted["params"]> & readonly unknown[]
>(
  args: [fn: T, ...boundArgs: TBoundArgs]
): BindFunction<T, Extracted["thisArg"], TBoundArgs, false>;

declare function callBind<const TArgs extends readonly unknown[]>(
  args: [fn: Exclude<TArgs[0], Function>, ...rest: TArgs]
): never;

// export as namespace callBind;
export = callBind;
