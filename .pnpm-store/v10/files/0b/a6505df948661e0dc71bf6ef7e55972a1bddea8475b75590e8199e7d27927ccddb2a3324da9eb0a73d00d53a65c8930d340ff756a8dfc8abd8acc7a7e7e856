// Preserve type guard predicate behavior when passing to mapper
export function filterMap<T, U, S extends T = T>(
  array: readonly T[],
  predicate: (item: T, index: number) => item is S,
  mapper: (item: S, index: number) => U | U[],
): U[]

export function filterMap<T, U>(
  array: readonly T[],
  predicate: (item: T, index: number) => boolean,
  mapper: (item: T, index: number) => U | U[],
): U[]

export function filterMap<T, U>(
  array: readonly T[],
  predicate: (item: T, index: number) => boolean,
  mapper: (item: T, index: number) => U | U[],
): U[] {
  return array
    .reduce<(U | U[])[]>((acc, item, i) => {
      if (predicate(item as any, i)) {
        acc.push(mapper(item as any, i))
      }
      return acc
    }, [])
    .flat() as U[]
}
