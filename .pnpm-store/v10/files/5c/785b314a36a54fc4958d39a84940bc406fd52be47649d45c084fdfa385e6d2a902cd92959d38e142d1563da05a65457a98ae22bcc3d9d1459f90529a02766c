// Duplicate some of the utils in `/src/utils` to ensure
// we don't end up dragging in larger chunks of the RTK core
// into the RTKQ bundle

export function getOrInsert<K extends object, V>(
  map: WeakMap<K, V>,
  key: K,
  value: V,
): V
export function getOrInsert<K, V>(map: Map<K, V>, key: K, value: V): V
export function getOrInsert<K extends object, V>(
  map: Map<K, V> | WeakMap<K, V>,
  key: K,
  value: V,
): V {
  if (map.has(key)) return map.get(key) as V

  return map.set(key, value).get(key) as V
}

export function getOrInsertComputed<K extends object, V>(
  map: WeakMap<K, V>,
  key: K,
  compute: (key: K) => V,
): V
export function getOrInsertComputed<K, V>(
  map: Map<K, V>,
  key: K,
  compute: (key: K) => V,
): V
export function getOrInsertComputed<K extends object, V>(
  map: Map<K, V> | WeakMap<K, V>,
  key: K,
  compute: (key: K) => V,
): V {
  if (map.has(key)) return map.get(key) as V

  return map.set(key, compute(key)).get(key) as V
}

export const createNewMap = () => new Map()
