// Types

export type $Dictionary<T = unknown> = { [key: string]: T };

export type $SpecialObject = object | Array<string | object>;

// Types Operators

export type $Prune<T> =
  | never
  | { [K in keyof T as [keyof T[K]] extends [never] ? never : K]: T[K] };

/** All the way down. */
export interface $Turtles {
  [x: string]: $Turtles;
}

export type $MergeBy<T, K> = Omit<T, keyof K> & K;

export type $OmitArrayKeys<Arr> = Arr extends readonly any[] ? Omit<Arr, keyof any[]> : Arr;

export type $PreservedValue<Value, Fallback> = [Value] extends [never] ? Fallback : Value;

export type $NormalizeIntoArray<T extends unknown | readonly unknown[]> =
  T extends readonly unknown[] ? T : [T];

/**
 * @typeParam T
 * @example
 * ```
 * $UnionToIntersection<{foo: {bar: string} | {asd: boolean}}> = {foo: {bar: string} & {asd: boolean}}
 * ```
 *
 * @see https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type
 */
type $UnionToIntersection<T> = (T extends unknown ? (k: T) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

/**
 * @typeParam TPath union of strings
 * @typeParam TValue value of the record
 * @example
 * ```
 * $StringKeyPathToRecord<'foo.bar' | 'asd'> = {foo: {bar: string} | {asd: boolean}}
 * ```
 */
type $StringKeyPathToRecordUnion<
  TPath extends string,
  TValue,
> = TPath extends `${infer TKey}.${infer Rest}`
  ? { [Key in TKey]: $StringKeyPathToRecord<Rest, TValue> }
  : { [Key in TPath]: TValue };

/**
 * Used to intersect output of {@link $StringKeyPathToRecordUnion}
 *
 * @typeParam TPath union of strings
 * @typeParam TValue value of the record
 * @example
 * ```
 * $StringKeyPathToRecord<'foo.bar' | 'asd'> = {foo: {bar: string} & {asd: boolean}}
 * ```
 */
export type $StringKeyPathToRecord<TPath extends string, TValue> = $UnionToIntersection<
  $StringKeyPathToRecordUnion<TPath, TValue>
>;

/**
 * We could use NoInfer typescript build-in utility,
 * however this project still supports ts < 5.4.
 *
 * @see https://github.com/millsp/ts-toolbelt/blob/master/sources/Function/NoInfer.ts
 */
export type $NoInfer<A> = [A][A extends any ? 0 : never];
