import type { AnyFunction } from '../types'

/**
 * Runs a check to determine if the given result function behaves as an
 * identity function. An identity function is one that returns its
 * input unchanged, for example, `x => x`. This check helps ensure
 * efficient memoization and prevent unnecessary re-renders by encouraging
 * proper use of transformation logic in result functions and
 * extraction logic in input selectors.
 *
 * @param resultFunc - The result function to be checked.
 * @param inputSelectorsResults - The results of the input selectors.
 * @param outputSelectorResult - The result of the output selector.
 *
 * @see {@link https://reselect.js.org/api/development-only-stability-checks#identityfunctioncheck `identityFunctionCheck`}
 *
 * @since 5.0.0
 * @internal
 */
export const runIdentityFunctionCheck = (
  resultFunc: AnyFunction,
  inputSelectorsResults: unknown[],
  outputSelectorResult: unknown
) => {
  if (
    inputSelectorsResults.length === 1 &&
    inputSelectorsResults[0] === outputSelectorResult
  ) {
    let isInputSameAsOutput = false
    try {
      const emptyObject = {}
      if (resultFunc(emptyObject) === emptyObject) isInputSameAsOutput = true
    } catch {
      // Do nothing
    }
    if (isInputSameAsOutput) {
      let stack: string | undefined = undefined
      try {
        throw new Error()
      } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-extra-semi, no-extra-semi
        ;({ stack } = e as Error)
      }
      console.warn(
        'The result function returned its own inputs without modification. e.g' +
          '\n`createSelector([state => state.todos], todos => todos)`' +
          '\nThis could lead to inefficient memoization and unnecessary re-renders.' +
          '\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.',
        { stack }
      )
    }
  }
}
