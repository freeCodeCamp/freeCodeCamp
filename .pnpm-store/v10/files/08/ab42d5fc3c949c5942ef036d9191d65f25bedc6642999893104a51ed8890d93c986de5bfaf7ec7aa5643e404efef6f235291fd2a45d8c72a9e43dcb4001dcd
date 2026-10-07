import { useEffect, useRef, useMemo } from './reactImports'
import { copyWithStructuralSharing } from './rtkqImports'

export function useStableQueryArgs<T>(queryArgs: T) {
  const cache = useRef(queryArgs)
  const copy = useMemo(
    () => copyWithStructuralSharing(cache.current, queryArgs),
    [queryArgs],
  )
  useEffect(() => {
    if (cache.current !== copy) {
      cache.current = copy
    }
  }, [copy])

  return copy
}
