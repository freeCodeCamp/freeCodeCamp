export function isNotNullish<T>(v: T | null | undefined): v is T {
  return v != null
}

export function filterNullishValues<T>(map?: Map<any, T>) {
  return [...(map?.values() ?? [])].filter(isNotNullish) as NonNullable<T>[]
}
