import actualApply from './actualApply';

type TupleSplitHead<T extends any[], N extends number> = T['length'] extends N
  ? T
  : T extends [...infer R, any]
  ? TupleSplitHead<R, N>
  : never

type TupleSplitTail<T, N extends number, O extends any[] = []> = O['length'] extends N
  ? T
  : T extends [infer F, ...infer R]
  ? TupleSplitTail<[...R], N, [...O, F]>
  : never

type TupleSplit<T extends any[], N extends number> = [TupleSplitHead<T, N>, TupleSplitTail<T, N>]

declare function applyBind(...args: TupleSplit<Parameters<typeof actualApply>, 2>[1]): ReturnType<typeof actualApply>;

export = applyBind;