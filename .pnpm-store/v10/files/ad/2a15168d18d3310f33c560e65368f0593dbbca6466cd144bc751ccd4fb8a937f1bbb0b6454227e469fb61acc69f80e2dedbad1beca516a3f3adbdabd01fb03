import { current, isDraft } from './immerImports'
import { createSelectorCreator, weakMapMemoize } from './reselectImports'

export const createDraftSafeSelectorCreator: typeof createSelectorCreator = (
  ...args: unknown[]
) => {
  const createSelector = (createSelectorCreator as any)(...args)
  const createDraftSafeSelector = Object.assign(
    (...args: unknown[]) => {
      const selector = createSelector(...args)
      const wrappedSelector = (value: unknown, ...rest: unknown[]) =>
        selector(isDraft(value) ? current(value) : value, ...rest)
      Object.assign(wrappedSelector, selector)
      return wrappedSelector as any
    },
    { withTypes: () => createDraftSafeSelector },
  )
  return createDraftSafeSelector
}

/**
 * "Draft-Safe" version of `reselect`'s `createSelector`:
 * If an `immer`-drafted object is passed into the resulting selector's first argument,
 * the selector will act on the current draft value, instead of returning a cached value
 * that might be possibly outdated if the draft has been modified since.
 * @public
 */
export const createDraftSafeSelector =
  /* @__PURE__ */
  createDraftSafeSelectorCreator(weakMapMemoize)
