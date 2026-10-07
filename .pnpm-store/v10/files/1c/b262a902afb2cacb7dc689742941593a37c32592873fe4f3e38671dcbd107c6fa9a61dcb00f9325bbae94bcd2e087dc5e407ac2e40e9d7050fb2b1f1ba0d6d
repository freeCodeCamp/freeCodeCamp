import { useEffect, useRef } from './reactImports'
import { shallowEqual } from './reactReduxImports'

export function useShallowStableValue<T>(value: T) {
  const cache = useRef(value)
  useEffect(() => {
    if (!shallowEqual(cache.current, value)) {
      cache.current = value
    }
  }, [value])

  return shallowEqual(cache.current, value) ? cache.current : value
}
